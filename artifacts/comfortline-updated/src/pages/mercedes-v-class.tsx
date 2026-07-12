import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Star,
  Shield,
  Wifi,
  Baby,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Wind,
  Car,
  PhoneCall,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLang } from "@/context/language-context";
import { GlobalBookingModal } from "@/components/sections/GlobalBookingModal";
import { Seo } from "@/seo/Seo";
import { taxiServiceJsonLd } from "@/seo/jsonld";
import { SITE_URL } from "@/seo/seo-config";
import { gtagPhoneConversion } from "@/lib/gtag";
import { getHomeSectionHref } from "@/lib/lang-urls";

const content = {
  ru: {
    badge: "Премиум минивэн · до 7 мест",
    title: "Mercedes-Benz V-Class",
    subtitle:
      "Представительский минивэн бизнес-класса с индивидуальными сиденьями, тремя климат-зонами и огромным багажным отделом. Для семей, делегаций и особых поводов — по всей Европе.",
    backBtn: "← Автопарк",
    stats: [
      { label: "Пассажиров", value: "до 7" },
      { label: "Багаж", value: "до 7 чемоданов" },
      { label: "Класс", value: "Премиум MPV" },
      { label: "Климат-зон", value: "3" },
    ],
    galleryTitle: "Автомобиль вблизи",
    featuresTitle: "Оснащение",
    features: [
      { icon: Users, label: "7 мест" },
      { icon: Briefcase, label: "7 чемоданов" },
      { icon: Wind, label: "3 климат-зоны" },
      { icon: Wifi, label: "Wi-Fi 4G" },
      { icon: Baby, label: "Детские кресла" },
      { icon: Car, label: "Раздвижные двери" },
      { icon: MapPin, label: "Встреча с табличкой" },
      { icon: Star, label: "Деловой дресс-код" },
    ],
    specsTitle: "Характеристики",
    specs: [
      { label: "Вместимость", value: "до 7 пассажиров" },
      { label: "Багажник", value: "до 7 чемоданов" },
      { label: "Климат", value: "3 независимые зоны" },
      { label: "Посадка", value: "Раздвижные боковые двери" },
      {
        label: "Маршруты",
        value: "Беларусь, Польша, Литва, Латвия, Германия, Чехия и др.",
      },
    ],
    stepsTitle: "Как организован трансфер",
    steps: [
      {
        n: "01",
        title: "Оставьте заявку",
        desc: "Укажите маршрут, дату, пассажиров и багаж. Менеджер подтвердит стоимость в ближайшее время.",
      },
      {
        n: "02",
        title: "Водитель встречает вас",
        desc: "Профессиональный водитель с именной табличкой — у таможни, у отеля или в любом удобном месте.",
      },
      {
        n: "03",
        title: "Комфортная поездка",
        desc: "Просторный салон, Wi-Fi и вода на борту. Прямо из точки А в точку Б без пересадок.",
      },
    ],
    includedTitle: "Что включено",
    included: [
      "Подача авто точно ко времени",
      "Профессиональный водитель",
      "Питьевая вода на борту",
      "Wi-Fi 4G в дороге",
      "USB и беспроводная зарядка",
      "Детские кресла — бесплатно",
      "Помощь с погрузкой багажа",
    ],
    whyTitle: "Кому подходит",
    whyItems: [
      "Семьи с детьми и большим багажом",
      "Деловые делегации и корпоративные группы",
      "Туристические группы до 7 человек",
      "Лыжный трансфер со снаряжением",
      "Трансфер большой компании в аэропорт",
      "Свадьбы и торжественные мероприятия",
    ],
    faqTitle: "Частые вопросы",
    faq: [
      {
        q: "Сколько пассажиров и чемоданов вмещает Mercedes V-Class?",
        a: "V-Class комфортно размещает до 7 пассажиров в индивидуальных сиденьях. Багажный отдел вмещает до 7 средних чемоданов — либо 4 чемодана + 3 рюкзака + лыжное снаряжение.",
      },
      {
        q: "Можно ли заказать детское кресло?",
        a: "Да. Детские кресла (0–12 лет) и бустеры предоставляются бесплатно по предварительному запросу. Укажите возраст ребёнка при оформлении заявки.",
      },
      {
        q: "Подходит ли V-Class для деловых поездок?",
        a: "Однозначно. Индивидуальные сиденья с высокими спинками, тонированные стёкла, тихий салон и Wi-Fi — полноценная рабочая обстановка в дороге. Профессиональный водитель и именная табличка — стандарт обслуживания.",
      },
      {
        q: "Можно ли перевозить лыжное снаряжение?",
        a: "Да. Лыжи до 180 см помещаются в багажник без разборки. V-Class — популярный выбор для лыжных трансферов: комплект снаряжения на 5–6 человек + чемоданы без проблем.",
      },
      {
        q: "В какие аэропорты вы доставляете на V-Class?",
        a: "Аэропорт Вильнюса (VNO), Варшавы (WAW и Модлин), Риги (RIX), Каунаса (KUN), а также берлинский BER и пражский PRG. Нестандартный маршрут? Свяжитесь с менеджером — рассчитаем.",
      },
    ],
    ctaTitle: "Забронировать Mercedes V-Class",
    ctaDesc:
      "Оставьте заявку — менеджер подтвердит наличие и назовёт точную цену в ближайшее время.",
    ctaBtn: "Оставить заявку",
    ctaPhone: "Позвонить",
  },
  en: {
    badge: "Premium MPV · up to 7 seats",
    title: "Mercedes-Benz V-Class",
    subtitle:
      "An executive-class MPV with captain's chairs, three independent climate zones and a vast boot. The ideal choice for families, groups and corporate delegations across Europe.",
    backBtn: "← Fleet",
    stats: [
      { label: "Passengers", value: "up to 7" },
      { label: "Luggage", value: "up to 7 suitcases" },
      { label: "Class", value: "Premium MPV" },
      { label: "Climate zones", value: "3" },
    ],
    galleryTitle: "The vehicle",
    featuresTitle: "Equipment",
    features: [
      { icon: Users, label: "7 seats" },
      { icon: Briefcase, label: "7 suitcases" },
      { icon: Wind, label: "3 climate zones" },
      { icon: Wifi, label: "4G Wi-Fi" },
      { icon: Baby, label: "Child seats" },
      { icon: Car, label: "Sliding doors" },
      { icon: MapPin, label: "Meet & greet" },
      { icon: Star, label: "Business dress code" },
    ],
    specsTitle: "Specifications",
    specs: [
      { label: "Capacity", value: "up to 7 passengers" },
      { label: "Boot", value: "up to 7 suitcases" },
      { label: "Climate", value: "3 independent zones" },
      { label: "Entry", value: "Sliding side doors" },
      {
        label: "Routes",
        value:
          "Belarus, Poland, Lithuania, Latvia, Germany, Czech Republic and more",
      },
    ],
    stepsTitle: "How your transfer works",
    steps: [
      {
        n: "01",
        title: "Submit your request",
        desc: "Enter your route, date, passenger count and luggage. A manager will confirm the price shortly.",
      },
      {
        n: "02",
        title: "Your driver meets you",
        desc: "A professional chauffeur with a name board — at arrivals, your hotel or any convenient meeting point.",
      },
      {
        n: "03",
        title: "A smooth direct journey",
        desc: "Spacious cabin, Wi-Fi and water on board. Door to door — no layovers, no surprises.",
      },
    ],
    includedTitle: "What's included",
    included: [
      "Vehicle dispatched on time",
      "Professional chauffeur",
      "Complimentary bottled water",
      "4G Wi-Fi throughout",
      "USB & wireless charging",
      "Child seats — free on request",
      "Luggage assistance",
    ],
    whyTitle: "Who it's ideal for",
    whyItems: [
      "Families with children and large luggage",
      "Business delegations and corporate groups",
      "Tourist groups of up to 7 people",
      "Ski and sports transfers with equipment",
      "Large-party airport transfers",
      "Weddings and special occasions",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "How many passengers and suitcases does the V-Class fit?",
        a: "The V-Class comfortably seats up to 7 in individual captain's chairs. The boot holds up to 7 mid-size suitcases — or 4 cases + 3 backpacks + ski gear.",
      },
      {
        q: "Can I request a child seat?",
        a: "Yes. Child seats (ages 0–12) and booster seats are provided free of charge on request. Please include the child's age when booking.",
      },
      {
        q: "Is the V-Class suitable for business travel?",
        a: "Absolutely. Individual high-back seats, tinted windows, a quiet cabin and 4G Wi-Fi create a productive environment en route. Professional chauffeur and a name board are standard.",
      },
      {
        q: "Can ski equipment be transported?",
        a: "Yes. Skis up to 180 cm fit in the boot without disassembly. The V-Class is a popular ski-transfer vehicle — full kit for 5–6 people plus suitcases, no problem.",
      },
      {
        q: "Which airports do you serve with the V-Class?",
        a: "Vilnius (VNO), Warsaw Chopin (WAW) and Modlin (WMI), Riga (RIX), Kaunas (KUN), Berlin BER and Prague PRG. Custom route? Contact our manager.",
      },
    ],
    ctaTitle: "Book the Mercedes V-Class",
    ctaDesc:
      "Submit your request and a manager will confirm availability with an exact price shortly.",
    ctaBtn: "Request a booking",
    ctaPhone: "Call us",
  },
  pl: {
    badge: "Minivan premium · do 7 miejsc",
    title: "Mercedes-Benz Klasy V",
    subtitle:
      "Minivan klasy executive z kapitańskimi fotelami, trzema niezależnymi strefami klimatycznymi i obszernym bagażnikiem. Idealny wybór dla rodzin, grup i delegacji korporacyjnych w całej Europie.",
    backBtn: "← Flota",
    stats: [
      { label: "Pasażerowie", value: "do 7" },
      { label: "Bagaż", value: "do 7 walizek" },
      { label: "Klasa", value: "Premium MPV" },
      { label: "Strefy klimatyczne", value: "3" },
    ],
    galleryTitle: "Pojazd",
    featuresTitle: "Sprzęt",
    features: [
      { icon: Users, label: "7 miejsc" },
      { icon: Briefcase, label: "7 walizek" },
      { icon: Wind, label: "3 strefy klimatyczne" },
      { icon: Wifi, label: "Wi-Fi 4G" },
      { icon: Baby, label: "Foteliki dziecięce" },
      { icon: Car, label: "Drzwi przesuwne" },
      { icon: MapPin, label: "Spotkaj się i przywitaj" },
      { icon: Star, label: "Biznesowy dress code" },
    ],
    specsTitle: "Dane techniczne",
    specs: [
      { label: "Pojemność", value: "do 7 pasażerów" },
      { label: "Rozruch", value: "do 7 walizek" },
      { label: "Klimat", value: "3 niezależne strefy" },
      { label: "Wejście", value: "Przesuwane drzwi boczne" },
      {
        label: "Trasy",
        value: "Białoruś, Polska, Litwa, Łotwa, Niemcy, Czechy i nie tylko",
      },
    ],
    stepsTitle: "Jak działa Twój przelew",
    steps: [
      {
        n: "01",
        title: "Prześlij swoją prośbę",
        desc: "Podaj trasę, datę, liczbę pasażerów i bagaż. Menedżer wkrótce potwierdzi cenę.",
      },
      {
        n: "02",
        title: "Twój kierowca Cię spotyka",
        desc: "Profesjonalny szofer z tablicą z nazwiskiem — w hali przylotów, w hotelu lub w dowolnym dogodnym miejscu spotkania.",
      },
      {
        n: "03",
        title: "Płynna bezpośrednia podróż",
        desc: "Przestronna kabina, Wi-Fi i woda na pokładzie. Od drzwi do drzwi — bez przesiadek i niespodzianek.",
      },
    ],
    includedTitle: "Co jest wliczone w cenę",
    included: [
      "Pojazd wysłany na czas",
      "Profesjonalny szofer",
      "Bezpłatna woda butelkowana",
      "W całym obiekcie Wi-Fi 4G",
      "Ładowanie USB i bezprzewodowe",
      "Foteliki dziecięce — bezpłatnie na życzenie",
      "Pomoc bagażowa",
    ],
    whyTitle: "Dla kogo jest idealny",
    whyItems: [
      "Rodziny z dziećmi i dużym bagażem",
      "Delegacje biznesowe i grupy korporacyjne",
      "Grupy turystyczne do 7 osób",
      "Transfery narciarskie i sportowe wraz ze sprzętem",
      "Transfery lotniskowe dla dużych grup",
      "Wesela i specjalne okazje",
    ],
    faqTitle: "Często zadawane pytania",
    faq: [
      {
        q: "Ilu pasażerów i walizek zmieści się w Klasie V?",
        a: "Klasa V może pomieścić do 7 osób na indywidualnych fotelach kapitańskich. Bagażnik pomieści aż 7 średniej wielkości walizek — czyli 4 walizki + 3 plecaki + sprzęt narciarski.",
      },
      {
        q: "Czy mogę poprosić o fotelik dziecięcy?",
        a: "Tak. Foteliki dziecięce (w wieku 0–12 lat) i foteliki podwyższające są dostępne bezpłatnie na życzenie. Podczas dokonywania rezerwacji prosimy o podanie wieku dziecka.",
      },
      {
        q: "Czy Klasa V nadaje się do podróży służbowych?",
        a: "Absolutnie. Indywidualne siedzenia z wysokim oparciem, przyciemniane szyby, cicha kabina i Wi-Fi 4G tworzą produktywne środowisko na trasie. Profesjonalny szofer i tablica z nazwiskiem są standardem.",
      },
      {
        q: "Czy można przewieźć sprzęt narciarski?",
        a: "Tak. Narty o długości do 180 cm mieszczą się w bagażniku bez demontażu. Klasa V to popularny pojazd do przewozu nart — pełny zestaw dla 5–6 osób plus walizki to żaden problem.",
      },
      {
        q: "Które lotniska obsługujecie Klasą V?",
        a: "Wilno (VNO), Warszawa Chopin (WAW) i Modlin (WMI), Ryga (RIX), Kowno (KUN), Berlin BER i Praga PRG. Trasa niestandardowa? Skontaktuj się z naszym menadżerem.",
      },
    ],
    ctaTitle: "Zarezerwuj Mercedesa Klasy V",
    ctaDesc:
      "Prześlij zapytanie, a menedżer wkrótce potwierdzi dostępność i poda dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    ctaPhone: "Zadzwoń do nas",
  },
  fr: {
    badge: "Monospace Premium · jusqu'à 7 places",
    title: "Mercedes-Benz Classe V",
    subtitle:
      "Un monospace de classe exécutive avec sièges capitaine, trois zones climatiques indépendantes et un vaste coffre. Le choix idéal pour les familles, les groupes et les délégations d'entreprises à travers l'Europe.",
    backBtn: "← Flotte",
    stats: [
      { label: "Passagers", value: "jusqu'à 7" },
      { label: "Bagages", value: "jusqu'à 7 valises" },
      { label: "Classe", value: "Monospace haut de gamme" },
      { label: "Zones climatiques", value: "3" },
    ],
    galleryTitle: "Le véhicule",
    featuresTitle: "Équipement",
    features: [
      { icon: Users, label: "7 places" },
      { icon: Briefcase, label: "7 valises" },
      { icon: Wind, label: "3 zones climatiques" },
      { icon: Wifi, label: "Wi-Fi 4G" },
      { icon: Baby, label: "Sièges enfants" },
      { icon: Car, label: "Portes coulissantes" },
      { icon: MapPin, label: "Rencontrer et saluer" },
      { icon: Star, label: "Code vestimentaire professionnel" },
    ],
    specsTitle: "Spécifications",
    specs: [
      { label: "Capacité", value: "jusqu'à 7 passagers" },
      { label: "Démarrage", value: "jusqu'à 7 valises" },
      { label: "Climat", value: "3 zones indépendantes" },
      { label: "Entrée", value: "Portes latérales coulissantes" },
      {
        label: "Itinéraires",
        value:
          "Biélorussie, Pologne, Lituanie, Lettonie, Allemagne, République tchèque et plus encore",
      },
    ],
    stepsTitle: "Comment fonctionne votre transfert",
    steps: [
      {
        n: "01",
        title: "Soumettez votre demande",
        desc: "Entrez votre itinéraire, la date, le nombre de passagers et vos bagages. Un gestionnaire confirmera le prix sous peu.",
      },
      {
        n: "02",
        title: "Votre chauffeur vous rencontre",
        desc: "Un chauffeur professionnel avec un panneau nominatif — aux arrivées, à votre hôtel ou à tout point de rendez-vous pratique.",
      },
      {
        n: "03",
        title: "Un voyage direct en douceur",
        desc: "Cabine spacieuse, Wi-Fi et eau à bord. Porte à porte — pas d'escales, pas de surprises.",
      },
    ],
    includedTitle: "Ce qui est inclus",
    included: [
      "Véhicule expédié à temps",
      "Chauffeur professionnel",
      "Eau en bouteille gratuite",
      "Wi-Fi 4G partout",
      "Chargement USB et sans fil",
      "Sièges enfants — gratuits sur demande",
      "Assistance bagages",
    ],
    whyTitle: "Pour qui est-il idéal",
    whyItems: [
      "Familles avec enfants et gros bagages",
      "Délégations d'affaires et groupes d'entreprises",
      "Groupes touristiques jusqu'à 7 personnes",
      "Transferts de ski et sportifs avec matériel",
      "Transferts aéroport pour grands groupes",
      "Mariages et occasions spéciales",
    ],
    faqTitle: "Questions fréquemment posées",
    faq: [
      {
        q: "Combien de passagers et de valises la Classe V peut-elle contenir ?",
        a: "La Classe V peut accueillir confortablement jusqu'à 7 personnes dans des sièges capitaine individuels. La botte peut contenir jusqu'à 7 valises de taille moyenne — ou 4 valises + 3 sacs à dos + matériel de ski.",
      },
      {
        q: "Puis-je demander un siège enfant ?",
        a: "Oui. Des sièges enfants (0 à 12 ans) et des rehausseurs sont fournis gratuitement sur demande. Veuillez indiquer l'âge de l'enfant lors de la réservation.",
      },
      {
        q: "La Classe V est-elle adaptée aux voyages d'affaires ?",
        a: "Absolument. Des sièges individuels à dossier haut, des vitres teintées, une cabine silencieuse et une connexion Wi-Fi 4G créent un environnement productif en cours de route. Un chauffeur professionnel et un panneau nominatif sont standard.",
      },
      {
        q: "Le matériel de ski peut-il être transporté ?",
        a: "Oui. Les skis jusqu'à 180 cm rentrent dans la chaussure sans démontage. La Classe V est un véhicule de transfert de ski populaire : kit complet pour 5 à 6 personnes plus valises, pas de problème.",
      },
      {
        q: "Quels aéroports desservez-vous avec la Classe V ?",
        a: "Vilnius (VNO), Varsovie Chopin (WAW) et Modlin (WMI), Riga (RIX), Kaunas (KUN), Berlin BER et Prague PRG. Itinéraire personnalisé ? Contactez notre responsable.",
      },
    ],
    ctaTitle: "Réservez la Mercedes Classe V",
    ctaDesc:
      "Soumettez votre demande et un responsable confirmera sous peu la disponibilité avec un prix exact.",
    ctaBtn: "Demander une réservation",
    ctaPhone: "Appelez-nous",
  },
};

