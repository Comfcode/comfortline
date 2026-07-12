import { MapPin, ShieldCheck, Building2 } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Краков",
    title: "Минск — Краков",
    subtitle:
      "Прямой трансфер из Минска в Краков — старинную столицу Польши. Вавельский замок, Главная рыночная площадь и Величкская соляная шахта — три объекта ЮНЕСКО в одной поездке.",
    stats: [
      { label: "Расстояние", value: "~750 км" },
      { label: "Время в пути", value: "8–11 ч" },
      { label: "Граница", value: "Беларусь–Польша" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Краков — достопримечательности",
    photos: [
      {
        src: "/img/krakow/main-square.png",
        caption:
          "Главная рыночная площадь (Rynek Główny) — крупнейшая средневековая площадь Европы",
      },
      {
        src: "/img/krakow/wawel-castle.png",
        caption: "Вавельский замок — королевская резиденция над Вислой",
      },
      {
        src: "/img/krakow/wieliczka-mine.png",
        caption: "Величкская соляная шахта — объект ЮНЕСКО в 14 км от центра",
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
        title: "Краков: любой адрес",
        desc: "Довезём до отеля у Рыночной площади, аэропорта KRK, Вавельского замка или любого другого адреса в городе.",
      },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      {
        label: "Маршрут",
        value: "Минск → Брест → Тересполь → Варшава → Краков",
      },
      { label: "Расстояние", value: "~750 км" },
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
        label: "Аэропорт Кракова",
        value: "KRK (им. Иоанна Павла II) — 15 км от центра",
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
      "Заезд в Величку (+14 км от Кракова) по запросу",
      "Обратный трансфер: из Кракова в Минск",
      "Работаем 24/7, включая праздники",
    ],
    faqTitle: "Часто задаваемые вопросы",
    faq: [
      {
        q: "Какой маршрут до Кракова?",
        a: "Едем через Брест — КПП Брузги/Кузница или Берёза/Половцы — Варшаву — Краков. Расстояние около 750 км, время в пути 8–11 ч без учёта границы.",
      },
      {
        q: "Нужна ли виза в Польшу?",
        a: "Гражданам Беларуси требуется шенгенская виза. Уточняйте актуальные требования в посольстве Польши или на официальных сайтах перед поездкой.",
      },
      {
        q: "Можно ли заехать в Величкскую шахту?",
        a: "Да — шахта находится в 14 км от центра Кракова. Мы можем завезти вас туда до или после посещения города. Договоритесь с менеджером при бронировании.",
      },
      {
        q: "Можно ли остановиться в Варшаве по дороге?",
        a: "Да, маршрут проходит через Варшаву. Остановка почти не удлиняет поездку — договоритесь с менеджером при бронировании.",
      },
    ],
    ctaTitle: "Заказать трансфер Минск–Краков",
    ctaDesc:
      "Оставьте заявку — менеджер свяжется с вами в ближайшее время и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Краков",
    backBtn: "← Трансферы в Польшу",
  },
  en: {
    badge: "Kraków Transfer",
    title: "Minsk — Kraków",
    subtitle:
      "Direct private transfer from Minsk to Kraków — Poland's ancient royal capital. Wawel Castle, the largest medieval market square in Europe and the Wieliczka Salt Mine — three UNESCO sites in one trip.",
    stats: [
      { label: "Distance", value: "~750 km" },
      { label: "Travel time", value: "8–11 hrs" },
      { label: "Border", value: "Belarus–Poland" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Kraków — Highlights",
    photos: [
      {
        src: "/img/krakow/main-square.png",
        caption: "Rynek Główny — Europe's largest medieval market square",
      },
      {
        src: "/img/krakow/wawel-castle.png",
        caption: "Wawel Castle — the royal residence above the Vistula",
      },
      {
        src: "/img/krakow/wieliczka-mine.png",
        caption:
          "Wieliczka Salt Mine — UNESCO World Heritage Site, 14 km from the centre",
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
        title: "Kraków — any address",
        desc: "We drop you at your hotel near the Market Square, Kraków Airport (KRK), Wawel Castle or any other address in the city.",
      },
    ],
    infoTitle: "Route Details",
    infoRows: [
      { label: "Route", value: "Minsk → Brest → Terespol → Warsaw → Kraków" },
      { label: "Distance", value: "~750 km" },
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
        label: "Kraków Airport",
        value: "KRK (John Paul II International) — 15 km from the centre",
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
      "Side trip to Wieliczka Salt Mine (+14 km) on request",
      "Return transfer Kraków → Minsk also available",
      "Available 24/7 including public holidays",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "What is the route to Kraków?",
        a: "We go via Brest – Bruzgi/Kuźnica or Berёza/Połowce border crossing – Warsaw – Kraków. Total distance is about 750 km, travel time 8–11 hours excluding the border stop.",
      },
      {
        q: "Do I need a visa to enter Poland?",
        a: "Citizens of Belarus require a Schengen visa. Please check the latest requirements with the Polish embassy or official sources before travelling.",
      },
      {
        q: "Can we visit the Wieliczka Salt Mine on the way?",
        a: "Yes — the mine is 14 km from Kraków city centre. We can drop you there before or after the city. Just let the manager know when booking.",
      },
      {
        q: "Can we stop in Warsaw on the way?",
        a: "Yes — the route passes through Warsaw, so a stop adds almost no extra distance. Let the manager know when booking.",
      },
    ],
    ctaTitle: "Book Minsk–Kraków Transfer",
    ctaDesc:
      "Submit a request and our manager will contact you shortly with an exact price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Kraków",
    backBtn: "← Poland transfers",
  },
  pl: {
    badge: "Transfer z Krakowa",
    title: "Mińsk — Kraków",
    subtitle:
      "Bezpośredni prywatny transfer z Mińska do Krakowa – starożytnej stolicy królewskiej Polski. Zamek na Wawelu, największy średniowieczny rynek w Europie i Kopalnia Soli w Wieliczce – trzy obiekty UNESCO podczas jednej wycieczki.",
    stats: [
      { label: "Odległość", value: "~750 km" },
      { label: "Czas podróży", value: "8–11 godz" },
      { label: "Granica", value: "Białoruś – Polska" },
      { label: "Klasa pojazdu", value: "Biznes / Minivan" },
    ],
    photosTitle: "Kraków — najważniejsze wydarzenia",
    photos: [
      {
        src: "/img/krakow/main-square.png",
        caption: "Rynek Główny — największy średniowieczny rynek w Europie",
      },
      {
        src: "/img/krakow/wawel-castle.png",
        caption: "Zamek Wawelski — rezydencja królewska nad Wisłą",
      },
      {
        src: "/img/krakow/wieliczka-mine.png",
        caption:
          "Kopalnia Soli w Wieliczce – wpisana na Listę Światowego Dziedzictwa UNESCO, 14 km od centrum",
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
        title: "Kraków — dowolny adres",
        desc: "Dowieziemy Cię do hotelu w pobliżu Rynku Głównego, krakowskiego lotniska (KRK), Zamku na Wawelu lub pod dowolny inny adres w mieście.",
      },
    ],
    infoTitle: "Szczegóły trasy",
    infoRows: [
      {
        label: "Trasa",
        value: "Mińsk → Brześć → Terespol → Warszawa → Kraków",
      },
      { label: "Odległość", value: "~750 km" },
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
        label: "Kraków Lotnisko",
        value: "KRK (Jan Paweł II International) — 15 km od centrum",
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
      "Na zamówienie wycieczka dodatkowa do Kopalni Soli w Wieliczce (+14 km).",
      "Dostępny również transfer powrotny Kraków → Mińsk",
      "Dostępność 24 godziny na dobę, 7 dni w tygodniu, także w święta",
    ],
    faqTitle: "Często zadawane pytania",
    faq: [
      {
        q: "Jaka jest trasa do Krakowa?",
        a: "Jedziemy przez przejście graniczne Brześć – Bruzgi/Kuźnica lub Berёza/Połowce – Warszawa – Kraków. Całkowita odległość wynosi około 750 km, czas przejazdu 8–11 godzin bez przystanku granicznego.",
      },
      {
        q: "Czy potrzebuję wizy, aby wjechać do Polski?",
        a: "Obywatele Białorusi potrzebują wizy Schengen. Przed podróżą sprawdź aktualne wymagania w polskiej ambasadzie lub w oficjalnych źródłach.",
      },
      {
        q: "Czy można po drodze odwiedzić Kopalnię Soli w Wieliczce?",
        a: "Tak – kopalnia jest oddalona od centrum Krakowa o 14 km. Możemy cię tam podrzucić przed lub za miastem. Po prostu daj znać menadżerowi podczas dokonywania rezerwacji.",
      },
      {
        q: "Czy możemy po drodze zatrzymać się w Warszawie?",
        a: "Tak – trasa przebiega przez Warszawę, więc przystanek nie dodaje prawie żadnej dodatkowej odległości. Poinformuj menadżera podczas dokonywania rezerwacji.",
      },
    ],
    ctaTitle: "Zarezerwuj transfer Mińsk – Kraków",
    ctaDesc:
      "Prześlij zapytanie, a nasz menedżer wkrótce skontaktuje się z Tobą i poda dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Kraków",
    backBtn: "← Polska transfery",
  },
  fr: {
    badge: "Transfert Cracovie",
    title: "Minsk — Cracovie",
    subtitle:
      "Transfert privé direct de Minsk à Cracovie, l'ancienne capitale royale de la Pologne. Le château de Wawel, la plus grande place de marché médiévale d'Europe et la mine de sel de Wieliczka : trois sites UNESCO en un seul voyage.",
    stats: [
      { label: "Distance", value: "~750km" },
      { label: "Temps de trajet", value: "8 à 11 heures" },
      { label: "Frontière", value: "Biélorussie-Pologne" },
      { label: "Classe de véhicule", value: "Affaires / Minifourgonnette" },
    ],
    photosTitle: "Cracovie — Points forts",
    photos: [
      {
        src: "/img/krakow/main-square.png",
        caption:
          "Rynek Główny — La plus grande place de marché médiévale d'Europe",
      },
      {
        src: "/img/krakow/wawel-castle.png",
        caption:
          "Château de Wawel – la résidence royale au-dessus de la Vistule",
      },
      {
        src: "/img/krakow/wieliczka-mine.png",
        caption:
          "Mine de sel de Wieliczka — Site du patrimoine mondial de l'UNESCO, à 14 km du centre",
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
        title: "Cracovie — n'importe quelle adresse",
        desc: "Nous vous déposons à votre hôtel près de la place du marché, de l'aéroport de Cracovie (KRK), du château de Wawel ou de toute autre adresse de la ville.",
      },
    ],
    infoTitle: "Détails de l'itinéraire",
    infoRows: [
      {
        label: "Itinéraire",
        value: "Minsk → Brest → Terespol → Varsovie → Cracovie",
      },
      { label: "Distance", value: "~750km" },
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
        label: "Aéroport de Cracovie",
        value: "KRK (Jean-Paul II International) — 15 km du centre",
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
      "Excursion à la mine de sel de Wieliczka (+14 km) sur demande",
      "Transfert aller-retour Cracovie → Minsk également disponible",
      "Disponible 24h/24 et 7j/7 y compris les jours fériés",
    ],
    faqTitle: "Questions fréquemment posées",
    faq: [
      {
        q: "Quel est l'itinéraire vers Cracovie?",
        a: "Nous passons par le poste frontière Brest – Bruzgi/Kuźnica ou Berёza/Połowce – Varsovie – Cracovie. La distance totale est d'environ 750 km, la durée du trajet est de 8 à 11 heures sans compter l'arrêt frontalier.",
      },
      {
        q: "Ai-je besoin d’un visa pour entrer en Pologne ?",
        a: "Les citoyens biélorusses ont besoin d'un visa Schengen. Veuillez vérifier les dernières exigences auprès de l'ambassade de Pologne ou de sources officielles avant de voyager.",
      },
      {
        q: "Pouvons-nous visiter la mine de sel de Wieliczka en chemin ?",
        a: "Oui, la mine se trouve à 14 km du centre-ville de Cracovie. Nous pouvons vous y déposer avant ou après la ville. Il suffit d'en informer le responsable lors de la réservation.",
      },
      {
        q: "Pouvons-nous nous arrêter à Varsovie en chemin ?",
        a: "Oui, l’itinéraire passe par Varsovie, donc un arrêt n’ajoute presque aucune distance supplémentaire. Informez le responsable lors de la réservation.",
      },
    ],
    ctaTitle: "Réserver un transfert Minsk-Cracovie",
    ctaDesc:
      "Soumettez une demande et notre responsable vous contactera sous peu avec un prix exact.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Cracovie",
    backBtn: "← Transferts Pologne",
  },
  seo: {
    titleRu:
      "Трансфер Минск — Краков | Королевская столица Польши | ComfortLine",
    titleEn: "Minsk to Kraków Transfer | Poland's Royal Capital | ComfortLine",
    descRu:
      "Прямой трансфер из Минска в Краков. ~750 км, 8–11 ч. Вавельский замок, Главная площадь, Величка. Граница Беларусь–Польша, фиксированная цена.",
    descEn:
      "Direct transfer from Minsk to Kraków. ~750 km, 8–11 hrs. Wawel Castle, Main Square, Wieliczka. Belarus–Poland border crossing, fixed price.",
    pathRu: "/трансфер-минск-краков",
    pathEn: "/minsk-krakow-transfer",
    breadcrumbRu: "Трансфер Минск–Краков",
    breadcrumbEn: "Minsk — Kraków",
    fromName: "Минск",
    toName: "Краков",
  },
};

export default function MinskKrakowTransferPage() {
  return <RouteLandingPage data={data} />;
}
