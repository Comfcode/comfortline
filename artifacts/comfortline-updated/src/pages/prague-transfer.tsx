import { MapPin, ShieldCheck, Landmark } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Прагу",
    title: "Минск — Прага",
    subtitle:
      "Трансфер из Минска в столицу Чехии. Через Варшаву и Вроцлав — старинная Прага, замки и пивоварни ждут вас на комфортном автомобиле.",
    stats: [
      { label: "Расстояние", value: "~1 450 км" },
      { label: "Время в пути", value: "16–18 ч" },
      { label: "Границы", value: "BY–PL–CZ" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Прага — сердце Европы",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Prague_07-2016_view_from_Lesser_Town_Tower_of_Charles_Bridge_img3.jpg/1280px-Prague_07-2016_view_from_Lesser_Town_Tower_of_Charles_Bridge_img3.jpg",
        caption: "Карлов мост",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Prague_07-2016_View_from_Old_Town_Hall_Tower_img3.jpg/1280px-Prague_07-2016_View_from_Old_Town_Hall_Tower_img3.jpg",
        caption: "Старомéстская площадь",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Karl%C5%AFv_most_Praha%2C_Star%C3%A9_M%C4%9Bsto_20170810_007.jpg/1280px-Karl%C5%AFv_most_Praha%2C_Star%C3%A9_M%C4%9Bsto_20170810_007.jpg",
        caption: "Пражский град",
      },
    ],
    howTitle: "Как проходит поездка",
    steps: [
      {
        icon: MapPin,
        title: "Выезд из Минска",
        desc: "Рекомендуем ранний выезд или поездку за 2 дня с ночёвкой в Варшаве.",
      },
      {
        icon: ShieldCheck,
        title: "Границы BY–PL и PL–CZ",
        desc: "Два перехода. Водитель знает процедуры и актуальные маршруты через Польшу.",
      },
      {
        icon: Landmark,
        title: "Прага: любой адрес",
        desc: "Отель в старом городе, аэропорт Вацлава Гавела, любая достопримечательность.",
      },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      { label: "Маршрут", value: "Минск → Брест → Варшава → Вроцлав → Прага" },
      { label: "Расстояние", value: "~1 450 км" },
      { label: "Рекомендуемый план", value: "2 дня с ночёвкой в Варшаве" },
      { label: "Документы", value: "Шенгенская виза, загранпаспорт" },
      { label: "Аэропорт Праги", value: "Václav Havel Airport (PRG)" },
    ],
    includedTitle: "Что включено",
    included: [
      "Подача от адреса в Минске",
      "Прямой маршрут через Польшу и Чехию",
      "Помощь на всех пограничных переходах",
      "Питьевая вода и чистый комфортный салон",
      "Детские кресла по запросу",
      "Фиксированная стоимость на весь маршрут",
    ],
    whyTitle: "Почему ComfortLine",
    whyItems: [
      "Опыт длинных маршрутов по Европе",
      "Гибкий план: ночёвка в Варшаве по запросу",
      "Водитель знает Шенгенские КПП",
      "Обратный трансфер Прага–Минск",
      "Подходит для семей и небольших групп",
      "Полная поддержка на протяжении поездки",
    ],
    ctaTitle: "Заказать трансфер Минск–Прага",
    ctaDesc: "Оставьте заявку — обсудим маршрут и назовём точную стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Прага",
    backBtn: "← Все услуги",
  },
  en: {
    badge: "Prague Transfer",
    title: "Minsk — Prague",
    subtitle:
      "Private transfer from Minsk to the Czech capital. Via Warsaw and Wrocław — historic Prague, its castles and culture await at the end of a comfortable ride.",
    stats: [
      { label: "Distance", value: "~1,450 km" },
      { label: "Travel time", value: "16–18 hrs" },
      { label: "Borders", value: "BY–PL–CZ" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Prague — Heart of Europe",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Prague_07-2016_view_from_Lesser_Town_Tower_of_Charles_Bridge_img3.jpg/1280px-Prague_07-2016_view_from_Lesser_Town_Tower_of_Charles_Bridge_img3.jpg",
        caption: "Charles Bridge",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Prague_07-2016_View_from_Old_Town_Hall_Tower_img3.jpg/1280px-Prague_07-2016_View_from_Old_Town_Hall_Tower_img3.jpg",
        caption: "Old Town Square",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Karl%C5%AFv_most_Praha%2C_Star%C3%A9_M%C4%9Bsto_20170810_007.jpg/1280px-Karl%C5%AFv_most_Praha%2C_Star%C3%A9_M%C4%9Bsto_20170810_007.jpg",
        caption: "Prague Castle",
      },
    ],
    howTitle: "How the transfer works",
    steps: [
      {
        icon: MapPin,
        title: "Early start from Minsk",
        desc: "We recommend a very early departure or a 2-day trip with an overnight stop in Warsaw.",
      },
      {
        icon: ShieldCheck,
        title: "BY–PL and PL–CZ borders",
        desc: "Two crossings. Your driver knows the procedures and optimal routes through Poland.",
      },
      {
        icon: Landmark,
        title: "Prague — any address",
        desc: "Old Town hotel, Václav Havel Airport (PRG) or any landmark or address in the city.",
      },
    ],
    infoTitle: "Route Details",
    infoRows: [
      { label: "Route", value: "Minsk → Brest → Warsaw → Wrocław → Prague" },
      { label: "Distance", value: "~1,450 km" },
      {
        label: "Recommended plan",
        value: "2-day trip with overnight stop in Warsaw",
      },
      { label: "Documents required", value: "Schengen visa, valid passport" },
      { label: "Prague airport", value: "Václav Havel Airport (PRG)" },
    ],
    includedTitle: "What's included",
    included: [
      "Pickup from your Minsk address",
      "Direct route via Poland and Czech Republic",
      "Assistance at all border crossings",
      "Bottled water and clean comfortable cabin",
      "Child seats on request",
      "Fixed price for the entire route",
    ],
    whyTitle: "Why ComfortLine",
    whyItems: [
      "Experience with long-haul European transfers",
      "Flexible plan — Warsaw overnight available",
      "Driver familiar with Schengen checkpoints",
      "Return transfer Prague → Minsk available",
      "Ideal for families and small groups",
      "Full support throughout the journey",
    ],
    ctaTitle: "Book Minsk–Prague Transfer",
    ctaDesc:
      "Submit a request and we'll discuss the route and give you an exact price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Prague",
    backBtn: "← All services",
  },
  pl: {
    badge: "Transfer do Pragi",
    title: "Mińsk — Praga",
    subtitle:
      "Prywatny transfer z Mińska do stolicy Czech. Przez Warszawę i Wrocław — historyczna Praga, jej zamki i kultura czekają na zakończenie komfortowej podróży.",
    stats: [
      { label: "Odległość", value: "~1450 km" },
      { label: "Czas podróży", value: "16–18 godz" },
      { label: "Granice", value: "BY–PL–CZ" },
      { label: "Klasa pojazdu", value: "Biznes / Minivan" },
    ],
    photosTitle: "Praga — Serce Europy",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Prague_07-2016_view_from_Lesser_Town_Tower_of_Charles_Bridge_img3.jpg/1280px-Prague_07-2016_view_from_Lesser_Town_Tower_of_Charles_Bridge_img3.jpg",
        caption: "Most Karola",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Prague_07-2016_View_from_Old_Town_Hall_Tower_img3.jpg/1280px-Prague_07-2016_View_from_Old_Town_Hall_Tower_img3.jpg",
        caption: "Rynek Starego Miasta",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Karl%C5%AFv_most_Praha%2C_Star%C3%A9_M%C4%9Bsto_20170810_007.jpg/1280px-Karl%C5%AFv_most_Praha%2C_Star%C3%A9_M%C4%9Bsto_20170810_007.jpg",
        caption: "Zamek Praski",
      },
    ],
    howTitle: "Jak działa transfer",
    steps: [
      {
        icon: MapPin,
        title: "Wczesny start z Mińska",
        desc: "Polecamy bardzo wczesny wyjazd lub wycieczkę 2-dniową z noclegiem w Warszawie.",
      },
      {
        icon: ShieldCheck,
        title: "Granice BY–PL i PL–CZ",
        desc: "Dwie przeprawy. Twój kierowca zna procedury i optymalne trasy po Polsce.",
      },
      {
        icon: Landmark,
        title: "Praga — dowolny adres",
        desc: "Hotel na Starym Mieście, lotnisko im. Václava Havla (PRG) lub dowolny punkt orientacyjny lub adres w mieście.",
      },
    ],
    infoTitle: "Szczegóły trasy",
    infoRows: [
      { label: "Trasa", value: "Mińsk → Brześć → Warszawa → Wrocław → Praga" },
      { label: "Odległość", value: "~1450 km" },
      {
        label: "Zalecany plan",
        value: "Wycieczka 2-dniowa z noclegiem w Warszawie",
      },
      { label: "Wymagane dokumenty", value: "Wiza Schengen, ważny paszport" },
      {
        label: "Lotnisko w Pradze",
        value: "Port lotniczy im. Václava Havla (PRG)",
      },
    ],
    includedTitle: "Co jest wliczone w cenę",
    included: [
      "Odbiór z Twojego adresu w Mińsku",
      "Bezpośrednia trasa przez Polskę i Czechy",
      "Pomoc na wszystkich przejściach granicznych",
      "Woda butelkowana i czysta, wygodna kabina",
      "Foteliki dziecięce na zamówienie",
      "Stała cena za całą trasę",
    ],
    whyTitle: "Dlaczego ComfortLine",
    whyItems: [
      "Doświadczenie w długodystansowych transferach europejskich",
      "Plan elastyczny — możliwość noclegu w Warszawie",
      "Kierowca znający punkty kontrolne Schengen",
      "Dostępny transfer powrotny Praga → Mińsk",
      "Idealny dla rodzin i małych grup",
      "Pełne wsparcie podczas całej podróży",
    ],
    ctaTitle: "Zarezerwuj transfer Mińsk – Praga",
    ctaDesc: "Złóż zapytanie, a omówimy trasę i podamy dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Praga",
    backBtn: "← Wszystkie usługi",
  },
  fr: {
    badge: "Transfert Prague",
    title: "Minsk — Prague",
    subtitle:
      "Transfert privé de Minsk vers la capitale tchèque. Via Varsovie et Wrocław - Prague historique, ses châteaux et sa culture vous attendent à la fin d'un trajet confortable.",
    stats: [
      { label: "Distance", value: "~1 450km" },
      { label: "Temps de trajet", value: "16 à 18 heures" },
      { label: "Frontières", value: "BY-PL-CZ" },
      { label: "Classe de véhicule", value: "Affaires / Minifourgonnette" },
    ],
    photosTitle: "Prague – Cœur de l’Europe",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Prague_07-2016_view_from_Lesser_Town_Tower_of_Charles_Bridge_img3.jpg/1280px-Prague_07-2016_view_from_Lesser_Town_Tower_of_Charles_Bridge_img3.jpg",
        caption: "Pont Charles",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Prague_07-2016_View_from_Old_Town_Hall_Tower_img3.jpg/1280px-Prague_07-2016_View_from_Old_Town_Hall_Tower_img3.jpg",
        caption: "Place de la Vieille Ville",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Karl%C5%AFv_most_Praha%2C_Star%C3%A9_M%C4%9Bsto_20170810_007.jpg/1280px-Karl%C5%AFv_most_Praha%2C_Star%C3%A9_M%C4%9Bsto_20170810_007.jpg",
        caption: "Château de Prague",
      },
    ],
    howTitle: "Comment fonctionne le transfert",
    steps: [
      {
        icon: MapPin,
        title: "Départ anticipé de Minsk",
        desc: "Nous recommandons un départ très tôt ou un voyage de 2 jours avec une nuitée à Varsovie.",
      },
      {
        icon: ShieldCheck,
        title: "Frontières BY-PL et PL-CZ",
        desc: "Deux traversées. Votre chauffeur connaît les procédures et les itinéraires optimaux à travers la Pologne.",
      },
      {
        icon: Landmark,
        title: "Prague — n'importe quelle adresse",
        desc: "Hôtel de la vieille ville, aéroport Václav Havel (PRG) ou tout point de repère ou adresse de la ville.",
      },
    ],
    infoTitle: "Détails de l'itinéraire",
    infoRows: [
      {
        label: "Itinéraire",
        value: "Minsk → Brest → Varsovie → Wrocław → Prague",
      },
      { label: "Distance", value: "~1 450km" },
      {
        label: "Forfait recommandé",
        value: "Excursion de 2 jours avec halte à Varsovie",
      },
      { label: "Documents requis", value: "Visa Schengen, passeport valide" },
      {
        label: "Aéroport de Prague",
        value: "Aéroport de Prague-Václav Havel (PRG)",
      },
    ],
    includedTitle: "Ce qui est inclus",
    included: [
      "Prise en charge à votre adresse à Minsk",
      "Route directe via la Pologne et la République tchèque",
      "Assistance à tous les postes frontaliers",
      "Eau en bouteille et cabine propre et confortable",
      "Sièges enfants sur demande",
      "Prix fixe pour tout le parcours",
    ],
    whyTitle: "Pourquoi ComfortLine",
    whyItems: [
      "Expérience des transferts européens long-courriers",
      "Forfait flexible — Nuit à Varsovie disponible",
      "Chauffeur familier avec les points de contrôle Schengen",
      "Transfert aller-retour Prague → Minsk disponible",
      "Idéal pour les familles et les petits groupes",
      "Un accompagnement complet tout au long du voyage",
    ],
    ctaTitle: "Réserver un transfert Minsk-Prague",
    ctaDesc:
      "Soumettez une demande et nous discuterons de l'itinéraire et vous donnerons un prix exact.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Prague",
    backBtn: "← Tous les services",
  },
  seo: {
    titleRu: "Трансфер Минск — Прага | Прямая поездка в Чехию | ComfortLine",
    titleEn:
      "Minsk to Prague Transfer | Direct Ride to Czech Republic | ComfortLine",
    descRu:
      "Трансфер из Минска в Прагу. ~1450 км, 16–18 ч через Польшу. Фиксированная цена, опытный водитель, комфортный автомобиль для длительной поездки в столицу Чехии.",
    descEn:
      "Transfer from Minsk to Prague. ~1,450 km, 16–18 hrs via Poland. Fixed price, professional driver, comfortable vehicle for long-distance travel to the Czech capital.",
    pathRu: "/трансфер-прага",
    pathEn: "/prague-transfer",
    breadcrumbRu: "Трансфер в Прагу",
    breadcrumbEn: "Minsk — Prague",
    fromName: "Минск",
    toName: "Прага",
  },
};

export default function PragueTransferPage() {
  return <RouteLandingPage data={data} />;
}
