type Lang = "ru" | "en";

const RU_TO_EN: Record<string, string> = {
  "/трансфер-минск-вильнюс-аэропорт":   "/minsk-vilnius-airport",
  "/трансфер-минск-варшава-шопен":       "/minsk-warsaw-airport",
  "/трансфер-минск-варшава-модлин":      "/minsk-warsaw-modlin-airport",
  "/трансфер-минск-каунас-аэропорт":     "/minsk-kaunas-airport",
  "/трансфер-минск-рига-аэропорт":       "/minsk-riga-airport",
  "/трансфер-мерседес-е-класс":          "/mercedes-e-class-transfer",
  "/трансфер-киа-карнавал":              "/kia-carnival-transfer",
  "/трансфер-хендай-палисад":            "/hyundai-palisade-transfer",
  "/трансфер-фиат-скудо":               "/fiat-scudo-transfer",
  "/трансфер-ауди-а6":                   "/audi-a6-transfer",
  "/трансфер-по-минску":                 "/minsk-city-transfer",
  "/трансфер-по-беларуси":              "/belarus-transfer",
  "/групповой-трансфер":                 "/group-transfer",
  "/трансфер-варшава":                   "/warsaw-transfer",
  "/трансфер-берлин":                    "/berlin-transfer",
  "/трансфер-прага":                     "/prague-transfer",
  "/трансфер-рига":                      "/riga-transfer",
  "/трансфер-в-санаторий":              "/sanatorium-transfer",
  "/лыжный-трансфер":                    "/ski-transfer",
  "/вип-трансфер":                       "/vip-transfer",
  "/трансфер-мерседес-в-класс":          "/mercedes-v-class-transfer",
  "/трансфер-в-европу":                  "/europe-transfer",
  "/трансфер-в-литву":                   "/lithuania-transfer",
  "/трансфер-в-латвию":                  "/latvia-transfer",
  "/трансфер-в-польшу":                  "/poland-transfer",
  "/трансфер-во-францию":               "/france-transfer",
  "/трансфер-в-германию":               "/germany-transfer",
  "/трансфер-минск-каунас":              "/minsk-kaunas-transfer",
  "/трансфер-минск-паланга":             "/minsk-palanga-transfer",
  "/трансфер-минск-лиепая":              "/minsk-liepaja-transfer",
  "/трансфер-минск-юрмала":              "/minsk-jurmala-transfer",
  "/трансфер-минск-даугавпилс":          "/minsk-daugavpils-transfer",
  "/трансфер-минск-катовице":            "/minsk-katowice-transfer",
  "/трансфер-минск-лодзь":               "/minsk-lodz-transfer",
  "/трансфер-минск-познань":             "/minsk-poznan-transfer",
  "/трансфер-минск-краков":              "/minsk-krakow-transfer",
  "/трансфер-минск-вроцлав":             "/minsk-wroclaw-transfer",
  "/трансфер-минск-гданьск":             "/minsk-gdansk-transfer",
  "/трансфер-минск-вильнюс":             "/minsk-vilnius-transfer",
  "/трансфер-минск-тракай":              "/minsk-trakai-transfer",
  "/трансфер-минск-клайпеда":            "/minsk-klaipeda-transfer",
  "/трансфер-минск-друскининкай":        "/minsk-druskininkai-transfer",
  "/блог":                               "/blog",
};

const EN_TO_RU: Record<string, string> = Object.fromEntries(
  Object.entries(RU_TO_EN).map(([ru, en]) => [en, ru])
);

const BLOG_SLUGS: Array<{ ru: string; en: string }> = [
  { ru: "граница-беларусь-литва",             en: "belarus-lithuania-border-crossing-guide" },
  { ru: "стоимость-трансфер-минск-варшава",   en: "minsk-warsaw-transfer-price-2026" },
  { ru: "что-нельзя-ввозить-в-ес",            en: "what-not-to-bring-from-belarus-to-eu" },
  { ru: "какой-кпп-выбрать",                  en: "which-belarus-border-crossing-to-choose" },
  { ru: "трансфер-с-детьми",                  en: "family-airport-transfer-with-children" },
  { ru: "как-добраться-до-аэропорта-вильнюса", en: "how-to-get-to-vilnius-airport-from-minsk" },
  { ru: "аэропорт-варшавы-вав",               en: "warsaw-chopin-airport-guide-from-belarus" },
  { ru: "граница-беларусь-польша",             en: "belarus-poland-border-crossing-guide" },
  { ru: "аэропорт-риги-rix",                  en: "riga-airport-guide-from-minsk-belarus" },
  { ru: "автобус-минск-варшава-модлин-вильнюс", en: "minsk-warsaw-vilnius-bus-vs-private-transfer" },
  { ru: "виза-свободный-въезд-в-беларусь-2026", en: "visa-free-entry-belarus-2026" },
];

/**
 * Returns the href a language-switcher link should point to for the given
 * current pathname and target language.
 *
 * - Service pages  → navigate to the URL-based alternate (Cyrillic ↔ Latin).
 * - Blog articles  → navigate to the translated article (or blog index as fallback).
 * - Shared pages (/, /faq, etc.) → stay on same pathname; append ?lang=en for English,
 *   return clean path for Russian (Russian is the default / no-param state).
 */
export function getAlternateLangHref(pathname: string, targetLang: Lang): string {
  const path = decodeURIComponent(pathname).replace(/\/+$/, "") || "/";

  if (targetLang === "en") {
    const en = RU_TO_EN[path];
    if (en) return en;
  } else {
    const ru = EN_TO_RU[path];
    if (ru) return ru;
  }

  const ruBlogMatch = path.match(/^\/блог\/(.+)$/);
  if (ruBlogMatch) {
    if (targetLang === "en") {
      const pair = BLOG_SLUGS.find((s) => s.ru === ruBlogMatch[1]);
      return pair ? `/blog/${pair.en}` : "/blog";
    }
    return path;
  }

  const enBlogMatch = path.match(/^\/blog\/(.+)$/);
  if (enBlogMatch) {
    if (targetLang === "ru") {
      const pair = BLOG_SLUGS.find((s) => s.en === enBlogMatch[1]);
      return pair ? `/блог/${pair.ru}` : "/блог";
    }
    return path;
  }

  // If path already belongs to the target language, return it unchanged.
  // Cyrillic → Russian URL; Latin + non-shared → English URL.
  const isShared = ["/", "/faq", "/privacy", "/terms", "/brandbook", "/thank-you"].includes(path);
  const hasCyrillic = /[\u0400-\u04FF]/.test(path);
  if (targetLang === "ru" && hasCyrillic) return path;
  if (targetLang === "en" && !hasCyrillic && !isShared) return path;

  if (targetLang === "en") {
    return (path === "/" ? "" : path) + "?lang=en";
  }
  return path;
}
