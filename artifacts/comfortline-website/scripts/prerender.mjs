import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PAGES_DIR = path.join(ROOT, "src", "pages");
const DIST = path.join(ROOT, "dist", "public");
const SITE_URL = "https://comfortline.by";
const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph.jpg`;

// ============================================================================
// Generic source-extraction helpers.
//
// Route metadata (titles, descriptions, H1s, intros) lives inline in the page
// components and in src/data/blog-articles.ts. Rather than hand-copy it into
// this script (which drifts out of sync — see the EN/RU blog bug this file
// used to have), we parse it directly out of the source files at build time.
// ============================================================================

function extractObjectLiteral(src, markerRegex) {
  const m = markerRegex.exec(src);
  if (!m) return null;
  const searchFrom = m.index + m[0].length;
  const braceStart = src.indexOf("{", searchFrom);
  if (braceStart === -1) return null;
  let depth = 0;
  for (let i = braceStart; i < src.length; i++) {
    if (src[i] === "{") depth++;
    else if (src[i] === "}") {
      depth--;
      if (depth === 0) return src.slice(braceStart, i + 1);
    }
  }
  return null;
}

/** Like extractObjectLiteral but for a `[...]` array literal following the marker. */
function extractArrayLiteral(src, markerRegex) {
  const m = markerRegex.exec(src);
  if (!m) return null;
  const searchFrom = m.index + m[0].length;
  const bracketStart = src.indexOf("[", searchFrom);
  if (bracketStart === -1) return null;
  let depth = 0;
  for (let i = bracketStart; i < src.length; i++) {
    if (src[i] === "[") depth++;
    else if (src[i] === "]") {
      depth--;
      if (depth === 0) return src.slice(bracketStart, i + 1);
    }
  }
  return null;
}

/** Extract `{ q: "...", a: "..." }` FAQ entries from a `faq: [...]` array literal string. */
function extractFaqEntries(blockStr) {
  if (!blockStr) return [];
  const arrStr = extractArrayLiteral(blockStr, /\bfaq:\s*/);
  if (!arrStr) return [];
  const objStrs = splitTopLevelObjects(arrStr);
  const entries = [];
  for (const objStr of objStrs) {
    const q = field(objStr, "q");
    const a = field(objStr, "a");
    if (q && a) entries.push({ question: q, answer: a });
  }
  return entries;
}

function splitTopLevelObjects(arrayBodyStr) {
  const objects = [];
  let depth = 0;
  let start = -1;
  for (let i = 0; i < arrayBodyStr.length; i++) {
    const c = arrayBodyStr[i];
    if (c === "{") {
      if (depth === 0) start = i;
      depth++;
    } else if (c === "}") {
      depth--;
      if (depth === 0 && start !== -1) {
        objects.push(arrayBodyStr.slice(start, i + 1));
        start = -1;
      }
    }
  }
  return objects;
}

function unescapeJsString(s) {
  return s.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
}

/** Extract a `key: "value"` field from a plain JS object literal string. */
function field(objStr, name) {
  if (!objStr) return null;
  const re = new RegExp(name + ':\\s*"((?:[^"\\\\]|\\\\.)*)"');
  const m = re.exec(objStr);
  return m ? unescapeJsString(m[1]) : null;
}

/** Extract a numeric `key: 123` field from a plain JS object literal string. */
function numField(objStr, name) {
  if (!objStr) return null;
  const re = new RegExp(name + ":\\s*(\\d+)");
  const m = re.exec(objStr);
  return m ? Number(m[1]) : null;
}

/** Extract a `key="value"` prop from a JSX tag's attribute string. */
function attr(tagStr, name) {
  if (!tagStr) return null;
  const re = new RegExp(name + '="((?:[^"\\\\]|\\\\.)*)"');
  const m = re.exec(tagStr);
  return m ? unescapeJsString(m[1]) : null;
}

function stripComfortLineSuffix(s) {
  return s ? s.replace(/\s*\|\s*ComfortLine.*$/i, "").trim() : s;
}

function slugFromPath(p) {
  return p.replace(/^\//, "").replace(/\//g, "-") || "home";
}

// ----------------------------------------------------------------------------
// Auto-extraction over src/pages/*.tsx
//
// Two conventions are used across the codebase:
//  (a) `const data: RoutePageData/CountryPageData = { ru: {...}, en: {...}, seo: {...} }`
//  (b) `<Seo titleRu="..." titleEn="..." .../>` + `const content = { ru: {...}, en: {...} }`
// ----------------------------------------------------------------------------

const TEMPLATE_FILES = new Set([
  "route-landing-page.tsx",
  "country-transfer-page.tsx",
  "vehicle-page.tsx",
  "not-found.tsx",
]);
// Handled with hand-curated entries below because they don't fit either
// convention (query-param language switch, or a bespoke content shape).
const MANUAL_FILES = new Set(["landing.tsx", "faq.tsx", "terms.tsx", "privacy-policy.tsx"]);
// Excluded entirely: brandbook is noindex, thank-you has no static <Seo/> (client-only redirect target).
const EXCLUDED_FILES = new Set(["brandbook.tsx", "thank-you.tsx"]);

function extractRouteFromPageSource(src) {
  const dataObj = extractObjectLiteral(src, /const\s+data\s*:\s*\w+\s*=\s*/);
  if (dataObj) {
    const ruBlock = extractObjectLiteral(dataObj, /\bru:\s*/);
    const enBlock = extractObjectLiteral(dataObj, /\ben:\s*/);
    const seoBlock = extractObjectLiteral(dataObj, /\bseo:\s*/);
    if (!seoBlock) return null;
    return {
      h1Ru: field(ruBlock, "title"),
      introRu: field(ruBlock, "subtitle"),
      h1En: field(enBlock, "title"),
      introEn: field(enBlock, "subtitle"),
      titleRu: field(seoBlock, "titleRu"),
      titleEn: field(seoBlock, "titleEn"),
      descRu: field(seoBlock, "descRu"),
      descEn: field(seoBlock, "descEn"),
      pathRu: field(seoBlock, "pathRu"),
      pathEn: field(seoBlock, "pathEn"),
    };
  }

  const seoTagMatch = /<Seo\b([\s\S]*?)\/>/.exec(src);
  if (!seoTagMatch) return null;
  const seoTag = seoTagMatch[1];
  if (/\bnoindex\b/.test(seoTag)) return null;

  const contentObj = extractObjectLiteral(src, /const\s+content\s*=\s*/);
  const ruBlock = contentObj ? extractObjectLiteral(contentObj, /\bru:\s*/) : null;
  const enBlock = contentObj ? extractObjectLiteral(contentObj, /\ben:\s*/) : null;

  const titleRu = attr(seoTag, "titleRu");
  const titleEn = attr(seoTag, "titleEn");
  const descRu = attr(seoTag, "descRu");
  const descEn = attr(seoTag, "descEn");

  return {
    h1Ru: field(ruBlock, "title") || stripComfortLineSuffix(titleRu),
    introRu: field(ruBlock, "subtitle") || field(ruBlock, "seoIntro") || descRu,
    h1En: field(enBlock, "title") || stripComfortLineSuffix(titleEn),
    introEn: field(enBlock, "subtitle") || field(enBlock, "seoIntro") || descEn,
    titleRu,
    titleEn,
    descRu,
    descEn,
    pathRu: attr(seoTag, "pathRu"),
    pathEn: attr(seoTag, "pathEn"),
    faqRu: extractFaqEntries(ruBlock),
    faqEn: extractFaqEntries(enBlock),
  };
}

// ----------------------------------------------------------------------------
// faq.tsx — a bespoke shape (MANUAL_FILES): ruFaq/enFaq are FaqSection[] with
// nested `items: FaqItem[]`, not a flat `faq: [...]` like the other pages.
// ----------------------------------------------------------------------------

function collectManualFaqEntries(varName) {
  const src = fs.readFileSync(path.join(PAGES_DIR, "faq.tsx"), "utf8");
  const arrStr = extractArrayLiteral(src, new RegExp(`const\\s+${varName}\\s*:[^=]*=\\s*`));
  if (!arrStr) {
    console.warn(`[prerender] WARNING: could not parse ${varName} array from faq.tsx`);
    return [];
  }
  const sectionStrs = splitTopLevelObjects(arrStr.slice(1, -1));
  const entries = [];
  for (const sectionStr of sectionStrs) {
    const itemsArr = extractArrayLiteral(sectionStr, /items:\s*/);
    if (!itemsArr) continue;
    const itemStrs = splitTopLevelObjects(itemsArr.slice(1, -1));
    for (const itemStr of itemStrs) {
      const q = field(itemStr, "q");
      const a = field(itemStr, "a");
      if (q && a) entries.push({ question: q, answer: a });
    }
  }
  return entries;
}

function collectAutoRoutes() {
  const out = [];
  for (const file of fs.readdirSync(PAGES_DIR)) {
    if (!file.endsWith(".tsx")) continue;
    if (TEMPLATE_FILES.has(file) || MANUAL_FILES.has(file) || EXCLUDED_FILES.has(file)) continue;
    const src = fs.readFileSync(path.join(PAGES_DIR, file), "utf8");
    const extracted = extractRouteFromPageSource(src);
    if (!extracted || !extracted.pathRu || !extracted.pathEn || !extracted.titleRu || !extracted.titleEn) {
      console.warn(`[prerender] WARNING: could not extract SEO route metadata from src/pages/${file} — skipping.`);
      continue;
    }
    out.push({ ogSlug: slugFromPath(extracted.pathEn), ...extracted });
  }
  return out;
}

// ----------------------------------------------------------------------------
// vehicle-page.tsx — parameterized by slug via `vehicleSeo` + `vehicleContent` maps.
// ----------------------------------------------------------------------------

function collectVehicleRoutes() {
  const src = fs.readFileSync(path.join(PAGES_DIR, "vehicle-page.tsx"), "utf8");
  const seoMapStr = extractObjectLiteral(src, /const\s+vehicleSeo\s*:[^=]*=\s*/);
  const contentMapStr = extractObjectLiteral(src, /const\s+vehicleContent\s*:[^=]*=\s*/);
  if (!seoMapStr || !contentMapStr) {
    console.warn("[prerender] WARNING: could not parse vehicleSeo/vehicleContent maps from vehicle-page.tsx");
    return [];
  }

  function mapEntries(mapStr) {
    const entries = {};
    const keyRe = /"([a-z0-9-]+)":\s*/g;
    let m;
    while ((m = keyRe.exec(mapStr))) {
      const slug = m[1];
      const objStr = extractObjectLiteral(mapStr, new RegExp(`"${slug}":\\s*`));
      if (objStr) entries[slug] = objStr;
    }
    return entries;
  }

  const seoEntries = mapEntries(seoMapStr);
  const contentEntries = mapEntries(contentMapStr);

  const routes = [];
  for (const slug of Object.keys(seoEntries)) {
    const seoStr = seoEntries[slug];
    const contentStr = contentEntries[slug];
    const ruBlock = contentStr ? extractObjectLiteral(contentStr, /\bru:\s*/) : null;
    const enBlock = contentStr ? extractObjectLiteral(contentStr, /\ben:\s*/) : null;
    const titleRu = field(seoStr, "titleRu");
    const titleEn = field(seoStr, "titleEn");
    routes.push({
      ogSlug: slug,
      pathRu: field(seoStr, "pathRu"),
      pathEn: field(seoStr, "pathEn"),
      titleRu,
      titleEn,
      descRu: field(seoStr, "descRu"),
      descEn: field(seoStr, "descEn"),
      h1Ru: field(ruBlock, "name") || stripComfortLineSuffix(titleRu),
      h1En: field(enBlock, "name") || stripComfortLineSuffix(titleEn),
      introRu: field(ruBlock, "desc") || field(seoStr, "descRu"),
      introEn: field(enBlock, "desc") || field(seoStr, "descEn"),
      isVehicle: true,
      vehicleImage: field(ruBlock, "image") || field(enBlock, "image"),
      vehicleSeats: numField(ruBlock, "seats") || numField(enBlock, "seats"),
      vehicleYear: field(ruBlock, "year") || field(enBlock, "year"),
      vehicleClassRu: field(ruBlock, "classBadge"),
      vehicleClassEn: field(enBlock, "classBadge"),
    });
  }
  return routes;
}

// ----------------------------------------------------------------------------
// Blog articles — parsed directly from src/data/blog-articles.ts so EN/RU
// fields (slugEn/titleEn/descriptionEn/introEn) always match the live data
// instead of a manually duplicated (and easily stale) list.
// ----------------------------------------------------------------------------

function collectBlogRoutes() {
  const src = fs.readFileSync(path.join(ROOT, "src", "data", "blog-articles.ts"), "utf8");
  const arrMatch = /export const ARTICLES\s*:\s*Article\[\]\s*=\s*\[/.exec(src);
  if (!arrMatch) {
    console.warn("[prerender] WARNING: could not find ARTICLES array in blog-articles.ts");
    return { blogIndexRoute: null, blogArticleRoutes: [] };
  }
  const arrStart = arrMatch.index + arrMatch[0].length - 1; // position of the opening "["
  let depth = 0;
  let arrEnd = -1;
  for (let i = arrStart; i < src.length; i++) {
    if (src[i] === "[") depth++;
    else if (src[i] === "]") {
      depth--;
      if (depth === 0) {
        arrEnd = i;
        break;
      }
    }
  }
  const arrBody = src.slice(arrStart + 1, arrEnd);
  const objStrs = splitTopLevelObjects(arrBody);

  const blogArticleRoutes = [];
  for (const objStr of objStrs) {
    const slug = field(objStr, "slug");
    const slugEn = field(objStr, "slugEn");
    const ogSlug = field(objStr, "ogSlug");
    const title = field(objStr, "title");
    const titleEn = field(objStr, "titleEn");
    const description = field(objStr, "description");
    const descriptionEn = field(objStr, "descriptionEn");
    const intro = field(objStr, "intro");
    const introEn = field(objStr, "introEn");
    const dateISO = field(objStr, "dateISO");
    const category = field(objStr, "category");
    const categoryEn = field(objStr, "categoryEn");
    const tagsMatch = /\btags:\s*\[([^\]]*)\]/.exec(objStr);
    const tags = tagsMatch
      ? tagsMatch[1]
          .split(",")
          .map((t) => t.trim().replace(/^"|"$/g, ""))
          .filter(Boolean)
      : [];

    if (!slug || !title || !description || !intro) {
      console.warn(`[prerender] WARNING: incomplete blog article entry (slug=${slug}) — skipping.`);
      continue;
    }
    if (!slugEn || !titleEn || !descriptionEn || !introEn) {
      console.warn(
        `[prerender] WARNING: blog article "${slug}" is missing EN fields (slugEn/titleEn/descriptionEn/introEn) — falling back to RU for the English variant.`,
      );
    }

    blogArticleRoutes.push({
      ogSlug: ogSlug || `blog-${slug}`,
      pathRu: `/блог/${slug}`,
      pathEn: `/blog/${slugEn || slug}`,
      titleRu: `${title} | Блог ComfortLine`,
      titleEn: `${titleEn || title} | ComfortLine Blog`,
      descRu: description,
      descEn: descriptionEn || description,
      h1Ru: title,
      h1En: titleEn || title,
      introRu: intro,
      introEn: introEn || intro,
      isArticle: true,
      datePublished: dateISO,
      dateModified: dateISO,
      section: category,
      sectionEn: categoryEn || category,
      keywords: tags.join(", "),
    });
  }

  const blogIndexRoute = {
    ogSlug: "blog-index",
    pathRu: "/блог",
    pathEn: "/blog",
    titleRu: "Блог ComfortLine — гайды по трансферу, границе и аэропортам",
    titleEn: "ComfortLine Blog — guides on transfers, border and airports",
    descRu:
      "Гайды по трансферу из Минска: пересечение границы Беларусь–Литва, стоимость поездок, что нельзя ввозить в ЕС, выбор КПП, советы для семей с детьми.",
    descEn:
      "Guides on Minsk transfers: Belarus–Lithuania border crossings, pricing, EU customs rules, picking a border checkpoint, family travel tips.",
    h1Ru: "Блог ComfortLine",
    h1En: "ComfortLine Blog",
    introRu:
      "Практические гайды по трансферу, пересечению границы и аэропортам Европы. Опыт водителей ComfortLine за 8 лет работы.",
    introEn: "Practical guides on transfers, border crossings and European airports. 8 years of ComfortLine driver experience.",
  };

  return { blogIndexRoute, blogArticleRoutes };
}

// ----------------------------------------------------------------------------
// Manually curated entries.
//
// These four routes (/, /faq, /terms, /privacy) are registered as a SINGLE
// wouter <Route> each in App.tsx — English is toggled client-side via a
// `?lang=en` query string, not a distinct path. A static file host can only
// serve one prerendered document per path, so we emit one HTML file (in RU,
// matching the site's default <html lang="ru">) with hreflang correctly
// pointing at the `?lang=en` variant, mirroring src/seo/use-seo.ts.
// ----------------------------------------------------------------------------

const manualRoutes = [
  {
    ogSlug: "home",
    pathRu: "/",
    pathEn: "/?lang=en",
    singleFile: true,
    titleRu: "ComfortLine — комфортный трансфер Минск–Вильнюс аэропорт, Минск–Варшава аэропорт",
    titleEn: "ComfortLine — Comfortable Transfers Minsk–Vilnius Airport, Minsk–Warsaw Airport",
    descRu:
      "Комфортный трансфер из Минска в аэропорт Вильнюса (VNO) и аэропорт Варшавы (WAW, Модлин), Берлин и города Европы. Фиксированная цена, опытный водитель, комфортные авто. Заказ онлайн или +375 (44) 762-06-49.",
    descEn:
      "Comfortable transfers from Minsk to Vilnius Airport (VNO) and Warsaw Airport (WAW, Modlin), Berlin and major European cities. Fixed prices, English-speaking drivers, comfortable vehicles. Book online or call +375 (44) 762-06-49.",
    h1Ru: "ComfortLine — комфортный трансфер из Минска",
    h1En: "ComfortLine — Comfortable Transfers from Minsk",
    introRu:
      "Комфортный трансфер из Минска в аэропорт Вильнюса (VNO) и аэропорт Варшавы (WAW, Модлин), Берлин и города Европы. Фиксированная цена, опытный водитель, комфортные авто.",
    introEn:
      "Comfortable transfers from Minsk to Vilnius Airport (VNO) and Warsaw Airport (WAW, Modlin), Berlin and major European cities. Fixed prices, English-speaking drivers, comfortable vehicles.",
  },
  {
    ogSlug: "faq",
    pathRu: "/faq",
    pathEn: "/faq?lang=en",
    singleFile: true,
    titleRu: "FAQ — Частые вопросы о трансфере | ComfortLine",
    titleEn: "FAQ — Transfer Questions Answered | ComfortLine",
    descRu:
      "Ответы на частые вопросы о трансфере ComfortLine: бронирование, цены, оплата, граница, документы, детские кресла, багаж и встречи в аэропортах Вильнюса и Варшавы.",
    descEn:
      "Answers to frequently asked questions about ComfortLine transfers: booking, pricing, payment, borders, documents, child seats, luggage, and airport meet-and-greet at Vilnius and Warsaw.",
    h1Ru: "FAQ — Частые вопросы о трансфере",
    h1En: "FAQ — Transfer Questions Answered",
    introRu:
      "Ответы на частые вопросы о трансфере ComfortLine: бронирование, цены, оплата, граница, документы, детские кресла, багаж и встречи в аэропортах.",
    introEn:
      "Answers to frequently asked questions about ComfortLine transfers: booking, pricing, payment, borders, documents, child seats, luggage, and airport meet-and-greet.",
  },
  {
    ogSlug: "terms",
    pathRu: "/terms",
    pathEn: "/terms?lang=en",
    singleFile: true,
    titleRu: "Публичная оферта и условия | ComfortLine",
    titleEn: "Public Offer & Terms | ComfortLine",
    descRu:
      "Публичная оферта ComfortLine: условия предоставления услуг трансфера, права и обязанности сторон, оплата и отмена бронирования.",
    descEn:
      "ComfortLine public offer & terms: transfer service conditions, rights and obligations of the parties, payment and cancellation.",
    h1Ru: "Публичная оферта",
    h1En: "Public Offer (Terms of Service)",
    introRu: "на оказание услуг по организации индивидуального трансфера",
    introEn: "Private transfer and chauffeur services",
  },
  {
    ogSlug: "privacy",
    pathRu: "/privacy",
    pathEn: "/privacy?lang=en",
    singleFile: true,
    titleRu: "Политика конфиденциальности | ComfortLine",
    titleEn: "Privacy Policy | ComfortLine",
    descRu:
      "Политика конфиденциальности ComfortLine: как мы обрабатываем персональные данные клиентов трансфера и обеспечиваем их защиту.",
    descEn: "ComfortLine privacy policy — how we process and protect personal data of our transfer customers.",
    h1Ru: "Политика обработки персональных данных",
    h1En: "Personal Data Processing Policy",
    introRu: "ИП Мурашко Андрей Антонович (Comfortline.by)",
    introEn: "Sole Proprietor Murashko Andrei Antonovich (Comfortline.by)",
  },
];

// ============================================================================
// HTML generation
// ============================================================================

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildHtml(template, route, lang, blogIndexRoute) {
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
  const ogImage = route.ogSlug ? `${SITE_URL}/og/${route.ogSlug}.jpg` : DEFAULT_OG_IMAGE;
  const ogType = route.isArticle ? "article" : "website";

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
  const isKaunas = route.pathEn.includes("kaunas");
  const destGeo = isWarsaw
    ? { region: "PL-MZ", placename: "Warsaw", pos: "52.2297;21.0122" }
    : isVilnius
      ? { region: "LT-VL", placename: "Vilnius", pos: "54.6872;25.2797" }
      : isKaunas
        ? { region: "LT-KU", placename: "Kaunas", pos: "54.8985;23.9036" }
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
    /<meta property="og:type" content="[^"]*"\s*\/>/,
    `<meta property="og:type" content="${ogType}" />`,
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*"\s*\/>/,
    `<meta property="og:image" content="${ogImage}" />`,
  );
  html = html.replace(
    /<meta property="og:image:secure_url" content="[^"]*"\s*\/>/,
    `<meta property="og:image:secure_url" content="${ogImage}" />`,
  );

  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${escapeHtml(desc)}" />`,
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*"\s*\/>/,
    `<meta name="twitter:image" content="${ogImage}" />`,
  );

  // For single-file routes (/, /faq, /terms, /privacy) there is only one
  // prerendered document; still self-reference + point hreflang at the
  // `?lang=en` variant of the same path, matching the client's use-seo.ts.
  const hreflang = `
    <link rel="alternate" hreflang="ru" href="${SITE_URL + encodeURI(route.pathRu)}" />
    <link rel="alternate" hreflang="en" href="${SITE_URL + encodeURI(route.pathEn)}" />
    <link rel="alternate" hreflang="x-default" href="${SITE_URL + encodeURI(route.pathRu)}" />`;
  html = html.replace(
    /<!-- hreflang alternates are injected[^>]*-->/,
    hreflang,
  );

  let extraJsonLd = "";
  if (route.isArticle) {
    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: h1,
      description: desc,
      image: { "@type": "ImageObject", url: ogImage, width: 1200, height: 630 },
      url: canonicalUrl,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
      author: { "@type": "Organization", name: "ComfortLine", url: SITE_URL, "@id": `${SITE_URL}#organization` },
      publisher: { "@type": "Organization", "@id": `${SITE_URL}#organization`, name: "ComfortLine", logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.svg` } },
      datePublished: route.datePublished,
      dateModified: route.dateModified,
      articleSection: isRu ? route.section : route.sectionEn || route.section,
      keywords: route.keywords,
      inLanguage: lang,
      isAccessibleForFree: true,
    };
    const articleMetaInjection = `
    <meta name="keywords" content="${escapeHtml(route.keywords)}" />
    <meta property="article:published_time" content="${route.datePublished}" />
    <meta property="article:modified_time" content="${route.dateModified}" />
    <meta property="article:author" content="ComfortLine" />
    <meta property="article:publisher" content="${SITE_URL}" />
    <meta property="article:section" content="${escapeHtml(isRu ? route.section : route.sectionEn || route.section)}" />
    ${route.keywords.split(",").map((k) => `<meta property="article:tag" content="${escapeHtml(k.trim())}" />`).join("\n    ")}`;
    html = html.replace(`<meta property="og:type" content="${ogType}" />`, `<meta property="og:type" content="${ogType}" />${articleMetaInjection}`);
    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: isRu ? "Главная" : "Home", item: SITE_URL + "/" },
        { "@type": "ListItem", position: 2, name: isRu ? "Блог" : "Blog", item: SITE_URL + encodeURI(isRu ? "/блог" : "/blog") },
        { "@type": "ListItem", position: 3, name: h1, item: canonicalUrl },
      ],
    };
    extraJsonLd = `
    <script type="application/ld+json">${JSON.stringify(articleJsonLd)}</script>
    <script type="application/ld+json">${JSON.stringify(breadcrumbJsonLd)}</script>`;
  } else if (route === blogIndexRoute) {
    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: isRu ? "Главная" : "Home", item: SITE_URL + "/" },
        { "@type": "ListItem", position: 2, name: isRu ? "Блог" : "Blog", item: canonicalUrl },
      ],
    };
    extraJsonLd = `
    <script type="application/ld+json">${JSON.stringify(breadcrumbJsonLd)}</script>`;
  } else {
    let mainJsonLd;
    if (route.isVehicle) {
      const vehicleClass = isRu ? route.vehicleClassRu : route.vehicleClassEn || route.vehicleClassRu;
      mainJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: isRu ? "Индивидуальный трансфер" : "Private transfer",
        name: h1,
        description: desc,
        image: route.vehicleImage ? SITE_URL + route.vehicleImage : undefined,
        url: canonicalUrl,
        provider: { "@id": `${SITE_URL}#business` },
        offers: {
          "@type": "Offer",
          url: canonicalUrl,
          availability: "https://schema.org/InStock",
          priceCurrency: "BYN",
          seller: { "@id": `${SITE_URL}#business` },
        },
        vehicle: {
          "@type": "Vehicle",
          name: h1,
          image: route.vehicleImage ? SITE_URL + route.vehicleImage : undefined,
          seatingCapacity: route.vehicleSeats || undefined,
          modelDate: route.vehicleYear || undefined,
          vehicleConfiguration: vehicleClass || undefined,
          brand: { "@type": "Brand", name: h1.split(" ")[0] },
        },
      };
    } else {
      mainJsonLd = {
        "@context": "https://schema.org",
        "@type": "TaxiService",
        name: title,
        description: desc,
        url: canonicalUrl,
        provider: { "@id": `${SITE_URL}#business` },
        areaServed: [
          { "@type": "Place", name: "Minsk" },
          { "@type": "Place", name: isKaunas ? (isRu ? "Каунас" : "Kaunas") : isRu ? (route.pathRu.includes("вильнюс") ? "Вильнюс" : "Варшава") : (route.pathEn.includes("vilnius") ? "Vilnius" : "Warsaw") },
        ],
        inLanguage: lang,
      };
    }
    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: isRu ? "Главная" : "Home", item: SITE_URL + "/" },
        { "@type": "ListItem", position: 2, name: title, item: canonicalUrl },
      ],
    };
    const scripts = [mainJsonLd, breadcrumbJsonLd];
    const faqEntries = isRu ? route.faqRu : route.faqEn;
    if (faqEntries && faqEntries.length > 0) {
      scripts.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqEntries.map((e) => ({
          "@type": "Question",
          name: e.question,
          acceptedAnswer: { "@type": "Answer", text: e.answer },
        })),
      });
    }
    extraJsonLd = "\n" + scripts.map((s) => `    <script type="application/ld+json">${JSON.stringify(s)}</script>`).join("\n");
  }
  html = html.replace("</head>", `${extraJsonLd}\n  </head>`);

  const seoBlock = `<div id="root"><div style="position:absolute;left:-9999px;top:-9999px;" aria-hidden="true"><h1>${escapeHtml(h1)}</h1><p>${escapeHtml(intro)}</p><p><a href="${altUrl}" hreflang="${isRu ? "en" : "ru"}">${isRu ? "English version" : "Русская версия"}</a></p></div></div>`;
  html = html.replace('<div id="root"></div>', seoBlock);

  return html;
}

