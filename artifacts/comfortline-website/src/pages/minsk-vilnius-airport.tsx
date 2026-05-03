import { motion } from "framer-motion";
import { Plane, Clock, MapPin, Car, ArrowRight, Info, CheckCircle2, PhoneCall, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLang } from "@/context/language-context";
import { GlobalBookingModal } from "@/components/sections/GlobalBookingModal";
import { Seo } from "@/seo/Seo";
import { taxiServiceJsonLd } from "@/seo/jsonld";
import { SITE_URL } from "@/seo/seo-config";

const content = {
  ru: {
    badge: "Трансфер",
    title: "Трансфер Минск — Аэропорт Вильнюса (VNO)",
    subtitle: "Индивидуальный трансфер Минск — аэропорт Вильнюса (VNO) на ваш рейс. Подача от двери в Минске, фиксированная цена, опытный водитель и помощь на границе Беларусь–Литва.",
    seoIntro: "Заказать трансфер Минск — Вильнюс аэропорт можно онлайн или по телефону. Цена фиксированная, без счётчика. Маршрут ~175 км через погранпереход Каменный Лог / Котловка обычно занимает 2,5–5 часов в зависимости от очередей на границе. Подаём комфорт-класс или бизнес-седан Mercedes E-class — выбираете под бюджет и количество багажа.",
    stats: [
      { label: "Расстояние", value: "~175 км" },
      { label: "Время в пути", value: "2,5–5 ч" },
      { label: "Класс авто", value: "Комфорт / Бизнес" },
      { label: "Подача машины", value: "До двери" },
    ],
    howTitle: "Как проходит трансфер",
    steps: [
      { icon: MapPin, title: "Подача от двери", desc: "Водитель приедет к вашему адресу в Минске точно в назначенное время." },
      { icon: ShieldCheck, title: "Пересечение границы", desc: "Беларусь–Литва. Водитель поможет на КПП, знает актуальные маршруты и очереди." },
      { icon: Plane, title: "Прибытие в аэропорт", desc: "Доставим прямо к нужному терминалу с запасом до вылета." },
    ],
    airportTitle: "Аэропорт Вильнюса (VNO)",
    airportInfo: [
      { label: "Полное название", value: "Международный аэропорт Вильнюс" },
      { label: "IATA код", value: "VNO" },
      { label: "Адрес", value: "Rodūnios kelias 10A, Вильнюс, Литва" },
      { label: "Терминалы", value: "1 терминал (все рейсы)" },
      { label: "Основные авиакомпании", value: "Ryanair, Wizz Air, LOT, Turkish Airlines, flydubai" },
      { label: "Трансфер в центр", value: "Автобус №1 (40 мин), такси (25–35 мин)" },
    ],
    photosTitle: "Аэропорт в фото",
    photos: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/EYVI-VNO_by_Augustas_Didzgalvis.jpg/1280px-EYVI-VNO_by_Augustas_Didzgalvis.jpg", caption: "Терминал аэропорта Вильнюса (VNO)" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/EYVI-VNO_by_Augustas_Didzgalvis.jpg/1280px-EYVI-VNO_by_Augustas_Didzgalvis.jpg", caption: "Зал вылета" },
    ],
    tipsTitle: "Полезная информация",
    tips: [
      "Аэропорт открыт круглосуточно. Рейсы есть ранним утром и поздно ночью.",
      "Пограничный контроль Беларусь–Литва: в среднем 1–3 часа. В пиковые дни — до 5 часов.",
      "Рекомендуем выезжать с запасом 4–5 часов до вылета.",
      "Бесплатный Wi-Fi, кафе и зоны отдыха в единственном терминале.",
      "Стойка регистрации открывается за 2–3 часа до вылета.",
      "Вильнюс — альтернатива Варшаве: зачастую дешевле перелёт из VNO.",
    ],
    whyTitle: "Почему ComfortLine",
    whyItems: [
      "Фиксированная цена без счётчика и скрытых доплат",
      "Опытный водитель с навыком пограничного перехода",
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
    title: "Minsk to Vilnius Airport (VNO) Transfer",
    subtitle: "Private door-to-door transfer from Minsk to Vilnius International Airport (VNO). Fixed price, professional driver, full assistance at the Belarus–Lithuania border.",
    seoIntro: "Book a Minsk to Vilnius airport transfer online or by phone. Fixed price, no meter, no surge. The ~175 km route via the Kamenny Log / Kotlovka border crossing typically takes 2.5–5 hours depending on queues. Choose comfort class or a Mercedes E-class business sedan — pick the right fit for your budget and luggage.",
    stats: [
      { label: "Distance", value: "~175 km" },
      { label: "Travel time", value: "2.5–5 hrs" },
      { label: "Vehicle class", value: "Comfort / Business" },
      { label: "Pickup", value: "Door-to-door" },
    ],
    howTitle: "How the transfer works",
    steps: [
      { icon: MapPin, title: "Door pickup", desc: "Your driver arrives at your Minsk address exactly on time." },
      { icon: ShieldCheck, title: "Border crossing", desc: "Belarus–Lithuania. Your driver knows the border routines and monitors queue conditions." },
      { icon: Plane, title: "Airport arrival", desc: "Delivered directly to the right terminal well ahead of your flight." },
    ],
    airportTitle: "Vilnius Airport (VNO)",
    airportInfo: [
      { label: "Full name", value: "Vilnius International Airport" },
      { label: "IATA code", value: "VNO" },
      { label: "Address", value: "Rodūnios kelias 10A, Vilnius, Lithuania" },
      { label: "Terminals", value: "1 terminal (all flights)" },
      { label: "Main airlines", value: "Ryanair, Wizz Air, LOT, Turkish Airlines, flydubai" },
      { label: "City transfer", value: "Bus #1 (40 min), taxi (25–35 min)" },
    ],
    photosTitle: "Airport Gallery",
    photos: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/EYVI-VNO_by_Augustas_Didzgalvis.jpg/1280px-EYVI-VNO_by_Augustas_Didzgalvis.jpg", caption: "Vilnius Airport terminal (VNO)" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/EYVI-VNO_by_Augustas_Didzgalvis.jpg/1280px-EYVI-VNO_by_Augustas_Didzgalvis.jpg", caption: "Departures lounge" },
    ],
    tipsTitle: "Useful Information",
    tips: [
      "The airport operates 24/7. Early morning and late-night flights are common.",
      "Belarus–Lithuania border crossing: 1–3 hours on average, up to 5 hours on busy days.",
      "We recommend departing 4–5 hours before your flight.",
      "Free Wi-Fi, cafes and rest zones are available in the single terminal.",
      "Check-in desks open 2–3 hours before departure.",
      "Vilnius is a popular alternative to Warsaw — often cheaper flights from VNO.",
    ],
    whyTitle: "Why ComfortLine",
    whyItems: [
      "Fixed price — no meter, no hidden extras",
      "Driver experienced in border crossings",
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

export default function MinskVilniusAirportPage() {
  const { lang } = useLang();
  const c = content[lang];
  const isRu = lang === "ru";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        titleRu="Трансфер Минск — Аэропорт Вильнюса (VNO) | ComfortLine"
        titleEn="Minsk to Vilnius Airport (VNO) Private Transfer | ComfortLine"
        descRu="Индивидуальный трансфер из Минска в международный аэропорт Вильнюса (VNO). Фиксированная цена, подача от двери, опытный водитель, помощь на границе Беларусь–Литва. ~175 км, 2,5–5 ч. Заказ онлайн или +375 (29) 155-27-76."
        descEn="Private door-to-door transfer from Minsk to Vilnius International Airport (VNO). Fixed price, English-speaking driver, comfort or business class. ~175 km, 2.5–5 hrs incl. Belarus–Lithuania border. Book online or call +375 (29) 155-27-76."
        pathRu="/трансфер-минск-вильнюс-аэропорт"
        pathEn="/minsk-vilnius-airport"
        keywordsRu="трансфер минск вильнюс, трансфер минск аэропорт вильнюса, такси минск вильнюс аэропорт, vno трансфер, минск vilnius трансфер, заказ авто в аэропорт вильнюса"
        keywordsEn="minsk vilnius airport transfer, minsk to vno taxi, private transfer minsk vilnius, vilnius international airport ride, belarus lithuania border transfer"
        breadcrumbsRu={[
          { name: "Главная", path: "/" },
          { name: "Трансфер Минск — Аэропорт Вильнюса (VNO)", path: "/трансфер-минск-вильнюс-аэропорт" },
        ]}
        breadcrumbsEn={[
          { name: "Home", path: "/" },
          { name: "Minsk — Vilnius Airport (VNO)", path: "/minsk-vilnius-airport" },
        ]}
        jsonLd={taxiServiceJsonLd({
          lang,
          name: isRu ? "Трансфер Минск — Аэропорт Вильнюса (VNO)" : "Minsk to Vilnius Airport (VNO) Transfer",
          description: isRu
            ? "Индивидуальный трансфер из Минска в международный аэропорт Вильнюса (VNO). Фиксированная цена, подача от двери, опытный водитель."
            : "Private door-to-door transfer from Minsk to Vilnius International Airport (VNO). Fixed price, professional driver.",
          url: SITE_URL + (isRu ? "/трансфер-минск-вильнюс-аэропорт" : "/minsk-vilnius-airport"),
          fromName: isRu ? "Минск" : "Minsk",
          toName: isRu ? "Аэропорт Вильнюса (VNO)" : "Vilnius International Airport (VNO)",
        })}
      />
      <Navbar />

      {/* Hero */}
      <div className="pt-28 pb-14 border-b border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative">
          <a href="/#services" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors mb-6">
            {c.backBtn}
          </a>
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary mb-4">
            {c.badge}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            {c.title}
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-6">
            {c.subtitle}
          </p>
          <p className="text-muted-foreground/90 text-sm md:text-[15px] leading-relaxed max-w-3xl mb-10">
            {c.seoIntro}
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
            {c.steps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 relative">
                  <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                    {i + 1}
                  </div>
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

        {/* Airport Info */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Info className="h-5 w-5 text-primary" />
            {c.airportTitle}
          </h2>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {c.airportInfo.map((row, i) => (
              <div key={i} className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-6 py-4 ${i < c.airportInfo.length - 1 ? "border-b border-border/50" : ""}`}>
                <span className="text-muted-foreground text-sm min-w-[180px] shrink-0">{row.label}</span>
                <span className="text-foreground text-sm font-medium">{row.value}</span>
              </div>
            ))}
          </div>
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

        {/* Related routes — internal SEO links */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Plane className="h-5 w-5 text-primary" />
            {isRu ? "Похожие направления" : "Related transfers"}
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-2xl">
            {isRu
              ? "Если из Вильнюса нет нужного рейса — рассмотрите альтернативные аэропорты с прямым трансфером из Минска:"
              : "If Vilnius doesn't have your flight, consider these alternative airports with direct transfer from Minsk:"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href={isRu ? "/трансфер-минск-варшава-шопен" : "/minsk-warsaw-airport"}
              className="block bg-card border border-border rounded-2xl p-5 hover:border-primary/50 hover:bg-primary/5 transition-colors group"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {isRu ? "Трансфер Минск — Аэропорт Варшавы Шопен (WAW)" : "Minsk — Warsaw Chopin Airport (WAW)"}
                </p>
                <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {isRu
                  ? "~550 км, 6–10 ч. Главный международный аэропорт Польши. LOT, Lufthansa, Turkish Airlines."
                  : "~550 km, 6–10 hrs. Poland's main international airport. LOT, Lufthansa, Turkish Airlines."}
              </p>
            </a>
            <a
              href={isRu ? "/трансфер-минск-варшава-модлин" : "/minsk-warsaw-modlin-airport"}
              className="block bg-card border border-border rounded-2xl p-5 hover:border-primary/50 hover:bg-primary/5 transition-colors group"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {isRu ? "Трансфер Минск — Аэропорт Варшавы Модлин (WMI)" : "Minsk — Warsaw Modlin Airport (WMI)"}
                </p>
                <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {isRu
                  ? "~600 км, 7–10 ч. Бюджетный хаб Ryanair и Wizz Air, в 35 км от центра Варшавы."
                  : "~600 km, 7–10 hrs. Ryanair and Wizz Air budget hub, 35 km from central Warsaw."}
              </p>
            </a>
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
                  prefilledTo: lang === "ru" ? "Аэропорт Вильнюса (VNO)" : "Vilnius Airport (VNO)",
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
