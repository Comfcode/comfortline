import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist", "public");
const OG_DIR = path.join(DIST, "og");

const W = 1200;
const H = 630;
const BG = "#0a0a0c";
const GOLD = "#B59C73";
const FG = "#ffffff";
const MUTED = "#a1a1aa";

// Routes that should get a custom OG image. The slug becomes the filename
// (slug.jpg) and is referenced by prerender.mjs as /og/<slug>.jpg.
export const OG_ROUTES = [
  { slug: "minsk-vilnius-airport", title: "Минск \u2014 Вильнюс (VNO)", subtitle: "Премиум-трансфер \u00B7 фикс. цена \u00B7 от двери" },
  { slug: "minsk-warsaw-airport", title: "Минск \u2014 Варшава (WAW)", subtitle: "Премиум-трансфер \u00B7 фикс. цена \u00B7 от двери" },
  { slug: "minsk-warsaw-modlin-airport", title: "Минск \u2014 Варшава Модлин (WMI)", subtitle: "Премиум-трансфер \u00B7 хаб Ryanair и Wizz Air" },
  { slug: "minsk-kaunas-airport", title: "Минск \u2014 Каунас (KUN)", subtitle: "Премиум-трансфер \u00B7 фикс. цена \u00B7 от двери" },
  { slug: "blog-index", title: "Блог ComfortLine", subtitle: "Гайды по трансферу, границе и аэропортам" },
  // Articles
  { slug: "blog-granitsa-belarus-litva", title: "Граница Беларусь \u2014 Литва", subtitle: "Время, документы, КПП в 2026" },
  { slug: "blog-stoimost-transfer-minsk-varshava", title: "Стоимость трансфера Минск \u2014 Варшава", subtitle: "Из чего складывается цена" },
  { slug: "blog-chto-nelzya-vvozit-v-es", title: "Что нельзя ввозить из Беларуси в ЕС", subtitle: "Полный список запретов и лимитов" },
  { slug: "blog-kakoy-kpp-vybrat", title: "Каменный Лог \u00B7 Котловка \u00B7 Бенякони", subtitle: "Какой КПП выбрать в 2026" },
  { slug: "blog-transfer-s-detmi", title: "Трансфер с детьми из Минска", subtitle: "Чек-лист и советы родителям" },
  { slug: "blog-kak-dobratsya-do-vno", title: "Как добраться из Минска в аэропорт VNO", subtitle: "Все способы, цены и время" },
  { slug: "blog-sovetskie-mozaiki-minska", title: "Советские мозаики Минска", subtitle: "Гид по монументальному искусству города" },
];

function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function svgFor(route) {
  const title = escapeXml(route.title);
  const subtitle = escapeXml(route.subtitle);
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
      <text x="0" y="0" fill="${FG}" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="68">${title}</text>
    </g>
    <g transform="translate(80, 360)">
      <text x="0" y="0" fill="${MUTED}" font-family="Arial, Helvetica, sans-serif" font-weight="400" font-size="32">${subtitle}</text>
    </g>
    <g transform="translate(80, 540)">
      <text x="0" y="0" fill="${FG}" font-family="Arial, Helvetica, sans-serif" font-weight="600" font-size="24">comfortline.by</text>
      <text x="350" y="0" fill="${MUTED}" font-family="Arial, Helvetica, sans-serif" font-weight="400" font-size="24">+375 (29) 155-27-76</text>
    </g>
  </svg>`;
}

async function main() {
  if (!fs.existsSync(DIST)) {
    console.error("[og] dist/public not found, run vite build first");
    process.exit(1);
  }
  fs.mkdirSync(OG_DIR, { recursive: true });
  for (const route of OG_ROUTES) {
    const svg = svgFor(route);
    const outPath = path.join(OG_DIR, `${route.slug}.jpg`);
    await sharp(Buffer.from(svg)).jpeg({ quality: 90, mozjpeg: true }).toFile(outPath);
    console.log(`[og] ${route.slug}.jpg`);
  }
  console.log(`[og] generated ${OG_ROUTES.length} OG images in dist/public/og/`);
}

main().catch((e) => {
  console.error("[og] failed:", e);
  process.exit(1);
});
