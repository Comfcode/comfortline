import { MapPin, ShieldCheck, Building2 } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Катовице",
    title: "Минск — Катовице",
    subtitle:
      "Прямой трансфер из Минска в Катовице — столицу Силезии и один из крупнейших городских агломератов Польши. Арена «Сподек», Силезский музей в шахтных башнях и исторический квартал горняков Никишовец.",
    stats: [
      { label: "Расстояние", value: "~700 км" },
      { label: "Время в пути", value: "8–10 ч" },
      { label: "Граница", value: "Беларусь–Польша" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Катовице — достопримечательности",
    photos: [
      {
        src: "/img/katowice/spodek.png",
        caption:
          "«Сподек» — легендарная арена в форме летающей тарелки, символ Катовице",
      },
      {
        src: "/img/katowice/silesian-museum.png",
        caption:
          "Силезский музей — современный комплекс в башнях бывшей угольной шахты",
      },
      {
        src: "/img/katowice/nikiszowiec.png",
        caption:
          "Никишовец — исторический квартал горняков начала XX века из красного кирпича",
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
        title: "Катовице: любой адрес",
        desc: "Довезём до отеля в центре, аэропорта KTW (Пыжовице) или любого другого адреса в городе и агломерации.",
      },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      {
        label: "Маршрут",
        value: "Минск → Брест → Тересполь → Варшава → Катовице",
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
        label: "Аэропорт Катовице",
        value: "KTW (Катовице-Пыжовице) — 30 км от центра",
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
      "Можно доехать до Кракова (+80 км от Катовице) по пути",
      "Возможна остановка в Варшаве по дороге",
      "Обратный трансфер: из Катовице в Минск",
      "Работаем 24/7, включая праздники",
    ],
    faqTitle: "Часто задаваемые вопросы",
    faq: [
      {
        q: "Какой маршрут до Катовице?",
        a: "Едем через Брест — КПП Брузги/Кузница или Берёза/Половцы — Варшаву — Катовице. Расстояние около 700 км, время в пути 8–10 ч без учёта границы.",
      },
      {
        q: "Нужна ли виза в Польшу?",
        a: "Гражданам Беларуси требуется шенгенская виза. Уточняйте актуальные требования в посольстве Польши или на официальных сайтах перед поездкой.",
      },
      {
        q: "Что такое «Сподек»?",
        a: "Spodek («Блюдце») — культовая многофункциональная арена в Катовице, построенная в 1971 году. Её характерная форма летающей тарелки стала символом города. Здесь проходят концерты мировых звёзд, спортивные матчи и крупные конгрессы.",
      },
      {
        q: "Можно ли заехать в Краков по дороге?",
        a: "Да — Краков находится в 80 км от Катовице, по пути из Варшавы. Если хотите сначала остановиться в Кракове, а затем ехать в Катовице (или наоборот), договоритесь с менеджером при бронировании.",
      },
    ],
    ctaTitle: "Заказать трансфер Минск–Катовице",
    ctaDesc:
      "Оставьте заявку — менеджер свяжется с вами в ближайшее время и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Катовице",
    backBtn: "← Трансферы в Польшу",
  },
  en: {
    badge: "Katowice Transfer",
    title: "Minsk — Katowice",
    subtitle:
      "Direct private transfer from Minsk to Katowice — Silesia's capital and one of Poland's largest urban agglomerations. The iconic Spodek arena, the Silesian Museum inside mine shaft towers and the historic miners' district of Nikiszowiec.",
    stats: [
      { label: "Distance", value: "~700 km" },
      { label: "Travel time", value: "8–10 hrs" },
      { label: "Border", value: "Belarus–Poland" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Katowice — Highlights",
    photos: [
      {
        src: "/img/katowice/spodek.png",
        caption:
          "Spodek — the legendary UFO-shaped arena, Katowice's most iconic landmark",
      },
      {
        src: "/img/katowice/silesian-museum.png",
        caption:
          "Silesian Museum — a striking modern complex built into former colliery shaft towers",
      },
      {
        src: "/img/katowice/nikiszowiec.png",
        caption:
          "Nikiszowiec — a remarkably preserved early 20th-century red-brick miners' estate",
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
        title: "Katowice — any address",
        desc: "We drop you at your city-centre hotel, Katowice Airport (KTW, Pyrzowice) or any other address in the city and agglomeration.",
      },
    ],
    infoTitle: "Route Details",
    infoRows: [
      { label: "Route", value: "Minsk → Brest → Terespol → Warsaw → Katowice" },
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
        label: "Katowice Airport",
        value: "KTW (Katowice-Pyrzowice) — 30 km from the centre",
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
      "Easy side trip to Kraków (+80 km) on the same journey",
      "Optional Warsaw stopover en route",
      "Return transfer Katowice → Minsk also available",
      "Available 24/7 including public holidays",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "What is the route to Katowice?",
        a: "We go via Brest – Bruzgi/Kuźnica or Berёza/Połowce border crossing – Warsaw – Katowice. Total distance is about 700 km, travel time 8–10 hours excluding the border stop.",
      },
      {
        q: "Do I need a visa to enter Poland?",
        a: "Citizens of Belarus require a Schengen visa. Please check the latest requirements with the Polish embassy or official sources before travelling.",
      },
      {
        q: "What is the Spodek?",
        a: "Spodek (meaning 'saucer') is Katowice's iconic multi-purpose arena built in 1971. Its flying-saucer silhouette has become the city's symbol. It hosts world-class concerts, sporting events and major congresses.",
      },
      {
        q: "Can we visit Kraków on the way?",
        a: "Absolutely — Kraków is just 80 km from Katowice, en route from Warsaw. If you'd like a stop in Kraków before continuing to Katowice (or vice versa), just let the manager know when booking.",
      },
    ],
    ctaTitle: "Book Minsk–Katowice Transfer",
    ctaDesc:
      "Submit a request and our manager will contact you shortly with an exact price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Katowice",
    backBtn: "← Poland transfers",
  },
  pl: {
    badge: "Transfer z Katowic",
    title: "Mińsk —Katowice",
    subtitle:
      "Bezpośredni prywatny transfer z Mińska do Katowic – stolicy Śląska i jednej z największych aglomeracji miejskich w Polsce. Kultowy Spodek, Muzeum Śląskie w wieżach szybów kopalnianych i zabytkowa dzielnica górnicza Nikiszowiec.",
    stats: [
      { label: "Odległość", value: "~700 km" },
      { label: "Czas podróży", value: "8–10 godz" },
      { label: "Granica", value: "Białoruś – Polska" },
      { label: "Klasa pojazdu", value: "Biznes / Minivan" },
    ],
    photosTitle: "Katowice — najważniejsze wydarzenia",
    photos: [
      {
        src: "/img/katowice/spodek.png",
        caption:
          "Spodek — legendarna arena w kształcie UFO, najbardziej charakterystyczny obiekt Katowic",
      },
      {
        src: "/img/katowice/silesian-museum.png",
        caption:
          "Muzeum Śląskie — efektowny nowoczesny kompleks wkomponowany w dawne wieże szybów kopalnianych",
      },
      {
        src: "/img/katowice/nikiszowiec.png",
        caption:
          "Nikiszowiec — znakomicie zachowany dworek górniczy z czerwonej cegły z początku XX w",
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
        title: "Katowice — dowolny adres",
        desc: "Dowieziemy Cię pod Twój hotel w centrum, na lotnisko w Katowicach (KTW, Pyrzowice) lub pod dowolny inny adres w mieście i aglomeracji.",
      },
    ],
    infoTitle: "Szczegóły trasy",
    infoRows: [
      {
        label: "Trasa",
        value: "Mińsk → Brześć → Terespol → Warszawa → Katowice",
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
        label: "Lotnisko w Katowicach",
        value: "KTW (Katowice-Pyrzowice) — 30 km od centrum",
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
      "Łatwa wycieczka dodatkowa do Krakowa (+80 km) w ramach tej samej podróży",
      "Opcjonalny przystanek w Warszawie na trasie",
      "Dostępny jest również transfer powrotny Katowice → Mińsk",
      "Dostępność 24 godziny na dobę, 7 dni w tygodniu, także w święta",
    ],
    faqTitle: "Często zadawane pytania",
    faq: [
      {
        q: "Jaka jest trasa do Katowic?",
        a: "Jedziemy przez przejście graniczne Brześć – Bruzgi/Kuźnica lub Berёza/Połowce – Warszawa – Katowice. Całkowita odległość wynosi około 700 km, czas przejazdu 8–10 godzin bez przystanku granicznego.",
      },
      {
        q: "Czy potrzebuję wizy, aby wjechać do Polski?",
        a: "Obywatele Białorusi potrzebują wizy Schengen. Przed podróżą sprawdź aktualne wymagania w polskiej ambasadzie lub w oficjalnych źródłach.",
      },
      {
        q: "Co to jest Spodek?",
        a: "Spodek to kultowa wielofunkcyjna arena Katowic, zbudowana w 1971 roku. Sylwetka latającego spodka stała się symbolem miasta. Odbywają się tu światowej klasy koncerty, wydarzenia sportowe i najważniejsze kongresy.",
      },
      {
        q: "Czy można po drodze odwiedzić Kraków?",
        a: "Zdecydowanie – Kraków leży zaledwie 80 km od Katowic, w drodze z Warszawy. Jeśli chcesz zatrzymać się w Krakowie przed dalszą podróżą do Katowic (lub odwrotnie), po prostu daj znać menadżerowi podczas rezerwacji.",
      },
    ],
    ctaTitle: "Zarezerwuj transfer Mińsk–Katowice",
    ctaDesc:
      "Prześlij zapytanie, a nasz menedżer wkrótce skontaktuje się z Tobą i poda dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Katowice",
    backBtn: "← Polska transfery",
  },
  fr: {
    badge: "Transfert Katowice",
    title: "Minsk — Katowice",
    subtitle:
      "Transfert privé direct de Minsk à Katowice, la capitale de la Silésie et l'une des plus grandes agglomérations urbaines de Pologne. L'emblématique arène Spodek, le musée de Silésie à l'intérieur des tours de puits de mine et le quartier historique des mineurs de Nikiszowiec.",
    stats: [
      { label: "Distance", value: "~700km" },
      { label: "Temps de trajet", value: "8 à 10 heures" },
      { label: "Frontière", value: "Biélorussie-Pologne" },
      { label: "Classe de véhicule", value: "Affaires / Minifourgonnette" },
    ],
    photosTitle: "Katowice — Points forts",
    photos: [
      {
        src: "/img/katowice/spodek.png",
        caption:
          "Spodek — la légendaire arène en forme d'OVNI, le monument le plus emblématique de Katowice",
      },
      {
        src: "/img/katowice/silesian-museum.png",
        caption:
          "Musée de Silésie - un complexe moderne et saisissant construit dans d'anciennes tours de puits de mine",
      },
      {
        src: "/img/katowice/nikiszowiec.png",
        caption:
          "Nikiszowiec - un domaine minier en briques rouges du début du XXe siècle remarquablement préservé",
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
        title: "Katowice — n'importe quelle adresse",
        desc: "Nous vous déposons à votre hôtel du centre-ville, à l'aéroport de Katowice (KTW, Pyrzowice) ou à toute autre adresse de la ville et de l'agglomération.",
      },
    ],
    infoTitle: "Détails de l'itinéraire",
    infoRows: [
      {
        label: "Itinéraire",
        value: "Minsk → Brest → Terespol → Varsovie → Katowice",
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
        label: "Aéroport de Katowice",
        value: "KTW (Katowice-Pyrzowice) — 30 km du centre",
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
      "Excursion facile à Cracovie (+80 km) sur le même trajet",
      "Escale facultative à Varsovie en cours de route",
      "Transfert aller-retour Katowice → Minsk également disponible",
      "Disponible 24h/24 et 7j/7 y compris les jours fériés",
    ],
    faqTitle: "Questions fréquemment posées",
    faq: [
      {
        q: "Quel est l'itinéraire vers Katowice?",
        a: "Nous passons par le poste frontière Brest – Bruzgi/Kuźnica ou Berёza/Połowce – Varsovie – Katowice. La distance totale est d'environ 700 km, le temps de trajet étant de 8 à 10 heures sans compter l'arrêt frontalier.",
      },
      {
        q: "Ai-je besoin d’un visa pour entrer en Pologne ?",
        a: "Les citoyens biélorusses ont besoin d'un visa Schengen. Veuillez vérifier les dernières exigences auprès de l'ambassade de Pologne ou de sources officielles avant de voyager.",
      },
      {
        q: "Quel est le Spodek?",
        a: "Spodek (qui signifie « soucoupe ») est l'arène polyvalente emblématique de Katowice construite en 1971. Sa silhouette de soucoupe volante est devenue le symbole de la ville. Il accueille des concerts de classe mondiale, des événements sportifs et des congrès majeurs.",
      },
      {
        q: "Pouvons-nous visiter Cracovie en chemin ?",
        a: "Absolument — Cracovie se trouve à seulement 80 km de Katowice, en route depuis Varsovie. Si vous souhaitez faire un arrêt à Cracovie avant de continuer vers Katowice (ou vice versa), informez-en simplement le responsable lors de la réservation.",
      },
    ],
    ctaTitle: "Réserver un transfert Minsk-Katowice",
    ctaDesc:
      "Soumettez une demande et notre responsable vous contactera sous peu avec un prix exact.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Katowice",
    backBtn: "← Transferts Pologne",
  },
  seo: {
    titleRu: "Трансфер Минск — Катовице | Столица Силезии | ComfortLine",
    titleEn: "Minsk to Katowice Transfer | Silesia's Capital | ComfortLine",
    descRu:
      "Прямой трансфер из Минска в Катовице. ~700 км, 8–10 ч. Сподек, Силезский музей, Никишовец. Граница Беларусь–Польша, фиксированная цена.",
    descEn:
      "Direct transfer from Minsk to Katowice. ~700 km, 8–10 hrs. Spodek, Silesian Museum, Nikiszowiec. Belarus–Poland border crossing, fixed price.",
    pathRu: "/трансфер-минск-катовице",
    pathEn: "/minsk-katowice-transfer",
    breadcrumbRu: "Трансфер Минск–Катовице",
    breadcrumbEn: "Minsk — Katowice",
    fromName: "Минск",
    toName: "Катовице",
  },
};

export default function MinskKatowiceTransferPage() {
  return <RouteLandingPage data={data} />;
}
