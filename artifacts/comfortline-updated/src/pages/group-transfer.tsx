import { Users, Car, Target } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Групповой трансфер",
    title: "Групповые трансферы",
    subtitle:
      "До 8 пассажиров на одном автомобиле. Семейные поездки, корпоративные трансферы, свадьбы, экскурсионные группы — один звонок, один тариф.",
    stats: [
      { label: "Вместимость", value: "до 8 чел." },
      { label: "Автомобили", value: "Минивэн / Автобус" },
      { label: "Багаж", value: "Вместительный" },
      { label: "Маршруты", value: "Любые" },
    ],
    photosTitle: "Групповые поездки",
    photos: [
      {
        src: "/car-mercedes-v.jpg",
        caption: "Mercedes V-class — семейный трансфер",
      },
      {
        src: "/car-mercedes-v-vip.jpg",
        caption: "VIP-салон — корпоративная группа",
      },
      {
        src: "/car-kia-carnival.jpg",
        caption: "Групповая поездка — до 7 пассажиров",
      },
    ],
    howTitle: "Как работает групповой трансфер",
    steps: [
      {
        icon: Users,
        title: "Укажите группу",
        desc: "Сообщите количество пассажиров и объём багажа — подберём оптимальный автомобиль.",
      },
      {
        icon: Car,
        title: "Минивэн у вашего адреса",
        desc: "Kia Carnival (до 5 пас.), Hyundai Palisade (до 4 пас.) или Fiat Scudo (до 8 пас.) — по вашему выбору.",
      },
      {
        icon: Target,
        title: "Все добираются вместе",
        desc: "Один автомобиль, один тариф, никаких пересадок и разделений группы.",
      },
    ],
    infoTitle: "Параметры группового трансфера",
    infoRows: [
      { label: "Максимум пассажиров", value: "8 человек (Fiat Scudo)" },
      { label: "Максимум чемоданов", value: "8–10 стандартных чемоданов" },
      { label: "Детские кресла", value: "По запросу, бесплатно" },
      {
        label: "Подходящие маршруты",
        value: "Минск, аэропорты, межгород, Европа",
      },
      { label: "Скидка для группы", value: "Выгоднее индивидуальных такси" },
    ],
    includedTitle: "Что включено",
    included: [
      "Минивэн или микроавтобус на группу",
      "Вода и комфортный салон",
      "Детские кресла по запросу",
      "Помощь с погрузкой багажа",
      "Фиксированная цена на всю группу",
      "Водитель говорит на русском и английском",
    ],
    whyTitle: "Почему ComfortLine для групп",
    whyItems: [
      "Специализируемся на групповых поездках",
      "Вместительный багажный отсек",
      "Один тариф дешевле нескольких такси",
      "Профессиональные водители на дальних маршрутах",
      "Все маршруты: Беларусь, Литва, Польша",
      "Работаем с турфирмами и корпоративными клиентами",
    ],
    ctaTitle: "Заказать групповой трансфер",
    ctaDesc:
      "Укажите количество человек и маршрут — получите точную цену в ближайшее время.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Групповой маршрут",
    backBtn: "← Все услуги",
  },
  en: {
    badge: "Group Transfer",
    title: "Group Transfers",
    subtitle:
      "Up to 8 passengers in one vehicle. Family travel, corporate transfers, weddings and tour groups — one booking, one flat rate for the whole party.",
    stats: [
      { label: "Capacity", value: "up to 8 pax" },
      { label: "Vehicles", value: "Minivan / Minibus" },
      { label: "Luggage", value: "Generous" },
      { label: "Routes", value: "Any destination" },
    ],
    photosTitle: "Group Travel",
    photos: [
      {
        src: "/car-mercedes-v.jpg",
        caption: "Mercedes V-class — family transfer",
      },
      {
        src: "/car-mercedes-v-vip.jpg",
        caption: "VIP cabin — corporate group",
      },
      {
        src: "/car-kia-carnival.jpg",
        caption: "Group travel — up to 7 passengers",
      },
    ],
    howTitle: "How group transfers work",
    steps: [
      {
        icon: Users,
        title: "Tell us your group size",
        desc: "Share the number of passengers and luggage — we'll match the perfect vehicle.",
      },
      {
        icon: Car,
        title: "Minivan at your door",
        desc: "Kia Carnival (up to 5 pax), Hyundai Palisade (up to 4 pax) or Fiat Scudo (up to 8 pax) — your choice.",
      },
      {
        icon: Target,
        title: "Everyone travels together",
        desc: "One vehicle, one flat fare — no splitting up the group, no separate taxis.",
      },
    ],
    infoTitle: "Group Transfer Details",
    infoRows: [
      { label: "Maximum passengers", value: "8 people (Fiat Scudo)" },
      { label: "Maximum suitcases", value: "8–10 standard suitcases" },
      { label: "Child seats", value: "On request, at no extra charge" },
      {
        label: "Suitable routes",
        value: "Minsk city, airports, intercity, Europe",
      },
      {
        label: "Group discount",
        value: "Usually cheaper than multiple individual taxis",
      },
    ],
    includedTitle: "What's included",
    included: [
      "Minivan or minibus for the whole group",
      "Bottled water and comfortable cabin",
      "Child seats on request",
      "Luggage loading assistance",
      "One flat price for the entire group",
      "Driver speaks Russian and English",
    ],
    whyTitle: "Why ComfortLine for groups",
    whyItems: [
      "Specialists in group and family travel",
      "Generous cargo area for heavy luggage",
      "Flat rate cheaper than multiple taxis",
      "Professional drivers for long-distance runs",
      "All routes: Belarus, Lithuania, Poland",
      "Works with travel agencies and corporates",
    ],
    ctaTitle: "Book a Group Transfer",
    ctaDesc:
      "Tell us your group size and destination — get an exact price shortly.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Group route",
    backBtn: "← All services",
  },
  pl: {
    badge: "Przeniesienie grupowe",
    title: "Transfery grupowe",
    subtitle:
      "Do 8 pasażerów w jednym pojeździe. Podróże rodzinne, transfery firmowe, wesela i grupy wycieczkowe – jedna rezerwacja, jedna stawka ryczałtowa na całą imprezę.",
    stats: [
      { label: "Pojemność", value: "do 8 os" },
      { label: "Pojazdy", value: "Minivan / minibus" },
      { label: "Bagaż", value: "Hojny" },
      { label: "Trasy", value: "Dowolne miejsce docelowe" },
    ],
    photosTitle: "Podróż grupowa",
    photos: [
      {
        src: "/car-mercedes-v.jpg",
        caption: "Mercedes V-klasa — transfer rodzinny",
      },
      {
        src: "/car-mercedes-v-vip.jpg",
        caption: "Kabina VIP — grupa korporacyjna",
      },
      {
        src: "/car-kia-carnival.jpg",
        caption: "Podróże grupowe — do 7 pasażerów",
      },
    ],
    howTitle: "Jak działają transfery grupowe",
    steps: [
      {
        icon: Users,
        title: "Podaj nam wielkość swojej grupy",
        desc: "Podziel się liczbą pasażerów i bagażu – dopasujemy idealny pojazd.",
      },
      {
        icon: Car,
        title: "Minivan u Twoich drzwi",
        desc: "Kia Carnival (do 5 os.), Hyundai Palisade (do 4 os.) lub Fiat Scudo (do 8 os.) – Twój wybór.",
      },
      {
        icon: Target,
        title: "Wszyscy podróżują razem",
        desc: "Jeden pojazd, jedna opłata ryczałtowa – bez dzielenia grupy, bez oddzielnych taksówek.",
      },
    ],
    infoTitle: "Szczegóły transferu grupowego",
    infoRows: [
      { label: "Maksymalna liczba pasażerów", value: "8 osób (Fiat Scudo)" },
      { label: "Maksymalnie walizki", value: "8–10 standardowych walizek" },
      {
        label: "Foteliki dziecięce",
        value: "Na zamówienie, bez dodatkowych opłat",
      },
      {
        label: "Odpowiednie trasy",
        value: "Miasto Mińsk, lotniska, międzymiastowe, Europa",
      },
      {
        label: "Zniżka grupowa",
        value: "Zwykle tańsze niż wiele pojedynczych taksówek",
      },
    ],
    includedTitle: "Co jest wliczone w cenę",
    included: [
      "Minivan lub minibus dla całej grupy",
      "Woda butelkowana i wygodna kabina",
      "Foteliki dziecięce na zamówienie",
      "Pomoc w załadunku bagażu",
      "Jedna stała cena dla całej grupy",
      "Kierowca mówi po rosyjsku i angielsku",
    ],
    whyTitle: "Dlaczego ComfortLine dla grup",
    whyItems: [
      "Specjaliści w podróżach grupowych i rodzinnych",
      "Obszerna przestrzeń ładunkowa na ciężki bagaż",
      "Stawka ryczałtowa tańsza niż wiele taksówek",
      "Zawodowi kierowcy na trasy długodystansowe",
      "Wszystkie trasy: Białoruś, Litwa, Polska",
      "Współpracuje z biurami podróży i korporacjami",
    ],
    ctaTitle: "Zarezerwuj transfer grupowy",
    ctaDesc:
      "Podaj nam wielkość grupy i miejsce docelowe — wkrótce uzyskaj dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Trasa grupowa",
    backBtn: "← Wszystkie usługi",
  },
  fr: {
    badge: "Transfert de groupe",
    title: "Transferts de groupe",
    subtitle:
      "Jusqu'à 8 passagers dans un véhicule. Voyages en famille, transferts d'entreprise, mariages et groupes touristiques : une réservation, un tarif forfaitaire pour toute la fête.",
    stats: [
      { label: "Capacité", value: "jusqu'à 8 personnes" },
      { label: "Véhicules", value: "Minifourgonnette / Minibus" },
      { label: "Bagages", value: "Généreux" },
      { label: "Itinéraires", value: "N'importe quelle destination" },
    ],
    photosTitle: "Voyage de groupe",
    photos: [
      {
        src: "/car-mercedes-v.jpg",
        caption: "Mercedes Classe V — transfert familial",
      },
      {
        src: "/car-mercedes-v-vip.jpg",
        caption: "Cabine VIP — groupe corporatif",
      },
      {
        src: "/car-kia-carnival.jpg",
        caption: "Voyage de groupe — jusqu'à 7 passagers",
      },
    ],
    howTitle: "Comment fonctionnent les transferts de groupe",
    steps: [
      {
        icon: Users,
        title: "Dites-nous la taille de votre groupe",
        desc: "Partagez le nombre de passagers et de bagages : nous trouverons le véhicule idéal.",
      },
      {
        icon: Car,
        title: "Minivan à votre porte",
        desc: "Kia Carnival (jusqu'à 5 personnes), Hyundai Palisade (jusqu'à 4 personnes) ou Fiat Scudo (jusqu'à 8 personnes) — votre choix.",
      },
      {
        icon: Target,
        title: "Tout le monde voyage ensemble",
        desc: "Un véhicule, un tarif forfaitaire – pas de séparation du groupe, pas de taxis séparés.",
      },
    ],
    infoTitle: "Détails du transfert de groupe",
    infoRows: [
      {
        label: "Nombre maximum de passagers",
        value: "8 personnes (Fiat Scudo)",
      },
      { label: "Valises maximales", value: "8 à 10 valises standards" },
      { label: "Sièges enfants", value: "Sur demande, sans supplément" },
      {
        label: "Itinéraires adaptés",
        value: "Ville de Minsk, aéroports, interurbains, Europe",
      },
      {
        label: "Rabais de groupe",
        value: "Généralement moins cher que plusieurs taxis individuels",
      },
    ],
    includedTitle: "Ce qui est inclus",
    included: [
      "Minivan ou minibus pour tout le groupe",
      "Eau en bouteille et cabine confortable",
      "Sièges enfants sur demande",
      "Aide au chargement des bagages",
      "Un forfait pour tout le groupe",
      "Le chauffeur parle russe et anglais",
    ],
    whyTitle: "Pourquoi ComfortLine pour les groupes",
    whyItems: [
      "Spécialistes des voyages de groupe et de famille",
      "Espace de chargement généreux pour les bagages lourds",
      "Tarif forfaitaire moins cher que plusieurs taxis",
      "Chauffeurs professionnels pour courses longue distance",
      "Tous les itinéraires : Biélorussie, Lituanie, Pologne",
      "Travaille avec des agences de voyages et des entreprises",
    ],
    ctaTitle: "Réservez un transfert de groupe",
    ctaDesc:
      "Indiquez-nous la taille de votre groupe et votre destination – obtenez un prix exact sous peu.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Itinéraire de groupe",
    backBtn: "← Tous les services",
  },
  seo: {
    titleRu:
      "Групповой трансфер из Минска | До 8 пассажиров | Минивэн | ComfortLine",
    titleEn:
      "Group Transfer from Minsk | Up to 8 Passengers | Minivan | ComfortLine",
    descRu:
      "Групповой трансфер до 8 пассажиров — семейные поездки, корпоративные группы, свадьбы, экскурсии. Минивэны Kia Carnival, Hyundai Palisade, Fiat Scudo. Один тариф, всё включено.",
    descEn:
      "Group transfers for up to 8 passengers — family trips, corporate groups, weddings, excursions. Kia Carnival, Hyundai Palisade, Fiat Scudo minivans. One fixed price.",
    pathRu: "/групповой-трансфер",
    pathEn: "/group-transfer",
    breadcrumbRu: "Групповой трансфер",
    breadcrumbEn: "Group Transfer",
    fromName: "Минск",
    toName: "Любой маршрут",
  },
};

export default function GroupTransferPage() {
  return <RouteLandingPage data={data} />;
}
