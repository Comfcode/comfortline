import { Users, Star, Shield, Wifi, Baby, Briefcase } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Премиум минивэн · до 7 мест",
    title: "Mercedes-Benz V-Class",
    subtitle:
      "Представительский минивэн бизнес-класса с индивидуальными сиденьями капитанского типа, тремя климат-зонами и огромным багажным отделом. Идеален для семей, групп и деловых делегаций по всей Европе.",
    stats: [
      { label: "Пассажиров", value: "до 7" },
      { label: "Багаж", value: "до 7 чемоданов" },
      { label: "Класс", value: "Премиум MPV" },
      { label: "Климат-зон", value: "3" },
    ],
    photosTitle: "Mercedes-Benz V-Class — снаружи и внутри",
    photos: [
      {
        src: "https://images.pexels.com/photos/17455633/pexels-photo-17455633.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Mercedes V-Class — чёрный экстерьер",
      },
      {
        src: "https://images.pexels.com/photos/10054684/pexels-photo-10054684.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Кожаный салон бизнес-класса",
      },
      {
        src: "https://images.pexels.com/photos/1135379/pexels-photo-1135379.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Водитель в деловом костюме",
      },
    ],
    howTitle: "Как организован трансфер на V-Class",
    steps: [
      {
        icon: Users,
        title: "Оставьте заявку",
        desc: "Укажите маршрут, дату, количество пассажиров и багажа. Менеджер свяжется в течение 15 минут и подтвердит точную стоимость.",
      },
      {
        icon: Star,
        title: "Водитель встречает вас",
        desc: "Профессиональный водитель в деловом костюме встретит вас с именной табличкой — у выхода из таможни, у отеля или в любом удобном месте.",
      },
      {
        icon: Shield,
        title: "Комфортная поездка без пересадок",
        desc: "Просторный салон, сиденья с высокими спинками, Wi-Fi и вода на борту. Прямо из точки А в точку Б — без такси-агрегаторов и сюрпризов.",
      },
    ],
    infoTitle: "Характеристики Mercedes V-Class",
    infoRows: [
      { label: "Вместимость", value: "до 7 пассажиров" },
      {
        label: "Багажник",
        value: "до 7 чемоданов (или лыжи, коляски, спортивный инвентарь)",
      },
      { label: "Климат", value: "3 независимые климат-зоны" },
      {
        label: "Посадка",
        value: "Раздвижные боковые двери — удобно с детьми",
      },
      {
        label: "Маршруты",
        value:
          "Беларусь, Польша, Литва, Латвия, Германия, Чехия, Россия и др.",
      },
    ],
    includedTitle: "Что включено в стоимость",
    included: [
      "Подача авто точно ко времени",
      "Водитель в деловом дресс-коде",
      "Питьевая вода на борту",
      "Wi-Fi 4G в дороге",
      "USB и беспроводная зарядка",
      "Детские и бустерные кресла — по запросу бесплатно",
      "Помощь с погрузкой и выгрузкой багажа",
    ],
    whyTitle: "Кому подходит Mercedes V-Class",
    whyItems: [
      "Семьи с детьми и большим багажом",
      "Деловые делегации и корпоративные группы",
      "Туристические группы до 7 человек",
      "Лыжный трансфер со снаряжением",
      "Трансфер большой компании в аэропорт",
      "Свадьбы и торжественные мероприятия",
    ],
    faqTitle: "Частые вопросы о трансфере на Mercedes V-Class",
    faq: [
      {
        q: "Сколько пассажиров и чемоданов вмещает Mercedes V-Class?",
        a: "V-Class комфортно размещает до 7 пассажиров в индивидуальных сиденьях. Багажный отдел вмещает до 7 средних чемоданов — либо 4 чемодана + 3 рюкзака + лыжное снаряжение.",
      },
      {
        q: "Можно ли заказать детское кресло?",
        a: "Да. Детские кресла (0–12 лет) и бустеры предоставляются бесплатно по предварительному запросу. Укажите возраст ребёнка при оформлении заявки.",
      },
      {
        q: "Подходит ли V-Class для деловых поездок?",
        a: "Однозначно. Индивидуальные сиденья с высокими спинками, тонированные стёкла, тихий салон и Wi-Fi — полноценная рабочая обстановка в дороге. Водитель в костюме и именная табличка — стандарт обслуживания.",
      },
      {
        q: "Можно ли перевозить лыжное снаряжение?",
        a: "Да. Лыжи до 180 см помещаются в багажник без разборки. V-Class — популярный выбор для лыжных трансферов: комплект снаряжения на 5–6 человек + чемоданы без проблем.",
      },
      {
        q: "В какие аэропорты вы доставляете на V-Class?",
        a: "Аэропорт Вильнюса (VNO), Варшавы (WAW и Модлин), Риги (RIX), Каунаса (KUN), а также берлинский BER и пражский PRG. Нестандартный маршрут? Свяжитесь с менеджером — рассчитаем.",
      },
    ],
    ctaTitle: "Забронировать Mercedes V-Class",
    ctaDesc:
      "Оставьте заявку — менеджер подтвердит наличие и назовёт точную цену в течение 15 минут.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "",
    backBtn: "← Автопарк",
  },

  en: {
    badge: "Premium MPV · up to 7 seats",
    title: "Mercedes-Benz V-Class",
    subtitle:
      "An executive-class MPV with captain's chairs, three independent climate zones and a vast boot. The ideal choice for families, groups and corporate delegations travelling across Europe in comfort.",
    stats: [
      { label: "Passengers", value: "up to 7" },
      { label: "Luggage", value: "up to 7 suitcases" },
      { label: "Class", value: "Premium MPV" },
      { label: "Climate zones", value: "3" },
    ],
    photosTitle: "Mercedes-Benz V-Class — exterior & interior",
    photos: [
      {
        src: "https://images.pexels.com/photos/17455633/pexels-photo-17455633.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Mercedes V-Class — black exterior",
      },
      {
        src: "https://images.pexels.com/photos/10054684/pexels-photo-10054684.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Business-class leather cabin",
      },
      {
        src: "https://images.pexels.com/photos/1135379/pexels-photo-1135379.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Professional chauffeur",
      },
    ],
    howTitle: "How your V-Class transfer works",
    steps: [
      {
        icon: Users,
        title: "Submit your request",
        desc: "Enter your route, date, passenger count and luggage. A manager will confirm availability and give you an exact price within 15 minutes.",
      },
      {
        icon: Star,
        title: "Your driver meets you",
        desc: "A professional chauffeur in business attire will greet you with a name board — at the arrivals gate, your hotel or any convenient meeting point.",
      },
      {
        icon: Shield,
        title: "A smooth, direct journey",
        desc: "Spacious cabin, high-back seats, Wi-Fi and water on board. Door to door — no ride-share apps, no layovers, no surprises.",
      },
    ],
    infoTitle: "Mercedes V-Class specifications",
    infoRows: [
      { label: "Capacity", value: "up to 7 passengers" },
      {
        label: "Boot",
        value: "up to 7 suitcases (or skis, pushchairs, sports gear)",
      },
      { label: "Climate", value: "3 independent climate zones" },
      {
        label: "Entry",
        value: "Sliding side doors — easy access with children",
      },
      {
        label: "Routes",
        value:
          "Belarus, Poland, Lithuania, Latvia, Germany, Czech Republic, Russia and more",
      },
    ],
    includedTitle: "What's included in the price",
    included: [
      "Vehicle dispatched on time",
      "Chauffeur in business attire",
      "Complimentary bottled water",
      "4G Wi-Fi throughout the journey",
      "USB and wireless charging",
      "Child seats and boosters — free on request",
      "Luggage loading and unloading assistance",
    ],
    whyTitle: "Who the V-Class is ideal for",
    whyItems: [
      "Families with children and large luggage",
      "Business delegations and corporate groups",
      "Tourist groups of up to 7 people",
      "Ski and sports transfers with equipment",
      "Large-party airport transfers",
      "Weddings and special occasions",
    ],
    faqTitle: "Frequently asked questions — Mercedes V-Class transfers",
    faq: [
      {
        q: "How many passengers and suitcases does the Mercedes V-Class fit?",
        a: "The V-Class comfortably seats up to 7 passengers in individual captain's chairs. The boot holds up to 7 mid-size suitcases — or 4 cases + 3 backpacks + ski gear.",
      },
      {
        q: "Can I request a child seat?",
        a: "Yes. Child seats (ages 0–12) and booster seats are provided free of charge on request. Please include the child's age when submitting your booking.",
      },
      {
        q: "Is the V-Class suitable for business travel?",
        a: "Absolutely. Individual high-back seats, tinted windows, a quiet cabin and 4G Wi-Fi create a productive environment en route. Chauffeur in a suit and a name board are standard.",
      },
      {
        q: "Can ski equipment be transported?",
        a: "Yes. Skis up to 180 cm fit in the boot without disassembly. The V-Class is a popular ski-transfer vehicle — full kit for 5–6 people plus suitcases, no problem.",
      },
      {
        q: "Which airports do you serve with the V-Class?",
        a: "Vilnius (VNO), Warsaw Chopin (WAW) and Modlin (WMI), Riga (RIX), Kaunas (KUN), as well as Berlin BER and Prague PRG. Custom route? Contact our manager and we'll calculate the price.",
      },
    ],
    ctaTitle: "Book the Mercedes V-Class",
    ctaDesc:
      "Submit your request and a manager will confirm availability with an exact price within 15 minutes.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "",
    backBtn: "← Fleet",
  },

  seo: {
    titleRu:
      "Трансфер Mercedes-Benz V-Class из Минска | до 7 мест | ComfortLine",
    titleEn:
      "Mercedes-Benz V-Class Transfer from Minsk | Up to 7 Seats | ComfortLine",
    descRu:
      "Mercedes-Benz V-Class с водителем из Минска — до 7 пассажиров, 7 чемоданов, кресла бизнес-класса, 3 климат-зоны, Wi-Fi. Трансфер в аэропорты Вильнюса, Варшавы, Риги и по всей Европе. Детские кресла бесплатно.",
    descEn:
      "Mercedes-Benz V-Class with driver from Minsk — up to 7 passengers, 7 suitcases, business-class seats, 3 climate zones, Wi-Fi. Transfers to Vilnius, Warsaw, Riga airports and across Europe. Child seats free of charge.",
    pathRu: "/трансфер-мерседес-в-класс",
    pathEn: "/mercedes-v-class-transfer",
    breadcrumbRu: "Mercedes V-Class",
    breadcrumbEn: "Mercedes V-Class",
    fromName: "Минск",
    toName: "Аэропорт / Европа",
  },
};

export default function MercedesVClassPage() {
  return <RouteLandingPage data={data} />;
}
