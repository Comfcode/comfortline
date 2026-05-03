/**
 * Logo palette overrides — independent of the site-accent brand scheme.
 *
 * Lets visitors paint the ComfortLine logo in solid colors (white, black,
 * gold, silver) or an animated rainbow, without touching site-wide accents.
 *
 * Implementation:
 *   - Solid: writes --logo-grad-1..4 (all four to the same color, !important)
 *     so the gradient collapses to a single tone.
 *   - Rainbow: writes a vivid 4-stop spectrum gradient AND injects a
 *     @keyframes hue-rotate animation applied to .cl-brand-svg elements
 *     (the stable class on every <Logo> svg).
 *   - "default": removes the override block — logo follows the active brand
 *     scheme's golden gradient.
 */

export type LogoPaletteKind = "default" | "solid" | "rainbow";

export type LogoPalette = {
  id: string;
  name: string;
  nameRu: string;
  description: string;
  descriptionRu: string;
  swatch: string;       // CSS background for the picker swatch (gradient/solid/conic)
  kind: LogoPaletteKind;
  color?: string;       // solid hex (only when kind === "solid")
};

export const LOGO_PALETTES: LogoPalette[] = [
  {
    id: "default",
    name: "Brand Gradient",
    nameRu: "Фирменный градиент",
    description: "Follows the active site colour scheme.",
    descriptionRu: "Следует активной цветовой схеме сайта.",
    swatch: "linear-gradient(135deg, #EDD9A8 0%, #D4B07A 30%, #B59C73 60%, #8A7555 100%)",
    kind: "default",
  },
  {
    id: "white",
    name: "Pure White",
    nameRu: "Чистый белый",
    description: "Solid warm white — for dark hero photography.",
    descriptionRu: "Сплошной тёплый белый — для тёмных фотофонов.",
    swatch: "#F5F0E8",
    kind: "solid",
    color: "#F5F0E8",
  },
  {
    id: "black",
    name: "Deep Black",
    nameRu: "Глубокий чёрный",
    description: "Solid charcoal — for light backgrounds, print, embossing.",
    descriptionRu: "Сплошной угольный — для светлых фонов, печати, тиснения.",
    swatch: "#0E0D13",
    kind: "solid",
    color: "#0E0D13",
  },
  {
    id: "gold",
    name: "Solid Gold",
    nameRu: "Сплошное золото",
    description: "Flat brand gold — no gradient, classic flat look.",
    descriptionRu: "Плоское фирменное золото — без градиента, классика.",
    swatch: "#B59C73",
    kind: "solid",
    color: "#B59C73",
  },
  {
    id: "silver",
    name: "Platinum Silver",
    nameRu: "Платиновое серебро",
    description: "Cool metallic silver — modern tech-luxury.",
    descriptionRu: "Холодное серебро — современный технолюкс.",
    swatch: "#B8BCC2",
    kind: "solid",
    color: "#B8BCC2",
  },
  {
    id: "rainbow",
    name: "Rainbow",
    nameRu: "Радуга",
    description: "Animated spectrum — playful Pride / festive variant.",
    descriptionRu: "Анимированный спектр — для праздничных и Pride-кампаний.",
    swatch:
      "conic-gradient(from 180deg, #ff5f6d, #ffc371, #f7ee7f, #4fc79b, #5b8def, #b46cff, #ff5f6d)",
    kind: "rainbow",
  },
];

export const DEFAULT_LOGO_PALETTE_ID = "default";
const STORAGE_KEY = "comfortline-logo-palette";
const STYLE_ID = "brand-logo-palette-override";

const RAINBOW_STOPS = ["#ff5f6d", "#ffc371", "#4fc79b", "#5b8def"];

// Legacy override block + storage key from brand-schemes.ts. The new palette
// is the single source of truth for logo colour, so we proactively clear the
// legacy override on every apply to avoid two `!important` blocks fighting.
const LEGACY_LOGO_STYLE_ID = "brand-logo-override";
const LEGACY_LOGO_STORAGE_KEY = "comfortline-logo-scheme";

function clearLegacyLogoOverride(): void {
  if (typeof document !== "undefined") {
    const legacy = document.getElementById(LEGACY_LOGO_STYLE_ID);
    if (legacy) legacy.remove();
    delete document.documentElement.dataset.logoScheme;
  }
  if (typeof window !== "undefined") {
    try {
      window.localStorage.removeItem(LEGACY_LOGO_STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }
}

function buildSolidCss(color: string): string {
  return `:root, .dark, .light {
    --logo-grad-1: ${color} !important;
    --logo-grad-2: ${color} !important;
    --logo-grad-3: ${color} !important;
    --logo-grad-4: ${color} !important;
  }`;
}

function buildRainbowCss(): string {
  const [g1, g2, g3, g4] = RAINBOW_STOPS;
  // Animation respects prefers-reduced-motion: users who opt out of motion
  // still get the rainbow gradient, just without the continuous hue-rotate.
  return `:root, .dark, .light {
    --logo-grad-1: ${g1} !important;
    --logo-grad-2: ${g2} !important;
    --logo-grad-3: ${g3} !important;
    --logo-grad-4: ${g4} !important;
  }
  @keyframes cl-logo-rainbow {
    0%   { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  }
  @media (prefers-reduced-motion: no-preference) {
    .cl-brand-svg {
      animation: cl-logo-rainbow 6s linear infinite;
    }
  }`;
}

export function applyLogoPalette(id: string): void {
  if (typeof document === "undefined") return;
  const palette = LOGO_PALETTES.find((p) => p.id === id) ?? LOGO_PALETTES[0];

  // Always wipe the legacy override so this palette is the single source of
  // truth — even when reverting to "default".
  clearLegacyLogoOverride();

  let style = document.getElementById(STYLE_ID) as HTMLStyleElement | null;

  if (palette.kind === "default") {
    if (style) style.remove();
    delete document.documentElement.dataset.logoPalette;
    return;
  }

  if (!style) {
    style = document.createElement("style");
    style.id = STYLE_ID;
    document.head.appendChild(style);
  }

  if (palette.kind === "solid" && palette.color) {
    style.textContent = buildSolidCss(palette.color);
  } else if (palette.kind === "rainbow") {
    style.textContent = buildRainbowCss();
  }

  document.documentElement.dataset.logoPalette = palette.id;
}

export function loadStoredLogoPalette(): string {
  if (typeof window === "undefined") return DEFAULT_LOGO_PALETTE_ID;
  try {
    return window.localStorage.getItem(STORAGE_KEY) || DEFAULT_LOGO_PALETTE_ID;
  } catch {
    return DEFAULT_LOGO_PALETTE_ID;
  }
}

export function saveLogoPalette(id: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, id);
  } catch {
    /* ignore */
  }
}

export function bootstrapLogoPalette(): void {
  applyLogoPalette(loadStoredLogoPalette());
}
