import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Copy, Check, Printer } from "lucide-react";
import { Logo, LogoMark } from "@/components/brand/Logo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const palette = [
  { name: "Charcoal Core", hex: "#0E0D13", role: "Deepest background", light: true },
  { name: "Background", hex: "#131218", role: "Main dark surface", light: true },
  { name: "Surface", hex: "#1C1B24", role: "Cards & panels", light: true },
  { name: "Gold Primary", hex: "#B59C73", role: "Brand accent", light: false },
  { name: "Gold Light", hex: "#CDB896", role: "Hover / highlight", light: false },
  { name: "Gold Dark", hex: "#8A7555", role: "Pressed / deep", light: true },
  { name: "Warm White", hex: "#F5F0E8", role: "Text on dark", light: false },
  { name: "Muted", hex: "#8A8378", role: "Secondary text", light: false },
  { name: "Light BG", hex: "#F8F7F5", role: "Light mode base", light: false },
];

const typeWeights = [
  { weight: 300, label: "Light", sample: "Premium transfer across Europe" },
  { weight: 400, label: "Regular", sample: "Premium transfer across Europe" },
  { weight: 500, label: "Medium", sample: "Premium transfer across Europe" },
  { weight: 600, label: "SemiBold", sample: "Premium transfer across Europe" },
  { weight: 700, label: "Bold", sample: "Premium transfer across Europe" },
  { weight: 800, label: "ExtraBold", sample: "COMFORT LINE" },
];

const svgMark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none">
  <path d="M 39 15 A 20 20 0 1 0 39 45" stroke="#B59C73" stroke-width="4.5" stroke-linecap="round"/>
  <line x1="42" y1="22" x2="57" y2="22" stroke="#F5F0E8" stroke-width="3" stroke-linecap="round"/>
  <line x1="42" y1="38" x2="51" y2="38" stroke="#F5F0E8" stroke-width="3" stroke-linecap="round"/>
</svg>`;

const svgLogoFull = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 60" fill="none">
  <path d="M 39 15 A 20 20 0 1 0 39 45" stroke="#B59C73" stroke-width="4.5" stroke-linecap="round"/>
  <line x1="42" y1="22" x2="57" y2="22" stroke="#F5F0E8" stroke-width="3" stroke-linecap="round"/>
  <line x1="42" y1="38" x2="51" y2="38" stroke="#F5F0E8" stroke-width="3" stroke-linecap="round"/>
  <text x="70" y="27" font-family="Montserrat,sans-serif" font-weight="500" font-size="13" fill="#F5F0E8" letter-spacing="3.5">COMFORT</text>
  <text x="70" y="44" font-family="Montserrat,sans-serif" font-weight="800" font-size="13" fill="#B59C73" letter-spacing="5.5">LINE</text>
</svg>`;

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors"
    >
      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      {copied ? "Copied!" : label}
    </button>
  );
}

