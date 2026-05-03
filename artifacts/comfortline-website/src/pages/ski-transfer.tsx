import { MapPin, Briefcase, CheckCircle2 } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Лыжный трансфер",
    title: "Трансфер на лыжные курорты",
    subtitle: "Везём с лыжами, бордами и тёплой одеждой. Силичи, Логойск, Закопане, Татры или Альпы — отпуск начинается с момента выезда, а не с борьбы за место в автобусе.",
    stats: [
      { label: "Багаж", value: "Лыжи / борды OK" },
      { label: "Минивэн", value: "До 8 человек" },
      { label: "Подача", value: "От подъезда" },
      { label: "Сезон", value: "Декабрь–март" },
    ],
    photosTitle: "Зимние направления",
    photos: [
      { src: "https://images.pexels.com/photos/848612/pexels-photo-848612.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Горнолыжный склон" },
      { src: "https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Татры зимой" },
      { src: "https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Сноубординг" },
    ],
    howTitle: "Как проходит поездка",
    steps: [
      { icon: Briefcase, title: "Загрузим всё снаряжение", desc: "Лыжи, борды, ботинки, шлемы, чемоданы с тёплой одеждой — всё помещается в наш минивэн." },
      { icon: MapPin, title: "Прямо до подъёмника", desc: "Привезём прямо к шале, отелю или нижней станции подъёмника — без пересадок и шаттлов." },
      { icon: CheckCircle2, title: "Возврат по расписанию", desc: "Заберём в любой момент по согласованному расписанию — отпуск без забот о трансфере." },
    ],
    infoTitle: "Популярные курорты",
    infoRows: [
      { label: "Минск — Силичи / Логойск", value: "~30–40 км, 45 мин" },
      { label: "Минск — Закопане (PL)", value: "~900 км, 11–13 ч" },
      { label: "Минск — Татры (SK)", value: "~1 100 км, 13–15 ч" },
      { label: "Минск — Буковель (UA)", value: "По запросу" },
      { label: "Минск — Альпы (AT/IT)", value: "Дальние трансферы по согласованию" },
    ],
    includedTitle: "Что включено",
    included: [
      "Места под лыжи и борды (внутри салона или на крыше)",
      "Просторный минивэн до 8 пассажиров",
      "Тёплый салон и горячие напитки в дороге",
      "Помощь с погрузкой/разгрузкой снаряжения",
      "Остановки на отдых и кофе",
      "Фиксированная цена в обе стороны",
    ],
    whyTitle: "Почему ComfortLine",
    whyItems: [
      "Опыт зимних поездок — водители знают зимние дороги",
      "Шипованная резина и подготовка к зиме",
      "Можно собрать компанию до 8 человек — дешевле, чем поездом",
      "Возврат в назначенный день и время",
      "Перевозим с детьми и питомцами",
      "Работаем все праздники — Новый год, Рождество",
    ],
    ctaTitle: "Заказать лыжный трансфер",
    ctaDesc: "Оставьте заявку — менеджер свяжется в течение 15 минут, уточнит количество людей и снаряжения и назовёт стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Горнолыжный курорт",
    backBtn: "← Все услуги",
  },
  en: {
    badge: "Ski Transfer",
    title: "Ski Resort Transfer",
    subtitle: "We carry your skis, boards and warm gear. Silichi, Logoisk, Zakopane, Tatras or the Alps — your holiday starts the moment you leave home, not after a fight for a bus seat.",
    stats: [
      { label: "Luggage", value: "Skis / boards OK" },
      { label: "Minivan", value: "Up to 8 people" },
      { label: "Pickup", value: "From your door" },
      { label: "Season", value: "December–March" },
    ],
    photosTitle: "Winter destinations",
    photos: [
      { src: "https://images.pexels.com/photos/848612/pexels-photo-848612.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Ski slope" },
      { src: "https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Tatras in winter" },
      { src: "https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Snowboarding" },
    ],
    howTitle: "How the transfer works",
    steps: [
      { icon: Briefcase, title: "We load all the gear", desc: "Skis, boards, boots, helmets, suitcases of warm clothes — it all fits in our minivan." },
      { icon: MapPin, title: "Right to the lift", desc: "Drop-off at your chalet, hotel or directly at the base lift — no shuttles, no transfers." },
      { icon: CheckCircle2, title: "Return on schedule", desc: "Pickup at the agreed time — your holiday is free of transfer worries." },
    ],
    infoTitle: "Popular resorts",
    infoRows: [
      { label: "Minsk — Silichi / Logoisk", value: "~30–40 km, 45 min" },
      { label: "Minsk — Zakopane (PL)", value: "~900 km, 11–13 hrs" },
      { label: "Minsk — Tatras (SK)", value: "~1,100 km, 13–15 hrs" },
      { label: "Minsk — Bukovel (UA)", value: "On request" },
      { label: "Minsk — Alps (AT/IT)", value: "Long-haul transfers by arrangement" },
    ],
    includedTitle: "What's included",
    included: [
      "Space for skis and boards (inside cabin or on roof)",
      "Spacious minivan up to 8 passengers",
      "Warm cabin and hot drinks on the road",
      "Help loading and unloading equipment",
      "Rest and coffee stops along the way",
      "Fixed return price both ways",
    ],
    whyTitle: "Why ComfortLine",
    whyItems: [
      "Experienced winter drivers familiar with snowy roads",
      "Studded tyres and full winter prep",
      "Group of up to 8 — cheaper than train tickets",
      "Pickup on your agreed date and time",
      "Kids and pets welcome",
      "Working through New Year and Christmas",
    ],
    ctaTitle: "Book a Ski Transfer",
    ctaDesc: "Submit a request — our manager will reach out within 15 minutes, confirm passenger and gear count, and quote a price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Ski resort",
    backBtn: "← All services",
  },
};

export default function SkiTransferPage() {
  return <RouteLandingPage data={data} />;
}
