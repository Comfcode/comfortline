import { MapPin, ShieldCheck, Building2 } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Лодзь",
    title: "Минск — Лодзь",
    subtitle:
      "Прямой трансфер из Минска в Лодзь — польский город творческих кварталов и промышленного наследия. Улица Пётрковска, огромный арт-комплекс «Мануфактура» в кирпичных стенах XIX века и всемирно известная киношкола.",
    stats: [
      { label: "Расстояние", value: "~650 км" },
      { label: "Время в пути", value: "7–9 ч" },
      { label: "Граница", value: "Беларусь–Польша" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Лодзь — достопримечательности",
    photos: [
      {
        src: "/img/lodz/piotrkowska-street.png",
        caption:
          "Улица Пётрковска — одна из длиннейших торговых улиц Европы (~4,2 км)",
      },
      {
        src: "/img/lodz/manufaktura.png",
        caption:
          "«Мануфактура» — бывший текстильный завод И. Познанского, сегодня арт- и торговый центр",
      },
      {
        src: "/img/lodz/poznanski-palace.png",
        caption:
          "Дворец Израэля Познанского — необарочный шедевр промышленной эпохи",
      },
    ],
    howTitle: "Как проходит поездка",
    steps: [
      {
        icon: MapPin,
        title: "Выезд из Минска",
        desc: "Водитель заберёт вас по указанному адресу в Минске и направится к польской границе по оптимальному маршруту.",
      },
      {
        icon: ShieldCheck,
        title: "Граница Беларусь–Польша",
        desc: "Переход Брузги / Кузница или Берёза / Половцы. Водитель знает актуальные очереди и помогает на КПП.",
      },
      {
        icon: Building2,
        title: "Лодзь: любой адрес",
        desc: "Довезём до отеля у Пётрковской, аэропорта LCJ или любого другого адреса в городе.",
      },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      {
        label: "Маршрут",
        value: "Минск → Брест → Тересполь → Варшава → Лодзь",
      },
      { label: "Расстояние", value: "~650 км" },
      {
        label: "Пограничный переход",
        value: "Брузги / Кузница или Берёза / Половцы (Беларусь–Польша)",
      },
      {
        label: "Время пересечения границы",
        value: "1–8 ч в зависимости от сезона и очереди",
      },
      { label: "Необходимые документы", value: "Виза Шенген, загранпаспорт" },
      {
        label: "Аэропорт Лодзи",
        value: "LCJ (им. Владислава Реймонта) — 6 км от центра",
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
      "Опытные водители маршрута Минск–Польша",
      "Знание актуальных очередей на границе",
      "Возможна остановка в Варшаве по дороге (~130 км от Лодзи)",
      "Обратный трансфер: из Лодзи в Минск",
      "Работаем 24/7, включая праздники",
      "Перевозим с детьми и питомцами",
    ],
    faqTitle: "Часто задаваемые вопросы",
    faq: [
      {
        q: "Какой маршрут до Лодзи?",
        a: "Едем через Брест — КПП Брузги/Кузница или Берёза/Половцы — Варшаву — Лодзь. Расстояние около 650 км, время в пути 7–9 ч без учёта границы.",
      },
      {
        q: "Нужна ли виза в Польшу?",
        a: "Гражданам Беларуси требуется шенгенская виза. Уточняйте актуальные требования в посольстве Польши или на официальных сайтах перед поездкой.",
      },
      {
        q: "Что такое «Мануфактура»?",
        a: "Manufaktura — один из крупнейших арт- и торговых центров Польши, расположенный в отреставрированных кирпичных корпусах хлопкопрядильной фабрики Израэля Познанского XIX века. Здесь музеи, кинотеатры, рестораны и огромная площадь для мероприятий.",
      },
      {
        q: "Можно ли остановиться в Варшаве по дороге?",
        a: "Да — Варшава находится примерно в 130 км от Лодзи, маршрут проходит через неё. Остановка почти не удлиняет поездку — договоритесь с менеджером при бронировании.",
      },
    ],
    ctaTitle: "Заказать трансфер Минск–Лодзь",
    ctaDesc:
      "Оставьте заявку — менеджер свяжется с вами в ближайшее время и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Лодзь",
    backBtn: "← Трансферы в Польшу",
  },
  en: {
    badge: "Łódź Transfer",
    title: "Minsk — Łódź",
    subtitle:
      "Direct private transfer from Minsk to Łódź — Poland's creative capital of industrial heritage. Piotrkowska Street, the vast Manufaktura arts complex inside 19th-century brick walls and the world-famous Łódź Film School.",
    stats: [
      { label: "Distance", value: "~650 km" },
      { label: "Travel time", value: "7–9 hrs" },
      { label: "Border", value: "Belarus–Poland" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Łódź — Highlights",
    photos: [
      {
        src: "/img/lodz/piotrkowska-street.png",
        caption:
          "Piotrkowska Street — one of Europe's longest commercial boulevards (~4.2 km)",
      },
      {
        src: "/img/lodz/manufaktura.png",
        caption:
          "Manufaktura — Poznański's former cotton mill, now a landmark arts and shopping complex",
      },
      {
        src: "/img/lodz/poznanski-palace.png",
        caption:
          "Izrael Poznański Palace — neo-baroque masterpiece of the industrial era",
      },
    ],
    howTitle: "How the transfer works",
    steps: [
      {
        icon: MapPin,
        title: "Departure from Minsk",
        desc: "Your driver picks you up at your Minsk address and heads for the Polish border via the fastest route.",
      },
      {
        icon: ShieldCheck,
        title: "Belarus–Poland border",
        desc: "Bruzgi / Kuźnica or Berёza / Połowce crossing. Your driver knows current queue conditions and assists at the checkpoint.",
      },
      {
        icon: Building2,
        title: "Łódź — any address",
        desc: "We drop you at your hotel near Piotrkowska Street, Łódź Airport (LCJ) or any other address in the city.",
      },
    ],
    infoTitle: "Route Details",
    infoRows: [
      { label: "Route", value: "Minsk → Brest → Terespol → Warsaw → Łódź" },
      { label: "Distance", value: "~650 km" },
      {
        label: "Border crossing",
        value: "Bruzgi / Kuźnica or Berёza / Połowce (Belarus–Poland)",
      },
      {
        label: "Border crossing time",
        value: "1–8 hrs depending on season and queues",
      },
      { label: "Documents required", value: "Schengen visa, valid passport" },
      {
        label: "Łódź Airport",
        value: "LCJ (Władysław Reymont Airport) — 6 km from the centre",
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
      "Experienced drivers on the Minsk–Poland route",
      "Up-to-date knowledge of border queue conditions",
      "Optional Warsaw stopover en route (~130 km from Łódź)",
      "Return transfer Łódź → Minsk also available",
      "Available 24/7 including public holidays",
      "Kids and pets welcome",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "What is the route to Łódź?",
        a: "We go via Brest – Bruzgi/Kuźnica or Berёza/Połowce border crossing – Warsaw – Łódź. Total distance is about 650 km, travel time 7–9 hours excluding the border stop.",
      },
      {
        q: "Do I need a visa to enter Poland?",
        a: "Citizens of Belarus require a Schengen visa. Please check the latest requirements with the Polish embassy or official sources before travelling.",
      },
      {
        q: "What is Manufaktura?",
        a: "Manufaktura is one of Poland's largest arts and entertainment complexes, built inside the meticulously restored 19th-century red-brick factory halls of Izrael Poznański's cotton mill. It houses museums, cinemas, restaurants and a huge events square.",
      },
      {
        q: "Can we stop in Warsaw on the way?",
        a: "Yes — Warsaw is about 130 km from Łódź and the route passes through it. A stop adds very little extra time; just let the manager know when booking.",
      },
    ],
    ctaTitle: "Book Minsk–Łódź Transfer",
    ctaDesc:
      "Submit a request and our manager will contact you shortly with an exact price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Łódź",
    backBtn: "← Poland transfers",
  },
  pl: {
    badge: "Transfer Łódzki",
    title: "Mińsk — Łódź",
    subtitle:
      "Bezpośredni prywatny transfer z Mińska do Łodzi – kreatywnej stolicy dziedzictwa przemysłowego w Polsce. Piotrkowska, rozległy kompleks artystyczny Manufaktura w XIX-wiecznych ceglanych murach i światowej sławy Łódzka Szkoła Filmowa.",
    stats: [
      { label: "Odległość", value: "~650 km" },
      { label: "Czas podróży", value: "7–9 godz" },
      { label: "Granica", value: "Białoruś – Polska" },
      { label: "Klasa pojazdu", value: "Biznes / Minivan" },
    ],
    photosTitle: "Łódź — najważniejsze momenty",
    photos: [
      {
        src: "/img/lodz/piotrkowska-street.png",
        caption:
          "Ulica Piotrkowska — jeden z najdłuższych bulwarów handlowych w Europie (~4,2 km)",
      },
      {
        src: "/img/lodz/manufaktura.png",
        caption:
          "Manufaktura — dawna przędzalnia Poznańskiego, obecnie przełomowy kompleks artystyczno-handlowy",
      },
      {
        src: "/img/lodz/poznanski-palace.png",
        caption:
          "Pałac Izraela Poznańskiego — neobarokowe arcydzieło epoki przemysłowej",
      },
    ],
    howTitle: "Jak działa transfer",
    steps: [
      {
        icon: MapPin,
        title: "Wyjazd z Mińska",
        desc: "Twój kierowca odbierze Cię pod Twoim adresem w Mińsku i najszybszą trasą uda się do polskiej granicy.",
      },
      {
        icon: ShieldCheck,
        title: "Granica białorusko-polska",
        desc: "Przejście Bruzgi / Kuźnica lub Berёza / Połowce. Twój kierowca zna aktualny stan kolejek i pomaga na punkcie kontrolnym.",
      },
      {
        icon: Building2,
        title: "Łódź — dowolny adres",
        desc: "Podwieziemy Cię do hotelu w pobliżu ulicy Piotrkowskiej, lotniska w Łodzi (LCJ) lub pod dowolny inny adres w mieście.",
      },
    ],
    infoTitle: "Szczegóły trasy",
    infoRows: [
      { label: "Trasa", value: "Mińsk → Brześć → Terespol → Warszawa → Łódź" },
      { label: "Odległość", value: "~650 km" },
      {
        label: "Przejście graniczne",
        value: "Bruzgi / Kuźnica lub Berёza / Połowce (Białoruś – Polska)",
      },
      {
        label: "Czas przekraczania granicy",
        value: "1–8 godzin w zależności od sezonu i kolejek",
      },
      { label: "Wymagane dokumenty", value: "Wiza Schengen, ważny paszport" },
      {
        label: "Port Lotniczy Łódź",
        value: "LCJ (Lotnisko Władysława Reymonta) — 6 km od centrum",
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
      "Doświadczeni kierowcy na trasie Mińsk – Polska",
      "Aktualna wiedza o warunkach kolejek granicznych",
      "Opcjonalny przystanek w Warszawie na trasie (~130 km od Łodzi)",
      "Dostępny również transfer powrotny Łódź → Mińsk",
      "Dostępność 24 godziny na dobę, 7 dni w tygodniu, także w święta",
      "Dzieci i zwierzęta mile widziane",
    ],
    faqTitle: "Często zadawane pytania",
    faq: [
      {
        q: "Jaka jest trasa do Łodzi?",
        a: "Jedziemy przez przejście graniczne Brześć – Bruzgi/Kuźnica lub Berёza/Połowce – Warszawa – Łódź. Całkowita odległość wynosi około 650 km, czas przejazdu 7–9 godzin bez przystanku granicznego.",
      },
      {
        q: "Czy potrzebuję wizy, aby wjechać do Polski?",
        a: "Obywatele Białorusi potrzebują wizy Schengen. Przed podróżą sprawdź aktualne wymagania w polskiej ambasadzie lub w oficjalnych źródłach.",
      },
      {
        q: "Czym jest Manufaktura?",
        a: "Manufaktura to jeden z największych w Polsce kompleksów artystyczno-rozrywkowych, wybudowany w pieczołowicie odrestaurowanych XIX-wiecznych halach fabrycznych z czerwonej cegły przędzalni Izraela Poznańskiego. Znajdują się w nim muzea, kina, restauracje i ogromny plac wydarzeń.",
      },
      {
        q: "Czy możemy po drodze zatrzymać się w Warszawie?",
        a: "Tak — Warszawa jest oddalona od Łodzi o około 130 km i trasa przez nią przebiega. Zatrzymanie dodaje bardzo niewiele dodatkowego czasu; po prostu daj znać menadżerowi podczas rezerwacji.",
      },
    ],
    ctaTitle: "Zarezerwuj transfer Mińsk–Łódź",
    ctaDesc:
      "Prześlij zapytanie, a nasz menedżer wkrótce skontaktuje się z Tobą i poda dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Łódź",
    backBtn: "← Polska transfery",
  },
  fr: {
    badge: "Transfert Lodz",
    title: "Minsk — Lodz",
    subtitle:
      "Transfert privé direct de Minsk à Łódź — la capitale créative du patrimoine industriel de la Pologne. La rue Piotrkowska, le vaste complexe artistique Manufaktura entouré de murs de briques du XIXe siècle et la célèbre école de cinéma de Łódź.",
    stats: [
      { label: "Distance", value: "~650km" },
      { label: "Temps de trajet", value: "7 à 9 heures" },
      { label: "Frontière", value: "Biélorussie-Pologne" },
      { label: "Classe de véhicule", value: "Affaires / Minifourgonnette" },
    ],
    photosTitle: "Lodz — Points forts",
    photos: [
      {
        src: "/img/lodz/piotrkowska-street.png",
        caption:
          "Rue Piotrkowska — l'un des plus longs boulevards commerciaux d'Europe (~ 4,2 km)",
      },
      {
        src: "/img/lodz/manufaktura.png",
        caption:
          "Manufaktura — L'ancienne filature de coton de Poznański, aujourd'hui un complexe artistique et commercial emblématique",
      },
      {
        src: "/img/lodz/poznanski-palace.png",
        caption:
          "Palais Izrael Poznański – chef-d'œuvre néo-baroque de l'ère industrielle",
      },
    ],
    howTitle: "Comment fonctionne le transfert",
    steps: [
      {
        icon: MapPin,
        title: "Départ de Minsk",
        desc: "Votre chauffeur vient vous chercher à votre adresse à Minsk et se dirige vers la frontière polonaise par l'itinéraire le plus rapide.",
      },
      {
        icon: ShieldCheck,
        title: "Frontière Biélorussie-Pologne",
        desc: "Traversée Bruzgi / Kuźnica ou Berёza / Połowce. Votre chauffeur connaît les conditions actuelles de la file d'attente et vous assiste au point de contrôle.",
      },
      {
        icon: Building2,
        title: "Łódź — n'importe quelle adresse",
        desc: "Nous vous déposons à votre hôtel près de la rue Piotrkowska, de l'aéroport de Łódź (LCJ) ou de toute autre adresse de la ville.",
      },
    ],
    infoTitle: "Détails de l'itinéraire",
    infoRows: [
      {
        label: "Itinéraire",
        value: "Minsk → Brest → Terespol → Varsovie → Łódź",
      },
      { label: "Distance", value: "~650km" },
      {
        label: "Passage de la frontière",
        value: "Bruzgi / Kuźnica ou Berёza / Połowce (Biélorussie-Pologne)",
      },
      {
        label: "Temps de passage de la frontière",
        value: "1 à 8 heures selon la saison et les files d'attente",
      },
      { label: "Documents requis", value: "Visa Schengen, passeport valide" },
      {
        label: "Aéroport de Lodz",
        value: "LCJ (aéroport Władysław Reymont) — 6 km du centre",
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
      "Chauffeurs expérimentés sur la route Minsk-Pologne",
      "Connaissance à jour des conditions de file d'attente aux frontières",
      "Escale facultative à Varsovie en cours de route (~ 130 km de Łódź)",
      "Transfert aller-retour Łódź → Minsk également disponible",
      "Disponible 24h/24 et 7j/7 y compris les jours fériés",
      "Enfants et animaux bienvenus",
    ],
    faqTitle: "Questions fréquemment posées",
    faq: [
      {
        q: "Quel est l'itinéraire pour se rendre à Łódź?",
        a: "Nous passons par Brest – Bruzgi/Kuźnica ou Berёza/Połowce – Varsovie – Łódź. La distance totale est d'environ 650 km, temps de trajet de 7 à 9 heures sans compter l'arrêt frontalier.",
      },
      {
        q: "Ai-je besoin d’un visa pour entrer en Pologne ?",
        a: "Les citoyens biélorusses ont besoin d'un visa Schengen. Veuillez vérifier les dernières exigences auprès de l'ambassade de Pologne ou de sources officielles avant de voyager.",
      },
      {
        q: "Qu’est-ce que la Manufacture ?",
        a: "Manufaktura est l'un des plus grands complexes artistiques et de divertissement de Pologne, construit à l'intérieur des halls d'usine en briques rouges du XIXe siècle méticuleusement restaurés de la filature de coton d'Izrael Poznański. Il abrite des musées, des cinémas, des restaurants et une immense place événementielle.",
      },
      {
        q: "Pouvons-nous nous arrêter à Varsovie en chemin ?",
        a: "Oui, Varsovie se trouve à environ 130 km de Łódź et l’itinéraire la traverse. Un arrêt ajoute très peu de temps supplémentaire ; il suffit d'en informer le responsable lors de la réservation.",
      },
    ],
    ctaTitle: "Réserver un transfert Minsk-Łódź",
    ctaDesc:
      "Soumettez une demande et notre responsable vous contactera sous peu avec un prix exact.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Lodz",
    backBtn: "← Transferts Pologne",
  },
  seo: {
    titleRu:
      "Трансфер Минск — Лодзь | Польский город кино и моды | ComfortLine",
    titleEn: "Minsk to Łódź Transfer | Poland's Creative Capital | ComfortLine",
    descRu:
      "Прямой трансфер из Минска в Лодзь. ~650 км, 7–9 ч. Пётрковска, Мануфактура, киношкола. Граница Беларусь–Польша, фиксированная цена.",
    descEn:
      "Direct transfer from Minsk to Łódź. ~650 km, 7–9 hrs. Piotrkowska Street, Manufaktura, Film School. Belarus–Poland border crossing, fixed price.",
    pathRu: "/трансфер-минск-лодзь",
    pathEn: "/minsk-lodz-transfer",
    breadcrumbRu: "Трансфер Минск–Лодзь",
    breadcrumbEn: "Minsk — Łódź",
    fromName: "Минск",
    toName: "Лодзь",
  },
};

export default function MinskLodzTransferPage() {
  return <RouteLandingPage data={data} />;
}
