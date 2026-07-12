import { MapPin, ShieldCheck, Heart } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Друскининкай",
    title: "Минск — Друскининкай",
    subtitle:
      "Прямой трансфер из Минска в Друскининкай — главный курортный и спа-город Литвы. Минеральные воды, аквапарк, горнолыжная трасса и парк скульптур Грутас.",
    stats: [
      { label: "Расстояние", value: "~220 км" },
      { label: "Время в пути", value: "3–5 ч" },
      { label: "Граница", value: "Беларусь–Литва" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Друскининкай — достопримечательности",
    photos: [
      {
        src: "/img/druskininkai/resort.png",
        caption: "Курортный центр Друскининкай",
      },
      {
        src: "/img/druskininkai/aqua-park.png",
        caption: "Аквапарк — крупнейший в странах Балтии",
      },
      {
        src: "/img/druskininkai/grutas-park.png",
        caption: "Парк Грутас — музей советской скульптуры",
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
        desc: "Переход Медининкай / Шальчининкай или Котловка (возможны варианты). Водитель знает актуальные очереди.",
      },
      {
        icon: Heart,
        title: "Друскининкай: курорт и СПА",
        desc: "Довезём до санатория, отеля, аквапарка или любого адреса в Друскининкай.",
      },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      {
        label: "Маршрут",
        value: "Минск → Гродно → Котловка / Медининкай → Друскининкай",
      },
      { label: "Расстояние", value: "~220 км" },
      {
        label: "Пограничный переход",
        value: "Котловка / Медининкай (Беларусь–Литва)",
      },
      {
        label: "Время пересечения границы",
        value: "30 мин – 3 ч в зависимости от очереди",
      },
      {
        label: "Необходимые документы",
        value: "Виза Шенген (для граждан не ЕС), загранпаспорт",
      },
      {
        label: "Курорт",
        value: "Минеральные воды, спа, горнолыжная трасса Snow Arena",
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
      "Удобно для семей и групп на отдых",
      "Обратный трансфер: из Друскининкай в Минск",
      "Работаем 24/7, включая праздники",
      "Перевозим с детьми и питомцами",
    ],
    faqTitle: "Часто задаваемые вопросы",
    faq: [
      {
        q: "Какой маршрут до Друскининкай?",
        a: "Чаще всего едем через Гродно и КПП Котловка или через Медининкай. Расстояние около 220 км, время в пути 3–5 ч без учёта границы.",
      },
      {
        q: "Нужна ли виза в Литву?",
        a: "Гражданам Беларуси требуется шенгенская виза или национальная виза Литовской Республики. Уточняйте актуальные требования в посольстве или на официальных сайтах.",
      },
      {
        q: "Можно ли доехать до санатория с вещами?",
        a: "Да, минивэн вмещает до 8 пассажиров с багажом. Если у вас много вещей — сообщите при бронировании.",
      },
      {
        q: "Можно ли заехать в Гродно по дороге?",
        a: "Да, возможна остановка в Гродно. Договоритесь с менеджером при бронировании, доплата по согласованию.",
      },
    ],
    ctaTitle: "Заказать трансфер Минск–Друскининкай",
    ctaDesc:
      "Оставьте заявку — менеджер свяжется с вами в ближайшее время и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Друскининкай",
    backBtn: "← Трансферы в Литву",
  },
  en: {
    badge: "Druskininkai Transfer",
    title: "Minsk — Druskininkai",
    subtitle:
      "Direct private transfer from Minsk to Druskininkai — Lithuania's premier spa and health resort. Mineral springs, the Baltic's largest aqua park, a ski slope and the unique Grūtas Park.",
    stats: [
      { label: "Distance", value: "~220 km" },
      { label: "Travel time", value: "3–5 hrs" },
      { label: "Border", value: "Belarus–Lithuania" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Druskininkai — Highlights",
    photos: [
      {
        src: "/img/druskininkai/resort.png",
        caption: "Druskininkai resort centre",
      },
      {
        src: "/img/druskininkai/aqua-park.png",
        caption: "Aqua Park — largest in the Baltics",
      },
      {
        src: "/img/druskininkai/grutas-park.png",
        caption: "Grūtas Park — Soviet sculpture museum",
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
        desc: "Kotlovka / Medininkai crossing. Your driver knows current queue conditions and assists at the checkpoint.",
      },
      {
        icon: Heart,
        title: "Druskininkai — spa & resort",
        desc: "We drop you at your sanatorium, hotel, the aqua park or any address in Druskininkai.",
      },
    ],
    infoTitle: "Route Details",
    infoRows: [
      {
        label: "Route",
        value: "Minsk → Grodno → Kotlovka / Medininkai → Druskininkai",
      },
      { label: "Distance", value: "~220 km" },
      {
        label: "Border crossing",
        value: "Kotlovka / Medininkai (Belarus–Lithuania)",
      },
      {
        label: "Border crossing time",
        value: "30 min – 3 hrs depending on queues",
      },
      {
        label: "Documents required",
        value: "Schengen visa (non-EU citizens), valid passport",
      },
      {
        label: "Resort highlights",
        value: "Mineral springs, spa, Snow Arena ski slope",
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
      "Great for families and leisure groups",
      "Return transfer Druskininkai → Minsk also available",
      "Available 24/7 including public holidays",
      "Kids and pets welcome",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "What is the route to Druskininkai?",
        a: "We typically go via Grodno and the Kotlovka crossing, or via Medininkai. Total distance is about 220 km, travel time 3–5 hours excluding the border stop.",
      },
      {
        q: "Do I need a visa to enter Lithuania?",
        a: "Citizens of Belarus require a Schengen visa or a Lithuanian national visa. Please check the latest requirements with the embassy or official sources before travelling.",
      },
      {
        q: "Can you fit all my luggage for a health resort stay?",
        a: "Yes — our minivan seats up to 8 passengers with luggage. If you have particularly heavy bags, let us know when booking.",
      },
      {
        q: "Can we stop in Grodno on the way?",
        a: "Yes — we can make a stop in Grodno. Just let the manager know when booking; an additional charge may apply.",
      },
    ],
    ctaTitle: "Book Minsk–Druskininkai Transfer",
    ctaDesc:
      "Submit a request and our manager will contact you shortly with an exact price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Druskininkai",
    backBtn: "← Lithuania transfers",
  },
  pl: {
    badge: "Transfer do Druskiennik",
    title: "Mińsk — Druskieniki",
    subtitle:
      "Bezpośredni prywatny transfer z Mińska do Druskiennik – najważniejszego uzdrowiska i uzdrowiska na Litwie. Źródła mineralne, największy nad Bałtykiem aquapark, stok narciarski i wyjątkowy Park Grūtas.",
    stats: [
      { label: "Odległość", value: "~220 km" },
      { label: "Czas podróży", value: "3–5 godz" },
      { label: "Granica", value: "Białoruś – Litwa" },
      { label: "Klasa pojazdu", value: "Biznes / Minivan" },
    ],
    photosTitle: "Druskienniki — najważniejsze wydarzenia",
    photos: [
      {
        src: "/img/druskininkai/resort.png",
        caption: "Centrum kurortu Druskienniki",
      },
      {
        src: "/img/druskininkai/aqua-park.png",
        caption: "Aqua Park — największy w krajach bałtyckich",
      },
      {
        src: "/img/druskininkai/grutas-park.png",
        caption: "Park Grūtas — muzeum rzeźby radzieckiej",
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
        desc: "Przejście Kotłowka/Medininkai. Twój kierowca zna aktualny stan kolejek i pomaga na punkcie kontrolnym.",
      },
      {
        icon: Heart,
        title: "Druskienniki — uzdrowisko i kurort",
        desc: "Podwozimy Cię do Twojego sanatorium, hotelu, aquaparku lub pod dowolny adres w Druskiennikach.",
      },
    ],
    infoTitle: "Szczegóły trasy",
    infoRows: [
      {
        label: "Trasa",
        value: "Mińsk → Grodno → Kotłowka / Medininkai → Druskienniki",
      },
      { label: "Odległość", value: "~220 km" },
      {
        label: "Przejście graniczne",
        value: "Kotłowka / Medininkai (Białoruś – Litwa)",
      },
      {
        label: "Czas przekraczania granicy",
        value: "30 minut – 3 godziny w zależności od kolejek",
      },
      {
        label: "Wymagane dokumenty",
        value: "Wiza Schengen (obywatele spoza UE), ważny paszport",
      },
      {
        label: "Najważniejsze atrakcje kurortu",
        value: "Źródła mineralne, uzdrowisko, stok narciarski Snow Arena",
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
      "Świetne dla rodzin i grup rekreacyjnych",
      "Dostępny jest również transfer powrotny Druskienniki → Mińsk",
      "Dostępność 24 godziny na dobę, 7 dni w tygodniu, także w święta",
      "Dzieci i zwierzęta mile widziane",
    ],
    faqTitle: "Często zadawane pytania",
    faq: [
      {
        q: "Jaka jest trasa do Druskiennik?",
        a: "Przeważnie jedziemy przez Grodno i przeprawę Kotłowkę lub przez Medininkai. Całkowita odległość wynosi około 220 km, czas przejazdu 3–5 godzin bez przystanku granicznego.",
      },
      {
        q: "Czy potrzebuję wizy, aby wjechać na Litwę?",
        a: "Obywatele Białorusi potrzebują wizy Schengen lub litewskiej wizy krajowej. Przed podróżą sprawdź najnowsze wymagania w ambasadzie lub w oficjalnych źródłach.",
      },
      {
        q: "Czy zmieścisz cały mój bagaż na pobyt w uzdrowisku?",
        a: "Tak – nasz minivan pomieści do 8 pasażerów wraz z bagażem. Jeśli masz szczególnie ciężkie torby, daj nam znać przy rezerwacji.",
      },
      {
        q: "Czy możemy po drodze zatrzymać się w Grodnie?",
        a: "Tak – możemy zatrzymać się w Grodnie. Po prostu daj znać menadżerowi podczas dokonywania rezerwacji; może obowiązywać dodatkowa opłata.",
      },
    ],
    ctaTitle: "Zarezerwuj transfer Mińsk – Druskienniki",
    ctaDesc:
      "Prześlij zapytanie, a nasz menedżer wkrótce skontaktuje się z Tobą i poda dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Druskieniki",
    backBtn: "← Litwa transfery",
  },
  fr: {
    badge: "Transfert Druskininkai",
    title: "Minsk — Druskininkai",
    subtitle:
      "Transfert privé direct de Minsk à Druskininkai, la première station thermale et thermale de Lituanie. Des sources minérales, le plus grand parc aquatique de la Baltique, une piste de ski et l'unique parc Grūtas.",
    stats: [
      { label: "Distance", value: "~220km" },
      { label: "Temps de trajet", value: "3 à 5 heures" },
      { label: "Frontière", value: "Biélorussie-Lituanie" },
      { label: "Classe de véhicule", value: "Affaires / Minifourgonnette" },
    ],
    photosTitle: "Druskininkai — Points forts",
    photos: [
      {
        src: "/img/druskininkai/resort.png",
        caption: "Centre station de Druskininkai",
      },
      {
        src: "/img/druskininkai/aqua-park.png",
        caption: "Parc aquatique – le plus grand des pays baltes",
      },
      {
        src: "/img/druskininkai/grutas-park.png",
        caption: "Parc Grūtas — Musée de sculpture soviétique",
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
        desc: "Traversée Kotlovka/Medininkai. Votre chauffeur connaît les conditions actuelles de la file d'attente et vous assiste au point de contrôle.",
      },
      {
        icon: Heart,
        title: "Druskininkai — spa et complexe hôtelier",
        desc: "Nous vous déposons à votre sanatorium, hôtel, parc aquatique ou à n'importe quelle adresse à Druskininkai.",
      },
    ],
    infoTitle: "Détails de l'itinéraire",
    infoRows: [
      {
        label: "Itinéraire",
        value: "Minsk → Grodno → Kotlovka / Medininkai → Druskininkai",
      },
      { label: "Distance", value: "~220km" },
      {
        label: "Passage de la frontière",
        value: "Kotlovka / Medininkai (Biélorussie-Lituanie)",
      },
      {
        label: "Temps de passage de la frontière",
        value: "30 min – 3 heures selon les files d'attente",
      },
      {
        label: "Documents requis",
        value: "Visa Schengen (citoyens non-UE), passeport valide",
      },
      {
        label: "Points forts de la station",
        value: "Sources minérales, spa, piste de ski Snow Arena",
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
      "Idéal pour les familles et les groupes de loisirs",
      "Transfert aller-retour Druskininkai → Minsk également disponible",
      "Disponible 24h/24 et 7j/7 y compris les jours fériés",
      "Enfants et animaux bienvenus",
    ],
    faqTitle: "Questions fréquemment posées",
    faq: [
      {
        q: "Quel est l'itinéraire pour se rendre à Druskininkai ?",
        a: "Nous passons généralement par Grodno et le passage de Kotlovka, ou via Medininkai. La distance totale est d'environ 220 km, temps de trajet de 3 à 5 heures sans compter l'arrêt frontalier.",
      },
      {
        q: "Ai-je besoin d’un visa pour entrer en Lituanie ?",
        a: "Les citoyens biélorusses ont besoin d'un visa Schengen ou d'un visa national lituanien. Veuillez vérifier les dernières exigences auprès de l'ambassade ou des sources officielles avant de voyager.",
      },
      {
        q: "Pouvez-vous ranger tous mes bagages pour un séjour en station thermale ?",
        a: "Oui, notre minibus peut accueillir jusqu'à 8 passagers avec bagages. Si vous avez des bagages particulièrement lourds, prévenez-nous lors de la réservation.",
      },
      {
        q: "Pouvons-nous nous arrêter à Grodno en chemin ?",
        a: "Oui, nous pouvons faire une halte à Grodno. Il suffit d'en informer le responsable lors de la réservation ; des frais supplémentaires peuvent s'appliquer.",
      },
    ],
    ctaTitle: "Réserver un transfert Minsk-Druskininkai",
    ctaDesc:
      "Soumettez une demande et notre responsable vous contactera sous peu avec un prix exact.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Druskininkai",
    backBtn: "← Transferts Lituanie",
  },
  seo: {
    titleRu: "Трансфер Минск — Друскининкай | СПА-курорт Литвы | ComfortLine",
    titleEn:
      "Minsk to Druskininkai Transfer | Lithuania Spa Resort | ComfortLine",
    descRu:
      "Прямой трансфер из Минска в Друскининкай. ~220 км, 3–5 ч. Минеральные воды, аквапарк, Snow Arena. Фиксированная цена, граница Беларусь–Литва.",
    descEn:
      "Direct transfer from Minsk to Druskininkai. ~220 km, 3–5 hrs. Mineral springs, aqua park, Snow Arena ski slope. Fixed price, Belarus–Lithuania border crossing.",
    pathRu: "/трансфер-минск-друскининкай",
    pathEn: "/minsk-druskininkai-transfer",
    breadcrumbRu: "Трансфер Минск–Друскининкай",
    breadcrumbEn: "Minsk — Druskininkai",
    fromName: "Минск",
    toName: "Друскининкай",
  },
};

export default function MinskDruskininkaiTransferPage() {
  return <RouteLandingPage data={data} />;
}
