import { motion } from "framer-motion";
import { Plane, Clock, MapPin, Car, ArrowRight, Info, CheckCircle2, PhoneCall, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLang } from "@/context/language-context";
import { GlobalBookingModal } from "@/components/sections/GlobalBookingModal";
import { Seo } from "@/seo/Seo";
import { taxiServiceJsonLd } from "@/seo/jsonld";
import { SITE_URL } from "@/seo/seo-config";
import { getHomeSectionHref } from "@/lib/lang-urls";

const content = {
  ru: {
    badge: "Трансфер",
    title: "Трансфер Минск — Аэропорт Каунаса (KUN)",
    subtitle: "Индивидуальный трансфер из Минска в международный аэропорт Каунаса (KUN). Подача от двери, фиксированная цена, опытный водитель и помощь на границе Беларусь–Литва.",
    seoIntro: "Заказать трансфер Минск — Каунас аэропорт можно онлайн или по телефону. Цена фиксированная, без счётчика. Маршрут ~280 км через погранпереход Каменный Лог / Бенякони обычно занимает 4–7 часов в зависимости от очередей. Каунас — второй по величине аэропорт Литвы и крупный хаб Ryanair.",
    stats: [
      { label: "Расстояние", value: "~280 км" },
      { label: "Время в пути", value: "4–7 ч" },
      { label: "Класс авто", value: "Комфорт / Бизнес" },
      { label: "Подача машины", value: "До двери" },
    ],
    howTitle: "Как проходит трансфер",
    steps: [
      { icon: MapPin, title: "Подача от двери", desc: "Водитель приедет к вашему адресу в Минске точно в назначенное время." },
      { icon: ShieldCheck, title: "Пересечение границы", desc: "Беларусь–Литва. Водитель поможет на КПП, знает актуальные маршруты и очереди." },
      { icon: Plane, title: "Прибытие в аэропорт", desc: "Доставим прямо к терминалу Каунасского аэропорта с запасом до вылета." },
    ],
    airportTitle: "Аэропорт Каунаса (KUN)",
    airportInfo: [
      { label: "Полное название", value: "Международный аэропорт Каунас" },
      { label: "IATA код", value: "KUN" },
      { label: "Адрес", value: "Oro uosto g. 4, Karmėlava, Литва" },
      { label: "Терминалы", value: "1 терминал (все рейсы)" },
      { label: "Основные авиакомпании", value: "Ryanair, Wizz Air, LOT, Lufthansa" },
      { label: "Трансфер в центр", value: "Автобус №29G (40 мин), такси (15–20 мин)" },
    ],
    photosTitle: "Аэропорт в фото",
    photos: [
      { src: "/img/kaunas/airport-terminal.png", caption: "Терминал аэропорта Каунаса (KUN)" },
      { src: "/img/kaunas/airport-building.png", caption: "Здание аэропорта Каунаса" },
    ],
    tipsTitle: "Полезная информация",
    tips: [
      "Аэропорт открыт круглосуточно. Большинство рейсов — ранним утром.",
      "Пограничный контроль Беларусь–Литва: 2–5 часов. В пиковые дни — до 7 часов.",
      "Рекомендуем выезжать с запасом 5–6 часов до вылета.",
      "Бесплатный Wi-Fi, кафе и зоны отдыха в едином терминале.",
      "Стойка регистрации Ryanair открывается за 2 часа до вылета.",
      "Каунас часто дешевле Вильнюса — лоукостеры держат низкие цены.",
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
    ctaDesc: "Оставьте заявку — менеджер свяжется с вами в ближайшее время и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    backBtn: "← Все услуги",
  },
  en: {
    badge: "Transfer",
    title: "Minsk to Kaunas Airport (KUN) Transfer",
    subtitle: "Private door-to-door transfer from Minsk to Kaunas International Airport (KUN). Fixed price, professional driver, full assistance at the Belarus–Lithuania border.",
    seoIntro: "Book a Minsk to Kaunas airport transfer online or by phone. Fixed price, no meter, no surge. The ~280 km route via the Kamenny Log / Benyakoni border crossing typically takes 4–7 hours depending on queues. Kaunas is Lithuania's second-largest airport and a major Ryanair hub.",
    stats: [
      { label: "Distance", value: "~280 km" },
      { label: "Travel time", value: "4–7 hrs" },
      { label: "Vehicle class", value: "Comfort / Business" },
      { label: "Pickup", value: "Door-to-door" },
    ],
    howTitle: "How the transfer works",
    steps: [
      { icon: MapPin, title: "Door pickup", desc: "Your driver arrives at your Minsk address exactly on time." },
      { icon: ShieldCheck, title: "Border crossing", desc: "Belarus–Lithuania. Your driver knows the border routines and monitors queue conditions." },
      { icon: Plane, title: "Airport arrival", desc: "Delivered directly to the Kaunas Airport terminal well ahead of your flight." },
    ],
    airportTitle: "Kaunas Airport (KUN)",
    airportInfo: [
      { label: "Full name", value: "Kaunas International Airport" },
      { label: "IATA code", value: "KUN" },
      { label: "Address", value: "Oro uosto g. 4, Karmėlava, Lithuania" },
      { label: "Terminals", value: "1 terminal (all flights)" },
      { label: "Main airlines", value: "Ryanair, Wizz Air, LOT, Lufthansa" },
      { label: "City transfer", value: "Bus #29G (40 min), taxi (15–20 min)" },
    ],
    photosTitle: "Airport Gallery",
    photos: [
      { src: "/img/kaunas/airport-terminal.png", caption: "Kaunas Airport terminal (KUN)" },
      { src: "/img/kaunas/airport-building.png", caption: "Kaunas Airport building" },
    ],
    tipsTitle: "Useful Information",
    tips: [
      "The airport operates 24/7. Most flights depart in the early morning.",
      "Belarus–Lithuania border crossing: 2–5 hours, up to 7 hours on busy days.",
      "We recommend departing 5–6 hours before your flight.",
      "Free Wi-Fi, cafes and rest zones available in the single terminal.",
      "Ryanair check-in opens 2 hours before departure.",
      "Kaunas is often cheaper than Vilnius — low-cost carriers keep prices down.",
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
    ctaDesc: "Submit a request and our manager will contact you shortly with an exact price.",
    ctaBtn: "Request a booking",
    backBtn: "← All services",
  },
  pl: {
    badge: "Przenosić",
    title: "Transfer z Mińska na lotnisko w Kownie (KUN).",
    subtitle: "Prywatny transfer od drzwi do drzwi z Mińska na międzynarodowe lotnisko w Kownie (KUN). Stała cena, profesjonalny kierowca, pełna pomoc na granicy białorusko-litewskiej.",
    seoIntro: "Zarezerwuj transfer z lotniska Mińsk do Kowna online lub telefonicznie. Stała cena, brak licznika, brak przepięć. Trasa o długości około 280 km przez przejście graniczne Kamenny Log / Benyakoni zajmuje zazwyczaj 4–7 godzin, w zależności od kolejek. Kowno to drugie co do wielkości lotnisko na Litwie i główny węzeł komunikacyjny Ryanair.",
    stats: [
      { label: "Dystans", value: "~280 km" },
      { label: "Czas podróży", value: "4–7 godz" },
      { label: "Klasa pojazdu", value: "Komfort / Biznes" },
      { label: "Ulec poprawie", value: "Od drzwi do drzwi" },
    ],
    howTitle: "Jak działa transfer",
    steps: [
      { icon: MapPin, title: "Odbiór drzwi", desc: "Twój kierowca dotrze pod Twój adres w Mińsku dokładnie na czas." },
      { icon: ShieldCheck, title: "Przejście graniczne", desc: "Białoruś – Litwa. Twój kierowca zna procedury graniczne i monitoruje stan kolejek." },
      { icon: Plane, title: "Przylot na lotnisko", desc: "Dostawa bezpośrednio do terminalu na lotnisku w Kownie na długo przed lotem." },
    ],
    airportTitle: "Port lotniczy Kowno (KUN)",
    airportInfo: [
      { label: "Pełne imię i nazwisko", value: "Międzynarodowy port lotniczy w Kownie" },
      { label: "Kod IATA", value: "KUN" },
      { label: "Adres", value: "Oro uosto g. 4, Karmėlava, Litwa" },
      { label: "Terminale", value: "1 terminal (wszystkie loty)" },
      { label: "Główne linie lotnicze", value: "Ryanair, Wizz Air, LOT, Lufthansa" },
      { label: "Transfer miejski", value: "Autobus nr 29G (40 min), taksówka (15–20 min)" },
    ],
    photosTitle: "Galeria Lotniska",
    photos: [
      { src: "/img/kaunas/airport-terminal.png", caption: "Terminal lotniska w Kownie (KUN)" },
      { src: "/img/kaunas/airport-building.png", caption: "Budynek lotniska w Kownie" },
    ],
    tipsTitle: "Przydatne informacje",
    tips: [
      "Lotnisko działa 24 godziny na dobę, 7 dni w tygodniu. Większość lotów odlatuje wcześnie rano.",
      "Przejście graniczne Białoruś – Litwa: 2–5 godzin, w pracowite dni do 7 godzin.",
      "Zalecamy wyruszenie na 5–6 godzin przed lotem.",
      "Darmowe Wi-Fi, kawiarnie i strefy odpoczynku dostępne w jednym terminalu.",
      "Odprawa Ryanair rozpoczyna się na 2 godziny przed odlotem.",
      "Kowno jest często tańsze niż Wilno — tani przewoźnicy utrzymują ceny na niskim poziomie.",
    ],
    whyTitle: "Dlaczego ComfortLine",
    whyItems: [
      "Stała cena — bez licznika, bez ukrytych dodatków",
      "Kierowca doświadczony w przejściach granicznych",
      "Foteliki dziecięce dostępne na życzenie",
      "Spotkania i powitania na tablicy ogłoszeń w sprawie transferów powrotnych",
      "Pomoc bagażowa wliczona w cenę",
      "Dostępność 24 godziny na dobę, 7 dni w tygodniu, także w święta",
    ],
    ctaTitle: "Zarezerwuj swój transfer",
    ctaDesc: "Prześlij zapytanie, a nasz menedżer wkrótce skontaktuje się z Tobą i poda dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    backBtn: "← Wszystkie usługi",
  },
  fr: {
    badge: "Transfert",
    title: "Transfert de Minsk à l'aéroport de Kaunas (KUN)",
    subtitle: "Transfert privé de porte à porte de Minsk à l'aéroport international de Kaunas (KUN). Prix ​​fixe, chauffeur professionnel, assistance complète à la frontière Biélorussie-Lituanie.",
    seoIntro: "Réservez un transfert de l'aéroport de Minsk à Kaunas en ligne ou par téléphone. Prix ​​fixe, pas de compteur, pas de surtension. Le parcours d'environ 280 km via le poste frontière de Kamenny Log / Benyakoni prend généralement 4 à 7 heures en fonction des files d'attente. Kaunas est le deuxième plus grand aéroport de Lituanie et un hub majeur de Ryanair.",
    stats: [
      { label: "Distance", value: "~280km" },
      { label: "Temps de trajet", value: "4 à 7 heures" },
      { label: "Classe de véhicule", value: "Confort / Affaires" },
      { label: "Ramasser", value: "Porte-à-porte" },
    ],
    howTitle: "Comment fonctionne le transfert",
    steps: [
      { icon: MapPin, title: "Ramassage de porte", desc: "Votre chauffeur arrive à votre adresse à Minsk exactement à l'heure." },
      { icon: ShieldCheck, title: "Poste frontière", desc: "Biélorussie – Lituanie. Votre chauffeur connaît les routines frontalières et surveille les conditions de file d'attente." },
      { icon: Plane, title: "Arrivée à l'aéroport", desc: "Livré directement au terminal de l'aéroport de Kaunas bien avant votre vol." },
    ],
    airportTitle: "Aéroport de Kaunas (KUN)",
    airportInfo: [
      { label: "Nom et prénom", value: "Aéroport international de Kaunas" },
      { label: "Code IATA", value: "KUN" },
      { label: "Adresse", value: "Oro uosto g. 4, Karmėlava, Lituanie" },
      { label: "Terminaux", value: "1 terminal (tous les vols)" },
      { label: "Principales compagnies aériennes", value: "Ryanair, Wizz Air, LOT, Lufthansa" },
      { label: "Transfert de ville", value: "Bus n° 29G (40 min), taxi (15-20 min)" },
    ],
    photosTitle: "Galerie de l'aéroport",
    photos: [
      { src: "/img/kaunas/airport-terminal.png", caption: "Terminal de l'aéroport de Kaunas (KUN)" },
      { src: "/img/kaunas/airport-building.png", caption: "Bâtiment de l'aéroport de Kaunas" },
    ],
    tipsTitle: "Informations utiles",
    tips: [
      "L'aéroport fonctionne 24h/24 et 7j/7. La plupart des vols partent tôt le matin.",
      "Passage de la frontière entre la Biélorussie et la Lituanie : 2 à 5 heures, jusqu'à 7 heures les jours de pointe.",
      "Nous vous recommandons de partir 5 à 6 heures avant votre vol.",
      "Wi-Fi gratuit, cafés et zones de repos disponibles dans le terminal unique.",
      "L'enregistrement Ryanair ouvre 2 heures avant le départ.",
      "Kaunas est souvent moins cher que Vilnius – les compagnies low-cost maintiennent les prix bas.",
    ],
    whyTitle: "Pourquoi ComfortLine",
    whyItems: [
      "Prix ​​fixe — pas de compteur, pas d'extras cachés",
      "Chauffeur expérimenté aux passages de frontières",
      "Sièges enfants disponibles sur demande",
      "Rencontre et accueil sur un tableau de noms pour les transferts de retour",
      "Assistance bagages incluse",
      "Disponible 24h/24 et 7j/7 y compris les jours fériés",
    ],
    ctaTitle: "Réservez votre transfert",
    ctaDesc: "Soumettez une demande et notre responsable vous contactera sous peu avec un prix exact.",
    ctaBtn: "Demander une réservation",
    backBtn: "← Tous les services",
  },
};

export default function MinskKaunasAirportPage() {
  const { lang, locale } = useLang();
  const c = content[locale as keyof typeof content] ?? content.en;
  const isRu = lang === "ru";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        titleRu="Такси Минск — аэропорт Каунаса | Индивидуальный трансфер"
        titleEn="Minsk to Kaunas Airport (KUN) | ComfortLine"
        descRu="Такси и индивидуальный трансфер Минск — аэропорт Каунаса (KUN) — Минск. Фиксированная цена, подача от двери, помощь на границе, 24/7."
        descEn="Private Minsk to Kaunas Airport (KUN) transfer: 280 km, fixed fare, door-to-door pickup and border assistance."
        pathRu="/трансфер-минск-каунас-аэропорт"
        pathEn="/minsk-kaunas-airport"
        keywordsRu="такси минск аэропорт каунаса, такси аэропорт каунаса минск, индивидуальный трансфер минск каунас, трансфер минск kun, частный трансфер минск каунас"
        keywordsEn="minsk kaunas airport transfer, minsk to kun taxi, private transfer minsk kaunas, kaunas international airport ride, belarus lithuania border transfer, ryanair kaunas"
        ogImage={`${SITE_URL}/og/minsk-kaunas-airport.jpg`}
        breadcrumbsRu={[
          { name: "Главная", path: "/" },
          { name: "Трансфер Минск — Аэропорт Каунаса (KUN)", path: "/трансфер-минск-каунас-аэропорт" },
        ]}
        breadcrumbsEn={[
          { name: "Home", path: "/" },
          { name: "Minsk — Kaunas Airport (KUN)", path: "/minsk-kaunas-airport" },
        ]}
        jsonLd={taxiServiceJsonLd({
          lang,
          name: isRu ? "Трансфер Минск — Аэропорт Каунаса (KUN)" : "Minsk to Kaunas Airport (KUN) Transfer",
          description: isRu
            ? "Индивидуальный трансфер из Минска в международный аэропорт Каунаса (KUN). Фиксированная цена, подача от двери, опытный водитель."
            : "Private door-to-door transfer from Minsk to Kaunas International Airport (KUN). Fixed price, professional driver.",
          url: SITE_URL + (isRu ? "/трансфер-минск-каунас-аэропорт" : "/minsk-kaunas-airport"),
          fromName: isRu ? "Минск" : "Minsk",
          toName: isRu ? "Аэропорт Каунаса (KUN)" : "Kaunas International Airport (KUN)",
        })}
      />
      <Navbar />

      {/* Hero */}
      <div className="pt-28 pb-14 border-b border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative">
          <a href={getHomeSectionHref(lang, "services")} className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors mb-6">
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {c.stats.map((s) => (
              <div key={s.label} className="bg-card border border-border rounded-xl p-4">
                <p className="text-primary font-bold text-lg">{s.value}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-booking-modal", {
                detail: {
                  prefilledFrom: isRu ? "Минск" : "Minsk",
                  prefilledTo: isRu ? "Аэропорт Каунаса (KUN)" : "Kaunas Airport (KUN)",
                }
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

        {/* Related routes — internal SEO links to other Lithuanian / Polish airports */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Plane className="h-5 w-5 text-primary" />
            {isRu ? "Похожие направления" : "Related transfers"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href={isRu ? "/трансфер-минск-вильнюс-аэропорт" : "/minsk-vilnius-airport"}
              className="block bg-card border border-border rounded-2xl p-5 hover:border-primary/50 hover:bg-primary/5 transition-colors group"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {isRu ? "Трансфер Минск — Аэропорт Вильнюса (VNO)" : "Minsk — Vilnius Airport (VNO)"}
                </p>
                <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {isRu
                  ? "~175 км, 2,5–5 ч. Главный аэропорт Литвы, ближе к Минску."
                  : "~175 km, 2.5–5 hrs. Lithuania's main airport, closer to Minsk."}
              </p>
            </a>
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
                  ? "~550 км, 6–10 ч. Главный международный аэропорт Польши."
                  : "~550 km, 6–10 hrs. Poland's main international airport."}
              </p>
            </a>
          </div>
        </motion.section>

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

        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 md:p-10 text-center">
            <PhoneCall className="h-8 w-8 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-3">{c.ctaTitle}</h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">{c.ctaDesc}</p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-booking-modal", {
                detail: {
                  prefilledFrom: lang === "ru" ? "Минск" : "Minsk",
                  prefilledTo: lang === "ru" ? "Аэропорт Каунаса (KUN)" : "Kaunas Airport (KUN)",
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
