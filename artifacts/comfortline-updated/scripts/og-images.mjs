import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { collectAllRoutes } from "./route-manifest.mjs";
import { BUSINESS } from "../src/seo/seo-config.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist", "public");
const OG_DIR = path.join(DIST, "og");

const W = 1200;
const H = 630;
const BG = "#0a0a0c";
const GOLD = "#B59C73";
const FG = "#ffffff";
const MUTED = "#a1a1aa";
const MAX_SUBTITLE_LEN = 90;

function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function truncate(s, max) {
  if (!s) return "";
  return s.length > max ? `${s.slice(0, max - 1).trimEnd()}\u2026` : s;
}

/**
 * Derive the { title, subtitle } text overlay for an OG image straight from
 * a route's SEO fields, so every route in the shared manifest (built once in
 * route-manifest.mjs and also consumed by prerender.mjs) automatically gets
 * a matching preview image — no separate hard-coded list to keep in sync.
 *
 * Locale-aware: English pages must render an English overlay, not the
 * Russian copy every route defines first — otherwise the social preview
 * looks unfinished/wrong-language when an English URL is shared.
 */
function textFor(route, lang) {
  if (lang === "en") {
    const title = route.h1En || route.titleEn;
    const subtitle = truncate(route.introEn || route.descEn || "", MAX_SUBTITLE_LEN);
    return { title, subtitle };
  }
  const title = route.h1Ru || route.titleRu;
  const subtitle = truncate(route.introRu || route.descRu || "", MAX_SUBTITLE_LEN);
  return { title, subtitle };
}

function svgFor({ title, subtitle }) {
  const safeTitle = escapeXml(title);
  const safeSubtitle = escapeXml(subtitle);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${BG}"/>
        <stop offset="100%" stop-color="#16161b"/>
      </linearGradient>
      <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#8a7350"/>
        <stop offset="50%" stop-color="${GOLD}"/>
        <stop offset="100%" stop-color="#d4bd91"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#bg)"/>
    <rect x="0" y="0" width="14" height="${H}" fill="url(#gold)"/>
    <g transform="translate(80, 100)">
      <text x="0" y="0" fill="${GOLD}" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="28" letter-spacing="6">COMFORTLINE</text>
    </g>
    <g transform="translate(80, 290)">
      <text x="0" y="0" fill="${FG}" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="60">${safeTitle}</text>
    </g>
    <g transform="translate(80, 360)">
      <text x="0" y="0" fill="${MUTED}" font-family="Arial, Helvetica, sans-serif" font-weight="400" font-size="30">${safeSubtitle}</text>
    </g>
    <g transform="translate(80, 540)">
      <text x="0" y="0" fill="${FG}" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="24">comfortline.by</text>
      <text x="350" y="0" fill="${MUTED}" font-family="Arial, Helvetica, sans-serif" font-weight="400" font-size="24">${escapeXml(BUSINESS.phoneDisplay)}</text>
    </g>
  </svg>`;
}

async function main() {
  if (!fs.existsSync(DIST)) {
    console.error("[og] dist/public not found, run vite build first");
    process.exit(1);
  }
  fs.mkdirSync(OG_DIR, { recursive: true });

  const { allRoutes } = collectAllRoutes();

  // Multiple manifest entries can share the same ogSlug only by mistake;
  // de-dupe defensively so we never overwrite/regenerate the same file twice.
  // Each route gets a RU and an EN image (/og/<slug>-ru.jpg, /og/<slug>-en.jpg)
  // built from that language's own fields, so English pages never advertise
  // a Russian-language social preview.
  const seen = new Set();
  let count = 0;
  for (const route of allRoutes) {
    if (!route.ogSlug || seen.has(route.ogSlug)) continue;
    seen.add(route.ogSlug);

    for (const lang of ["ru", "en"]) {
      const outPath = path.join(OG_DIR, `${route.ogSlug}-${lang}.jpg`);
      try {
        const svg = svgFor(textFor(route, lang));
        await sharp(Buffer.from(svg)).jpeg({ quality: 90, mozjpeg: true }).toFile(outPath);
        console.log(`[og] ${route.ogSlug}-${lang}.jpg`);
        count++;
      } catch (error) {
        // Social artwork is an enhancement; one problematic text overlay must
        // never prevent the HTML, sitemap, or SEO validation from building.
        console.warn(`[og] skipped ${route.ogSlug}-${lang}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  }
  console.log(`[og] generated ${count} OG images in dist/public/og/`);
}

main().catch((e) => {
  console.error("[og] failed:", e);
  process.exit(1);
});
