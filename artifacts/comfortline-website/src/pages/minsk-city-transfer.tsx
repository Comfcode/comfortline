import { MapPin, Car, CheckCircle2 } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";


const data: RoutePageData = {
  ru: {
    badge: "Трансфер по Минску",
    title: "Трансферы по Минску",
    subtitle: "Бизнес-встречи, аэропорт, отели, рестораны и экскурсии — комфортная подача автомобиля по всему Минску с профессиональным водителем.",
    stats: [
      { label: "Зона охвата", value: "Весь Минск" },
      { label: "Подача", value: "30–60 мин" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
      { label: "Режим работы", value: "24 / 7" },
    ],
    photosTitle: "Минск — достопримечательности",
    photos: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Building,_23,_Independence_Avenue,_Minsk_-_the_capital_of_Republic_of_Belarus.JPG", caption: "Проспект Независимости" },
      { src: "https://paliparan.com/wp-content/uploads/2025/02/minsk-43a-800x445.jpg", caption: "Площадь Победы" },
      { src: "https://media-cdn.tripadvisor.com/media/photo-o/11/13/55/48/caption.jpg", caption: "Троицкое предместье" },
    ],
    howTitle: "Как работает трансфер",
    steps: [
      { icon: MapPin, title: "Укажите адрес", desc: "Оставьте заявку с адресом подачи и нужным временем — в любой точке Минска." },
      { icon: Car, title: "Водитель на месте", desc: "Опытный водитель прибудет заблаговременно. Никаких ожиданий и опозданий." },
      { icon: CheckCircle2, title: "Комфортная поездка", desc: "Прямо к нужному адресу: офис, отель, ресторан, аэропорт, вокзал." },
    ],
    infoTitle: "Информация о маршруте",
    infoRows: [
      { label: "Зона обслуживания", value: "Минск и пригород (до 50 км)" },
      { label: "Популярные направления", value: "Аэропорт Минск-2, ж/д вокзал, отели, бизнес-центры" },
      { label: "Доступные автомобили", value: "Mercedes E-Class, Kia Carnival, Hyundai Palisade" },
      { label: "Оплата", value: "Наличные, карта, перевод" },
      { label: "Бронирование", value: "Заблаговременно или срочно" },
    ],
    includedTitle: "Что включено",
    included: [
      "Подача от двери до двери",
      "Питьевая вода в дороге",
      "Помощь с багажом",
      "Детские кресла по запросу",
      "Встреча с табличкой в аэропорту",
      "Фиксированная цена без счётчика",
    ],
    whyTitle: "Почему ComfortLine",
    whyItems: [
      "Работаем с 2015 года — более 5 000 поездок",
      "Опытные водители со знанием города",
      "Кондиционированные автомобили бизнес-класса",
      "Всегда вовремя — или вернём деньги",
      "Русскоязычная поддержка 24/7",
      "Корпоративные счета для компаний",
    ],
    ctaTitle: "Заказать трансфер по Минску",
    ctaDesc: "Оставьте заявку — менеджер свяжется с вами в течение 15 минут.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Минск (по городу)",
    backBtn: "← Все услуги",
  },
  en: {
    badge: "Minsk City Transfer",
    title: "Minsk City Transfers",
    subtitle: "Business meetings, airport runs, hotels, restaurants and sightseeing — premium door-to-door service anywhere in Minsk with a professional chauffeur.",
    stats: [
      { label: "Coverage", value: "All Minsk" },
      { label: "Dispatch time", value: "30–60 min" },
      { label: "Vehicle class", value: "Business / Minivan" },
      { label: "Hours", value: "24 / 7" },
    ],
    photosTitle: "Minsk — Highlights",
    photos: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Building,_23,_Independence_Avenue,_Minsk_-_the_capital_of_Republic_of_Belarus.JPG", caption: "Independence Avenue" },
      { src: "https://paliparan.com/wp-content/uploads/2025/02/minsk-43a-800x445.jpg", caption: "Victory Square" },
      { src: "https://media-cdn.tripadvisor.com/media/photo-o/11/13/55/48/caption.jpg", caption: "Trinity Suburb (Troitskoye Predmestye)" },
    ],
    howTitle: "How it works",
    steps: [
      { icon: MapPin, title: "Give us your address", desc: "Submit a request with your pickup address and required time — anywhere in Minsk." },
      { icon: Car, title: "Driver arrives early", desc: "Your experienced driver will be there ahead of schedule. No waiting, no delays." },
      { icon: CheckCircle2, title: "Smooth arrival", desc: "Delivered directly to your destination: office, hotel, restaurant, airport or station." },
    ],
    infoTitle: "Route Details",
    infoRows: [
      { label: "Service area", value: "Minsk city & suburbs (up to 50 km)" },
      { label: "Popular destinations", value: "Minsk-2 Airport, Railway Station, hotels, business centres" },
      { label: "Available vehicles", value: "Mercedes E-Class, Kia Carnival, Hyundai Palisade" },
      { label: "Payment", value: "Cash, card or bank transfer" },
      { label: "Booking", value: "Advance or same-day" },
    ],
    includedTitle: "What's included",
    included: [
      "Door-to-door pickup and drop-off",
      "Complimentary bottled water",
      "Luggage assistance",
      "Child seats on request",
      "Name-board meet & greet at the airport",
      "Fixed price — no meter, no hidden extras",
    ],
    whyTitle: "Why ComfortLine",
    whyItems: [
      "Operating since 2015 — over 5,000 trips completed",
      "Experienced drivers with city expertise",
      "Air-conditioned business-class vehicles",
      "Always on time — or your money back",
      "Russian & English support 24/7",
      "Corporate accounts available",
    ],
    ctaTitle: "Book a Minsk City Transfer",
    ctaDesc: "Submit a request and our manager will contact you within 15 minutes.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Minsk (city)",
    backBtn: "← All services",
  },
};

export default function MinskCityTransferPage() {
  return <RouteLandingPage data={data} />;
}
