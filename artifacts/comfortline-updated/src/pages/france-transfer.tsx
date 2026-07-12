import { CountryTransferPage, CountryPageData } from "./country-transfer-page";

const data: CountryPageData = {
  ru: {
    badge: "Трансферы во Францию",
    title: "Минск — Франция",
    subtitle:
      "Дальние трансферы из Минска в Париж и другие города Франции. Комфортный автомобиль, фиксированная цена, без пересадок.",
    destinationsTitle: "Направления во Франции",
    destinations: [
      {
        cityRu: "Аэропорт Парижа CDG",
        cityEn: "Paris CDG Airport",
        descRu:
          "Крупнейший аэропорт Франции. Рейсы Air France, Ryanair, Transavia и многих других. Трансфер от Минска напрямую.",
        descEn:
          "France's busiest airport. Air France, Ryanair, Transavia and many more. Direct transfer from Minsk.",
        distanceKm: "~1900 км",
        travelTime: "по запросу",
        href: "/france-transfer",
        hrefRu: "/трансфер-во-францию",
        isAvailable: false,
        prefilledTo: "Париж CDG",
        slug: "paris-cdg",
      },
      {
        cityRu: "Париж — центр города",
        cityEn: "Paris — city centre",
        descRu:
          "Эйфелева башня, Лувр, Монмартр. Деловые поездки, туризм, культурные мероприятия.",
        descEn:
          "Eiffel Tower, Louvre, Montmartre. Business trips, tourism, cultural events.",
        distanceKm: "~1900 км",
        travelTime: "по запросу",
        href: "/france-transfer",
        hrefRu: "/трансфер-во-францию",
        isAvailable: false,
        prefilledTo: "Париж",
        slug: "paris-city",
      },
      {
        cityRu: "Страсбург",
        cityEn: "Strasbourg",
        descRu:
          "Столица Эльзаса и Европейского парламента. Удобен для транзита через Германию.",
        descEn:
          "Capital of Alsace and the European Parliament. Convenient via Germany.",
        distanceKm: "~1600 км",
        travelTime: "по запросу",
        href: "/france-transfer",
        hrefRu: "/трансфер-во-францию",
        isAvailable: false,
        prefilledTo: "Страсбург",
        slug: "strasbourg",
      },
    ],
    infoTitle: "Полезная информация",
    infoRows: [
      {
        label: "Маршрут",
        value: "Минск → Варшава / Берлин → Париж (через Польшу и Германию)",
      },
      { label: "Расстояние", value: "~1900 км до Парижа" },
      {
        label: "Необходимые документы",
        value: "Шенгенская виза, загранпаспорт",
      },
      { label: "Валюта", value: "Евро (EUR)" },
      {
        label: "Формат",
        value: "Дальний трансфер с водителем, возможно разделение на этапы",
      },
    ],
    includedTitle: "Что включено в любой трансфер",
    included: [
      "Подача от адреса в Минске",
      "Прямой маршрут без авиапересадок",
      "Комфортный автомобиль бизнес-класса",
      "Питьевая вода и комфортный салон",
      "Детские кресла по запросу",
      "Фиксированная согласованная цена",
    ],
    ctaTitle: "Запросить трансфер во Францию",
    ctaDesc:
      "Дальний маршрут — рассчитаем индивидуально. Оставьте заявку с маршрутом и датой.",
    ctaBtn: "Оставить заявку",
    backBtn: "← Трансферы в Европу",
    soonLabel: "По запросу",
    bookLabel: "Запросить цену",
    detailsLabel: "Подробнее",
  },
  en: {
    badge: "France Transfers",
    title: "Minsk — France",
    subtitle:
      "Long-distance transfers from Minsk to Paris and other French cities. Comfortable vehicle, fixed price, door-to-door service.",
    destinationsTitle: "Destinations in France",
    destinations: [
      {
        cityRu: "Аэропорт Парижа CDG",
        cityEn: "Paris CDG Airport",
        descRu:
          "Крупнейший аэропорт Франции. Рейсы Air France, Ryanair, Transavia и многих других. Трансфер от Минска напрямую.",
        descEn:
          "France's busiest airport. Air France, Ryanair, Transavia and many more. Direct transfer from Minsk.",
        distanceKm: "~1900 km",
        travelTime: "on request",
        href: "/france-transfer",
        hrefRu: "/трансфер-во-францию",
        isAvailable: false,
        prefilledTo: "Paris CDG",
        slug: "paris-cdg",
      },
      {
        cityRu: "Париж — центр города",
        cityEn: "Paris — city centre",
        descRu:
          "Эйфелева башня, Лувр, Монмартр. Деловые поездки, туризм, культурные мероприятия.",
        descEn:
          "Eiffel Tower, Louvre, Montmartre. Business trips, tourism, cultural events.",
        distanceKm: "~1900 km",
        travelTime: "on request",
        href: "/france-transfer",
        hrefRu: "/трансфер-во-францию",
        isAvailable: false,
        prefilledTo: "Paris",
        slug: "paris-city",
      },
      {
        cityRu: "Страсбург",
        cityEn: "Strasbourg",
        descRu:
          "Столица Эльзаса и Европейского парламента. Удобен для транзита через Германию.",
        descEn:
          "Capital of Alsace and the European Parliament. Convenient via Germany.",
        distanceKm: "~1600 km",
        travelTime: "on request",
        href: "/france-transfer",
        hrefRu: "/трансфер-во-францию",
        isAvailable: false,
        prefilledTo: "Strasbourg",
        slug: "strasbourg",
      },
    ],
    infoTitle: "Useful information",
    infoRows: [
      {
        label: "Route",
        value: "Minsk → Warsaw / Berlin → Paris (via Poland and Germany)",
      },
      { label: "Distance", value: "~1900 km to Paris" },
      { label: "Documents required", value: "Schengen visa, valid passport" },
      { label: "Currency", value: "Euro (EUR)" },
      {
        label: "Format",
        value: "Long-distance driver transfer; may be arranged in stages",
      },
    ],
    includedTitle: "What's included in every transfer",
    included: [
      "Pickup from your Minsk address",
      "Direct route — no flight connections",
      "Business-class comfortable vehicle",
      "Bottled water and comfortable cabin",
      "Child seats on request",
      "Fixed agreed price — no surprises",
    ],
    ctaTitle: "Request a France Transfer",
    ctaDesc:
      "Long-distance route — we calculate individually. Leave a request with your route and date.",
    ctaBtn: "Request a booking",
    backBtn: "← Europe transfers",
    soonLabel: "On request",
    bookLabel: "Request price",
    detailsLabel: "View details",
  },
  pl: {
    badge: "Transfery we Francji",
    title: "Mińsk — Francja",
    subtitle:
      "Transfery dalekobieżne z Mińska do Paryża i innych francuskich miast. Komfortowy pojazd, stała cena, serwis „od drzwi do drzwi”.",
    destinationsTitle: "Miejsca docelowe we Francji",
    destinations: [
      {
        cityRu: "Аэропорт Парижа CDG",
        cityEn: "Lotnisko CDG w Paryżu",
        descRu:
          "Крупнейший аэропорт Франции. Recenzje Air France, Ryanair, Transavia i многих других. Трансфер от Минска напрямую.",
        descEn:
          "Najbardziej ruchliwe lotnisko we Francji. Air France, Ryanair, Transavia i wiele innych. Bezpośredni transfer z Mińska.",
        distanceKm: "~1900 km",
        travelTime: "na żądanie",
        href: "/france-transfer",
        hrefRu: "/трансфер-во-францию",
        isAvailable: false,
        prefilledTo: "CDG Paryż",
        slug: "paryż-cdg",
      },
      {
        cityRu: "Париж — центр города",
        cityEn: "Paryż — centrum miasta",
        descRu:
          "Эйфелева башня, Лувр, Монмартр. Деловые поездки, туризм, культурные мероприятия.",
        descEn:
          "Wieża Eiffla, Luwr, Montmartre. Wyjazdy służbowe, turystyka, wydarzenia kulturalne.",
        distanceKm: "~1900 km",
        travelTime: "na żądanie",
        href: "/france-transfer",
        hrefRu: "/трансфер-во-францию",
        isAvailable: false,
        prefilledTo: "Paryż",
        slug: "Paryż-miasto",
      },
      {
        cityRu: "Страсбург",
        cityEn: "Strasburg",
        descRu:
          "Столица Эльзаса i Европейского парламента. Удобен для транзита через Германию.",
        descEn:
          "Stolica Alzacji i Parlament Europejski. Wygodnie przez Niemcy.",
        distanceKm: "~1600 km",
        travelTime: "na żądanie",
        href: "/france-transfer",
        hrefRu: "/трансфер-во-францию",
        isAvailable: false,
        prefilledTo: "Strasburg",
        slug: "Strasburg",
      },
    ],
    infoTitle: "Przydatne informacje",
    infoRows: [
      {
        label: "Trasa",
        value: "Mińsk → Warszawa / Berlin → Paryż (przez Polskę i Niemcy)",
      },
      { label: "Odległość", value: "~1900 km do Paryża" },
      { label: "Wymagane dokumenty", value: "Wiza Schengen, ważny paszport" },
      { label: "Waluta", value: "Euro (EUR)" },
      {
        label: "Sformatuj",
        value:
          "Transfer kierowcy na długich dystansach; można organizować etapami",
      },
    ],
    includedTitle: "Co obejmuje każdy przelew",
    included: [
      "Odbiór z Twojego adresu w Mińsku",
      "Trasa bezpośrednia — brak połączeń lotniczych",
      "Komfortowy pojazd klasy biznes",
      "Woda butelkowana i wygodna kabina",
      "Foteliki dziecięce na zamówienie",
      "Stała, uzgodniona cena — bez niespodzianek",
    ],
    ctaTitle: "Poproś o transfer do Francji",
    ctaDesc:
      "Trasa długodystansowa – kalkulujemy indywidualnie. Zostaw prośbę z trasą i datą.",
    ctaBtn: "Poproś o rezerwację",
    backBtn: "← Transfery w Europie",
    soonLabel: "Na żądanie",
    bookLabel: "Zapytaj o cenę",
    detailsLabel: "Zobacz szczegóły",
  },
  fr: {
    badge: "Transferts France",
    title: "Minsk — France",
    subtitle:
      "Transferts longue distance de Minsk vers Paris et autres villes françaises. Véhicule confortable, prix fixe, service porte à porte.",
    destinationsTitle: "Destinations en France",
    destinations: [
      {
        cityRu: "Aéroport Paris CDG",
        cityEn: "Aéroport Paris CDG",
        descRu:
          "Aéroport international de France. Avec Air France, Ryanair, Transavia et de nombreux transporteurs. Le transfert vers Minsk est effectué.",
        descEn:
          "L'aéroport le plus fréquenté de France. Air France, Ryanair, Transavia et bien d'autres. Transfert direct depuis Minsk.",
        distanceKm: "~1900km",
        travelTime: "sur demande",
        href: "/france-transfer",
        hrefRu: "/трансфер-во-францию",
        isAvailable: false,
        prefilledTo: "Paris CDG",
        slug: "paris-cdg",
      },
      {
        cityRu: "Paris — centre ville",
        cityEn: "Paris — centre-ville",
        descRu:
          "Эйфелева башня, Лувр, Монмартр. Les voyages, le tourisme et la culture.",
        descEn:
          "Tour Eiffel, Louvre, Montmartre. Déplacements d'affaires, tourisme, événements culturels.",
        distanceKm: "~1900km",
        travelTime: "sur demande",
        href: "/france-transfer",
        hrefRu: "/трансфер-во-францию",
        isAvailable: false,
        prefilledTo: "Paris",
        slug: "Paris-ville",
      },
      {
        cityRu: "Strasbourg",
        cityEn: "Strasbourg",
        descRu:
          "L'Élisabeth et le Parlement européen. Idéal pour le transport en Allemagne.",
        descEn:
          "Capitale de l'Alsace et Parlement européen. Pratique via l'Allemagne.",
        distanceKm: "~1600km",
        travelTime: "sur demande",
        href: "/france-transfer",
        hrefRu: "/трансфер-во-францию",
        isAvailable: false,
        prefilledTo: "Strasbourg",
        slug: "strasbourg",
      },
    ],
    infoTitle: "Informations utiles",
    infoRows: [
      {
        label: "Itinéraire",
        value:
          "Minsk → Varsovie / Berlin → Paris (via la Pologne et l'Allemagne)",
      },
      { label: "Distance", value: "~1900km jusqu'à Paris" },
      { label: "Documents requis", value: "Visa Schengen, passeport valide" },
      { label: "Devise", value: "euros (EUR)" },
      {
        label: "Formater",
        value:
          "Transfert de chauffeur longue distance ; peut être organisé par étapes",
      },
    ],
    includedTitle: "Ce qui est inclus dans chaque transfert",
    included: [
      "Prise en charge à votre adresse à Minsk",
      "Itinéraire direct — pas de correspondance aérienne",
      "Véhicule confortable de classe affaires",
      "Eau en bouteille et cabine confortable",
      "Sièges enfants sur demande",
      "Prix fixe convenu – pas de surprise",
    ],
    ctaTitle: "Demander un transfert France",
    ctaDesc:
      "Itinéraire longue distance — nous calculons individuellement. Laissez une demande avec votre itinéraire et votre date.",
    ctaBtn: "Demander une réservation",
    backBtn: "← Transferts européens",
    soonLabel: "Sur demande",
    bookLabel: "Demander un prix",
    detailsLabel: "Afficher les détails",
  },
  seo: {
    titleRu: "Трансфер Минск — Франция | Париж, CDG | ComfortLine",
    titleEn: "Minsk to France Transfer | Paris, CDG | ComfortLine",
    descRu:
      "Дальний трансфер из Минска во Францию: Париж CDG, центр Парижа, Страсбург. Индивидуальный расчёт, фиксированная цена.",
    descEn:
      "Long-distance transfer from Minsk to France: Paris CDG, Paris city centre, Strasbourg. Individual quote, fixed price.",
    pathRu: "/трансфер-во-францию",
    pathEn: "/france-transfer",
    breadcrumbRu: "Трансферы во Францию",
    breadcrumbEn: "France Transfers",
  },
};

export default function FranceTransferPage() {
  return <CountryTransferPage data={data} />;
}
