import { useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2, PhoneCall, ArrowRight, Car, Info, Clock, ChevronDown, HelpCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLang } from "@/context/language-context";
import { GlobalBookingModal } from "@/components/sections/GlobalBookingModal";
import { Seo } from "@/seo/Seo";
import { taxiServiceJsonLd, faqJsonLd } from "@/seo/jsonld";
import { SITE_URL } from "@/seo/seo-config";
import { getHomeSectionHref } from "@/lib/lang-urls";

export interface LandmarkPhoto {
  src: string;
  caption: string;
}

export interface FaqEntry {
  q: string;
  a: string;
}

export interface RouteContent {
  badge: string;
  title: string;
  subtitle: string;
  stats: { label: string; value: string }[];
  photosTitle: string;
  photos: LandmarkPhoto[];
  howTitle: string;
  steps: { icon: LucideIcon; title: string; desc: string }[];
  infoTitle: string;
  infoRows: { label: string; value: string }[];
  includedTitle: string;
  included: string[];
  whyTitle: string;
  whyItems: string[];
  faqTitle?: string;
  faq?: FaqEntry[];
  ctaTitle: string;
  ctaDesc: string;
  ctaBtn: string;
  prefilledFrom: string;
  prefilledTo: string;
  backBtn: string;
}

export interface RouteSeo {
  titleRu: string;
  titleEn: string;
  descRu: string;
  descEn: string;
  pathRu: string;
  pathEn: string;
  fromName?: string;
  toName?: string;
  breadcrumbRu?: string;
  breadcrumbEn?: string;
  priceFrom?: number;
  priceCurrency?: string;
}

export interface RoutePageData {
  ru: RouteContent;
  en: RouteContent;
  seo: RouteSeo;
}

interface Props {
  data: RoutePageData;
}

const RELATED_ROUTES = [
  { ru: ["Такси Минск — Вильнюс", "/трансфер-минск-вильнюс"], en: ["Minsk to Vilnius transfer", "/minsk-vilnius-transfer"] },
  { ru: ["Трансфер Минск — аэропорт Вильнюса (VNO)", "/трансфер-минск-вильнюс-аэропорт"], en: ["Minsk to Vilnius Airport (VNO)", "/minsk-vilnius-airport"] },
  { ru: ["Такси Минск — Каунас", "/трансфер-минск-каунас"], en: ["Minsk to Kaunas transfer", "/minsk-kaunas-transfer"] },
  { ru: ["Трансфер Минск — аэропорт Каунаса (KUN)", "/трансфер-минск-каунас-аэропорт"], en: ["Minsk to Kaunas Airport (KUN)", "/minsk-kaunas-airport"] },
  { ru: ["Такси Минск — Рига", "/трансфер-рига"], en: ["Minsk to Riga transfer", "/riga-transfer"] },
  { ru: ["Трансфер Минск — аэропорт Риги (RIX)", "/трансфер-минск-рига-аэропорт"], en: ["Minsk to Riga Airport (RIX)", "/minsk-riga-airport"] },
  { ru: ["Такси Минск — Варшава", "/трансфер-варшава"], en: ["Minsk to Warsaw transfer", "/warsaw-transfer"] },
  { ru: ["Трансфер Минск — аэропорт Шопен (WAW)", "/трансфер-минск-варшава-шопен"], en: ["Minsk to Warsaw Chopin Airport (WAW)", "/minsk-warsaw-airport"] },
  { ru: ["Трансфер Минск — аэропорт Модлин (WMI)", "/трансфер-минск-варшава-модлин"], en: ["Minsk to Warsaw Modlin Airport (WMI)", "/minsk-warsaw-modlin-airport"] },
  { ru: ["Такси Минск — Гданьск", "/трансфер-минск-гданьск"], en: ["Minsk to Gdańsk transfer", "/minsk-gdansk-transfer"] },
  { ru: ["Такси Минск — Краков", "/трансфер-минск-краков"], en: ["Minsk to Kraków transfer", "/minsk-krakow-transfer"] },
  { ru: ["Такси Минск — Вроцлав", "/трансфер-минск-вроцлав"], en: ["Minsk to Wrocław transfer", "/minsk-wroclaw-transfer"] },
  { ru: ["Такси Минск — Познань", "/трансфер-минск-познань"], en: ["Minsk to Poznań transfer", "/minsk-poznan-transfer"] },
  { ru: ["Такси Минск — Катовице", "/трансфер-минск-катовице"], en: ["Minsk to Katowice transfer", "/minsk-katowice-transfer"] },
  { ru: ["Такси Минск — Клайпеда", "/трансфер-минск-клайпеда"], en: ["Minsk to Klaipėda transfer", "/minsk-klaipeda-transfer"] },
  { ru: ["Такси Минск — Паланга", "/трансфер-минск-паланга"], en: ["Minsk to Palanga transfer", "/minsk-palanga-transfer"] },
] as const;

