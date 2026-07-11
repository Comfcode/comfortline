import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer as createViteServer } from "vite";
import { JSDOM } from "jsdom";
import { collectAllRoutes, SITE_URL, DEFAULT_OG_IMAGE } from "./route-manifest.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist", "public");
const OG_DIR = path.join(DIST, "og");
const PRIORITY_LOCALES_PATH = path.join(ROOT, "src", "data", "priority-locales.json");

// ============================================================================
// SSR bootstrap — jsdom globals + a Vite SSR module loader for src/ssr-entry.tsx
//
// React's renderToStaticMarkup is synchronous and cannot suspend on a lazy()
// import, so it renders actual (eagerly-imported) route components via
// src/ssr-entry.tsx. A handful of components reference `document`/`window`
// unconditionally during render (e.g. ReactDOM.createPortal(..., document.body)
// in modals that are closed by default), so jsdom stubs are installed globally
// before the SSR module graph is loaded.
// ============================================================================

function installJsdomGlobals() {
  const dom = new JSDOM("<!doctype html><html><body></body></html>", { url: SITE_URL + "/" });
  const { window } = dom;
  global.window = window;
  global.document = window.document;
  // Explicit signal (not tied to typeof window/document) that lets components
  // opt out of browser-only behavior (e.g. createPortal, which React's
  // synchronous SSR renderer rejects outright) during this build-time pass.
  global.__SSR_PRERENDER__ = true;
  Object.defineProperty(global, "navigator", {
    value: window.navigator,
    configurable: true,
    writable: true,
  });
  global.HTMLElement = window.HTMLElement;
  global.customElements = window.customElements;
  global.CustomEvent = window.CustomEvent;
  global.Node = window.Node;
  global.getComputedStyle = window.getComputedStyle;
  window.matchMedia =
    window.matchMedia ||
    (() => ({
      matches: false,
      media: "",
      onchange: null,
      addListener() {},
      removeListener() {},
      addEventListener() {},
      removeEventListener() {},
      dispatchEvent() {
        return false;
      },
    }));
  global.matchMedia = window.matchMedia;
  class NoopObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  global.IntersectionObserver = window.IntersectionObserver || NoopObserver;
  global.ResizeObserver = window.ResizeObserver || NoopObserver;
  window.scrollTo = window.scrollTo || (() => {});
  return dom;
}

async function createSsrModuleLoader() {
  const vite = await createViteServer({
    root: ROOT,
    configFile: path.join(ROOT, "vite.config.ts"),
    server: { middlewareMode: true, hmr: false },
    appType: "custom",
    logLevel: "warn",
  });
  const { SsrApp } = await vite.ssrLoadModule("/src/ssr-entry.tsx");
  return { vite, SsrApp };
}

/**
 * Render the real page markup for a given path via wouter's actual route
 * matching. Returns null (instead of throwing) if rendering fails, so the
 * caller can fall back to the synthetic summary block for that one route
 * without failing the whole build.
 */
function renderRouteMarkup(SsrApp, routePath) {
  try {
    return renderToStaticMarkup(createElement(SsrApp, { path: routePath }));
  } catch (err) {
    console.warn(`[prerender] SSR render failed for "${routePath}": ${err?.message || err}`);
    return null;
  }
}

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

