import { MapPin, ShieldCheck, Building2 } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Ригу",
    title: "Минск — Рига",
    subtitle:
      "Прямой трансфер из Минска в центр Риги. Деловые поездки, отдых на Балтийском побережье или транзит через Латвию — без пересадок и автобусов.",
    stats: [
      { label: "Расстояние", value: "~470 км" },
      { label: "Время в пути", value: "5–7 ч" },
      { label: "Граница", value: "Беларусь–Латвия" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Рига — достопримечательности",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Views_from_St._Peter%27s_Church_Spire%2C_Riga_20180808-2.jpg/1280px-Views_from_St._Peter%27s_Church_Spire%2C_Riga_20180808-2.jpg",
        caption: "Старый город Риги",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/House_of_Blackheads_at_Dusk_3%2C_Riga%2C_Latvia_-_Diliff.jpg/1280px-House_of_Blackheads_at_Dusk_3%2C_Riga%2C_Latvia_-_Diliff.jpg",
        caption: "Дом Черноголовых",
      },
      {
        src: "https://images.pexels.com/photos/7245326/pexels-photo-7245326.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Балтийское побережье",
      },
    ],
    howTitle: "Как проходит поездка",
    steps: [
      {
        icon: MapPin,
        title: "Выезд из Минска",
        desc: "Водитель заберёт вас по указанному адресу в Минске и направится к латвийской границе.",
      },
      {
        icon: ShieldCheck,
        title: "Граница Беларусь–Латвия",
        desc: "Переход Урбаны / Патарниеки. Водитель знает актуальные очереди и помогает на КПП.",
      },
      {
        icon: Building2,
        title: "Рига: любой адрес",
        desc: "Старый город, аэропорт RIX, отель или Юрмала — доставим точно по назначению.",
      },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      {
        label: "Маршрут",
        value: "Минск → Полоцк → Урбаны → Даугавпилс → Рига",
      },
      { label: "Расстояние", value: "~470 км" },
      {
        label: "Пограничный переход",
        value: "Урбаны / Патарниеки (Беларусь–Латвия)",
      },
      {
        label: "Время пересечения границы",
        value: "1–6 ч в зависимости от очереди",
      },
      {
        label: "Необходимые документы",
        value: "Виза Шенген (для граждан не ЕС), загранпаспорт",
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
      "Регулярные рейсы в Ригу с 2015 года",
      "Водитель знает переход Урбаны и очереди",
      "Можно добавить остановку в Юрмале",
      "Обратный трансфер: из Риги в Минск",
      "Работаем 24/7, включая праздники",
      "Перевозим с детьми и питомцами",
    ],
    ctaTitle: "Заказать трансфер Минск–Рига",
    ctaDesc:
      "Оставьте заявку — менеджер свяжется с вами в ближайшее время и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Рига",
    backBtn: "← Все услуги",
  },
  en: {
    badge: "Riga Transfer",
    title: "Minsk — Riga",
    subtitle:
      "Direct private transfer from Minsk to Riga city centre. Business meetings, Baltic seaside breaks or onward travel through Latvia — no changes, no buses.",
    stats: [
      { label: "Distance", value: "~470 km" },
      { label: "Travel time", value: "5–7 hrs" },
      { label: "Border", value: "Belarus–Latvia" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Riga — Highlights",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Views_from_St._Peter%27s_Church_Spire%2C_Riga_20180808-2.jpg/1280px-Views_from_St._Peter%27s_Church_Spire%2C_Riga_20180808-2.jpg",
        caption: "Riga Old Town",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/House_of_Blackheads_at_Dusk_3%2C_Riga%2C_Latvia_-_Diliff.jpg/1280px-House_of_Blackheads_at_Dusk_3%2C_Riga%2C_Latvia_-_Diliff.jpg",
        caption: "House of the Blackheads",
      },
      {
        src: "https://images.pexels.com/photos/7245326/pexels-photo-7245326.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Baltic seaside",
      },
    ],
    howTitle: "How the transfer works",
    steps: [
      {
        icon: MapPin,
        title: "Departure from Minsk",
        desc: "Your driver picks you up at your Minsk address and heads for the Latvian border.",
      },
      {
        icon: ShieldCheck,
        title: "Belarus–Latvia border",
        desc: "Urbany / Pāternieki crossing. Your driver knows current queue conditions and assists at the checkpoint.",
      },
      {
        icon: Building2,
        title: "Riga — any address",
        desc: "Old Town, RIX Airport, your hotel or Jūrmala beach — wherever you need to go.",
      },
    ],
    infoTitle: "Route Details",
    infoRows: [
      { label: "Route", value: "Minsk → Polotsk → Urbany → Daugavpils → Riga" },
      { label: "Distance", value: "~470 km" },
      {
        label: "Border crossing",
        value: "Urbany / Pāternieki (Belarus–Latvia)",
      },
      { label: "Border crossing time", value: "1–6 hrs depending on queues" },
      {
        label: "Documents required",
        value: "Schengen visa (non-EU citizens), valid passport",
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
      "Regular Riga runs since 2015",
      "Driver familiar with Urbany crossing and queues",
      "Optional stop at Jūrmala beach on request",
      "Return transfer Riga → Minsk also available",
      "Available 24/7 including public holidays",
      "Kids and pets welcome",
    ],
    ctaTitle: "Book Minsk–Riga Transfer",
    ctaDesc:
      "Submit a request and our manager will contact you shortly with an exact price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Riga",
    backBtn: "← All services",
  },
  pl: {
    badge: "Transfer z Rygi",
    title: "Mińsk — Ryga",
    subtitle:
      "Bezpośredni prywatny transfer z Mińska do centrum Rygi. Spotkania biznesowe, wakacje nad Bałtykiem czy dalsza podróż po Łotwie – bez przesiadek, bez autobusów.",
    stats: [
      { label: "Odległość", value: "~470 km" },
      { label: "Czas podróży", value: "5–7 godz" },
      { label: "Granica", value: "Białoruś – Łotwa" },
      { label: "Klasa pojazdu", value: "Biznes / Minivan" },
    ],
    photosTitle: "Ryga — najważniejsze wydarzenia",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Views_from_St._Peter%27s_Church_Spire%2C_Riga_20180808-2.jpg/1280px-Views_from_St._Peter%27s_Church_Spire%2C_Riga_20180808-2.jpg",
        caption: "Stare Miasto w Rydze",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/House_of_Blackheads_at_Dusk_3%2C_Riga%2C_Latvia_-_Diliff.jpg/1280px-House_of_Blackheads_at_Dusk_3%2C_Riga%2C_Latvia_-_Diliff.jpg",
        caption: "Dom Czarnogłowych",
      },
      {
        src: "https://images.pexels.com/photos/7245326/pexels-photo-7245326.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Wybrzeże Bałtyku",
      },
    ],
    howTitle: "Jak działa transfer",
    steps: [
      {
        icon: MapPin,
        title: "Wyjazd z Mińska",
        desc: "Twój kierowca odbierze Cię pod Twoim adresem w Mińsku i uda się w stronę granicy z Łotwą.",
      },
      {
        icon: ShieldCheck,
        title: "Granica białorusko-łotewska",
        desc: "Skrzyżowanie Urbany/Pāternieki. Twój kierowca zna aktualny stan kolejek i pomaga na punkcie kontrolnym.",
      },
      {
        icon: Building2,
        title: "Ryga — dowolny adres",
        desc: "Stare Miasto, lotnisko RIX, Twój hotel lub plaża w Jurmale – gdziekolwiek chcesz.",
      },
    ],
    infoTitle: "Szczegóły trasy",
    infoRows: [
      { label: "Trasa", value: "Mińsk → Połock → Urbany → Dyneburg → Ryga" },
      { label: "Odległość", value: "~470 km" },
      {
        label: "Przejście graniczne",
        value: "Urbany / Pāternieki (Białoruś – Łotwa)",
      },
      {
        label: "Czas przekraczania granicy",
        value: "1–6 godzin w zależności od kolejek",
      },
      {
        label: "Wymagane dokumenty",
        value: "Wiza Schengen (obywatele spoza UE), ważny paszport",
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
      "Regularnie kursuje w Rydze od 2015 roku",
      "Kierowca znający przejazdy i kolejki Urbany",
      "Na życzenie opcjonalny postój na plaży w Jurmale",
      "Dostępny jest również transfer powrotny Ryga → Mińsk",
      "Dostępność 24 godziny na dobę, 7 dni w tygodniu, także w święta",
      "Dzieci i zwierzęta mile widziane",
    ],
    ctaTitle: "Zarezerwuj transfer Mińsk–Ryga",
    ctaDesc:
      "Prześlij zapytanie, a nasz menedżer wkrótce skontaktuje się z Tobą i poda dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Ryga",
    backBtn: "← Wszystkie usługi",
  },
  fr: {
    badge: "Transfert à Riga",
    title: "Minsk — Riga",
    subtitle:
      "Transfert privé direct de Minsk au centre-ville de Riga. Réunions d'affaires, escapades au bord de la mer Baltique ou continuation de votre voyage à travers la Lettonie : pas de changement, pas de bus.",
    stats: [
      { label: "Distance", value: "~470km" },
      { label: "Temps de trajet", value: "5 à 7 heures" },
      { label: "Frontière", value: "Biélorussie-Lettonie" },
      { label: "Classe de véhicule", value: "Affaires / Minifourgonnette" },
    ],
    photosTitle: "Riga — Points forts",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Views_from_St._Peter%27s_Church_Spire%2C_Riga_20180808-2.jpg/1280px-Views_from_St._Peter%27s_Church_Spire%2C_Riga_20180808-2.jpg",
        caption: "Vieille ville de Riga",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/House_of_Blackheads_at_Dusk_3%2C_Riga%2C_Latvia_-_Diliff.jpg/1280px-House_of_Blackheads_at_Dusk_3%2C_Riga%2C_Latvia_-_Diliff.jpg",
        caption: "Maison des Points Noirs",
      },
      {
        src: "https://images.pexels.com/photos/7245326/pexels-photo-7245326.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Bord de mer Baltique",
      },
    ],
    howTitle: "Comment fonctionne le transfert",
    steps: [
      {
        icon: MapPin,
        title: "Départ de Minsk",
        desc: "Votre chauffeur vient vous chercher à votre adresse de Minsk et se dirige vers la frontière lettone.",
      },
      {
        icon: ShieldCheck,
        title: "Frontière Biélorussie-Lettonie",
        desc: "Traversée Urbany / Pāternieki. Votre chauffeur connaît les conditions actuelles de la file d'attente et vous assiste au point de contrôle.",
      },
      {
        icon: Building2,
        title: "Riga — n'importe quelle adresse",
        desc: "Vieille ville, aéroport RIX, votre hôtel ou la plage de Jurmala : partout où vous devez aller.",
      },
    ],
    infoTitle: "Détails de l'itinéraire",
    infoRows: [
      {
        label: "Itinéraire",
        value: "Minsk → Polotsk → Urbany → Daugavpils → Riga",
      },
      { label: "Distance", value: "~470km" },
      {
        label: "Passage de la frontière",
        value: "Urbany / Pāternieki (Biélorussie-Lettonie)",
      },
      {
        label: "Temps de passage de la frontière",
        value: "1 à 6 heures selon les files d'attente",
      },
      {
        label: "Documents requis",
        value: "Visa Schengen (citoyens non-UE), passeport valide",
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
      "Riga fonctionne régulièrement depuis 2015",
      "Chauffeur familier avec le passage à niveau Urbany et les files d'attente",
      "Arrêt optionnel à la plage de Jurmala sur demande",
      "Transfert aller-retour Riga → Minsk également disponible",
      "Disponible 24h/24 et 7j/7 y compris les jours fériés",
      "Enfants et animaux bienvenus",
    ],
    ctaTitle: "Réserver un transfert Minsk-Riga",
    ctaDesc:
      "Soumettez une demande et notre responsable vous contactera sous peu avec un prix exact.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Riga",
    backBtn: "← Tous les services",
  },
  seo: {
    titleRu: "Трансфер Минск — Рига | Прямая поездка в Латвию | ComfortLine",
    titleEn: "Minsk to Riga Transfer | Direct Ride to Latvia | ComfortLine",
    descRu:
      "Прямой трансфер из Минска в центр Риги. ~470 км, 5–7 ч. Старый город, аэропорт RIX, Юрмала. Фиксированная цена, опытный водитель, граница Беларусь–Латвия.",
    descEn:
      "Direct transfer from Minsk to central Riga. ~470 km, 5–7 hrs. Old Town, RIX airport, Jurmala. Fixed price, professional driver, Belarus–Latvia border crossing.",
    pathRu: "/трансфер-рига",
    pathEn: "/riga-transfer",
    breadcrumbRu: "Трансфер в Ригу",
    breadcrumbEn: "Minsk — Riga",
    fromName: "Минск",
    toName: "Рига",
  },
};

export default function RigaTransferPage() {
  return <RouteLandingPage data={data} />;
}