export function RouteLandingPage({ data }: Props) {
  const { lang } = useLang();
  const c = data[lang];
  const isRu = lang === "ru";
  const seoTitle = isRu ? data.seo.titleRu : data.seo.titleEn;
  const seoDesc = isRu ? data.seo.descRu : data.seo.descEn;
  const seoPath = isRu ? data.seo.pathRu : data.seo.pathEn;
  const currentRouteIndex = Math.max(0, RELATED_ROUTES.findIndex((route) => route[lang][1] === seoPath));
  const relatedRoutes = Array.from({ length: 6 }, (_, offset) =>
    RELATED_ROUTES[(currentRouteIndex + offset + 1) % RELATED_ROUTES.length][lang],
  );
  const breadcrumbName = isRu
    ? (data.seo.breadcrumbRu || data.ru.title)
    : (data.seo.breadcrumbEn || data.en.title);
  const serviceJsonLd = taxiServiceJsonLd({
    lang,
    name: seoTitle.replace(" | ComfortLine", ""),
    description: seoDesc,
    url: SITE_URL + seoPath,
    fromName: data.seo.fromName || (isRu ? "Минск" : "Minsk"),
    toName: data.seo.toName || c.title,
    priceFrom: data.seo.priceFrom,
    priceCurrency: data.seo.priceCurrency,
  });
  const allJsonLd: object[] = [serviceJsonLd];
  if (c.faq && c.faq.length > 0) {
    allJsonLd.push(faqJsonLd(c.faq.map((f) => ({ question: f.q, answer: f.a }))));
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        titleRu={data.seo.titleRu}
        titleEn={data.seo.titleEn}
        descRu={data.seo.descRu}
        descEn={data.seo.descEn}
        pathRu={data.seo.pathRu}
        pathEn={data.seo.pathEn}
        jsonLd={allJsonLd}
        breadcrumbsRu={[
          { name: "Главная", path: "/" },
          { name: data.seo.breadcrumbRu || data.ru.title, path: data.seo.pathRu },
        ]}
        breadcrumbsEn={[
          { name: "Home", path: "/" },
          { name: data.seo.breadcrumbEn || data.en.title, path: data.seo.pathEn },
        ]}
      />
      <Navbar />
      {/* hidden h-tag bait for crawlers — already have h1 below; this just confirms breadcrumb name */}
      <span className="sr-only">{breadcrumbName}</span>

      {/* Hero */}
      <div className="pt-28 pb-14 border-b border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative">
          <a href={getHomeSectionHref(lang, "services")} className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors mb-6">
            {c.backBtn}
          </a>
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary mb-4">
            {c.badge}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">{c.title}</h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-10">{c.subtitle}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {c.stats.map((s) => (
              <div key={s.label} className="bg-card border border-border rounded-xl p-4 overflow-hidden">
                <p className="text-primary font-bold text-sm leading-snug break-words">{s.value}</p>
                <p className="text-muted-foreground text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-booking-modal", {
                detail: { prefilledFrom: c.prefilledFrom, prefilledTo: c.prefilledTo }
              }))}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20 cursor-pointer"
            >
              {isRu ? "Забронировать трансфер" : "Book transfer"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl py-14 space-y-16">

        {/* Landmark photo gallery — hidden when no verified photos available */}
        {c.photos.length > 0 && (
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-6">{c.photosTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {c.photos.map((photo, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden border border-border bg-muted" style={{ height: 220 }}>
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    el.style.display = "none";
                    const parent = el.parentElement!;
                    parent.style.background = "linear-gradient(135deg, #1C1B24 0%, #2a2535 100%)";
                    const span = document.createElement("span");
                    span.textContent = photo.caption;
                    span.className = "absolute inset-0 flex items-center justify-center text-primary/70 text-sm font-semibold text-center p-4";
                    parent.appendChild(span);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-black/60 text-white/90 backdrop-blur-sm">
                  {photo.caption}
                </span>
              </div>
            ))}
          </div>
        </motion.section>
        )}

        {/* How it works */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-8">{c.howTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.steps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 relative">
                  <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">{i + 1}</div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <StepIcon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  {i < c.steps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/40 z-10" />
                  )}
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* Key route info */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Info className="h-5 w-5 text-primary" />
            {c.infoTitle}
          </h2>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {c.infoRows.map((row, i) => (
              <div key={i} className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-6 py-4 ${i < c.infoRows.length - 1 ? "border-b border-border/50" : ""}`}>
                <span className="text-muted-foreground text-sm min-w-[200px] shrink-0">{row.label}</span>
                <span className="text-foreground text-sm font-medium">{row.value}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* What's included */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Clock className="h-5 w-5 text-primary" />
            {c.includedTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {c.included.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl px-5 py-4">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Why ComfortLine */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Car className="h-5 w-5 text-primary" />
            {c.whyTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {c.whyItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl px-5 py-4">
                <span className="text-primary mt-0.5 shrink-0">▸</span>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        {c.faq && c.faq.length > 0 && (
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <HelpCircle className="h-5 w-5 text-primary" />
              {c.faqTitle || (isRu ? "Частые вопросы" : "Frequently asked questions")}
            </h2>
            <div className="space-y-3">
              {c.faq.map((entry, i) => (
                <FaqItem key={i} q={entry.q} a={entry.a} />
              ))}
            </div>
          </motion.section>
        )}

        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {isRu ? "Популярные направления из Минска" : "Popular private transfers from Minsk"}
          </h2>
          <nav aria-label={isRu ? "Похожие маршруты" : "Related routes"} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedRoutes.map(([label, href]) => (
              <a key={href} href={href} className="flex items-center justify-between gap-3 bg-card border border-border rounded-xl px-5 py-4 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors">
                {label}
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
            ))}
          </nav>
        </motion.section>

        {/* CTA */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 md:p-10 text-center">
            <PhoneCall className="h-8 w-8 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-3">{c.ctaTitle}</h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">{c.ctaDesc}</p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-booking-modal", {
                detail: { prefilledFrom: c.prefilledFrom, prefilledTo: c.prefilledTo }
              }))}
              className="inline-block px-10 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20 cursor-pointer"
            >
              {c.ctaBtn}
            </button>
          </div>
        </motion.section>

      </div>

      <GlobalBookingModal />
      <Footer />
    </div>
  );
}

let faqUid = 0;
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const [id] = useState(() => `faq-${++faqUid}`);
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-primary/5 transition-colors"
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="text-sm font-semibold text-foreground">{q}</span>
        <ChevronDown
          className={`h-4 w-4 text-primary shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div id={id} role="region" className="px-5 pb-4 -mt-1 text-sm text-muted-foreground leading-relaxed">{a}</div>
      )}
    </div>
  );
}