function buildHtml(template, route, lang, blogIndexRoute, ssrMarkup) {
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
  // og-images.mjs generates a locale-specific /og/<ogSlug>-<lang>.jpg for
  // every route in this same manifest, so English pages get an
  // English-language preview image instead of sharing the Russian one. We
  // still verify the file landed on disk before pointing social metadata at
  // it — any route-specific file that failed to generate falls back to the
  // stable, always-present site-wide opengraph.jpg instead of a broken image URL.
  const ogImage =
    route.ogSlug && fs.existsSync(path.join(OG_DIR, `${route.ogSlug}-${lang}.jpg`))
      ? `${SITE_URL}/og/${route.ogSlug}-${lang}.jpg`
      : DEFAULT_OG_IMAGE;
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

  // Real per-route destination (from route-manifest.mjs, sourced from the
  // page's own fromName/toName data) rather than guessing from the URL —
  // only known geo coordinates get a destGeo override; everything else
  // keeps the site-wide Minsk default already baked into the HTML template.
  const toName = isRu ? route.toNameRu : route.toNameEn;
  const KNOWN_GEO = {
    warsaw: { region: "PL-MZ", placename: "Warsaw", pos: "52.2297;21.0122" },
    варшава: { region: "PL-MZ", placename: "Warsaw", pos: "52.2297;21.0122" },
    vilnius: { region: "LT-VL", placename: "Vilnius", pos: "54.6872;25.2797" },
    вильнюс: { region: "LT-VL", placename: "Vilnius", pos: "54.6872;25.2797" },
    kaunas: { region: "LT-KU", placename: "Kaunas", pos: "54.8985;23.9036" },
    каунас: { region: "LT-KU", placename: "Kaunas", pos: "54.8985;23.9036" },
    riga: { region: "LV-RIX", placename: "Riga", pos: "56.9496;24.1052" },
    рига: { region: "LV-RIX", placename: "Riga", pos: "56.9496;24.1052" },
    berlin: { region: "DE-BE", placename: "Berlin", pos: "52.5200;13.4050" },
    берлин: { region: "DE-BE", placename: "Berlin", pos: "52.5200;13.4050" },
  };
  const destGeo =
    route.pageType === "service" && toName
      ? Object.entries(KNOWN_GEO).find(([key]) => toName.toLowerCase().includes(key))?.[1] || null
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

  const hreflang = `
    <link rel="alternate" hreflang="ru" href="${SITE_URL + encodeURI(route.pathRu)}" />
    <link rel="alternate" hreflang="en" href="${SITE_URL + encodeURI(route.pathEn)}" />
    <link rel="alternate" hreflang="x-default" href="${SITE_URL + encodeURI(route.pathRu)}" />`;
  if (/<!-- hreflang alternates are injected[^>]*-->/.test(html)) html = html.replace(/<!-- hreflang alternates are injected[^>]*-->/, hreflang);
  else html = html.replace(/(?:\s*<link rel="alternate" hreflang="[^"]+" href="[^"]+"\s*\/>)+/, hreflang);

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
    // Only real transfer/service pages (route.pageType === "service", or
    // vehicle pages handled separately below) get a service JSON-LD block.
    // Country hub pages, home, FAQ, and legal pages get no fabricated
    // TaxiService entity — that matches what each page's own React source
    // actually renders client-side (Seo.tsx only adds a page-specific
    // jsonLd prop for real route/vehicle pages).
    let mainJsonLd = null;
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
    } else if (route.pageType === "service") {
      // Real route/airport/themed transfer pages: use the exact fromName/
      // toName the page itself defines (route-manifest.mjs extracts these
      // from the page source) instead of guessing the destination from the URL.
      const fromName = (isRu ? route.fromNameRu : route.fromNameEn) || (isRu ? "Минск" : "Minsk");
      const routeToName = (isRu ? route.toNameRu : route.toNameEn) || h1;
      mainJsonLd = {
        "@context": "https://schema.org",
        "@type": "TaxiService",
        name: title,
        description: desc,
        url: canonicalUrl,
        provider: { "@id": `${SITE_URL}#business` },
        areaServed: [
          { "@type": "Place", name: fromName },
          { "@type": "Place", name: routeToName },
        ],
        inLanguage: lang,
      };
    }
    // Country hub pages ("country"), home, FAQ, and legal pages: no
    // fabricated service entity, only breadcrumb (+ FAQPage below when
    // applicable) — matching what those pages actually render client-side.
    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: isRu ? "Главная" : "Home", item: SITE_URL + "/" },
        { "@type": "ListItem", position: 2, name: title, item: canonicalUrl },
      ],
    };
    const scripts = [...(mainJsonLd ? [mainJsonLd] : []), breadcrumbJsonLd];
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

  // Real, visible, in-flow pre-hydration body content (not an off-screen
  // teaser) so crawlers and users on slow/no-JS connections get an actual H1,
  // body copy, FAQ answers, and internal links in the initial HTML response.
  // The client app replaces this markup the moment React mounts.
  const faqEntries = isRu ? route.faqRu : route.faqEn;
  const homeHref = isRu ? "/" : "/en";
  const faqHref = isRu ? "/faq" : "/en/faq";
  const blogHref = isRu ? "/блог" : "/blog";
  const homeLabel = isRu ? "Главная" : "Home";
  const faqLabel = "FAQ";
  const blogLabel = isRu ? "Блог" : "Blog";
  const altLabel = isRu ? "English version" : "Русская версия";
  const faqHeading = isRu ? "Частые вопросы" : "Frequently Asked Questions";
  const navLabel = isRu ? "Основная навигация" : "Main navigation";

  const faqHtml =
    faqEntries && faqEntries.length > 0
      ? `<section><h2>${escapeHtml(faqHeading)}</h2>${faqEntries
          .map((e) => `<h3>${escapeHtml(e.question)}</h3><p>${escapeHtml(e.answer)}</p>`)
          .join("")}</section>`
      : "";

  // Prefer the real, SSR-rendered route markup (actual React page component
  // output via src/ssr-entry.tsx). Only fall back to a hand-built summary
  // block — still real, visible, in-flow content with an H1/intro/FAQ/nav,
  // just not the full page — if SSR rendering failed for this one route.
  const fallbackBlock = `<header><h1>${escapeHtml(h1)}</h1></header><main><p>${escapeHtml(intro)}</p>${faqHtml}<nav aria-label="${escapeHtml(navLabel)}"><a href="${homeHref}">${escapeHtml(homeLabel)}</a> · <a href="${faqHref}">${escapeHtml(faqLabel)}</a> · <a href="${blogHref}">${escapeHtml(blogLabel)}</a> · <a href="${altUrl}" hreflang="${isRu ? "en" : "ru"}">${escapeHtml(altLabel)}</a></nav></main>`;
  const rootInner = ssrMarkup ?? fallbackBlock;
  html = html.replace('<div id="root"></div>', `<div id="root">${rootInner}</div>`);

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

