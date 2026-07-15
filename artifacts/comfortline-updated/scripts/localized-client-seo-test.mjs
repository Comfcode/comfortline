import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const seoSource = fs.readFileSync(path.join(root, "src", "seo", "Seo.tsx"), "utf8");
const priorityRoutes = JSON.parse(fs.readFileSync(path.join(root, "src", "data", "priority-locales.json"), "utf8"));
const errors = [];

function normalizeRoutePath(value) {
  const [pathname, ...queryParts] = decodeURIComponent(value).split("?");
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  return queryParts.length > 0 ? `${normalizedPath}?${queryParts.join("?")}` : normalizedPath;
}

for (const route of priorityRoutes) {
  for (const locale of ["ru", "en", "pl", "fr"]) {
    const deployedPath = route[locale] === "/" ? "/" : route[locale] + "/";
    const resolved = Object.entries(route).find(([, value]) =>
      typeof value === "string" && normalizeRoutePath(value) === normalizeRoutePath(deployedPath),
    )?.[0];
    if (resolved !== locale) errors.push(`${route.key} ${locale}: trailing-slash route resolves as ${resolved}`);
  }
}

if (!seoSource.includes("normalizeRoutePath(window.location.pathname + window.location.search)")) {
  errors.push("Seo.tsx does not normalize the live Cloudflare pathname");
}

const localizedPages = [
  "route-landing-page.tsx",
  "minsk-vilnius-airport.tsx",
  "minsk-warsaw-airport.tsx",
  "minsk-warsaw-modlin-airport.tsx",
  "minsk-riga-airport.tsx",
  "minsk-kaunas-airport.tsx",
];
for (const file of localizedPages) {
  const source = fs.readFileSync(path.join(root, "src", "pages", file), "utf8");
  if (!source.includes("Zarezerwuj transfer") || !source.includes("Réserver le transfert")) {
    errors.push(`${file}: localized booking CTA is missing`);
  }
}

if (errors.length) {
  console.error(`[localized-client-seo] failed:\n${errors.map((error) => `- ${error}`).join("\n")}`);
  process.exit(1);
}
console.log(`[localized-client-seo] passed: ${priorityRoutes.length * 4} trailing-slash locale checks and ${localizedPages.length} CTA checks`);
