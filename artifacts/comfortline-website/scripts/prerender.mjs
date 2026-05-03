import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "..", "dist", "public");
const SITE_URL = "https://bycomfortline.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph.jpg`;

// ============================================================================
// Airport / route landing pages — bilingual
// ============================================================================
const routes = [
  {
    ogSlug: "minsk-vilnius-airport",
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
    ogSlug: "minsk-warsaw-airport",
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
    ogSlug: "minsk-warsaw-modlin-airport",
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
  {
    ogSlug: "minsk-kaunas-airport",
    pathRu: "/трансфер-минск-каунас-аэропорт",
    pathEn: "/minsk-kaunas-airport",
    titleRu: "Трансфер Минск — Аэропорт Каунаса (KUN) | ComfortLine",
    titleEn: "Minsk to Kaunas Airport (KUN) Private Transfer | ComfortLine",
    descRu: "Трансфер Минск — международный аэропорт Каунаса (KUN). Подача от двери, фиксированная цена, опытный водитель, помощь на границе Беларусь–Литва. ~280 км, 4–7 ч. +375 (29) 155-27-76.",
    descEn: "Private transfer Minsk to Kaunas International Airport (KUN). Door-to-door pickup, fixed price, English-speaking driver, Belarus–Lithuania border assistance. ~280 km, 4–7 hrs. +375 (29) 155-27-76.",
    h1Ru: "Трансфер Минск — Аэропорт Каунаса (KUN)",
    h1En: "Minsk to Kaunas Airport (KUN) Transfer",
    introRu: "Индивидуальный трансфер Минск — международный аэропорт Каунаса (KUN). Каунас — второй аэропорт Литвы и крупный хаб Ryanair. Подача от двери в Минске, фиксированная цена, опытный водитель и помощь на границе Беларусь–Литва. Маршрут ~280 км через погранпереход Каменный Лог / Бенякони обычно занимает 4–7 часов в зависимости от очередей.",
    introEn: "Private door-to-door transfer from Minsk to Kaunas International Airport (KUN). Kaunas is Lithuania's second-largest airport and a major Ryanair hub. Fixed price, professional driver, full assistance at the Belarus–Lithuania border. The ~280 km route via the Kamenny Log / Benyakoni border crossing typically takes 4–7 hours.",
  },
];

// ============================================================================
// Blog index — bilingual stub. RU is the primary content audience.
// ============================================================================
const blogIndexRoute = {
  ogSlug: "blog-index",
  pathRu: "/блог",
  pathEn: "/blog",
  titleRu: "Блог ComfortLine — гайды по трансферу, границе и аэропортам",
  titleEn: "ComfortLine Blog — guides on transfers, border and airports",
  descRu: "Гайды по трансферу из Минска: пересечение границы Беларусь–Литва, стоимость поездок, что нельзя ввозить в ЕС, выбор КПП, советы для семей с детьми.",
  descEn: "Guides on Minsk transfers: Belarus–Lithuania border crossings, pricing, EU customs rules, picking a border checkpoint, family travel tips.",
  h1Ru: "Блог ComfortLine",
  h1En: "ComfortLine Blog",
  introRu: "Практические гайды по трансферу, пересечению границы и аэропортам Европы. Опыт водителей ComfortLine за 8 лет работы. Темы: граница Беларусь–Литва, цена трансфера в Варшаву, что нельзя ввозить в ЕС, выбор КПП, поездки с детьми, как добраться до аэропорта Вильнюса.",
  introEn: "Practical guides on transfers, border crossings and European airports. 8 years of ComfortLine driver experience.",
};

// ============================================================================
// Blog articles — RU-only content but route exists at both /блог and /blog.
// Mirrors src/data/blog-articles.ts (slugs + titles + intros must stay in sync).
// ============================================================================
const blogArticles = [
  {
    slug: "граница-беларусь-литва",
    ogSlug: "blog-granitsa-belarus-litva",
    title: "Как пересечь границу Беларусь — Литва в 2026: время, документы, КПП",
    description: "Подробный гайд по границе Беларусь–Литва в 2026: какие КПП работают, сколько стоят очереди, какие документы нужны для въезда в ЕС, советы водителей ComfortLine.",
    intro: "Граница Беларусь–Литва — это самый востребованный маршрут наших трансферов. Полный гайд: список рабочих КПП (Каменный Лог, Бенякони), среднее время прохождения 2–6 часов, документы (виза, страховка, бронь, финансы), типичные причины отказа во въезде и советы из практики водителей ComfortLine за 2025–2026 год.",
    datePublished: "2026-04-15T09:00:00+03:00",
    dateModified: "2026-05-03T09:00:00+03:00",
    section: "Граница",
    keywords: "граница беларусь литва, каменный лог, бенякони, кпп, очереди на границе, документы для ес, виза в литву",
  },
  {
    slug: "стоимость-трансфер-минск-варшава",
    ogSlug: "blog-stoimost-transfer-minsk-varshava",
    title: "Сколько стоит трансфер Минск — Варшава в 2026",
    description: "Из чего складывается цена трансфера Минск–Варшава: расстояние, класс авто, очереди на границе, доплаты. Сравнение комфорт- и бизнес-класса, реальные кейсы.",
    intro: "Трансфер Минск–Варшава — это поездка в 550–600 км с пересечением границы. Цена зависит от класса авто (от 220 € эконом до 450 € микроавтобус), времени суток и сезона. Разбираем составляющие цены и сравнение Mercedes E-class, VW Passat, Hyundai Palisade и Fiat Scudo.",
    datePublished: "2026-04-10T09:00:00+03:00",
    dateModified: "2026-05-03T09:00:00+03:00",
    section: "Цены",
    keywords: "трансфер минск варшава цена, стоимость такси минск варшава, mercedes e-class, vw passat, hyundai palisade, fiat scudo",
  },
  {
    slug: "что-нельзя-ввозить-в-ес",
    ogSlug: "blog-chto-nelzya-vvozit-v-es",
    title: "Что нельзя ввозить из Беларуси в ЕС в 2026: полный список",
    description: "Актуальный на 2026 год список товаров, запрещённых к ввозу из Беларуси в ЕС: санкционные позиции, лимиты на еду и валюту, наличные, табак, алкоголь.",
    intro: "Литва, Польша и Латвия применяют санкционные правила ЕС на въезд из Беларуси очень строго. Полный список запретов: топливо в канистрах, табак сверх 40 сигарет, электроника от 750 €, мясо и молочка, валюта свыше 10 000 €. Лимиты на ввоз в Беларусь и в ЕС в табличной форме.",
    datePublished: "2026-04-05T09:00:00+03:00",
    dateModified: "2026-05-03T09:00:00+03:00",
    section: "Таможня",
    keywords: "что нельзя ввозить в ес, санкции ес беларусь, таможенные правила, лимит наличных в ес, табак ввоз, алкоголь ввоз",
  },
  {
    slug: "какой-кпп-выбрать",
    ogSlug: "blog-kakoy-kpp-vybrat",
    title: "Каменный Лог vs Котловка vs Бенякони — какой КПП выбрать в 2026",
    description: "Сравнение литовских КПП Каменный Лог, Котловка и Бенякони в 2026: время прохождения, инфраструктура, плюсы и минусы каждого пункта пропуска.",
    intro: "Если вы едете из Минска в Литву, у вас три варианта пунктов пропуска: Каменный Лог (Мядининкай), Бенякони (Шальчининкай) и ограниченно Котловка. Выбор КПП может сэкономить или отнять до 4 часов. Разбор плюсов и минусов на основе ежедневной статистики наших водителей.",
    datePublished: "2026-03-28T09:00:00+03:00",
    dateModified: "2026-05-03T09:00:00+03:00",
    section: "Граница",
    keywords: "каменный лог, котловка, бенякони, мядининкай, шальчининкай, кпп литва, выбор пункта пропуска",
  },
  {
    slug: "трансфер-с-детьми",
    ogSlug: "blog-transfer-s-detmi",
    title: "Трансфер с детьми из Минска в аэропорт: чек-лист для родителей",
    description: "Чек-лист для трансфера с детьми из Минска в аэропорты Европы: документы, кресла, питание в дороге, советы по границе. Опыт водителей ComfortLine.",
    intro: "Поездка с детьми в аэропорт — это всегда стресс. Документы (загранпаспорт, виза, нотариальное согласие, страховка), детские кресла (ComfortLine предоставляет бесплатно), что взять в дорогу, как пройти границу быстрее. Чек-лист на основе опыта наших водителей за 8 лет.",
    datePublished: "2026-03-20T09:00:00+03:00",
    dateModified: "2026-05-03T09:00:00+03:00",
    section: "Советы",
    keywords: "трансфер с детьми, детское кресло, нотариальное согласие, поездка с ребёнком за границу, путешествие с детьми",
  },
  {
    slug: "как-добраться-до-аэропорта-вильнюса",
    ogSlug: "blog-kak-dobratsya-do-vno",
    title: "Как добраться из Минска в аэропорт Вильнюса (VNO) в 2026",
    description: "Все способы добраться из Минска в аэропорт Вильнюса (VNO) в 2026: трансфер, такси, автобус, личное авто. Сравнение цены, времени и удобства.",
    intro: "Аэропорт Вильнюса (VNO) — самый удобный международный хаб для жителей Беларуси. Из Минска ~175 км. Сравниваем 4 варианта: индивидуальный трансфер ComfortLine от 130 €, сборное такси от 50 €, автобус от 25 €, личное авто. Время, цена, комфорт каждого варианта.",
    datePublished: "2026-03-15T09:00:00+03:00",
    dateModified: "2026-05-03T09:00:00+03:00",
    section: "Маршруты",
    keywords: "как добраться до аэропорта вильнюса, vno из минска, трансфер минск вильнюс аэропорт, автобус минск вильнюс",
  },
];

// Build virtual routes for each blog article (both /блог/ and /blog/ prefix).
const blogArticleRoutes = blogArticles.map((a) => ({
  ogSlug: a.ogSlug,
  pathRu: `/блог/${a.slug}`,
  pathEn: `/blog/${a.slug}`,
  titleRu: `${a.title} | Блог ComfortLine`,
  titleEn: `${a.title} | ComfortLine Blog`,
  descRu: a.description,
  descEn: a.description,
  h1Ru: a.title,
  h1En: a.title,
  introRu: a.intro,
  introEn: a.intro,
  isArticle: true,
  datePublished: a.datePublished,
  dateModified: a.dateModified,
  section: a.section,
  keywords: a.keywords,
}));

const allRoutes = [...routes, blogIndexRoute, ...blogArticleRoutes];

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
      articleSection: route.section,
      keywords: route.keywords,
      inLanguage: "ru",
      isAccessibleForFree: true,
    };
    const articleMetaInjection = `
    <meta name="keywords" content="${escapeHtml(route.keywords)}" />
    <meta property="article:published_time" content="${route.datePublished}" />
    <meta property="article:modified_time" content="${route.dateModified}" />
    <meta property="article:author" content="ComfortLine" />
    <meta property="article:publisher" content="${SITE_URL}" />
    <meta property="article:section" content="${escapeHtml(route.section)}" />
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
    const taxiJsonLd = {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      name: title,
      description: desc,
      url: canonicalUrl,
      provider: { "@id": "https://bycomfortline.com#business" },
      areaServed: [
        { "@type": "Place", name: "Minsk" },
        { "@type": "Place", name: isKaunas ? (isRu ? "Каунас" : "Kaunas") : isRu ? (route.pathRu.includes("вильнюс") ? "Вильнюс" : "Варшава") : (route.pathEn.includes("vilnius") ? "Vilnius" : "Warsaw") },
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
    extraJsonLd = `
    <script type="application/ld+json">${JSON.stringify(taxiJsonLd)}</script>
    <script type="application/ld+json">${JSON.stringify(breadcrumbJsonLd)}</script>`;
  }
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
  for (const route of allRoutes) {
    written.push(emit(route.pathRu, buildHtml(template, route, "ru")));
    written.push(emit(route.pathEn, buildHtml(template, route, "en")));
  }
  console.log(`[prerender] wrote ${written.length} files:`);
  for (const f of written) console.log(`  - ${f}`);
}

main();
