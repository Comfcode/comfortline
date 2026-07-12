import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, "..", "public");

const QUALITY = 80;
const SKIP = new Set(["opengraph.jpg"]);

async function convertOne(file) {
  const inPath = path.join(PUBLIC_DIR, file);
  const base = file.replace(/\.(png|jpg|jpeg)$/i, "");
  const outPath = path.join(PUBLIC_DIR, base + ".webp");

  const inStat = fs.statSync(inPath);
  if (fs.existsSync(outPath)) {
    const outStat = fs.statSync(outPath);
    if (outStat.mtimeMs >= inStat.mtimeMs) {
      return { file, skipped: true, before: inStat.size, after: outStat.size };
    }
  }
  await sharp(inPath).webp({ quality: QUALITY, effort: 5 }).toFile(outPath);
  const after = fs.statSync(outPath).size;
  return { file, before: inStat.size, after, skipped: false };
}

async function main() {
  const files = [];
  function walk(dir, prefix = "") {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const relative = path.join(prefix, entry.name);
      if (entry.isDirectory()) walk(path.join(dir, entry.name), relative);
      else if (/\.(png|jpg|jpeg)$/i.test(entry.name) && !SKIP.has(relative)) files.push(relative);
    }
  }
  walk(PUBLIC_DIR);
  if (files.length === 0) {
    console.log("[webp] no images to convert");
    return;
  }
  let totalBefore = 0;
  let totalAfter = 0;
  for (const file of files) {
    let r;
    try {
      r = await convertOne(file);
    } catch (error) {
      console.warn(`[webp] warn ${file}: ${error.message}`);
      continue;
    }
    totalBefore += r.before;
    totalAfter += r.after;
    const pct = Math.round((1 - r.after / r.before) * 100);
    const tag = r.skipped ? "skip" : " ok ";
    const kbBefore = (r.before / 1024).toFixed(0);
    const kbAfter = (r.after / 1024).toFixed(0);
    console.log(`[webp] ${tag} ${file.padEnd(28)} ${kbBefore.padStart(5)} KB -> ${kbAfter.padStart(5)} KB (-${pct}%)`);
  }
  const totalPct = Math.round((1 - totalAfter / totalBefore) * 100);
  console.log(
    `[webp] total: ${(totalBefore / 1024).toFixed(0)} KB -> ${(totalAfter / 1024).toFixed(0)} KB (-${totalPct}%)`,
  );
}

main().catch((e) => {
  console.error("[webp] failed:", e);
  process.exit(1);
});
