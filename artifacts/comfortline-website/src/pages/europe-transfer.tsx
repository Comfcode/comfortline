import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLang } from "@/context/language-context";
import { GlobalBookingModal } from "@/components/sections/GlobalBookingModal";
import { Seo } from "@/seo/Seo";

const countries = [
  {
    flag: "🇱🇹",
    nameRu: "Литва",
    nameEn: "Lithuania",
    descRu: "Вильнюс, Каунас, Клайпеда — трансферы к городам, аэропортам и бизнес-центрам.",
    descEn: "Vilnius, Kaunas, Klaipėda — transfers to cities, airports and business centres.",
    citiesRu: ["Вильнюс (VNO)", "Каунас (KUN)", "Аэропорт Каунаса"],
    citiesEn: ["Vilnius (VNO)", "Kaunas (KUN)", "Kaunas Airport"],
    href: "/lithuania-transfer",
    hrefRu: "/трансфер-в-литву",
  },
  {
    flag: "🇱🇻",
    nameRu: "Латвия",
    nameEn: "Latvia",
    descRu: "Рига — столица с ганзейской архитектурой. Аэропорт RIX и трансфер в центр.",
    descEn: "Riga — a Hanseatic capital with a magnificent Old Town. RIX airport and city centre.",
    citiesRu: ["Рига (RIX)", "Центр Риги", "Юрмала"],
    citiesEn: ["Riga (RIX)", "Riga city centre", "Jūrmala"],
    href: "/latvia-transfer",
    hrefRu: "/трансфер-в-латвию",
  },
  {
    flag: "🇵🇱",
    nameRu: "Польша",
    nameEn: "Poland",
    descRu: "Варшава — аэропорты Шопен (WAW) и Модлин, плюс городской трансфер.",
    descEn: "Warsaw — Chopin (WAW) and Modlin airports, plus city-centre transfers.",
    citiesRu: ["Варшава (WAW)", "Варшава Модлин", "Центр Варшавы"],
    citiesEn: ["Warsaw (WAW)", "Warsaw Modlin", "Warsaw city centre"],
    href: "/poland-transfer",
    hrefRu: "/трансфер-в-польшу",
  },
  {
    flag: "🇫🇷",
    nameRu: "Франция",
    nameEn: "France",
    descRu: "Париж CDG и центр города — дальний трансфер для деловых поездок и туризма.",
    descEn: "Paris CDG and city centre — long-distance transfers for business and leisure.",
    citiesRu: ["Париж CDG", "Центр Парижа"],
    citiesEn: ["Paris CDG", "Paris city centre"],
    href: "/france-transfer",
    hrefRu: "/трансфер-во-францию",
  },
  {
    flag: "🇩🇪",
    nameRu: "Германия",
    nameEn: "Germany",
    descRu: "Берлин — столичный трансфер, деловые поездки и туризм из Минска.",
    descEn: "Berlin — capital city transfers, business travel and tourism from Minsk.",
    citiesRu: ["Берлин"],
    citiesEn: ["Berlin"],
    href: "/germany-transfer",
    hrefRu: "/трансфер-в-германию",
  },
];

export default function EuropeTransferPage() {
  const { lang } = useLang();
  const isRu = lang === "ru";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        titleRu="Трансферы по Европе из Минска | Литва, Латвия, Польша, Германия, Франция | ComfortLine"
        titleEn="Transfers across Europe from Minsk | Lithuania, Latvia, Poland, Germany, France | ComfortLine"
        descRu="Прямые трансферы из Минска в Европу: Литва, Латвия, Польша, Германия, Франция. Фиксированная цена, опытные водители, без пересадок."
        descEn="Direct transfers from Minsk to Europe: Lithuania, Latvia, Poland, Germany, France. Fixed prices, professional drivers, door-to-door service."
        pathRu="/трансфер-в-европу"
        pathEn="/europe-transfer"
        breadcrumbsRu={[{ name: "Главная", path: "/" }, { name: "Трансферы в Европу", path: "/трансфер-в-европу" }]}
        breadcrumbsEn={[{ name: "Home", path: "/" }, { name: "Europe Transfers", path: "/europe-transfer" }]}
      />
      <Navbar />

      {/* Hero */}
      <div className="pt-28 pb-14 border-b border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative">
          <a href="/#services" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors mb-6">
            {isRu ? "← Все услуги" : "← All services"}
          </a>
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary mb-4">
            {isRu ? "Трансферы по Европе" : "European Transfers"}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            {isRu ? "Из Минска — в Европу" : "From Minsk to Europe"}
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            {isRu
              ? "Прямые трансферы в Литву, Латвию, Польшу, Францию и Германию. Выберите страну — мы покажем доступные направления и рассчитаем цену в ближайшее время."
              : "Direct transfers to Lithuania, Latvia, Poland, France and Germany. Pick a country — we'll show available destinations and send you an exact price shortly."}
          </p>
        </div>
      </div>

      {/* Country cards */}
      <div className="container mx-auto px-4 md:px-6 max-w-4xl py-14">
        <h2 className="text-2xl font-bold text-foreground mb-8">
          {isRu ? "Выберите страну" : "Choose a country"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {countries.map((country, i) => {
            const name = isRu ? country.nameRu : country.nameEn;
            const desc = isRu ? country.descRu : country.descEn;
            const cities = isRu ? country.citiesRu : country.citiesEn;
            const href = isRu ? country.hrefRu : country.href;

            return (
              <motion.a
                key={country.nameEn}
                href={href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group bg-card border border-border hover:border-primary/50 rounded-2xl p-6 flex flex-col gap-4 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-4xl leading-none">{country.flag}</span>
                  <div>
                    <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">{name}</h3>
                    <p className="text-muted-foreground text-xs">{isRu ? "Минск →" : "Minsk →"} {name}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {cities.map((city) => (
                    <span key={city} className="text-[11px] px-2.5 py-1 rounded-full bg-primary/8 text-primary font-medium">
                      {city}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  {isRu ? "Смотреть направления" : "View destinations"}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-primary/30 bg-primary/5 p-8 md:p-10 text-center"
        >
          <PhoneCall className="h-8 w-8 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-3">
            {isRu ? "Не нашли нужное направление?" : "Can't find your destination?"}
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
            {isRu
              ? "Мы перевозим в любую точку Европы. Оставьте заявку с маршрутом — рассчитаем цену в ближайшее время."
              : "We transfer to any point in Europe. Leave a request with your route — we'll calculate the price shortly."}
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-booking-modal", {
              detail: { prefilledFrom: isRu ? "Минск" : "Minsk", prefilledTo: "" }
            }))}
            className="inline-block px-10 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20 cursor-pointer"
          >
            {isRu ? "Оставить заявку" : "Request a booking"}
          </button>
        </motion.div>
      </div>

      <GlobalBookingModal />
      <Footer />
    </div>
  );
}
