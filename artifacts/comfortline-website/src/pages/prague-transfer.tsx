import { MapPin, ShieldCheck, Landmark } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";


const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Прагу",
    title: "Минск — Прага",
    subtitle: "Трансфер из Минска в столицу Чехии. Через Варшаву и Вроцлав — старинная Прага, замки и пивоварни ждут вас на комфортном автомобиле.",
    stats: [
      { label: "Расстояние", value: "~1 450 км" },
      { label: "Время в пути", value: "16–18 ч" },
      { label: "Границы", value: "BY–PL–CZ" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Прага — сердце Европы",
    photos: [
      { src: "https://www.amazingczechia.com/wp-content/uploads/2018/07/charles-bridge-prague-02-600x400.jpg", caption: "Карлов мост" },
      { src: "https://cdn-imgix.headout.com/media/images/203027ede3609da428d3f0e26c552948-15767-prague-prague-skip-the-line-tickets-to-the-astronomical-clock-tower-13.jpg?auto=compress,format&q=90", caption: "Старомéстская площадь" },
      { src: "https://images.pexels.com/photos/13881307/pexels-photo-13881307.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Пражский град" },
    ],
    howTitle: "Как проходит поездка",
    steps: [
      { icon: MapPin, title: "Выезд из Минска", desc: "Рекомендуем ранний выезд или поездку за 2 дня с ночёвкой в Варшаве." },
      { icon: ShieldCheck, title: "Границы BY–PL и PL–CZ", desc: "Два перехода. Водитель знает процедуры и актуальные маршруты через Польшу." },
      { icon: Landmark, title: "Прага: любой адрес", desc: "Отель в старом городе, аэропорт Вацлава Гавела, любая достопримечательность." },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      { label: "Маршрут", value: "Минск → Брест → Варшава → Вроцлав → Прага" },
      { label: "Расстояние", value: "~1 450 км" },
      { label: "Рекомендуемый план", value: "2 дня с ночёвкой в Варшаве" },
      { label: "Документы", value: "Шенгенская виза, загранпаспорт" },
      { label: "Аэропорт Праги", value: "Václav Havel Airport (PRG)" },
    ],
    includedTitle: "Что включено",
    included: [
      "Подача от адреса в Минске",
      "Прямой маршрут через Польшу и Чехию",
      "Помощь на всех пограничных переходах",
      "Питьевая вода и чистый комфортный салон",
      "Детские кресла по запросу",
      "Фиксированная стоимость на весь маршрут",
    ],
    whyTitle: "Почему ComfortLine",
    whyItems: [
      "Опыт длинных маршрутов по Европе",
      "Гибкий план: ночёвка в Варшаве по запросу",
      "Водитель знает Шенгенские КПП",
      "Обратный трансфер Прага–Минск",
      "Подходит для семей и небольших групп",
      "Полная поддержка на протяжении поездки",
    ],
    ctaTitle: "Заказать трансфер Минск–Прага",
    ctaDesc: "Оставьте заявку — обсудим маршрут и назовём точную стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Прага",
    backBtn: "← Все услуги",
  },
  en: {
    badge: "Prague Transfer",
    title: "Minsk — Prague",
    subtitle: "Private transfer from Minsk to the Czech capital. Via Warsaw and Wrocław — historic Prague, its castles and culture await at the end of a comfortable ride.",
    stats: [
      { label: "Distance", value: "~1,450 km" },
      { label: "Travel time", value: "16–18 hrs" },
      { label: "Borders", value: "BY–PL–CZ" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Prague — Heart of Europe",
    photos: [
      { src: "https://www.amazingczechia.com/wp-content/uploads/2018/07/charles-bridge-prague-02-600x400.jpg", caption: "Charles Bridge" },
      { src: "https://cdn-imgix.headout.com/media/images/203027ede3609da428d3f0e26c552948-15767-prague-prague-skip-the-line-tickets-to-the-astronomical-clock-tower-13.jpg?auto=compress,format&q=90", caption: "Old Town Square" },
      { src: "https://images.pexels.com/photos/13881307/pexels-photo-13881307.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Prague Castle" },
    ],
    howTitle: "How the transfer works",
    steps: [
      { icon: MapPin, title: "Early start from Minsk", desc: "We recommend a very early departure or a 2-day trip with an overnight stop in Warsaw." },
      { icon: ShieldCheck, title: "BY–PL and PL–CZ borders", desc: "Two crossings. Your driver knows the procedures and optimal routes through Poland." },
      { icon: Landmark, title: "Prague — any address", desc: "Old Town hotel, Václav Havel Airport (PRG) or any landmark or address in the city." },
    ],
    infoTitle: "Route Details",
    infoRows: [
      { label: "Route", value: "Minsk → Brest → Warsaw → Wrocław → Prague" },
      { label: "Distance", value: "~1,450 km" },
      { label: "Recommended plan", value: "2-day trip with overnight stop in Warsaw" },
      { label: "Documents required", value: "Schengen visa, valid passport" },
      { label: "Prague airport", value: "Václav Havel Airport (PRG)" },
    ],
    includedTitle: "What's included",
    included: [
      "Pickup from your Minsk address",
      "Direct route via Poland and Czech Republic",
      "Assistance at all border crossings",
      "Bottled water and clean comfortable cabin",
      "Child seats on request",
      "Fixed price for the entire route",
    ],
    whyTitle: "Why ComfortLine",
    whyItems: [
      "Experience with long-haul European transfers",
      "Flexible plan — Warsaw overnight available",
      "Driver familiar with Schengen checkpoints",
      "Return transfer Prague → Minsk available",
      "Ideal for families and small groups",
      "Full support throughout the journey",
    ],
    ctaTitle: "Book Minsk–Prague Transfer",
    ctaDesc: "Submit a request and we'll discuss the route and give you an exact price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Prague",
    backBtn: "← All services",
  },
};

export default function PragueTransferPage() {
  return <RouteLandingPage data={data} />;
}