const galleryPhotos = [
  {
    src: "/vclass-mermaid.webp",
    label_ru: "Варшава — набережная Вислы",
    label_en: "Warsaw — Vistula riverside",
    area: "a",
  },
  {
    src: "/vclass-exterior.webp",
    label_ru: "Экстерьер — вид сбоку",
    label_en: "Exterior — side view",
    area: "b",
  },
  {
    src: "/vclass-captain.webp",
    label_ru: "Кресла бизнес-класса",
    label_en: "Business-class captain's chairs",
    area: "c",
  },
  {
    src: "/vclass-sunset.webp",
    label_ru: "На маршруте — закат",
    label_en: "On the road — sunset",
    area: "d",
  },
  {
    src: "/vclass-doors.webp",
    label_ru: "Раздвижные двери — посадка",
    label_en: "Sliding doors — easy boarding",
    area: "e",
  },
  {
    src: "/vclass-console.webp",
    label_ru: "Интерьер — приборная панель",
    label_en: "Interior — centre console",
    area: "f",
  },
  {
    src: "/vclass-warsaw-side.webp",
    label_ru: "Варшава — вид со стороны",
    label_en: "Warsaw — city approach",
    area: "g",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/40 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="text-foreground font-medium text-sm md:text-base group-hover:text-primary transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-primary shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-muted-foreground leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function openBooking(isRu: boolean) {
  window.dispatchEvent(
    new CustomEvent("open-booking-modal", {
      detail: {
        prefilledFrom: isRu ? "Минск" : "Minsk",
        prefilledTo: "",
      },
    }),
  );
}

export default function MercedesVClassPage() {
  const { lang, locale } = useLang();
  const isRu = lang === "ru";
  const c = content[locale as keyof typeof content] ?? content.en;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        titleRu="Такси Mercedes V-Class из Минска | Индивидуальный трансфер"
        titleEn="Mercedes-Benz V-Class Transfer from Minsk | Up to 7 Seats | ComfortLine"
        descRu="Такси Mercedes V-Class и индивидуальный трансфер из Минска до 7 пассажиров. Фиксированная цена, Wi-Fi, детские кресла и поездки в аэропорты Европы 24/7."
        descEn="Mercedes-Benz V-Class with driver from Minsk — up to 7 passengers, 7 suitcases, business-class seats, 3 climate zones, Wi-Fi. Transfers to Vilnius, Warsaw, Riga airports and across Europe. Child seats free of charge."
        pathRu="/трансфер-мерседес-в-класс"
        pathEn="/mercedes-v-class-transfer"
        breadcrumbsRu={[
          { name: "Главная", path: "/" },
          { name: "Автопарк", path: getHomeSectionHref("ru", "fleet") },
          { name: "Mercedes V-Class", path: "/трансфер-мерседес-в-класс" },
        ]}
        breadcrumbsEn={[
          { name: "Home", path: "/" },
          { name: "Fleet", path: getHomeSectionHref("en", "fleet") },
          { name: "Mercedes V-Class", path: "/mercedes-v-class-transfer" },
        ]}
        jsonLd={taxiServiceJsonLd({
          lang,
          name: isRu
            ? "Трансфер Mercedes-Benz V-Class из Минска"
            : "Mercedes-Benz V-Class Transfer from Minsk",
          description: isRu
            ? "Mercedes-Benz V-Class с водителем из Минска — до 7 пассажиров, Wi-Fi, детские кресла, трансфер по Европе."
            : "Mercedes-Benz V-Class with driver from Minsk — up to 7 passengers, Wi-Fi, child seats, transfers across Europe.",
          url:
            SITE_URL +
            (isRu
              ? "/трансфер-мерседес-в-класс"
              : "/mercedes-v-class-transfer"),
          fromName: isRu ? "Минск" : "Minsk",
          toName: isRu ? "Аэропорты Европы" : "European Airports",
        })}
      />
      <GlobalBookingModal />
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/vclass-warsaw-front.webp"
            alt="Mercedes-Benz V-Class — ComfortLine premium transfer"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            decoding="async"
          />
          {/* Layered gradients for cinematic dark feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
        </div>

        {/* Back link */}
        <a
          href={getHomeSectionHref(lang, "fleet")}
          className="absolute top-28 left-4 md:left-8 z-20 inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-primary transition-colors"
        >
          {c.backBtn}
        </a>

        {/* Hero content */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 pb-14 md:pb-20 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[10px] font-semibold tracking-[0.35em] uppercase text-primary mb-5">
              {c.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-none mb-5 tracking-tight">
              Mercedes-Benz
              <br />
              <span className="text-primary">V-Class</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-xl mb-10 leading-relaxed">
              {c.subtitle}
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-3 mb-10">
              {c.stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl px-4 py-3 min-w-[110px]"
                >
                  <p className="text-primary font-bold text-lg leading-none">
                    {s.value}
                  </p>
                  <p className="text-white/50 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => openBooking(isRu)}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-primary/30 cursor-pointer"
            >
              {c.ctaBtn}
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section className="py-16 md:py-24 border-b border-border/30">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary">
              {c.galleryTitle}
            </p>
            <div className="h-px flex-1 bg-gradient-to-l from-primary/50 to-transparent" />
          </motion.div>

          {/* Asymmetric mosaic grid */}
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "280px 280px 220px",
              gridTemplateAreas: `"a a b" "c d d" "e f g"`,
            }}
          >
            {galleryPhotos.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative overflow-hidden rounded-2xl border border-border/40 bg-muted group"
                style={{ gridArea: photo.area }}
              >
                <img
                  src={photo.src}
                  alt={isRu ? photo.label_ru : photo.label_en}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-black/60 text-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {isRu ? photo.label_ru : photo.label_en}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES STRIP ─── */}
      <section className="py-14 md:py-20 bg-card/40 border-b border-border/30">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-foreground mb-8 text-center"
          >
            {c.featuresTitle}
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
            {c.features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col items-center gap-2.5 py-5 px-4 bg-background border border-border/60 rounded-2xl hover:border-primary/40 transition-colors text-center"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-foreground">
                    {f.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl py-16 md:py-24 space-y-20">
        {/* ─── HOW IT WORKS ─── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-6 rounded-full bg-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              {c.stepsTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-card border border-border/60 rounded-2xl p-6 overflow-hidden"
              >
                <span className="absolute top-4 right-5 text-5xl font-black text-primary/8 leading-none select-none">
                  {step.n}
                </span>
                <p className="text-primary font-bold text-sm mb-2">{step.n}</p>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ─── SPECS + INCLUDED ─── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Specs */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 rounded-full bg-primary" />
              <h2 className="text-xl font-bold text-foreground">
                {c.specsTitle}
              </h2>
            </div>
            <div className="space-y-px overflow-hidden rounded-2xl border border-border/60">
              {c.specs.map((row) => (
                <div
                  key={row.label}
                  className="flex items-start justify-between gap-4 px-5 py-3.5 bg-card even:bg-background"
                >
                  <span className="text-xs text-muted-foreground shrink-0 pt-0.5">
                    {row.label}
                  </span>
                  <span className="text-xs font-semibold text-foreground text-right">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Included */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 rounded-full bg-primary" />
              <h2 className="text-xl font-bold text-foreground">
                {c.includedTitle}
              </h2>
            </div>
            <div className="space-y-2">
              {c.included.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 py-2.5 px-4 bg-card border border-border/50 rounded-xl"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── WHO IT'S FOR ─── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-6 rounded-full bg-primary" />
            <h2 className="text-2xl font-bold text-foreground">{c.whyTitle}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {c.whyItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-3 px-4 py-3.5 bg-card border border-border/50 rounded-xl"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ─── FAQ ─── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-6 rounded-full bg-primary" />
            <h2 className="text-2xl font-bold text-foreground">{c.faqTitle}</h2>
          </div>
          <div className="bg-card border border-border/50 rounded-2xl px-6 divide-y divide-border/40">
            {c.faq.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </motion.section>
      </div>

      {/* ─── CTA BANNER ─── */}
      <section className="relative overflow-hidden border-t border-border/40">
        <div className="absolute inset-0">
          <img
            src="/vclass-warsaw-side.webp"
            alt=""
            aria-hidden
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-5xl py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">
              {c.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {c.ctaTitle}
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {c.ctaDesc}
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => openBooking(isRu)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20 cursor-pointer"
              >
                {c.ctaBtn}
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="tel:+375447620649"
                onClick={gtagPhoneConversion}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border hover:border-primary/50 text-foreground font-semibold text-sm transition-colors"
              >
                <PhoneCall className="h-4 w-4 text-primary" />
                {c.ctaPhone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
