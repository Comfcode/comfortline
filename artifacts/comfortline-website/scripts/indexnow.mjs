#!/usr/bin/env node
/**
 * IndexNow submission script.
 * Reads public/sitemap.xml, extracts all <loc> URLs, and submits them to IndexNow.
 * Yandex, Bing, Seznam, Naver and Yep all accept IndexNow pings.
 *
 * Usage:
 *   node scripts/indexnow.mjs              # submit all sitemap URLs
 *   node scripts/indexnow.mjs <url> <url>  # submit specific URLs only
 */
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const KEY = "c8f3d2a1b94e47f6ae7c1d0b5a8e3c92";
const HOST = "bycomfortline.com";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function readSitemapUrls() {
  const sitemapPath = resolve(__dirname, "..", "public", "sitemap.xml");
  const xml = await readFile(sitemapPath, "utf8");
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  return [...new Set(matches.map((m) => m[1].trim()))];
}

async function submit(urls) {
  if (urls.length === 0) {
    console.log("No URLs to submit.");
    return;
  }
  const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls };
  console.log(`Submitting ${urls.length} URL(s) to IndexNow…`);
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  const text = await res.text().catch(() => "");
  if (res.ok || res.status === 202) {
    console.log(`IndexNow accepted (${res.status}).`);
  } else {
    console.error(`IndexNow rejected (${res.status}): ${text}`);
    process.exitCode = 1;
  }
}

const argUrls = process.argv.slice(2).filter((a) => /^https?:\/\//.test(a));
const force = process.argv.includes("--force");

// On Replit, REPLIT_DEPLOYMENT=1 is set during production deploy builds.
// Outside deploys (local dev, CI typecheck, manual rebuilds) we skip the submission
// so we don't burn IndexNow quota or trigger spurious recrawls. Use --force to override.
const isDeploy = process.env.REPLIT_DEPLOYMENT === "1" || process.env.INDEXNOW_SUBMIT === "1";
if (!isDeploy && !force && argUrls.length === 0) {
  console.log("IndexNow: skipped (not a production deploy build). Use --force or INDEXNOW_SUBMIT=1 to override.");
  process.exit(0);
}

const urls = argUrls.length > 0 ? argUrls : await readSitemapUrls();
await submit(urls);
