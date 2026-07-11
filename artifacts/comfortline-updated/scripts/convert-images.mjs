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
  const files = fs
    .readdirSync(PUBLIC_DIR)
    .filter((f) => /\.(png|jpg|jpeg)$/i.test(f) && !SKIP.has(f));
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
      // A legacy source image must not prevent the entire static site from
      // building when a checked-in WebP counterpart already exists.
      const base = file.replace(/\.(png|jpg|jpeg)$/i, "");
      const fallback = path.join(PUBLIC_DIR, base + ".webp");
      if (fs.existsSync(fallback)) {
        console.warn(`[webp] keep ${base}.webp; source ${file} could not be decoded`);
        continue;
      }
      throw error;
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
