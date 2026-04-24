import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "ru" | "en";

interface Translations {
  lang: "ru" | "en";
  nav: {
    services: string;
    fleet: string;
    prices: string;
    advantages: string;
    reviews: string;
    contacts: string;
  };
  hero: {
    badge: string;
    headline1: string;
    headline2: string;
    checkmarks: string[];
    cta: string;
    ctaSecondary: string;
  };
  booking: {
    from: string;
    fromPlaceholder: string;
    to: string;
    toPlaceholder: string;
    date: string;
    datePlaceholder: string;
    passengersClass: string;
    passengerOne: string;
    passengerFew: string;
    passengerMany: string;
    adults: string;
    adultsNote: string;
    children: string;
    childrenNote: string;
    babies: string;
    babiesNote: string;
    pets: string;
    petsNote: string;
    maxPassengers: string;
    suitcases: string;
    vehicleClass: string;
    classAny: string;
    classComfort: string;
    classBusiness: string;
    classPremium: string;
    apply: string;
    cta: string;
    toastTitle: string;
    toastDesc: string;
  };
  services: {
    label: string;
    heading: string;
    items: { title: string; description: string }[];
  };
  fleet: {
    label: string;
    heading: string;
    filterAll: string;
    book: string;
    seats: string;
    trunk: string;
    wifi: string;
    airportLabel: string;
    from: string;
    perHour: string;
  };
  pricing: {
    label: string;
    heading: string;
    subheading: string;
    popular: string;
    book: string;
    plans: { name: string; features: string[] }[];
  };
  advantages: {
    label: string;
    heading: string;
    items: { title: string; description: string }[];
  };
  reviews: {
    label: string;
    heading: string;
    items: { name: string; city: string; text: string }[];
  };
  contact: {
    label: string;
    heading: string;
    subheading: string;
    phone: string;
    email: string;
    address: string;
    licensing: {
      heading: string;
      text: string;
      registryLabel: string;
      registryUrl1: string;
      registryUrl2: string;
      directLinkLabel: string;
      directLinkUrl: string;
    };
  };
  footer: {
    tagline: string;
    navHeading: string;
    navLinks: string[];
    servicesHeading: string;
    serviceLinks: string[];
    contactsHeading: string;
    copyright: string;
    legalName: string;
    unp: string;
  };
}

