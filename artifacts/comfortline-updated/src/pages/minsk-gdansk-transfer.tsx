import { MapPin, ShieldCheck, Anchor } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Гданьск",
    title: "Минск — Гданьск",
    subtitle:
      "Прямой трансфер из Минска в Гданьск — жемчужину польского Балтийского побережья. Готический старый город, знаменитый кран на набережной Мотлавы и мировая столица янтаря.",
    stats: [
      { label: "Расстояние", value: "~750 км" },
      { label: "Время в пути", value: "8–11 ч" },
      { label: "Граница", value: "Беларусь–Польша" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Гданьск — достопримечательности",
    photos: [
      {
        src: "/img/gdansk/long-market.png",
        caption: "Длинный рынок (Długi Targ) — парадная улица старого города",
      },
      {
        src: "/img/gdansk/harbour-crane.png",
        caption: "Гданьский кран (Żuraw) — символ города на реке Мотлава",
      },
      {
        src: "/img/gdansk/st-marys-basilica.png",
        caption: "Базилика Святой Марии — крупнейший кирпичный храм мира",
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
        icon: Anchor,
        title: "Гданьск: порт и старый город",
        desc: "Довезём до отеля в историческом центре, морского порта, порта Сопота или любого адреса в Гданьске.",
      },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      {
        label: "Маршрут",
        value: "Минск → Брест → Тересполь → Варшава → Гданьск",
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
        label: "Аэропорт Гданьска",
        value: "GDN (им. Леха Валенсы) — 13 км от центра",
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
      "Трёхградье: Гданьск, Сопот, Гдыня в одном трансфере",
      "Обратный трансфер: из Гданьска в Минск",
      "Работаем 24/7, включая праздники",
    ],
    faqTitle: "Часто задаваемые вопросы",
    faq: [
      {
        q: "Какой маршрут до Гданьска?",
        a: "Едем через Брест — КПП Брузги/Кузница или Берёза/Половцы — Варшаву — Гданьск. Расстояние около 750 км, время в пути 8–11 ч без учёта границы.",
      },
      {
        q: "Нужна ли виза в Польшу?",
        a: "Гражданам Беларуси требуется шенгенская виза. Уточняйте актуальные требования в посольстве Польши или на официальных сайтах перед поездкой.",
      },
      {
        q: "Можно ли заехать в Сопот или Гдыню?",
        a: "Да — Трёхградье (Гданьск, Сопот, Гдыня) расположено компактно. Довезём до любой точки агломерации, доплата минимальная.",
      },
      {
        q: "Можно ли заехать в Варшаву по дороге?",
        a: "Да, возможна остановка в Варшаве. Договоритесь с менеджером при бронировании, доплата по согласованию.",
      },
    ],
    ctaTitle: "Заказать трансфер Минск–Гданьск",
    ctaDesc:
      "Оставьте заявку — менеджер свяжется с вами в ближайшее время и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Гданьск",
    backBtn: "← Трансферы в Польшу",
  },
  en: {
    badge: "Gdańsk Transfer",
    title: "Minsk — Gdańsk",
    subtitle:
      "Direct private transfer from Minsk to Gdańsk — the jewel of Poland's Baltic coast. Gothic old town, the iconic Crane on the Motława river and the world capital of amber.",
    stats: [
      { label: "Distance", value: "~750 km" },
      { label: "Travel time", value: "8–11 hrs" },
      { label: "Border", value: "Belarus–Poland" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Gdańsk — Highlights",
    photos: [
      {
        src: "/img/gdansk/long-market.png",
        caption:
          "Długi Targ (Long Market) — the showpiece street of the old town",
      },
      {
        src: "/img/gdansk/harbour-crane.png",
        caption: "Gdańsk Crane (Żuraw) — city symbol on the Motława river",
      },
      {
        src: "/img/gdansk/st-marys-basilica.png",
        caption: "St Mary's Basilica — the world's largest brick church",
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
        icon: Anchor,
        title: "Gdańsk — port & old town",
        desc: "We drop you at your hotel in the historic centre, the sea port, Sopot pier or any address in the Tri-City area.",
      },
    ],
    infoTitle: "Route Details",
    infoRows: [
      { label: "Route", value: "Minsk → Brest → Terespol → Warsaw → Gdańsk" },
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
        label: "Gdańsk Airport",
        value: "GDN (Lech Wałęsa Airport) — 13 km from the city centre",
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
      "Tri-City coverage: Gdańsk, Sopot and Gdynia in one ride",
      "Return transfer Gdańsk → Minsk also available",
      "Available 24/7 including public holidays",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "What is the route to Gdańsk?",
        a: "We go via Brest – Bruzgi/Kuźnica or Berёza/Połowce border crossing – Warsaw – Gdańsk. Total distance is about 750 km, travel time 8–11 hours excluding the border stop.",
      },
      {
        q: "Do I need a visa to enter Poland?",
        a: "Citizens of Belarus require a Schengen visa. Please check the latest requirements with the Polish embassy or official sources before travelling.",
      },
      {
        q: "Can you take me to Sopot or Gdynia too?",
        a: "Yes — the Tri-City (Gdańsk, Sopot, Gdynia) is compact. We can drop you anywhere in the agglomeration at minimal extra cost.",
      },
      {
        q: "Can we stop in Warsaw on the way?",
        a: "Yes — a Warsaw stop is easy to arrange. Let the manager know when booking; an additional charge may apply.",
      },
    ],
    ctaTitle: "Book Minsk–Gdańsk Transfer",
    ctaDesc:
      "Submit a request and our manager will contact you shortly with an exact price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Gdańsk",
    backBtn: "← Poland transfers",
  },
  pl: {
    badge: "Transfer Gdański",
    title: "Mińsk — Gdańsk",
    subtitle:
      "Bezpośredni prywatny transfer z Mińska do Gdańska — klejnotu polskiego wybrzeża Bałtyku. Gotycka starówka, kultowy Żuraw nad Motławą i światowa stolica bursztynu.",
    stats: [
      { label: "Odległość", value: "~750 km" },
      { label: "Czas podróży", value: "8–11 godz" },
      { label: "Granica", value: "Białoruś – Polska" },
      { label: "Klasa pojazdu", value: "Biznes / Minivan" },
    ],
    photosTitle: "Gdańsk — najważniejsze wydarzenia",
    photos: [
      {
        src: "/img/gdansk/long-market.png",
        caption: "Długi Targ – wizytówka starego miasta",
      },
      {
        src: "/img/gdansk/harbour-crane.png",
        caption: "Żuraw Gdański (Żuraw) — symbol miasta nad Motławą",
      },
      {
        src: "/img/gdansk/st-marys-basilica.png",
        caption: "Bazylika Mariacka — największy ceglany kościół na świecie",
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
        icon: Anchor,
        title: "Gdańsk — port i stare miasto",
        desc: "Dowieziemy Cię do hotelu w historycznym centrum, porcie morskim, sopockim molo lub pod dowolny adres na terenie Trójmiasta.",
      },
    ],
    infoTitle: "Szczegóły trasy",
    infoRows: [
      {
        label: "Trasa",
        value: "Mińsk → Brześć → Terespol → Warszawa → Gdańsk",
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
        label: "Lotnisko w Gdańsku",
        value: "GDN (Lotnisko im. Lecha Wałęsy) — 13 km od centrum miasta",
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
      "Zasięg Trójmiasta: Gdańsk, Sopot i Gdynia w jednym przejeździe",
      "Dostępny również transfer powrotny Gdańsk → Mińsk",
      "Dostępność 24 godziny na dobę, 7 dni w tygodniu, także w święta",
    ],
    faqTitle: "Często zadawane pytania",
    faq: [
      {
        q: "Jaka jest trasa do Gdańska?",
        a: "Jedziemy przez przejście graniczne Brześć – Bruzgi/Kuźnica lub Berёza/Połowce – Warszawa – Gdańsk. Całkowita odległość wynosi około 750 km, czas przejazdu 8–11 godzin bez przystanku granicznego.",
      },
      {
        q: "Czy potrzebuję wizy, aby wjechać do Polski?",
        a: "Obywatele Białorusi potrzebują wizy Schengen. Przed podróżą sprawdź aktualne wymagania w polskiej ambasadzie lub w oficjalnych źródłach.",
      },
      {
        q: "Czy możesz mnie też zabrać do Sopotu lub Gdyni?",
        a: "Tak – Trójmiasto (Gdańsk, Sopot, Gdynia) jest zwarte. Możemy podwieźć Cię w dowolne miejsce w aglomeracji za minimalną dodatkową opłatą.",
      },
      {
        q: "Czy możemy po drodze zatrzymać się w Warszawie?",
        a: "Tak – przystanek w Warszawie jest łatwy do zorganizowania. Poinformuj menadżera podczas dokonywania rezerwacji; może obowiązywać dodatkowa opłata.",
      },
    ],
    ctaTitle: "Zarezerwuj transfer Mińsk–Gdańsk",
    ctaDesc:
      "Prześlij zapytanie, a nasz menedżer wkrótce skontaktuje się z Tobą i poda dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Gdańska",
    backBtn: "← Polska transfery",
  },
  fr: {
    badge: "Transfert Gdańsk",
    title: "Minsk — Gdańsk",
    subtitle:
      "Transfert privé direct de Minsk à Gdańsk, le joyau de la côte baltique polonaise. Vieille ville gothique, grue emblématique sur la rivière Motława et capitale mondiale de l'ambre.",
    stats: [
      { label: "Distance", value: "~750km" },
      { label: "Temps de trajet", value: "8 à 11 heures" },
      { label: "Frontière", value: "Biélorussie-Pologne" },
      { label: "Classe de véhicule", value: "Affaires / Minifourgonnette" },
    ],
    photosTitle: "Gdańsk — Points forts",
    photos: [
      {
        src: "/img/gdansk/long-market.png",
        caption: "Długi Targ (Long Marché) – la rue phare de la vieille ville",
      },
      {
        src: "/img/gdansk/harbour-crane.png",
        caption:
          "Grue de Gdańsk (Żuraw) — symbole de la ville sur la rivière Motława",
      },
      {
        src: "/img/gdansk/st-marys-basilica.png",
        caption:
          "Basilique Sainte-Marie, la plus grande église en brique du monde",
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
        icon: Anchor,
        title: "Gdańsk — port et vieille ville",
        desc: "Nous vous déposons à votre hôtel dans le centre historique, au port maritime, à la jetée de Sopot ou à toute adresse du quartier Tri-City.",
      },
    ],
    infoTitle: "Détails de l'itinéraire",
    infoRows: [
      {
        label: "Itinéraire",
        value: "Minsk → Brest → Terespol → Varsovie → Gdańsk",
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
        label: "Aéroport de Gdańsk",
        value: "GDN (Aéroport de Lech Wałęsa) — 13 km du centre ville",
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
      "Couverture Tri-City : Gdańsk, Sopot et Gdynia en un seul trajet",
      "Transfert aller-retour Gdańsk → Minsk également disponible",
      "Disponible 24h/24 et 7j/7 y compris les jours fériés",
    ],
    faqTitle: "Questions fréquemment posées",
    faq: [
      {
        q: "Quel est l'itinéraire pour se rendre à Gdańsk?",
        a: "Nous passons par Brest – Bruzgi/Kuźnica ou Berёza/Połowce – Varsovie – Gdańsk. La distance totale est d'environ 750 km, la durée du trajet est de 8 à 11 heures sans compter l'arrêt frontalier.",
      },
      {
        q: "Ai-je besoin d’un visa pour entrer en Pologne ?",
        a: "Les citoyens biélorusses ont besoin d'un visa Schengen. Veuillez vérifier les dernières exigences auprès de l'ambassade de Pologne ou de sources officielles avant de voyager.",
      },
      {
        q: "Pouvez-vous aussi m'emmener à Sopot ou à Gdynia ?",
        a: "Oui, la Tri-City (Gdańsk, Sopot, Gdynia) est compacte. Nous pouvons vous déposer n'importe où dans l'agglomération avec un supplément minime.",
      },
      {
        q: "Pouvons-nous nous arrêter à Varsovie en chemin ?",
        a: "Oui, un arrêt à Varsovie est facile à organiser. Informez le gérant lors de la réservation ; des frais supplémentaires peuvent s'appliquer.",
      },
    ],
    ctaTitle: "Réserver un transfert Minsk-Gdańsk",
    ctaDesc:
      "Soumettez une demande et notre responsable vous contactera sous peu avec un prix exact.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Gdańsk",
    backBtn: "← Transferts Pologne",
  },
  seo: {
    titleRu:
      "Трансфер Минск — Гданьск | Польское побережье Балтики | ComfortLine",
    titleEn: "Minsk to Gdańsk Transfer | Polish Baltic Coast | ComfortLine",
    descRu:
      "Прямой трансфер из Минска в Гданьск. ~750 км, 8–11 ч. Длинный рынок, кран Журав, Сопот. Граница Беларусь–Польша, фиксированная цена.",
    descEn:
      "Direct transfer from Minsk to Gdańsk. ~750 km, 8–11 hrs. Long Market, Żuraw crane, Sopot. Belarus–Poland border crossing, fixed price.",
    pathRu: "/трансфер-минск-гданьск",
    pathEn: "/minsk-gdansk-transfer",
    breadcrumbRu: "Трансфер Минск–Гданьск",
    breadcrumbEn: "Minsk — Gdańsk",
    fromName: "Минск",
    toName: "Гданьск",
  },
};

export default function MinskGdanskTransferPage() {
  return <RouteLandingPage data={data} />;
}
