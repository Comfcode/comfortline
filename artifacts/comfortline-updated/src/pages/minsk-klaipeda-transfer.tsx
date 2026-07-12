import { MapPin, ShieldCheck, Anchor } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Клайпеду",
    title: "Минск — Клайпеда",
    subtitle:
      "Прямой трансфер из Минска в Клайпеду — портовый город на Балтийском побережье Литвы. Паромы в Швецию и Германию, Куршская коса и старый немецкий город.",
    stats: [
      { label: "Расстояние", value: "~420 км" },
      { label: "Время в пути", value: "5–7 ч" },
      { label: "Граница", value: "Беларусь–Литва" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Клайпеда — достопримечательности",
    photos: [
      {
        src: "/img/klaipeda/old-town.png",
        caption: "Старый город Клайпеды (бывший немецкий квартал)",
      },
      {
        src: "/img/klaipeda/curonian-spit.png",
        caption: "Куршская коса — объект ЮНЕСКО",
      },
      {
        src: "/img/klaipeda/ferry-port.png",
        caption: "Паромный порт — переправа на Куршскую косу",
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
        icon: Anchor,
        title: "Клайпеда: порт и старый город",
        desc: "Довезём до парома в Швецию или Германию, отеля в старом городе или любого адреса в Клайпеде.",
      },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      {
        label: "Маршрут",
        value: "Минск → Молодечно → Медининкай → Вильнюс → Каунас → Клайпеда",
      },
      { label: "Расстояние", value: "~420 км" },
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
        label: "Паромы из Клайпеды",
        value: "DFDS в Киль (Германия), Stena Line в Гётеборг (Швеция)",
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
      "Возможна остановка в Вильнюсе или Каунасе",
      "Обратный трансфер: из Клайпеды в Минск",
      "Работаем 24/7, включая праздники",
      "Перевозим с детьми и питомцами",
    ],
    faqTitle: "Часто задаваемые вопросы",
    faq: [
      {
        q: "Какой маршрут до Клайпеды?",
        a: "Едем через Молодечно — Ошмяны — КПП Медининкай/Шальчининкай — Вильнюс — Каунас — Клайпеда. Расстояние около 420 км, время в пути 5–7 ч без учёта границы.",
      },
      {
        q: "Нужна ли виза в Литву?",
        a: "Гражданам Беларуси требуется шенгенская виза или национальная виза Литовской Республики. Уточняйте актуальные требования в посольстве или на официальных сайтах.",
      },
      {
        q: "Можно ли доехать до парома вовремя?",
        a: "Да, рассчитаем время подачи с учётом времени на паром, очереди на границе и пути. Укажите время отплытия при бронировании.",
      },
      {
        q: "Можно ли заехать в Вильнюс или Каунас по дороге?",
        a: "Да, мы можем сделать остановку — договоритесь с менеджером при бронировании, доплата по согласованию.",
      },
    ],
    ctaTitle: "Заказать трансфер Минск–Клайпеда",
    ctaDesc:
      "Оставьте заявку — менеджер свяжется с вами в ближайшее время и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Клайпеда",
    backBtn: "← Трансферы в Литву",
  },
  en: {
    badge: "Klaipėda Transfer",
    title: "Minsk — Klaipėda",
    subtitle:
      "Direct private transfer from Minsk to Klaipėda — Lithuania's Baltic port city. Ferries to Sweden and Germany, the Curonian Spit UNESCO site and a charming old German quarter.",
    stats: [
      { label: "Distance", value: "~420 km" },
      { label: "Travel time", value: "5–7 hrs" },
      { label: "Border", value: "Belarus–Lithuania" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Klaipėda — Highlights",
    photos: [
      {
        src: "/img/klaipeda/old-town.png",
        caption: "Klaipėda Old Town (former German quarter)",
      },
      {
        src: "/img/klaipeda/curonian-spit.png",
        caption: "Curonian Spit — UNESCO World Heritage Site",
      },
      {
        src: "/img/klaipeda/ferry-port.png",
        caption: "Ferry port — crossing to the Curonian Spit",
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
        icon: Anchor,
        title: "Klaipėda — port & old town",
        desc: "We drop you at the ferry terminal to Sweden or Germany, your hotel in the old town, or any address in Klaipėda.",
      },
    ],
    infoTitle: "Route Details",
    infoRows: [
      {
        label: "Route",
        value:
          "Minsk → Maladzyechna → Medininkai → Vilnius → Kaunas → Klaipėda",
      },
      { label: "Distance", value: "~420 km" },
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
        label: "Ferries from Klaipėda",
        value: "DFDS to Kiel (Germany), Stena Line to Gothenburg (Sweden)",
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
      "Optional stop in Vilnius or Kaunas en route",
      "Return transfer Klaipėda → Minsk also available",
      "Available 24/7 including public holidays",
      "Kids and pets welcome",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "What is the route to Klaipėda?",
        a: "We go via Maladzyechna – Ashmyany – Medininkai/Šalčininkai border crossing – Vilnius – Kaunas – Klaipėda. Total distance is about 420 km, travel time 5–7 hours excluding the border stop.",
      },
      {
        q: "Do I need a visa to enter Lithuania?",
        a: "Citizens of Belarus require a Schengen visa or a Lithuanian national visa. Please check the latest requirements with the embassy or official sources before travelling.",
      },
      {
        q: "Can you get me to the ferry on time?",
        a: "Yes — we calculate pickup time accounting for your ferry departure, border queues and travel time. Please share your sailing time when booking.",
      },
      {
        q: "Can we stop in Vilnius or Kaunas on the way?",
        a: "Yes — we can make a stop. Just let the manager know when booking; an additional charge may apply.",
      },
    ],
    ctaTitle: "Book Minsk–Klaipėda Transfer",
    ctaDesc:
      "Submit a request and our manager will contact you shortly with an exact price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Klaipėda",
    backBtn: "← Lithuania transfers",
  },
  pl: {
    badge: "Transfer z Kłajpedy",
    title: "Mińsk — Kłajpeda",
    subtitle:
      "Bezpośredni prywatny transfer z Mińska do Kłajpedy — bałtyckiego miasta portowego na Litwie. Promy do Szwecji i Niemiec, Mierzeja Kurońska wpisana na listę UNESCO i urocza stara niemiecka dzielnica.",
    stats: [
      { label: "Odległość", value: "~420 km" },
      { label: "Czas podróży", value: "5–7 godz" },
      { label: "Granica", value: "Białoruś – Litwa" },
      { label: "Klasa pojazdu", value: "Biznes / Minivan" },
    ],
    photosTitle: "Kłajpeda — najważniejsze atrakcje",
    photos: [
      {
        src: "/img/klaipeda/old-town.png",
        caption: "Stare Miasto w Kłajpedzie (dawna dzielnica niemiecka)",
      },
      {
        src: "/img/klaipeda/curonian-spit.png",
        caption:
          "Mierzeja Kurońska – obiekt wpisany na Listę Światowego Dziedzictwa UNESCO",
      },
      {
        src: "/img/klaipeda/ferry-port.png",
        caption: "Port promowy – przeprawa na Mierzeję Kurońską",
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
        icon: Anchor,
        title: "Kłajpeda — port i stare miasto",
        desc: "Podwieziemy Cię na terminal promowy do Szwecji lub Niemiec, do Twojego hotelu na starym mieście lub pod dowolny adres w Kłajpedzie.",
      },
    ],
    infoTitle: "Szczegóły trasy",
    infoRows: [
      {
        label: "Trasa",
        value: "Mińsk → Mołodeczna → Medininkai → Wilno → Kowno → Kłajpeda",
      },
      { label: "Odległość", value: "~420 km" },
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
        label: "Promy z Kłajpedy",
        value: "DFDS do Kilonii (Niemcy), Stena Line do Göteborga (Szwecja)",
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
      "Opcjonalny postój w Wilnie lub Kownie na trasie",
      "Dostępny jest również transfer powrotny Kłajpeda → Mińsk",
      "Dostępność 24 godziny na dobę, 7 dni w tygodniu, także w święta",
      "Dzieci i zwierzęta mile widziane",
    ],
    faqTitle: "Często zadawane pytania",
    faq: [
      {
        q: "Jaka jest trasa do Kłajpedy?",
        a: "Jedziemy przez Mołodechnę – Oszmiany – Medininkai/Salčininkai przejście graniczne – Wilno – Kowno – Kłajpeda. Całkowita odległość wynosi około 420 km, czas przejazdu 5–7 godzin bez przystanku granicznego.",
      },
      {
        q: "Czy potrzebuję wizy, aby wjechać na Litwę?",
        a: "Obywatele Białorusi potrzebują wizy Schengen lub litewskiej wizy krajowej. Przed podróżą sprawdź najnowsze wymagania w ambasadzie lub w oficjalnych źródłach.",
      },
      {
        q: "Czy możesz mnie zabrać na prom na czas?",
        a: "Tak – obliczamy czas odbioru, biorąc pod uwagę wypłynięcie promu, kolejki na granicy i czas podróży. Podczas dokonywania rezerwacji prosimy o podanie czasu rejsu.",
      },
      {
        q: "Czy możemy po drodze zatrzymać się w Wilnie lub Kownie?",
        a: "Tak – możemy się zatrzymać. Po prostu daj znać menadżerowi podczas dokonywania rezerwacji; może obowiązywać dodatkowa opłata.",
      },
    ],
    ctaTitle: "Zarezerwuj transfer Mińsk – Kłajpeda",
    ctaDesc:
      "Prześlij zapytanie, a nasz menedżer wkrótce skontaktuje się z Tobą i poda dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Kłajpeda",
    backBtn: "← Litwa transfery",
  },
  fr: {
    badge: "Transfert Klaipėda",
    title: "Minsk — Klaipėda",
    subtitle:
      "Transfert privé direct de Minsk à Klaipėda, la ville portuaire balte de Lituanie. Ferries vers la Suède et l'Allemagne, le site UNESCO de l'isthme de Courlande et un charmant vieux quartier allemand.",
    stats: [
      { label: "Distance", value: "~420km" },
      { label: "Temps de trajet", value: "5 à 7 heures" },
      { label: "Frontière", value: "Biélorussie-Lituanie" },
      { label: "Classe de véhicule", value: "Affaires / Minifourgonnette" },
    ],
    photosTitle: "Klaipėda — Points forts",
    photos: [
      {
        src: "/img/klaipeda/old-town.png",
        caption: "Vieille ville de Klaipėda (ancien quartier allemand)",
      },
      {
        src: "/img/klaipeda/curonian-spit.png",
        caption: "Isthme de Courlande — Site du patrimoine mondial de l'UNESCO",
      },
      {
        src: "/img/klaipeda/ferry-port.png",
        caption: "Port de ferry — traversée vers l'isthme de Courlande",
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
        icon: Anchor,
        title: "Klaipėda — port et vieille ville",
        desc: "Nous vous déposons au terminal des ferries vers la Suède ou l'Allemagne, à votre hôtel dans la vieille ville ou à n'importe quelle adresse à Klaipėda.",
      },
    ],
    infoTitle: "Détails de l'itinéraire",
    infoRows: [
      {
        label: "Itinéraire",
        value: "Minsk → Maladetchna → Medininkai → Vilnius → Kaunas → Klaipėda",
      },
      { label: "Distance", value: "~420km" },
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
        label: "Ferries depuis Klaipėda",
        value: "DFDS vers Kiel (Allemagne), Stena Line vers Göteborg (Suède)",
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
      "Arrêt facultatif à Vilnius ou Kaunas en route",
      "Transfert aller-retour Klaipėda → Minsk également disponible",
      "Disponible 24h/24 et 7j/7 y compris les jours fériés",
      "Enfants et animaux bienvenus",
    ],
    faqTitle: "Questions fréquemment posées",
    faq: [
      {
        q: "Quel est l'itinéraire pour rejoindre Klaipėda?",
        a: "Nous passons par Maladzyechna – Ashmyany – Poste frontière Medininkai/Šalčininkai – Vilnius – Kaunas – Klaipėda. La distance totale est d'environ 420 km, temps de trajet de 5 à 7 heures sans compter l'arrêt frontalier.",
      },
      {
        q: "Ai-je besoin d’un visa pour entrer en Lituanie ?",
        a: "Les citoyens biélorusses ont besoin d'un visa Schengen ou d'un visa national lituanien. Veuillez vérifier les dernières exigences auprès de l'ambassade ou des sources officielles avant de voyager.",
      },
      {
        q: "Pouvez-vous m'amener au ferry à temps ?",
        a: "Oui, nous calculons l'heure de prise en charge en tenant compte du départ de votre ferry, des files d'attente aux frontières et du temps de trajet. Veuillez partager votre heure de navigation lors de la réservation.",
      },
      {
        q: "Pouvons-nous nous arrêter à Vilnius ou à Kaunas en chemin ?",
        a: "Oui, nous pouvons nous arrêter. Il suffit d'en informer le responsable lors de la réservation ; des frais supplémentaires peuvent s'appliquer.",
      },
    ],
    ctaTitle: "Réserver un transfert Minsk-Klaipėda",
    ctaDesc:
      "Soumettez une demande et notre responsable vous contactera sous peu avec un prix exact.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Klaipėda",
    backBtn: "← Transferts Lituanie",
  },
  seo: {
    titleRu:
      "Трансфер Минск — Клайпеда | Паром в Германию и Швецию | ComfortLine",
    titleEn:
      "Minsk to Klaipėda Transfer | Ferry to Germany & Sweden | ComfortLine",
    descRu:
      "Прямой трансфер из Минска в Клайпеду. ~420 км, 5–7 ч. Паром в Германию и Швецию, Куршская коса, старый город. Фиксированная цена, граница Беларусь–Литва.",
    descEn:
      "Direct transfer from Minsk to Klaipėda. ~420 km, 5–7 hrs. Ferries to Germany & Sweden, Curonian Spit, old town. Fixed price, Belarus–Lithuania border crossing.",
    pathRu: "/трансфер-минск-клайпеда",
    pathEn: "/minsk-klaipeda-transfer",
    breadcrumbRu: "Трансфер Минск–Клайпеда",
    breadcrumbEn: "Minsk — Klaipėda",
    fromName: "Минск",
    toName: "Клайпеда",
  },
};

export default function MinskKlaipedaTransferPage() {
  return <RouteLandingPage data={data} />;
}
