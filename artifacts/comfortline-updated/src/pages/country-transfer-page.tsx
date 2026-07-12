import { motion } from "framer-motion";
import {
  ArrowRight,
  PhoneCall,
  Clock,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLang } from "@/context/language-context";
import { GlobalBookingModal } from "@/components/sections/GlobalBookingModal";
import { Seo } from "@/seo/Seo";

export interface DestinationCard {
  flag?: string;
  cityRu: string;
  cityEn: string;
  descRu: string;
  descEn: string;
  distanceKm: string;
  travelTime: string;
  href: string;
  hrefRu: string;
  isAvailable?: boolean;
  prefilledTo?: string;
  /** Anchor id appended to `href` (e.g. `#paris-cdg`) so destinations sharing
   * a country page still resolve to a unique, crawlable, deep-linkable URL. */
  slug?: string;
}

export interface CountryContent {
  badge: string;
  title: string;
  subtitle: string;
  destinationsTitle: string;
  destinations: DestinationCard[];
  infoTitle: string;
  infoRows: { label: string; value: string }[];
  includedTitle: string;
  included: string[];
  ctaTitle: string;
  ctaDesc: string;
  ctaBtn: string;
  backBtn: string;
  soonLabel: string;
  bookLabel: string;
  detailsLabel: string;
}

export interface CountrySeo {
  titleRu: string;
  titleEn: string;
  titlePl?: string;
  titleFr?: string;
  descRu: string;
  descEn: string;
  descPl?: string;
  descFr?: string;
  pathRu: string;
  pathEn: string;
  pathPl?: string;
  pathFr?: string;
  breadcrumbRu?: string;
  breadcrumbEn?: string;
}

export interface CountryPageData {
  ru: CountryContent;
  en: CountryContent;
  pl?: CountryContent;
  fr?: CountryContent;
  seo: CountrySeo;
}

interface Props {
  data: CountryPageData;
}

export function CountryTransferPage({ data }: Props) {
  const { lang, locale } = useLang();
  const c = data[locale] ?? data.en;
  const isRu = lang === "ru";
  const routeNameRu = data.ru.title;
  const countrySeoTitleRu = `Такси ${routeNameRu} | Индивидуальные трансферы`;
  const countrySeoDescRu = `Такси и индивидуальные трансферы ${routeNameRu} и обратно. Фиксированная цена за автомобиль, подача от двери, опытный водитель и помощь на границе.`;
  const countryKeywordsRu =
    `такси ${routeNameRu}, индивидуальный трансфер ${routeNameRu}, трансфер ${routeNameRu}, частный трансфер ${routeNameRu}`.toLowerCase();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        titleRu={countrySeoTitleRu}
        titleEn={data.seo.titleEn}
        titlePl={data.seo.titlePl}
        titleFr={data.seo.titleFr}
        descRu={countrySeoDescRu}
        descEn={data.seo.descEn}
        descPl={data.seo.descPl}
        descFr={data.seo.descFr}
        pathRu={data.seo.pathRu}
        pathEn={data.seo.pathEn}
        pathPl={data.seo.pathPl}
        pathFr={data.seo.pathFr}
        keywordsRu={countryKeywordsRu}
        breadcrumbsRu={[
          { name: "Главная", path: "/" },
          {
            name: isRu ? "Европа" : "Europe",
            path: isRu ? "/трансфер-в-европу" : "/europe-transfer",
          },
          {
            name: data.seo.breadcrumbRu || data.ru.title,
            path: data.seo.pathRu,
          },
        ]}
        breadcrumbsEn={[
          { name: "Home", path: "/" },
          { name: "Europe", path: "/europe-transfer" },
          {
            name: data.seo.breadcrumbEn || data.en.title,
            path: data.seo.pathEn,
          },
        ]}
      />
      <Navbar />

      {/* Hero */}
      <div className="pt-28 pb-14 border-b border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative">
          <a
            href={isRu ? "/трансфер-в-европу" : "/europe-transfer"}
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            {c.backBtn}
          </a>
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary mb-4">
            {c.badge}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            {c.title}
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            {c.subtitle}
          </p>
          {isRu && (
            <p className="text-muted-foreground/90 text-sm leading-relaxed max-w-2xl mt-4">
              Закажите такси или индивидуальный трансфер по направлению{" "}
              {routeNameRu} и обратно. Цена фиксируется за автомобиль до выезда.
            </p>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl py-14 space-y-16">
        {/* Destinations grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {c.destinationsTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {c.destinations.map((dest, i) => {
              const city = isRu ? dest.cityRu : dest.cityEn;
              const desc = isRu ? dest.descRu : dest.descEn;
              const baseHref = isRu ? dest.hrefRu : dest.href;
              const href = dest.slug ? `${baseHref}#${dest.slug}` : baseHref;
              const available = dest.isAvailable !== false;

              return (
                <motion.div
                  key={i}
                  id={dest.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/40 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                        <h3 className="font-bold text-foreground text-base">
                          {city}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-primary/70" />
                      {dest.travelTime}
                    </span>
                    <span>{dest.distanceKm}</span>
                  </div>

                  <a
                    href={href}
                    onClick={(e) => {
                      if (!available) {
                        e.preventDefault();
                        window.dispatchEvent(
                          new CustomEvent("open-booking-modal", {
                            detail: {
                              prefilledFrom: isRu ? "Минск" : "Minsk",
                              prefilledTo: dest.prefilledTo || city,
                            },
                          }),
                        );
                      }
                    }}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition-opacity group-hover:gap-3"
                  >
                    {available ? c.detailsLabel : c.bookLabel}
                    <ArrowRight className="h-4 w-4 transition-all" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Route info */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {c.infoTitle}
          </h2>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {c.infoRows.map((row, i) => (
              <div
                key={i}
                className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-6 py-4 ${i < c.infoRows.length - 1 ? "border-b border-border/50" : ""}`}
              >
                <span className="text-muted-foreground text-sm min-w-[220px] shrink-0">
                  {row.label}
                </span>
                <span className="text-foreground text-sm font-medium">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* What's included */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {c.includedTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {c.included.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-card border border-border rounded-xl px-5 py-4"
              >
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 md:p-10 text-center">
            <PhoneCall className="h-8 w-8 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-3">
              {c.ctaTitle}
            </h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              {c.ctaDesc}
            </p>
            <button
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("open-booking-modal", {
                    detail: {
                      prefilledFrom: isRu ? "Минск" : "Minsk",
                      prefilledTo: "",
                    },
                  }),
                )
              }
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
