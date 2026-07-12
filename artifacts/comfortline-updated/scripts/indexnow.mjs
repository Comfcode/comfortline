import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const siteUrl = "https://comfortline.by";
const host = new URL(siteUrl).host;
const key = "c8f3d2a1b94e47f6ae7c1d0b5a8e3c92";
const keyLocation = `${siteUrl}/${key}.txt`;
const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");
const nonBlocking = args.has("--non-blocking");
const force = args.has("--force");
const productionBranch = process.env.INDEXNOW_PRODUCTION_BRANCH || "CLcodex";

function sitemapUrls() {
  const sitemap = fs.readFileSync(
    path.join(root, "public", "sitemap.xml"),
    "utf8",
  );
  return [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => match[1].replaceAll("&amp;", "&"))
    .filter((url, index, urls) => {
      try {
        return new URL(url).host === host && urls.indexOf(url) === index;
      } catch {
        return false;
      }
    });
}

async function main() {
  const keyFile = path.join(root, "public", `${key}.txt`);
  if (
    !fs.existsSync(keyFile) ||
    fs.readFileSync(keyFile, "utf8").trim() !== key
  ) {
    throw new Error(
      "IndexNow root key file is missing or does not match the configured key",
    );
  }

  const urlList = sitemapUrls();
  if (!urlList.length)
    throw new Error("No canonical URLs found in sitemap.xml");
  if (urlList.length > 10_000)
    throw new Error("IndexNow accepts at most 10,000 URLs per request");

  if (dryRun) {
    console.log(
      `[indexnow] dry run passed: ${urlList.length} canonical URLs, key at ${keyLocation}`,
    );
    return;
  }

  if (!force && process.env.CF_PAGES_BRANCH !== productionBranch) {
    console.log(
      `[indexnow] skipped: branch ${process.env.CF_PAGES_BRANCH || "local"} is not production branch ${productionBranch}`,
    );
    return;
  }

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key, keyLocation, urlList }),
  });
  if (![200, 202].includes(response.status)) {
    throw new Error(
      `IndexNow returned HTTP ${response.status}: ${(await response.text()).slice(0, 300)}`,
    );
  }
  console.log(
    `[indexnow] submitted ${urlList.length} canonical URLs (HTTP ${response.status})`,
  );
}

main().catch((error) => {
  console.error(`[indexnow] ${error.message}`);
  if (!nonBlocking) process.exitCode = 1;
});
