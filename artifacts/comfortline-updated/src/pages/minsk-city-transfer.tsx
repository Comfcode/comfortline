import { MapPin, Car, CheckCircle2 } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер по Минску",
    title: "Трансферы по Минску",
    subtitle:
      "Бизнес-встречи, аэропорт, отели, рестораны и экскурсии — комфортная подача автомобиля по всему Минску с профессиональным водителем.",
    stats: [
      { label: "Зона охвата", value: "Весь Минск" },
      { label: "Подача", value: "30–60 мин" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
      { label: "Режим работы", value: "24 / 7" },
    ],
    photosTitle: "Минск — достопримечательности",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Building,_23,_Independence_Avenue,_Minsk_-_the_capital_of_Republic_of_Belarus.JPG",
        caption: "Проспект Независимости",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Victory-square.jpg/1280px-Victory-square.jpg",
        caption: "Площадь Победы",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/%D0%97%D0%B0%D0%BC%D0%B0%D0%BB%D1%91%D1%9E%D0%BA%D1%96_%D0%9C%D1%96%D0%BD%D1%81%D0%BA%D0%B0_35.jpg/1280px-%D0%97%D0%B0%D0%BC%D0%B0%D0%BB%D1%91%D1%9E%D0%BA%D1%96_%D0%9C%D1%96%D0%BD%D1%81%D0%BA%D0%B0_35.jpg",
        caption: "Троицкое предместье",
      },
    ],
    howTitle: "Как работает трансфер",
    steps: [
      {
        icon: MapPin,
        title: "Укажите адрес",
        desc: "Оставьте заявку с адресом подачи и нужным временем — в любой точке Минска.",
      },
      {
        icon: Car,
        title: "Водитель на месте",
        desc: "Опытный водитель прибудет заблаговременно. Никаких ожиданий и опозданий.",
      },
      {
        icon: CheckCircle2,
        title: "Комфортная поездка",
        desc: "Прямо к нужному адресу: офис, отель, ресторан, аэропорт, вокзал.",
      },
    ],
    infoTitle: "Информация о маршруте",
    infoRows: [
      { label: "Зона обслуживания", value: "Минск и пригород (до 50 км)" },
      {
        label: "Популярные направления",
        value: "Аэропорт Минск-2, ж/д вокзал, отели, бизнес-центры",
      },
      {
        label: "Доступные автомобили",
        value: "Mercedes E-Class, Kia Carnival, Hyundai Palisade",
      },
      { label: "Оплата", value: "Наличные, карта, перевод" },
      { label: "Бронирование", value: "Заблаговременно или срочно" },
    ],
    includedTitle: "Что включено",
    included: [
      "Подача от двери до двери",
      "Питьевая вода в дороге",
      "Помощь с багажом",
      "Детские кресла по запросу",
      "Встреча с табличкой в аэропорту",
      "Фиксированная цена без счётчика",
    ],
    whyTitle: "Почему ComfortLine",
    whyItems: [
      "Работаем с 2015 года — более 5 000 поездок",
      "Опытные водители со знанием города",
      "Кондиционированные автомобили бизнес-класса",
      "Всегда вовремя — или вернём деньги",
      "Русскоязычная поддержка 24/7",
      "Корпоративные счета для компаний",
    ],
    ctaTitle: "Заказать трансфер по Минску",
    ctaDesc: "Оставьте заявку — менеджер свяжется с вами в ближайшее время.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Минск (по городу)",
    backBtn: "← Все услуги",
  },
  en: {
    badge: "Minsk City Transfer",
    title: "Minsk City Transfers",
    subtitle:
      "Business meetings, airport runs, hotels, restaurants and sightseeing — premium door-to-door service anywhere in Minsk with a professional chauffeur.",
    stats: [
      { label: "Coverage", value: "All Minsk" },
      { label: "Dispatch time", value: "30–60 min" },
      { label: "Vehicle class", value: "Business / Minivan" },
      { label: "Hours", value: "24 / 7" },
    ],
    photosTitle: "Minsk — Highlights",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Building,_23,_Independence_Avenue,_Minsk_-_the_capital_of_Republic_of_Belarus.JPG",
        caption: "Independence Avenue",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Victory-square.jpg/1280px-Victory-square.jpg",
        caption: "Victory Square",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/%D0%97%D0%B0%D0%BC%D0%B0%D0%BB%D1%91%D1%9E%D0%BA%D1%96_%D0%9C%D1%96%D0%BD%D1%81%D0%BA%D0%B0_35.jpg/1280px-%D0%97%D0%B0%D0%BC%D0%B0%D0%BB%D1%91%D1%9E%D0%BA%D1%96_%D0%9C%D1%96%D0%BD%D1%81%D0%BA%D0%B0_35.jpg",
        caption: "Trinity Suburb (Troitskoye Predmestye)",
      },
    ],
    howTitle: "How it works",
    steps: [
      {
        icon: MapPin,
        title: "Give us your address",
        desc: "Submit a request with your pickup address and required time — anywhere in Minsk.",
      },
      {
        icon: Car,
        title: "Driver arrives early",
        desc: "Your experienced driver will be there ahead of schedule. No waiting, no delays.",
      },
      {
        icon: CheckCircle2,
        title: "Smooth arrival",
        desc: "Delivered directly to your destination: office, hotel, restaurant, airport or station.",
      },
    ],
    infoTitle: "Route Details",
    infoRows: [
      { label: "Service area", value: "Minsk city & suburbs (up to 50 km)" },
      {
        label: "Popular destinations",
        value: "Minsk-2 Airport, Railway Station, hotels, business centres",
      },
      {
        label: "Available vehicles",
        value: "Mercedes E-Class, Kia Carnival, Hyundai Palisade",
      },
      { label: "Payment", value: "Cash, card or bank transfer" },
      { label: "Booking", value: "Advance or same-day" },
    ],
    includedTitle: "What's included",
    included: [
      "Door-to-door pickup and drop-off",
      "Complimentary bottled water",
      "Luggage assistance",
      "Child seats on request",
      "Name-board meet & greet at the airport",
      "Fixed price — no meter, no hidden extras",
    ],
    whyTitle: "Why ComfortLine",
    whyItems: [
      "Operating since 2015 — over 5,000 trips completed",
      "Experienced drivers with city expertise",
      "Air-conditioned business-class vehicles",
      "Always on time — or your money back",
      "Russian & English support 24/7",
      "Corporate accounts available",
    ],
    ctaTitle: "Book a Minsk City Transfer",
    ctaDesc: "Submit a request and our manager will contact you shortly.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Minsk (city)",
    backBtn: "← All services",
  },
  pl: {
    badge: "Transfer miejski w Mińsku",
    title: "Transfery miejskie w Mińsku",
    subtitle:
      "Spotkania biznesowe, przejazdy na lotniska, hotele, restauracje i zwiedzanie — najwyższej jakości usługi „od drzwi do drzwi” w dowolnym miejscu w Mińsku z profesjonalnym szoferem.",
    stats: [
      { label: "Zasięg", value: "Cały Mińsk" },
      { label: "Czas wysyłki", value: "30–60 minut" },
      { label: "Klasa pojazdu", value: "Biznes / Minivan" },
      { label: "Godziny", value: "24/7" },
    ],
    photosTitle: "Mińsk — najważniejsze wydarzenia",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Building,_23,_Independence_Avenue,_Minsk_-_the_capital_of_Republic_of_Belarus.JPG",
        caption: "Aleja Niepodległości",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Victory-square.jpg/1280px-Victory-square.jpg",
        caption: "Plac Zwycięstwa",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/%D0%97%D0%B0%D0%BC%D0%B0%D0%BB%D1%91%D1%9E%D0%BA%D1%96_%D0%9C%D1%96%D0%BD%D1%81%D0%BA%D0%B0_35.jpg/1280px-%D0%97%D0%B0%D0%BC%D0%B0%D0%BB%D1%91%D1%9E%D0%BA%D1%96_%D0%9C%D1%96%D0%BD%D1%81%D0%BA%D0%B0_35.jpg",
        caption: "Przedmieście Trójcy (Troitskoye Predmestye)",
      },
    ],
    howTitle: "Jak to działa",
    steps: [
      {
        icon: MapPin,
        title: "Podaj nam swój adres",
        desc: "Złóż wniosek, podając adres odbioru i wymagany czas — w dowolnym miejscu w Mińsku.",
      },
      {
        icon: Car,
        title: "Kierowca przyjeżdża wcześniej",
        desc: "Twój doświadczony kierowca przyjedzie na miejsce przed czasem. Bez czekania i opóźnień.",
      },
      {
        icon: CheckCircle2,
        title: "Płynne przybycie",
        desc: "Dostarczone bezpośrednio do miejsca docelowego: biura, hotelu, restauracji, lotniska lub dworca.",
      },
    ],
    infoTitle: "Szczegóły trasy",
    infoRows: [
      {
        label: "Obszar usług",
        value: "Mińsk miasto i przedmieścia (do 50 km)",
      },
      {
        label: "Popularne kierunki",
        value: "Lotnisko Mińsk-2, dworzec kolejowy, hotele, centra biznesowe",
      },
      {
        label: "Dostępne pojazdy",
        value: "Mercedes Klasy E, Kia Carnival, Hyundai Palisade",
      },
      { label: "Płatność", value: "Gotówka, karta lub przelew bankowy" },
      { label: "Rezerwacja", value: "Z góry lub tego samego dnia" },
    ],
    includedTitle: "Co jest wliczone w cenę",
    included: [
      "Odbiór i dowóz od drzwi do drzwi",
      "Bezpłatna woda butelkowana",
      "Pomoc bagażowa",
      "Foteliki dziecięce na zamówienie",
      "Spotkanie z tablicą z nazwiskami i powitanie na lotnisku",
      "Stała cena — bez licznika, bez ukrytych dodatków",
    ],
    whyTitle: "Dlaczego ComfortLine",
    whyItems: [
      "Działa od 2015 roku – zrealizowanych ponad 5000 przejazdów",
      "Doświadczeni kierowcy z doświadczeniem miejskim",
      "Klimatyzowane pojazdy klasy biznes",
      "Zawsze na czas — albo zwrot pieniędzy",
      "Wsparcie w języku rosyjskim i angielskim 24 godziny na dobę, 7 dni w tygodniu",
      "Dostępne konta firmowe",
    ],
    ctaTitle: "Zarezerwuj transfer do Mińska",
    ctaDesc:
      "Prześlij wniosek, a nasz menedżer wkrótce się z Tobą skontaktuje.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Mińsk (miasto)",
    backBtn: "← Wszystkie usługi",
  },
  fr: {
    badge: "Transfert de la ville de Minsk",
    title: "Transferts de la ville de Minsk",
    subtitle:
      "Réunions d'affaires, déplacements à l'aéroport, hôtels, restaurants et visites touristiques : service porte-à-porte haut de gamme partout à Minsk avec un chauffeur professionnel.",
    stats: [
      { label: "Couverture", value: "Tout Minsk" },
      { label: "Délai d'expédition", value: "30 à 60 minutes" },
      { label: "Classe de véhicule", value: "Affaires / Minifourgonnette" },
      { label: "Horaires", value: "24/7" },
    ],
    photosTitle: "Minsk — Points forts",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Building,_23,_Independence_Avenue,_Minsk_-_the_capital_of_Republic_of_Belarus.JPG",
        caption: "Avenue de l'Indépendance",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Victory-square.jpg/1280px-Victory-square.jpg",
        caption: "Place de la Victoire",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/%D0%97%D0%B0%D0%BC%D0%B0%D0%BB%D1%91%D1%9E%D0%BA%D1%96_%D0%9C%D1%96%D0%BD%D1%81%D0%BA%D0%B0_35.jpg/1280px-%D0%97%D0%B0%D0%BC%D0%B0%D0%BB%D1%91%D1%9E%D0%BA%D1%96_%D0%9C%D1%96%D0%BD%D1%81%D0%BA%D0%B0_35.jpg",
        caption: "Banlieue de la Trinité (Troitskoye Predmestye)",
      },
    ],
    howTitle: "Comment ça marche",
    steps: [
      {
        icon: MapPin,
        title: "Donnez-nous votre adresse",
        desc: "Soumettez une demande avec votre adresse de prise en charge et l'heure requise, n'importe où à Minsk.",
      },
      {
        icon: Car,
        title: "Le chauffeur arrive tôt",
        desc: "Votre chauffeur expérimenté sera là plus tôt que prévu. Pas d'attente, pas de retard.",
      },
      {
        icon: CheckCircle2,
        title: "Arrivée en douceur",
        desc: "Livré directement à destination : bureau, hôtel, restaurant, aéroport ou gare.",
      },
    ],
    infoTitle: "Détails de l'itinéraire",
    infoRows: [
      {
        label: "Zone de service",
        value: "Ville et banlieue de Minsk (jusqu'à 50 km)",
      },
      {
        label: "Destinations populaires",
        value: "Aéroport Minsk-2, gare, hôtels, centres d'affaires",
      },
      {
        label: "Véhicules disponibles",
        value: "Mercedes Classe E, Kia Carnival, Hyundai Palisade",
      },
      { label: "Paiement", value: "Espèces, carte ou virement bancaire" },
      { label: "Réservation", value: "À l'avance ou le jour même" },
    ],
    includedTitle: "Ce qui est inclus",
    included: [
      "Prise en charge et retour porte à porte",
      "Eau en bouteille gratuite",
      "Assistance bagages",
      "Sièges enfants sur demande",
      "Accueil et accueil par panneau nominatif à l'aéroport",
      "Prix fixe — pas de compteur, pas d'extras cachés",
    ],
    whyTitle: "Pourquoi ComfortLine",
    whyItems: [
      "En activité depuis 2015 — plus de 5 000 voyages effectués",
      "Chauffeurs expérimentés avec une expertise en ville",
      "Véhicules de classe affaires climatisés",
      "Toujours à l'heure — ou remboursé",
      "Assistance en russe et en anglais 24h/24 et 7j/7",
      "Comptes d'entreprise disponibles",
    ],
    ctaTitle: "Réservez un transfert vers la ville de Minsk",
    ctaDesc:
      "Soumettez une demande et notre responsable vous contactera sous peu.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Minsk (ville)",
    backBtn: "← Tous les services",
  },
  seo: {
    titleRu: "Трансфер по Минску | Заказ авто 24/7 | ComfortLine",
    titleEn: "Minsk City Transfer | 24/7 Comfortable Car Hire | ComfortLine",
    descRu:
      "Заказ комфортного автомобиля по Минску: аэропорт, отели, рестораны, бизнес-встречи и экскурсии. Подача 30–60 мин, опытные водители, фиксированные цены. ComfortLine — комфортный трансфер в Минске.",
    descEn:
      "Comfortable car hire across Minsk — airport, hotels, restaurants, meetings, sightseeing. 30–60 min pickup, professional English-speaking drivers, fixed prices. ComfortLine comfortable transfers.",
    pathRu: "/трансфер-по-минску",
    pathEn: "/minsk-city-transfer",
    breadcrumbRu: "Трансфер по Минску",
    breadcrumbEn: "Minsk City Transfer",
    fromName: "Минск",
    toName: "Минск (по городу)",
  },
};

export default function MinskCityTransferPage() {
  return <RouteLandingPage data={data} />;
}
