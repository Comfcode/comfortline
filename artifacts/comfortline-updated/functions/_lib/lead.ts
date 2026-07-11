export interface Env {
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
  LEAD_WEBHOOK_URL?: string;
  LEAD_WEBHOOK_SECRET?: string;
}

const ALLOWED_ORIGINS = new Set([
  "https://comfortline.by",
  "https://www.comfortline.by",
  "https://comfortline-codex.pages.dev",
]);

function clean(value: unknown, max = 500): string {
  return typeof value === "string" ? value.trim().slice(0, max) : String(value ?? "").slice(0, max);
}

function response(body: object, status: number): Response {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" },
  });
}

export async function handleLead(request: Request, env: Env, kind: "booking" | "contact"): Promise<Response> {
  if (request.method !== "POST") return response({ error: "Method not allowed" }, 405);
  const origin = request.headers.get("Origin");
  if (origin && !ALLOWED_ORIGINS.has(origin) && !origin.endsWith(".comfortline-codex.pages.dev")) {
    return response({ error: "Origin not allowed" }, 403);
  }
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return response({ error: "JSON required" }, 415);
  }

  let raw: Record<string, unknown>;
  try {
    raw = await request.json();
  } catch {
    return response({ error: "Invalid JSON" }, 400);
  }
  const phone = clean(raw.phone, 40);
  const name = clean(raw.name, 120);
  if (!name || phone.replace(/\D/g, "").length < 9) return response({ error: "Invalid contact details" }, 400);

  const payload = Object.fromEntries(
    Object.entries(raw).map(([key, value]) => [key.slice(0, 50), clean(value, key === "comment" || key === "message" ? 1500 : 300)]),
  );
  const title = kind === "booking" ? "New ComfortLine booking" : "New ComfortLine contact request";
  const text = [title, ...Object.entries(payload).map(([key, value]) => `${key}: ${value}`)].join("\n");

  if (env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID) {
    const telegram = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text, disable_web_page_preview: true }),
    });
    if (telegram.ok) return response({ ok: true }, 200);
  }

  if (env.LEAD_WEBHOOK_URL) {
    const webhook = await fetch(env.LEAD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(env.LEAD_WEBHOOK_SECRET ? { Authorization: `Bearer ${env.LEAD_WEBHOOK_SECRET}` } : {}),
      },
      body: JSON.stringify({ type: kind, source: "comfortline.by", submittedAt: new Date().toISOString(), ...payload }),
    });
    if (webhook.ok) return response({ ok: true }, 200);
  }

  return response({ error: "Lead delivery is not configured" }, 503);
}
