import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const siteUrl = "https://comfortline.by";
const indexNowKey = "c8f3d2a1b94e47f6ae7c1d0b5a8e3c92";
const errors = [];
const robots = fs.readFileSync(path.join(root, "public", "robots.txt"), "utf8");
const sitemap = fs.readFileSync(
  path.join(root, "public", "sitemap.xml"),
  "utf8",
);
const keyPath = path.join(root, "public", `${indexNowKey}.txt`);

const yandexSection = robots.match(
  /User-agent:\s*Yandex\s*([\s\S]*?)(?=\nUser-agent:|$)/i,
)?.[1];
if (!yandexSection)
  errors.push("Yandex-specific robots.txt section is missing");
if (yandexSection && !/^Allow:\s*\/$/im.test(yandexSection)) {
  errors.push("Yandex crawler is not explicitly allowed");
}
if (!robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) {
  errors.push("absolute sitemap URL is missing from robots.txt");
}
if (/^Clean-param:\s*[^\n]*\blang\b/im.test(robots)) {
  errors.push(
    "language-changing ?lang= URLs must not be collapsed with Clean-param",
  );
}
if (
  !fs.existsSync(keyPath) ||
  fs.readFileSync(keyPath, "utf8").trim() !== indexNowKey
) {
  errors.push("IndexNow root key file is missing or invalid");
}

const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => match[1],
);
if (!urls.length) errors.push("sitemap contains no URLs");
if (urls.length > 50_000) errors.push("sitemap exceeds 50,000 URLs");
if (new Set(urls).size !== urls.length)
  errors.push("sitemap contains duplicate canonical URLs");
for (const url of urls) {
  if (!url.startsWith(`${siteUrl}/`) && url !== `${siteUrl}/`) {
    errors.push(`off-host or non-HTTPS sitemap URL: ${url}`);
  }
}

if (errors.length) {
  console.error(
    `[yandex-seo] failed:\n${errors.map((error) => `- ${error}`).join("\n")}`,
  );
  process.exit(1);
}

console.log(
  `[yandex-seo] passed: ${urls.length} canonical URLs, localized query URLs preserved, valid sitemap and IndexNow discovery`,
);
