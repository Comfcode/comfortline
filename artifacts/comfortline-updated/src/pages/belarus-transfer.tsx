import { MapPin, Route, Navigation } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер по Беларуси",
    title: "Трансферы по Беларуси",
    subtitle:
      "Брест, Гродно, Витебск, Гомель, Могилёв и замки Несвиж / Мир — межгородские поездки по всей Беларуси на комфортабельном автомобиле.",
    stats: [
      { label: "Города", value: "6 областей" },
      { label: "Брест", value: "~350 км" },
      { label: "Гродно", value: "~280 км" },
      { label: "Класс авто", value: "Бизнес / SUV" },
    ],
    photosTitle: "Беларусь — природа и замки",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/%D0%9A%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%9C%D0%B8%D1%80%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B7%D0%B0%D0%BC%D0%BA%D0%B0.JPG/1280px-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%9C%D0%B8%D1%80%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B7%D0%B0%D0%BC%D0%BA%D0%B0.JPG",
        caption: "Замок Мир",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bialowieza_National_Park_in_Poland0029.JPG/1280px-Bialowieza_National_Park_in_Poland0029.JPG",
        caption: "Беловежская пуща",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/%D0%9D%D1%8F%D1%81%D0%B2%D1%96%D0%B6_%D1%96_%D0%9D%D1%8F%D1%81%D0%B2%D1%96%D0%B6%D1%81%D0%BA%D1%96_%D0%B7%D0%B0%D0%BC%D0%B0%D0%BA_12.jpg/1280px-%D0%9D%D1%8F%D1%81%D0%B2%D1%96%D0%B6_%D1%96_%D0%9D%D1%8F%D1%81%D0%B2%D1%96%D0%B6%D1%81%D0%BA%D1%96_%D0%B7%D0%B0%D0%BC%D0%B0%D0%BA_12.jpg",
        caption: "Замок Несвиж",
      },
    ],
    howTitle: "Как проходит поездка",
    steps: [
      {
        icon: MapPin,
        title: "Подача от двери",
        desc: "Водитель забирает вас в Минске по указанному адресу в назначенное время.",
      },
      {
        icon: Route,
        title: "Комфортный путь",
        desc: "Современные трассы Беларуси, климат-контроль, вода — без пересадок и ожиданий.",
      },
      {
        icon: Navigation,
        title: "Точное прибытие",
        desc: "Доставка прямо в нужный адрес города назначения.",
      },
    ],
    infoTitle: "Популярные маршруты",
    infoRows: [
      { label: "Минск — Брест", value: "~350 км, 3,5–4 ч" },
      { label: "Минск — Гродно", value: "~280 км, 3–3,5 ч" },
      { label: "Минск — Витебск", value: "~265 км, 2,5–3 ч" },
      { label: "Минск — Гомель", value: "~305 км, 3–4 ч" },
      { label: "Минск — Несвиж / Мир", value: "~100–120 км, 1,5 ч" },
      { label: "Минск — Могилёв", value: "~195 км, 2–2,5 ч" },
    ],
    includedTitle: "Что включено",
    included: [
      "Подача от адреса в Минске",
      "Прямой маршрут без пересадок",
      "Питьевая вода и чистый салон",
      "Помощь с багажом",
      "Детские кресла по запросу",
      "Фиксированная цена без счётчика",
    ],
    whyTitle: "Почему ComfortLine",
    whyItems: [
      "Опытные водители знают дороги Беларуси",
      "Прямая подача без таксопарков и диспетчеров",
      "Доступны большие автомобили для групп",
      "Работаем 24/7, включая праздники",
      "Фиксированные цены: никаких сюрпризов",
      "Более 5 000 выполненных поездок с 2015 года",
    ],
    ctaTitle: "Заказать трансфер по Беларуси",
    ctaDesc:
      "Оставьте заявку — менеджер свяжется и назовёт точную стоимость вашего маршрута.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Беларусь (межгород)",
    backBtn: "← Все услуги",
  },
  en: {
    badge: "Belarus Transfer",
    title: "Belarus Intercity Transfers",
    subtitle:
      "Brest, Grodno, Vitebsk, Gomel, Mogilev and the castles of Nesvizh & Mir — comfortable intercity travel across Belarus without transfers or layovers.",
    stats: [
      { label: "Coverage", value: "6 regions" },
      { label: "Brest", value: "~350 km" },
      { label: "Grodno", value: "~280 km" },
      { label: "Vehicle class", value: "Business / SUV" },
    ],
    photosTitle: "Belarus — Nature & Castles",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/%D0%9A%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%9C%D0%B8%D1%80%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B7%D0%B0%D0%BC%D0%BA%D0%B0.JPG/1280px-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%9C%D0%B8%D1%80%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B7%D0%B0%D0%BC%D0%BA%D0%B0.JPG",
        caption: "Mir Castle",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bialowieza_National_Park_in_Poland0029.JPG/1280px-Bialowieza_National_Park_in_Poland0029.JPG",
        caption: "Białowieża Forest",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/%D0%9D%D1%8F%D1%81%D0%B2%D1%96%D0%B6_%D1%96_%D0%9D%D1%8F%D1%81%D0%B2%D1%96%D0%B6%D1%81%D0%BA%D1%96_%D0%B7%D0%B0%D0%BC%D0%B0%D0%BA_12.jpg/1280px-%D0%9D%D1%8F%D1%81%D0%B2%D1%96%D0%B6_%D1%96_%D0%9D%D1%8F%D1%81%D0%B2%D1%96%D0%B6%D1%81%D0%BA%D1%96_%D0%B7%D0%B0%D0%BC%D0%B0%D0%BA_12.jpg",
        caption: "Nesvizh Castle",
      },
    ],
    howTitle: "How it works",
    steps: [
      {
        icon: MapPin,
        title: "Door pickup in Minsk",
        desc: "Your driver collects you at your Minsk address at the agreed time.",
      },
      {
        icon: Route,
        title: "Comfortable journey",
        desc: "Modern Belarusian highways, climate control, bottled water — no transfers or waiting.",
      },
      {
        icon: Navigation,
        title: "Precise delivery",
        desc: "Dropped off directly at your chosen address in the destination city.",
      },
    ],
    infoTitle: "Popular Routes",
    infoRows: [
      { label: "Minsk — Brest", value: "~350 km, 3.5–4 hrs" },
      { label: "Minsk — Grodno", value: "~280 km, 3–3.5 hrs" },
      { label: "Minsk — Vitebsk", value: "~265 km, 2.5–3 hrs" },
      { label: "Minsk — Gomel", value: "~305 km, 3–4 hrs" },
      { label: "Minsk — Nesvizh / Mir", value: "~100–120 km, 1.5 hrs" },
      { label: "Minsk — Mogilev", value: "~195 km, 2–2.5 hrs" },
    ],
    includedTitle: "What's included",
    included: [
      "Pickup from your Minsk address",
      "Direct route with no transfers",
      "Bottled water and clean vehicle",
      "Luggage assistance",
      "Child seats on request",
      "Fixed price — no meter, no hidden extras",
    ],
    whyTitle: "Why ComfortLine",
    whyItems: [
      "Drivers with extensive knowledge of Belarusian roads",
      "Direct booking — no agency or dispatch fees",
      "Large vehicles available for groups",
      "Available 24/7 including public holidays",
      "Fixed pricing — no surprises",
      "Over 5,000 completed transfers since 2015",
    ],
    ctaTitle: "Book a Belarus Transfer",
    ctaDesc:
      "Submit a request and our manager will contact you with an exact price for your route.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Belarus (intercity)",
    backBtn: "← All services",
  },
  pl: {
    badge: "Transfer z Białorusi",
    title: "Transfery międzymiastowe na Białorusi",
    subtitle:
      "Brześć, Grodno, Witebsk, Homel, Mohylew oraz zamki w Nieświeżu i Mirze — wygodne podróżowanie międzymiastowe po Białorusi bez przesiadek i przesiadek.",
    stats: [
      { label: "Zasięg", value: "6 regionów" },
      { label: "Brześć", value: "~350 km" },
      { label: "Grodno", value: "~280 km" },
      { label: "Klasa pojazdu", value: "Biznes/SUV" },
    ],
    photosTitle: "Białoruś — przyroda i zamki",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/%D0%9A%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%9C%D0%B8%D1%80%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B7%D0%B0%D0%BC%D0%BA%D0%B0.JPG/1280px-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%9C%D0%B8%D1%80%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B7%D0%B0%D0%BC%D0%BA%D0%B0.JPG",
        caption: "Zamek w Mirze",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bialowieza_National_Park_in_Poland0029.JPG/1280px-Bialowieza_National_Park_in_Poland0029.JPG",
        caption: "Puszcza Białowieska",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/%D0%9D%D1%8F%D1%81%D0%B2%D1%96%D0%B6_%D1%96_%D0%9D%D1%8F%D1%81%D0%B2%D1%96%D0%B6%D1%81%D0%BA%D1%96_%D0%B7%D0%B0%D0%BC%D0%B0%D0%BA_12.jpg/1280px-%D0%9D%D1%8F%D1%81%D0%B2%D1%96%D0%B6_%D1%96_%D0%9D%D1%8F%D1%81%D0%B2%D1%96%D0%B6%D1%81%D0%BA%D1%96_%D0%B7%D0%B0%D0%BC%D0%B0%D0%BA_12.jpg",
        caption: "Zamek w Nieświeżu",
      },
    ],
    howTitle: "Jak to działa",
    steps: [
      {
        icon: MapPin,
        title: "Odbiór osobisty w Mińsku",
        desc: "Twój kierowca odbierze Cię pod Twoim adresem w Mińsku o ustalonej godzinie.",
      },
      {
        icon: Route,
        title: "Wygodna podróż",
        desc: "Nowoczesne białoruskie autostrady, klimatyzacja, woda butelkowana – bez przesiadek i czekania.",
      },
      {
        icon: Navigation,
        title: "Precyzyjna dostawa",
        desc: "Przesyłka wysłana bezpośrednio pod wybrany przez Ciebie adres w mieście docelowym.",
      },
    ],
    infoTitle: "Popularne trasy",
    infoRows: [
      { label: "Mińsk — Brześć", value: "~350 km, 3,5–4 godz" },
      { label: "Mińsk — Grodno", value: "~280 km, 3–3,5 godz" },
      { label: "Mińsk — Witebsk", value: "~265 km, 2,5–3 godz" },
      { label: "Mińsk — Homel", value: "~305 km, 3–4 godz" },
      { label: "Mińsk — Nieśwież / Mir", value: "~100–120 km, 1,5 godz" },
      { label: "Mińsk — Mohylew", value: "~195 km, 2–2,5 godz" },
    ],
    includedTitle: "Co jest wliczone w cenę",
    included: [
      "Odbiór z Twojego adresu w Mińsku",
      "Trasa bezpośrednia bez przesiadek",
      "Woda butelkowana i czysty pojazd",
      "Pomoc bagażowa",
      "Foteliki dziecięce na zamówienie",
      "Stała cena — bez licznika, bez ukrytych dodatków",
    ],
    whyTitle: "Dlaczego ComfortLine",
    whyItems: [
      "Kierowcy z dużą znajomością białoruskich dróg",
      "Rezerwacja bezpośrednia — bez opłat agencyjnych i wysyłkowych",
      "Duże pojazdy dostępne dla grup",
      "Dostępność 24 godziny na dobę, 7 dni w tygodniu, także w święta",
      "Stałe ceny – bez niespodzianek",
      "Od 2015 roku zrealizowano ponad 5000 transferów",
    ],
    ctaTitle: "Zarezerwuj transfer na Białoruś",
    ctaDesc:
      "Prześlij zapytanie, a nasz menedżer skontaktuje się z Tobą i poda dokładną cenę za Twoją trasę.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Białoruś (międzymiastowe)",
    backBtn: "← Wszystkie usługi",
  },
  fr: {
    badge: "Biélorussie Transfert",
    title: "Transferts interurbains en Biélorussie",
    subtitle:
      "Brest, Grodno, Vitebsk, Gomel, Moguilev et les châteaux de Nesvizh et Mir : voyages interurbains confortables à travers la Biélorussie sans transferts ni escales.",
    stats: [
      { label: "Couverture", value: "6 régions" },
      { label: "Brest", value: "~350km" },
      { label: "Grodno", value: "~280km" },
      { label: "Classe de véhicule", value: "Affaires / SUV" },
    ],
    photosTitle: "Biélorussie — Nature et châteaux",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/%D0%9A%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%9C%D0%B8%D1%80%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B7%D0%B0%D0%BC%D0%BA%D0%B0.JPG/1280px-%D0%9A%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%9C%D0%B8%D1%80%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B7%D0%B0%D0%BC%D0%BA%D0%B0.JPG",
        caption: "Château de Mir",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bialowieza_National_Park_in_Poland0029.JPG/1280px-Bialowieza_National_Park_in_Poland0029.JPG",
        caption: "Forêt de Białowieza",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/%D0%9D%D1%8F%D1%81%D0%B2%D1%96%D0%B6_%D1%96_%D0%9D%D1%8F%D1%81%D0%B2%D1%96%D0%B6%D1%81%D0%BA%D1%96_%D0%B7%D0%B0%D0%BC%D0%B0%D0%BA_12.jpg/1280px-%D0%9D%D1%8F%D1%81%D0%B2%D1%96%D0%B6_%D1%96_%D0%9D%D1%8F%D1%81%D0%B2%D1%96%D0%B6%D1%81%D0%BA%D1%96_%D0%B7%D0%B0%D0%BC%D0%B0%D0%BA_12.jpg",
        caption: "Château de Nesvij",
      },
    ],
    howTitle: "Comment ça marche",
    steps: [
      {
        icon: MapPin,
        title: "Prise en charge à la porte à Minsk",
        desc: "Votre chauffeur vient vous chercher à votre adresse de Minsk à l'heure convenue.",
      },
      {
        icon: Route,
        title: "Voyage confortable",
        desc: "Autoroutes biélorusses modernes, climatisation, eau en bouteille – pas de transfert ni d'attente.",
      },
      {
        icon: Navigation,
        title: "Livraison précise",
        desc: "Déposé directement à l'adresse de votre choix dans la ville de destination.",
      },
    ],
    infoTitle: "Itinéraires populaires",
    infoRows: [
      { label: "Minsk — Brest", value: "~350 km, 3,5 à 4 heures" },
      { label: "Minsk — Grodno", value: "~280 km, 3 à 3,5 heures" },
      { label: "Minsk — Vitebsk", value: "~265 km, 2,5 à 3 heures" },
      { label: "Minsk — Gomel", value: "~305 km, 3 à 4 heures" },
      { label: "Minsk — Nesvij / Mir", value: "~100-120 km, 1h30" },
      { label: "Minsk — Moguilev", value: "~195 km, 2 à 2,5 heures" },
    ],
    includedTitle: "Ce qui est inclus",
    included: [
      "Prise en charge à votre adresse à Minsk",
      "Itinéraire direct sans transfert",
      "Eau en bouteille et véhicule propre",
      "Assistance bagages",
      "Sièges enfants sur demande",
      "Prix fixe — pas de compteur, pas d'extras cachés",
    ],
    whyTitle: "Pourquoi ComfortLine",
    whyItems: [
      "Conducteurs ayant une connaissance approfondie des routes biélorusses",
      "Réservation directe — pas de frais d'agence ou d'expédition",
      "Grands véhicules disponibles pour les groupes",
      "Disponible 24h/24 et 7j/7 y compris les jours fériés",
      "Prix fixe – pas de surprise",
      "Plus de 5 000 transferts réalisés depuis 2015",
    ],
    ctaTitle: "Réservez un transfert en Biélorussie",
    ctaDesc:
      "Soumettez une demande et notre responsable vous contactera avec un prix exact pour votre itinéraire.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Biélorussie (interurbain)",
    backBtn: "← Tous les services",
  },
  seo: {
    titleRu:
      "Трансфер по Беларуси | Брест, Гродно, Витебск, Несвиж, Мир | ComfortLine",
    titleEn:
      "Belarus Intercity Transfer | Brest, Grodno, Vitebsk, Mir Castle | ComfortLine",
    descRu:
      "Межгородские трансферы по Беларуси из Минска: Брест (~350 км), Гродно (~280 км), Витебск, Гомель, Могилёв, замки Мир и Несвиж, Беловежская Пуща. Комфортные авто и фиксированная цена.",
    descEn:
      "Intercity transfers across Belarus from Minsk — Brest, Grodno, Vitebsk, Gomel, Mogilev, Mir & Nesvizh castles, Belovezhskaya Pushcha. Comfortable cars, fixed prices.",
    pathRu: "/трансфер-по-беларуси",
    pathEn: "/belarus-transfer",
    breadcrumbRu: "Трансфер по Беларуси",
    breadcrumbEn: "Belarus Intercity Transfer",
    fromName: "Минск",
    toName: "Беларусь",
  },
};

export default function BelarusTransferPage() {
  return <RouteLandingPage data={data} />;
}
