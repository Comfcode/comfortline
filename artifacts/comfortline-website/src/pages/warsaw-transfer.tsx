import { RouteLandingPage, RoutePageData } from "./route-landing-page";


const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Варшаву",
    title: "Минск — Варшава",
    subtitle: "Комфортный трансфер из Минска в центр Варшавы. Прямая поездка без пересадок — деловые встречи, шоппинг, отдых или транзит через Польшу.",
    stats: [
      { label: "Расстояние", value: "~550 км" },
      { label: "Время в пути", value: "6–8 ч" },
      { label: "Граница", value: "Беларусь–Польша" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Варшава — достопримечательности",
    photos: [
      { src: "https://dynamic-media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/69/f2.jpg", caption: "Королевский замок" },
      { src: "https://render.pixels.com/images/images-new-artwork/images/artworkimages/medium/3/warsaw-city-evening-skyline-in-poland-artur-bogacki.jpg", caption: "Центр Варшавы" },
      { src: "https://www.bautrip.com/images/what-to-visit/royal-zamek-krolewski-caste-warsaw.jpg", caption: "Старый город Варшавы" },
    ],
    howTitle: "Как проходит поездка",
    steps: [
      { icon: "🏠", title: "Выезд из Минска", desc: "Водитель заберёт вас по указанному адресу в Минске и направится к польской границе." },
      { icon: "🛂", title: "Граница Беларусь–Польша", desc: "Переход на Тересполь или Кукурыки. Водитель знает актуальные очереди и помогает на КПП." },
      { icon: "🏙️", title: "Варшава: любой адрес", desc: "Отель в центре, Центральный вокзал, торговый центр или деловой район — куда скажете." },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      { label: "Маршрут", value: "Минск → Брест → Тересполь → Варшава" },
      { label: "Расстояние", value: "~550 км" },
      { label: "Пограничный переход", value: "Тересполь / Кукурыки (Беларусь–Польша)" },
      { label: "Время пересечения границы", value: "1–5 ч в зависимости от очереди" },
      { label: "Необходимые документы", value: "Виза Шенген (для граждан не ЕС), загранпаспорт" },
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
      "Регулярные поездки в Варшаву с 2015 года",
      "Водитель знает переходы и очереди",
      "Можно добавить остановки по пути",
      "Обратный трансфер: из Варшавы в Минск",
      "Работаем 24/7, включая праздники",
      "Отзывы реальных клиентов на сайте",
    ],
    ctaTitle: "Заказать трансфер Минск–Варшава",
    ctaDesc: "Оставьте заявку — менеджер свяжется с вами в течение 15 минут и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Варшава",
    backBtn: "← Все услуги",
  },
  en: {
    badge: "Warsaw Transfer",
    title: "Minsk — Warsaw",
    subtitle: "Comfortable private transfer from Minsk to Warsaw city centre. Direct, no changes — whether for business, shopping, sightseeing or onward travel across Poland.",
    stats: [
      { label: "Distance", value: "~550 km" },
      { label: "Travel time", value: "6–8 hrs" },
      { label: "Border", value: "Belarus–Poland" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Warsaw — Highlights",
    photos: [
      { src: "https://dynamic-media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/69/f2.jpg", caption: "Warsaw Old Town" },
      { src: "https://render.pixels.com/images/images-new-artwork/images/artworkimages/medium/3/warsaw-city-evening-skyline-in-poland-artur-bogacki.jpg", caption: "Royal Castle" },
      { src: "https://www.bautrip.com/images/what-to-visit/royal-zamek-krolewski-caste-warsaw.jpg", caption: "Warsaw city centre" },
    ],
    howTitle: "How the transfer works",
    steps: [
      { icon: "🏠", title: "Departure from Minsk", desc: "Your driver picks you up at your Minsk address and heads for the Polish border." },
      { icon: "🛂", title: "Belarus–Poland border", desc: "Terespol or Kukuryki crossing. Your driver knows current queue conditions and assists at the checkpoint." },
      { icon: "🏙️", title: "Warsaw — any address", desc: "City centre hotel, Central Station, shopping centre or business district — wherever you need." },
    ],
    infoTitle: "Route Details",
    infoRows: [
      { label: "Route", value: "Minsk → Brest → Terespol → Warsaw" },
      { label: "Distance", value: "~550 km" },
      { label: "Border crossing", value: "Terespol / Kukuryki (Belarus–Poland)" },
      { label: "Border crossing time", value: "1–5 hrs depending on queues" },
      { label: "Documents required", value: "Schengen visa (non-EU citizens), valid passport" },
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
      "Regular Warsaw runs since 2015",
      "Driver familiar with border crossings and queues",
      "Optional stops en route on request",
      "Return transfer Warsaw → Minsk also available",
      "Available 24/7 including public holidays",
      "Verified reviews from real clients",
    ],
    ctaTitle: "Book Minsk–Warsaw Transfer",
    ctaDesc: "Submit a request and our manager will contact you within 15 minutes with an exact price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Warsaw",
    backBtn: "← All services",
  },
};

export default function WarsawTransferPage() {
  return <RouteLandingPage data={data} />;
}
