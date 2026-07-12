import { CountryTransferPage, CountryPageData } from "./country-transfer-page";

const data: CountryPageData = {
  ru: {
    badge: "Трансферы в Польшу",
    title: "Минск — Польша",
    subtitle:
      "Варшава и её аэропорты — самое популярное европейское направление из Минска. Трансфер к аэропортам Шопен (WAW) и Модлин, а также в центр города.",
    destinationsTitle: "Направления в Польше",
    destinations: [
      {
        cityRu: "Аэропорт Варшавы Шопен (WAW)",
        cityEn: "Warsaw Chopin Airport (WAW)",
        descRu:
          "Главный аэропорт Польши. Рейсы LOT, Ryanair, Wizz Air и десятков других авиакомпаний.",
        descEn:
          "Poland's main airport. LOT, Ryanair, Wizz Air and dozens of other airlines.",
        distanceKm: "~600 км",
        travelTime: "6–9 ч",
        href: "/minsk-warsaw-airport",
        hrefRu: "/трансфер-минск-варшава-шопен",
        isAvailable: true,
      },
      {
        cityRu: "Аэропорт Варшавы Модлин",
        cityEn: "Warsaw Modlin Airport",
        descRu:
          "Бюджетный аэропорт в 40 км к северу от Варшавы. Рейсы Ryanair в города Европы.",
        descEn:
          "Budget airport 40 km north of Warsaw. Ryanair flights across Europe.",
        distanceKm: "~620 км",
        travelTime: "6.5–9 ч",
        href: "/minsk-warsaw-modlin-airport",
        hrefRu: "/трансфер-минск-варшава-модлин",
        isAvailable: true,
      },
      {
        cityRu: "Варшава — центр города",
        cityEn: "Warsaw — city centre",
        descRu:
          "Деловые поездки, шопинг, туризм. Доставка до отеля, офиса или торгового центра.",
        descEn:
          "Business trips, shopping, tourism. Delivery to your hotel, office or shopping centre.",
        distanceKm: "~600 км",
        travelTime: "6–9 ч",
        href: "/warsaw-transfer",
        hrefRu: "/трансфер-варшава",
        isAvailable: true,
      },
      {
        cityRu: "Гданьск",
        cityEn: "Gdańsk",
        descRu:
          "Жемчужина Балтийского побережья. Длинный рынок, кран Журав, базилика Святой Марии, мировая столица янтаря.",
        descEn:
          "Jewel of the Baltic coast. Long Market, Żuraw crane, St Mary's Basilica, world amber capital.",
        distanceKm: "~750 км",
        travelTime: "8–11 ч",
        href: "/minsk-gdansk-transfer",
        hrefRu: "/трансфер-минск-гданьск",
        isAvailable: true,
      },
      {
        cityRu: "Вроцлав",
        cityEn: "Wrocław",
        descRu:
          "Город мостов и гномов. Рыночная площадь Rynek, остров Тумский, более 100 мостов через Одер.",
        descEn:
          "City of bridges and dwarfs. Rynek Market Square, Cathedral Island, 100+ bridges over the Oder.",
        distanceKm: "~850 км",
        travelTime: "9–12 ч",
        href: "/minsk-wroclaw-transfer",
        hrefRu: "/трансфер-минск-вроцлав",
        isAvailable: true,
      },
      {
        cityRu: "Краков",
        cityEn: "Kraków",
        descRu:
          "Королевская столица Польши. Вавельский замок, Главная площадь, Казимеж, Величкская соляная шахта.",
        descEn:
          "Poland's royal capital. Wawel Castle, Main Market Square, Kazimierz, Wieliczka Salt Mine.",
        distanceKm: "~750 км",
        travelTime: "8–11 ч",
        href: "/minsk-krakow-transfer",
        hrefRu: "/трансфер-минск-краков",
        isAvailable: true,
      },
      {
        cityRu: "Познань",
        cityEn: "Poznań",
        descRu:
          "Колыбель Польши. Старый рынок с ренессансной Ратушей, козлы на часах и старейший польский собор на острове Тумском.",
        descEn:
          "Cradle of Poland. Renaissance Old Market Square, the famous Town Hall billy goats and Poland's oldest cathedral.",
        distanceKm: "~700 км",
        travelTime: "7–10 ч",
        href: "/minsk-poznan-transfer",
        hrefRu: "/трансфер-минск-познань",
        isAvailable: true,
      },
      {
        cityRu: "Лодзь",
        cityEn: "Łódź",
        descRu:
          "Польский город кино и моды. Пётрковска, арт-комплекс «Мануфактура» в кирпичных корпусах XIX века, всемирно известная киношкола.",
        descEn:
          "Poland's creative capital. Piotrkowska Street, the vast Manufaktura arts complex in 19th-century brick halls and the world-famous Film School.",
        distanceKm: "~650 км",
        travelTime: "7–9 ч",
        href: "/minsk-lodz-transfer",
        hrefRu: "/трансфер-минск-лодзь",
        isAvailable: true,
      },
      {
        cityRu: "Катовице",
        cityEn: "Katowice",
        descRu:
          "Столица Силезии. Арена «Сподек», Силезский музей в шахтных башнях и исторический квартал горняков Никишовец.",
        descEn:
          "Silesia's capital. The iconic Spodek arena, Silesian Museum in mine shaft towers and the historic miners' district Nikiszowiec.",
        distanceKm: "~700 км",
        travelTime: "8–10 ч",
        href: "/minsk-katowice-transfer",
        hrefRu: "/трансфер-минск-катовице",
        isAvailable: true,
      },
    ],
    infoTitle: "Полезная информация",
    infoRows: [
      {
        label: "Пограничный переход",
        value: "Брузги / Кузница или Берёза / Половцы (Беларусь–Польша)",
      },
      {
        label: "Время на границе",
        value: "1–8 ч в зависимости от сезона и очереди",
      },
      {
        label: "Необходимые документы",
        value: "Шенгенская виза, загранпаспорт",
      },
      { label: "Валюта", value: "Польский злотый (PLN)" },
      {
        label: "Языки",
        value:
          "Польский (официальный), английский в городах и туристических местах",
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
    ctaTitle: "Заказать трансфер в Польшу",
    ctaDesc:
      "Оставьте заявку с маршрутом и количеством пассажиров — назовём точную цену в ближайшее время.",
    ctaBtn: "Оставить заявку",
    backBtn: "← Трансферы в Европу",
    soonLabel: "Скоро",
    bookLabel: "Запросить цену",
    detailsLabel: "Подробнее",
  },
  en: {
    badge: "Poland Transfers",
    title: "Minsk — Poland",
    subtitle:
      "Warsaw and its airports — the most popular European destination from Minsk. Transfers to Chopin (WAW), Modlin, and Warsaw city centre.",
    destinationsTitle: "Destinations in Poland",
    destinations: [
      {
        cityRu: "Аэропорт Варшавы Шопен (WAW)",
        cityEn: "Warsaw Chopin Airport (WAW)",
        descRu:
          "Главный аэропорт Польши. Рейсы LOT, Ryanair, Wizz Air и десятков других авиакомпаний.",
        descEn:
          "Poland's main airport. LOT, Ryanair, Wizz Air and dozens of other airlines.",
        distanceKm: "~600 km",
        travelTime: "6–9 hrs",
        href: "/minsk-warsaw-airport",
        hrefRu: "/трансфер-минск-варшава-шопен",
        isAvailable: true,
      },
      {
        cityRu: "Аэропорт Варшавы Модлин",
        cityEn: "Warsaw Modlin Airport",
        descRu:
          "Бюджетный аэропорт в 40 км к северу от Варшавы. Рейсы Ryanair в города Европы.",
        descEn:
          "Budget airport 40 km north of Warsaw. Ryanair flights across Europe.",
        distanceKm: "~620 km",
        travelTime: "6.5–9 hrs",
        href: "/minsk-warsaw-modlin-airport",
        hrefRu: "/трансфер-минск-варшава-модлин",
        isAvailable: true,
      },
      {
        cityRu: "Гданьск",
        cityEn: "Gdańsk",
        descRu:
          "Жемчужина Балтийского побережья. Длинный рынок, кран Журав, базилика Святой Марии, мировая столица янтаря.",
        descEn:
          "Jewel of the Baltic coast. Long Market, Żuraw crane, St Mary's Basilica, world amber capital.",
        distanceKm: "~750 km",
        travelTime: "8–11 hrs",
        href: "/minsk-gdansk-transfer",
        hrefRu: "/трансфер-минск-гданьск",
        isAvailable: true,
      },
      {
        cityRu: "Вроцлав",
        cityEn: "Wrocław",
        descRu:
          "Город мостов и гномов. Рыночная площадь Rynek, остров Тумский, более 100 мостов через Одер.",
        descEn:
          "City of bridges and dwarfs. Rynek Market Square, Cathedral Island, 100+ bridges over the Oder.",
        distanceKm: "~850 km",
        travelTime: "9–12 hrs",
        href: "/minsk-wroclaw-transfer",
        hrefRu: "/трансфер-минск-вроцлав",
        isAvailable: true,
      },
      {
        cityRu: "Краков",
        cityEn: "Kraków",
        descRu:
          "Королевская столица Польши. Вавельский замок, Главная площадь, Казимеж, Величкская соляная шахта.",
        descEn:
          "Poland's royal capital. Wawel Castle, Main Market Square, Kazimierz, Wieliczka Salt Mine.",
        distanceKm: "~750 km",
        travelTime: "8–11 hrs",
        href: "/minsk-krakow-transfer",
        hrefRu: "/трансфер-минск-краков",
        isAvailable: true,
      },
      {
        cityRu: "Познань",
        cityEn: "Poznań",
        descRu:
          "Колыбель Польши. Старый рынок с ренессансной Ратушей, козлы на часах и старейший польский собор на острове Тумском.",
        descEn:
          "Cradle of Poland. Renaissance Old Market Square, the famous Town Hall billy goats and Poland's oldest cathedral.",
        distanceKm: "~700 km",
        travelTime: "7–10 hrs",
        href: "/minsk-poznan-transfer",
        hrefRu: "/трансфер-минск-познань",
        isAvailable: true,
      },
      {
        cityRu: "Лодзь",
        cityEn: "Łódź",
        descRu:
          "Польский город кино и моды. Пётрковска, арт-комплекс «Мануфактура» в кирпичных корпусах XIX века, всемирно известная киношкола.",
        descEn:
          "Poland's creative capital. Piotrkowska Street, the vast Manufaktura arts complex in 19th-century brick halls and the world-famous Film School.",
        distanceKm: "~650 km",
        travelTime: "7–9 hrs",
        href: "/minsk-lodz-transfer",
        hrefRu: "/трансфер-минск-лодзь",
        isAvailable: true,
      },
      {
        cityRu: "Катовице",
        cityEn: "Katowice",
        descRu:
          "Столица Силезии. Арена «Сподек», Силезский музей в шахтных башнях и исторический квартал горняков Никишовец.",
        descEn:
          "Silesia's capital. The iconic Spodek arena, Silesian Museum in mine shaft towers and the historic miners' district Nikiszowiec.",
        distanceKm: "~700 km",
        travelTime: "8–10 hrs",
        href: "/minsk-katowice-transfer",
        hrefRu: "/трансфер-минск-катовице",
        isAvailable: true,
      },
      {
        cityRu: "Варшава — центр города",
        cityEn: "Warsaw — city centre",
        descRu:
          "Деловые поездки, шопинг, туризм. Доставка до отеля, офиса или торгового центра.",
        descEn:
          "Business trips, shopping, tourism. Delivery to your hotel, office or shopping centre.",
        distanceKm: "~600 km",
        travelTime: "6–9 hrs",
        href: "/warsaw-transfer",
        hrefRu: "/трансфер-варшава",
        isAvailable: true,
      },
    ],
    infoTitle: "Useful information",
    infoRows: [
      {
        label: "Border crossing",
        value: "Bruzgi / Kuźnica or Byaroza / Połowce (Belarus–Poland)",
      },
      {
        label: "Border crossing time",
        value: "1–8 hrs depending on season and queues",
      },
      { label: "Documents required", value: "Schengen visa, valid passport" },
      { label: "Currency", value: "Polish złoty (PLN)" },
      {
        label: "Languages",
        value:
          "Polish (official), English widely spoken in cities and tourist areas",
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
    ctaTitle: "Book a Poland Transfer",
    ctaDesc:
      "Tell us your route and number of passengers — we'll send an exact price shortly.",
    ctaBtn: "Request a booking",
    backBtn: "← Europe transfers",
    soonLabel: "Coming soon",
    bookLabel: "Request price",
    detailsLabel: "View details",
  },
  pl: {
    badge: "Transfery z Polski",
    title: "Mińsk — Polska",
    subtitle:
      "Warszawa i jej lotniska — najpopularniejszy europejski kierunek podróży z Mińska. Transfery do Chopina (WAW), Modlina i centrum Warszawy.",
    destinationsTitle: "Miejsca docelowe w Polsce",
    destinations: [
      {
        cityRu: "Аэропорт Варшавы Шопен (WAW)",
        cityEn: "Lotnisko Chopina w Warszawie (WAW)",
        descRu:
          "Главный аэропорт Польши. Рейсы LOT, Ryanair, Wizz Air i десятков других авиакомпаний.",
        descEn:
          "Główne lotnisko w Polsce. LOT, Ryanair, Wizz Air i dziesiątki innych linii lotniczych.",
        distanceKm: "~600 km",
        travelTime: "6–9 godz",
        href: "/minsk-warsaw-airport",
        hrefRu: "/трансфер-минск-варшава-шопен",
        isAvailable: true,
      },
      {
        cityRu: "Аэропорт Варшавы Модлин",
        cityEn: "Lotnisko Warszawa Modlin",
        descRu:
          "Бюджетный аэропорт в 40 km к северу от Варшавы. Рейсы Ryanair w города Европы.",
        descEn:
          "Niedrogie lotnisko 40 km na północ od Warszawy. Loty Ryanairem po Europie.",
        distanceKm: "~620 km",
        travelTime: "6,5–9 godz",
        href: "/minsk-warsaw-modlin-airport",
        hrefRu: "/трансфер-минск-варшава-модлин",
        isAvailable: true,
      },
      {
        cityRu: "Гданьск",
        cityEn: "Gdańska",
        descRu:
          "Жемчужина Балтийского побережья. Длинный рынок, кран Журав, базилика Святой Марии, мировая столица янтаря.",
        descEn:
          "Klejnot wybrzeża Bałtyku. Długi Targ, Żuraw Żurawski, Bazylika Mariacka, światowa stolica bursztynu.",
        distanceKm: "~750 km",
        travelTime: "8–11 godz",
        href: "/minsk-gdansk-transfer",
        hrefRu: "/трансфер-минск-гданьск",
        isAvailable: true,
      },
      {
        cityRu: "Wrosław",
        cityEn: "Wrocławia",
        descRu:
          "Город мостов i гномов. Рыночная площадь Rynek, остров Тумский, более 100 мостов через Одер.",
        descEn:
          "Miasto mostów i krasnoludków. Rynek Główny, Ostrów Tumski, ponad 100 mostów na Odrze.",
        distanceKm: "~850 km",
        travelTime: "9–12 godz",
        href: "/minsk-wroclaw-transfer",
        hrefRu: "/трансфер-минск-вроцлав",
        isAvailable: true,
      },
      {
        cityRu: "Kraków",
        cityEn: "Kraków",
        descRu:
          "Королевская столица Польши. Вавельский замок, Главная площадь, Казимеж, Величкская соляная шахта.",
        descEn:
          "Królewska stolica Polski. Zamek Królewski na Wawelu, Rynek Główny, Kazimierz, Kopalnia Soli w Wieliczce.",
        distanceKm: "~750 km",
        travelTime: "8–11 godz",
        href: "/minsk-krakow-transfer",
        hrefRu: "/трансфер-минск-краков",
        isAvailable: true,
      },
      {
        cityRu: "Познань",
        cityEn: "Poznań",
        descRu:
          "Колыбель Польши. Старый рынок с ренессансной Ратушей, козлы на часах i старейший польский собор на острове Тумском.",
        descEn:
          "Kolebka Polski. Renesansowy Stary Rynek, słynne kozły ratuszowe i najstarsza katedra w Polsce.",
        distanceKm: "~700 km",
        travelTime: "7–10 godz",
        href: "/minsk-poznan-transfer",
        hrefRu: "/трансфер-минск-познань",
        isAvailable: true,
      },
      {
        cityRu: "Ładuj",
        cityEn: "Łódź",
        descRu:
          "Польский город кино и моды. Пётрковска, арт-комплекс «Мануфактура» в кирпичных корпусах XIX века, всемирно известная киношкола.",
        descEn:
          "Kreatywna stolica Polski. Piotrkowska, rozległy zespół artystyczny Manufaktury w XIX-wiecznych ceglanych halach i światowej sławy Szkoła Filmowa.",
        distanceKm: "~650 km",
        travelTime: "7–9 godz",
        href: "/minsk-lodz-transfer",
        hrefRu: "/трансфер-минск-лодзь",
        isAvailable: true,
      },
      {
        cityRu: "Katowica",
        cityEn: "Katowice",
        descRu:
          "Столица Силезии. Арена «Сподек», Силезский музей в шахтных башнях и исторический квартал горняков Никишовец.",
        descEn:
          "Stolica Śląska. Kultowy Spodek, Muzeum Śląskie w wieżach szybów kopalnianych i zabytkowa dzielnica górnicza Nikiszowiec.",
        distanceKm: "~700 km",
        travelTime: "8–10 godz",
        href: "/minsk-katowice-transfer",
        hrefRu: "/трансфер-минск-катовице",
        isAvailable: true,
      },
      {
        cityRu: "Варшава — центр города",
        cityEn: "Warszawa — centrum miasta",
        descRu:
          "Деловые поездки, шопинг, туризм. Доставка до отеля, офиса или торгового центра.",
        descEn:
          "Wyjazdy służbowe, zakupy, turystyka. Dostawa do Twojego hotelu, biura lub centrum handlowego.",
        distanceKm: "~600 km",
        travelTime: "6–9 godz",
        href: "/warsaw-transfer",
        hrefRu: "/трансфер-варшава",
        isAvailable: true,
      },
    ],
    infoTitle: "Przydatne informacje",
    infoRows: [
      {
        label: "Przejście graniczne",
        value: "Bruzgi / Kuźnica lub Byaroza / Połowce (Białoruś – Polska)",
      },
      {
        label: "Czas przekraczania granicy",
        value: "1–8 godzin w zależności od sezonu i kolejek",
      },
      { label: "Wymagane dokumenty", value: "Wiza Schengen, ważny paszport" },
      { label: "Waluta", value: "Złoty polski (PLN)" },
      {
        label: "Języki",
        value:
          "Polski (oficjalny), angielski powszechnie używany w miastach i obszarach turystycznych",
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
    ctaTitle: "Zarezerwuj transfer do Polski",
    ctaDesc:
      "Podaj nam trasę i liczbę pasażerów — wkrótce prześlemy dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    backBtn: "← Transfery w Europie",
    soonLabel: "Już wkrótce",
    bookLabel: "Zapytaj o cenę",
    detailsLabel: "Zobacz szczegóły",
  },
  fr: {
    badge: "Pologne Transferts",
    title: "Minsk — Pologne",
    subtitle:
      "Varsovie et ses aéroports — la destination européenne la plus populaire au départ de Minsk. Transferts vers Chopin (WAW), Modlin et le centre-ville de Varsovie.",
    destinationsTitle: "Destinations en Pologne",
    destinations: [
      {
        cityRu: "Aéroport de Varshaвы Шопен (WAW)",
        cityEn: "Aéroport Frédéric Chopin de Varsovie (WAW)",
        descRu:
          "Aéroport international de Pologne. Il s'agit de LOT, Ryanair, Wizz Air et de plusieurs compagnies aériennes.",
        descEn:
          "Le principal aéroport de Pologne. LOT, Ryanair, Wizz Air et des dizaines d'autres compagnies aériennes.",
        distanceKm: "~600km",
        travelTime: "6 à 9 heures",
        href: "/minsk-warsaw-airport",
        hrefRu: "/трансфер-минск-варшава-шопен",
        isAvailable: true,
      },
      {
        cityRu: "Aéroport de Varsovie Modlin",
        cityEn: "Aéroport de Varsovie Modlin",
        descRu:
          "Aéroport international situé à 40 km de Varsovie. Ryanair s'est rendu en Europe.",
        descEn:
          "Aéroport économique à 40 km au nord de Varsovie. Vols Ryanair à travers l’Europe.",
        distanceKm: "~620km",
        travelTime: "6,5 à 9 heures",
        href: "/minsk-warsaw-modlin-airport",
        hrefRu: "/трансфер-минск-варшава-модлин",
        isAvailable: true,
      },
      {
        cityRu: "Гданьск",
        cityEn: "Gdańsk",
        descRu:
          "Жемчужина Балтийского побережья. L'église Saint-Marc, le crâne de Jurav, la basilique Saint-Mari, la ville de Mirova, Antarctique.",
        descEn:
          "Joyau de la côte baltique. Long Marché, grue Żuraw, basilique Sainte-Marie, capitale mondiale de l'ambre.",
        distanceKm: "~750km",
        travelTime: "8 à 11 heures",
        href: "/minsk-gdansk-transfer",
        hrefRu: "/трансфер-минск-гданьск",
        isAvailable: true,
      },
      {
        cityRu: "Вроцлав",
        cityEn: "Wrocław",
        descRu:
          "Город мостов и гномов. Il s'agit de Rynek, qui a eu plus de 100 heures pour Одер.",
        descEn:
          "Ville de ponts et de nains. Place du marché Rynek, île de la Cathédrale, plus de 100 ponts sur l'Oder.",
        distanceKm: "~850km",
        travelTime: "9 à 12 heures",
        href: "/minsk-wroclaw-transfer",
        hrefRu: "/трансфер-минск-вроцлав",
        isAvailable: true,
      },
      {
        cityRu: "Cracovie",
        cityEn: "Cracovie",
        descRu:
          "Королевская столица Польши. Вавельский замок, Главная площадь, Казимеж, Величкская соляная шахта.",
        descEn:
          "La capitale royale de la Pologne. Château de Wawel, place du marché, Kazimierz, mine de sel de Wieliczka.",
        distanceKm: "~750km",
        travelTime: "8 à 11 heures",
        href: "/minsk-krakow-transfer",
        hrefRu: "/трансфер-минск-краков",
        isAvailable: true,
      },
      {
        cityRu: "Poser",
        cityEn: "Poznan",
        descRu:
          "Колыбель Польши. L'Observatoire principal de la Renaissance du Royaume-Uni, qui est à la recherche d'une montre et d'un hôtel de ville polonais à l'étranger.",
        descEn:
          "Berceau de la Pologne. Place du vieux marché Renaissance, les célèbres boucs de l'hôtel de ville et la plus ancienne cathédrale de Pologne.",
        distanceKm: "~700km",
        travelTime: "7 à 10 heures",
        href: "/minsk-poznan-transfer",
        hrefRu: "/трансфер-минск-познань",
        isAvailable: true,
      },
      {
        cityRu: "Lodzь",
        cityEn: "Lodz",
        descRu:
          "Le cinéma et les modes polonais. Пётрковска, арт-комплекс «Мануфактура» в кирпичных корпусах XIX века, всемирно известная киношкола.",
        descEn:
          "La capitale créative de la Pologne. La rue Piotrkowska, le vaste complexe artistique Manufaktura dans des salles en briques du XIXe siècle et la célèbre école de cinéma.",
        distanceKm: "~650km",
        travelTime: "7 à 9 heures",
        href: "/minsk-lodz-transfer",
        hrefRu: "/трансфер-минск-лодзь",
        isAvailable: true,
      },
      {
        cityRu: "Katowice",
        cityEn: "Katowice",
        descRu:
          'Столица Силезии. L\'arène "Сподек", le musée silezskiy dans les bas-fonds et la place historique de Nikitin.',
        descEn:
          "La capitale de la Silésie. L'emblématique arène Spodek, le musée de Silésie dans les tours des puits de mine et le quartier historique des mineurs Nikiszowiec.",
        distanceKm: "~700km",
        travelTime: "8 à 10 heures",
        href: "/minsk-katowice-transfer",
        hrefRu: "/трансфер-минск-катовице",
        isAvailable: true,
      },
      {
        cityRu: "Варшава — centre ville",
        cityEn: "Varsovie — centre-ville",
        descRu:
          "Деловые поездки, шопинг, туризм. Livraison vers l'hôtel, le bureau ou le centre de Torgovovo.",
        descEn:
          "Déplacements d'affaires, shopping, tourisme. Livraison à votre hôtel, bureau ou centre commercial.",
        distanceKm: "~600km",
        travelTime: "6 à 9 heures",
        href: "/warsaw-transfer",
        hrefRu: "/трансфер-варшава",
        isAvailable: true,
      },
    ],
    infoTitle: "Informations utiles",
    infoRows: [
      {
        label: "Passage de la frontière",
        value: "Bruzgi / Kuźnica ou Byaroza / Połowce (Biélorussie-Pologne)",
      },
      {
        label: "Temps de passage de la frontière",
        value: "1 à 8 heures selon la saison et les files d'attente",
      },
      { label: "Documents requis", value: "Visa Schengen, passeport valide" },
      { label: "Devise", value: "Zloty polonais (PLN)" },
      {
        label: "Langues",
        value:
          "Polonais (officiel), anglais largement parlé dans les villes et zones touristiques",
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
    ctaTitle: "Réservez un transfert en Pologne",
    ctaDesc:
      "Indiquez-nous votre itinéraire et le nombre de passagers. Nous vous enverrons un prix exact sous peu.",
    ctaBtn: "Demander une réservation",
    backBtn: "← Transferts européens",
    soonLabel: "Bientôt disponible",
    bookLabel: "Demander un prix",
    detailsLabel: "Afficher les détails",
  },
  seo: {
    titleRu: "Трансфер Минск — Польша | Варшава, WAW, Модлин | ComfortLine",
    titleEn: "Minsk to Poland Transfer | Warsaw, WAW, Modlin | ComfortLine",
    descRu:
      "Прямые трансферы из Минска в Польшу: аэропорт Шопен (WAW), аэропорт Модлин, центр Варшавы. Фиксированная цена, без пересадок.",
    descEn:
      "Direct transfers from Minsk to Poland: Warsaw Chopin (WAW), Modlin Airport, Warsaw city centre. Fixed prices, door-to-door.",
    pathRu: "/трансфер-в-польшу",
    pathEn: "/poland-transfer",
    breadcrumbRu: "Трансферы в Польшу",
    breadcrumbEn: "Poland Transfers",
  },
};

export default function PolandTransferPage() {
  return <CountryTransferPage data={data} />;
}
