import { MapPin, ShieldCheck, Waves } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Палангу",
    title: "Минск — Паланга",
    subtitle:
      "Прямой трансфер из Минска в Палангу — курортный город на берегу Балтийского моря. Янтарный музей, знаменитый пирс, сосновый парк и широкий пляж.",
    stats: [
      { label: "Расстояние", value: "~390 км" },
      { label: "Время в пути", value: "5–7 ч" },
      { label: "Граница", value: "Беларусь–Литва" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Паланга — достопримечательности",
    photos: [
      {
        src: "/img/palanga/pier.png",
        caption: "Палангский пирс на Балтийском море",
      },
      {
        src: "/img/palanga/amber-museum.png",
        caption: "Янтарный музей (дворец Тышкевичей)",
      },
      {
        src: "/img/palanga/beach.png",
        caption: "Пляж Паланги — широкая песчаная полоса",
      },
    ],
    howTitle: "Как проходит поездка",
    steps: [
      {
        icon: MapPin,
        title: "Выезд из Минска",
        desc: "Водитель заберёт вас в указанном месте в Минске и выдвинется к литовской границе по оптимальному маршруту.",
      },
      {
        icon: ShieldCheck,
        title: "Граница Беларусь–Литва",
        desc: "Переход Медининкай / Шальчининкай. Водитель знает актуальные очереди и помогает на КПП.",
      },
      {
        icon: Waves,
        title: "Паланга: море и курорт",
        desc: "Довезём до отеля, пирса, аэропорта PLQ или любого адреса в Паланге и окрестностях.",
      },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      {
        label: "Маршрут",
        value: "Минск → Молодечно → Медининкай → Вильнюс → Каунас → Паланга",
      },
      { label: "Расстояние", value: "~390 км" },
      {
        label: "Пограничный переход",
        value: "Медининкай / Шальчининкай (Беларусь–Литва)",
      },
      {
        label: "Время пересечения границы",
        value: "30 мин – 4 ч в зависимости от очереди",
      },
      {
        label: "Необходимые документы",
        value: "Виза Шенген (для граждан не ЕС), загранпаспорт",
      },
      { label: "Аэропорт Паланги", value: "PLQ — сезонные рейсы Ryanair" },
    ],
    includedTitle: "Что включено",
    included: [
      "Подача от адреса в Минске",
      "Прямой маршрут без пересадок",
      "Помощь водителя на границе",
      "Питьевая вода и комфортный салон",
      "Детские кресла по запросу",
      "Фиксированная цена без счётчика",
    ],
    whyTitle: "Почему ComfortLine",
    whyItems: [
      "Опытные водители маршрута Минск–Литва",
      "Знание актуальных очередей на границе",
      "Возможна остановка в Вильнюсе или Каунасе",
      "Обратный трансфер: из Паланги в Минск",
      "Работаем 24/7, включая праздники",
      "Перевозим с детьми и питомцами",
    ],
    faqTitle: "Часто задаваемые вопросы",
    faq: [
      {
        q: "Какой маршрут до Паланги?",
        a: "Едем через Молодечно — Ошмяны — КПП Медининкай/Шальчининкай — Вильнюс — Каунас — Паланга. Расстояние около 390 км, время в пути 5–7 ч без учёта границы.",
      },
      {
        q: "Нужна ли виза в Литву?",
        a: "Гражданам Беларуси требуется шенгенская виза или национальная виза Литовской Республики. Уточняйте актуальные требования в посольстве или на официальных сайтах.",
      },
      {
        q: "Можно ли заехать в Вильнюс или Каунас по дороге?",
        a: "Да, мы можем сделать остановку — договоритесь с менеджером при бронировании, доплата по согласованию.",
      },
      {
        q: "Работаете ли вы в курортный сезон?",
        a: "Да, мы работаем круглосуточно и весь год. В летний сезон (июнь–август) рекомендуем бронировать заранее.",
      },
    ],
    ctaTitle: "Заказать трансфер Минск–Паланга",
    ctaDesc:
      "Оставьте заявку — менеджер свяжется с вами в ближайшее время и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Паланга",
    backBtn: "← Трансферы в Литву",
  },
  en: {
    badge: "Palanga Transfer",
    title: "Minsk — Palanga",
    subtitle:
      "Direct private transfer from Minsk to Palanga — Lithuania's premier Baltic Sea resort. Amber Museum, the famous pier, Birutė Park and a wide sandy beach await.",
    stats: [
      { label: "Distance", value: "~390 km" },
      { label: "Travel time", value: "5–7 hrs" },
      { label: "Border", value: "Belarus–Lithuania" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Palanga — Highlights",
    photos: [
      {
        src: "/img/palanga/pier.png",
        caption: "Palanga Pier on the Baltic Sea",
      },
      {
        src: "/img/palanga/amber-museum.png",
        caption: "Amber Museum (Tyszkiewicz Palace)",
      },
      {
        src: "/img/palanga/beach.png",
        caption: "Palanga beach — wide sandy shore",
      },
    ],
    howTitle: "How the transfer works",
    steps: [
      {
        icon: MapPin,
        title: "Departure from Minsk",
        desc: "Your driver picks you up at your Minsk address and heads for the Lithuanian border via the fastest route.",
      },
      {
        icon: ShieldCheck,
        title: "Belarus–Lithuania border",
        desc: "Medininkai / Šalčininkai crossing. Your driver knows current queue conditions and assists at the checkpoint.",
      },
      {
        icon: Waves,
        title: "Palanga — sea & resort",
        desc: "We drop you at your hotel, the pier, Palanga Airport (PLQ) or any address in and around Palanga.",
      },
    ],
    infoTitle: "Route Details",
    infoRows: [
      {
        label: "Route",
        value: "Minsk → Maladzyechna → Medininkai → Vilnius → Kaunas → Palanga",
      },
      { label: "Distance", value: "~390 km" },
      {
        label: "Border crossing",
        value: "Medininkai / Šalčininkai (Belarus–Lithuania)",
      },
      {
        label: "Border crossing time",
        value: "30 min – 4 hrs depending on queues",
      },
      {
        label: "Documents required",
        value: "Schengen visa (non-EU citizens), valid passport",
      },
      { label: "Palanga Airport", value: "PLQ — seasonal Ryanair flights" },
    ],
    includedTitle: "What's included",
    included: [
      "Pickup from your Minsk address",
      "Direct route — no transfers",
      "Driver assistance at the border",
      "Bottled water and comfortable cabin",
      "Child seats on request",
      "Fixed price — no meter, no surprises",
    ],
    whyTitle: "Why ComfortLine",
    whyItems: [
      "Experienced drivers on the Minsk–Lithuania route",
      "Up-to-date knowledge of border queue conditions",
      "Optional stop in Vilnius or Kaunas en route",
      "Return transfer Palanga → Minsk also available",
      "Available 24/7 including public holidays",
      "Kids and pets welcome",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "What is the route to Palanga?",
        a: "We go via Maladzyechna – Ashmyany – Medininkai/Šalčininkai border crossing – Vilnius – Kaunas – Palanga. Total distance is about 390 km, travel time 5–7 hours excluding the border stop.",
      },
      {
        q: "Do I need a visa to enter Lithuania?",
        a: "Citizens of Belarus require a Schengen visa or a Lithuanian national visa. Please check the latest requirements with the embassy or official sources before travelling.",
      },
      {
        q: "Can we stop in Vilnius or Kaunas on the way?",
        a: "Yes — we can make a stop. Just let the manager know when booking; an additional charge may apply.",
      },
      {
        q: "Do you operate in the summer season?",
        a: "Yes, we run 24/7 all year round. In peak summer (June–August) we recommend booking in advance.",
      },
    ],
    ctaTitle: "Book Minsk–Palanga Transfer",
    ctaDesc:
      "Submit a request and our manager will contact you shortly with an exact price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Palanga",
    backBtn: "← Lithuania transfers",
  },
  pl: {
    badge: "Transfer do Połągi",
    title: "Mińsk — Połąga",
    subtitle:
      "Bezpośredni prywatny transfer z Mińska do Połągi – najważniejszego litewskiego kurortu nad Morzem Bałtyckim. Czekają na Was Muzeum Bursztynu, słynne molo, Park Birutė i szeroka piaszczysta plaża.",
    stats: [
      { label: "Odległość", value: "~390 km" },
      { label: "Czas podróży", value: "5–7 godz" },
      { label: "Granica", value: "Białoruś – Litwa" },
      { label: "Klasa pojazdu", value: "Biznes / Minivan" },
    ],
    photosTitle: "Połąga — najważniejsze wydarzenia",
    photos: [
      {
        src: "/img/palanga/pier.png",
        caption: "Molo w Połądze na Morzu Bałtyckim",
      },
      {
        src: "/img/palanga/amber-museum.png",
        caption: "Muzeum Bursztynu (Pałac Tyszkiewiczów)",
      },
      {
        src: "/img/palanga/beach.png",
        caption: "Plaża w Połądze — szeroki piaszczysty brzeg",
      },
    ],
    howTitle: "Jak działa transfer",
    steps: [
      {
        icon: MapPin,
        title: "Wyjazd z Mińska",
        desc: "Twój kierowca odbierze Cię pod Twoim adresem w Mińsku i najszybszą trasą uda się do granicy z Litwą.",
      },
      {
        icon: ShieldCheck,
        title: "Granica białorusko-litewska",
        desc: "Przejście Medininkai/Salčininkai. Twój kierowca zna aktualny stan kolejek i pomaga na punkcie kontrolnym.",
      },
      {
        icon: Waves,
        title: "Połąga — morze i kurort",
        desc: "Podwieziemy Cię do hotelu, na molo, na lotnisko w Połądze (PLQ) lub pod dowolny adres w Połądze i okolicach.",
      },
    ],
    infoTitle: "Szczegóły trasy",
    infoRows: [
      {
        label: "Trasa",
        value: "Mińsk → Mołodeczna → Medininkai → Wilno → Kowno → Połąga",
      },
      { label: "Odległość", value: "~390 km" },
      {
        label: "Przejście graniczne",
        value: "Medininkai / Salčininkai (Białoruś – Litwa)",
      },
      {
        label: "Czas przekraczania granicy",
        value: "30 minut – 4 godziny w zależności od kolejek",
      },
      {
        label: "Wymagane dokumenty",
        value: "Wiza Schengen (obywatele spoza UE), ważny paszport",
      },
      { label: "Lotnisko w Połądze", value: "PLQ – sezonowe loty Ryanair" },
    ],
    includedTitle: "Co jest wliczone w cenę",
    included: [
      "Odbiór z Twojego adresu w Mińsku",
      "Trasa bezpośrednia – bez przesiadek",
      "Pomoc kierowcy na granicy",
      "Woda butelkowana i wygodna kabina",
      "Foteliki dziecięce na zamówienie",
      "Stała cena — bez licznika, bez niespodzianek",
    ],
    whyTitle: "Dlaczego ComfortLine",
    whyItems: [
      "Doświadczeni kierowcy na trasie Mińsk – Litwa",
      "Aktualna wiedza o warunkach kolejek granicznych",
      "Opcjonalny postój w Wilnie lub Kownie na trasie",
      "Dostępny jest również transfer powrotny Połąga → Mińsk",
      "Dostępność 24 godziny na dobę, 7 dni w tygodniu, także w święta",
      "Dzieci i zwierzęta mile widziane",
    ],
    faqTitle: "Często zadawane pytania",
    faq: [
      {
        q: "Jaka jest trasa do Połągi?",
        a: "Jedziemy przez Mołodechnę – Oszmiany – Medininkai/Salčininkai przejście graniczne – Wilno – Kowno – Połąga. Całkowita odległość wynosi około 390 km, czas przejazdu 5–7 godzin bez przystanku granicznego.",
      },
      {
        q: "Czy potrzebuję wizy, aby wjechać na Litwę?",
        a: "Obywatele Białorusi potrzebują wizy Schengen lub litewskiej wizy krajowej. Przed podróżą sprawdź najnowsze wymagania w ambasadzie lub w oficjalnych źródłach.",
      },
      {
        q: "Czy możemy po drodze zatrzymać się w Wilnie lub Kownie?",
        a: "Tak – możemy się zatrzymać. Po prostu daj znać menadżerowi podczas dokonywania rezerwacji; może obowiązywać dodatkowa opłata.",
      },
      {
        q: "Czy działacie w sezonie letnim?",
        a: "Tak, działamy 24 godziny na dobę, 7 dni w tygodniu, przez cały rok. W szczycie lata (czerwiec-sierpień) zalecamy wcześniejszą rezerwację.",
      },
    ],
    ctaTitle: "Zarezerwuj transfer Mińsk – Połąga",
    ctaDesc:
      "Prześlij zapytanie, a nasz menedżer wkrótce skontaktuje się z Tobą i poda dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Połąga",
    backBtn: "← Litwa transfery",
  },
  fr: {
    badge: "Transfert Palanga",
    title: "Minsk — Palanga",
    subtitle:
      "Transfert privé direct de Minsk à Palanga, la première station balnéaire de Lituanie sur la mer Baltique. Le musée de l'ambre, la célèbre jetée, le parc Birutė et une large plage de sable vous attendent.",
    stats: [
      { label: "Distance", value: "~390km" },
      { label: "Temps de trajet", value: "5 à 7 heures" },
      { label: "Frontière", value: "Biélorussie-Lituanie" },
      { label: "Classe de véhicule", value: "Affaires / Minifourgonnette" },
    ],
    photosTitle: "Palanga — Points forts",
    photos: [
      {
        src: "/img/palanga/pier.png",
        caption: "Jetée de Palanga sur la mer Baltique",
      },
      {
        src: "/img/palanga/amber-museum.png",
        caption: "Musée de l'Ambre (Palais Tyszkiewicz)",
      },
      {
        src: "/img/palanga/beach.png",
        caption: "Plage de Palanga – large rive sablonneuse",
      },
    ],
    howTitle: "Comment fonctionne le transfert",
    steps: [
      {
        icon: MapPin,
        title: "Départ de Minsk",
        desc: "Votre chauffeur vient vous chercher à votre adresse à Minsk et se dirige vers la frontière lituanienne par l'itinéraire le plus rapide.",
      },
      {
        icon: ShieldCheck,
        title: "Frontière Biélorussie-Lituanie",
        desc: "Traversée Medininkai / Šalčininkai. Votre chauffeur connaît les conditions actuelles de la file d'attente et vous assiste au point de contrôle.",
      },
      {
        icon: Waves,
        title: "Palanga — mer et station balnéaire",
        desc: "Nous vous déposons à votre hôtel, à l'embarcadère, à l'aéroport de Palanga (PLQ) ou à toute adresse dans et autour de Palanga.",
      },
    ],
    infoTitle: "Détails de l'itinéraire",
    infoRows: [
      {
        label: "Itinéraire",
        value: "Minsk → Maladetchna → Medininkai → Vilnius → Kaunas → Palanga",
      },
      { label: "Distance", value: "~390km" },
      {
        label: "Passage de la frontière",
        value: "Medininkai / Šalčininkai (Biélorussie-Lituanie)",
      },
      {
        label: "Temps de passage de la frontière",
        value: "30 min – 4 heures selon les files d'attente",
      },
      {
        label: "Documents requis",
        value: "Visa Schengen (citoyens non-UE), passeport valide",
      },
      { label: "Aéroport de Palanga", value: "PLQ — vols saisonniers Ryanair" },
    ],
    includedTitle: "Ce qui est inclus",
    included: [
      "Prise en charge à votre adresse à Minsk",
      "Itinéraire direct — pas de transfert",
      "Assistance au conducteur à la frontière",
      "Eau en bouteille et cabine confortable",
      "Sièges enfants sur demande",
      "Prix fixe — pas de compteur, pas de surprise",
    ],
    whyTitle: "Pourquoi ComfortLine",
    whyItems: [
      "Chauffeurs expérimentés sur la route Minsk-Lituanie",
      "Connaissance à jour des conditions de file d'attente aux frontières",
      "Arrêt facultatif à Vilnius ou Kaunas en route",
      "Transfert aller-retour Palanga → Minsk également disponible",
      "Disponible 24h/24 et 7j/7 y compris les jours fériés",
      "Enfants et animaux bienvenus",
    ],
    faqTitle: "Questions fréquemment posées",
    faq: [
      {
        q: "Quel est l'itinéraire vers Palanga?",
        a: "Nous passons par Maladzyechna – Ashmyany – Poste frontière Medininkai/Šalčininkai – Vilnius – Kaunas – Palanga. La distance totale est d'environ 390 km, temps de trajet de 5 à 7 heures sans compter l'arrêt frontalier.",
      },
      {
        q: "Ai-je besoin d’un visa pour entrer en Lituanie ?",
        a: "Les citoyens biélorusses ont besoin d'un visa Schengen ou d'un visa national lituanien. Veuillez vérifier les dernières exigences auprès de l'ambassade ou des sources officielles avant de voyager.",
      },
      {
        q: "Pouvons-nous nous arrêter à Vilnius ou à Kaunas en chemin ?",
        a: "Oui, nous pouvons nous arrêter. Il suffit d'en informer le responsable lors de la réservation ; des frais supplémentaires peuvent s'appliquer.",
      },
      {
        q: "Opérez-vous pendant la saison estivale?",
        a: "Oui, nous fonctionnons 24h/24 et 7j/7 toute l'année. En haute saison (juin-août), nous vous recommandons de réserver à l'avance.",
      },
    ],
    ctaTitle: "Réserver un transfert Minsk-Palanga",
    ctaDesc:
      "Soumettez une demande et notre responsable vous contactera sous peu avec un prix exact.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Palanga",
    backBtn: "← Transferts Lituanie",
  },
  seo: {
    titleRu:
      "Трансфер Минск — Паланга | Прямая поездка на Балтику | ComfortLine",
    titleEn:
      "Minsk to Palanga Transfer | Direct Ride to the Baltic | ComfortLine",
    descRu:
      "Прямой трансфер из Минска в Палангу. ~390 км, 5–7 ч. Балтийское море, янтарный музей, пирс. Фиксированная цена, опытный водитель, граница Беларусь–Литва.",
    descEn:
      "Direct transfer from Minsk to Palanga. ~390 km, 5–7 hrs. Baltic Sea, Amber Museum, pier. Fixed price, professional driver, Belarus–Lithuania border crossing.",
    pathRu: "/трансфер-минск-паланга",
    pathEn: "/minsk-palanga-transfer",
    breadcrumbRu: "Трансфер Минск–Паланга",
    breadcrumbEn: "Minsk — Palanga",
    fromName: "Минск",
    toName: "Паланга",
  },
};

export default function MinskPalangaTransferPage() {
  return <RouteLandingPage data={data} />;
}
