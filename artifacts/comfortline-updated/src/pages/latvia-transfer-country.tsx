import { CountryTransferPage, CountryPageData } from "./country-transfer-page";

const data: CountryPageData = {
  ru: {
    badge: "Трансферы в Латвию",
    title: "Минск — Латвия",
    subtitle:
      "Рига и другие города Латвии. Прямые трансферы без пересадок — в аэропорт, центр города или на Балтийское побережье.",
    destinationsTitle: "Направления в Латвии",
    destinations: [
      {
        cityRu: "Аэропорт Риги (RIX)",
        cityEn: "Riga Airport (RIX)",
        descRu:
          "Крупнейший аэропорт Балтии. Рейсы в более чем 80 городов Европы и мира.",
        descEn:
          "The largest airport in the Baltics. Flights to over 80 cities across Europe and beyond.",
        distanceKm: "~470 км",
        travelTime: "5–7 ч",
        href: "/minsk-riga-airport",
        hrefRu: "/трансфер-минск-рига-аэропорт",
        isAvailable: true,
      },
      {
        cityRu: "Рига — центр города",
        cityEn: "Riga — city centre",
        descRu:
          "Старый город под охраной ЮНЕСКО, Дом Черноголовых, Art Nouveau, Рижский рынок.",
        descEn:
          "UNESCO Old Town, House of the Blackheads, Art Nouveau district, Riga Central Market.",
        distanceKm: "~470 км",
        travelTime: "5–7 ч",
        href: "/riga-transfer",
        hrefRu: "/трансфер-рига",
        isAvailable: true,
      },
      {
        cityRu: "Юрмала",
        cityEn: "Jūrmala",
        descRu:
          "Балтийский курорт в 25 км от Риги. Пляжи, сосновый воздух, санатории и деревянная архитектура в стиле модерн.",
        descEn:
          "Baltic resort 25 km from Riga. Beaches, pine air, spas and wooden Art Nouveau dachas.",
        distanceKm: "~490 км",
        travelTime: "5.5–7 ч",
        href: "/minsk-jurmala-transfer",
        hrefRu: "/трансфер-минск-юрмала",
        isAvailable: true,
      },
      {
        cityRu: "Даугавпилс",
        cityEn: "Daugavpils",
        descRu:
          "Второй по величине город Латвии. Грандиозная крепость XIX века и Центр Марка Ротко — великого абстракциониста, родившегося здесь.",
        descEn:
          "Latvia's second-largest city. A vast 19th-century fortress and the Mark Rothko Art Centre — the great abstract expressionist was born here.",
        distanceKm: "~300 км",
        travelTime: "3.5–5 ч",
        href: "/minsk-daugavpils-transfer",
        hrefRu: "/трансфер-минск-даугавпилс",
        isAvailable: true,
      },
      {
        cityRu: "Лиепая",
        cityEn: "Liepāja",
        descRu:
          "«Город ветров» на Балтийском берегу. Широкий пляж, военный квартал Кароста с имперским собором и один из лучших органов Европы.",
        descEn:
          "The 'City of Wind' on the Baltic. A wide sandy beach, the Imperial Karosta naval district and one of Europe's finest cathedral organs.",
        distanceKm: "~650 км",
        travelTime: "7–9 ч",
        href: "/minsk-liepaja-transfer",
        hrefRu: "/трансфер-минск-лиепая",
        isAvailable: true,
      },
      {
        cityRu: "Вентспилс",
        cityEn: "Ventspils",
        descRu:
          "Один из чистейших портов Балтии. Пляж с Голубым флагом, замок Ливонского ордена и знаменитые синие коровы.",
        descEn:
          "One of the cleanest Baltic ports. Blue Flag beach, Livonian Order castle and the famous blue cow sculptures.",
        distanceKm: "~620 км",
        travelTime: "7–9 ч",
        href: "/minsk-ventspils-transfer",
        hrefRu: "/трансфер-минск-вентспилс",
        isAvailable: true,
      },
    ],
    infoTitle: "Полезная информация",
    infoRows: [
      {
        label: "Пограничный переход",
        value: "Урбаны / Патарниеки (Беларусь–Латвия)",
      },
      { label: "Время на границе", value: "1–6 ч в зависимости от очереди" },
      {
        label: "Необходимые документы",
        value: "Шенгенская виза, загранпаспорт",
      },
      { label: "Валюта", value: "Евро (EUR)" },
      {
        label: "Языки",
        value:
          "Латышский (официальный), русский широко распространён, английский в туристических зонах",
      },
    ],
    includedTitle: "Что включено в любой трансфер",
    included: [
      "Подача от адреса в Минске",
      "Прямой маршрут без пересадок",
      "Помощь водителя на границе",
      "Питьевая вода и комфортный салон",
      "Детские кресла по запросу",
      "Фиксированная цена без счётчика",
    ],
    ctaTitle: "Заказать трансфер в Латвию",
    ctaDesc:
      "Оставьте заявку с маршрутом и количеством пассажиров — назовём точную цену в ближайшее время.",
    ctaBtn: "Оставить заявку",
    backBtn: "← Трансферы в Европу",
    soonLabel: "Скоро",
    bookLabel: "Запросить цену",
    detailsLabel: "Подробнее",
  },
  en: {
    badge: "Latvia Transfers",
    title: "Minsk — Latvia",
    subtitle:
      "Riga and other Latvian destinations. Direct door-to-door transfers — to the airport, city centre or Baltic seaside.",
    destinationsTitle: "Destinations in Latvia",
    destinations: [
      {
        cityRu: "Аэропорт Риги (RIX)",
        cityEn: "Riga Airport (RIX)",
        descRu:
          "Крупнейший аэропорт Балтии. Рейсы в более чем 80 городов Европы и мира.",
        descEn:
          "The largest airport in the Baltics. Flights to over 80 cities across Europe and beyond.",
        distanceKm: "~470 km",
        travelTime: "5–7 hrs",
        href: "/minsk-riga-airport",
        hrefRu: "/трансфер-минск-рига-аэропорт",
        isAvailable: true,
      },
      {
        cityRu: "Рига — центр города",
        cityEn: "Riga — city centre",
        descRu:
          "Старый город под охраной ЮНЕСКО, Дом Черноголовых, Art Nouveau, Рижский рынок.",
        descEn:
          "UNESCO Old Town, House of the Blackheads, Art Nouveau district, Riga Central Market.",
        distanceKm: "~470 km",
        travelTime: "5–7 hrs",
        href: "/riga-transfer",
        hrefRu: "/трансфер-рига",
        isAvailable: true,
      },
      {
        cityRu: "Юрмала",
        cityEn: "Jūrmala",
        descRu:
          "Балтийский курорт в 25 км от Риги. Пляжи, сосновый воздух, санатории и деревянная архитектура в стиле модерн.",
        descEn:
          "Baltic resort 25 km from Riga. Beaches, pine air, spas and wooden Art Nouveau dachas.",
        distanceKm: "~490 km",
        travelTime: "5.5–7 hrs",
        href: "/minsk-jurmala-transfer",
        hrefRu: "/трансфер-минск-юрмала",
        isAvailable: true,
      },
      {
        cityRu: "Даугавпилс",
        cityEn: "Daugavpils",
        descRu:
          "Второй по величине город Латвии. Грандиозная крепость XIX века и Центр Марка Ротко — великого абстракциониста, родившегося здесь.",
        descEn:
          "Latvia's second-largest city. A vast 19th-century fortress and the Mark Rothko Art Centre — the great abstract expressionist was born here.",
        distanceKm: "~300 km",
        travelTime: "3.5–5 hrs",
        href: "/minsk-daugavpils-transfer",
        hrefRu: "/трансфер-минск-даугавпилс",
        isAvailable: true,
      },
      {
        cityRu: "Лиепая",
        cityEn: "Liepāja",
        descRu:
          "«Город ветров» на Балтийском берегу. Широкий пляж, военный квартал Кароста с имперским собором и один из лучших органов Европы.",
        descEn:
          "The 'City of Wind' on the Baltic. A wide sandy beach, the Imperial Karosta naval district and one of Europe's finest cathedral organs.",
        distanceKm: "~650 km",
        travelTime: "7–9 hrs",
        href: "/minsk-liepaja-transfer",
        hrefRu: "/трансфер-минск-лиепая",
        isAvailable: true,
      },
      {
        cityRu: "Вентспилс",
        cityEn: "Ventspils",
        descRu:
          "Один из чистейших портов Балтии. Пляж с Голубым флагом, замок Ливонского ордена и знаменитые синие коровы.",
        descEn:
          "One of the cleanest Baltic ports. Blue Flag beach, Livonian Order castle and the famous blue cow sculptures.",
        distanceKm: "~620 km",
        travelTime: "7–9 hrs",
        href: "/minsk-ventspils-transfer",
        hrefRu: "/трансфер-минск-вентспилс",
        isAvailable: true,
      },
    ],
    infoTitle: "Useful information",
    infoRows: [
      {
        label: "Border crossing",
        value: "Urbany / Pāternieki (Belarus–Latvia)",
      },
      { label: "Border crossing time", value: "1–6 hrs depending on queues" },
      { label: "Documents required", value: "Schengen visa, valid passport" },
      { label: "Currency", value: "Euro (EUR)" },
      {
        label: "Languages",
        value:
          "Latvian (official), Russian widely spoken, English in tourist areas",
      },
    ],
    includedTitle: "What's included in every transfer",
    included: [
      "Pickup from your Minsk address",
      "Direct route — no transfers",
      "Driver assistance at the border",
      "Bottled water and comfortable cabin",
      "Child seats on request",
      "Fixed price — no meter, no surprises",
    ],
    ctaTitle: "Book a Latvia Transfer",
    ctaDesc:
      "Tell us your route and number of passengers — we'll send an exact price shortly.",
    ctaBtn: "Request a booking",
    backBtn: "← Europe transfers",
    soonLabel: "Coming soon",
    bookLabel: "Request price",
    detailsLabel: "View details",
  },
  pl: {
    badge: "Transfery z Łotwy",
    title: "Mińsk — Łotwa",
    subtitle:
      "Ryga i inne łotewskie miejsca docelowe. Bezpośrednie transfery „od drzwi do drzwi” – ​​na lotnisko, do centrum miasta lub nad Bałtyk.",
    destinationsTitle: "Miejsca docelowe na Łotwie",
    destinations: [
      {
        cityRu: "Аэропорт Риги (RIX)",
        cityEn: "Port lotniczy Ryga (RIX)",
        descRu:
          "Крупнейший аэропорт Балтии. Рейсы в более чем 80 городов Европы и мира.",
        descEn:
          "Największe lotnisko w krajach bałtyckich. Loty do ponad 80 miast w Europie i poza nią.",
        distanceKm: "~470 km",
        travelTime: "5–7 godz",
        href: "/minsk-riga-airport",
        hrefRu: "/трансфер-минск-рига-аэропорт",
        isAvailable: true,
      },
      {
        cityRu: "Рига — центр города",
        cityEn: "Ryga — centrum miasta",
        descRu:
          "Старый город под охраной ЮНЕСКО, Дом Черноголовых, Art Nouveau, Рижский рынок.",
        descEn:
          "Stare Miasto UNESCO, Dom Czarnogłowych, dzielnica secesyjna, Rynek Centralny w Rydze.",
        distanceKm: "~470 km",
        travelTime: "5–7 godz",
        href: "/riga-transfer",
        hrefRu: "/трансфер-рига",
        isAvailable: true,
      },
      {
        cityRu: "Юрмала",
        cityEn: "Jurmała",
        descRu:
          "Балтийский курорт в 25 km od Риги. Пляжи, сосновый воздух, санатории и деревянная архитектура в стиле модерн.",
        descEn:
          "Nadbałtycki kurort 25 km od Rygi. Plaże, sosnowe powietrze, uzdrowiska i drewniane dacze w stylu secesyjnym.",
        distanceKm: "~490 km",
        travelTime: "5,5–7 godz",
        href: "/minsk-jurmala-transfer",
        hrefRu: "/трансфер-минск-юрмала",
        isAvailable: true,
      },
      {
        cityRu: "Даугавпилс",
        cityEn: "Dyneburg",
        descRu:
          "Второй по величине город Латвии. Грандиозная крепость XIX века i Центр Марка Ротко — великого абстракциониста, родившегося здесь.",
        descEn:
          "Drugie co do wielkości miasto Łotwy. Rozległa XIX-wieczna twierdza i Centrum Sztuki Marka Rothko – tutaj urodził się wielki abstrakcyjny ekspresjonista.",
        distanceKm: "~300 km",
        travelTime: "3,5–5 godz",
        href: "/minsk-daugavpils-transfer",
        hrefRu: "/трансфер-минск-даугавпилс",
        isAvailable: true,
      },
      {
        cityRu: "Лиепая",
        cityEn: "Lipawa",
        descRu:
          "«Город ветров» на Балтийском берегу. Широкий пляж, военный квартал Кароста с имперским собором и один из лучших органов Европы.",
        descEn:
          "„Miasto Wiatru” nad Bałtykiem. Szeroka piaszczysta plaża, cesarska dzielnica morska Karosta i jedne z najwspanialszych organów katedralnych w Europie.",
        distanceKm: "~650 km",
        travelTime: "7–9 godz",
        href: "/minsk-liepaja-transfer",
        hrefRu: "/трансфер-минск-лиепая",
        isAvailable: true,
      },
      {
        cityRu: "Вентспилс",
        cityEn: "Ventspils",
        descRu:
          "Один из чистейших портов Балтии. Пляж с Голубым флагом, замок Ливонского ордена и знаменитые синие коровы.",
        descEn:
          "Jeden z najczystszych portów bałtyckich. Plaża Błękitna Flaga, zamek Zakonu Kawalerów Mieczowych i słynne rzeźby niebieskich krów.",
        distanceKm: "~620 km",
        travelTime: "7–9 godz",
        href: "/minsk-ventspils-transfer",
        hrefRu: "/трансфер-минск-вентспилс",
        isAvailable: true,
      },
    ],
    infoTitle: "Przydatne informacje",
    infoRows: [
      {
        label: "Przejście graniczne",
        value: "Urbany / Pāternieki (Białoruś – Łotwa)",
      },
      {
        label: "Czas przekraczania granicy",
        value: "1–6 godzin w zależności od kolejek",
      },
      { label: "Wymagane dokumenty", value: "Wiza Schengen, ważny paszport" },
      { label: "Waluta", value: "Euro (EUR)" },
      {
        label: "Języki",
        value:
          "Łotewski (oficjalny), powszechnie używany rosyjski, w obszarach turystycznych angielski",
      },
    ],
    includedTitle: "Co obejmuje każdy przelew",
    included: [
      "Odbiór z Twojego adresu w Mińsku",
      "Trasa bezpośrednia – bez przesiadek",
      "Pomoc kierowcy na granicy",
      "Woda butelkowana i wygodna kabina",
      "Foteliki dziecięce na zamówienie",
      "Stała cena — bez licznika, bez niespodzianek",
    ],
    ctaTitle: "Zarezerwuj transfer na Łotwę",
    ctaDesc:
      "Podaj nam trasę i liczbę pasażerów — wkrótce prześlemy dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    backBtn: "← Transfery w Europie",
    soonLabel: "Już wkrótce",
    bookLabel: "Zapytaj o cenę",
    detailsLabel: "Zobacz szczegóły",
  },
  fr: {
    badge: "Lettonie Transferts",
    title: "Minsk — Lettonie",
    subtitle:
      "Riga et autres destinations lettones. Transferts directs de porte à porte — vers l'aéroport, le centre-ville ou la mer Baltique.",
    destinationsTitle: "Destinations en Lettonie",
    destinations: [
      {
        cityRu: "Aéroport de Rigi (RIX)",
        cityEn: "Aéroport de Riga (RIX)",
        descRu:
          "Aéroport international de Baltique. Il y a plus de 80 ans d'Europe et de monde.",
        descEn:
          "Le plus grand aéroport des pays baltes. Vols vers plus de 80 villes à travers l’Europe et au-delà.",
        distanceKm: "~470km",
        travelTime: "5 à 7 heures",
        href: "/minsk-riga-airport",
        hrefRu: "/трансфер-минск-рига-аэропорт",
        isAvailable: true,
      },
      {
        cityRu: "Riga — centre ville",
        cityEn: "Riga — centre-ville",
        descRu:
          "L'état actuel de l'État de New York, la Maison Tchernogolov, l'Art Nouveau, la Russie et le Royaume-Uni.",
        descEn:
          "Vieille ville UNESCO, Maison des Têtes Noires, quartier Art Nouveau, marché central de Riga.",
        distanceKm: "~470km",
        travelTime: "5 à 7 heures",
        href: "/riga-transfer",
        hrefRu: "/трансфер-рига",
        isAvailable: true,
      },
      {
        cityRu: "Юрмала",
        cityEn: "Jurmala",
        descRu:
          "La cour baltique est à 25 km de Rigi. Il y a des eaux claires, des saunas et une architecture moderne dans un style moderne.",
        descEn:
          "Station baltique à 25 km de Riga. Plages, air des pins, spas et datchas Art Nouveau en bois.",
        distanceKm: "~490km",
        travelTime: "5,5 à 7 heures",
        href: "/minsk-jurmala-transfer",
        hrefRu: "/трансфер-минск-юрмала",
        isAvailable: true,
      },
      {
        cityRu: "Даугавпилс",
        cityEn: "Daugavpils",
        descRu:
          "Второй по величине город Латвии. La grande création du XIXème siècle et le centre de Marka Rotko — великого абстракциониста, родившегося здесь.",
        descEn:
          "La deuxième plus grande ville de Lettonie. Une vaste forteresse du XIXe siècle et le centre d'art Mark Rothko — le grand expressionniste abstrait est né ici.",
        distanceKm: "~300km",
        travelTime: "3,5 à 5 heures",
        href: "/minsk-daugavpils-transfer",
        hrefRu: "/трансфер-минск-даугавпилс",
        isAvailable: true,
      },
      {
        cityRu: "Liège",
        cityEn: "Liepaja",
        descRu:
          "«Город ветров» на Балтийском берегу. Il s'agit d'un appartement dans lequel Karosta est un empire et un grand nombre d'organisations européennes.",
        descEn:
          "La « Ville du vent » sur la Baltique. Une large plage de sable, le quartier naval impérial de Karosta et l'un des plus beaux orgues de cathédrale d'Europe.",
        distanceKm: "~650km",
        travelTime: "7 à 9 heures",
        href: "/minsk-liepaja-transfer",
        hrefRu: "/трансфер-минск-лиепая",
        isAvailable: true,
      },
      {
        cityRu: "Ventspils",
        cityEn: "Ventspils",
        descRu:
          "Je suis dans les ports de la Baltique. Пляж с Голубым флагом, замок Ливонского ордена et знаменитые синие коровы.",
        descEn:
          "L'un des ports baltes les plus propres. Plage Pavillon Bleu, château de l'Ordre de Livonie et les célèbres sculptures de vaches bleues.",
        distanceKm: "~620km",
        travelTime: "7 à 9 heures",
        href: "/minsk-ventspils-transfer",
        hrefRu: "/трансфер-минск-вентспилс",
        isAvailable: true,
      },
    ],
    infoTitle: "Informations utiles",
    infoRows: [
      {
        label: "Passage de la frontière",
        value: "Urbany / Pāternieki (Biélorussie-Lettonie)",
      },
      {
        label: "Temps de passage de la frontière",
        value: "1 à 6 heures selon les files d'attente",
      },
      { label: "Documents requis", value: "Visa Schengen, passeport valide" },
      { label: "Devise", value: "euros (EUR)" },
      {
        label: "Langues",
        value:
          "Letton (officiel), russe largement parlé, anglais dans les zones touristiques",
      },
    ],
    includedTitle: "Ce qui est inclus dans chaque transfert",
    included: [
      "Prise en charge à votre adresse à Minsk",
      "Itinéraire direct — pas de transfert",
      "Assistance au conducteur à la frontière",
      "Eau en bouteille et cabine confortable",
      "Sièges enfants sur demande",
      "Prix fixe — pas de compteur, pas de surprise",
    ],
    ctaTitle: "Réservez un transfert en Lettonie",
    ctaDesc:
      "Indiquez-nous votre itinéraire et le nombre de passagers. Nous vous enverrons un prix exact sous peu.",
    ctaBtn: "Demander une réservation",
    backBtn: "← Transferts européens",
    soonLabel: "Bientôt disponible",
    bookLabel: "Demander un prix",
    detailsLabel: "Afficher les détails",
  },
  seo: {
    titleRu:
      "Трансфер Минск — Латвия | Рига, аэропорт RIX, Юрмала | ComfortLine",
    titleEn:
      "Minsk to Latvia Transfer | Riga, RIX Airport, Jūrmala | ComfortLine",
    descRu:
      "Прямые трансферы из Минска в Латвию: Рига (RIX), центр Риги, Юрмала. Фиксированная цена, граница Урбаны–Патарниеки.",
    descEn:
      "Direct transfers from Minsk to Latvia: Riga (RIX), Riga city centre, Jūrmala. Fixed prices, Urbany–Pāternieki border.",
    pathRu: "/трансфер-в-латвию",
    pathEn: "/latvia-transfer",
    breadcrumbRu: "Трансферы в Латвию",
    breadcrumbEn: "Latvia Transfers",
  },
};

export default function LatviaTransferPage() {
  return <CountryTransferPage data={data} />;
}