const ru: Translations = {
  lang: "ru",
  nav: {
    services: "Услуги",
    fleet: "Автопарк",
    prices: "Тарифы",
    advantages: "Преимущества",
    reviews: "Отзывы",
    contacts: "Контакты",
  },
  hero: {
    badge: "Всегда вовремя. Работаем с 2015 года.",
    headline1: "Индивидуальный трансфер",
    headline2: "бизнес и премиум класса",
    checkmarks: ["по Беларуси и России", "по всей Европе", "трансфер в Аэропорт"],
    cta: "Заказать трансфер",
    ctaSecondary: "Узнать цены",
  },
  booking: {
    from: "Откуда",
    fromPlaceholder: "Город / аэропорт",
    to: "Куда",
    toPlaceholder: "Город / аэропорт",
    date: "Дата поездки",
    datePlaceholder: "Выберите дату",
    passengersClass: "Пассажиры, класс",
    passengerOne: "пассажир",
    passengerFew: "пассажира",
    passengerMany: "пассажиров",
    adults: "Взрослые",
    adultsNote: "12+ лет",
    children: "Дети",
    childrenNote: "2–12 лет",
    babies: "Младенцы",
    babiesNote: "до 2 лет",
    pets: "Питомцы",
    petsNote: "до 30 кг",
    maxPassengers: "Максимум 6 пассажиров",
    suitcases: "Количество чемоданов",
    vehicleClass: "Класс",
    classAny: "Любой",
    classComfort: "Комфорт",
    classBusiness: "Бизнес",
    classPremium: "Премиум",
    apply: "Применить",
    cta: "Заказать трансфер",
    toastTitle: "Заявка отправлена!",
    toastDesc: "Наш менеджер свяжется с вами в ближайшее время.",
  },
  services: {
    label: "Наши Услуги",
    heading: "Направления комфорта",
    items: [
      { title: "Трансфер в Аэропорт", description: "Индивидуальный и групповой. Фиксированная цена. Предварительный заказ. Детские кресла. Встретим с табличкой." },
      { title: "Группы / Делегации до 8 человек", description: "Трансферы, экскурсии. Вместительные микроавтобусы (8 мест), большие багажные отделения." },
      { title: "Поездки по Минску, Беларуси и России", description: "Почасовая оплата в городе, подсчёт по километражу между городами. Седаны, микроавтобусы." },
      { title: "Поездки по Европе (Литва, Латвия, Польша)", description: "На выбор автомобили разных классов и типов кузова. Комфортное прохождение границы." },
    ],
  },
  fleet: {
    label: "Автопарк",
    heading: "Наш Автопарк",
    filterAll: "Все",
    book: "Забронировать",
    seats: "Мест",
    trunk: "Багажник",
    wifi: "Wi-Fi",
    airportLabel: "Трансфер в аэропорт",
    from: "начиная от",
    perHour: "час",
  },
  pricing: {
    label: "Тарифы",
    heading: "Трансфер в Аэропорт Минск",
    subheading: "Фиксированные цены на поездки из Минска в Национальный аэропорт или обратно.",
    popular: "Популярный выбор",
    book: "Заказать",
    plans: [
      { name: "Седан (до 4 чел.) — Эконом", features: ["Встреча с табличкой", "Помощь с багажом", "Детское кресло по запросу", "Ожидание при задержке рейса"] },
      { name: "Седан (до 4 чел.) — Комфорт", features: ["Встреча с табличкой", "Помощь с багажом", "Детское кресло по запросу", "Wi-Fi в салоне", "Вода для пассажиров"] },
      { name: "Универсал (до 4 чел.)", features: ["Встреча с табличкой", "Увеличенный багажник", "Детское кресло по запросу", "Ожидание при задержке рейса"] },
      { name: "Микроавтобус (до 8 чел.)", features: ["Встреча с табличкой", "Много места для багажа", "Подходит для групп", "Детские кресла по запросу"] },
    ],
  },
  advantages: {
    label: "Почему ComfortLine",
    heading: "Безупречный сервис в каждой поездке",
    items: [
      { title: "Вся линейка транспорта", description: "Седаны эконом и комфорт, микроавтобусы до 8 мест. Подберем авто под ваши нужды." },
      { title: "Всегда вовремя", description: "Менеджер координирует весь процесс. Подача машины точно в назначенное время." },
      { title: "Профессиональные водители", description: "Вежливые, опытные, отлично знают город и маршруты. По запросу — водитель в деловом костюме." },
      { title: "Предзаказ и день в день", description: "Принимаем заявки заранее и срочные заказы минимум за 5 часов до прибытия." },
      { title: "Пассажиры застрахованы", description: "Ваша безопасность — наш приоритет. Жизнь и здоровье каждого пассажира застрахованы на время поездки." },
      { title: "Гибкие тарифы", description: "Фиксированные цены на популярные направления и специальные условия для постоянных корпоративных клиентов." },
    ],
  },
  reviews: {
    label: "Отзывы",
    heading: "Что говорят наши клиенты",
    items: [
      { name: "Александра", city: "Минск", text: "Ездили коллективом на экскурсию в Дудутки. Водитель приехал за 15 минут до оговоренного времени. Машина была чистой и аккуратной. Спасибо за высокий уровень сервиса!" },
      { name: "Евгений", city: "Москва", text: "Приезжали в Минск компанией 6 человек. Обратились в ComfortLine. Нас встретили в аэропорту с табличкой, доехали быстро и дешево. Отличная организация трансфера." },
      { name: "Юлия", city: "Молодечно", text: "Решили семьёй поехать в Египет. Семья не маленькая, трое детей. Воспользовались трансфером и не прогадали. В микроавтобусе было просторно, комфортно. Спасибо!" },
    ],
  },
  contact: {
    label: "Связаться с нами",
    heading: "Заказать трансфер",
    subheading: "Заполните форму выше или свяжитесь с нами напрямую — наш менеджер подтвердит детали и организует поездку. Работаем круглосуточно.",
    phone: "Телефон",
    email: "Email",
    address: "Адрес",
    licensing: {
      heading: "Лицензионная информация",
      text: "Индивидуальный предприниматель Мурашко Андрей Антонович имеет действительную лицензию на международные автомобильные перевозки пассажиров за № 02190/1-85358 (номер лицензии в Едином реестре лицензий — 13230000078378). Дата принятия решения о выдаче лицензии за № 13-ЛИ – 30 июня 2023 года. Срок действия лицензии – бессрочный.",
      registryLabel: "Единый реестр лицензий:",
      registryUrl1: "https://license.gov.by/",
      registryUrl2: "https://лицензия.бел",
      directLinkLabel: "Лицензия ИП Мурашко А.А.:",
      directLinkUrl: "https://license.gov.by/onelicense/157966",
    },
  },
  footer: {
    tagline: "Индивидуальный трансфер бизнес и премиум класса. Работаем с 2015 года по всей Беларуси, России и Европе.",
    navHeading: "Навигация",
    navLinks: ["Услуги", "Автопарк", "Тарифы в аэропорт", "Преимущества", "Отзывы"],
    servicesHeading: "Направления",
    serviceLinks: ["Трансфер в Аэропорт", "Поездки по Минску", "Межгород по Беларуси", "Трансфер в Россию", "Поездки в Европу"],
    contactsHeading: "Контакты",
    copyright: "Все права защищены.",
    legalName: "ИП Мурашко Андрей Антонович",
    unp: "УНП 193255422",
  },
};

