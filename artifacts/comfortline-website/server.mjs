/**
 * Production SPA server for ComfortLine website.
 *
 * Why this exists instead of static serving:
 *   Replit's static server rewrites all unknown paths to index.html with HTTP 200.
 *   Search engines (Yandex, Google) test non-existent URLs and expect HTTP 404.
 *   "Soft 404" (HTML page served with 200) causes indexing warnings in Search Console.
 *
 * Behaviour:
 *   - Static asset files (JS/CSS/images/fonts) → 200 + file
 *   - Known SPA routes                          → 200 + index.html
 *   - Everything else                           → 404 + index.html (noindex via JS)
 */

import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, "dist", "public");

const MIME = {
  ".html":  "text/html; charset=utf-8",
  ".css":   "text/css; charset=utf-8",
  ".js":    "application/javascript; charset=utf-8",
  ".mjs":   "application/javascript; charset=utf-8",
  ".json":  "application/json",
  ".xml":   "application/xml; charset=utf-8",
  ".txt":   "text/plain; charset=utf-8",
  ".svg":   "image/svg+xml",
  ".png":   "image/png",
  ".jpg":   "image/jpeg",
  ".jpeg":  "image/jpeg",
  ".webp":  "image/webp",
  ".gif":   "image/gif",
  ".ico":   "image/x-icon",
  ".woff":  "font/woff",
  ".woff2": "font/woff2",
  ".ttf":   "font/ttf",
  ".pdf":   "application/pdf",
};

// ---------------------------------------------------------------------------
// All valid SPA routes. Non-listed paths get HTTP 404 + index.html.
// Keep in sync with App.tsx routes.
// ---------------------------------------------------------------------------
const KNOWN = new Set([
  "/",
  "/privacy",
  "/terms",
  "/faq",
  // Airport transfers (EN + RU)
  "/minsk-vilnius-airport",        "/трансфер-минск-вильнюс-аэропорт",
  "/minsk-warsaw-airport",         "/трансфер-минск-варшава-шопен",
  "/minsk-warsaw-modlin-airport",  "/трансфер-минск-варшава-модлин",
  "/minsk-kaunas-airport",         "/трансфер-минск-каунас-аэропорт",
  "/minsk-riga-airport",           "/трансфер-минск-рига-аэропорт",
  // City / destination transfers
  "/warsaw-transfer",              "/трансфер-варшава",
  "/berlin-transfer",              "/трансфер-берлин",
  "/prague-transfer",              "/трансфер-прага",
  "/riga-transfer",                "/трансфер-рига",
  "/minsk-city-transfer",          "/трансфер-по-минску",
  "/belarus-transfer",             "/трансфер-по-беларуси",
  "/group-transfer",               "/групповой-трансфер",
  "/sanatorium-transfer",          "/трансфер-в-санаторий",
  "/ski-transfer",                 "/лыжный-трансфер",
  "/vip-transfer",                 "/вип-трансфер",
  // Vehicle pages
  "/mercedes-e-class-transfer",    "/трансфер-мерседес-е-класс",
  "/mercedes-v-class-transfer",    "/трансфер-мерседес-в-класс",
  "/kia-carnival-transfer",        "/трансфер-киа-карнавал",
  "/hyundai-palisade-transfer",    "/трансфер-хендай-палисад",
  "/audi-a6-transfer",             "/трансфер-ауди-а6",
  "/fiat-scudo-transfer",          "/трансфер-фиат-скудо",
  // Blog index
  "/blog",                         "/блог",
  // Europe hub + country pages
  "/europe-transfer",              "/трансфер-в-европу",
  "/lithuania-transfer",           "/трансфер-в-литву",
  "/latvia-transfer",              "/трансфер-в-латвию",
  "/poland-transfer",              "/трансфер-в-польшу",
  "/france-transfer",              "/трансфер-во-францию",
  "/germany-transfer",             "/трансфер-в-германию",
  // City transfers
  "/minsk-kaunas-transfer",              "/трансфер-минск-каунас",
  "/minsk-palanga-transfer",             "/трансфер-минск-паланга",
  "/minsk-klaipeda-transfer",            "/трансфер-минск-клайпеда",
  "/minsk-druskininkai-transfer",        "/трансфер-минск-друскининкай",
  // Utility (noindex, but still valid routes)
  "/brandbook",
  "/thank-you",
]);

/** Returns true if decoded pathname corresponds to a valid SPA route. */
function isKnownRoute(pathname) {
  const p = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  if (KNOWN.has(p)) return true;
  // Blog article routes: /blog/:slug  or  /блог/:slug
  if (/^\/(blog|блог)\/.+/.test(p)) return true;
  return false;
}

// ---------------------------------------------------------------------------
// Request handler
// ---------------------------------------------------------------------------
const INDEX_PATH = path.join(PUBLIC_DIR, "index.html");

const server = http.createServer((req, res) => {
  try {
    const url = new URL(req.url ?? "/", `http://localhost`);
    const rawPath = url.pathname;

    // --- 0. Normalise trailing slashes: /path/ → /path (permanent redirect) ---
    if (rawPath !== "/" && rawPath.endsWith("/")) {
      const canonical = rawPath.replace(/\/+$/, "") + (url.search || "");
      res.writeHead(301, { "Location": canonical, "Cache-Control": "public, max-age=86400" });
      res.end();
      return;
    }

    // --- 1. Static asset? Serve the file directly ---
    const filePath = path.normalize(path.join(PUBLIC_DIR, rawPath));

    // Guard against directory-traversal attacks
    if (!filePath.startsWith(PUBLIC_DIR + path.sep) && filePath !== PUBLIC_DIR) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const mime = MIME[ext] ?? "application/octet-stream";
      // Hashed assets (Vite appends content hash) can be cached forever.
      // HTML must revalidate so users always get the latest app shell.
      const cache = ext === ".html" ? "no-cache" : "public, max-age=31536000, immutable";
      res.writeHead(200, { "Content-Type": mime, "Cache-Control": cache });
      fs.createReadStream(filePath).pipe(res);
      return;
    }

    // --- 2. SPA route: return index.html with the correct HTTP status ---
    const decoded = decodeURIComponent(rawPath);
    const status = isKnownRoute(decoded) ? 200 : 404;

    const html = fs.readFileSync(INDEX_PATH);
    res.writeHead(status, {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-cache",
    });
    res.end(html);
  } catch {
    res.writeHead(500);
    res.end("Internal Server Error");
  }
});

server.listen(PORT, () => {
  process.stdout.write(`ComfortLine website on port ${PORT}\n`);
});
