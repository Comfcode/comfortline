import { MapPin, ShieldCheck, Landmark } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Вильнюс",
    title: "Минск — Вильнюс",
    subtitle:
      "Прямой трансфер из Минска в столицу Литвы. Один из крупнейших средневековых старых городов Европы, внесённый в список ЮНЕСКО.",
    stats: [
      { label: "Расстояние", value: "~170 км" },
      { label: "Время в пути", value: "2–4 ч" },
      { label: "Граница", value: "Беларусь–Литва" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Вильнюс — достопримечательности",
    photos: [
      {
        src: "/img/vilnius/old-town-aerial.png",
        caption: "Старый город Вильнюса — объект ЮНЕСКО",
      },
      {
        src: "/img/vilnius/cathedral-square.png",
        caption: "Кафедральная площадь — сердце литовской столицы",
      },
      {
        src: "/img/vilnius/gate-of-dawn.png",
        caption: "Ворота Зари (Аушрос Вартай) — главная святыня города",
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
        icon: Landmark,
        title: "Вильнюс: столица и старый город",
        desc: "Довезём до отеля, аэропорта, офиса или любого адреса в Вильнюсе. Возможна дальнейшая поездка в Тракай.",
      },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      { label: "Маршрут", value: "Минск → Молодечно → Медининкай → Вильнюс" },
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
      {
        label: "Аэропорт Вильнюса",
        value: "VNO — 10 км от центра города (15 мин)",
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
      "Опытные водители маршрута Минск–Вильнюс",
      "Знание актуальных очередей на границе",
      "Возможна поездка в Тракай по дороге или после",
      "Обратный трансфер: из Вильнюса в Минск",
      "Работаем 24/7, включая праздники",
      "Перевозим с детьми и питомцами",
    ],
    faqTitle: "Часто задаваемые вопросы",
    faq: [
      {
        q: "Какой маршрут до Вильнюса?",
        a: "Едем через Молодечно — Ошмяны — КПП Медининкай/Шальчининкай — Вильнюс. Расстояние около 170 км, время в пути 2–4 ч без учёта границы.",
      },
      {
        q: "Нужна ли виза в Литву?",
        a: "Гражданам Беларуси требуется шенгенская виза или национальная виза Литовской Республики. Уточняйте актуальные требования в посольстве или на официальных сайтах.",
      },
      {
        q: "Можно ли заехать в Тракай по дороге?",
        a: "Да — Тракай находится в 28 км от Вильнюса. Мы можем сделать остановку или завезти вас сначала в Тракай, а затем в Вильнюс. Договоритесь с менеджером при бронировании.",
      },
      {
        q: "Чем отличается этот трансфер от трансфера в аэропорт Вильнюса?",
        a: "Мы довезём вас до любого адреса в центре Вильнюса, а не только до аэропорта. Если вам нужен именно аэропорт — воспользуйтесь нашим трансфером Минск–аэропорт Вильнюса (VNO).",
      },
    ],
    ctaTitle: "Заказать трансфер Минск–Вильнюс",
    ctaDesc:
      "Оставьте заявку — менеджер свяжется с вами в ближайшее время и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Вильнюс",
    backBtn: "← Трансферы в Литву",
  },
  en: {
    badge: "Vilnius Transfer",
    title: "Minsk — Vilnius",
    subtitle:
      "Direct private transfer from Minsk to the capital of Lithuania — home to one of Europe's largest and best-preserved medieval old towns, a UNESCO World Heritage Site.",
    stats: [
      { label: "Distance", value: "~170 km" },
      { label: "Travel time", value: "2–4 hrs" },
      { label: "Border", value: "Belarus–Lithuania" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Vilnius — Highlights",
    photos: [
      {
        src: "/img/vilnius/old-town-aerial.png",
        caption: "Vilnius Old Town — UNESCO World Heritage Site",
      },
      {
        src: "/img/vilnius/cathedral-square.png",
        caption: "Cathedral Square — the heart of the Lithuanian capital",
      },
      {
        src: "/img/vilnius/gate-of-dawn.png",
        caption:
          "Gate of Dawn (Aušros Vartai) — the city's most sacred landmark",
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
        icon: Landmark,
        title: "Vilnius — capital & old town",
        desc: "We drop you at your hotel, office, Vilnius Airport or any address. A Trakai side trip on the way is also easy to arrange.",
      },
    ],
    infoTitle: "Route Details",
    infoRows: [
      { label: "Route", value: "Minsk → Maladzyechna → Medininkai → Vilnius" },
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
      {
        label: "Vilnius Airport",
        value: "VNO — 10 km from the city centre (15 min)",
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
      "Experienced drivers on the Minsk–Vilnius route",
      "Up-to-date knowledge of border queue conditions",
      "Optional Trakai stopover — 28 km from Vilnius",
      "Return transfer Vilnius → Minsk also available",
      "Available 24/7 including public holidays",
      "Kids and pets welcome",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "What is the route to Vilnius?",
        a: "We go via Maladzyechna – Ashmyany – Medininkai/Šalčininkai border crossing – Vilnius. Total distance is about 170 km, travel time 2–4 hours excluding the border stop.",
      },
      {
        q: "Do I need a visa to enter Lithuania?",
        a: "Citizens of Belarus require a Schengen visa or a Lithuanian national visa. Please check the latest requirements with the embassy or official sources before travelling.",
      },
      {
        q: "Can we stop at Trakai on the way?",
        a: "Yes — Trakai is just 28 km from Vilnius. We can stop there first or arrange it as a side trip. Let the manager know when booking.",
      },
      {
        q: "How is this different from the Vilnius Airport transfer?",
        a: "This transfer takes you to any address in Vilnius city centre, not just the airport. If you specifically need the airport, see our Minsk to Vilnius Airport (VNO) transfer instead.",
      },
    ],
    ctaTitle: "Book Minsk–Vilnius Transfer",
    ctaDesc:
      "Submit a request and our manager will contact you shortly with an exact price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Vilnius",
    backBtn: "← Lithuania transfers",
  },
  pl: {
    badge: "Transfer Wilna",
    title: "Mińsk — Wilno",
    subtitle:
      "Bezpośredni prywatny transfer z Mińska do stolicy Litwy – gdzie znajduje się jedno z największych i najlepiej zachowanych średniowiecznych starych miast w Europie, wpisane na Listę Światowego Dziedzictwa UNESCO.",
    stats: [
      { label: "Odległość", value: "~170 km" },
      { label: "Czas podróży", value: "2–4 godz" },
      { label: "Granica", value: "Białoruś – Litwa" },
      { label: "Klasa pojazdu", value: "Biznes / Minivan" },
    ],
    photosTitle: "Wilno — najważniejsze wydarzenia",
    photos: [
      {
        src: "/img/vilnius/old-town-aerial.png",
        caption:
          "Stare Miasto w Wilnie – wpisane na Listę Światowego Dziedzictwa UNESCO",
      },
      {
        src: "/img/vilnius/cathedral-square.png",
        caption: "Plac Katedralny — serce stolicy Litwy",
      },
      {
        src: "/img/vilnius/gate-of-dawn.png",
        caption: "Ostra Brama (Aušros Vartai) — najświętszy zabytek miasta",
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
        icon: Landmark,
        title: "Wilno — stolica i stare miasto",
        desc: "Podwieziemy Cię do Twojego hotelu, biura, na lotnisko w Wilnie lub pod dowolny adres. Łatwo jest także zorganizować po drodze wycieczkę do Trok.",
      },
    ],
    infoTitle: "Szczegóły trasy",
    infoRows: [
      { label: "Trasa", value: "Mińsk → Mołodeczna → Medininkai → Wilno" },
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
      {
        label: "Lotnisko w Wilnie",
        value: "VNO — 10 km od centrum miasta (15 min)",
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
      "Doświadczeni kierowcy na trasie Mińsk – Wilno",
      "Aktualna wiedza o warunkach kolejek granicznych",
      "Opcjonalny przystanek w Trokach — 28 km od Wilna",
      "Dostępny jest również transfer powrotny Wilno → Mińsk",
      "Dostępność 24 godziny na dobę, 7 dni w tygodniu, także w święta",
      "Dzieci i zwierzęta mile widziane",
    ],
    faqTitle: "Często zadawane pytania",
    faq: [
      {
        q: "Jaka jest trasa do Wilna?",
        a: "Jedziemy przez Mołodechnę – Oszmiany – Medininkai/Salčininkai – przejście graniczne – Wilno. Całkowita odległość wynosi około 170 km, czas przejazdu 2–4 godziny bez przystanku granicznego.",
      },
      {
        q: "Czy potrzebuję wizy, aby wjechać na Litwę?",
        a: "Obywatele Białorusi potrzebują wizy Schengen lub litewskiej wizy krajowej. Przed podróżą sprawdź najnowsze wymagania w ambasadzie lub w oficjalnych źródłach.",
      },
      {
        q: "Czy możemy po drodze zatrzymać się w Trokach?",
        a: "Tak — Troki leżą zaledwie 28 km od Wilna. Możemy się tam najpierw zatrzymać lub zorganizować wycieczkę poboczną. Poinformuj menadżera podczas dokonywania rezerwacji.",
      },
      {
        q: "Czym to się różni od transferu na lotnisko w Wilnie?",
        a: "Ten transfer zabierze Cię pod dowolny adres w centrum Wilna, nie tylko na lotnisko. Jeśli szczególnie potrzebujesz lotniska, skorzystaj z naszego transferu z Mińska na lotnisko w Wilnie (VNO).",
      },
    ],
    ctaTitle: "Zarezerwuj transfer Mińsk – Wilno",
    ctaDesc:
      "Prześlij zapytanie, a nasz menedżer wkrótce skontaktuje się z Tobą i poda dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Wilno",
    backBtn: "← Litwa transfery",
  },
  fr: {
    badge: "Transfert Vilnius",
    title: "Minsk — Vilnius",
    subtitle:
      "Transfert privé direct de Minsk à la capitale de la Lituanie, qui abrite l'une des vieilles villes médiévales les plus grandes et les mieux préservées d'Europe, classée au patrimoine mondial de l'UNESCO.",
    stats: [
      { label: "Distance", value: "~170km" },
      { label: "Temps de trajet", value: "2 à 4 heures" },
      { label: "Frontière", value: "Biélorussie-Lituanie" },
      { label: "Classe de véhicule", value: "Affaires / Minifourgonnette" },
    ],
    photosTitle: "Vilnius — Points forts",
    photos: [
      {
        src: "/img/vilnius/old-town-aerial.png",
        caption:
          "Vieille ville de Vilnius – Site du patrimoine mondial de l'UNESCO",
      },
      {
        src: "/img/vilnius/cathedral-square.png",
        caption: "Place de la Cathédrale – le cœur de la capitale lituanienne",
      },
      {
        src: "/img/vilnius/gate-of-dawn.png",
        caption:
          "Porte de l'Aube (Aušros Vartai) — le monument le plus sacré de la ville",
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
        icon: Landmark,
        title: "Vilnius – capitale et vieille ville",
        desc: "Nous vous déposons à votre hôtel, bureau, aéroport de Vilnius ou à n'importe quelle adresse. Un détour par Trakai sur le chemin est également facile à organiser.",
      },
    ],
    infoTitle: "Détails de l'itinéraire",
    infoRows: [
      {
        label: "Itinéraire",
        value: "Minsk → Maladetchna → Medininkai → Vilnius",
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
      {
        label: "Aéroport de Vilnius",
        value: "VNO — 10 km du centre ville (15 min)",
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
      "Chauffeurs expérimentés sur la route Minsk-Vilnius",
      "Connaissance à jour des conditions de file d'attente aux frontières",
      "Escale facultative à Trakai — 28 km de Vilnius",
      "Transfert aller-retour Vilnius → Minsk également disponible",
      "Disponible 24h/24 et 7j/7 y compris les jours fériés",
      "Enfants et animaux bienvenus",
    ],
    faqTitle: "Questions fréquemment posées",
    faq: [
      {
        q: "Quel est l'itinéraire vers Vilnius?",
        a: "Nous passons par Maladzyechna – Ashmyany – Poste frontière Medininkai/Šalčininkai – Vilnius. La distance totale est d'environ 170 km, temps de trajet de 2 à 4 heures sans compter l'arrêt frontalier.",
      },
      {
        q: "Ai-je besoin d’un visa pour entrer en Lituanie ?",
        a: "Les citoyens biélorusses ont besoin d'un visa Schengen ou d'un visa national lituanien. Veuillez vérifier les dernières exigences auprès de l'ambassade ou des sources officielles avant de voyager.",
      },
      {
        q: "Pouvons-nous nous arrêter à Trakai en chemin ?",
        a: "Oui, Trakai se trouve à seulement 28 km de Vilnius. Nous pouvons nous y arrêter d’abord ou l’organiser comme un détour. Informez le responsable lors de la réservation.",
      },
      {
        q: "En quoi est-ce différent du transfert de l'aéroport de Vilnius ?",
        a: "Ce transfert vous emmène à n'importe quelle adresse du centre-ville de Vilnius, pas seulement à l'aéroport. Si vous avez spécifiquement besoin de l'aéroport, consultez plutôt notre transfert de Minsk à l'aéroport de Vilnius (VNO).",
      },
    ],
    ctaTitle: "Réserver un transfert Minsk-Vilnius",
    ctaDesc:
      "Soumettez une demande et notre responsable vous contactera sous peu avec un prix exact.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Vilnius",
    backBtn: "← Transferts Lituanie",
  },
  seo: {
    titleRu: "Такси Минск — Вильнюс | ComfortLine",
    titleEn: "Minsk to Vilnius Private Transfer | ComfortLine",
    descRu:
      "Частный трансфер Минск — Вильнюс: 170 км, фиксированная цена, подача от двери и помощь на границе Беларусь — Литва.",
    descEn:
      "Private Minsk to Vilnius transfer: 170 km, fixed fare, door-to-door pickup and assistance at the Belarus–Lithuania border.",
    pathRu: "/трансфер-минск-вильнюс",
    pathEn: "/minsk-vilnius-transfer",
    breadcrumbRu: "Трансфер Минск–Вильнюс",
    breadcrumbEn: "Minsk — Vilnius",
    fromName: "Минск",
    toName: "Вильнюс",
  },
};

export default function MinskVilniusTransferPage() {
  return <RouteLandingPage data={data} />;
}