const en: Translations = {
  lang: "en",
  nav: {
    services: "Services",
    fleet: "Fleet",
    prices: "Rates",
    advantages: "Why Us",
    reviews: "Reviews",
    contacts: "Contacts",
  },
  hero: {
    badge: "Always on time. Operating since 2015.",
    headline1: "Individual transfer",
    headline2: "business & premium class",
    checkmarks: ["across Belarus & Russia", "across all of Europe", "airport transfers"],
    cta: "Book a Transfer",
    ctaSecondary: "See Rates",
  },
  booking: {
    from: "From",
    fromPlaceholder: "City / airport",
    to: "To",
    toPlaceholder: "City / airport",
    date: "Date of trip",
    datePlaceholder: "Choose date",
    passengersClass: "Passengers, class",
    passengerOne: "passenger",
    passengerFew: "passengers",
    passengerMany: "passengers",
    adults: "Adults",
    adultsNote: "12+ years",
    children: "Children",
    childrenNote: "2–12 years",
    babies: "Babies",
    babiesNote: "under 2 years",
    pets: "Pets",
    petsNote: "up to 30 kg",
    maxPassengers: "Maximum 6 passengers",
    suitcases: "Number of suitcases",
    vehicleClass: "Class",
    classAny: "Any",
    classComfort: "Comfort",
    classBusiness: "Business",
    classPremium: "Premium",
    apply: "Apply",
    cta: "Order a transfer",
    toastTitle: "Request sent!",
    toastDesc: "Our manager will contact you shortly.",
  },
  services: {
    label: "Our Services",
    heading: "Routes of Comfort",
    items: [
      { title: "Airport Transfer", description: "Individual and group. Fixed price. Pre-booking available. Child seats. Meet & greet with name board." },
      { title: "Groups / Delegations up to 8", description: "Transfers and excursions. Spacious minivans (8 seats) with large luggage compartments." },
      { title: "Trips in Minsk, Belarus & Russia", description: "Hourly rate in the city, per-kilometer rate between cities. Sedans and minivans for any road." },
      { title: "Trips Across Europe (Lithuania, Latvia, Poland)", description: "Choose from a wide range of vehicle classes. Comfortable border crossing included." },
    ],
  },
  fleet: {
    label: "Fleet",
    heading: "Our Fleet",
    filterAll: "All",
    book: "Book",
    seats: "Seats",
    trunk: "Luggage",
    wifi: "Wi-Fi",
    airportLabel: "Airport transfer",
    from: "starting from",
    perHour: "hr",
  },
  pricing: {
    label: "Rates",
    heading: "Airport Transfer — Minsk",
    subheading: "Fixed prices for transfers from Minsk to the National Airport and back.",
    popular: "Most popular",
    book: "Book",
    plans: [
      { name: "Sedan (up to 4 pax) — Economy", features: ["Meet & greet with name board", "Luggage assistance", "Child seat on request", "Wait for delayed flights"] },
      { name: "Sedan (up to 4 pax) — Comfort", features: ["Meet & greet with name board", "Luggage assistance", "Child seat on request", "In-car Wi-Fi", "Water for passengers"] },
      { name: "Estate (up to 4 pax)", features: ["Meet & greet with name board", "Larger boot space", "Child seat on request", "Wait for delayed flights"] },
      { name: "Minivan (up to 8 pax)", features: ["Meet & greet with name board", "Ample luggage space", "Suitable for groups", "Child seats on request"] },
    ],
  },
  advantages: {
    label: "Why ComfortLine",
    heading: "Impeccable service every ride",
    items: [
      { title: "Full range of vehicles", description: "Economy and comfort sedans, minivans up to 8 seats. We will find the right car for your needs." },
      { title: "Always on time", description: "Our manager coordinates the entire process. Your car arrives exactly on schedule." },
      { title: "Professional drivers", description: "Polite, experienced, and knowledgeable. Business attire available on request." },
      { title: "Pre-booking & same-day", description: "Accept advance bookings and urgent orders with at least 5 hours' notice." },
      { title: "Passengers insured", description: "Your safety is our priority. The life and health of every passenger is insured for the journey." },
      { title: "Flexible rates", description: "Fixed prices on popular routes and special terms for regular corporate clients." },
    ],
  },
  reviews: {
    label: "Reviews",
    heading: "What our clients say",
    items: [
      { name: "Alexandra", city: "Minsk", text: "We took a group excursion to Dudutki. The driver arrived 15 minutes early. The car was spotless. Thank you for the outstanding level of service!" },
      { name: "Evgeny", city: "Moscow", text: "We came to Minsk as a group of 6. Used ComfortLine — they met us at the airport with a name board, got us to the hotel quickly. Excellent transfer." },
      { name: "Julia", city: "Molodechno", text: "Family trip to Egypt — three kids and lots of luggage. The minivan was spacious and comfortable. Couldn't have managed without this service. Thank you!" },
    ],
  },
  contact: {
    label: "Get in Touch",
    heading: "Book a Transfer",
    subheading: "Use the booking form above or contact us directly — our manager will confirm the details and arrange your trip. We operate around the clock.",
    phone: "Phone",
    email: "Email",
    address: "Address",
    licensing: {
      heading: "Licensing Information",
      text: "Individual Entrepreneur Murashko Andrey Antonovich holds a valid licence for international passenger road transport, No. 02190/1-85358 (registry number 13230000078378). Licence decision date: 30 June 2023. Validity: unlimited.",
      registryLabel: "Unified Licence Registry:",
      registryUrl1: "https://license.gov.by/",
      registryUrl2: "https://лицензия.бел",
      directLinkLabel: "Licence — Murashko A.A.:",
      directLinkUrl: "https://license.gov.by/onelicense/157966",
    },
  },
  footer: {
    tagline: "Individual business and premium class transfer. Operating since 2015 across Belarus, Russia, and Europe.",
    navHeading: "Navigation",
    navLinks: ["Services", "Fleet", "Airport Rates", "Why Us", "Reviews"],
    servicesHeading: "Routes",
    serviceLinks: ["Airport Transfer", "Trips in Minsk", "Intercity in Belarus", "Transfer to Russia", "Trips to Europe"],
    contactsHeading: "Contacts",
    copyright: "All rights reserved.",
    legalName: "IE Murashko Andrey Antonovich",
    unp: "TIN 193255422",
  },
};

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ru",
  setLang: () => {},
  t: ru,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: lang === "ru" ? ru : en }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
