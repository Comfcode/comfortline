import { MapPin, ShieldCheck, Building2 } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Познань",
    title: "Минск — Познань",
    subtitle:
      "Прямой трансфер из Минска в Познань — один из старейших городов Польши, колыбель государственности Пястов. Яркая рыночная площадь, козлы на Ратуше и старейший польский собор.",
    stats: [
      { label: "Расстояние", value: "~700 км" },
      { label: "Время в пути", value: "7–10 ч" },
      { label: "Граница", value: "Беларусь–Польша" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Познань — достопримечательности",
    photos: [
      {
        src: "/img/poznan/old-market-square.png",
        caption:
          "Старый рынок (Stary Rynek) — одна из красивейших площадей Польши",
      },
      {
        src: "/img/poznan/town-hall.png",
        caption: "Ратуша Познани — шедевр польского Ренессанса",
      },
      {
        src: "/img/poznan/cathedral.png",
        caption:
          "Собор Святых Апостолов на острове Тумском — старейший в Польше",
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
        title: "Познань: любой адрес",
        desc: "Довезём до отеля у Старого рынка, аэропорта POZ или любого другого адреса в городе.",
      },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      {
        label: "Маршрут",
        value: "Минск → Брест → Тересполь → Варшава → Познань",
      },
      { label: "Расстояние", value: "~700 км" },
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
        label: "Аэропорт Познани",
        value: "POZ (им. Генрика Венявского) — 7 км от центра",
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
      "Возможна остановка в Варшаве по дороге",
      "Обратный трансфер: из Познани в Минск",
      "Работаем 24/7, включая праздники",
      "Перевозим с детьми и питомцами",
    ],
    faqTitle: "Часто задаваемые вопросы",
    faq: [
      {
        q: "Какой маршрут до Познани?",
        a: "Едем через Брест — КПП Брузги/Кузница или Берёза/Половцы — Варшаву — Познань. Расстояние около 700 км, время в пути 7–10 ч без учёта границы.",
      },
      {
        q: "Нужна ли виза в Польшу?",
        a: "Гражданам Беларуси требуется шенгенская виза. Уточняйте актуальные требования в посольстве Польши или на официальных сайтах перед поездкой.",
      },
      {
        q: "Что такое «козлы на Ратуше»?",
        a: "Каждый день в полдень из башни Ратуши Познани выезжают два механических козла и бьют рогами. Это символ города с XVI века — одна из самых любимых туристических традиций Польши.",
      },
      {
        q: "Можно ли заехать в Варшаву по дороге?",
        a: "Да, маршрут проходит через Варшаву. Остановка добавляет минимум времени — договоритесь с менеджером при бронировании.",
      },
    ],
    ctaTitle: "Заказать трансфер Минск–Познань",
    ctaDesc:
      "Оставьте заявку — менеджер свяжется с вами в ближайшее время и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Познань",
    backBtn: "← Трансферы в Польшу",
  },
  en: {
    badge: "Poznań Transfer",
    title: "Minsk — Poznań",
    subtitle:
      "Direct private transfer from Minsk to Poznań — one of Poland's oldest cities and the cradle of the Piast dynasty. A vibrant market square, billy goats on the Town Hall clock and Poland's oldest cathedral.",
    stats: [
      { label: "Distance", value: "~700 km" },
      { label: "Travel time", value: "7–10 hrs" },
      { label: "Border", value: "Belarus–Poland" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Poznań — Highlights",
    photos: [
      {
        src: "/img/poznan/old-market-square.png",
        caption:
          "Stary Rynek (Old Market Square) — one of Poland's most beautiful squares",
      },
      {
        src: "/img/poznan/town-hall.png",
        caption:
          "Poznań Town Hall — a masterpiece of Polish Renaissance architecture",
      },
      {
        src: "/img/poznan/cathedral.png",
        caption:
          "Cathedral of SS. Peter and Paul on Cathedral Island — Poland's oldest cathedral",
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
        title: "Poznań — any address",
        desc: "We drop you at your hotel near the Old Market Square, Poznań Airport (POZ) or any other address in the city.",
      },
    ],
    infoTitle: "Route Details",
    infoRows: [
      { label: "Route", value: "Minsk → Brest → Terespol → Warsaw → Poznań" },
      { label: "Distance", value: "~700 km" },
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
        label: "Poznań Airport",
        value: "POZ (Henryk Wieniawski Airport) — 7 km from the centre",
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
      "Optional Warsaw stopover en route",
      "Return transfer Poznań → Minsk also available",
      "Available 24/7 including public holidays",
      "Kids and pets welcome",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "What is the route to Poznań?",
        a: "We go via Brest – Bruzgi/Kuźnica or Berёza/Połowce border crossing – Warsaw – Poznań. Total distance is about 700 km, travel time 7–10 hours excluding the border stop.",
      },
      {
        q: "Do I need a visa to enter Poland?",
        a: "Citizens of Belarus require a Schengen visa. Please check the latest requirements with the Polish embassy or official sources before travelling.",
      },
      {
        q: "What are the famous billy goats of Poznań?",
        a: "Every day at noon, two mechanical billy goats emerge from the Town Hall tower and butt heads — a tradition dating back to the 16th century and one of Poland's most beloved tourist rituals.",
      },
      {
        q: "Can we stop in Warsaw on the way?",
        a: "Yes — the route passes through Warsaw, so a stop adds very little extra time. Let the manager know when booking.",
      },
    ],
    ctaTitle: "Book Minsk–Poznań Transfer",
    ctaDesc:
      "Submit a request and our manager will contact you shortly with an exact price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Poznań",
    backBtn: "← Poland transfers",
  },
  pl: {
    badge: "Transfer Poznań",
    title: "Mińsk — Poznań",
    subtitle:
      "Bezpośredni prywatny transfer z Mińska do Poznania — jednego z najstarszych miast Polski i kolebki dynastii Piastów. Tętniący życiem rynek, kozły na zegarze w Ratuszu i najstarsza katedra w Polsce.",
    stats: [
      { label: "Odległość", value: "~700 km" },
      { label: "Czas podróży", value: "7–10 godz" },
      { label: "Granica", value: "Białoruś – Polska" },
      { label: "Klasa pojazdu", value: "Biznes / Minivan" },
    ],
    photosTitle: "Poznań — najważniejsze wydarzenia",
    photos: [
      {
        src: "/img/poznan/old-market-square.png",
        caption: "Stary Rynek — jeden z najpiękniejszych placów w Polsce",
      },
      {
        src: "/img/poznan/town-hall.png",
        caption:
          "Ratusz w Poznaniu — arcydzieło polskiej architektury renesansowej",
      },
      {
        src: "/img/poznan/cathedral.png",
        caption:
          "Katedra SS. Piotra i Pawła na Ostrowie Tumskim — najstarszej katedrze w Polsce",
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
        title: "Poznań — dowolny adres",
        desc: "Dowieziemy Cię do hotelu w pobliżu Starego Rynku, Portu Lotniczego Poznań (POZ) lub pod dowolny inny adres w mieście.",
      },
    ],
    infoTitle: "Szczegóły trasy",
    infoRows: [
      {
        label: "Trasa",
        value: "Mińsk → Brześć → Terespol → Warszawa → Poznań",
      },
      { label: "Odległość", value: "~700 km" },
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
        label: "Port Lotniczy Poznań",
        value: "POZ (Lotnisko im. Henryka Wieniawskiego) — 7 km od centrum",
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
      "Opcjonalny przystanek w Warszawie na trasie",
      "Dostępny również transfer powrotny Poznań → Mińsk",
      "Dostępność 24 godziny na dobę, 7 dni w tygodniu, także w święta",
      "Dzieci i zwierzęta mile widziane",
    ],
    faqTitle: "Często zadawane pytania",
    faq: [
      {
        q: "Jaka jest trasa do Poznania?",
        a: "Jedziemy przez przejście graniczne Brześć – Bruzgi/Kuźnica lub Berёza/Połowce – Warszawa – Poznań. Całkowita odległość wynosi około 700 km, czas przejazdu 7–10 godzin bez przystanku granicznego.",
      },
      {
        q: "Czy potrzebuję wizy, aby wjechać do Polski?",
        a: "Obywatele Białorusi potrzebują wizy Schengen. Przed podróżą sprawdź aktualne wymagania w polskiej ambasadzie lub w oficjalnych źródłach.",
      },
      {
        q: "Jakie są słynne kozły poznańskie?",
        a: "Codziennie w południe z wieży ratuszowej wyłaniają się dwa mechaniczne kozły i trąby – tradycja sięgająca XVI wieku i jeden z najpopularniejszych rytuałów turystycznych w Polsce.",
      },
      {
        q: "Czy możemy po drodze zatrzymać się w Warszawie?",
        a: "Tak – trasa przebiega przez Warszawę, więc postój dodaje bardzo niewiele dodatkowego czasu. Poinformuj menadżera podczas dokonywania rezerwacji.",
      },
    ],
    ctaTitle: "Zarezerwuj Transfer Mińsk–Poznań",
    ctaDesc:
      "Prześlij zapytanie, a nasz menedżer wkrótce skontaktuje się z Tobą i poda dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Poznań",
    backBtn: "← Polska transfery",
  },
  fr: {
    badge: "Transfert Poznań",
    title: "Minsk — Poznan",
    subtitle:
      "Transfert privé direct de Minsk à Poznań, l'une des plus anciennes villes de Pologne et berceau de la dynastie Piast. Une place de marché animée, des boucs sur l'horloge de l'hôtel de ville et la plus ancienne cathédrale de Pologne.",
    stats: [
      { label: "Distance", value: "~700km" },
      { label: "Temps de trajet", value: "7 à 10 heures" },
      { label: "Frontière", value: "Biélorussie-Pologne" },
      { label: "Classe de véhicule", value: "Affaires / Minifourgonnette" },
    ],
    photosTitle: "Poznań — Points forts",
    photos: [
      {
        src: "/img/poznan/old-market-square.png",
        caption:
          "Stary Rynek (Place du Vieux Marché) — l'une des plus belles places de Pologne",
      },
      {
        src: "/img/poznan/town-hall.png",
        caption:
          "L'hôtel de ville de Poznań, un chef-d'œuvre de l'architecture de la Renaissance polonaise",
      },
      {
        src: "/img/poznan/cathedral.png",
        caption:
          "Cathédrale des SS. Pierre et Paul sur l'île de la Cathédrale, la plus ancienne cathédrale de Pologne",
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
        title: "Poznań — n'importe quelle adresse",
        desc: "Nous vous déposons à votre hôtel près de la place du vieux marché, de l'aéroport de Poznań (POZ) ou de toute autre adresse de la ville.",
      },
    ],
    infoTitle: "Détails de l'itinéraire",
    infoRows: [
      {
        label: "Itinéraire",
        value: "Minsk → Brest → Terespol → Varsovie → Poznań",
      },
      { label: "Distance", value: "~700km" },
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
        label: "Aéroport de Poznan",
        value: "POZ (aéroport Henryk Wieniawski) — 7 km du centre",
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
      "Escale facultative à Varsovie en cours de route",
      "Transfert aller-retour Poznań → Minsk également disponible",
      "Disponible 24h/24 et 7j/7 y compris les jours fériés",
      "Enfants et animaux bienvenus",
    ],
    faqTitle: "Questions fréquemment posées",
    faq: [
      {
        q: "Quel est l'itinéraire pour rejoindre Poznań?",
        a: "Nous passons par le poste frontière Brest – Bruzgi/Kuźnica ou Berёza/Połowce – Varsovie – Poznań. La distance totale est d'environ 700 km, le temps de trajet étant de 7 à 10 heures sans compter l'arrêt frontalier.",
      },
      {
        q: "Ai-je besoin d’un visa pour entrer en Pologne ?",
        a: "Les citoyens biélorusses ont besoin d'un visa Schengen. Veuillez vérifier les dernières exigences auprès de l'ambassade de Pologne ou de sources officielles avant de voyager.",
      },
      {
        q: "Quels sont les célèbres boucs de Poznań ?",
        a: "Chaque jour à midi, deux boucs mécaniques émergent de la tour et des têtes de l'hôtel de ville – une tradition remontant au XVIe siècle et l'un des rituels touristiques les plus appréciés de Pologne.",
      },
      {
        q: "Pouvons-nous nous arrêter à Varsovie en chemin ?",
        a: "Oui, l’itinéraire passe par Varsovie, donc un arrêt n’ajoute que très peu de temps supplémentaire. Informez le responsable lors de la réservation.",
      },
    ],
    ctaTitle: "Réserver un transfert Minsk-Poznań",
    ctaDesc:
      "Soumettez une demande et notre responsable vous contactera sous peu avec un prix exact.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Poznan",
    backBtn: "← Transferts Pologne",
  },
  seo: {
    titleRu: "Трансфер Минск — Познань | Старейший город Польши | ComfortLine",
    titleEn:
      "Minsk to Poznań Transfer | Poland's Ancient Capital | ComfortLine",
    descRu:
      "Прямой трансфер из Минска в Познань. ~700 км, 7–10 ч. Старый рынок, Ратуша с козлами, Тумский собор. Граница Беларусь–Польша, фиксированная цена.",
    descEn:
      "Direct transfer from Minsk to Poznań. ~700 km, 7–10 hrs. Old Market Square, Town Hall billy goats, Cathedral Island. Belarus–Poland border crossing, fixed price.",
    pathRu: "/трансфер-минск-познань",
    pathEn: "/minsk-poznan-transfer",
    breadcrumbRu: "Трансфер Минск–Познань",
    breadcrumbEn: "Minsk — Poznań",
    fromName: "Минск",
    toName: "Познань",
  },
};

export default function MinskPoznanTransferPage() {
  return <RouteLandingPage data={data} />;
}
