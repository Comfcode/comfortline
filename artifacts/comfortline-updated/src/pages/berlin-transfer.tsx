import { MapPin, ShieldCheck, Building2 } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Берлин",
    title: "Минск — Берлин",
    subtitle:
      "Прямой трансфер из Минска в столицу Германии. Через Варшаву или Познань — комфортный автомобиль, профессиональный водитель, без пересадок.",
    stats: [
      { label: "Расстояние", value: "~1 150 км" },
      { label: "Время в пути", value: "14–16 ч" },
      { label: "Границы", value: "BY–PL–DE" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Берлин — достопримечательности",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/1280px-Brandenburger_Tor_abends.jpg",
        caption: "Бранденбургские ворота",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/141227_Berliner_Dom.jpg/1280px-141227_Berliner_Dom.jpg",
        caption: "Берлинский собор",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Berlin_reichstag_west_panorama_2.jpg/1280px-Berlin_reichstag_west_panorama_2.jpg",
        caption: "Центр Берлина",
      },
    ],
    howTitle: "Как проходит поездка",
    steps: [
      {
        icon: MapPin,
        title: "Выезд из Минска",
        desc: "Водитель заберёт вас рано утром — рекомендуем выезжать накануне или очень рано, чтобы учесть время на границе.",
      },
      {
        icon: ShieldCheck,
        title: "Две границы",
        desc: "Беларусь–Польша, затем Польша–Германия (Шенген). Водитель знает процедуры и документы.",
      },
      {
        icon: Building2,
        title: "Берлин: любой адрес",
        desc: "Отель, аэропорт BER, Hauptbahnhof или любой адрес в пределах города.",
      },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      { label: "Маршрут", value: "Минск → Брест → Варшава → Берлин" },
      { label: "Расстояние", value: "~1 150 км" },
      { label: "Границы", value: "BY–PL (Тересполь), PL–DE (Шенген)" },
      {
        label: "Рекомендуемое время в пути",
        value: "1–2 дня с ночёвкой в Варшаве",
      },
      { label: "Документы", value: "Шенгенская виза, загранпаспорт" },
    ],
    includedTitle: "Что включено",
    included: [
      "Подача от адреса в Минске",
      "Прямой маршрут через Польшу",
      "Помощь на двух пограничных переходах",
      "Питьевая вода и комфортный салон",
      "Детские кресла по запросу",
      "Фиксированная цена на весь маршрут",
    ],
    whyTitle: "Почему ComfortLine",
    whyItems: [
      "Опыт дальних маршрутов по Европе",
      "Маршрут с ночёвкой в Варшаве — по запросу",
      "Водитель знает КПП и нюансы Шенгена",
      "Обратный трансфер из Берлина в Минск",
      "Удобно для тех, кто не хочет ехать на поезде",
      "Подходит для групп до 8 человек",
    ],
    ctaTitle: "Заказать трансфер Минск–Берлин",
    ctaDesc:
      "Оставьте заявку — менеджер обсудит удобное время и стоимость маршрута.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Берлин",
    backBtn: "← Все услуги",
  },
  en: {
    badge: "Berlin Transfer",
    title: "Minsk — Berlin",
    subtitle:
      "Private transfer from Minsk to the German capital. Via Warsaw or Poznan — comfortable vehicle, professional chauffeur, no train changes or bus stops.",
    stats: [
      { label: "Distance", value: "~1,150 km" },
      { label: "Travel time", value: "14–16 hrs" },
      { label: "Borders", value: "BY–PL–DE" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Berlin — Highlights",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/1280px-Brandenburger_Tor_abends.jpg",
        caption: "Brandenburg Gate",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/141227_Berliner_Dom.jpg/1280px-141227_Berliner_Dom.jpg",
        caption: "Berlin Cathedral",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Berlin_reichstag_west_panorama_2.jpg/1280px-Berlin_reichstag_west_panorama_2.jpg",
        caption: "Central Berlin",
      },
    ],
    howTitle: "How the transfer works",
    steps: [
      {
        icon: MapPin,
        title: "Early departure from Minsk",
        desc: "Your driver picks you up early — we recommend a very early start or an overnight stop in Warsaw to account for border time.",
      },
      {
        icon: ShieldCheck,
        title: "Two border crossings",
        desc: "Belarus–Poland, then Poland–Germany (Schengen). Your driver knows all procedures and paperwork.",
      },
      {
        icon: Building2,
        title: "Berlin — any address",
        desc: "Hotel, Berlin Brandenburg Airport (BER), Hauptbahnhof or any address in the city.",
      },
    ],
    infoTitle: "Route Details",
    infoRows: [
      { label: "Route", value: "Minsk → Brest → Warsaw → Berlin" },
      { label: "Distance", value: "~1,150 km" },
      { label: "Borders", value: "BY–PL (Terespol), PL–DE (Schengen)" },
      {
        label: "Recommended travel plan",
        value: "1–2 days with overnight stop in Warsaw",
      },
      { label: "Documents required", value: "Schengen visa, valid passport" },
    ],
    includedTitle: "What's included",
    included: [
      "Pickup from your Minsk address",
      "Direct route via Poland",
      "Assistance at both border crossings",
      "Bottled water and comfortable cabin",
      "Child seats on request",
      "Fixed price for the entire route",
    ],
    whyTitle: "Why ComfortLine",
    whyItems: [
      "Experience with long-haul European routes",
      "Warsaw overnight option available on request",
      "Driver knows Schengen entry procedures",
      "Return transfer Berlin → Minsk available",
      "Ideal for those avoiding trains or coaches",
      "Suitable for groups up to 8 people",
    ],
    ctaTitle: "Book Minsk–Berlin Transfer",
    ctaDesc:
      "Submit a request and our manager will discuss timing and pricing for your route.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Berlin",
    backBtn: "← All services",
  },
  pl: {
    badge: "Przesiadka w Berlinie",
    title: "Mińsk — Berlin",
    subtitle:
      "Prywatny transfer z Mińska do stolicy Niemiec. Przez Warszawę lub Poznań — wygodny pojazd, profesjonalny kierowca, brak przesiadek i przystanków autobusowych.",
    stats: [
      { label: "Odległość", value: "~1150 km" },
      { label: "Czas podróży", value: "14–16 godz" },
      { label: "Granice", value: "BY–PL–DE" },
      { label: "Klasa pojazdu", value: "Biznes / Minivan" },
    ],
    photosTitle: "Berlin — najważniejsze wydarzenia",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/1280px-Brandenburger_Tor_abends.jpg",
        caption: "Brama Brandenburska",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/141227_Berliner_Dom.jpg/1280px-141227_Berliner_Dom.jpg",
        caption: "Katedra w Berlinie",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Berlin_reichstag_west_panorama_2.jpg/1280px-Berlin_reichstag_west_panorama_2.jpg",
        caption: "Centrum Berlina",
      },
    ],
    howTitle: "Jak działa transfer",
    steps: [
      {
        icon: MapPin,
        title: "Wczesny wyjazd z Mińska",
        desc: "Twój kierowca odbierze Cię wcześniej – zalecamy bardzo wczesny start lub postój na noc w Warszawie, aby uwzględnić czas graniczny.",
      },
      {
        icon: ShieldCheck,
        title: "Dwa przejścia graniczne",
        desc: "Białoruś – Polska, następnie Polska – Niemcy (Schengen). Twój kierowca zna wszystkie procedury i dokumenty.",
      },
      {
        icon: Building2,
        title: "Berlin — dowolny adres",
        desc: "Hotel, lotnisko Berlin Brandenburg (BER), Hauptbahnhof lub dowolny adres w mieście.",
      },
    ],
    infoTitle: "Szczegóły trasy",
    infoRows: [
      { label: "Trasa", value: "Mińsk → Brześć → Warszawa → Berlin" },
      { label: "Odległość", value: "~1150 km" },
      { label: "Granice", value: "BY–PL (Terespol), PL–DE (Schengen)" },
      {
        label: "Zalecany plan podróży",
        value: "1-2 dni z noclegiem w Warszawie",
      },
      { label: "Wymagane dokumenty", value: "Wiza Schengen, ważny paszport" },
    ],
    includedTitle: "Co jest wliczone w cenę",
    included: [
      "Odbiór z Twojego adresu w Mińsku",
      "Bezpośrednia trasa przez Polskę",
      "Pomoc na obu przejściach granicznych",
      "Woda butelkowana i wygodna kabina",
      "Foteliki dziecięce na zamówienie",
      "Stała cena za całą trasę",
    ],
    whyTitle: "Dlaczego ComfortLine",
    whyItems: [
      "Doświadczenie na długodystansowych trasach europejskich",
      "Opcja noclegu w Warszawie dostępna na życzenie",
      "Kierowca zna procedury wjazdu do strefy Schengen",
      "Dostępny transfer powrotny Berlin → Mińsk",
      "Idealny dla osób unikających pociągów i autokarów",
      "Odpowiedni dla grup do 8 osób",
    ],
    ctaTitle: "Zarezerwuj transfer Mińsk – Berlin",
    ctaDesc:
      "Prześlij prośbę, a nasz menedżer omówi termin i cenę Twojej trasy.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Berlinie",
    backBtn: "← Wszystkie usługi",
  },
  fr: {
    badge: "Transfert Berlin",
    title: "Minsk — Berlin",
    subtitle:
      "Transfert privé de Minsk vers la capitale allemande. Via Varsovie ou Poznan — véhicule confortable, chauffeur professionnel, pas de changement de train ni d'arrêt de bus.",
    stats: [
      { label: "Distance", value: "~1 150km" },
      { label: "Temps de trajet", value: "14 à 16 heures" },
      { label: "Frontières", value: "BY-PL-DE" },
      { label: "Classe de véhicule", value: "Affaires / Minifourgonnette" },
    ],
    photosTitle: "Berlin — Points forts",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/1280px-Brandenburger_Tor_abends.jpg",
        caption: "Porte de Brandebourg",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/141227_Berliner_Dom.jpg/1280px-141227_Berliner_Dom.jpg",
        caption: "Cathédrale de Berlin",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Berlin_reichstag_west_panorama_2.jpg/1280px-Berlin_reichstag_west_panorama_2.jpg",
        caption: "Centre de Berlin",
      },
    ],
    howTitle: "Comment fonctionne le transfert",
    steps: [
      {
        icon: MapPin,
        title: "Départ anticipé de Minsk",
        desc: "Votre chauffeur vient vous chercher tôt — nous vous recommandons de commencer très tôt ou de passer la nuit à Varsovie pour tenir compte de l'heure à la frontière.",
      },
      {
        icon: ShieldCheck,
        title: "Deux postes frontaliers",
        desc: "Biélorussie-Pologne, puis Pologne-Allemagne (Schengen). Votre chauffeur connaît toutes les procédures et tous les documents.",
      },
      {
        icon: Building2,
        title: "Berlin — n'importe quelle adresse",
        desc: "Hôtel, aéroport de Berlin Brandenburg (BER), Hauptbahnhof ou n'importe quelle adresse dans la ville.",
      },
    ],
    infoTitle: "Détails de l'itinéraire",
    infoRows: [
      { label: "Itinéraire", value: "Minsk → Brest → Varsovie → Berlin" },
      { label: "Distance", value: "~1 150km" },
      { label: "Frontières", value: "BY-PL (Terespol), PL-DE (Schengen)" },
      {
        label: "Plan de voyage recommandé",
        value: "1 à 2 jours avec nuitée à Varsovie",
      },
      { label: "Documents requis", value: "Visa Schengen, passeport valide" },
    ],
    includedTitle: "Ce qui est inclus",
    included: [
      "Prise en charge à votre adresse à Minsk",
      "Route directe via la Pologne",
      "Assistance aux deux postes frontaliers",
      "Eau en bouteille et cabine confortable",
      "Sièges enfants sur demande",
      "Prix fixe pour tout le parcours",
    ],
    whyTitle: "Pourquoi ComfortLine",
    whyItems: [
      "Expérience avec les routes européennes long-courriers",
      "Option de nuit à Varsovie disponible sur demande",
      "Le conducteur connaît les procédures d'entrée dans l'espace Schengen",
      "Transfert aller-retour Berlin → Minsk disponible",
      "Idéal pour ceux qui évitent les trains ou les autocars",
      "Convient aux groupes jusqu'à 8 personnes",
    ],
    ctaTitle: "Réserver un transfert Minsk-Berlin",
    ctaDesc:
      "Soumettez une demande et notre responsable discutera du calendrier et du prix de votre itinéraire.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Berlin",
    backBtn: "← Tous les services",
  },
  seo: {
    titleRu:
      "Трансфер Минск — Берлин | Прямая поездка в Германию | ComfortLine",
    titleEn: "Minsk to Berlin Transfer | Direct Ride to Germany | ComfortLine",
    descRu:
      "Трансфер из Минска в Берлин — столицу Германии. ~1150 км, 14–16 ч через Варшаву или Познань. Фиксированная цена, опытный водитель, две границы (Беларусь–Польша и Польша–Германия).",
    descEn:
      "Transfer from Minsk to Berlin, Germany. ~1,150 km, 14–16 hrs via Warsaw or Poznan. Fixed price, professional driver, two border crossings (BY–PL & PL–DE).",
    pathRu: "/трансфер-берлин",
    pathEn: "/berlin-transfer",
    breadcrumbRu: "Трансфер в Берлин",
    breadcrumbEn: "Minsk — Berlin",
    fromName: "Минск",
    toName: "Берлин",
  },
};

export default function BerlinTransferPage() {
  return <RouteLandingPage data={data} />;
}