function emit(routePath, html) {
  const [pathname] = routePath.split("?");
  const folderRel = decodeURIComponent(pathname).replace(/^\//, "");
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

  const autoRoutes = collectAutoRoutes();
  const vehicleRoutes = collectVehicleRoutes();
  const { blogIndexRoute, blogArticleRoutes } = collectBlogRoutes();

  const faqRoute = manualRoutes.find((r) => r.ogSlug === "faq");
  if (faqRoute) {
    faqRoute.faqRu = collectManualFaqEntries("ruFaq");
    faqRoute.faqEn = collectManualFaqEntries("enFaq");
  }

  const allRoutes = [
    ...manualRoutes,
    ...autoRoutes,
    ...vehicleRoutes,
    ...(blogIndexRoute ? [blogIndexRoute] : []),
    ...blogArticleRoutes,
  ];

  const written = [];
  for (const route of allRoutes) {
    if (route.singleFile) {
      // Only one static document can exist at this path; RU is the default
      // (matches <html lang="ru"> in index.html and the client's default).
      written.push(emit(route.pathRu, buildHtml(template, route, "ru", blogIndexRoute)));
    } else {
      written.push(emit(route.pathRu, buildHtml(template, route, "ru", blogIndexRoute)));
      written.push(emit(route.pathEn, buildHtml(template, route, "en", blogIndexRoute)));
    }
  }

  console.log(
    `[prerender] wrote ${written.length} files for ${allRoutes.length} routes (${manualRoutes.length} manual, ${autoRoutes.length} auto, ${vehicleRoutes.length} vehicle, ${1 + blogArticleRoutes.length} blog):`,
  );
  for (const f of written) console.log(`  - ${f}`);
}

main();
