import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist", "public");
const SITE_URL = "https://comfortline.by";
const OG_IMAGE = `${SITE_URL}/opengraph.jpg`;

const routes = [
  {
    pathRu: "/трансфер-минск-вильнюс-аэропорт",
    pathEn: "/minsk-vilnius-airport",
    titleRu: "Трансфер Минск — Аэропорт Вильнюса (VNO) | ComfortLine",
    titleEn: "Minsk to Vilnius Airport (VNO) Private Transfer | ComfortLine",
    descRu: "Трансфер Минск — аэропорт Вильнюса (VNO). Подача от двери, фиксированная цена, опытный водитель, помощь на границе Беларусь–Литва. Заказ онлайн или +375 (29) 155-27-76.",
    descEn: "Private transfer Minsk to Vilnius Airport (VNO). Door-to-door pickup, fixed price, experienced driver, full assistance at the Belarus–Lithuania border. Book online or call +375 (29) 155-27-76.",
    h1Ru: "Трансфер Минск — Аэропорт Вильнюса (VNO)",
    h1En: "Minsk to Vilnius Airport (VNO) Transfer",
    introRu: "Индивидуальный трансфер Минск — аэропорт Вильнюса (VNO) на ваш рейс. Подача от двери в Минске, фиксированная цена, опытный водитель и помощь на границе Беларусь–Литва. Заказать трансфер Минск — Вильнюс аэропорт можно онлайн или по телефону. Маршрут ~175 км через погранпереход Каменный Лог / Котловка обычно занимает 2,5–5 часов.",
    introEn: "Private door-to-door transfer from Minsk to Vilnius International Airport (VNO). Fixed price, professional driver, full assistance at the Belarus–Lithuania border. The ~175 km route via the Kamenny Log / Kotlovka border crossing typically takes 2.5–5 hours.",
  },
  {
    pathRu: "/трансфер-минск-варшава-шопен",
    pathEn: "/minsk-warsaw-airport",
    titleRu: "Трансфер Минск — Аэропорт Варшавы Шопен (WAW) | ComfortLine",
    titleEn: "Minsk to Warsaw Chopin Airport (WAW) Private Transfer | ComfortLine",
    descRu: "Трансфер Минск — аэропорт Варшавы Шопен (WAW). Подача от двери, фиксированная цена, опытный водитель, помощь на границе Беларусь–Польша. Заказ онлайн или +375 (29) 155-27-76.",
    descEn: "Private transfer Minsk to Warsaw Chopin Airport (WAW). Door-to-door pickup, fixed price, experienced driver, full assistance at the Belarus–Poland border. Book online or call +375 (29) 155-27-76.",
    h1Ru: "Трансфер Минск — Аэропорт Варшавы Шопен (WAW)",
    h1En: "Minsk to Warsaw Chopin Airport (WAW) Transfer",
    introRu: "Индивидуальный трансфер Минск — аэропорт Варшавы Шопен (WAW) на ваш рейс. Подача от двери, фиксированная цена, профессиональный водитель. Маршрут ~550 км через погранпереход Брест/Тересполь обычно занимает 6–10 часов.",
    introEn: "Private transfer Minsk to Warsaw Chopin Airport (WAW). Door-to-door pickup, fixed price, professional chauffeur. The ~550 km route via the Brest / Terespol border crossing typically takes 6–10 hours.",
  },
  {
    pathRu: "/трансфер-минск-варшава-модлин",
    pathEn: "/minsk-warsaw-modlin-airport",
    titleRu: "Трансфер Минск — Аэропорт Варшава-Модлин (WMI) | ComfortLine",
    titleEn: "Minsk to Warsaw Modlin Airport (WMI) Private Transfer | ComfortLine",
    descRu: "Трансфер Минск — аэропорт Варшава-Модлин (WMI). Бюджетный хаб Ryanair и Wizz Air. Фиксированная цена, опытный водитель, помощь на границе. +375 (29) 155-27-76.",
    descEn: "Private transfer Minsk to Warsaw Modlin Airport (WMI). Ryanair and Wizz Air budget hub. Fixed price, experienced driver, border assistance. +375 (29) 155-27-76.",
    h1Ru: "Трансфер Минск — Аэропорт Варшава-Модлин (WMI)",
    h1En: "Minsk to Warsaw Modlin Airport (WMI) Transfer",
    introRu: "Индивидуальный трансфер Минск — аэропорт Варшава-Модлин (WMI). Бюджетный хаб Ryanair и Wizz Air, в 35 км от центра Варшавы. Фиксированная цена, опытный водитель.",
    introEn: "Private transfer Minsk to Warsaw Modlin Airport (WMI). Ryanair and Wizz Air budget hub, 35 km north of central Warsaw. Fixed price, professional chauffeur.",
  },
];

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildHtml(template, route, lang) {
  const isRu = lang === "ru";
  const title = isRu ? route.titleRu : route.titleEn;
  const desc = isRu ? route.descRu : route.descEn;
  const h1 = isRu ? route.h1Ru : route.h1En;
  const intro = isRu ? route.introRu : route.introEn;
  const localPath = isRu ? route.pathRu : route.pathEn;
  const altPath = isRu ? route.pathEn : route.pathRu;
  const canonicalUrl = SITE_URL + encodeURI(localPath);
  const altUrl = SITE_URL + encodeURI(altPath);
  const ogLocale = isRu ? "ru_RU" : "en_US";
  const ogLocaleAlt = isRu ? "en_US" : "ru_RU";

  let html = template;

  html = html.replace(/<html lang="[^"]*">/, `<html lang="${lang}">`);
  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeHtml(title)}</title>`,
  );
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/>/,
    `<meta name="description" content="${escapeHtml(desc)}" />`,
  );
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${canonicalUrl}" />`,
  );

  const isWarsaw = route.pathEn.includes("warsaw");
  const isVilnius = route.pathEn.includes("vilnius");
  const destGeo = isWarsaw
    ? { region: "PL-MZ", placename: "Warsaw", pos: "52.2297;21.0122" }
    : isVilnius
      ? { region: "LT-VL", placename: "Vilnius", pos: "54.6872;25.2797" }
      : null;
  if (destGeo) {
    html = html.replace(
      /<meta name="geo\.region" content="[^"]*"\s*\/>/,
      `<meta name="geo.region" content="${destGeo.region}" />\n    <meta name="geo.region" content="BY-MI" />`,
    );
    html = html.replace(
      /<meta name="geo\.placename" content="[^"]*"\s*\/>/,
      `<meta name="geo.placename" content="Minsk – ${destGeo.placename}" />`,
    );
    html = html.replace(
      /<meta name="geo\.position" content="[^"]*"\s*\/>/,
      `<meta name="geo.position" content="${destGeo.pos}" />`,
    );
  }

  html = html.replace(
    /<meta property="og:locale" content="[^"]*"\s*\/>/,
    `<meta property="og:locale" content="${ogLocale}" />`,
  );
  html = html.replace(
    /<meta property="og:locale:alternate" content="[^"]*"\s*\/>/,
    `<meta property="og:locale:alternate" content="${ogLocaleAlt}" />`,
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${escapeHtml(desc)}" />`,
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${canonicalUrl}" />`,
  );

  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${escapeHtml(desc)}" />`,
  );

  const hreflang = `
    <link rel="alternate" hreflang="ru" href="${SITE_URL + encodeURI(route.pathRu)}" />
    <link rel="alternate" hreflang="en" href="${SITE_URL + encodeURI(route.pathEn)}" />
    <link rel="alternate" hreflang="x-default" href="${SITE_URL + encodeURI(route.pathRu)}" />`;
  html = html.replace(
    /<!-- hreflang alternates are injected[^>]*-->/,
    hreflang,
  );

  const taxiJsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: title,
    description: desc,
    url: canonicalUrl,
    provider: { "@id": "https://comfortline.by#business" },
    areaServed: [
      { "@type": "Place", name: "Minsk" },
      { "@type": "Place", name: isRu ? (route.pathRu.includes("вильнюс") ? "Вильнюс" : "Варшава") : (route.pathEn.includes("vilnius") ? "Vilnius" : "Warsaw") },
    ],
    inLanguage: lang,
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isRu ? "Главная" : "Home", item: SITE_URL + "/" },
      { "@type": "ListItem", position: 2, name: title, item: canonicalUrl },
    ],
  };

  const extraJsonLd = `
    <script type="application/ld+json">${JSON.stringify(taxiJsonLd)}</script>
    <script type="application/ld+json">${JSON.stringify(breadcrumbJsonLd)}</script>`;
  html = html.replace("</head>", `${extraJsonLd}\n  </head>`);

  const seoBlock = `<div id="root"><div style="position:absolute;left:-9999px;top:-9999px;" aria-hidden="true"><h1>${escapeHtml(h1)}</h1><p>${escapeHtml(intro)}</p><p><a href="${altUrl}" hreflang="${isRu ? "en" : "ru"}">${isRu ? "English version" : "Русская версия"}</a></p></div></div>`;
  html = html.replace('<div id="root"></div>', seoBlock);

  return html;
}

function emit(routePath, html) {
  const folderRel = decodeURIComponent(routePath).replace(/^\//, "");
  const folder = path.join(DIST, folderRel);
  fs.mkdirSync(folder, { recursive: true });
  fs.writeFileSync(path.join(folder, "index.html"), html, "utf8");
  return path.relative(DIST, path.join(folder, "index.html"));
}

function main() {
  const templatePath = path.join(DIST, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error(`[prerender] template not found: ${templatePath}`);
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, "utf8");
  const written = [];
  for (const route of routes) {
    written.push(emit(route.pathRu, buildHtml(template, route, "ru")));
    written.push(emit(route.pathEn, buildHtml(template, route, "en")));
  }
  console.log(`[prerender] wrote ${written.length} files:`);
  for (const f of written) console.log(`  - ${f}`);
}

main();
