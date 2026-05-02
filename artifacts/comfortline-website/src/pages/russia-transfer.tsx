import { RouteLandingPage, RoutePageData } from "./route-landing-page";


const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Россию",
    title: "Трансферы Беларусь — Россия",
    subtitle: "Москва, Смоленск, Санкт-Петербург и другие города России. Прямой трансфер от двери до двери без пересадок на автобус или поезд.",
    stats: [
      { label: "Минск — Москва", value: "~720 км" },
      { label: "Минск — Смоленск", value: "~370 км" },
      { label: "Время (Москва)", value: "8–10 ч" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Россия — города и архитектура",
    photos: [
      { src: "https://media.cnn.com/api/v1/images/stellar/prod/201111165403-04-saint-basils-origins-test-of-time-restricted.jpg", caption: "Красная площадь, Москва" },
      { src: "https://images.pexels.com/photos/236294/pexels-photo-236294.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Собор Василия Блаженного" },
      { src: "https://preview.redd.it/the-modern-skyline-of-moscow-contrasted-against-the-older-v0-3ozrrywrlv281.jpg?width=640&crop=smart&auto=webp&s=408ae82e347509d547cf9048ec69c64da33484a8", caption: "Москва-Сити" },
    ],
    howTitle: "Как проходит поездка",
    steps: [
      { icon: "🏠", title: "Выезд из Минска", desc: "Водитель забирает вас по адресу в Минске и берёт курс на Россию." },
      { icon: "🛂", title: "Граница Беларусь–Россия", desc: "Граница между Беларусью и Россией — только для граждан РФ и РБ. Водитель знает все нюансы." },
      { icon: "🏁", title: "Прибытие в Москву", desc: "Доставка прямо по адресу: отель, офис, аэропорт Шереметьево / Домодедово / Внуково." },
    ],
    infoTitle: "Популярные маршруты",
    infoRows: [
      { label: "Минск — Смоленск", value: "~370 км, 4–5 ч" },
      { label: "Минск — Москва", value: "~720 км, 8–10 ч" },
      { label: "Минск — Москва (с ночёвкой)", value: "Трансфер за 2 дня по запросу" },
      { label: "Пограничный переход", value: "Беларусь–Россия (только для граждан РФ/РБ)" },
      { label: "Оплата", value: "Наличные, карта, перевод" },
    ],
    includedTitle: "Что включено",
    included: [
      "Подача от адреса в Минске",
      "Прямой маршрут без пересадок",
      "Питьевая вода и комфортный салон",
      "Детские кресла по запросу",
      "Помощь на границе",
      "Фиксированная цена",
    ],
    whyTitle: "Почему ComfortLine",
    whyItems: [
      "Опытные водители на маршруте Минск–Москва",
      "Знание актуальных пограничных процедур",
      "Вместительные автомобили для длинных дорог",
      "Доступны ночные и утренние рейсы",
      "Связь с водителем на протяжении всей поездки",
      "Более 5 000 поездок с 2015 года",
    ],
    ctaTitle: "Заказать трансфер в Россию",
    ctaDesc: "Оставьте заявку — менеджер свяжется с вами и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Москва / Россия",
    backBtn: "← Все услуги",
  },
  en: {
    badge: "Russia Transfer",
    title: "Belarus — Russia Transfers",
    subtitle: "Moscow, Smolensk, Saint Petersburg and beyond. Direct door-to-door transfer without bus or train changes — comfort the whole way.",
    stats: [
      { label: "Minsk — Moscow", value: "~720 km" },
      { label: "Minsk — Smolensk", value: "~370 km" },
      { label: "Travel time (Moscow)", value: "8–10 hrs" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Russia — Cities & Architecture",
    photos: [
      { src: "https://media.cnn.com/api/v1/images/stellar/prod/201111165403-04-saint-basils-origins-test-of-time-restricted.jpg", caption: "Red Square, Moscow" },
      { src: "https://images.pexels.com/photos/236294/pexels-photo-236294.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Saint Basil's Cathedral" },
      { src: "https://preview.redd.it/the-modern-skyline-of-moscow-contrasted-against-the-older-v0-3ozrrywrlv281.jpg?width=640&crop=smart&auto=webp&s=408ae82e347509d547cf9048ec69c64da33484a8", caption: "Moscow City skyline" },
    ],
    howTitle: "How it works",
    steps: [
      { icon: "🏠", title: "Departure from Minsk", desc: "Your driver collects you at your Minsk address and heads for Russia." },
      { icon: "🛂", title: "Belarus–Russia border", desc: "Open border for RU/BY citizens. Your driver is familiar with all procedures and crossing points." },
      { icon: "🏁", title: "Arrival in Moscow", desc: "Delivered directly to your hotel, office or airport (Sheremetyevo / Domodedovo / Vnukovo)." },
    ],
    infoTitle: "Popular Routes",
    infoRows: [
      { label: "Minsk — Smolensk", value: "~370 km, 4–5 hrs" },
      { label: "Minsk — Moscow", value: "~720 km, 8–10 hrs" },
      { label: "Minsk — Moscow (overnight)", value: "2-day transfer available on request" },
      { label: "Border crossing", value: "Belarus–Russia (RU/BY citizens only)" },
      { label: "Payment", value: "Cash, card or bank transfer" },
    ],
    includedTitle: "What's included",
    included: [
      "Pickup from your Minsk address",
      "Direct route — no transfers or connections",
      "Bottled water and comfortable cabin",
      "Child seats on request",
      "Border crossing assistance",
      "Fixed price — no meter",
    ],
    whyTitle: "Why ComfortLine",
    whyItems: [
      "Experienced drivers on the Minsk–Moscow corridor",
      "Up-to-date knowledge of border procedures",
      "Spacious vehicles built for long-distance comfort",
      "Night and early-morning departures available",
      "Driver reachable throughout the entire journey",
      "Over 5,000 transfers completed since 2015",
    ],
    ctaTitle: "Book a Russia Transfer",
    ctaDesc: "Submit a request and our manager will contact you with an exact price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Moscow / Russia",
    backBtn: "← All services",
  },
};

export default function RussiaTransferPage() {
  return <RouteLandingPage data={data} />;
}
