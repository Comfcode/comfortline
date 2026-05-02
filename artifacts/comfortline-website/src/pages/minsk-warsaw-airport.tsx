import { motion } from "framer-motion";
import { Plane, Clock, MapPin, Car, ArrowRight, ExternalLink, Info, CheckCircle2, PhoneCall } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLang } from "@/context/language-context";

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
    altAirports: [
      { name: "Аэропорт Варшава-Модлин (WMI)", desc: "Используется Ryanair и Wizz Air. Расположен в 35 км к северу от центра Варшавы.", url: "https://www.modlinairport.pl/" },
    ],
    flightBoardTitle: "Расписание рейсов",
    flightBoardDesc: "Актуальное расписание прилётов и вылетов — на официальном сайте аэропорта Варшавы Шопен.",
    arrivalsBtn: "Прилёты (Arrivals)",
    departuresBtn: "Вылеты (Departures)",
    mapTitle: "Карта аэропорта",
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
      { icon: "✈️", title: "Airport arrival", desc: "Delivered directly to the correct terminal — T1 (Chopin) or Modlin — with time to spare." },
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
    altAirports: [
      { name: "Warsaw Modlin Airport (WMI)", desc: "Used by Ryanair and Wizz Air. Located 35 km north of Warsaw city centre.", url: "https://www.modlinairport.pl/" },
    ],
    flightBoardTitle: "Live Flight Schedule",
    flightBoardDesc: "Check up-to-date arrivals and departures on the official Warsaw Chopin Airport website.",
    arrivalsBtn: "Arrivals",
    departuresBtn: "Departures",
    mapTitle: "Airport Map",
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
          <div className="bg-card border border-border/60 rounded-2xl p-5">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">{c.altTitle}</p>
            {c.altAirports.map((ap, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-sm">{ap.name}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{ap.desc}</p>
                </div>
                <a href={ap.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline shrink-0">
                  {lang === "ru" ? "Сайт аэропорта" : "Airport website"} <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Flight Board */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-3">
            <Plane className="h-5 w-5 text-primary" />
            {c.flightBoardTitle}
          </h2>
          <p className="text-muted-foreground text-sm mb-6">{c.flightBoardDesc}</p>
          <div className="bg-card border border-border rounded-2xl p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex-1">
              <p className="font-semibold text-foreground text-sm mb-1">Warsaw Chopin Airport — WAW</p>
              <p className="text-muted-foreground text-xs">lotnisko-chopina.pl</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://www.lotnisko-chopina.pl/en/flight-board/arrivals.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <Plane className="h-4 w-4 rotate-180" />
                {c.arrivalsBtn}
                <ExternalLink className="h-3.5 w-3.5 opacity-70" />
              </a>
              <a
                href="https://www.lotnisko-chopina.pl/en/flight-board/departures.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary text-primary text-sm font-semibold hover:bg-primary/10 transition-colors"
              >
                <Plane className="h-4 w-4" />
                {c.departuresBtn}
                <ExternalLink className="h-3.5 w-3.5 opacity-70" />
              </a>
            </div>
          </div>
        </motion.section>

        {/* Map */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            {c.mapTitle}
          </h2>
          <div className="rounded-2xl overflow-hidden border border-border" style={{ height: 380 }}>
            <iframe
              title="Warsaw Chopin Airport Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.1!2d20.967900!3d52.167200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47192da5d5af2e35%3A0x6c3e2a3f2d6a0a6f!2sWarsaw%20Chopin%20Airport!5e0!3m2!1sen!2sby!4v1700000000001"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
            <a
              href="/#contact"
              className="inline-block px-10 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              {c.ctaBtn}
            </a>
          </div>
        </motion.section>

      </div>

      <Footer />
    </div>
  );
}
