import { CountryTransferPage, CountryPageData } from "./country-transfer-page";

const data: CountryPageData = {
  ru: {
    badge: "Трансферы в Германию",
    title: "Минск — Германия",
    subtitle:
      "Берлин и другие города Германии. Прямые трансферы из Минска — деловые поездки, шопинг, туризм, без пересадок на автобусе.",
    destinationsTitle: "Направления в Германии",
    destinations: [
      {
        cityRu: "Берлин — центр города",
        cityEn: "Berlin — city centre",
        descRu:
          "Столица Германии. Бранденбургские ворота, Рейхстаг, Музейный остров, деловые кварталы.",
        descEn:
          "Germany's capital. Brandenburg Gate, Reichstag, Museum Island, business districts.",
        distanceKm: "~1150 км",
        travelTime: "11–14 ч",
        href: "/berlin-transfer",
        hrefRu: "/трансфер-берлин",
        isAvailable: true,
      },
      {
        cityRu: "Берлин — аэропорт BER",
        cityEn: "Berlin BER Airport",
        descRu:
          "Единственный аэропорт Берлина. Рейсы Lufthansa, Ryanair, easyJet и других авиакомпаний.",
        descEn: "Berlin's only airport. Lufthansa, Ryanair, easyJet and more.",
        distanceKm: "~1170 км",
        travelTime: "11–14 ч",
        href: "/berlin-transfer",
        hrefRu: "/трансфер-берлин",
        isAvailable: false,
        prefilledTo: "Берлин BER",
        slug: "berlin-ber",
      },
      {
        cityRu: "Гамбург",
        cityEn: "Hamburg",
        descRu:
          "Второй по величине город Германии, крупный портовый и деловой центр.",
        descEn: "Germany's second largest city, a major port and business hub.",
        distanceKm: "~1400 км",
        travelTime: "по запросу",
        href: "/germany-transfer",
        hrefRu: "/трансфер-в-германию",
        isAvailable: false,
        prefilledTo: "Гамбург",
        slug: "hamburg",
      },
    ],
    infoTitle: "Полезная информация",
    infoRows: [
      {
        label: "Маршрут",
        value: "Минск → Брест / Варшава → Берлин (через Польшу)",
      },
      { label: "Расстояние до Берлина", value: "~1150 км" },
      {
        label: "Необходимые документы",
        value: "Шенгенская виза, загранпаспорт",
      },
      { label: "Валюта", value: "Евро (EUR)" },
      {
        label: "Языки",
        value:
          "Немецкий (официальный), английский в городах и туристических местах",
      },
    ],
    includedTitle: "Что включено в любой трансфер",
    included: [
      "Подача от адреса в Минске",
      "Прямой маршрут без пересадок",
      "Помощь водителя на границах",
      "Питьевая вода и комфортный салон",
      "Детские кресла по запросу",
      "Фиксированная цена без счётчика",
    ],
    ctaTitle: "Заказать трансфер в Германию",
    ctaDesc:
      "Оставьте заявку с маршрутом и количеством пассажиров — назовём точную цену в ближайшее время.",
    ctaBtn: "Оставить заявку",
    backBtn: "← Трансферы в Европу",
    soonLabel: "По запросу",
    bookLabel: "Запросить цену",
    detailsLabel: "Подробнее",
  },
  en: {
    badge: "Germany Transfers",
    title: "Minsk — Germany",
    subtitle:
      "Berlin and other German cities. Direct transfers from Minsk — business trips, shopping, tourism, no bus connections.",
    destinationsTitle: "Destinations in Germany",
    destinations: [
      {
        cityRu: "Берлин — центр города",
        cityEn: "Berlin — city centre",
        descRu:
          "Столица Германии. Бранденбургские ворота, Рейхстаг, Музейный остров, деловые кварталы.",
        descEn:
          "Germany's capital. Brandenburg Gate, Reichstag, Museum Island, business districts.",
        distanceKm: "~1150 km",
        travelTime: "11–14 hrs",
        href: "/berlin-transfer",
        hrefRu: "/трансфер-берлин",
        isAvailable: true,
      },
      {
        cityRu: "Берлин — аэропорт BER",
        cityEn: "Berlin BER Airport",
        descRu:
          "Единственный аэропорт Берлина. Рейсы Lufthansa, Ryanair, easyJet и других авиакомпаний.",
        descEn: "Berlin's only airport. Lufthansa, Ryanair, easyJet and more.",
        distanceKm: "~1170 km",
        travelTime: "11–14 hrs",
        href: "/berlin-transfer",
        hrefRu: "/трансфер-берлин",
        isAvailable: false,
        prefilledTo: "Berlin BER",
        slug: "berlin-ber",
      },
      {
        cityRu: "Гамбург",
        cityEn: "Hamburg",
        descRu:
          "Второй по величине город Германии, крупный портовый и деловой центр.",
        descEn: "Germany's second largest city, a major port and business hub.",
        distanceKm: "~1400 km",
        travelTime: "on request",
        href: "/germany-transfer",
        hrefRu: "/трансфер-в-германию",
        isAvailable: false,
        prefilledTo: "Hamburg",
        slug: "hamburg",
      },
    ],
    infoTitle: "Useful information",
    infoRows: [
      { label: "Route", value: "Minsk → Brest / Warsaw → Berlin (via Poland)" },
      { label: "Distance to Berlin", value: "~1150 km" },
      { label: "Documents required", value: "Schengen visa, valid passport" },
      { label: "Currency", value: "Euro (EUR)" },
      {
        label: "Languages",
        value:
          "German (official), English widely spoken in cities and tourist areas",
      },
    ],
    includedTitle: "What's included in every transfer",
    included: [
      "Pickup from your Minsk address",
      "Direct route — no transfers",
      "Driver assistance at border crossings",
      "Bottled water and comfortable cabin",
      "Child seats on request",
      "Fixed price — no meter, no surprises",
    ],
    ctaTitle: "Book a Germany Transfer",
    ctaDesc:
      "Tell us your route and number of passengers — we'll send an exact price shortly.",
    ctaBtn: "Request a booking",
    backBtn: "← Europe transfers",
    soonLabel: "On request",
    bookLabel: "Request price",
    detailsLabel: "View details",
  },
  pl: {
    badge: "Transfery Niemcy",
    title: "Mińsk — Niemcy",
    subtitle:
      "Berlin i inne niemieckie miasta. Bezpośrednie transfery z Mińska — wyjazdy służbowe, zakupy, turystyka, brak połączeń autobusowych.",
    destinationsTitle: "Miejsca docelowe w Niemczech",
    destinations: [
      {
        cityRu: "Берлин — центр города",
        cityEn: "Berlin — centrum miasta",
        descRu:
          "Столица Германии. Бранденбургские ворота, Рейхстаг, Музейный остров, деловые кварталы.",
        descEn:
          "Stolica Niemiec. Brama Brandenburska, Reichstag, Wyspa Muzeów, dzielnice biznesowe.",
        distanceKm: "~1150 km",
        travelTime: "11–14 godz",
        href: "/berlin-transfer",
        hrefRu: "/трансфер-берлин",
        isAvailable: true,
      },
      {
        cityRu: "Берлин — aэропорт BER",
        cityEn: "Lotnisko BER w Berlinie",
        descRu:
          "Единственный аэропорт Берлина. Рейсы Lufthansa, Ryanair, easyJet i других авиакомпаний.",
        descEn:
          "Jedyne lotnisko w Berlinie. Lufthansa, Ryanair, easyJet i nie tylko.",
        distanceKm: "~1170 km",
        travelTime: "11–14 godz",
        href: "/berlin-transfer",
        hrefRu: "/трансфер-берлин",
        isAvailable: false,
        prefilledTo: "Berliński BER",
        slug: "berlin-ber",
      },
      {
        cityRu: "Гамбург",
        cityEn: "Hamburgu",
        descRu:
          "Второй по величине город Германии, крупный портовый и деловой центр.",
        descEn:
          "Drugie co do wielkości miasto w Niemczech, główny port i węzeł biznesowy.",
        distanceKm: "~1400 km",
        travelTime: "na żądanie",
        href: "/germany-transfer",
        hrefRu: "/трансфер-в-германию",
        isAvailable: false,
        prefilledTo: "Hamburgu",
        slug: "Hamburgu",
      },
    ],
    infoTitle: "Przydatne informacje",
    infoRows: [
      {
        label: "Trasa",
        value: "Mińsk → Brześć / Warszawa → Berlin (przez Polskę)",
      },
      { label: "Odległość do Berlina", value: "~1150 km" },
      { label: "Wymagane dokumenty", value: "Wiza Schengen, ważny paszport" },
      { label: "Waluta", value: "Euro (EUR)" },
      {
        label: "Języki",
        value:
          "Niemiecki (urzędowy), angielski powszechnie używany w miastach i obszarach turystycznych",
      },
    ],
    includedTitle: "Co obejmuje każdy przelew",
    included: [
      "Odbiór z Twojego adresu w Mińsku",
      "Trasa bezpośrednia – bez przesiadek",
      "Pomoc kierowcy na przejściach granicznych",
      "Woda butelkowana i wygodna kabina",
      "Foteliki dziecięce na zamówienie",
      "Stała cena — bez licznika, bez niespodzianek",
    ],
    ctaTitle: "Zarezerwuj transfer do Niemiec",
    ctaDesc:
      "Podaj nam trasę i liczbę pasażerów — wkrótce prześlemy dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    backBtn: "← Transfery w Europie",
    soonLabel: "Na żądanie",
    bookLabel: "Zapytaj o cenę",
    detailsLabel: "Zobacz szczegóły",
  },
  fr: {
    badge: "Transferts Allemagne",
    title: "Minsk — Allemagne",
    subtitle:
      "Berlin et d'autres villes allemandes. Transferts directs depuis Minsk — voyages d'affaires, shopping, tourisme, pas de liaison en bus.",
    destinationsTitle: "Destinations en Allemagne",
    destinations: [
      {
        cityRu: "Berlin — Centre-ville",
        cityEn: "Berlin — centre-ville",
        descRu:
          "Столица Германии. Бранденбургские ворота, Рейхстаг, Музейный остров, деловые кварталы.",
        descEn:
          "La capitale de l'Allemagne. Porte de Brandebourg, Reichstag, Île aux Musées, quartiers d'affaires.",
        distanceKm: "~1150km",
        travelTime: "11 à 14 heures",
        href: "/berlin-transfer",
        hrefRu: "/трансфер-берлин",
        isAvailable: true,
      },
      {
        cityRu: "Berlin — Aéroport de BER",
        cityEn: "Aéroport Berlin-BER",
        descRu:
          "Aéroport international de Berlin. Il s'agit de Lufthansa, Ryanair, easyJet et d'autres compagnies aériennes.",
        descEn:
          "Le seul aéroport de Berlin. Lufthansa, Ryanair, easyJet et plus encore.",
        distanceKm: "~1170km",
        travelTime: "11 à 14 heures",
        href: "/berlin-transfer",
        hrefRu: "/трансфер-берлин",
        isAvailable: false,
        prefilledTo: "BER berlinois",
        slug: "berlin-ber",
      },
      {
        cityRu: "Hambourg",
        cityEn: "Hambourg",
        descRu:
          "Il y a un grand port allemand et un centre commercial en Allemagne.",
        descEn:
          "Deuxième plus grande ville d'Allemagne, important port et centre d'affaires.",
        distanceKm: "~1400km",
        travelTime: "sur demande",
        href: "/germany-transfer",
        hrefRu: "/трансфер-в-германию",
        isAvailable: false,
        prefilledTo: "Hambourg",
        slug: "Hambourg",
      },
    ],
    infoTitle: "Informations utiles",
    infoRows: [
      {
        label: "Itinéraire",
        value: "Minsk → Brest / Varsovie → Berlin (via la Pologne)",
      },
      { label: "Distance à Berlin", value: "~1150km" },
      { label: "Documents requis", value: "Visa Schengen, passeport valide" },
      { label: "Devise", value: "euros (EUR)" },
      {
        label: "Langues",
        value:
          "Allemand (officiel), anglais largement parlé dans les villes et zones touristiques",
      },
    ],
    includedTitle: "Ce qui est inclus dans chaque transfert",
    included: [
      "Prise en charge à votre adresse à Minsk",
      "Itinéraire direct — pas de transfert",
      "Assistance au conducteur aux postes frontières",
      "Eau en bouteille et cabine confortable",
      "Sièges enfants sur demande",
      "Prix fixe — pas de compteur, pas de surprise",
    ],
    ctaTitle: "Réservez un transfert en Allemagne",
    ctaDesc:
      "Indiquez-nous votre itinéraire et le nombre de passagers. Nous vous enverrons un prix exact sous peu.",
    ctaBtn: "Demander une réservation",
    backBtn: "← Transferts européens",
    soonLabel: "Sur demande",
    bookLabel: "Demander un prix",
    detailsLabel: "Afficher les détails",
  },
  seo: {
    titleRu: "Трансфер Минск — Германия | Берлин, BER | ComfortLine",
    titleEn: "Minsk to Germany Transfer | Berlin, BER Airport | ComfortLine",
    descRu:
      "Прямые трансферы из Минска в Германию: Берлин (центр, аэропорт BER), Гамбург. Фиксированная цена, без пересадок.",
    descEn:
      "Direct transfers from Minsk to Germany: Berlin (city centre, BER airport), Hamburg. Fixed prices, door-to-door.",
    pathRu: "/трансфер-в-германию",
    pathEn: "/germany-transfer",
    breadcrumbRu: "Трансферы в Германию",
    breadcrumbEn: "Germany Transfers",
  },
};

export default function GermanyTransferPage() {
  return <CountryTransferPage data={data} />;
}
