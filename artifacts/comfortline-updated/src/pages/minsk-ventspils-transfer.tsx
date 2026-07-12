import { MapPin, ShieldCheck, Building2 } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Вентспилс",
    title: "Минск — Вентспилс",
    subtitle:
      "Прямой трансфер из Минска в Вентспилс — один из чистейших портовых городов Балтии. Пляж с голубым флагом, рыцарский замок Ливонского ордена и знаменитые синие коровы на каждом углу.",
    stats: [
      { label: "Расстояние", value: "~620 км" },
      { label: "Время в пути", value: "7–9 ч" },
      { label: "Граница", value: "Беларусь–Латвия" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Вентспилс — достопримечательности",
    photos: [
      {
        src: "/img/ventspils/beach.png",
        caption: "Пляж Вентспилса — Голубой флаг и один из чистейших в Латвии",
      },
      {
        src: "/img/ventspils/castle.png",
        caption:
          "Замок Ливонского ордена — один из лучших сохранившихся средневековых замков Латвии",
      },
      {
        src: "/img/ventspils/waterfront.png",
        caption: "Набережная реки Венты — колоритный портовый центр города",
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
        title: "Вентспилс: любой адрес",
        desc: "Довезём до отеля у пляжа, замка, набережной или любого другого адреса в городе.",
      },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      { label: "Маршрут", value: "Минск → Урбаны → Рига → Вентспилс" },
      {
        label: "Расстояние",
        value: "~620 км (~470 км до Риги + ~185 км до Вентспилса)",
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
        value: "RIX (Рига) — 185 км от Вентспилса",
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
      "Прямо до пляжа или замка в Вентспилсе без пересадок",
      "Опытные водители маршрута Минск–Латвия",
      "Знание актуальных очередей на границе Урбаны",
      "Остановка в Риге или Юрмале по пути — по запросу",
      "Обратный трансфер: из Вентспилса в Минск",
      "Работаем 24/7, включая праздники",
    ],
    faqTitle: "Часто задаваемые вопросы",
    faq: [
      {
        q: "Какой маршрут до Вентспилса?",
        a: "Едем через КПП Урбаны/Патарниеки — Ригу — Вентспилс. Расстояние около 620 км (470 км до Риги плюс 185 км до Вентспилса), время в пути 7–9 ч без учёта границы.",
      },
      {
        q: "Нужна ли виза в Латвию?",
        a: "Гражданам Беларуси требуется шенгенская виза. Уточняйте актуальные требования в посольстве Латвии или на официальных сайтах перед поездкой.",
      },
      {
        q: "Что такое «синие коровы» Вентспилса?",
        a: "Вентспилс знаменит арт-проектом «Коровы на пляже»: по всему городу расставлены скульптуры коров, расписанных местными художниками. Это стало визитной карточкой города и любимым символом туристов.",
      },
      {
        q: "Можно ли остановиться в Риге или Юрмале по дороге?",
        a: "Да — маршрут проходит через Ригу. При желании можно заехать в Юрмалу (+25 км от трассы). Договоритесь с менеджером при бронировании.",
      },
    ],
    ctaTitle: "Заказать трансфер Минск–Вентспилс",
    ctaDesc:
      "Оставьте заявку — менеджер свяжется с вами в ближайшее время и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Вентспилс",
    backBtn: "← Трансферы в Латвию",
  },
  en: {
    badge: "Ventspils Transfer",
    title: "Minsk — Ventspils",
    subtitle:
      "Direct private transfer from Minsk to Ventspils — one of the cleanest port cities on the Baltic. A Blue Flag beach, a well-preserved Livonian Order castle and the famous blue cow sculptures scattered across the city.",
    stats: [
      { label: "Distance", value: "~620 km" },
      { label: "Travel time", value: "7–9 hrs" },
      { label: "Border", value: "Belarus–Latvia" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Ventspils — Highlights",
    photos: [
      {
        src: "/img/ventspils/beach.png",
        caption:
          "Ventspils Beach — Blue Flag awarded and one of the cleanest in Latvia",
      },
      {
        src: "/img/ventspils/castle.png",
        caption:
          "Livonian Order Castle — one of the best-preserved medieval castles in Latvia",
      },
      {
        src: "/img/ventspils/waterfront.png",
        caption:
          "Venta riverside waterfront — the colourful heart of this Baltic port city",
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
        title: "Ventspils — any address",
        desc: "We drop you at your beachside hotel, the castle, the waterfront or any other address in the city.",
      },
    ],
    infoTitle: "Route Details",
    infoRows: [
      { label: "Route", value: "Minsk → Urbany → Riga → Ventspils" },
      {
        label: "Distance",
        value: "~620 km (~470 km to Riga + ~185 km to Ventspils)",
      },
      {
        label: "Border crossing",
        value: "Urbany / Pāternieki (Belarus–Latvia)",
      },
      { label: "Border crossing time", value: "1–6 hrs depending on queues" },
      { label: "Documents required", value: "Schengen visa, valid passport" },
      {
        label: "Nearest major airport",
        value: "RIX (Riga) — 185 km from Ventspils",
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
      "Door-to-door delivery to your hotel or the beach in Ventspils",
      "Experienced drivers on the Minsk–Latvia corridor",
      "Up-to-date knowledge of Urbany border queues",
      "Optional Riga or Jūrmala stop en route — on request",
      "Return transfer Ventspils → Minsk also available",
      "Available 24/7 including public holidays",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "What is the route to Ventspils?",
        a: "We go via Urbany/Pāternieki border crossing – Riga – Ventspils. Total distance is about 620 km (470 km to Riga plus 185 km to Ventspils), travel time 7–9 hours excluding the border stop.",
      },
      {
        q: "Do I need a visa to enter Latvia?",
        a: "Citizens of Belarus require a Schengen visa. Please check the latest requirements with the Latvian embassy or official sources before travelling.",
      },
      {
        q: "What are the famous blue cows of Ventspils?",
        a: "Ventspils is famous for its 'Cows on the Beach' art project — colourfully painted cow sculptures placed around the city by local artists. They have become the city's beloved symbol and a favourite photo stop for visitors.",
      },
      {
        q: "Can we stop in Riga or Jūrmala on the way?",
        a: "Yes — the route passes through Riga. You can also add a Jūrmala detour (+25 km off the main route). Just let the manager know when booking.",
      },
    ],
    ctaTitle: "Book Minsk–Ventspils Transfer",
    ctaDesc:
      "Submit a request and our manager will contact you shortly with an exact price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Ventspils",
    backBtn: "← Latvia transfers",
  },
  pl: {
    badge: "Transfer do Ventspils",
    title: "Mińsk — Ventspils",
    subtitle:
      "Bezpośredni prywatny transfer z Mińska do Ventspils — jednego z najczystszych miast portowych nad Bałtykiem. Plaża oznaczona Błękitną Flagą, dobrze zachowany zamek Zakonu Kawalerów Mieczowych i słynne rzeźby niebieskich krów rozsiane po całym mieście.",
    stats: [
      { label: "Odległość", value: "~620 km" },
      { label: "Czas podróży", value: "7–9 godz" },
      { label: "Granica", value: "Białoruś – Łotwa" },
      { label: "Klasa pojazdu", value: "Biznes / Minivan" },
    ],
    photosTitle: "Ventspils — najważniejsze wydarzenia",
    photos: [
      {
        src: "/img/ventspils/beach.png",
        caption:
          "Plaża Ventspils — nagrodzona Błękitną Flagą i jedna z najczystszych na Łotwie",
      },
      {
        src: "/img/ventspils/castle.png",
        caption:
          "Zamek Zakonu Kawalerów Mieczowych — jeden z najlepiej zachowanych średniowiecznych zamków na Łotwie",
      },
      {
        src: "/img/ventspils/waterfront.png",
        caption:
          "Nabrzeże rzeki Venta — kolorowe serce tego bałtyckiego miasta portowego",
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
        title: "Ventspils — dowolny adres",
        desc: "Podwieziemy Cię do hotelu przy plaży, zamku, nabrzeża lub pod dowolny inny adres w mieście.",
      },
    ],
    infoTitle: "Szczegóły trasy",
    infoRows: [
      { label: "Trasa", value: "Mińsk → Urbany → Ryga → Ventspils" },
      {
        label: "Odległość",
        value: "~620 km (~470 km do Rygi + ~185 km do Ventspils)",
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
        value: "RIX (Ryga) — 185 km od Ventspils",
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
      "Dostawa od drzwi do drzwi do Twojego hotelu lub na plażę w Ventspils",
      "Doświadczeni kierowcy na korytarzu Mińsk – Łotwa",
      "Aktualna wiedza o kolejkach granicznych Urbany",
      "Opcjonalny przystanek na trasie w Rydze lub Jurmale – na życzenie",
      "Dostępny jest również transfer powrotny Ventspils → Mińsk",
      "Dostępność 24 godziny na dobę, 7 dni w tygodniu, także w święta",
    ],
    faqTitle: "Często zadawane pytania",
    faq: [
      {
        q: "Jaka jest trasa do Ventspils?",
        a: "Jedziemy przez przejście graniczne Urbany/Pāternieki – Ryga – Ventspils. Całkowita odległość wynosi około 620 km (470 km do Rygi plus 185 km do Ventspils), czas przejazdu 7–9 godzin bez przystanku granicznego.",
      },
      {
        q: "Czy potrzebuję wizy, aby wjechać na Łotwę?",
        a: "Obywatele Białorusi potrzebują wizy Schengen. Przed podróżą sprawdź najnowsze wymagania w ambasadzie Łotwy lub w oficjalnych źródłach.",
      },
      {
        q: "Jakie są słynne niebieskie krowy z Ventspils?",
        a: "Ventspils słynie z projektu artystycznego „Krowy na plaży” — kolorowo pomalowanych rzeźb krów rozmieszczonych w mieście przez lokalnych artystów. Stały się ukochanym symbolem miasta i ulubionym przystankiem na zdjęcia turystów.",
      },
      {
        q: "Czy możemy po drodze zatrzymać się w Rydze lub Jurmale?",
        a: "Tak – trasa przebiega przez Rygę. Można też dodać objazd Jūrmala (+25 km od głównej trasy). Po prostu daj znać menadżerowi podczas dokonywania rezerwacji.",
      },
    ],
    ctaTitle: "Zarezerwuj transfer Mińsk – Windawa",
    ctaDesc:
      "Prześlij zapytanie, a nasz menedżer wkrótce skontaktuje się z Tobą i poda dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Ventspils",
    backBtn: "← Transfery Łotwy",
  },
  fr: {
    badge: "Transfert Ventspils",
    title: "Minsk — Ventspils",
    subtitle:
      "Transfert privé direct de Minsk à Ventspils, l'une des villes portuaires les plus propres de la Baltique. Une plage Pavillon Bleu, un château de l'Ordre de Livonie bien conservé et les célèbres sculptures de vaches bleues disséminées dans la ville.",
    stats: [
      { label: "Distance", value: "~620km" },
      { label: "Temps de trajet", value: "7 à 9 heures" },
      { label: "Frontière", value: "Biélorussie-Lettonie" },
      { label: "Classe de véhicule", value: "Affaires / Minifourgonnette" },
    ],
    photosTitle: "Ventspils — Points forts",
    photos: [
      {
        src: "/img/ventspils/beach.png",
        caption:
          "Plage de Ventspils — Pavillon bleu récompensée et l'une des plus propres de Lettonie",
      },
      {
        src: "/img/ventspils/castle.png",
        caption:
          "Château de l'Ordre de Livonie - l'un des châteaux médiévaux les mieux conservés de Lettonie",
      },
      {
        src: "/img/ventspils/waterfront.png",
        caption:
          "Front de mer au bord de la rivière Venta — le cœur coloré de cette ville portuaire de la Baltique",
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
        title: "Ventspils — n'importe quelle adresse",
        desc: "Nous vous déposons à votre hôtel en bord de mer, au château, au bord de l'eau ou à toute autre adresse de la ville.",
      },
    ],
    infoTitle: "Détails de l'itinéraire",
    infoRows: [
      { label: "Itinéraire", value: "Minsk → Urbany → Riga → Ventspils" },
      {
        label: "Distance",
        value: "~620 km (~470 km jusqu'à Riga + ~185 km jusqu'à Ventspils)",
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
        value: "RIX (Riga) — 185 km de Ventspils",
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
      "Livraison porte-à-porte à votre hôtel ou à la plage de Ventspils",
      "Chauffeurs expérimentés sur le corridor Minsk-Lettonie",
      "Connaissance à jour des files d'attente aux frontières d'Urbany",
      "Arrêt facultatif à Riga ou à Jurmala en route — sur demande",
      "Transfert aller-retour Ventspils → Minsk également disponible",
      "Disponible 24h/24 et 7j/7 y compris les jours fériés",
    ],
    faqTitle: "Questions fréquemment posées",
    faq: [
      {
        q: "Quel est l'itinéraire vers Ventspils?",
        a: "Nous passons par le poste frontière d'Urbany/Pāternieki – Riga – Ventspils. La distance totale est d'environ 620 km (470 km jusqu'à Riga plus 185 km jusqu'à Ventspils), temps de trajet de 7 à 9 heures sans compter l'arrêt frontalier.",
      },
      {
        q: "Ai-je besoin d’un visa pour entrer en Lettonie ?",
        a: "Les citoyens biélorusses ont besoin d'un visa Schengen. Veuillez vérifier les dernières exigences auprès de l'ambassade de Lettonie ou de sources officielles avant de voyager.",
      },
      {
        q: "Quelles sont les fameuses vaches bleues de Ventspils ?",
        a: "Ventspils est célèbre pour son projet artistique « Vaches sur la plage » : des sculptures de vaches peintes de couleurs vives placées dans la ville par des artistes locaux. Ils sont devenus le symbole bien-aimé de la ville et l’arrêt photo préféré des visiteurs.",
      },
      {
        q: "Pouvons-nous nous arrêter à Riga ou à Jurmala en chemin ?",
        a: "Oui, l’itinéraire passe par Riga. Vous pouvez également ajouter un détour par Jurmala (+25 km par rapport à l'itinéraire principal). Il suffit d'en informer le responsable lors de la réservation.",
      },
    ],
    ctaTitle: "Réserver un transfert Minsk-Ventspils",
    ctaDesc:
      "Soumettez une demande et notre responsable vous contactera sous peu avec un prix exact.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Ventspils",
    backBtn: "← Transferts Lettonie",
  },
  seo: {
    titleRu: "Трансфер Минск — Вентспилс | Латвия | ComfortLine",
    titleEn: "Minsk to Ventspils Transfer | Latvia | ComfortLine",
    descRu:
      "Прямой трансфер из Минска в Вентспилс. ~620 км, 7–9 ч. Пляж Голубой флаг, замок Ливонского ордена, синие коровы. Граница Урбаны–Патарниеки, фиксированная цена.",
    descEn:
      "Direct transfer from Minsk to Ventspils. ~620 km, 7–9 hrs. Blue Flag beach, Livonian Order castle, blue cow sculptures. Urbany–Pāternieki border, fixed price.",
    pathRu: "/трансфер-минск-вентспилс",
    pathEn: "/minsk-ventspils-transfer",
    breadcrumbRu: "Трансфер Минск–Вентспилс",
    breadcrumbEn: "Minsk — Ventspils",
    fromName: "Минск",
    toName: "Вентспилс",
  },
};

export default function MinskVentspilsTransferPage() {
  return <RouteLandingPage data={data} />;
}
