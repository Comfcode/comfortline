import { MapPin, ShieldCheck, Building2 } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Лиепаю",
    title: "Минск — Лиепая",
    subtitle:
      "Прямой трансфер из Минска в Лиепаю — «Город ветров» на Балтийском побережье. Широкий песчаный пляж, военный квартал Карроста с имперской архитектурой и один из лучших органов Европы в Соборе Святой Троицы.",
    stats: [
      { label: "Расстояние", value: "~650 км" },
      { label: "Время в пути", value: "7–9 ч" },
      { label: "Граница", value: "Беларусь–Латвия" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Лиепая — достопримечательности",
    photos: [
      {
        src: "/img/liepaja/beach.png",
        caption:
          "Лиепайский пляж — один из лучших на Балтийском побережье Латвии",
      },
      {
        src: "/img/liepaja/karosta.png",
        caption:
          "Кароста — бывший военно-морской порт с Морским собором Святого Николая",
      },
      {
        src: "/img/liepaja/old-town.png",
        caption: "Исторический центр Лиепаи с барочным Собором Святой Троицы",
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
        title: "Лиепая: любой адрес",
        desc: "Довезём до отеля у пляжа, исторического центра, квартала Кароста или любого другого адреса в городе.",
      },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      { label: "Маршрут", value: "Минск → Урбаны → Рига → Лиепая" },
      {
        label: "Расстояние",
        value: "~650 км (~470 км до Риги + ~180 км до Лиепаи)",
      },
      {
        label: "Пограничный переход",
        value: "Урбаны / Патарниеки (Беларусь–Латвия)",
      },
      {
        label: "Время пересечения границы",
        value: "1–6 ч в зависимости от очереди",
      },
      { label: "Необходимые документы", value: "Виза Шенген, загранпаспорт" },
      {
        label: "Ближайший крупный аэропорт",
        value: "RIX (Рига) — 180 км от Лиепаи",
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
      "Прямо до отеля или пляжа в Лиепае без пересадок",
      "Опытные водители маршрута Минск–Латвия",
      "Знание актуальных очередей на границе Урбаны",
      "Остановка в Риге или Юрмале по пути — по запросу",
      "Обратный трансфер: из Лиепаи в Минск",
      "Работаем 24/7, включая праздники",
    ],
    faqTitle: "Часто задаваемые вопросы",
    faq: [
      {
        q: "Какой маршрут до Лиепаи?",
        a: "Едем через КПП Урбаны/Патарниеки — Ригу — Лиепаю. Расстояние около 650 км (470 км до Риги плюс 180 км до Лиепаи), время в пути 7–9 ч без учёта границы.",
      },
      {
        q: "Нужна ли виза в Латвию?",
        a: "Гражданам Беларуси требуется шенгенская виза. Уточняйте актуальные требования в посольстве Латвии или на официальных сайтах перед поездкой.",
      },
      {
        q: "Что такое Кароста?",
        a: "Кароста — уникальный военный район Лиепаи, построенный в конце XIX века по приказу российского императора Александра III. Здесь расположен Морской собор Святого Николая в неовизантийском стиле, военные казармы и укрепления. Сейчас это историческая достопримечательность с экскурсиями.",
      },
      {
        q: "Можно ли остановиться в Риге или Юрмале по дороге?",
        a: "Да — маршрут проходит через Ригу. При желании можно сделать остановку в Риге или заехать в Юрмалу (+25 км от трассы). Договоритесь с менеджером при бронировании.",
      },
    ],
    ctaTitle: "Заказать трансфер Минск–Лиепая",
    ctaDesc:
      "Оставьте заявку — менеджер свяжется с вами в ближайшее время и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Лиепая",
    backBtn: "← Трансферы в Латвию",
  },
  en: {
    badge: "Liepāja Transfer",
    title: "Minsk — Liepāja",
    subtitle:
      "Direct private transfer from Minsk to Liepāja — the \"City of Wind\" on the Baltic coast. A wide sandy beach, the imperial Karosta military district and one of Europe's finest organs inside St Trinity Cathedral.",
    stats: [
      { label: "Distance", value: "~650 km" },
      { label: "Travel time", value: "7–9 hrs" },
      { label: "Border", value: "Belarus–Latvia" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Liepāja — Highlights",
    photos: [
      {
        src: "/img/liepaja/beach.png",
        caption:
          "Liepāja Beach — one of the finest stretches of sand on Latvia's Baltic coast",
      },
      {
        src: "/img/liepaja/karosta.png",
        caption:
          "Karosta — the former Imperial naval port with the St Nicholas Naval Cathedral",
      },
      {
        src: "/img/liepaja/old-town.png",
        caption:
          "Liepāja's historic centre with the Baroque St Trinity Cathedral",
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
        title: "Liepāja — any address",
        desc: "We drop you at your beachside hotel, the historic centre, Karosta or any other address in the city.",
      },
    ],
    infoTitle: "Route Details",
    infoRows: [
      { label: "Route", value: "Minsk → Urbany → Riga → Liepāja" },
      {
        label: "Distance",
        value: "~650 km (~470 km to Riga + ~180 km to Liepāja)",
      },
      {
        label: "Border crossing",
        value: "Urbany / Pāternieki (Belarus–Latvia)",
      },
      { label: "Border crossing time", value: "1–6 hrs depending on queues" },
      { label: "Documents required", value: "Schengen visa, valid passport" },
      {
        label: "Nearest major airport",
        value: "RIX (Riga) — 180 km from Liepāja",
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
      "Door-to-door delivery to your hotel or the beach in Liepāja",
      "Experienced drivers on the Minsk–Latvia corridor",
      "Up-to-date knowledge of Urbany border queues",
      "Optional Riga or Jūrmala stop en route — on request",
      "Return transfer Liepāja → Minsk also available",
      "Available 24/7 including public holidays",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "What is the route to Liepāja?",
        a: "We go via Urbany/Pāternieki border crossing – Riga – Liepāja. Total distance is about 650 km (470 km to Riga plus 180 km to Liepāja), travel time 7–9 hours excluding the border stop.",
      },
      {
        q: "Do I need a visa to enter Latvia?",
        a: "Citizens of Belarus require a Schengen visa. Please check the latest requirements with the Latvian embassy or official sources before travelling.",
      },
      {
        q: "What is Karosta?",
        a: "Karosta is a unique military district built on the orders of Tsar Alexander III in the late 19th century. Its centrepiece is the ornate Neo-Byzantine St Nicholas Naval Cathedral. Today it is a fascinating heritage site offering guided tours of the barracks and fortifications.",
      },
      {
        q: "Can we stop in Riga or Jūrmala on the way?",
        a: "Yes — the route passes through Riga. You can also add a Jūrmala detour (+25 km off the main route). Just let the manager know when booking.",
      },
    ],
    ctaTitle: "Book Minsk–Liepāja Transfer",
    ctaDesc:
      "Submit a request and our manager will contact you shortly with an exact price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Liepāja",
    backBtn: "← Latvia transfers",
  },
  pl: {
    badge: "Transfer do Lipawy",
    title: "Mińsk — Lipawa",
    subtitle:
      "Bezpośredni prywatny transfer z Mińska do Lipawy – „Miasta Wiatru” na wybrzeżu Bałtyku. Szeroka piaszczysta plaża, cesarska dzielnica wojskowa Karosta i jedne z najpiękniejszych organów w Europie w Katedrze Św. Trójcy.",
    stats: [
      { label: "Odległość", value: "~650 km" },
      { label: "Czas podróży", value: "7–9 godz" },
      { label: "Granica", value: "Białoruś – Łotwa" },
      { label: "Klasa pojazdu", value: "Biznes / Minivan" },
    ],
    photosTitle: "Lipawa — najważniejsze atrakcje",
    photos: [
      {
        src: "/img/liepaja/beach.png",
        caption:
          "Plaża Liepāja — jeden z najpiękniejszych odcinków piasku na łotewskim wybrzeżu Bałtyku",
      },
      {
        src: "/img/liepaja/karosta.png",
        caption:
          "Karosta – dawny cesarski port morski z Katedrą Marynarki Wojennej św. Mikołaja",
      },
      {
        src: "/img/liepaja/old-town.png",
        caption: "Historyczne centrum Lipawy z barokową katedrą św. Trójcy",
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
        title: "Lipawa – dowolny adres",
        desc: "Podwieziemy Cię do hotelu przy plaży, do zabytkowego centrum miasta, Karosta lub pod dowolny inny adres w mieście.",
      },
    ],
    infoTitle: "Szczegóły trasy",
    infoRows: [
      { label: "Trasa", value: "Mińsk → Urbany → Ryga → Lipawa" },
      {
        label: "Odległość",
        value: "~650 km (~470 km do Rygi + ~180 km do Lipawy)",
      },
      {
        label: "Przejście graniczne",
        value: "Urbany / Pāternieki (Białoruś – Łotwa)",
      },
      {
        label: "Czas przekraczania granicy",
        value: "1–6 godzin w zależności od kolejek",
      },
      { label: "Wymagane dokumenty", value: "Wiza Schengen, ważny paszport" },
      {
        label: "Najbliższe duże lotnisko",
        value: "RIX (Ryga) — 180 km od Lipawy",
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
      "Dostawa od drzwi do drzwi do Twojego hotelu lub na plażę w Lipawie",
      "Doświadczeni kierowcy na korytarzu Mińsk – Łotwa",
      "Aktualna wiedza o kolejkach granicznych Urbany",
      "Opcjonalny przystanek na trasie w Rydze lub Jurmale – na życzenie",
      "Dostępny jest również transfer powrotny Lipawa → Mińsk",
      "Dostępność 24 godziny na dobę, 7 dni w tygodniu, także w święta",
    ],
    faqTitle: "Często zadawane pytania",
    faq: [
      {
        q: "Jaka jest trasa do Lipawy?",
        a: "Jedziemy przez przejście graniczne Urbany/Pāternieki – Ryga – Lipawa. Całkowita odległość wynosi około 650 km (470 km do Rygi plus 180 km do Lipawy), czas podróży 7–9 godzin bez przystanku granicznego.",
      },
      {
        q: "Czy potrzebuję wizy, aby wjechać na Łotwę?",
        a: "Obywatele Białorusi potrzebują wizy Schengen. Przed podróżą sprawdź najnowsze wymagania w ambasadzie Łotwy lub w oficjalnych źródłach.",
      },
      {
        q: "Co to jest Karosta?",
        a: "Karosta to wyjątkowa dzielnica wojskowa zbudowana na rozkaz cara Aleksandra III pod koniec XIX wieku. Jego centralnym punktem jest bogato zdobiona neobizantyjska Katedra Marynarki Wojennej św. Mikołaja. Dziś jest to fascynujący obiekt dziedzictwa kulturowego, oferujący wycieczki z przewodnikiem po koszarach i fortyfikacjach.",
      },
      {
        q: "Czy możemy po drodze zatrzymać się w Rydze lub Jurmale?",
        a: "Tak – trasa przebiega przez Rygę. Można też dodać objazd Jūrmala (+25 km od głównej trasy). Po prostu daj znać menadżerowi podczas dokonywania rezerwacji.",
      },
    ],
    ctaTitle: "Zarezerwuj transfer Mińsk–Liepāja",
    ctaDesc:
      "Prześlij zapytanie, a nasz menedżer wkrótce skontaktuje się z Tobą i poda dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Lipawa",
    backBtn: "← Transfery Łotwy",
  },
  fr: {
    badge: "Transfert Liepaja",
    title: "Minsk — Liepaja",
    subtitle:
      "Transfert privé direct de Minsk à Liepāja — la « Ville du vent » sur la côte baltique. Une large plage de sable, le district militaire impérial du Karosta et l'un des plus beaux orgues d'Europe à l'intérieur de la cathédrale Sainte-Trinité.",
    stats: [
      { label: "Distance", value: "~650km" },
      { label: "Temps de trajet", value: "7 à 9 heures" },
      { label: "Frontière", value: "Biélorussie-Lettonie" },
      { label: "Classe de véhicule", value: "Affaires / Minifourgonnette" },
    ],
    photosTitle: "Liepaja — Points forts",
    photos: [
      {
        src: "/img/liepaja/beach.png",
        caption:
          "Plage de Liepāja — l'une des plus belles étendues de sable de la côte baltique de Lettonie",
      },
      {
        src: "/img/liepaja/karosta.png",
        caption:
          "Karosta - l'ancien port naval impérial avec la cathédrale navale de Saint-Nicolas",
      },
      {
        src: "/img/liepaja/old-town.png",
        caption:
          "Le centre historique de Liepāja avec la cathédrale baroque Sainte-Trinité",
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
        title: "Liepaja — n'importe quelle adresse",
        desc: "Nous vous déposons à votre hôtel en bord de mer, au centre historique, à Karosta ou à toute autre adresse de la ville.",
      },
    ],
    infoTitle: "Détails de l'itinéraire",
    infoRows: [
      { label: "Itinéraire", value: "Minsk → Urbany → Riga → Liepaja" },
      {
        label: "Distance",
        value: "~650 km (~470 km jusqu'à Riga + ~180 km jusqu'à Liepāja)",
      },
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
        label: "Aéroport majeur le plus proche",
        value: "RIX (Riga) — 180 km de Liepaja",
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
      "Livraison à domicile à votre hôtel ou à la plage à Liepāja",
      "Chauffeurs expérimentés sur le corridor Minsk-Lettonie",
      "Connaissance à jour des files d'attente aux frontières d'Urbany",
      "Arrêt facultatif à Riga ou à Jurmala en route — sur demande",
      "Transfert aller-retour Liepāja → Minsk également disponible",
      "Disponible 24h/24 et 7j/7 y compris les jours fériés",
    ],
    faqTitle: "Questions fréquemment posées",
    faq: [
      {
        q: "Quel est l'itinéraire pour rejoindre Liepāja?",
        a: "Nous passons par le poste frontière d'Urbany/Pāternieki – Riga – Liepāja. La distance totale est d'environ 650 km (470 km jusqu'à Riga plus 180 km jusqu'à Liepāja), temps de trajet de 7 à 9 heures sans compter l'arrêt frontalier.",
      },
      {
        q: "Ai-je besoin d’un visa pour entrer en Lettonie ?",
        a: "Les citoyens biélorusses ont besoin d'un visa Schengen. Veuillez vérifier les dernières exigences auprès de l'ambassade de Lettonie ou de sources officielles avant de voyager.",
      },
      {
        q: "Qu’est-ce que Karosta ?",
        a: "Karosta est un district militaire unique construit sur ordre du tsar Alexandre III à la fin du XIXe siècle. Sa pièce maîtresse est la cathédrale navale néo-byzantine Saint-Nicolas. C'est aujourd'hui un site patrimonial passionnant proposant des visites guidées de la caserne et des fortifications.",
      },
      {
        q: "Pouvons-nous nous arrêter à Riga ou à Jurmala en chemin ?",
        a: "Oui, l’itinéraire passe par Riga. Vous pouvez également ajouter un détour par Jurmala (+25 km par rapport à l'itinéraire principal). Il suffit d'en informer le responsable lors de la réservation.",
      },
    ],
    ctaTitle: "Réserver un transfert Minsk-Liepāja",
    ctaDesc:
      "Soumettez une demande et notre responsable vous contactera sous peu avec un prix exact.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Liepaja",
    backBtn: "← Transferts Lettonie",
  },
  seo: {
    titleRu: "Трансфер Минск — Лиепая | Город ветров Латвии | ComfortLine",
    titleEn: "Minsk to Liepāja Transfer | Latvia's City of Wind | ComfortLine",
    descRu:
      "Прямой трансфер из Минска в Лиепаю. ~650 км, 7–9 ч. Пляж, Кароста, орган Святой Троицы. Граница Урбаны–Патарниеки, фиксированная цена.",
    descEn:
      "Direct transfer from Minsk to Liepāja. ~650 km, 7–9 hrs. Baltic beach, Karosta, St Trinity organ. Urbany–Pāternieki border, fixed price.",
    pathRu: "/трансфер-минск-лиепая",
    pathEn: "/minsk-liepaja-transfer",
    breadcrumbRu: "Трансфер Минск–Лиепая",
    breadcrumbEn: "Minsk — Liepāja",
    fromName: "Минск",
    toName: "Лиепая",
  },
};

export default function MinskLiepajaTransferPage() {
  return <RouteLandingPage data={data} />;
}
