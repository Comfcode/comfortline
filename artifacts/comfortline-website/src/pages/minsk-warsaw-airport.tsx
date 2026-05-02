import { motion } from "framer-motion";
import { Plane, Clock, MapPin, Car, ArrowRight, Info, CheckCircle2, PhoneCall } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLang } from "@/context/language-context";
import { GlobalBookingModal } from "@/components/sections/GlobalBookingModal";

const content = {
  ru: {
    badge: "Трансфер",
    title: "Минск — Аэропорт Варшавы",
    subtitle: "Индивидуальный трансфер на рейс из Варшавы. Международный опыт, фиксированная цена, профессиональный водитель.",
    stats: [
      { label: "Расстояние", value: "~550 км" },
      { label: "Время в пути", value: "6–10 ч" },
      { label: "Класс авто", value: "Комфорт / Бизнес" },
      { label: "Подача машины", value: "До двери" },
    ],
    howTitle: "Как проходит трансфер",
    steps: [
      { icon: "🏠", title: "Подача от двери", desc: "Водитель приедет к вашему адресу в Минске точно в назначенное время." },
      { icon: "🛂", title: "Граница Беларусь–Польша", desc: "Водитель знает все КПП, отслеживает очереди и выбирает оптимальный пропускной пункт." },
      { icon: "✈️", title: "Прибытие в аэропорт", desc: "Доставим прямо к нужному терминалу — Т1 (Chopin) или иному — с запасом до вылета." },
    ],
    airportTitle: "Аэропорт Варшавы Шопен (WAW)",
    airportInfo: [
      { label: "Полное название", value: "Аэропорт Варшавы им. Фредерика Шопена" },
      { label: "IATA код", value: "WAW" },
      { label: "Адрес", value: "Żwirki i Wigury 1, 00-906 Варшава, Польша" },
      { label: "Терминалы", value: "Терминал А (международные) и Терминал B (Schengen)" },
      { label: "Основные авиакомпании", value: "LOT, Ryanair, Wizz Air, Lufthansa, British Airways, Emirates" },
      { label: "До центра Варшавы", value: "Поезд SKM (20 мин), метро S2 (30 мин), такси (25–40 мин)" },
    ],
    altTitle: "Также обслуживаем",
    photosTitle: "Аэропорт в фото",
    photos: [
      { src: "https://www.flynous.com/wp-content/uploads/2020/09/airport-guide-warsaw-chopin-interior.jpg", caption: "Терминал аэропорта Шопен (WAW)" },
      { src: "https://media.istockphoto.com/id/537402974/photo/international-terminal-of-warsaw-chopin-airport-poland.jpg?s=612x612&w=0&k=20&c=I6R38G1m2FGvs3nzauB3gFFJRGztmZ_sfNGv5v7OSqM=", caption: "Международный терминал" },
    ],
    tipsTitle: "Полезная информация",
    tips: [
      "Граница Беларусь–Польша: среднее время 3–8 часов. В пиковые дни — до 12 часов.",
      "Рекомендуем выезжать с запасом 8–10 часов до вылета.",
      "Уточняйте: рейс из Варшавы-Шопен (WAW) или Варшавы-Модлин (WMI) — это разные аэропорты.",
      "Терминал A — для рейсов за пределы Шенгена. Терминал B — рейсы внутри Шенгена.",
      "Бесплатная парковка первые 15 минут (для высадки).",
      "В Терминале A работает ресторан открытый 24/7.",
    ],
    whyTitle: "Почему ComfortLine",
    whyItems: [
      "Фиксированная цена без счётчика и скрытых доплат",
      "Опытный водитель, знающий все погранпереходы",
      "Детские кресла по запросу",
      "Встреча с табличкой при обратном трансфере",
      "Помощь с багажом",
      "Работаем 24/7, включая праздники",
    ],
    ctaTitle: "Забронировать трансфер",
    ctaDesc: "Оставьте заявку — менеджер свяжется с вами в течение 15 минут и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    backBtn: "← Все услуги",
  },
  en: {
    badge: "Transfer",
    title: "Minsk — Warsaw Airport",
    subtitle: "Private transfer to your Warsaw flight. International expertise, fixed price, professional chauffeur.",
    stats: [
      { label: "Distance", value: "~550 km" },
      { label: "Travel time", value: "6–10 hrs" },
      { label: "Vehicle class", value: "Comfort / Business" },
      { label: "Pickup", value: "Door-to-door" },
    ],
    howTitle: "How the transfer works",
    steps: [
      { icon: "🏠", title: "Door pickup", desc: "Your driver arrives at your Minsk address exactly on time." },
      { icon: "🛂", title: "Belarus–Poland border", desc: "Your driver monitors all border checkpoints in real time and selects the fastest crossing." },
      { icon: "✈️", title: "Airport arrival", desc: "Delivered directly to the correct terminal at Chopin Airport with time to spare." },
    ],
    airportTitle: "Warsaw Chopin Airport (WAW)",
    airportInfo: [
      { label: "Full name", value: "Warsaw Frederic Chopin Airport" },
      { label: "IATA code", value: "WAW" },
      { label: "Address", value: "Żwirki i Wigury 1, 00-906 Warsaw, Poland" },
      { label: "Terminals", value: "Terminal A (international) and Terminal B (Schengen)" },
      { label: "Main airlines", value: "LOT, Ryanair, Wizz Air, Lufthansa, British Airways, Emirates" },
      { label: "City transfer", value: "SKM train (20 min), S2 metro (30 min), taxi (25–40 min)" },
    ],
    altTitle: "We also serve",
    photosTitle: "Airport Gallery",
    photos: [
      { src: "https://www.flynous.com/wp-content/uploads/2020/09/airport-guide-warsaw-chopin-interior.jpg", caption: "Warsaw Chopin Airport terminal (WAW)" },
      { src: "https://media.istockphoto.com/id/537402974/photo/international-terminal-of-warsaw-chopin-airport-poland.jpg?s=612x612&w=0&k=20&c=I6R38G1m2FGvs3nzauB3gFFJRGztmZ_sfNGv5v7OSqM=", caption: "International terminal" },
    ],
    tipsTitle: "Useful Information",
    tips: [
      "Belarus–Poland border crossing: average 3–8 hours. Can be up to 12 hours on peak days.",
      "We recommend departing 8–10 hours before your flight.",
      "Check carefully: is your flight from Warsaw Chopin (WAW) or Warsaw Modlin (WMI)? They are different airports.",
      "Terminal A handles non-Schengen routes. Terminal B handles Schengen flights.",
      "Free parking for the first 15 minutes (drop-off zone).",
      "A 24/7 restaurant is available in Terminal A.",
    ],
    whyTitle: "Why ComfortLine",
    whyItems: [
      "Fixed price — no meter, no hidden extras",
      "Driver experienced in all Belarus–Poland border crossings",
      "Child seats available on request",
      "Name-board meet & greet for return transfers",
      "Luggage assistance included",
      "Available 24/7 including holidays",
    ],
    ctaTitle: "Book your transfer",
    ctaDesc: "Submit a request and our manager will contact you within 15 minutes with an exact price.",
    ctaBtn: "Request a booking",
    backBtn: "← All services",
  },
};

