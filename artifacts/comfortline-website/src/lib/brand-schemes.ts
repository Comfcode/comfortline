export type BrandScheme = {
  id: string;
  name: string;
  nameRu: string;
  description: string;
  descriptionRu: string;
  swatch: string;
  primary: string;
  primaryForeground: string;
  ring: string;
};

export const BRAND_SCHEMES: BrandScheme[] = [
  {
    id: "signature-gold",
    name: "Signature Gold",
    nameRu: "Фирменное золото",
    description: "The original ComfortLine — burnished gold on charcoal.",
    descriptionRu: "Оригинал ComfortLine — патинированное золото на угольном.",
    swatch: "#B59C73",
    primary: "37 32% 58%",
    primaryForeground: "248 14% 8%",
    ring: "37 32% 58%",
  },
  {
    id: "champagne",
    name: "Champagne",
    nameRu: "Шампань",
    description: "Lighter, softer luxury with a champagne finish.",
    descriptionRu: "Светлее и мягче — финиш шампанского.",
    swatch: "#D9C49A",
    primary: "40 45% 72%",
    primaryForeground: "248 14% 8%",
    ring: "40 45% 72%",
  },
  {
    id: "royal-bronze",
    name: "Royal Bronze",
    nameRu: "Королевская бронза",
    description: "Warm bronze — deeper, more grounded than gold.",
    descriptionRu: "Тёплая бронза — глубже и солиднее золота.",
    swatch: "#A37247",
    primary: "25 42% 46%",
    primaryForeground: "39 30% 96%",
    ring: "25 42% 46%",
  },
  {
    id: "platinum-silver",
    name: "Platinum Silver",
    nameRu: "Платиновое серебро",
    description: "Cool, modern, neutral. Reads as tech-luxury.",
    descriptionRu: "Холодное, современное, нейтральное. Технолюкс.",
    swatch: "#B8BCC2",
    primary: "215 8% 72%",
    primaryForeground: "248 14% 8%",
    ring: "215 8% 72%",
  },
  {
    id: "emerald-lounge",
    name: "Emerald Lounge",
    nameRu: "Изумрудный лаундж",
    description: "Refined emerald — like a private members' club.",
    descriptionRu: "Изумруд клубного зала — сдержанный, статусный.",
    swatch: "#3F8F6E",
    primary: "157 38% 41%",
    primaryForeground: "39 30% 96%",
    ring: "157 38% 41%",
  },
  {
    id: "sapphire-night",
    name: "Sapphire Night",
    nameRu: "Сапфировая ночь",
    description: "Deep cobalt — corporate authority, trustworthy.",
    descriptionRu: "Глубокий кобальт — доверие и солидность.",
    swatch: "#4A6FAE",
    primary: "217 39% 49%",
    primaryForeground: "39 30% 96%",
    ring: "217 39% 49%",
  },
  {
    id: "ruby-crimson",
    name: "Ruby Crimson",
    nameRu: "Рубиновый кримсон",
    description: "Bold ruby — passion, urgency, premium hospitality.",
    descriptionRu: "Смелый рубин — страсть, премиум-гостеприимство.",
    swatch: "#B5354B",
    primary: "352 56% 46%",
    primaryForeground: "39 30% 96%",
    ring: "352 56% 46%",
  },
];

export const DEFAULT_SCHEME_ID = "signature-gold";
const STORAGE_KEY = "comfortline-scheme";

const VAR_TARGETS = [
  "--primary",
  "--ring",
  "--sidebar-primary",
  "--sidebar-ring",
] as const;

export function applyBrandScheme(schemeId: string): void {
  if (typeof document === "undefined") return;
  const scheme = BRAND_SCHEMES.find((s) => s.id === schemeId);
  if (!scheme) return;
  const root = document.documentElement;
  for (const v of VAR_TARGETS) root.style.setProperty(v, scheme.primary);
  root.style.setProperty("--primary-foreground", scheme.primaryForeground);
  root.style.setProperty("--sidebar-primary-foreground", scheme.primaryForeground);
  root.dataset.brandScheme = scheme.id;
}

export function loadStoredScheme(): string {
  if (typeof window === "undefined") return DEFAULT_SCHEME_ID;
  try {
    return window.localStorage.getItem(STORAGE_KEY) || DEFAULT_SCHEME_ID;
  } catch {
    return DEFAULT_SCHEME_ID;
  }
}

export function saveScheme(schemeId: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, schemeId);
  } catch {
    /* ignore */
  }
}

export function bootstrapBrandScheme(): void {
  applyBrandScheme(loadStoredScheme());
}