function priorityCopy(route, lang) {
  const pl=lang==="pl", name=pl?route.plName:route.frName, home=route.key==="home";
  const h1=home?(pl?"Prywatne i indywidualne transfery z Mińska":"Transferts privés et individuels depuis Minsk"):(pl?`Prywatny transfer Mińsk — ${name}`:`Transfert privé Minsk — ${name}`);
  const desc=pl?`Indywidualny transfer taksówką na trasie Mińsk — ${name}. Stała cena, odbiór spod drzwi i doświadczony kierowca.`:`Transfert privé en taxi de Minsk vers ${name}. Tarif fixe, prise en charge porte-à-porte et chauffeur expérimenté.`;
  return {h1,desc,title:`${h1} | ComfortLine`};
}
function buildPriorityHtml(template, route, lang, markup) {
  const a=priorityCopy(route,lang), other=lang==="pl"?"fr":"pl", b=priorityCopy(route,other);
  const pseudo={ogSlug:`priority-${route.key}`,pageType:route.key==="home"?"home":"service",pathRu:route[lang],pathEn:route[other],titleRu:a.title,titleEn:b.title,descRu:a.desc,descEn:b.desc,h1Ru:a.h1,h1En:b.h1,introRu:a.desc,introEn:b.desc};
  let html=buildHtml(template,pseudo,"ru",null,markup).replace('<html lang="ru">',`<html lang="${lang}">`);
  html=html.replaceAll('"inLanguage":"ru"',`"inLanguage":"${lang}"`).replaceAll('"name":"Минск"',`"name":"${lang==="pl"?"Mińsk":"Minsk"}"`).replaceAll('"name":"Главная"',`"name":"${lang==="pl"?"Strona główna":"Accueil"}"`);
  const links=["ru","en","pl","fr"].map(code=>`    <link rel="alternate" hreflang="${code}" href="${SITE_URL+encodeURI(route[code])}" />`).join("\n")+ `\n    <link rel="alternate" hreflang="x-default" href="${SITE_URL+route.en}" />`;
  return html.replace(/\s*<link rel="alternate" hreflang="ru"[\s\S]*?<link rel="alternate" hreflang="x-default"[^>]*\/>/,"\n"+links);
}

async function main() {
  const templatePath = path.join(DIST, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error(`[prerender] template not found: ${templatePath}`);
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, "utf8");

  const { allRoutes, manualRoutes, autoRoutes, vehicleRoutes, blogIndexRoute, blogArticleRoutes } = collectAllRoutes();

  const dom = installJsdomGlobals();
  const { vite, SsrApp } = await createSsrModuleLoader();

  let ssrFailures = 0;
  const written = [];
  for (const route of allRoutes) {
    const markupRu = renderRouteMarkup(SsrApp, route.pathRu);
    const markupEn = renderRouteMarkup(SsrApp, route.pathEn);
    if (!markupRu) ssrFailures++;
    if (!markupEn) ssrFailures++;
    written.push(emit(route.pathRu, buildHtml(template, route, "ru", blogIndexRoute, markupRu)));
    written.push(emit(route.pathEn, buildHtml(template, route, "en", blogIndexRoute, markupEn)));
  }
  const priorityLocales=JSON.parse(fs.readFileSync(PRIORITY_LOCALES_PATH,"utf8"));
  for (const route of priorityLocales) for (const lang of ["pl","fr"]) {
    const markup=renderRouteMarkup(SsrApp,route[lang]); if(!markup) ssrFailures++;
    written.push(emit(route[lang],buildPriorityHtml(template,route,lang,markup)));
  }

  await vite.close();
  dom.window.close();

  console.log(
    `[prerender] wrote ${written.length} files for ${allRoutes.length} routes (${manualRoutes.length} manual, ${autoRoutes.length} auto, ${vehicleRoutes.length} vehicle, ${1 + blogArticleRoutes.length} blog):`,
  );
  for (const f of written) console.log(`  - ${f}`);
  if (ssrFailures > 0) {
    console.warn(`[prerender] ${ssrFailures}/${written.length} pages fell back to the synthetic summary block (SSR render threw for that route).`);
  } else {
    console.log(`[prerender] all ${written.length} pages were rendered via real SSR (src/ssr-entry.tsx).`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("[prerender] fatal error:", err);
    process.exit(1);
  });
