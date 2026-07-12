import { MapPin, ShieldCheck, Building2 } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Юрмалу",
    title: "Минск — Юрмала",
    subtitle:
      "Прямой трансфер из Минска в Юрмалу — жемчужину Балтийского побережья. Белый песок, сосновый воздух, деревянные виллы в стиле модерн и лучшие санатории Латвии.",
    stats: [
      { label: "Расстояние", value: "~490 км" },
      { label: "Время в пути", value: "5.5–7 ч" },
      { label: "Граница", value: "Беларусь–Латвия" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Юрмала — достопримечательности",
    photos: [
      {
        src: "/img/jurmala/beach.png",
        caption:
          "Пляж Майори — белый песок, чистый воздух и сосны у самой воды",
      },
      {
        src: "/img/jurmala/wooden-villas.png",
        caption: "Деревянные дачи в стиле модерн — визитная карточка Юрмалы",
      },
      {
        src: "/img/jurmala/pine-forest.png",
        caption:
          "Дзинтарский лесопарк — сосновый бор прямо между пляжем и городом",
      },
    ],
    howTitle: "Как проходит поездка",
    steps: [
      {
        icon: MapPin,
        title: "Выезд из Минска",
        desc: "Водитель заберёт вас по указанному адресу в Минске и направится к латвийской границе по оптимальному маршруту.",
      },
      {
        icon: ShieldCheck,
        title: "Граница Беларусь–Латвия",
        desc: "Переход Урбаны / Патарниеки. Водитель знает актуальные очереди и помогает на КПП.",
      },
      {
        icon: Building2,
        title: "Юрмала: любой адрес",
        desc: "Довезём до санатория, отеля у пляжа, улицы Йомас или любого другого адреса в городе.",
      },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      { label: "Маршрут", value: "Минск → Урбаны → Рига → Юрмала" },
      { label: "Расстояние", value: "~490 км (~470 км до Риги + 25 км)" },
      {
        label: "Пограничный переход",
        value: "Урбаны / Патарниеки (Беларусь–Латвия)",
      },
      {
        label: "Время пересечения границы",
        value: "1–6 ч в зависимости от очереди",
      },
      { label: "Необходимые документы", value: "Виза Шенген, загранпаспорт" },
      { label: "Ближайший аэропорт", value: "RIX (Рига) — 30 км от Юрмалы" },
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
      "Прямо до санатория или отеля в Юрмале без пересадок",
      "Опытные водители маршрута Минск–Латвия",
      "Знание актуальных очередей на границе Урбаны",
      "Остановка в Риге по пути — по запросу",
      "Обратный трансфер: из Юрмалы в Минск",
      "Работаем 24/7, включая праздники",
    ],
    faqTitle: "Часто задаваемые вопросы",
    faq: [
      {
        q: "Какой маршрут до Юрмалы?",
        a: "Едем через КПП Урбаны/Патарниеки — Ригу — Юрмалу. Расстояние около 490 км (470 км до Риги плюс 25 км до Юрмалы), время в пути 5,5–7 ч без учёта границы.",
      },
      {
        q: "Нужна ли виза в Латвию?",
        a: "Гражданам Беларуси требуется шенгенская виза. Уточняйте актуальные требования в посольстве Латвии или на официальных сайтах перед поездкой.",
      },
      {
        q: "Можно ли заехать в Ригу по дороге?",
        a: "Да — маршрут проходит через Ригу. Остановка добавляет минимум времени. Договоритесь с менеджером при бронировании.",
      },
      {
        q: "До какого санатория или отеля вы довезёте?",
        a: "До любого. Укажите точный адрес в Юрмале при бронировании — водитель доставит вас прямо ко входу.",
      },
    ],
    ctaTitle: "Заказать трансфер Минск–Юрмала",
    ctaDesc:
      "Оставьте заявку — менеджер свяжется с вами в ближайшее время и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Юрмала",
    backBtn: "← Трансферы в Латвию",
  },
  en: {
    badge: "Jūrmala Transfer",
    title: "Minsk — Jūrmala",
    subtitle:
      "Direct private transfer from Minsk to Jūrmala — the pearl of the Baltic coast. White sand, pine-scented air, ornate Art Nouveau wooden villas and Latvia's finest spa resorts.",
    stats: [
      { label: "Distance", value: "~490 km" },
      { label: "Travel time", value: "5.5–7 hrs" },
      { label: "Border", value: "Belarus–Latvia" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Jūrmala — Highlights",
    photos: [
      {
        src: "/img/jurmala/beach.png",
        caption:
          "Majori Beach — white sand, clean air and pine trees right at the water's edge",
      },
      {
        src: "/img/jurmala/wooden-villas.png",
        caption:
          "Art Nouveau wooden dachas — the architectural signature of Jūrmala",
      },
      {
        src: "/img/jurmala/pine-forest.png",
        caption:
          "Dzintari Forest Park — fragrant pine forest stretching between the beach and the town",
      },
    ],
    howTitle: "How the transfer works",
    steps: [
      {
        icon: MapPin,
        title: "Departure from Minsk",
        desc: "Your driver picks you up at your Minsk address and heads for the Latvian border via the fastest route.",
      },
      {
        icon: ShieldCheck,
        title: "Belarus–Latvia border",
        desc: "Urbany / Pāternieki crossing. Your driver knows current queue conditions and assists at the checkpoint.",
      },
      {
        icon: Building2,
        title: "Jūrmala — any address",
        desc: "We drop you at your sanatorium, beachside hotel, Jomas Street or any other address in the resort.",
      },
    ],
    infoTitle: "Route Details",
    infoRows: [
      { label: "Route", value: "Minsk → Urbany → Riga → Jūrmala" },
      { label: "Distance", value: "~490 km (~470 km to Riga + 25 km)" },
      {
        label: "Border crossing",
        value: "Urbany / Pāternieki (Belarus–Latvia)",
      },
      { label: "Border crossing time", value: "1–6 hrs depending on queues" },
      { label: "Documents required", value: "Schengen visa, valid passport" },
      { label: "Nearest airport", value: "RIX (Riga) — 30 km from Jūrmala" },
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
      "Door-to-door delivery to your sanatorium or hotel in Jūrmala",
      "Experienced drivers on the Minsk–Latvia corridor",
      "Up-to-date knowledge of Urbany border queues",
      "Optional Riga stopover en route — on request",
      "Return transfer Jūrmala → Minsk also available",
      "Available 24/7 including public holidays",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "What is the route to Jūrmala?",
        a: "We go via Urbany/Pāternieki border crossing – Riga – Jūrmala. Total distance is about 490 km (470 km to Riga plus 25 km to Jūrmala), travel time 5.5–7 hours excluding the border stop.",
      },
      {
        q: "Do I need a visa to enter Latvia?",
        a: "Citizens of Belarus require a Schengen visa. Please check the latest requirements with the Latvian embassy or official sources before travelling.",
      },
      {
        q: "Can we stop in Riga on the way?",
        a: "Yes — the route passes through Riga. A stop adds very little extra time. Just let the manager know when booking.",
      },
      {
        q: "Which sanatorium or hotel can you take us to?",
        a: "Any address in Jūrmala. Provide the exact address when booking and your driver will deliver you directly to the entrance.",
      },
    ],
    ctaTitle: "Book Minsk–Jūrmala Transfer",
    ctaDesc:
      "Submit a request and our manager will contact you shortly with an exact price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Jūrmala",
    backBtn: "← Latvia transfers",
  },
  pl: {
    badge: "Transfer do Jurmały",
    title: "Mińsk — Jurmała",
    subtitle:
      "Bezpośredni prywatny transfer z Mińska do Jurmały – perły wybrzeża Bałtyku. Biały piasek, powietrze pachnące sosną, ozdobne drewniane wille w stylu Art Nouveau i najlepsze uzdrowiska na Łotwie.",
    stats: [
      { label: "Odległość", value: "~490 km" },
      { label: "Czas podróży", value: "5,5–7 godz" },
      { label: "Granica", value: "Białoruś – Łotwa" },
      { label: "Klasa pojazdu", value: "Biznes / Minivan" },
    ],
    photosTitle: "Jurmała — najważniejsze wydarzenia",
    photos: [
      {
        src: "/img/jurmala/beach.png",
        caption:
          "Plaża Majori — biały piasek, czyste powietrze i sosny tuż przy brzegu",
      },
      {
        src: "/img/jurmala/wooden-villas.png",
        caption:
          "Drewniane dacze w stylu secesyjnym — architektoniczna sygnatura Jurmały",
      },
      {
        src: "/img/jurmala/pine-forest.png",
        caption:
          "Park Leśny Dzintari — pachnący las sosnowy rozciągający się pomiędzy plażą a miastem",
      },
    ],
    howTitle: "Jak działa transfer",
    steps: [
      {
        icon: MapPin,
        title: "Wyjazd z Mińska",
        desc: "Twój kierowca odbierze Cię pod Twoim adresem w Mińsku i najszybszą trasą uda się do granicy z Łotwą.",
      },
      {
        icon: ShieldCheck,
        title: "Granica białorusko-łotewska",
        desc: "Skrzyżowanie Urbany/Pāternieki. Twój kierowca zna aktualny stan kolejek i pomaga na punkcie kontrolnym.",
      },
      {
        icon: Building2,
        title: "Jurmała — dowolny adres",
        desc: "Podwozimy Cię do Twojego sanatorium, hotelu przy plaży, na ulicę Jomas lub pod inny adres w ośrodku.",
      },
    ],
    infoTitle: "Szczegóły trasy",
    infoRows: [
      { label: "Trasa", value: "Mińsk → Urbany → Ryga → Jurmała" },
      { label: "Odległość", value: "~490 km (~470 km do Rygi + 25 km)" },
      {
        label: "Przejście graniczne",
        value: "Urbany / Pāternieki (Białoruś – Łotwa)",
      },
      {
        label: "Czas przekraczania granicy",
        value: "1–6 godzin w zależności od kolejek",
      },
      { label: "Wymagane dokumenty", value: "Wiza Schengen, ważny paszport" },
      { label: "Najbliższe lotnisko", value: "RIX (Ryga) — 30 km od Jurmały" },
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
      "Dostawa od drzwi do drzwi do Twojego sanatorium lub hotelu w Jurmale",
      "Doświadczeni kierowcy na korytarzu Mińsk – Łotwa",
      "Aktualna wiedza o kolejkach granicznych Urbany",
      "Opcjonalny postój w Rydze na trasie – na życzenie",
      "Dostępny jest również transfer powrotny Jurmała → Mińsk",
      "Dostępność 24 godziny na dobę, 7 dni w tygodniu, także w święta",
    ],
    faqTitle: "Często zadawane pytania",
    faq: [
      {
        q: "Jaka jest trasa do Jurmały?",
        a: "Jedziemy przez przejście graniczne Urbany/Pāternieki – Ryga – Jurmała. Całkowita odległość wynosi około 490 km (470 km do Rygi plus 25 km do Jurmały), czas przejazdu 5,5–7 godzin bez przystanku granicznego.",
      },
      {
        q: "Czy potrzebuję wizy, aby wjechać na Łotwę?",
        a: "Obywatele Białorusi potrzebują wizy Schengen. Przed podróżą sprawdź najnowsze wymagania w ambasadzie Łotwy lub w oficjalnych źródłach.",
      },
      {
        q: "Czy możemy po drodze zatrzymać się w Rydze?",
        a: "Tak – trasa przebiega przez Rygę. Zatrzymanie dodaje bardzo niewiele dodatkowego czasu. Po prostu daj znać menadżerowi podczas dokonywania rezerwacji.",
      },
      {
        q: "Do jakiego sanatorium lub hotelu możesz nas zabrać?",
        a: "Dowolny adres w Jurmale. Podaj dokładny adres podczas dokonywania rezerwacji, a kierowca odwiezie Cię bezpośrednio pod wejście.",
      },
    ],
    ctaTitle: "Zarezerwuj transfer Mińsk – Jurmała",
    ctaDesc:
      "Prześlij zapytanie, a nasz menedżer wkrótce skontaktuje się z Tobą i poda dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Jurmała",
    backBtn: "← Transfery Łotwy",
  },
  fr: {
    badge: "Transfert Jurmala",
    title: "Minsk — Jurmala",
    subtitle:
      "Transfert privé direct de Minsk à Jurmala, la perle de la côte baltique. Sable blanc, air parfumé aux pins, villas en bois Art Nouveau ornées et les plus belles stations thermales de Lettonie.",
    stats: [
      { label: "Distance", value: "~490km" },
      { label: "Temps de trajet", value: "5,5 à 7 heures" },
      { label: "Frontière", value: "Biélorussie-Lettonie" },
      { label: "Classe de véhicule", value: "Affaires / Minifourgonnette" },
    ],
    photosTitle: "Jurmala — Points forts",
    photos: [
      {
        src: "/img/jurmala/beach.png",
        caption: "Majori Beach : sable blanc, air pur et pins au bord de l'eau",
      },
      {
        src: "/img/jurmala/wooden-villas.png",
        caption:
          "Dachas en bois Art Nouveau — la signature architecturale de Jurmala",
      },
      {
        src: "/img/jurmala/pine-forest.png",
        caption:
          "Parc forestier de Dzintari : forêt de pins parfumée s'étendant entre la plage et la ville",
      },
    ],
    howTitle: "Comment fonctionne le transfert",
    steps: [
      {
        icon: MapPin,
        title: "Départ de Minsk",
        desc: "Votre chauffeur vient vous chercher à votre adresse à Minsk et se dirige vers la frontière lettone par l'itinéraire le plus rapide.",
      },
      {
        icon: ShieldCheck,
        title: "Frontière Biélorussie-Lettonie",
        desc: "Traversée Urbany / Pāternieki. Votre chauffeur connaît les conditions actuelles de la file d'attente et vous assiste au point de contrôle.",
      },
      {
        icon: Building2,
        title: "Jurmala — n'importe quelle adresse",
        desc: "Nous vous déposons à votre sanatorium, hôtel en bord de mer, rue Jomas ou à toute autre adresse de la station.",
      },
    ],
    infoTitle: "Détails de l'itinéraire",
    infoRows: [
      { label: "Itinéraire", value: "Minsk → Urbany → Riga → Jurmala" },
      { label: "Distance", value: "~490 km (~470 km jusqu'à Riga + 25 km)" },
      {
        label: "Passage de la frontière",
        value: "Urbany / Pāternieki (Biélorussie-Lettonie)",
      },
      {
        label: "Temps de passage de la frontière",
        value: "1 à 6 heures selon les files d'attente",
      },
      { label: "Documents requis", value: "Visa Schengen, passeport valide" },
      {
        label: "Aéroport le plus proche",
        value: "RIX (Riga) — 30 km de Jurmala",
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
      "Livraison à domicile à votre sanatorium ou hôtel à Jurmala",
      "Chauffeurs expérimentés sur le corridor Minsk-Lettonie",
      "Connaissance à jour des files d'attente aux frontières d'Urbany",
      "Escale facultative à Riga en cours de route — sur demande",
      "Transfert aller-retour Jurmala → Minsk également disponible",
      "Disponible 24h/24 et 7j/7 y compris les jours fériés",
    ],
    faqTitle: "Questions fréquemment posées",
    faq: [
      {
        q: "Quel est l'itinéraire vers Jurmala?",
        a: "Nous passons par le poste frontière d'Urbany/Pāternieki – Riga – Jurmala. La distance totale est d'environ 490 km (470 km jusqu'à Riga plus 25 km jusqu'à Jurmala), temps de trajet de 5,5 à 7 heures sans compter l'arrêt frontalier.",
      },
      {
        q: "Ai-je besoin d’un visa pour entrer en Lettonie ?",
        a: "Les citoyens biélorusses ont besoin d'un visa Schengen. Veuillez vérifier les dernières exigences auprès de l'ambassade de Lettonie ou de sources officielles avant de voyager.",
      },
      {
        q: "Pouvons-nous nous arrêter à Riga en chemin ?",
        a: "Oui, l’itinéraire passe par Riga. Un arrêt ajoute très peu de temps supplémentaire. Il suffit d'en informer le responsable lors de la réservation.",
      },
      {
        q: "Dans quel sanatorium ou hôtel pouvez-vous nous emmener ?",
        a: "N’importe quelle adresse à Jurmala. Fournissez l'adresse exacte lors de la réservation et votre chauffeur vous conduira directement à l'entrée.",
      },
    ],
    ctaTitle: "Réserver un transfert Minsk-Jūrmala",
    ctaDesc:
      "Soumettez une demande et notre responsable vous contactera sous peu avec un prix exact.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Jurmala",
    backBtn: "← Transferts Lettonie",
  },
  seo: {
    titleRu: "Трансфер Минск — Юрмала | Балтийский курорт Латвии | ComfortLine",
    titleEn: "Minsk to Jūrmala Transfer | Latvia's Baltic Resort | ComfortLine",
    descRu:
      "Прямой трансфер из Минска в Юрмалу. ~490 км, 5,5–7 ч. Пляж, сосновый лес, санатории, деревянные дачи. Граница Урбаны–Патарниеки, фиксированная цена.",
    descEn:
      "Direct transfer from Minsk to Jūrmala. ~490 km, 5.5–7 hrs. Baltic beach, pine forest, spas, Art Nouveau dachas. Urbany–Pāternieki border, fixed price.",
    pathRu: "/трансфер-минск-юрмала",
    pathEn: "/minsk-jurmala-transfer",
    breadcrumbRu: "Трансфер Минск–Юрмала",
    breadcrumbEn: "Minsk — Jūrmala",
    fromName: "Минск",
    toName: "Юрмала",
  },
};

export default function MinskJurmalaTransferPage() {
  return <RouteLandingPage data={data} />;
}
