import { Router, type IRouter, type Request } from "express";

const router: IRouter = Router();

const CACHE_TTL_MS = 6 * 60 * 60 * 1000;
const FETCH_LIMIT = 12;
const GRAPH_BASE = "https://graph.instagram.com";

type InstagramMedia = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};

type InstagramApiResponse = {
  data?: InstagramMedia[];
  error?: { message?: string; code?: number };
};

type CachedFeed = {
  fetchedAt: number;
  posts: InstagramMedia[];
};

let cache: CachedFeed | null = null;
let inFlight: Promise<InstagramMedia[]> | null = null;

async function fetchPosts(
  token: string,
  log: Request["log"],
): Promise<InstagramMedia[]> {
  const fields =
    "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
  const url =
    `${GRAPH_BASE}/me/media` +
    `?fields=${fields}` +
    `&limit=${FETCH_LIMIT}` +
    `&access_token=${encodeURIComponent(token)}`;

  const res = await fetch(url);
  const json = (await res.json()) as InstagramApiResponse;

  if (!res.ok || json.error) {
    log.error(
      { status: res.status, error: json.error },
      "Instagram Graph API request failed",
    );
    throw new Error(json.error?.message ?? `HTTP ${res.status}`);
  }

  return json.data ?? [];
}

router.get("/instagram/posts", async (req, res) => {
  const token = process.env["INSTAGRAM_ACCESS_TOKEN"];

  if (!token) {
    res.json({ posts: [], configured: false });
    return;
  }

  const now = Date.now();
  if (cache && now - cache.fetchedAt < CACHE_TTL_MS) {
    res.json({ posts: cache.posts, configured: true, cached: true });
    return;
  }

  try {
    if (!inFlight) {
      inFlight = fetchPosts(token, req.log).finally(() => {
        inFlight = null;
      });
    }
    const posts = await inFlight;
    cache = { fetchedAt: now, posts };
    res.json({ posts, configured: true, cached: false });
  } catch (err) {
    req.log.warn({ err }, "Instagram fetch failed, serving stale or empty");
    if (cache) {
      res.json({ posts: cache.posts, configured: true, cached: true, stale: true });
    } else {
      res.json({ posts: [], configured: true, error: true });
    }
  }
});

export default router;
