export interface FontTheme {
  id: string;
  name: string;
  nameRu: string;
  description: string;
  descriptionRu: string;
  heading: string;
  body: string;
  /** Family stack used in the swatch preview text. */
  preview?: string;
  /** Google Fonts query (everything after `?family=`). */
  googleFonts: string;
}

export const FONT_THEMES: FontTheme[] = [
  {
    id: "montserrat",
    name: "Montserrat",
    nameRu: "Montserrat",
    description: "Default — modern geometric sans, premium feel.",
    descriptionRu: "По умолчанию — современный геометрический гротеск.",
    heading: "'Montserrat', sans-serif",
    body: "'Montserrat', sans-serif",
    googleFonts: "Montserrat:wght@300;400;500;600;700;800;900",
  },
  {
    id: "inter",
    name: "Inter",
    nameRu: "Inter",
    description: "Neutral, ultra-legible UI workhorse.",
    descriptionRu: "Нейтральный, максимально читаемый интерфейсный шрифт.",
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
    googleFonts: "Inter:wght@300;400;500;600;700;800;900",
  },
  {
    id: "manrope",
    name: "Manrope",
    nameRu: "Manrope",
    description: "Soft geometric — friendly and modern.",
    descriptionRu: "Мягкий геометрический — дружелюбный и современный.",
    heading: "'Manrope', sans-serif",
    body: "'Manrope', sans-serif",
    googleFonts: "Manrope:wght@300;400;500;600;700;800",
  },
  {
    id: "jakarta",
    name: "Plus Jakarta Sans",
    nameRu: "Plus Jakarta Sans",
    description: "Trendy 2026 — humanist with character.",
    descriptionRu: "Трендовый 2026 — гуманистический с характером.",
    heading: "'Plus Jakarta Sans', sans-serif",
    body: "'Plus Jakarta Sans', sans-serif",
    googleFonts: "Plus+Jakarta+Sans:wght@300;400;500;600;700;800",
  },
  {
    id: "space",
    name: "Space Grotesk",
    nameRu: "Space Grotesk",
    description: "Tech-forward — distinctive, contemporary.",
    descriptionRu: "Технологичный — узнаваемый, современный.",
    heading: "'Space Grotesk', sans-serif",
    body: "'Inter', sans-serif",
    googleFonts: "Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700",
  },
  {
    id: "playfair",
    name: "Playfair × Inter",
    nameRu: "Playfair × Inter",
    description: "Editorial luxe — high-contrast serif headings.",
    descriptionRu: "Редакционная роскошь — контрастный серифный заголовок.",
    heading: "'Playfair Display', serif",
    body: "'Inter', sans-serif",
    googleFonts:
      "Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Inter:wght@300;400;500;600;700",
  },
  {
    id: "cormorant",
    name: "Cormorant × Inter",
    nameRu: "Cormorant × Inter",
    description: "Classic luxe — refined Garamond-style headings.",
    descriptionRu: "Классическая роскошь — утончённые заголовки в духе Garamond.",
    heading: "'Cormorant Garamond', serif",
    body: "'Inter', sans-serif",
    googleFonts:
      "Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&family=Inter:wght@300;400;500;600;700",
  },
];

export const DEFAULT_FONT_ID = "montserrat";
const STORAGE_KEY = "comfortline-font";
const STYLE_ID = "brand-font-override";
const LINK_ID = "brand-font-link";

export function applyFontTheme(themeId: string): void {
  if (typeof document === "undefined") return;
  const theme = FONT_THEMES.find((t) => t.id === themeId);
  if (!theme) return;

  // 1. Inject / update Google Fonts <link>
  let link = document.getElementById(LINK_ID) as HTMLLinkElement | null;
  const href = `https://fonts.googleapis.com/css2?family=${theme.googleFonts}&display=swap`;
  if (!link) {
    link = document.createElement("link");
    link.id = LINK_ID;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
  if (link.href !== href) link.href = href;

  // 2. Inject CSS overriding the app font vars + heading rule
  let style = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
  if (!style) {
    style = document.createElement("style");
    style.id = STYLE_ID;
    document.head.appendChild(style);
  }
  style.textContent = `:root, .dark, .light {
    --app-font-sans: ${theme.body} !important;
    --app-font-heading: ${theme.heading} !important;
    --font-sans: ${theme.body} !important;
  }
  body { font-family: ${theme.body} !important; }
  h1, h2, h3, h4, h5, h6, .font-heading { font-family: ${theme.heading} !important; }`;

  document.documentElement.dataset.fontTheme = theme.id;
}

export function loadStoredFont(): string {
  if (typeof window === "undefined") return DEFAULT_FONT_ID;
  try {
    return window.localStorage.getItem(STORAGE_KEY) || DEFAULT_FONT_ID;
  } catch {
    return DEFAULT_FONT_ID;
  }
}

export function saveFont(themeId: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, themeId);
  } catch {
    /* ignore */
  }
}

export function bootstrapFontTheme(): void {
  applyFontTheme(loadStoredFont());
}
