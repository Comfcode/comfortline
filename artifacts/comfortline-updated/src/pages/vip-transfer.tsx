import { ShieldCheck, Users, CheckCircle2 } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "VIP трансфер",
    title: "VIP и бизнес-трансфер",
    subtitle:
      "Премиум-автомобили, опытные водители, конфиденциальность и пунктуальность. Для деловых поездок, встреч, артистов и гостей высокого ранга — по Беларуси и Европе.",
    stats: [
      { label: "Класс авто", value: "Бизнес / Премиум" },
      { label: "Водитель", value: "Профессионал" },
      { label: "Языки", value: "RU / EN / PL" },
      { label: "Конфиденциальность", value: "100%" },
    ],
    photosTitle: "Премиум-автопарк",
    photos: [
      {
        src: "/car-mercedes-e-front.webp",
        caption: "Mercedes-Benz E-Class — экстерьер",
      },
      {
        src: "/vclass-warsaw-front.webp",
        caption: "Mercedes-Benz V-Class — Варшава",
      },
      {
        src: "/vclass-doors.webp",
        caption: "Салон V-Class — раздвижные двери",
      },
    ],
    howTitle: "Как организован VIP-сервис",
    steps: [
      {
        icon: ShieldCheck,
        title: "Личный диспетчер",
        desc: "Закрепляем менеджера, который ведёт ваш заказ от первого звонка до завершения поездки.",
      },
      {
        icon: Users,
        title: "Опытный водитель",
        desc: "Водители с многолетним стажем международных рейсов. Деловой дресс-код, владение английским и польским по запросу.",
      },
      {
        icon: CheckCircle2,
        title: "Полная дискретность",
        desc: "Никаких разговоров о пассажирах. Тонировка, отдельный вход, помощь с багажом — всё по правилам делового этикета.",
      },
    ],
    infoTitle: "Услуги в составе VIP-пакета",
    infoRows: [
      {
        label: "Автомобили",
        value: "Mercedes E-class, Mercedes V-class, Hyundai Palisade",
      },
      {
        label: "Встреча",
        value: "Именная табличка, встреча у трапа (по запросу)",
      },
      { label: "В салоне", value: "Вода, Wi-Fi, USB-зарядки, климат-контроль" },
      {
        label: "Языки водителя",
        value: "Русский, английский, польский (по запросу)",
      },
      { label: "Маршруты", value: "Беларусь, ЕС (Польша, Литва, Латвия)" },
    ],
    includedTitle: "Что включено в VIP-тариф",
    included: [
      "Подача премиум-автомобиля точно ко времени",
      "Профессиональный водитель",
      "Бутилированная вода и пресса в салоне",
      "Конфиденциальное сопровождение",
      "Гибкая корректировка маршрута и остановок",
      "Возможность почасовой аренды с водителем",
      "Сопровождение нескольких автомобилей (для делегаций)",
    ],
    whyTitle: "Кому подходит VIP-сервис",
    whyItems: [
      "Топ-менеджеры и владельцы бизнеса",
      "Артисты и публичные персоны",
      "Иностранные гости и делегации",
      "Корпоративные мероприятия и переговоры",
      "Сопровождение партнёров на выставках и форумах",
      "Свадьбы и торжественные мероприятия",
    ],
    ctaTitle: "Заказать VIP-трансфер",
    ctaDesc:
      "Свяжитесь с нами для индивидуального предложения — менеджер обсудит детали и предложит подходящий автомобиль.",
    ctaBtn: "Запросить предложение",
    prefilledFrom: "Минск",
    prefilledTo: "",
    backBtn: "← Все услуги",
  },
  en: {
    badge: "VIP Transfer",
    title: "VIP & Business Transfers",
    subtitle:
      "Premium vehicles, experienced drivers, full discretion and punctuality. For executives, business meetings, artists and high-profile guests — across Belarus and Europe.",
    stats: [
      { label: "Vehicle class", value: "Business / Premium" },
      { label: "Driver", value: "Professional" },
      { label: "Languages", value: "RU / EN / PL" },
      { label: "Discretion", value: "100%" },
    ],
    photosTitle: "Premium fleet",
    photos: [
      {
        src: "/car-mercedes-e-front.webp",
        caption: "Mercedes-Benz E-Class — exterior",
      },
      {
        src: "/vclass-warsaw-front.webp",
        caption: "Mercedes-Benz V-Class — Warsaw",
      },
      { src: "/vclass-doors.webp", caption: "V-Class cabin — sliding doors" },
    ],
    howTitle: "How VIP service is organised",
    steps: [
      {
        icon: ShieldCheck,
        title: "Personal dispatcher",
        desc: "A dedicated manager handles your booking from first call to completion of the trip.",
      },
      {
        icon: Users,
        title: "Experienced chauffeur",
        desc: "Drivers with years of international experience. Business dress code, English and Polish on request.",
      },
      {
        icon: CheckCircle2,
        title: "Full discretion",
        desc: "No conversation about passengers. Tinted glass, private entry, luggage assistance — all per business etiquette.",
      },
    ],
    infoTitle: "What's part of the VIP package",
    infoRows: [
      {
        label: "Vehicles",
        value: "Mercedes E-class, Mercedes V-class, Hyundai Palisade",
      },
      {
        label: "Meet & greet",
        value: "Name board, meet at the gate (on request)",
      },
      {
        label: "In the cabin",
        value: "Water, Wi-Fi, USB charging, climate control",
      },
      {
        label: "Driver languages",
        value: "Russian, English, Polish (on request)",
      },
      { label: "Routes", value: "Belarus, EU (Poland, Lithuania, Latvia)" },
    ],
    includedTitle: "Included in the VIP tariff",
    included: [
      "Premium vehicle dispatched on time",
      "Professional chauffeur",
      "Bottled water and press in the cabin",
      "Confidential service",
      "Flexible route adjustments and stops",
      "Hourly chauffeur hire available",
      "Multi-vehicle escorts for delegations",
    ],
    whyTitle: "Who VIP service is for",
    whyItems: [
      "Senior executives and business owners",
      "Artists and public figures",
      "Foreign guests and delegations",
      "Corporate events and negotiations",
      "Partner escort at exhibitions and forums",
      "Weddings and ceremonial events",
    ],
    ctaTitle: "Request a VIP Transfer",
    ctaDesc:
      "Get in touch for a tailored quote — our manager will discuss details and recommend the right vehicle.",
    ctaBtn: "Request a quote",
    prefilledFrom: "Minsk",
    prefilledTo: "",
    backBtn: "← All services",
  },
  pl: {
    badge: "Transfer VIP",
    title: "Transfery VIP i biznesowe",
    subtitle:
      "Pojazdy klasy premium, doświadczeni kierowcy, pełna dyskrecja i punktualność. Dla kadry kierowniczej, spotkań biznesowych, artystów i prestiżowych gości — z całej Białorusi i Europy.",
    stats: [
      { label: "Klasa pojazdu", value: "Biznes / Premium" },
      { label: "Kierowca", value: "Profesjonalny" },
      { label: "Języki", value: "RU/EN/PL" },
      { label: "Dyskrecja", value: "100%" },
    ],
    photosTitle: "Flota premium",
    photos: [
      {
        src: "/car-mercedes-e-front.webp",
        caption: "Mercedes-Benz Klasa E — wygląd zewnętrzny",
      },
      {
        src: "/vclass-warsaw-front.webp",
        caption: "Mercedes-Benz Klasa V — Warszawa",
      },
      {
        src: "/vclass-doors.webp",
        caption: "Kabina Klasy V — drzwi przesuwne",
      },
    ],
    howTitle: "Jak zorganizowana jest obsługa VIP",
    steps: [
      {
        icon: ShieldCheck,
        title: "Osobisty dyspozytor",
        desc: "Dedykowany menadżer zajmuje się Twoją rezerwacją od pierwszego połączenia telefonicznego aż do zakończenia podróży.",
      },
      {
        icon: Users,
        title: "Doświadczony kierowca",
        desc: "Kierowcy z wieloletnim międzynarodowym doświadczeniem. Dress code biznesowy, język angielski i polski na życzenie.",
      },
      {
        icon: CheckCircle2,
        title: "Pełna dyskrecja",
        desc: "Żadnych rozmów o pasażerach. Przyciemniane szyby, prywatne wejście, pomoc w bagażu – wszystko zgodnie z etykietą biznesową.",
      },
    ],
    infoTitle: "Co jest częścią pakietu VIP",
    infoRows: [
      {
        label: "Pojazdy",
        value: "Mercedes klasy E, Mercedes klasy V, Hyundai Palisade",
      },
      {
        label: "Spotkaj się i przywitaj",
        value: "Tablica z nazwiskiem, spotkanie przy bramie (na życzenie)",
      },
      { label: "W kabinie", value: "Woda, Wi-Fi, ładowanie USB, klimatyzacja" },
      {
        label: "Języki sterowników",
        value: "rosyjski, angielski, polski (na życzenie)",
      },
      { label: "Trasy", value: "Białoruś, UE (Polska, Litwa, Łotwa)" },
    ],
    includedTitle: "Wliczone w cenę VIP",
    included: [
      "Pojazd premium wysłany na czas",
      "Profesjonalny szofer",
      "Woda butelkowana i prasa w kabinie",
      "Usługa poufna",
      "Elastyczne zmiany trasy i przystanki",
      "Możliwość wynajęcia kierowcy na godziny",
      "Eskorta wielopojazdowa dla delegacji",
    ],
    whyTitle: "Dla kogo przeznaczona jest usługa VIP",
    whyItems: [
      "Menedżerowie wyższego szczebla i właściciele firm",
      "Artyści i osoby publiczne",
      "Zagraniczni goście i delegacje",
      "Imprezy firmowe i negocjacje",
      "Eskorta partnerów na wystawach i forach",
      "Wesela i imprezy okolicznościowe",
    ],
    ctaTitle: "Poproś o transfer VIP",
    ctaDesc:
      "Skontaktuj się z nami, aby uzyskać indywidualną wycenę – nasz menadżer omówi szczegóły i poleci odpowiedni pojazd.",
    ctaBtn: "Poproś o wycenę",
    prefilledFrom: "Mińsk",
    prefilledTo: "",
    backBtn: "← Wszystkie usługi",
  },
  fr: {
    badge: "Transfert VIP",
    title: "Transferts VIP et professionnels",
    subtitle:
      "Véhicules haut de gamme, chauffeurs expérimentés, totale discrétion et ponctualité. Pour les dirigeants, les réunions d'affaires, les artistes et les invités de marque, partout en Biélorussie et en Europe.",
    stats: [
      { label: "Classe de véhicule", value: "Affaires / Premium" },
      { label: "Chauffeur", value: "Professionnel" },
      { label: "Langues", value: "RU / EN / PL" },
      { label: "Discrétion", value: "100%" },
    ],
    photosTitle: "Flotte premium",
    photos: [
      {
        src: "/car-mercedes-e-front.webp",
        caption: "Mercedes-Benz Classe E — extérieur",
      },
      {
        src: "/vclass-warsaw-front.webp",
        caption: "Mercedes-Benz Classe V — Varsovie",
      },
      {
        src: "/vclass-doors.webp",
        caption: "Cabine Classe V – portes coulissantes",
      },
    ],
    howTitle: "Comment est organisé le service VIP",
    steps: [
      {
        icon: ShieldCheck,
        title: "Répartiteur personnel",
        desc: "Un responsable dédié gère votre réservation du premier appel jusqu'à la fin du voyage.",
      },
      {
        icon: Users,
        title: "Chauffeur expérimenté",
        desc: "Chauffeurs avec des années d’expérience internationale. Code vestimentaire professionnel, anglais et polonais sur demande.",
      },
      {
        icon: CheckCircle2,
        title: "Toute discrétion",
        desc: "Aucune conversation sur les passagers. Vitres teintées, entrée privée, assistance bagages, le tout selon l'étiquette professionnelle.",
      },
    ],
    infoTitle: "Qu'est-ce qui fait partie du forfait VIP",
    infoRows: [
      {
        label: "Véhicules",
        value: "Mercedes Classe E, Mercedes Classe V, Hyundai Palisade",
      },
      {
        label: "Rencontrer et saluer",
        value: "Tableau nominatif, rendez-vous à la porte (sur demande)",
      },
      {
        label: "Dans la cabine",
        value: "Eau, Wi-Fi, chargement USB, climatisation",
      },
      {
        label: "Langues du pilote",
        value: "Russe, anglais, polonais (sur demande)",
      },
      {
        label: "Itinéraires",
        value: "Biélorussie, UE (Pologne, Lituanie, Lettonie)",
      },
    ],
    includedTitle: "Inclus dans le tarif VIP",
    included: [
      "Véhicule premium expédié à temps",
      "Chauffeur professionnel",
      "Eau en bouteille et presse en cabine",
      "Prestation confidentielle",
      "Ajustements d'itinéraire et arrêts flexibles",
      "Location de chauffeur à l'heure disponible",
      "Escortes multi-véhicules pour les délégations",
    ],
    whyTitle: "À qui s'adresse le service VIP",
    whyItems: [
      "Cadres supérieurs et propriétaires d’entreprises",
      "Artistes et personnalités publiques",
      "Invités et délégations étrangères",
      "Événements et négociations d'entreprise",
      "Accompagnement de partenaires lors d'expositions et de forums",
      "Mariages et cérémonies",
    ],
    ctaTitle: "Demander un transfert VIP",
    ctaDesc:
      "Contactez-nous pour un devis sur mesure – notre responsable discutera des détails et recommandera le bon véhicule.",
    ctaBtn: "Demander un devis",
    prefilledFrom: "Minsk",
    prefilledTo: "",
    backBtn: "← Tous les services",
  },
  seo: {
    titleRu:
      "VIP и бизнес-трансфер из Минска | Mercedes E-class, V-class | ComfortLine",
    titleEn:
      "VIP & Business Transfer from Minsk | Mercedes E-class, V-class | ComfortLine",
    descRu:
      "VIP-трансфер из Минска и по Европе. Mercedes E-class и V-class, водитель в костюме, владение английским и польским, конфиденциальность 100%. Для деловых поездок, артистов и гостей высокого ранга.",
    descEn:
      "VIP transfer from Minsk and across Europe. Mercedes E-class and V-class, drivers in business attire, English and Polish spoken, 100% discretion. For business, artists, high-profile guests.",
    pathRu: "/вип-трансфер",
    pathEn: "/vip-transfer",
    breadcrumbRu: "VIP трансфер",
    breadcrumbEn: "VIP Transfer",
    fromName: "Минск",
    toName: "Премиум направление",
  },
};

export default function VipTransferPage() {
  return <RouteLandingPage data={data} />;
}