function DownloadSvg({ content, filename }: { content: string; filename: string }) {
  const download = () => {
    const blob = new Blob([content], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <button
      onClick={download}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-muted border border-border text-foreground/70 hover:text-foreground hover:bg-muted/80 transition-colors"
    >
      <Download className="h-3 w-3" />
      SVG
    </button>
  );
}

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BrandbookPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Floating print button */}
      <button
        data-no-print="true"
        onClick={() => window.print()}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-xl hover:bg-primary/90 active:scale-95 transition-all"
      >
        <Printer className="h-4 w-4" />
        Save as PDF
      </button>

      <div className="pt-24 pb-32">

        {/* ── Hero ── */}
        <div className="bg-[#0E0D13] py-24">
          <div className="container mx-auto px-6 max-w-5xl flex flex-col items-center text-center">
            <Logo variant="stacked" scheme="dark" height={100} showTagline />
            <p className="mt-10 text-muted-foreground text-sm tracking-[0.2em] uppercase">Brand Identity System · 2026</p>
            <div className="mt-8 w-24 h-px bg-primary/40 mx-auto" />
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-5xl space-y-28 mt-24">

          {/* ── Primary Logo ── */}
          <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionHeader index="01" title="Primary Logo" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {/* Dark version */}
              <div className="rounded-2xl border border-border bg-[#0E0D13] p-10 flex flex-col items-center gap-8">
                <Logo variant="full" scheme="dark" height={40} />
                <div className="flex gap-2">
                  <CopyButton text={svgLogoFull} label="Copy SVG" />
                  <DownloadSvg content={svgLogoFull} filename="comfortline-logo-dark.svg" />
                </div>
                <p className="text-xs text-muted-foreground tracking-wider uppercase">On Dark</p>
              </div>
              {/* Light version */}
              <div className="rounded-2xl border border-border bg-[#F8F7F5] p-10 flex flex-col items-center gap-8">
                <Logo variant="full" scheme="light" height={40} />
                <div className="flex gap-2">
                  <CopyButton text={svgLogoFull.replace(/#F5F0E8/g, "#131218")} label="Copy SVG" />
                  <DownloadSvg
                    content={svgLogoFull.replace(/#F5F0E8/g, "#131218")}
                    filename="comfortline-logo-light.svg"
                  />
                </div>
                <p className="text-xs text-[#8A8378] tracking-wider uppercase">On Light</p>
              </div>
              {/* With tagline */}
              <div className="rounded-2xl border border-border bg-[#131218] p-10 flex flex-col items-center gap-8">
                <Logo variant="full" scheme="dark" height={40} showTagline />
                <p className="text-xs text-muted-foreground tracking-wider uppercase">With Tagline</p>
              </div>
              {/* Stacked */}
              <div className="rounded-2xl border border-border bg-[#1C1B24] p-10 flex flex-col items-center gap-8">
                <Logo variant="stacked" scheme="dark" height={70} />
                <p className="text-xs text-muted-foreground tracking-wider uppercase">Stacked Variant</p>
              </div>
            </div>
          </motion.section>

          {/* ── Symbol Mark ── */}
          <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionHeader index="02" title="Symbol Mark" />
            <p className="text-muted-foreground text-sm mt-2 mb-8 max-w-xl">
              The mark is a geometric "C" arc in brand gold paired with two speed-motion lines — evoking
              motion, precision, and the CL monogram simultaneously.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { bg: "#0E0D13", gold: "#B59C73", lines: "#F5F0E8", label: "Primary" },
                { bg: "#B59C73", gold: "#0E0D13", lines: "#0E0D13", label: "Gold BG" },
                { bg: "#F8F7F5", gold: "#B59C73", lines: "#131218", label: "On Light" },
                { bg: "#131218", gold: "#F5F0E8", lines: "#F5F0E8", label: "Monochrome" },
              ].map((v) => (
                <div
                  key={v.label}
                  className="rounded-2xl border border-border p-8 flex flex-col items-center gap-4"
                  style={{ background: v.bg }}
                >
                  <LogoMark goldColor={v.gold} lineColor={v.lines} size={64} />
                  <p className="text-xs tracking-wider uppercase" style={{ color: v.lines, opacity: 0.6 }}>
                    {v.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <CopyButton text={svgMark} label="Copy mark SVG" />
              <DownloadSvg content={svgMark} filename="comfortline-mark.svg" />
            </div>
          </motion.section>

          {/* ── Favicon & App Icon ── */}
          <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionHeader index="03" title="Favicon & App Icon" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[64, 48, 32, 16].map((sz) => (
                <div key={sz} className="rounded-2xl border border-border bg-card p-6 flex flex-col items-center gap-4">
                  <div className="rounded-[22%] overflow-hidden flex items-center justify-center bg-[#0E0D13]" style={{ width: sz * 1.25, height: sz * 1.25 }}>
                    <svg width={sz} height={sz} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="32" height="32" rx="7" fill="#0E0D13"/>
                      <path d="M 20 8 A 11 11 0 1 0 20 24" stroke="#B59C73" strokeWidth="2.5" strokeLinecap="round"/>
                      <line x1="22" y1="11" x2="28" y2="11" stroke="#F5F0E8" strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="22" y1="21" x2="26" y2="21" stroke="#F5F0E8" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="text-xs text-muted-foreground">{sz}×{sz}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ── Social Media Profiles ── */}
          <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionHeader index="04" title="Social Profile Avatars" />
            <p className="text-muted-foreground text-sm mt-2 mb-8 max-w-xl">
              Instagram, Threads, Telegram, WhatsApp. The square variant is used; platforms crop to a circle automatically.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Gold on Dark – primary */}
              <div className="rounded-2xl border border-border bg-card p-8 flex flex-col items-center gap-5">
                <div
                  className="rounded-full flex items-center justify-center"
                  style={{ width: 120, height: 120, background: "#0E0D13" }}
                >
                  <LogoMark goldColor="#B59C73" lineColor="#F5F0E8" size={72} />
                </div>
                <p className="text-xs text-muted-foreground">Primary dark</p>
              </div>
              {/* Gold on Light */}
              <div className="rounded-2xl border border-border bg-card p-8 flex flex-col items-center gap-5">
                <div
                  className="rounded-full flex items-center justify-center"
                  style={{ width: 120, height: 120, background: "#F8F7F5" }}
                >
                  <LogoMark goldColor="#B59C73" lineColor="#131218" size={72} />
                </div>
                <p className="text-xs text-muted-foreground">On light</p>
              </div>
              {/* Gold BG */}
              <div className="rounded-2xl border border-border bg-card p-8 flex flex-col items-center gap-5">
                <div
                  className="rounded-full flex items-center justify-center"
                  style={{ width: 120, height: 120, background: "#B59C73" }}
                >
                  <LogoMark goldColor="#0E0D13" lineColor="#0E0D13" size={72} />
                </div>
                <p className="text-xs text-muted-foreground">Gold background</p>
              </div>
            </div>
          </motion.section>

          {/* ── Colour Palette ── */}
          <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionHeader index="05" title="Colour System" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
              {palette.map((c) => (
                <div key={c.hex} className="rounded-2xl border border-border overflow-hidden">
                  <div className="h-20" style={{ background: c.hex }} />
                  <div className="p-4 bg-card">
                    <p className="font-semibold text-sm text-foreground">{c.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{c.role}</p>
                    <div className="flex items-center justify-between mt-2">
                      <code className="text-xs text-primary font-mono">{c.hex}</code>
                      <CopyButton text={c.hex} label="Copy" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ── Typography ── */}
          <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionHeader index="06" title="Typography" />
            <div className="mt-6 rounded-2xl border border-border bg-card p-8">
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-6xl font-bold text-primary" style={{ fontFamily: "Montserrat, sans-serif" }}>Aa</span>
                <div>
                  <p className="text-xl font-bold text-foreground">Montserrat</p>
                  <p className="text-sm text-muted-foreground">Primary typeface — all weights</p>
                </div>
              </div>
              <div className="space-y-3">
                {typeWeights.map((t) => (
                  <div key={t.weight} className="flex items-baseline gap-4 py-3 border-b border-border/50 last:border-0">
                    <span className="w-24 text-xs text-muted-foreground shrink-0">{t.weight} · {t.label}</span>
                    <span
                      className="text-foreground text-base truncate"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: t.weight }}
                    >
                      {t.sample}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Type scale */}
            <div className="mt-4 rounded-2xl border border-border bg-card p-8 space-y-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-6">Type Scale</p>
              {[
                { label: "Display", size: "text-5xl font-extrabold", sample: "ComfortLine" },
                { label: "H1", size: "text-3xl font-bold", sample: "Индивидуальный трансфер" },
                { label: "H2", size: "text-xl font-semibold", sample: "Автопарк и маршруты" },
                { label: "Body", size: "text-base font-normal", sample: "Комфортный трансфер из Минска в аэропорты Европы с опытными водителями." },
                { label: "Caption", size: "text-sm font-light text-muted-foreground", sample: "Работаем с 2015 года · 24/7" },
              ].map((t) => (
                <div key={t.label} className="flex items-start gap-4 py-3 border-b border-border/30 last:border-0">
                  <span className="w-16 text-xs text-muted-foreground shrink-0 pt-1">{t.label}</span>
                  <p className={`${t.size} leading-tight`}>{t.sample}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ── Clearspace & Size ── */}
          <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionHeader index="07" title="Clear Space & Minimum Size" />
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="rounded-2xl border border-dashed border-primary/30 bg-card p-10 flex flex-col items-center gap-6">
                <div className="border-2 border-dashed border-primary/30 p-8">
                  <Logo variant="full" scheme="dark" height={32} />
                </div>
                <p className="text-xs text-muted-foreground text-center max-w-xs">
                  Minimum clear space equals the height of the letter "C" in the wordmark on all four sides.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-10 flex flex-col gap-6">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Minimum sizes</p>
                <div className="flex items-end gap-8">
                  <div className="flex flex-col items-center gap-3">
                    <Logo variant="full" scheme="dark" height={28} />
                    <p className="text-xs text-muted-foreground">28px · digital min</p>
                  </div>
                </div>
                <div className="flex items-end gap-8">
                  <div className="flex flex-col items-center gap-3">
                    <Logo variant="mark" scheme="dark" height={20} />
                    <p className="text-xs text-muted-foreground">20px · mark min</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── Don'ts ── */}
          <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionHeader index="08" title="Usage Rules" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {[
                {
                  label: "Don't rotate",
                  el: (
                    <div style={{ transform: "rotate(25deg)" }}>
                      <Logo variant="full" scheme="dark" height={28} />
                    </div>
                  ),
                },
                {
                  label: "Don't stretch",
                  el: (
                    <div style={{ transform: "scaleX(1.5)" }}>
                      <Logo variant="full" scheme="dark" height={28} />
                    </div>
                  ),
                },
                {
                  label: "Don't recolour gold",
                  el: (
                    <svg width={160} height={28} viewBox="0 0 210 60" fill="none">
                      <path d="M 39 15 A 20 20 0 1 0 39 45" stroke="#FF4444" strokeWidth="4.5" strokeLinecap="round"/>
                      <line x1="42" y1="22" x2="57" y2="22" stroke="#F5F0E8" strokeWidth="3" strokeLinecap="round"/>
                      <line x1="42" y1="38" x2="51" y2="38" stroke="#F5F0E8" strokeWidth="3" strokeLinecap="round"/>
                      <text x="70" y="27" fontFamily="Montserrat,sans-serif" fontWeight="500" fontSize="13" fill="#F5F0E8" letterSpacing="3.5">COMFORT</text>
                      <text x="70" y="44" fontFamily="Montserrat,sans-serif" fontWeight="800" fontSize="13" fill="#FF4444" letterSpacing="5.5">LINE</text>
                    </svg>
                  ),
                },
                {
                  label: "Don't add effects",
                  el: (
                    <div style={{ filter: "blur(2px) brightness(1.5)" }}>
                      <Logo variant="full" scheme="dark" height={28} />
                    </div>
                  ),
                },
                {
                  label: "Don't use on busy BG",
                  el: (
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded">
                      <Logo variant="full" scheme="dark" height={24} />
                    </div>
                  ),
                },
                {
                  label: "Don't use old logo",
                  el: (
                    <div className="opacity-40 flex flex-col items-center">
                      <div className="text-base font-bold text-foreground/50">Comfort<span className="text-primary/50">Line</span></div>
                      <div className="text-xs text-foreground/30 tracking-widest mt-0.5">TEXT ONLY</div>
                    </div>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border-2 border-red-500/30 bg-red-500/5 p-6 flex flex-col items-center gap-4">
                  <div className="flex items-center justify-center h-16">{item.el}</div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-red-500 text-lg">✕</span>
                    <p className="text-xs text-foreground/60">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

        </div>
      </div>

      <Footer />
    </div>
  );
}

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs font-mono text-primary opacity-60">{index}</span>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <div className="flex-1 h-px bg-border/60" />
    </div>
  );
}
