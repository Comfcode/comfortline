import { RouteLandingPage, RoutePageData } from "./route-landing-page";


const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Берлин",
    title: "Минск — Берлин",
    subtitle: "Прямой трансфер из Минска в столицу Германии. Через Варшаву или Познань — комфортный автомобиль, профессиональный водитель, без пересадок.",
    stats: [
      { label: "Расстояние", value: "~1 150 км" },
      { label: "Время в пути", value: "14–16 ч" },
      { label: "Границы", value: "BY–PL–DE" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Берлин — достопримечательности",
    photos: [
      { src: "https://images.pexels.com/photos/2817497/pexels-photo-2817497.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Бранденбургские ворота" },
      { src: "https://mywowo.net/media/images/cache/berlino_museuminsel_08_berliner_dom_jpg_1200_630_cover_85.jpg", caption: "Берлинский собор" },
      { src: "https://images.pexels.com/photos/1128408/pexels-photo-1128408.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Центр Берлина" },
    ],
    howTitle: "Как проходит поездка",
    steps: [
      { icon: "🏠", title: "Выезд из Минска", desc: "Водитель заберёт вас рано утром — рекомендуем выезжать накануне или очень рано, чтобы учесть время на границе." },
      { icon: "🛂", title: "Две границы", desc: "Беларусь–Польша, затем Польша–Германия (Шенген). Водитель знает процедуры и документы." },
      { icon: "🏙️", title: "Берлин: любой адрес", desc: "Отель, аэропорт BER, Hauptbahnhof или любой адрес в пределах города." },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      { label: "Маршрут", value: "Минск → Брест → Варшава → Берлин" },
      { label: "Расстояние", value: "~1 150 км" },
      { label: "Границы", value: "BY–PL (Тересполь), PL–DE (Шенген)" },
      { label: "Рекомендуемое время в пути", value: "1–2 дня с ночёвкой в Варшаве" },
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
    ctaDesc: "Оставьте заявку — менеджер обсудит удобное время и стоимость маршрута.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Берлин",
    backBtn: "← Все услуги",
  },
  en: {
    badge: "Berlin Transfer",
    title: "Minsk — Berlin",
    subtitle: "Private transfer from Minsk to the German capital. Via Warsaw or Poznan — comfortable vehicle, professional chauffeur, no train changes or bus stops.",
    stats: [
      { label: "Distance", value: "~1,150 km" },
      { label: "Travel time", value: "14–16 hrs" },
      { label: "Borders", value: "BY–PL–DE" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Berlin — Highlights",
    photos: [
      { src: "https://images.pexels.com/photos/2817497/pexels-photo-2817497.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Brandenburg Gate" },
      { src: "https://mywowo.net/media/images/cache/berlino_museuminsel_08_berliner_dom_jpg_1200_630_cover_85.jpg", caption: "Berlin Cathedral" },
      { src: "https://images.pexels.com/photos/1128408/pexels-photo-1128408.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Central Berlin" },
    ],
    howTitle: "How the transfer works",
    steps: [
      { icon: "🏠", title: "Early departure from Minsk", desc: "Your driver picks you up early — we recommend a very early start or an overnight stop in Warsaw to account for border time." },
      { icon: "🛂", title: "Two border crossings", desc: "Belarus–Poland, then Poland–Germany (Schengen). Your driver knows all procedures and paperwork." },
      { icon: "🏙️", title: "Berlin — any address", desc: "Hotel, Berlin Brandenburg Airport (BER), Hauptbahnhof or any address in the city." },
    ],
    infoTitle: "Route Details",
    infoRows: [
      { label: "Route", value: "Minsk → Brest → Warsaw → Berlin" },
      { label: "Distance", value: "~1,150 km" },
      { label: "Borders", value: "BY–PL (Terespol), PL–DE (Schengen)" },
      { label: "Recommended travel plan", value: "1–2 days with overnight stop in Warsaw" },
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
    ctaDesc: "Submit a request and our manager will discuss timing and pricing for your route.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Berlin",
    backBtn: "← All services",
  },
};

export default function BerlinTransferPage() {
  return <RouteLandingPage data={data} />;
}
