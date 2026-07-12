import { CountryTransferPage, CountryPageData } from "./country-transfer-page";

const data: CountryPageData = {
  ru: {
    badge: "Трансферы в Литву",
    title: "Минск — Литва",
    subtitle:
      "Вильнюс, Каунас и другие города Литвы. Прямые трансферы без пересадок — до аэропорта, отеля или офиса.",
    destinationsTitle: "Направления в Литве",
    destinations: [
      {
        cityRu: "Вильнюс — центр города",
        cityEn: "Vilnius — city centre",
        descRu:
          "Столица Литвы. Старый город ЮНЕСКО, Кафедральная площадь, Ворота Зари, замок Гедиминаса.",
        descEn:
          "Lithuania's capital. UNESCO Old Town, Cathedral Square, Gate of Dawn, Gediminas Castle.",
        distanceKm: "~170 км",
        travelTime: "2–4 ч",
        href: "/minsk-vilnius-transfer",
        hrefRu: "/трансфер-минск-вильнюс",
        isAvailable: true,
      },
      {
        cityRu: "Аэропорт Вильнюса (VNO)",
        cityEn: "Vilnius Airport (VNO)",
        descRu:
          "Прямой трансфер к терминалу. Удобно к рейсам Ryanair, Wizz Air, LOT и другим авиакомпаниям.",
        descEn:
          "Direct transfer to the terminal. Ideal for Ryanair, Wizz Air, LOT and other airlines.",
        distanceKm: "~175 км",
        travelTime: "2.5–4 ч",
        href: "/minsk-vilnius-airport",
        hrefRu: "/трансфер-минск-вильнюс-аэропорт",
        isAvailable: true,
      },
      {
        cityRu: "Каунас — центр города",
        cityEn: "Kaunas — city centre",
        descRu:
          "Второй по величине город Литвы. Старый город, аллея Свободы, Ратуша, Каунасский замок.",
        descEn:
          "Lithuania's second largest city. Old Town, Laisvės alėja, Town Hall, Kaunas Castle.",
        distanceKm: "~220 км",
        travelTime: "3–4.5 ч",
        href: "/minsk-kaunas-transfer",
        hrefRu: "/трансфер-минск-каунас",
        isAvailable: true,
      },
      {
        cityRu: "Аэропорт Каунаса (KUN)",
        cityEn: "Kaunas Airport (KUN)",
        descRu:
          "Рейсы Ryanair в Лондон, Дублин, Берлин, Амстердам и другие города Европы.",
        descEn:
          "Ryanair flights to London, Dublin, Berlin, Amsterdam and more across Europe.",
        distanceKm: "~225 км",
        travelTime: "3–4.5 ч",
        href: "/minsk-kaunas-airport",
        hrefRu: "/трансфер-минск-каунас-аэропорт",
        isAvailable: true,
      },
      {
        cityRu: "Паланга",
        cityEn: "Palanga",
        descRu:
          "Главный курорт Литвы на Балтийском море. Янтарный музей, пирс, Бирютский парк, песчаный пляж.",
        descEn:
          "Lithuania's premier Baltic Sea resort. Amber Museum, the pier, Birutė Park, wide sandy beach.",
        distanceKm: "~390 км",
        travelTime: "5–7 ч",
        href: "/minsk-palanga-transfer",
        hrefRu: "/трансфер-минск-паланга",
        isAvailable: true,
      },
      {
        cityRu: "Тракай",
        cityEn: "Trakai",
        descRu:
          "Средневековый замок на острове, озеро Гальве, культура Kaраимов. Отличный вариант для однодневной поездки.",
        descEn:
          "Medieval island castle, Lake Galvė and the unique Karaim culture. A perfect day-trip destination.",
        distanceKm: "~170 км",
        travelTime: "2–4 ч",
        href: "/minsk-trakai-transfer",
        hrefRu: "/трансфер-минск-тракай",
        isAvailable: true,
      },
      {
        cityRu: "Клайпеда",
        cityEn: "Klaipėda",
        descRu:
          "Портовый город на Балтийском побережье. Паромы в Швецию и Германию, Куршская коса.",
        descEn:
          "Baltic port city. Ferries to Sweden and Germany, Curonian Spit UNESCO site.",
        distanceKm: "~420 км",
        travelTime: "5–7 ч",
        href: "/minsk-klaipeda-transfer",
        hrefRu: "/трансфер-минск-клайпеда",
        isAvailable: true,
      },
      {
        cityRu: "Друскининкай",
        cityEn: "Druskininkai",
        descRu:
          "Главный СПА-курорт Литвы. Минеральные воды, аквапарк, горнолыжная трасса Snow Arena.",
        descEn:
          "Lithuania's premier spa resort. Mineral springs, the Baltics' largest aqua park, ski slope.",
        distanceKm: "~220 км",
        travelTime: "3–5 ч",
        href: "/minsk-druskininkai-transfer",
        hrefRu: "/трансфер-минск-друскининкай",
        isAvailable: true,
      },
    ],
    infoTitle: "Полезная информация",
    infoRows: [
      {
        label: "Пограничный переход",
        value: "Медининкай / Шальчининкай (Беларусь–Литва)",
      },
      {
        label: "Время на границе",
        value: "30 мин – 4 ч в зависимости от очереди",
      },
      {
        label: "Необходимые документы",
        value: "Шенгенская виза, загранпаспорт",
      },
      { label: "Валюта", value: "Евро (EUR)" },
      {
        label: "Языки",
        value:
          "Литовский (официальный), русский понятен старшему поколению, английский в туристических зонах",
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
    ctaTitle: "Заказать трансфер в Литву",
    ctaDesc:
      "Оставьте заявку с маршрутом и количеством пассажиров — назовём точную цену в ближайшее время.",
    ctaBtn: "Оставить заявку",
    backBtn: "← Трансферы в Европу",
    soonLabel: "Скоро",
    bookLabel: "Запросить цену",
    detailsLabel: "Подробнее",
  },
  en: {
    badge: "Lithuania Transfers",
    title: "Minsk — Lithuania",
    subtitle:
      "Vilnius, Kaunas and more Lithuanian cities. Direct door-to-door transfers — to the airport, your hotel or office.",
    destinationsTitle: "Destinations in Lithuania",
    destinations: [
      {
        cityRu: "Вильнюс — центр города",
        cityEn: "Vilnius — city centre",
        descRu:
          "Столица Литвы. Старый город ЮНЕСКО, Кафедральная площадь, Ворота Зари, замок Гедиминаса.",
        descEn:
          "Lithuania's capital. UNESCO Old Town, Cathedral Square, Gate of Dawn, Gediminas Castle.",
        distanceKm: "~170 km",
        travelTime: "2–4 hrs",
        href: "/minsk-vilnius-transfer",
        hrefRu: "/трансфер-минск-вильнюс",
        isAvailable: true,
      },
      {
        cityRu: "Аэропорт Вильнюса (VNO)",
        cityEn: "Vilnius Airport (VNO)",
        descRu:
          "Прямой трансфер к терминалу. Удобно к рейсам Ryanair, Wizz Air, LOT и другим авиакомпаниям.",
        descEn:
          "Direct transfer to the terminal. Ideal for Ryanair, Wizz Air, LOT and other airlines.",
        distanceKm: "~175 km",
        travelTime: "2.5–4 hrs",
        href: "/minsk-vilnius-airport",
        hrefRu: "/трансфер-минск-вильнюс-аэропорт",
        isAvailable: true,
      },
      {
        cityRu: "Каунас — центр города",
        cityEn: "Kaunas — city centre",
        descRu:
          "Второй по величине город Литвы. Старый город, аллея Свободы, Ратуша, Каунасский замок.",
        descEn:
          "Lithuania's second largest city. Old Town, Laisvės alėja, Town Hall, Kaunas Castle.",
        distanceKm: "~220 km",
        travelTime: "3–4.5 hrs",
        href: "/minsk-kaunas-transfer",
        hrefRu: "/трансфер-минск-каунас",
        isAvailable: true,
      },
      {
        cityRu: "Аэропорт Каунаса (KUN)",
        cityEn: "Kaunas Airport (KUN)",
        descRu:
          "Рейсы Ryanair в Лондон, Дублин, Берлин, Амстердам и другие города Европы.",
        descEn:
          "Ryanair flights to London, Dublin, Berlin, Amsterdam and more across Europe.",
        distanceKm: "~225 km",
        travelTime: "3–4.5 hrs",
        href: "/minsk-kaunas-airport",
        hrefRu: "/трансфер-минск-каунас-аэропорт",
        isAvailable: true,
      },
      {
        cityRu: "Паланга",
        cityEn: "Palanga",
        descRu:
          "Главный курорт Литвы на Балтийском море. Янтарный музей, пирс, Бирютский парк, песчаный пляж.",
        descEn:
          "Lithuania's premier Baltic Sea resort. Amber Museum, the pier, Birutė Park, wide sandy beach.",
        distanceKm: "~390 km",
        travelTime: "5–7 hrs",
        href: "/minsk-palanga-transfer",
        hrefRu: "/трансфер-минск-паланга",
        isAvailable: true,
      },
      {
        cityRu: "Тракай",
        cityEn: "Trakai",
        descRu:
          "Средневековый замок на острове, озеро Гальве, культура Kaраимов. Отличный вариант для однодневной поездки.",
        descEn:
          "Medieval island castle, Lake Galvė and the unique Karaim culture. A perfect day-trip destination.",
        distanceKm: "~170 km",
        travelTime: "2–4 hrs",
        href: "/minsk-trakai-transfer",
        hrefRu: "/трансфер-минск-тракай",
        isAvailable: true,
      },
      {
        cityRu: "Клайпеда",
        cityEn: "Klaipėda",
        descRu:
          "Портовый город на Балтийском побережье. Паромы в Швецию и Германию, Куршская коса.",
        descEn:
          "Baltic port city. Ferries to Sweden and Germany, Curonian Spit UNESCO site.",
        distanceKm: "~420 km",
        travelTime: "5–7 hrs",
        href: "/minsk-klaipeda-transfer",
        hrefRu: "/трансфер-минск-клайпеда",
        isAvailable: true,
      },
      {
        cityRu: "Друскининкай",
        cityEn: "Druskininkai",
        descRu:
          "Главный СПА-курорт Литвы. Минеральные воды, аквапарк, горнолыжная трасса Snow Arena.",
        descEn:
          "Lithuania's premier spa resort. Mineral springs, the Baltics' largest aqua park, ski slope.",
        distanceKm: "~220 km",
        travelTime: "3–5 hrs",
        href: "/minsk-druskininkai-transfer",
        hrefRu: "/трансфер-минск-друскининкай",
        isAvailable: true,
      },
    ],
    infoTitle: "Useful information",
    infoRows: [
      {
        label: "Border crossing",
        value: "Medininkai / Šalčininkai (Belarus–Lithuania)",
      },
      {
        label: "Border crossing time",
        value: "30 min – 4 hrs depending on queues",
      },
      { label: "Documents required", value: "Schengen visa, valid passport" },
      { label: "Currency", value: "Euro (EUR)" },
      {
        label: "Languages",
        value:
          "Lithuanian (official), Russian understood by older generation, English in tourist areas",
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
    ctaTitle: "Book a Lithuania Transfer",
    ctaDesc:
      "Tell us your route and number of passengers — we'll send an exact price shortly.",
    ctaBtn: "Request a booking",
    backBtn: "← Europe transfers",
    soonLabel: "Coming soon",
    bookLabel: "Request price",
    detailsLabel: "View details",
  },
  pl: {
    badge: "Transfery Litwy",
    title: "Mińsk — Litwa",
    subtitle:
      "Wilno, Kowno i inne miasta litewskie. Bezpośrednie transfery „od drzwi do drzwi” – ​​na lotnisko, do Twojego hotelu lub biura.",
    destinationsTitle: "Miejsca docelowe na Litwie",
    destinations: [
      {
        cityRu: "Вильнюс — центр города",
        cityEn: "Wilno — centrum miasta",
        descRu:
          "Столица Литвы. Старый город ЮНЕСКО, Кафедральная площадь, Ворота Зари, замок Гедиминаса.",
        descEn:
          "Stolica Litwy. Stare Miasto UNESCO, Plac Katedralny, Ostra Brama, Zamek Giedymina.",
        distanceKm: "~170 km",
        travelTime: "2–4 godz",
        href: "/minsk-vilnius-transfer",
        hrefRu: "/трансфер-минск-вильнюс",
        isAvailable: true,
      },
      {
        cityRu: "Аэропорт Вильнюса (VNO)",
        cityEn: "Port Lotniczy Wilno (VNO)",
        descRu:
          "Прямой трансфер к терMINалу. Удобно к рейсам Ryanair, Wizz Air, LOT i другим авиакомпаниям.",
        descEn:
          "Bezpośredni transfer na terminal. Idealny dla Ryanair, Wizz Air, LOT i innych linii lotniczych.",
        distanceKm: "~175 km",
        travelTime: "2,5–4 godz",
        href: "/minsk-vilnius-airport",
        hrefRu: "/трансфер-минск-вильнюс-аэропорт",
        isAvailable: true,
      },
      {
        cityRu: "Каунас — центр города",
        cityEn: "Kowno — centrum miasta",
        descRu:
          "Второй по величине город Литвы. Старый город, аллея Свободы, Ратуша, Каунасский замок.",
        descEn:
          "Drugie co do wielkości miasto Litwy. Stare Miasto, Laisvės alėja, Ratusz, Zamek w Kownie.",
        distanceKm: "~220 km",
        travelTime: "3–4,5 godz",
        href: "/minsk-kaunas-transfer",
        hrefRu: "/трансфер-минск-каунас",
        isAvailable: true,
      },
      {
        cityRu: "Аэропорт Каунаса (KUN)",
        cityEn: "Port lotniczy Kowno (KUN)",
        descRu:
          "Рейсы Ryanair w Лондон, Дублин, Берлин, Амстердам и другие города Европы.",
        descEn:
          "Loty Ryanair do Londynu, Dublina, Berlina, Amsterdamu i nie tylko w całej Europie.",
        distanceKm: "~225 km",
        travelTime: "3–4,5 godz",
        href: "/minsk-kaunas-airport",
        hrefRu: "/трансфер-минск-каунас-аэропорт",
        isAvailable: true,
      },
      {
        cityRu: "Palanga",
        cityEn: "Połąga",
        descRu:
          "Главный курорт Литвы на Балтийском море. Янтарный музей, пирс, Бирютский парк, песчаный пляж.",
        descEn:
          "Najważniejszy kurort nad Morzem Bałtyckim na Litwie. Muzeum Bursztynu, molo, Park Birutė, szeroka piaszczysta plaża.",
        distanceKm: "~390 km",
        travelTime: "5–7 godz",
        href: "/minsk-palanga-transfer",
        hrefRu: "/трансфер-минск-паланга",
        isAvailable: true,
      },
      {
        cityRu: "Trakaz",
        cityEn: "Troki",
        descRu:
          "Средневековый замок на острове, озеро Гальве, культура Karaimov. Отличный вариант для однодневной поездки.",
        descEn:
          "Średniowieczny zamek na wyspie, jezioro Galvė i wyjątkowa kultura karaimska. Idealny cel jednodniowej wycieczki.",
        distanceKm: "~170 km",
        travelTime: "2–4 godz",
        href: "/minsk-trakai-transfer",
        hrefRu: "/трансфер-минск-тракай",
        isAvailable: true,
      },
      {
        cityRu: "Klaudia",
        cityEn: "Kłajpeda",
        descRu:
          "Портовый город на Балтийском побережье. Паромы в Швецию и Германию, Куршская коса.",
        descEn:
          "Bałtyckie miasto portowe. Promy do Szwecji i Niemiec, Mierzeja Kurońska, obiekt UNESCO.",
        distanceKm: "~420 km",
        travelTime: "5–7 godz",
        href: "/minsk-klaipeda-transfer",
        hrefRu: "/трансфер-минск-клайпеда",
        isAvailable: true,
      },
      {
        cityRu: "Друскининкай",
        cityEn: "Druskieniki",
        descRu:
          "Главный СПА-курорт Литвы. Минеральные воды, аквапарк, горнолыжная трасса Snow Arena.",
        descEn:
          "Największy kurort uzdrowiskowy na Litwie. Źródła mineralne, największy aquapark w krajach bałtyckich, stok narciarski.",
        distanceKm: "~220 km",
        travelTime: "3–5 godz",
        href: "/minsk-druskininkai-transfer",
        hrefRu: "/трансфер-минск-друскининкай",
        isAvailable: true,
      },
    ],
    infoTitle: "Przydatne informacje",
    infoRows: [
      {
        label: "Przejście graniczne",
        value: "Medininkai / Salčininkai (Białoruś – Litwa)",
      },
      {
        label: "Czas przekraczania granicy",
        value: "30 minut – 4 godziny w zależności od kolejek",
      },
      { label: "Wymagane dokumenty", value: "Wiza Schengen, ważny paszport" },
      { label: "Waluta", value: "Euro (EUR)" },
      {
        label: "Języki",
        value:
          "Litewski (urzędowy), rosyjski zrozumiały dla starszego pokolenia, angielski w obszarach turystycznych",
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
    ctaTitle: "Zarezerwuj transfer na Litwę",
    ctaDesc:
      "Podaj nam trasę i liczbę pasażerów — wkrótce prześlemy dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    backBtn: "← Transfery w Europie",
    soonLabel: "Już wkrótce",
    bookLabel: "Zapytaj o cenę",
    detailsLabel: "Zobacz szczegóły",
  },
  fr: {
    badge: "Lituanie Transferts",
    title: "Minsk — Lituanie",
    subtitle:
      "Vilnius, Kaunas et d'autres villes lituaniennes. Transferts directs de porte à porte — vers l'aéroport, votre hôtel ou votre bureau.",
    destinationsTitle: "Destinations en Lituanie",
    destinations: [
      {
        cityRu: "Вильнюс — centre ville",
        cityEn: "Vilnius — centre-ville",
        descRu:
          "Столица Литвы. L'État de New York, le café se trouve à l'intérieur, Vorota Zari, замок Гедиминаса.",
        descEn:
          "Capitale de la Lituanie. Vieille ville de l'UNESCO, place de la cathédrale, porte de l'aube, château de Gediminas.",
        distanceKm: "~170km",
        travelTime: "2 à 4 heures",
        href: "/minsk-vilnius-transfer",
        hrefRu: "/трансфер-минск-вильнюс",
        isAvailable: true,
      },
      {
        cityRu: "Aéroport de Vilnsa (VNO)",
        cityEn: "Aéroport de Vilnius (VNO)",
        descRu:
          "Прямой тtransfer к терминалу. Il s'agit notamment de Ryanair, Wizz Air, LOT et de plusieurs compagnies aériennes.",
        descEn:
          "Transfert direct au terminal. Idéal pour Ryanair, Wizz Air, LOT et autres compagnies aériennes.",
        distanceKm: "~175km",
        travelTime: "2,5 à 4 heures",
        href: "/minsk-vilnius-airport",
        hrefRu: "/трансфер-минск-вильнюс-аэропорт",
        isAvailable: true,
      },
      {
        cityRu: "Каунас — centre ville",
        cityEn: "Kaunas — centre-ville",
        descRu:
          "Второй по величине город Литвы. Старый город, аллея Свободы, Ратуша, Каунасский замок.",
        descEn:
          "La deuxième plus grande ville de Lituanie. Vieille ville, Laisvės alėja, hôtel de ville, château de Kaunas.",
        distanceKm: "~220km",
        travelTime: "3 à 4,5 heures",
        href: "/minsk-kaunas-transfer",
        hrefRu: "/трансфер-минск-каунас",
        isAvailable: true,
      },
      {
        cityRu: "Aéroport de Kaunasa (KUN)",
        cityEn: "Aéroport de Kaunas (KUN)",
        descRu:
          "Voyages Ryanair à Londres, Dublin, Berlin, Amsterdam et plusieurs grandes villes européennes.",
        descEn:
          "Vols Ryanair vers Londres, Dublin, Berlin, Amsterdam et plus encore dans toute l'Europe.",
        distanceKm: "~225km",
        travelTime: "3 à 4,5 heures",
        href: "/minsk-kaunas-airport",
        hrefRu: "/трансфер-минск-каунас-аэропорт",
        isAvailable: true,
      },
      {
        cityRu: "Palanga",
        cityEn: "Palanga",
        descRu:
          "Le tribunal de Lituanie est à Baltique plus. Янтарный музей, пирс, Бирютский парк, песчаный пляж.",
        descEn:
          "La première station balnéaire de Lituanie sur la mer Baltique. Musée de l'Ambre, jetée, parc Birutė, grande plage de sable.",
        distanceKm: "~390km",
        travelTime: "5 à 7 heures",
        href: "/minsk-palanga-transfer",
        hrefRu: "/трансфер-минск-паланга",
        isAvailable: true,
      },
      {
        cityRu: "Trakaï",
        cityEn: "Trakaï",
        descRu:
          "Il s'est rendu compte que la culture de Karaimov était celle de Galve. Variante différente pour les fonctions normales.",
        descEn:
          "Château insulaire médiéval, lac Galvė et culture unique Karaim. Une destination idéale pour une excursion d’une journée.",
        distanceKm: "~170km",
        travelTime: "2 à 4 heures",
        href: "/minsk-trakai-transfer",
        hrefRu: "/трансфер-минск-тракай",
        isAvailable: true,
      },
      {
        cityRu: "Claipeda",
        cityEn: "Klaipėda",
        descRu:
          "Le port de la Baltique se trouve à proximité. Par exemple en Suisse et en Allemagne, la Turquie est une affaire.",
        descEn:
          "Ville portuaire baltique. Ferries vers la Suède et l'Allemagne, site UNESCO de l'isthme de Courlande.",
        distanceKm: "~420km",
        travelTime: "5 à 7 heures",
        href: "/minsk-klaipeda-transfer",
        hrefRu: "/трансфер-минск-клайпеда",
        isAvailable: true,
      },
      {
        cityRu: "Друскининкай",
        cityEn: "Druskininkai",
        descRu:
          "Главный СПА-курорт Литвы. Eaux minérales, parcs aquatiques, parcours magnifique Snow Arena.",
        descEn:
          "La première station thermale de Lituanie. Sources minérales, plus grand parc aquatique des pays baltes, piste de ski.",
        distanceKm: "~220km",
        travelTime: "3 à 5 heures",
        href: "/minsk-druskininkai-transfer",
        hrefRu: "/трансфер-минск-друскининкай",
        isAvailable: true,
      },
    ],
    infoTitle: "Informations utiles",
    infoRows: [
      {
        label: "Passage de la frontière",
        value: "Medininkai / Šalčininkai (Biélorussie-Lituanie)",
      },
      {
        label: "Temps de passage de la frontière",
        value: "30 min – 4 heures selon les files d'attente",
      },
      { label: "Documents requis", value: "Visa Schengen, passeport valide" },
      { label: "Devise", value: "euros (EUR)" },
      {
        label: "Langues",
        value:
          "Lituanien (officiel), russe compris par les générations plus âgées, anglais dans les zones touristiques",
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
    ctaTitle: "Réservez un transfert en Lituanie",
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
      "Трансфер Минск — Литва | Вильнюс, Каунас, аэропорты | ComfortLine",
    titleEn:
      "Minsk to Lithuania Transfer | Vilnius, Kaunas, Airports | ComfortLine",
    descRu:
      "Прямые трансферы из Минска в Литву: Вильнюс (VNO), Каунас, аэропорт Каунаса (KUN), Клайпеда. Фиксированная цена, без пересадок.",
    descEn:
      "Direct transfers from Minsk to Lithuania: Vilnius (VNO), Kaunas, Kaunas Airport (KUN), Klaipėda. Fixed prices, no transfers.",
    pathRu: "/трансфер-в-литву",
    pathEn: "/lithuania-transfer",
    breadcrumbRu: "Трансферы в Литву",
    breadcrumbEn: "Lithuania Transfers",
  },
};

export default function LithuaniaTransferPage() {
  return <CountryTransferPage data={data} />;
}
