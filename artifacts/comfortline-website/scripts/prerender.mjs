import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { collectAllRoutes, SITE_URL, DEFAULT_OG_IMAGE } from "./route-manifest.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist", "public");
const OG_DIR = path.join(DIST, "og");

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
  // og-images.mjs generates a /og/<ogSlug>.jpg for every route in this same
  // manifest, but we still verify the file landed on disk before pointing
  // social metadata at it — any route-specific file that failed to generate
  // falls back to the stable, always-present site-wide opengraph.jpg instead
  // of a broken image URL.
  const ogImage =
    route.ogSlug && fs.existsSync(path.join(OG_DIR, `${route.ogSlug}.jpg`))
      ? `${SITE_URL}/og/${route.ogSlug}.jpg`
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

  const seoBlock = `<div id="root"><header><h1>${escapeHtml(h1)}</h1></header><main><p>${escapeHtml(intro)}</p>${faqHtml}<nav aria-label="${escapeHtml(navLabel)}"><a href="${homeHref}">${escapeHtml(homeLabel)}</a> · <a href="${faqHref}">${escapeHtml(faqLabel)}</a> · <a href="${blogHref}">${escapeHtml(blogLabel)}</a> · <a href="${altUrl}" hreflang="${isRu ? "en" : "ru"}">${escapeHtml(altLabel)}</a></nav></main></div>`;
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

  const { allRoutes, manualRoutes, autoRoutes, vehicleRoutes, blogIndexRoute, blogArticleRoutes } = collectAllRoutes();

  const written = [];
  for (const route of allRoutes) {
    written.push(emit(route.pathRu, buildHtml(template, route, "ru", blogIndexRoute)));
    written.push(emit(route.pathEn, buildHtml(template, route, "en", blogIndexRoute)));
  }

  console.log(
    `[prerender] wrote ${written.length} files for ${allRoutes.length} routes (${manualRoutes.length} manual, ${autoRoutes.length} auto, ${vehicleRoutes.length} vehicle, ${1 + blogArticleRoutes.length} blog):`,
  );
  for (const f of written) console.log(`  - ${f}`);
}

main();
