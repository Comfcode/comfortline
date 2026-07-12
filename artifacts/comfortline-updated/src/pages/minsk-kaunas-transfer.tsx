import { MapPin, ShieldCheck, Building2 } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Каунас",
    title: "Минск — Каунас",
    subtitle:
      "Прямой трансфер из Минска в Каунас — второй по величине город Литвы. Исторический центр, аэропорт KUN или любой адрес без пересадок и задержек.",
    stats: [
      { label: "Расстояние", value: "~220 км" },
      { label: "Время в пути", value: "3–4.5 ч" },
      { label: "Граница", value: "Беларусь–Литва" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Каунас — достопримечательности",
    photos: [
      {
        src: "/img/kaunas/town-hall.png",
        caption: "Каунасская ратуша («Белый лебедь»)",
      },
      { src: "/img/kaunas/old-town.png", caption: "Старый город Каунаса" },
      {
        src: "/img/kaunas/laisves-aleja.png",
        caption: "Аллея свободы (Laisvės alėja)",
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
        icon: Building2,
        title: "Каунас: любой адрес",
        desc: "Старый город, аллея Свободы, аэропорт KUN, отель или бизнес-центр — доставим точно по назначению.",
      },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      {
        label: "Маршрут",
        value: "Минск → Молодечно → Медининкай → Вильнюс → Каунас",
      },
      { label: "Расстояние", value: "~220 км" },
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
      {
        label: "Аэропорт Каунаса",
        value: "KUN — рейсы Ryanair в Лондон, Дублин, Берлин и др.",
      },
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
      "Возможна остановка в Вильнюсе по пути",
      "Обратный трансфер: из Каунаса в Минск",
      "Работаем 24/7, включая праздники",
      "Перевозим с детьми и питомцами",
    ],
    faqTitle: "Часто задаваемые вопросы",
    faq: [
      {
        q: "Какой маршрут до Каунаса?",
        a: "Обычно едем через Молодечно — Ошмяны — КПП Медининкай/Шальчининкай — Вильнюс — Каунас. Расстояние около 220 км, время в пути 3–4.5 ч без учёта границы.",
      },
      {
        q: "Нужна ли виза в Литву?",
        a: "Граждане Беларуси и России нуждаются в шенгенской визе или визе Литовской Республики. Пожалуйста, уточняйте актуальные требования в посольстве или на официальных сайтах.",
      },
      {
        q: "Можно ли заехать в Вильнюс по дороге?",
        a: "Да, мы можем сделать остановку в Вильнюсе — договоритесь с менеджером при бронировании, доплата по согласованию.",
      },
      {
        q: "Можно ли уехать ночью или рано утром?",
        a: "Да, мы работаем круглосуточно. Сообщите желаемое время вылета — рассчитаем оптимальное время подачи автомобиля.",
      },
    ],
    ctaTitle: "Заказать трансфер Минск–Каунас",
    ctaDesc:
      "Оставьте заявку — менеджер свяжется с вами в ближайшее время и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Каунас",
    backBtn: "← Трансферы в Литву",
  },
  en: {
    badge: "Kaunas Transfer",
    title: "Minsk — Kaunas",
    subtitle:
      "Direct private transfer from Minsk to Kaunas — Lithuania's second largest city. Historical Old Town, KUN airport or any address, without changes or delays.",
    stats: [
      { label: "Distance", value: "~220 km" },
      { label: "Travel time", value: "3–4.5 hrs" },
      { label: "Border", value: "Belarus–Lithuania" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Kaunas — Highlights",
    photos: [
      {
        src: "/img/kaunas/town-hall.png",
        caption: 'Kaunas Town Hall ("White Swan")',
      },
      { src: "/img/kaunas/old-town.png", caption: "Kaunas Old Town" },
      {
        src: "/img/kaunas/laisves-aleja.png",
        caption: "Laisvės alėja (Freedom Avenue)",
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
        icon: Building2,
        title: "Kaunas — any address",
        desc: "Old Town, Laisvės alėja, KUN airport, your hotel or business centre — wherever you need to be.",
      },
    ],
    infoTitle: "Route Details",
    infoRows: [
      {
        label: "Route",
        value: "Minsk → Maladzyechna → Medininkai → Vilnius → Kaunas",
      },
      { label: "Distance", value: "~220 km" },
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
      {
        label: "Kaunas Airport",
        value: "KUN — Ryanair flights to London, Dublin, Berlin and more",
      },
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
      "Optional stop in Vilnius en route",
      "Return transfer Kaunas → Minsk also available",
      "Available 24/7 including public holidays",
      "Kids and pets welcome",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "What is the route to Kaunas?",
        a: "We typically go via Maladzyechna – Ashmyany – Medininkai/Šalčininkai border crossing – Vilnius – Kaunas. Total distance is about 220 km, travel time 3–4.5 hours excluding the border stop.",
      },
      {
        q: "Do I need a visa to enter Lithuania?",
        a: "Citizens of Belarus and Russia require a Schengen visa or a Lithuanian national visa. Please check the latest requirements with the embassy or official sources before travelling.",
      },
      {
        q: "Can we stop in Vilnius on the way?",
        a: "Yes — we can make a stop in Vilnius. Just let the manager know when booking; an additional charge may apply.",
      },
      {
        q: "Can I travel at night or very early morning?",
        a: "Yes, we operate 24/7. Just tell us your preferred departure time and we'll calculate the optimal pickup time.",
      },
    ],
    ctaTitle: "Book Minsk–Kaunas Transfer",
    ctaDesc:
      "Submit a request and our manager will contact you shortly with an exact price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Kaunas",
    backBtn: "← Lithuania transfers",
  },
  pl: {
    badge: "Transfer z Kowna",
    title: "Mińsk — Kowno",
    subtitle:
      "Bezpośredni prywatny transfer z Mińska do Kowna — drugiego co do wielkości miasta Litwy. Historyczne Stare Miasto, lotnisko KUN lub dowolny adres, bez zmian i opóźnień.",
    stats: [
      { label: "Odległość", value: "~220 km" },
      { label: "Czas podróży", value: "3–4,5 godz" },
      { label: "Granica", value: "Białoruś – Litwa" },
      { label: "Klasa pojazdu", value: "Biznes / Minivan" },
    ],
    photosTitle: "Kowno — atrakcje",
    photos: [
      {
        src: "/img/kaunas/town-hall.png",
        caption: "Ratusz w Kownie („Biały Łabędź”)",
      },
      { src: "/img/kaunas/old-town.png", caption: "Stare Miasto w Kownie" },
      {
        src: "/img/kaunas/laisves-aleja.png",
        caption: "Laisvės alėja (Aleja Wolności)",
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
        icon: Building2,
        title: "Kowno — dowolny adres",
        desc: "Stare Miasto, aleja Laisvės, lotnisko KUN, Twój hotel lub centrum biznesowe – gdziekolwiek chcesz.",
      },
    ],
    infoTitle: "Szczegóły trasy",
    infoRows: [
      {
        label: "Trasa",
        value: "Mińsk → Mołodeczna → Medininkai → Wilno → Kowno",
      },
      { label: "Odległość", value: "~220 km" },
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
      {
        label: "Lotnisko w Kownie",
        value: "KUN — loty Ryanair do Londynu, Dublina, Berlina i nie tylko",
      },
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
      "Opcjonalny przystanek w Wilnie na trasie",
      "Dostępny jest również transfer powrotny Kowno → Mińsk",
      "Dostępność 24 godziny na dobę, 7 dni w tygodniu, także w święta",
      "Dzieci i zwierzęta mile widziane",
    ],
    faqTitle: "Często zadawane pytania",
    faq: [
      {
        q: "Jaka jest trasa do Kowna?",
        a: "Przeważnie jedziemy przez Mołodechnę – Oszmiany – Medininkai/Salčininkai – Wilno – Kowno. Całkowita odległość wynosi około 220 km, czas przejazdu 3–4,5 godziny bez przystanku granicznego.",
      },
      {
        q: "Czy potrzebuję wizy, aby wjechać na Litwę?",
        a: "Obywatele Białorusi i Rosji potrzebują wizy Schengen lub litewskiej wizy krajowej. Przed podróżą sprawdź najnowsze wymagania w ambasadzie lub w oficjalnych źródłach.",
      },
      {
        q: "Czy możemy po drodze zatrzymać się w Wilnie?",
        a: "Tak – możemy zatrzymać się w Wilnie. Po prostu daj znać menadżerowi podczas dokonywania rezerwacji; może obowiązywać dodatkowa opłata.",
      },
      {
        q: "Czy mogę podróżować w nocy lub bardzo wcześnie rano?",
        a: "Tak, działamy 24 godziny na dobę, 7 dni w tygodniu. Po prostu podaj nam preferowany czas odjazdu, a my obliczymy optymalny czas odbioru.",
      },
    ],
    ctaTitle: "Zarezerwuj transfer Mińsk – Kowno",
    ctaDesc:
      "Prześlij zapytanie, a nasz menedżer wkrótce skontaktuje się z Tobą i poda dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Kowno",
    backBtn: "← Litwa transfery",
  },
  fr: {
    badge: "Transfert Kaunas",
    title: "Minsk — Kaunas",
    subtitle:
      "Transfert privé direct de Minsk à Kaunas, la deuxième plus grande ville de Lituanie. Vieille ville historique, aéroport KUN ou n'importe quelle adresse, sans changements ni retards.",
    stats: [
      { label: "Distance", value: "~220km" },
      { label: "Temps de trajet", value: "3 à 4,5 heures" },
      { label: "Frontière", value: "Biélorussie-Lituanie" },
      { label: "Classe de véhicule", value: "Affaires / Minifourgonnette" },
    ],
    photosTitle: "Kaunas — Points forts",
    photos: [
      {
        src: "/img/kaunas/town-hall.png",
        caption: "Hôtel de ville de Kaunas (« Cygne blanc »)",
      },
      { src: "/img/kaunas/old-town.png", caption: "Vieille ville de Kaunas" },
      {
        src: "/img/kaunas/laisves-aleja.png",
        caption: "Laisvės alėja (Avenue de la Liberté)",
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
        icon: Building2,
        title: "Kaunas — n'importe quelle adresse",
        desc: "Vieille ville, Laisvės alėja, aéroport KUN, votre hôtel ou centre d'affaires — où que vous soyez.",
      },
    ],
    infoTitle: "Détails de l'itinéraire",
    infoRows: [
      {
        label: "Itinéraire",
        value: "Minsk → Maladetchna → Medininkai → Vilnius → Kaunas",
      },
      { label: "Distance", value: "~220km" },
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
      {
        label: "Aéroport de Kaunas",
        value: "KUN — Vols Ryanair vers Londres, Dublin, Berlin et plus encore",
      },
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
      "Arrêt facultatif à Vilnius en route",
      "Transfert aller-retour Kaunas → Minsk également disponible",
      "Disponible 24h/24 et 7j/7 y compris les jours fériés",
      "Enfants et animaux bienvenus",
    ],
    faqTitle: "Questions fréquemment posées",
    faq: [
      {
        q: "Quel est l'itinéraire pour se rendre à Kaunas ?",
        a: "Nous passons généralement par Maladzyechna – Ashmyany – poste frontière de Medininkai/Šalčininkai – Vilnius – Kaunas. La distance totale est d'environ 220 km, le temps de trajet étant de 3 à 4,5 heures sans compter l'arrêt frontalier.",
      },
      {
        q: "Ai-je besoin d’un visa pour entrer en Lituanie ?",
        a: "Les citoyens biélorusses et russes ont besoin d'un visa Schengen ou d'un visa national lituanien. Veuillez vérifier les dernières exigences auprès de l'ambassade ou des sources officielles avant de voyager.",
      },
      {
        q: "Pouvons-nous nous arrêter à Vilnius en chemin ?",
        a: "Oui, nous pouvons faire une halte à Vilnius. Il suffit d'en informer le responsable lors de la réservation ; des frais supplémentaires peuvent s'appliquer.",
      },
      {
        q: "Puis-je voyager la nuit ou très tôt le matin ?",
        a: "Oui, nous opérons 24h/24 et 7j/7. Indiquez-nous simplement votre heure de départ préférée et nous calculerons l'heure de prise en charge optimale.",
      },
    ],
    ctaTitle: "Réserver un transfert Minsk-Kaunas",
    ctaDesc:
      "Soumettez une demande et notre responsable vous contactera sous peu avec un prix exact.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Kaunas",
    backBtn: "← Transferts Lituanie",
  },
  seo: {
    titleRu: "Трансфер Минск — Каунас | Прямая поездка в Литву | ComfortLine",
    titleEn:
      "Minsk to Kaunas Transfer | Direct Ride to Lithuania | ComfortLine",
    descRu:
      "Прямой трансфер из Минска в Каунас. ~220 км, 3–4.5 ч. Старый город, аллея Свободы, аэропорт KUN. Фиксированная цена, опытный водитель, граница Беларусь–Литва.",
    descEn:
      "Direct transfer from Minsk to Kaunas. ~220 km, 3–4.5 hrs. Old Town, Laisvės alėja, KUN airport. Fixed price, professional driver, Belarus–Lithuania border crossing.",
    pathRu: "/трансфер-минск-каунас",
    pathEn: "/minsk-kaunas-transfer",
    breadcrumbRu: "Трансфер Минск–Каунас",
    breadcrumbEn: "Minsk — Kaunas",
    fromName: "Минск",
    toName: "Каунас",
  },
};

export default function MinskKaunasTransferPage() {
  return <RouteLandingPage data={data} />;
}
