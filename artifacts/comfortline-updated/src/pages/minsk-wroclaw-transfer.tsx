import { MapPin, ShieldCheck, Building2 } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер во Вроцлав",
    title: "Минск — Вроцлав",
    subtitle:
      "Прямой трансфер из Минска во Вроцлав — «город мостов» и гномов. Крупнейшая рыночная площадь Польши, остров Тумский и более 100 мостов через Одер.",
    stats: [
      { label: "Расстояние", value: "~850 км" },
      { label: "Время в пути", value: "9–12 ч" },
      { label: "Граница", value: "Беларусь–Польша" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Вроцлав — достопримечательности",
    photos: [
      {
        src: "/img/wroclaw/market-square.png",
        caption: "Рыночная площадь (Rynek) — одна из крупнейших в Европе",
      },
      {
        src: "/img/wroclaw/cathedral-island.png",
        caption: "Остров Тумский (Ostrów Tumski) — самая старая часть города",
      },
      {
        src: "/img/wroclaw/oder-bridges.png",
        caption: "Мосты через Одер — Вроцлав называют «польской Венецией»",
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
        title: "Вроцлав: любой адрес",
        desc: "Довезём до отеля у Рыночной площади, аэропорта WRO или любого другого адреса в городе.",
      },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      {
        label: "Маршрут",
        value: "Минск → Брест → Тересполь → Варшава → Вроцлав",
      },
      { label: "Расстояние", value: "~850 км" },
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
        label: "Аэропорт Вроцлава",
        value: "WRO (им. Николая Коперника) — 10 км от центра",
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
      "Возможна остановка в Варшаве или Лодзи по дороге",
      "Обратный трансфер: из Вроцлава в Минск",
      "Работаем 24/7, включая праздники",
      "Перевозим с детьми и питомцами",
    ],
    faqTitle: "Часто задаваемые вопросы",
    faq: [
      {
        q: "Какой маршрут до Вроцлава?",
        a: "Едем через Брест — КПП Брузги/Кузница или Берёза/Половцы — Варшаву — Вроцлав. Расстояние около 850 км, время в пути 9–12 ч без учёта границы.",
      },
      {
        q: "Нужна ли виза в Польшу?",
        a: "Гражданам Беларуси требуется шенгенская виза. Уточняйте актуальные требования в посольстве Польши или на официальных сайтах перед поездкой.",
      },
      {
        q: "Можно ли заехать в Варшаву по дороге?",
        a: "Да, возможна остановка в Варшаве. Маршрут проходит через польскую столицу, поэтому остановка почти не удлиняет поездку. Договоритесь с менеджером при бронировании.",
      },
      {
        q: "Можно ли добраться до аэропорта Вроцлава WRO?",
        a: "Да, аэропорт Николая Коперника (WRO) находится в 10 км от центра. Укажите при бронировании — довезём прямо к терминалу.",
      },
    ],
    ctaTitle: "Заказать трансфер Минск–Вроцлав",
    ctaDesc:
      "Оставьте заявку — менеджер свяжется с вами в ближайшее время и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Вроцлав",
    backBtn: "← Трансферы в Польшу",
  },
  en: {
    badge: "Wrocław Transfer",
    title: "Minsk — Wrocław",
    subtitle:
      "Direct private transfer from Minsk to Wrocław — Poland's city of bridges and dwarfs. One of Europe's largest market squares, Cathedral Island and over 100 bridges across the Oder.",
    stats: [
      { label: "Distance", value: "~850 km" },
      { label: "Travel time", value: "9–12 hrs" },
      { label: "Border", value: "Belarus–Poland" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Wrocław — Highlights",
    photos: [
      {
        src: "/img/wroclaw/market-square.png",
        caption: "Rynek (Market Square) — one of the largest in Europe",
      },
      {
        src: "/img/wroclaw/cathedral-island.png",
        caption:
          "Cathedral Island (Ostrów Tumski) — the oldest part of the city",
      },
      {
        src: "/img/wroclaw/oder-bridges.png",
        caption:
          "Oder bridges — Wrocław is often called the 'Venice of Poland'",
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
        title: "Wrocław — any address",
        desc: "We drop you at your hotel near the Market Square, Wrocław Airport (WRO) or any other address in the city.",
      },
    ],
    infoTitle: "Route Details",
    infoRows: [
      { label: "Route", value: "Minsk → Brest → Terespol → Warsaw → Wrocław" },
      { label: "Distance", value: "~850 km" },
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
        label: "Wrocław Airport",
        value: "WRO (Nicolaus Copernicus Airport) — 10 km from the centre",
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
      "Optional Warsaw or Łódź stopover en route",
      "Return transfer Wrocław → Minsk also available",
      "Available 24/7 including public holidays",
      "Kids and pets welcome",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "What is the route to Wrocław?",
        a: "We go via Brest – Bruzgi/Kuźnica or Berёza/Połowce border crossing – Warsaw – Wrocław. Total distance is about 850 km, travel time 9–12 hours excluding the border stop.",
      },
      {
        q: "Do I need a visa to enter Poland?",
        a: "Citizens of Belarus require a Schengen visa. Please check the latest requirements with the Polish embassy or official sources before travelling.",
      },
      {
        q: "Can we stop in Warsaw on the way?",
        a: "Yes — the route passes through Warsaw, so a stop adds almost no extra distance. Let the manager know when booking.",
      },
      {
        q: "Can you drop me at Wrocław Airport (WRO)?",
        a: "Yes — Nicolaus Copernicus Airport is 10 km from the city centre. Just mention it when booking and we'll take you straight to the terminal.",
      },
    ],
    ctaTitle: "Book Minsk–Wrocław Transfer",
    ctaDesc:
      "Submit a request and our manager will contact you shortly with an exact price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Wrocław",
    backBtn: "← Poland transfers",
  },
  pl: {
    badge: "Transfer Wrocławski",
    title: "Mińsk — Wrocław",
    subtitle:
      "Bezpośredni prywatny transfer z Mińska do Wrocławia — polskiego miasta mostów i krasnoludków. Jeden z największych rynków w Europie, Ostrów Tumski i ponad 100 mostów na Odrze.",
    stats: [
      { label: "Odległość", value: "~850 km" },
      { label: "Czas podróży", value: "9–12 godz" },
      { label: "Granica", value: "Białoruś – Polska" },
      { label: "Klasa pojazdu", value: "Biznes / Minivan" },
    ],
    photosTitle: "Wrocław — najważniejsze momenty",
    photos: [
      {
        src: "/img/wroclaw/market-square.png",
        caption: "Rynek — jeden z największych w Europie",
      },
      {
        src: "/img/wroclaw/cathedral-island.png",
        caption: "Ostrów Tumski — najstarsza część miasta",
      },
      {
        src: "/img/wroclaw/oder-bridges.png",
        caption:
          "Mosty na Odrze — Wrocław nazywany jest często „Wenecją Polski”",
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
        title: "Wrocław — dowolny adres",
        desc: "Dowieziemy Cię do hotelu w pobliżu Rynku, Portu Lotniczego Wrocław (WRO) lub pod dowolny inny adres w mieście.",
      },
    ],
    infoTitle: "Szczegóły trasy",
    infoRows: [
      {
        label: "Trasa",
        value: "Mińsk → Brześć → Terespol → Warszawa → Wrocław",
      },
      { label: "Odległość", value: "~850 km" },
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
        label: "Port Lotniczy Wrocław",
        value: "WRO (Lotnisko Mikołaja Kopernika) — 10 km od centrum",
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
      "Opcjonalny postój w Warszawie lub Łodzi na trasie",
      "Dostępny również transfer powrotny Wrocław → Mińsk",
      "Dostępność 24 godziny na dobę, 7 dni w tygodniu, także w święta",
      "Dzieci i zwierzęta mile widziane",
    ],
    faqTitle: "Często zadawane pytania",
    faq: [
      {
        q: "Jaka jest trasa do Wrocławia?",
        a: "Jedziemy przez przejście graniczne Brześć – Bruzgi/Kuźnica lub Berёza/Połowce – Warszawa – Wrocław. Całkowita odległość wynosi około 850 km, czas przejazdu 9–12 godzin bez przystanku granicznego.",
      },
      {
        q: "Czy potrzebuję wizy, aby wjechać do Polski?",
        a: "Obywatele Białorusi potrzebują wizy Schengen. Przed podróżą sprawdź aktualne wymagania w polskiej ambasadzie lub w oficjalnych źródłach.",
      },
      {
        q: "Czy możemy po drodze zatrzymać się w Warszawie?",
        a: "Tak – trasa przebiega przez Warszawę, więc przystanek nie dodaje prawie żadnej dodatkowej odległości. Poinformuj menadżera podczas dokonywania rezerwacji.",
      },
      {
        q: "Czy możesz mnie podrzucić na lotnisko we Wrocławiu (WRO)?",
        a: "Tak — Lotnisko Mikołaja Kopernika jest oddalone od centrum miasta o 10 km. Po prostu wspomnij o tym podczas rezerwacji, a my zawieziemy Cię prosto do terminalu.",
      },
    ],
    ctaTitle: "Zarezerwuj Transfer Mińsk–Wrocław",
    ctaDesc:
      "Prześlij zapytanie, a nasz menedżer wkrótce skontaktuje się z Tobą i poda dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Wrocławia",
    backBtn: "← Polska transfery",
  },
  fr: {
    badge: "Transfert Wrocław",
    title: "Minsk — Wrocław",
    subtitle:
      "Transfert privé direct de Minsk à Wrocław - la ville polonaise des ponts et des nains. L'une des plus grandes places de marché d'Europe, l'île de la Cathédrale et plus de 100 ponts sur l'Oder.",
    stats: [
      { label: "Distance", value: "~850km" },
      { label: "Temps de trajet", value: "9 à 12 heures" },
      { label: "Frontière", value: "Biélorussie-Pologne" },
      { label: "Classe de véhicule", value: "Affaires / Minifourgonnette" },
    ],
    photosTitle: "Wrocław — Points forts",
    photos: [
      {
        src: "/img/wroclaw/market-square.png",
        caption: "Rynek (place du marché) — l'une des plus grandes d'Europe",
      },
      {
        src: "/img/wroclaw/cathedral-island.png",
        caption:
          "Île de la Cathédrale (Ostrów Tumski) — la partie la plus ancienne de la ville",
      },
      {
        src: "/img/wroclaw/oder-bridges.png",
        caption:
          "Ponts de l'Oder — Wrocław est souvent appelée la « Venise de la Pologne »",
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
        title: "Wrocław — n'importe quelle adresse",
        desc: "Nous vous déposons à votre hôtel près de la place du marché, de l'aéroport de Wrocław (WRO) ou de toute autre adresse de la ville.",
      },
    ],
    infoTitle: "Détails de l'itinéraire",
    infoRows: [
      {
        label: "Itinéraire",
        value: "Minsk → Brest → Terespol → Varsovie → Wrocław",
      },
      { label: "Distance", value: "~850km" },
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
        label: "Aéroport de Wroclaw",
        value: "WRO (aéroport Nicolas Copernic) — 10 km du centre",
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
      "Escale facultative à Varsovie ou à Łódź en route",
      "Transfert aller-retour Wrocław → Minsk également disponible",
      "Disponible 24h/24 et 7j/7 y compris les jours fériés",
      "Enfants et animaux bienvenus",
    ],
    faqTitle: "Questions fréquemment posées",
    faq: [
      {
        q: "Quel est l'itinéraire vers Wrocław?",
        a: "Nous passons par le poste frontière Brest – Bruzgi/Kuźnica ou Berёza/Połowce – Varsovie – Wrocław. La distance totale est d'environ 850 km, temps de trajet de 9 à 12 heures sans compter l'arrêt frontalier.",
      },
      {
        q: "Ai-je besoin d’un visa pour entrer en Pologne ?",
        a: "Les citoyens biélorusses ont besoin d'un visa Schengen. Veuillez vérifier les dernières exigences auprès de l'ambassade de Pologne ou de sources officielles avant de voyager.",
      },
      {
        q: "Pouvons-nous nous arrêter à Varsovie en chemin ?",
        a: "Oui, l’itinéraire passe par Varsovie, donc un arrêt n’ajoute presque aucune distance supplémentaire. Informez le responsable lors de la réservation.",
      },
      {
        q: "Pouvez-vous me déposer à l'aéroport de Wrocław (WRO) ?",
        a: "Oui, l’aéroport Nicolas Copernic est à 10 km du centre-ville. Il suffit de le mentionner lors de la réservation et nous vous conduirons directement au terminal.",
      },
    ],
    ctaTitle: "Réserver un transfert Minsk-Wrocław",
    ctaDesc:
      "Soumettez une demande et notre responsable vous contactera sous peu avec un prix exact.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Wrocław",
    backBtn: "← Transferts Pologne",
  },
  seo: {
    titleRu: "Трансфер Минск — Вроцлав | Город мостов Польши | ComfortLine",
    titleEn:
      "Minsk to Wrocław Transfer | City of Bridges, Poland | ComfortLine",
    descRu:
      "Прямой трансфер из Минска во Вроцлав. ~850 км, 9–12 ч. Рыночная площадь, остров Тумский, 100+ мостов. Граница Беларусь–Польша, фиксированная цена.",
    descEn:
      "Direct transfer from Minsk to Wrocław. ~850 km, 9–12 hrs. Market Square, Cathedral Island, 100+ bridges. Belarus–Poland border crossing, fixed price.",
    pathRu: "/трансфер-минск-вроцлав",
    pathEn: "/minsk-wroclaw-transfer",
    breadcrumbRu: "Трансфер Минск–Вроцлав",
    breadcrumbEn: "Minsk — Wrocław",
    fromName: "Минск",
    toName: "Вроцлав",
  },
};

export default function MinskWroclawTransferPage() {
  return <RouteLandingPage data={data} />;
}
