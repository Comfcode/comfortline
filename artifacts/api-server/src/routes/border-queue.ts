import { Router, type IRouter, type Request } from "express";
import type { BorderQueueCheckpoint, BorderQueueStatus } from "@workspace/api-zod";

const router: IRouter = Router();

const CACHE_TTL_MS = 5 * 60 * 1000;
const FORCE_REFRESH_COOLDOWN_MS = 20 * 1000;
const JINA_READER_URL = "https://r.jina.ai/https://mon.declarant.by/%23/zone";

type CachedQueue = {
  fetchedAt: number;
  updatedAt: string | null;
  checkpoints: BorderQueueCheckpoint[];
};

let cache: CachedQueue | null = null;
let inFlight: Promise<{ updatedAt: string | null; checkpoints: BorderQueueCheckpoint[] }> | null =
  null;

function parseQueueMarkdown(markdown: string): {
  updatedAt: string | null;
  checkpoints: BorderQueueCheckpoint[];
} {
  let updatedAt: string | null = null;
  const checkpoints: BorderQueueCheckpoint[] = [];

  for (const rawLine of markdown.split("\n")) {
    const line = rawLine.trim();

    const statusMatch = line.match(/По состоянию на:\s*(.+)/);
    if (statusMatch) {
      updatedAt = statusMatch[1].trim();
      continue;
    }

    if (!line.startsWith("|")) continue;

    const cells = line
      .split("|")
      .map((cell) => cell.trim())
      .filter((cell) => cell !== "");

    if (cells.length !== 7) continue;
    if (cells[0] === "Название") continue;
    if (cells.every((cell) => /^-+$/.test(cell))) continue;

    const [name, cars, trucks, buses, moto, total, priority] = cells;
    if (!name) continue;

    checkpoints.push({
      name,
      cars: Number(cars) || 0,
      trucks: Number(trucks) || 0,
      buses: Number(buses) || 0,
      moto: Number(moto) || 0,
      total: Number(total) || 0,
      priority: Number(priority) || 0,
    });
  }

  return { updatedAt, checkpoints };
}

async function fetchQueue(
  log: Request["log"],
): Promise<{ updatedAt: string | null; checkpoints: BorderQueueCheckpoint[] }> {
  const res = await fetch(JINA_READER_URL, {
    headers: {
      "x-wait-for-selector": "tbody tr",
      "x-no-cache": "true",
      "x-timeout": "25",
    },
  });

  if (!res.ok) {
    log.error({ status: res.status }, "Jina reader request for border queue failed");
    throw new Error(`HTTP ${res.status}`);
  }

  const text = await res.text();
  const parsed = parseQueueMarkdown(text);

  if (parsed.checkpoints.length === 0) {
    throw new Error("No checkpoints parsed from border queue source");
  }

  return parsed;
}

router.get("/border-queue", async (req, res): Promise<void> => {
  const now = Date.now();
  const forceRequested = req.query.force === "true" || req.query.force === "1";
  const cooldownElapsed = !cache || now - cache.fetchedAt >= FORCE_REFRESH_COOLDOWN_MS;
  const force = forceRequested && cooldownElapsed;

  if (!force && cache && now - cache.fetchedAt < CACHE_TTL_MS) {
    const body: BorderQueueStatus = {
      updatedAt: cache.updatedAt,
      fetchedAt: new Date(cache.fetchedAt).toISOString(),
      checkpoints: cache.checkpoints,
      stale: false,
      error: false,
    };
    res.json(body);
    return;
  }

  try {
    if (!inFlight) {
      inFlight = fetchQueue(req.log).finally(() => {
        inFlight = null;
      });
    }
    const { updatedAt, checkpoints } = await inFlight;
    cache = { fetchedAt: now, updatedAt, checkpoints };

    const body: BorderQueueStatus = {
      updatedAt,
      fetchedAt: new Date(now).toISOString(),
      checkpoints,
      stale: false,
      error: false,
    };
    res.json(body);
  } catch (err) {
    req.log.warn({ err }, "Border queue fetch failed, serving stale or empty");

    if (cache) {
      const body: BorderQueueStatus = {
        updatedAt: cache.updatedAt,
        fetchedAt: new Date(cache.fetchedAt).toISOString(),
        checkpoints: cache.checkpoints,
        stale: true,
        error: false,
      };
      res.json(body);
    } else {
      const body: BorderQueueStatus = {
        updatedAt: null,
        fetchedAt: new Date(now).toISOString(),
        checkpoints: [],
        stale: false,
        error: true,
      };
      res.json(body);
    }
  }
});

export default router;
