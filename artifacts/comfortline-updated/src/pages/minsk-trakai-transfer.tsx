import { MapPin, ShieldCheck, Castle } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Тракай",
    title: "Минск — Тракай",
    subtitle:
      "Прямой трансфер из Минска в Тракай — средневековый замок на острове, священные озёра и уникальная культура крымских евреев-караимов.",
    stats: [
      { label: "Расстояние", value: "~170 км" },
      { label: "Время в пути", value: "2–4 ч" },
      { label: "Граница", value: "Беларусь–Литва" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Тракай — достопримечательности",
    photos: [
      {
        src: "/img/trakai/island-castle.png",
        caption: "Тракайский замок — готическая крепость XIV века на острове",
      },
      {
        src: "/img/trakai/lake-galve.png",
        caption: "Озеро Гальве — визитная карточка Тракая",
      },
      {
        src: "/img/trakai/old-town.png",
        caption: "Старый город — традиционные дома общины Кaраимов",
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
        icon: Castle,
        title: "Тракай: замок и озёра",
        desc: "Довезём до центра Тракая, паромной переправы на остров или любого адреса. Возможна остановка в Вильнюсе по дороге.",
      },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      {
        label: "Маршрут",
        value: "Минск → Молодечно → Медининкай → Вильнюс → Тракай",
      },
      { label: "Расстояние", value: "~170 км" },
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
      { label: "Расстояние от Вильнюса", value: "~28 км (30 мин)" },
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
      "Возможна остановка в Вильнюсе по дороге",
      "Обратный трансфер: из Тракая в Минск",
      "Работаем 24/7, включая праздники",
      "Перевозим с детьми и питомцами",
    ],
    faqTitle: "Часто задаваемые вопросы",
    faq: [
      {
        q: "Какой маршрут до Тракая?",
        a: "Едем через Молодечно — Ошмяны — КПП Медининкай/Шальчининкай — Вильнюс — Тракай. Расстояние около 170 км, время в пути 2–4 ч без учёта границы.",
      },
      {
        q: "Нужна ли виза в Литву?",
        a: "Гражданам Беларуси требуется шенгенская виза или национальная виза Литовской Республики. Уточняйте актуальные требования в посольстве или на официальных сайтах.",
      },
      {
        q: "Можно ли заехать в Вильнюс по дороге?",
        a: "Да, Вильнюс находится всего в 28 км от Тракая. Мы можем сделать остановку — договоритесь с менеджером при бронировании, доплата по согласованию.",
      },
      {
        q: "Удобно ли ехать в Тракай на один день?",
        a: "Да, Тракай — отличный вариант для однодневного путешествия из Минска. Замок, озёра и обед с национальными кибинаями — всё можно уместить в один день.",
      },
    ],
    ctaTitle: "Заказать трансфер Минск–Тракай",
    ctaDesc:
      "Оставьте заявку — менеджер свяжется с вами в ближайшее время и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Тракай",
    backBtn: "← Трансферы в Литву",
  },
  en: {
    badge: "Trakai Transfer",
    title: "Minsk — Trakai",
    subtitle:
      "Direct private transfer from Minsk to Trakai — a medieval island castle, sacred lakes and the unique culture of the Karaim people, just 28 km from Vilnius.",
    stats: [
      { label: "Distance", value: "~170 km" },
      { label: "Travel time", value: "2–4 hrs" },
      { label: "Border", value: "Belarus–Lithuania" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Trakai — Highlights",
    photos: [
      {
        src: "/img/trakai/island-castle.png",
        caption: "Trakai Island Castle — 14th-century Gothic fortress",
      },
      {
        src: "/img/trakai/lake-galve.png",
        caption: "Lake Galvė — the iconic backdrop of Trakai",
      },
      {
        src: "/img/trakai/old-town.png",
        caption: "Old town — traditional Karaim community houses",
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
        icon: Castle,
        title: "Trakai — castle & lakes",
        desc: "We drop you at the town centre, the ferry crossing to the island, or any address. A Vilnius stopover on the way is also possible.",
      },
    ],
    infoTitle: "Route Details",
    infoRows: [
      {
        label: "Route",
        value: "Minsk → Maladzyechna → Medininkai → Vilnius → Trakai",
      },
      { label: "Distance", value: "~170 km" },
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
      { label: "Distance from Vilnius", value: "~28 km (30 min)" },
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
      "Optional Vilnius stopover on the way",
      "Return transfer Trakai → Minsk also available",
      "Available 24/7 including public holidays",
      "Kids and pets welcome",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "What is the route to Trakai?",
        a: "We go via Maladzyechna – Ashmyany – Medininkai/Šalčininkai border crossing – Vilnius – Trakai. Total distance is about 170 km, travel time 2–4 hours excluding the border stop.",
      },
      {
        q: "Do I need a visa to enter Lithuania?",
        a: "Citizens of Belarus require a Schengen visa or a Lithuanian national visa. Please check the latest requirements with the embassy or official sources before travelling.",
      },
      {
        q: "Can we stop in Vilnius on the way?",
        a: "Yes — Vilnius is only 28 km from Trakai. We can easily add a Vilnius stop; just let the manager know when booking. An additional charge may apply.",
      },
      {
        q: "Is Trakai good for a day trip from Minsk?",
        a: "Absolutely — the castle, lakes and a lunch of traditional Karaim kibinai can all fit into one day. We can arrange pickup for the return journey at any time.",
      },
    ],
    ctaTitle: "Book Minsk–Trakai Transfer",
    ctaDesc:
      "Submit a request and our manager will contact you shortly with an exact price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Trakai",
    backBtn: "← Lithuania transfers",
  },
  pl: {
    badge: "Transfer w Trokach",
    title: "Mińsk — Troki",
    subtitle:
      "Bezpośredni prywatny transfer z Mińska do Trok – średniowieczny zamek na wyspie, święte jeziora i wyjątkowa kultura narodu karaimskiego, zaledwie 28 km od Wilna.",
    stats: [
      { label: "Odległość", value: "~170 km" },
      { label: "Czas podróży", value: "2–4 godz" },
      { label: "Granica", value: "Białoruś – Litwa" },
      { label: "Klasa pojazdu", value: "Biznes / Minivan" },
    ],
    photosTitle: "Troki — najważniejsze wydarzenia",
    photos: [
      {
        src: "/img/trakai/island-castle.png",
        caption: "Zamek na wyspie w Trokach — gotycka twierdza z XIV wieku",
      },
      {
        src: "/img/trakai/lake-galve.png",
        caption: "Jezioro Galvė – kultowe tło Trok",
      },
      {
        src: "/img/trakai/old-town.png",
        caption: "Stare Miasto — tradycyjne domy wspólnoty karaimskiej",
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
        icon: Castle,
        title: "Troki — zamek i jeziora",
        desc: "Podwieziemy Cię do centrum miasta, na przeprawę promową na wyspę lub pod dowolny adres. Możliwy jest także przystanek w Wilnie po drodze.",
      },
    ],
    infoTitle: "Szczegóły trasy",
    infoRows: [
      {
        label: "Trasa",
        value: "Mińsk → Mołodeczna → Medininkai → Wilno → Troki",
      },
      { label: "Odległość", value: "~170 km" },
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
      { label: "Odległość od Wilna", value: "~28 km (30 min)" },
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
      "Opcjonalny przystanek w Wilnie po drodze",
      "Dostępny jest również transfer powrotny Troki → Mińsk",
      "Dostępność 24 godziny na dobę, 7 dni w tygodniu, także w święta",
      "Dzieci i zwierzęta mile widziane",
    ],
    faqTitle: "Często zadawane pytania",
    faq: [
      {
        q: "Jaka jest trasa do Trok?",
        a: "Jedziemy przez Mołodechnę – Oszmiany – Medininkai/Salčininkai przejście graniczne – Wilno – Troki. Całkowita odległość wynosi około 170 km, czas przejazdu 2–4 godziny bez przystanku granicznego.",
      },
      {
        q: "Czy potrzebuję wizy, aby wjechać na Litwę?",
        a: "Obywatele Białorusi potrzebują wizy Schengen lub litewskiej wizy krajowej. Przed podróżą sprawdź najnowsze wymagania w ambasadzie lub w oficjalnych źródłach.",
      },
      {
        q: "Czy możemy po drodze zatrzymać się w Wilnie?",
        a: "Tak — Wilno jest oddalone od Trok o zaledwie 28 km. Bez problemu możemy dodać przystanek Wilno; po prostu daj znać menadżerowi podczas rezerwacji. Może obowiązywać dodatkowa opłata.",
      },
      {
        q: "Czy Troki to dobry wybór na jednodniową wycieczkę z Mińska?",
        a: "Zdecydowanie – zamek, jeziora i lunch w postaci tradycyjnych karaimskich kibinów to wszystko zmieści się w jeden dzień. W każdej chwili możemy zorganizować odbiór w podróż powrotną.",
      },
    ],
    ctaTitle: "Zarezerwuj transfer Mińsk – Troki",
    ctaDesc:
      "Prześlij zapytanie, a nasz menedżer wkrótce skontaktuje się z Tobą i poda dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Troki",
    backBtn: "← Litwa transfery",
  },
  fr: {
    badge: "Transfert Trakai",
    title: "Minsk — Trakaï",
    subtitle:
      "Transfert privé direct de Minsk à Trakai - un château insulaire médiéval, des lacs sacrés et la culture unique du peuple Karaim, à seulement 28 km de Vilnius.",
    stats: [
      { label: "Distance", value: "~170km" },
      { label: "Temps de trajet", value: "2 à 4 heures" },
      { label: "Frontière", value: "Biélorussie-Lituanie" },
      { label: "Classe de véhicule", value: "Affaires / Minifourgonnette" },
    ],
    photosTitle: "Trakai — Points forts",
    photos: [
      {
        src: "/img/trakai/island-castle.png",
        caption:
          "Château de l'île de Trakai – forteresse gothique du XIVe siècle",
      },
      {
        src: "/img/trakai/lake-galve.png",
        caption: "Lac Galvė - la toile de fond emblématique de Trakai",
      },
      {
        src: "/img/trakai/old-town.png",
        caption:
          "Vieille ville – maisons communautaires traditionnelles Karaim",
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
        icon: Castle,
        title: "Trakai — château et lacs",
        desc: "Nous vous déposons au centre-ville, à la traversée en ferry vers l'île ou à n'importe quelle adresse. Une escale à Vilnius en chemin est également possible.",
      },
    ],
    infoTitle: "Détails de l'itinéraire",
    infoRows: [
      {
        label: "Itinéraire",
        value: "Minsk → Maladetchna → Medininkai → Vilnius → Trakai",
      },
      { label: "Distance", value: "~170km" },
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
      { label: "Distance de Vilnius", value: "~28 km (30 min)" },
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
      "Escale facultative à Vilnius en cours de route",
      "Transfert aller-retour Trakai → Minsk également disponible",
      "Disponible 24h/24 et 7j/7 y compris les jours fériés",
      "Enfants et animaux bienvenus",
    ],
    faqTitle: "Questions fréquemment posées",
    faq: [
      {
        q: "Quel est l'itinéraire vers Trakai?",
        a: "Nous passons par Maladzyechna – Ashmyany – Poste frontière Medininkai/Šalčininkai – Vilnius – Trakai. La distance totale est d'environ 170 km, temps de trajet de 2 à 4 heures sans compter l'arrêt frontalier.",
      },
      {
        q: "Ai-je besoin d’un visa pour entrer en Lituanie ?",
        a: "Les citoyens biélorusses ont besoin d'un visa Schengen ou d'un visa national lituanien. Veuillez vérifier les dernières exigences auprès de l'ambassade ou des sources officielles avant de voyager.",
      },
      {
        q: "Pouvons-nous nous arrêter à Vilnius en chemin ?",
        a: "Oui, Vilnius est à seulement 28 km de Trakai. Nous pouvons facilement ajouter un arrêt à Vilnius ; il suffit d'en informer le responsable lors de la réservation. Des frais supplémentaires peuvent s'appliquer.",
      },
      {
        q: "Trakai est-il idéal pour une excursion d’une journée au départ de Minsk ?",
        a: "Absolument : le château, les lacs et un déjeuner de Karaim kibinai traditionnel peuvent tous tenir dans une journée. Nous pouvons organiser la prise en charge pour le voyage de retour à tout moment.",
      },
    ],
    ctaTitle: "Réserver un transfert Minsk-Trakai",
    ctaDesc:
      "Soumettez une demande et notre responsable vous contactera sous peu avec un prix exact.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Trakaï",
    backBtn: "← Transferts Lituanie",
  },
  seo: {
    titleRu: "Трансфер Минск — Тракай | Замок на острове | ComfortLine",
    titleEn: "Minsk to Trakai Transfer | Island Castle Day Trip | ComfortLine",
    descRu:
      "Прямой трансфер из Минска в Тракай. ~170 км, 2–4 ч. Средневековый замок на острове, озеро Гальве, культура Kaраимов. Фиксированная цена, граница Беларусь–Литва.",
    descEn:
      "Direct transfer from Minsk to Trakai. ~170 km, 2–4 hrs. Medieval island castle, Lake Galvė, Karaim culture. Fixed price, Belarus–Lithuania border crossing.",
    pathRu: "/трансфер-минск-тракай",
    pathEn: "/minsk-trakai-transfer",
    breadcrumbRu: "Трансфер Минск–Тракай",
    breadcrumbEn: "Minsk — Trakai",
    fromName: "Минск",
    toName: "Тракай",
  },
};

export default function MinskTrakaiTransferPage() {
  return <RouteLandingPage data={data} />;
}
