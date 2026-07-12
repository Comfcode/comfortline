import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const siteUrl = "https://comfortline.by";
const key = "c8f3d2a1b94e47f6ae7c1d0b5a8e3c92";
const errors = [];
const robots = fs.readFileSync(path.join(root, "public", "robots.txt"), "utf8");
const sitemap = fs.readFileSync(
  path.join(root, "public", "sitemap.xml"),
  "utf8",
);
const keyPath = path.join(root, "public", `${key}.txt`);

if (!/User-agent:\s*bingbot[\s\S]*?Allow:\s*\//i.test(robots)) {
  errors.push("bingbot is not explicitly allowed");
}
if (!robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) {
  errors.push("absolute sitemap URL is missing from robots.txt");
}
if (
  !fs.existsSync(keyPath) ||
  fs.readFileSync(keyPath, "utf8").trim() !== key
) {
  errors.push("IndexNow root key file is missing or invalid");
}

const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => match[1],
);
if (!urls.length) errors.push("sitemap contains no URLs");
if (urls.length > 50_000)
  errors.push("sitemap exceeds the 50,000 URL protocol limit");
if (new Set(urls).size !== urls.length)
  errors.push("sitemap contains duplicate canonical URLs");
for (const url of urls) {
  if (!url.startsWith(`${siteUrl}/`) && url !== `${siteUrl}/`) {
    errors.push(`off-host or non-HTTPS sitemap URL: ${url}`);
  }
}

if (errors.length) {
  console.error(
    `[bing-seo] failed:\n${errors.map((error) => `- ${error}`).join("\n")}`,
  );
  process.exit(1);
}

console.log(
  `[bing-seo] passed: ${urls.length} canonical sitemap URLs and valid IndexNow discovery`,
);
