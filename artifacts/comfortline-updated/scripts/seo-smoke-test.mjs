import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { collectAllRoutes, SITE_URL } from "./route-manifest.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist", "public");
const { allRoutes } = collectAllRoutes();
const priorityLocales = JSON.parse(
  fs.readFileSync(
    path.join(root, "src", "data", "priority-locales.json"),
    "utf8",
  ),
);
const errors = [];
const canonicalOwners = new Map();
const titleOwners = new Map();

function routeFile(routePath) {
  if (routePath === "/") return path.join(output, "index.html");
  return path.join(
    output,
    decodeURIComponent(routePath).replace(/^\/+|\/+$/g, ""),
    "index.html",
  );
}

function count(html, pattern) {
  return [...html.matchAll(pattern)].length;
}

function attr(tag, name) {
  return tag.match(new RegExp(`${name}=["']([^"']+)["']`, "i"))?.[1];
}

function normalizedUrl(value) {
  if (!value) return "";
  try {
    return decodeURI(value);
  } catch {
    return value;
  }
}

for (const route of allRoutes) {
  const localizedRoute = priorityLocales.find(
    (candidate) =>
      candidate.ru === route.pathRu || candidate.en === route.pathEn,
  );
  for (const [language, routePath, alternatePath] of [
    ["ru", route.pathRu, route.pathEn],
    ["en", route.pathEn, route.pathRu],
  ]) {
    const file = routeFile(routePath);
    if (!fs.existsSync(file)) {
      errors.push(`${routePath}: prerendered HTML is missing`);
      continue;
    }

    const html = fs.readFileSync(file, "utf8");
    const expectedCanonical = SITE_URL + routePath;
    const expectedAlternate = SITE_URL + alternatePath;
    const canonicalMatches = [
      ...html.matchAll(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi),
    ].map((match) => match[0]);
    const alternateTags = [
      ...html.matchAll(/<link\b[^>]*rel=["']alternate["'][^>]*>/gi),
    ].map((match) => match[0]);

    if (!/<title>[^<]+<\/title>/i.test(html))
      errors.push(`${routePath}: title is missing`);
    if (
      !/<meta\b[^>]*name=["']description["'][^>]*content=["'][^"']+/i.test(html)
    )
      errors.push(`${routePath}: description is missing`);
    if (!/<h1\b/i.test(html)) errors.push(`${routePath}: H1 is missing`);
    if (canonicalMatches.length !== 1)
      errors.push(
        `${routePath}: expected one canonical, found ${canonicalMatches.length}`,
      );
    if (normalizedUrl(attr(canonicalMatches[0], "href")) !== expectedCanonical)
      errors.push(`${routePath}: canonical does not equal URL`);
    const canonical = normalizedUrl(attr(canonicalMatches[0], "href"));
    if (
      canonicalOwners.has(canonical) &&
      canonicalOwners.get(canonical) !== routePath
    )
      errors.push(
        `${routePath}: canonical duplicates ${canonicalOwners.get(canonical)}`,
      );
    canonicalOwners.set(canonical, routePath);
    const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim();
    const titleKey = `${language}:${title}`;
    if (
      title &&
      titleOwners.has(titleKey) &&
      titleOwners.get(titleKey) !== routePath
    )
      errors.push(
        `${routePath}: title duplicates ${titleOwners.get(titleKey)}`,
      );
    if (title) titleOwners.set(titleKey, routePath);
    if (
      !alternateTags.some(
        (tag) =>
          attr(tag, "hreflang") === language &&
          normalizedUrl(attr(tag, "href")) === expectedCanonical,
      )
    )
      errors.push(`${routePath}: self hreflang is missing`);
    if (
      !alternateTags.some(
        (tag) => normalizedUrl(attr(tag, "href")) === expectedAlternate,
      )
    )
      errors.push(`${routePath}: reciprocal alternate is missing`);
    if (localizedRoute) {
      for (const code of ["ru", "en", "pl", "fr"]) {
        const expectedHref = SITE_URL + localizedRoute[code];
        if (
          !alternateTags.some(
            (tag) =>
              attr(tag, "hreflang") === code &&
              normalizedUrl(attr(tag, "href")) === expectedHref,
          )
        ) {
          errors.push(
            `${routePath}: reciprocal hreflang ${code} is missing or incorrect`,
          );
        }
      }
    }
    if (count(html, /hreflang=["']x-default["']/gi) !== 1)
      errors.push(`${routePath}: expected one x-default alternate`);
  }
}
for (const route of priorityLocales)
  for (const language of ["pl", "fr"]) {
    const routePath = route[language],
      file = routeFile(routePath);
    if (!fs.existsSync(file)) {
      errors.push(`${routePath}: prerendered HTML is missing`);
      continue;
    }
    const html = fs.readFileSync(file, "utf8");
    if (!html.includes(`<html lang="${language}">`))
      errors.push(`${routePath}: incorrect language`);
    if (!/<h1\b/i.test(html)) errors.push(`${routePath}: H1 missing`);
    for (const code of ["ru", "en", "pl", "fr"])
      if (!html.includes(`hreflang="${code}"`))
        errors.push(`${routePath}: hreflang ${code} missing`);
    const expectedCanonical = SITE_URL + routePath;
    const canonicalTags = [
      ...html.matchAll(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi),
    ].map((match) => match[0]);
    if (
      canonicalTags.length !== 1 ||
      normalizedUrl(attr(canonicalTags[0], "href")) !== expectedCanonical
    )
      errors.push(`${routePath}: canonical does not equal URL`);
    if (
      canonicalOwners.has(expectedCanonical) &&
      canonicalOwners.get(expectedCanonical) !== routePath
    )
      errors.push(
        `${routePath}: canonical duplicates ${canonicalOwners.get(expectedCanonical)}`,
      );
    canonicalOwners.set(expectedCanonical, routePath);
  }

if (errors.length > 0) {
  console.error(
    `[seo-smoke] failed with ${errors.length} error(s):\n${errors.map((error) => `- ${error}`).join("\n")}`,
  );
  process.exit(1);
}

console.log(
  `[seo-smoke] passed: ${allRoutes.length * 2 + priorityLocales.length * 2} localized route checks`,
);