export default function MinskWarsawAirportPage() {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <div className="pt-28 pb-14 border-b border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative">
          <a href="/#services" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors mb-6">
            {c.backBtn}
          </a>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-5">
            <Plane className="h-3.5 w-3.5" />
            {c.badge}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            {c.title}
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-10">
            {c.subtitle}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {c.stats.map((s) => (
              <div key={s.label} className="bg-card border border-border rounded-xl p-4">
                <p className="text-primary font-bold text-lg">{s.value}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl py-14 space-y-16">

        {/* How it works */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-8">{c.howTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.steps.map((step, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 relative">
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                  {i + 1}
                </div>
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                {i < c.steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/40 z-10" />
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Airport Info */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Info className="h-5 w-5 text-primary" />
            {c.airportTitle}
          </h2>
          <div className="bg-card border border-border rounded-2xl overflow-hidden mb-6">
            {c.airportInfo.map((row, i) => (
              <div key={i} className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-6 py-4 ${i < c.airportInfo.length - 1 ? "border-b border-border/50" : ""}`}>
                <span className="text-muted-foreground text-sm min-w-[180px] shrink-0">{row.label}</span>
                <span className="text-foreground text-sm font-medium">{row.value}</span>
              </div>
            ))}
          </div>

          {/* Also serves */}
          <a
            href={lang === "ru" ? "/minsk-varshava-modlin-aeroport" : "/minsk-warsaw-modlin-airport"}
            className="flex items-center justify-between gap-4 bg-card border border-border/60 rounded-2xl px-5 py-4 hover:border-primary/50 hover:bg-primary/5 transition-colors group"
          >
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{c.altTitle}</p>
              <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                {lang === "ru" ? "Аэропорт Варшава-Модлин (WMI)" : "Warsaw Modlin Airport (WMI)"}
              </p>
              <p className="text-muted-foreground text-xs mt-0.5">
                {lang === "ru"
                  ? "Ryanair, Wizz Air. В 35 км от центра Варшавы."
                  : "Ryanair, Wizz Air. 35 km north of Warsaw city centre."}
              </p>
            </div>
            <ArrowRight className="h-4 w-4 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.section>

        {/* Airport Photos */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            {c.photosTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {c.photos.map((photo, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden aspect-video bg-card border border-border">
                <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tips */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Clock className="h-5 w-5 text-primary" />
            {c.tipsTitle}
          </h2>
          <ul className="space-y-3">
            {c.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
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

        {/* CTA */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 md:p-10 text-center">
            <PhoneCall className="h-8 w-8 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-3">{c.ctaTitle}</h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">{c.ctaDesc}</p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-booking-modal", {
                detail: {
                  prefilledFrom: lang === "ru" ? "Минск" : "Minsk",
                  prefilledTo: lang === "ru" ? "Аэропорт Варшава-Шопен (WAW)" : "Warsaw Chopin Airport (WAW)",
                }
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
