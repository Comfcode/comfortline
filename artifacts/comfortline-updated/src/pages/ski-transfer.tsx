import { MapPin, Briefcase, CheckCircle2 } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Лыжный трансфер",
    title: "Трансфер на лыжные курорты",
    subtitle:
      "Везём с лыжами, бордами и тёплой одеждой. Силичи, Логойск, Закопане, Татры или Альпы — отпуск начинается с момента выезда, а не с борьбы за место в автобусе.",
    stats: [
      { label: "Багаж", value: "Лыжи / борды OK" },
      { label: "Минивэн", value: "До 8 человек" },
      { label: "Подача", value: "От подъезда" },
      { label: "Сезон", value: "Декабрь–март" },
    ],
    photosTitle: "Зимние направления",
    photos: [
      {
        src: "https://images.pexels.com/photos/848612/pexels-photo-848612.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Горнолыжный склон",
      },
      {
        src: "https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Татры зимой",
      },
      {
        src: "https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Сноубординг",
      },
    ],
    howTitle: "Как проходит поездка",
    steps: [
      {
        icon: Briefcase,
        title: "Загрузим всё снаряжение",
        desc: "Лыжи, борды, ботинки, шлемы, чемоданы с тёплой одеждой — всё помещается в наш минивэн.",
      },
      {
        icon: MapPin,
        title: "Прямо до подъёмника",
        desc: "Привезём прямо к шале, отелю или нижней станции подъёмника — без пересадок и шаттлов.",
      },
      {
        icon: CheckCircle2,
        title: "Возврат по расписанию",
        desc: "Заберём в любой момент по согласованному расписанию — отпуск без забот о трансфере.",
      },
    ],
    infoTitle: "Популярные курорты",
    infoRows: [
      { label: "Минск — Силичи / Логойск", value: "~30–40 км, 45 мин" },
      { label: "Минск — Закопане (PL)", value: "~900 км, 11–13 ч" },
      { label: "Минск — Татры (SK)", value: "~1 100 км, 13–15 ч" },
      { label: "Минск — Буковель (UA)", value: "По запросу" },
      {
        label: "Минск — Альпы (AT/IT)",
        value: "Дальние трансферы по согласованию",
      },
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
    ctaDesc:
      "Оставьте заявку — менеджер свяжется в ближайшее время, уточнит количество людей и снаряжения и назовёт стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Горнолыжный курорт",
    backBtn: "← Все услуги",
  },
  en: {
    badge: "Ski Transfer",
    title: "Ski Resort Transfer",
    subtitle:
      "We carry your skis, boards and warm gear. Silichi, Logoisk, Zakopane, Tatras or the Alps — your holiday starts the moment you leave home, not after a fight for a bus seat.",
    stats: [
      { label: "Luggage", value: "Skis / boards OK" },
      { label: "Minivan", value: "Up to 8 people" },
      { label: "Pickup", value: "From your door" },
      { label: "Season", value: "December–March" },
    ],
    photosTitle: "Winter destinations",
    photos: [
      {
        src: "https://images.pexels.com/photos/848612/pexels-photo-848612.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Ski slope",
      },
      {
        src: "https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Tatras in winter",
      },
      {
        src: "https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Snowboarding",
      },
    ],
    howTitle: "How the transfer works",
    steps: [
      {
        icon: Briefcase,
        title: "We load all the gear",
        desc: "Skis, boards, boots, helmets, suitcases of warm clothes — it all fits in our minivan.",
      },
      {
        icon: MapPin,
        title: "Right to the lift",
        desc: "Drop-off at your chalet, hotel or directly at the base lift — no shuttles, no transfers.",
      },
      {
        icon: CheckCircle2,
        title: "Return on schedule",
        desc: "Pickup at the agreed time — your holiday is free of transfer worries.",
      },
    ],
    infoTitle: "Popular resorts",
    infoRows: [
      { label: "Minsk — Silichi / Logoisk", value: "~30–40 km, 45 min" },
      { label: "Minsk — Zakopane (PL)", value: "~900 km, 11–13 hrs" },
      { label: "Minsk — Tatras (SK)", value: "~1,100 km, 13–15 hrs" },
      { label: "Minsk — Bukovel (UA)", value: "On request" },
      {
        label: "Minsk — Alps (AT/IT)",
        value: "Long-haul transfers by arrangement",
      },
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
    ctaDesc:
      "Submit a request — our manager will reach out shortly, confirm passenger and gear count, and quote a price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Ski resort",
    backBtn: "← All services",
  },
  pl: {
    badge: "Transfer nart",
    title: "Transfer do ośrodka narciarskiego",
    subtitle:
      "Przewieziemy Twoje narty, deski i ciepły sprzęt. Silichi, Logoisk, Zakopane, Tatry czy Alpy – Twoje wakacje zaczynają się w momencie wyjścia z domu, a nie po walce o miejsce w autobusie.",
    stats: [
      { label: "Bagaż", value: "Narty/deski OK" },
      { label: "Minivan", value: "Do 8 osób" },
      { label: "Odbiór", value: "Z twoich drzwi" },
      { label: "Sezon", value: "Grudzień – marzec" },
    ],
    photosTitle: "Zimowe kierunki",
    photos: [
      {
        src: "https://images.pexels.com/photos/848612/pexels-photo-848612.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Stok narciarski",
      },
      {
        src: "https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Tatry zimą",
      },
      {
        src: "https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Snowboard",
      },
    ],
    howTitle: "Jak działa transfer",
    steps: [
      {
        icon: Briefcase,
        title: "Ładujemy cały sprzęt",
        desc: "Narty, deski, buty, kaski, walizki z ciepłą odzieżą – to wszystko zmieści się w naszym minivanie.",
      },
      {
        icon: MapPin,
        title: "Prosto do windy",
        desc: "Dowóz do domku, hotelu lub bezpośrednio do wyciągu bazowego – bez transportu wahadłowego i transferów.",
      },
      {
        icon: CheckCircle2,
        title: "Powrót zgodnie z harmonogramem",
        desc: "Odbiór w uzgodnionym terminie — Twoje wakacje są wolne od zmartwień związanych z transferem.",
      },
    ],
    infoTitle: "Popularne kurorty",
    infoRows: [
      { label: "Mińsk — Silichi / Logoisk", value: "~30–40 km, 45 min" },
      { label: "Mińsk — Zakopane (PL)", value: "~900 km, 11–13 godz" },
      { label: "Mińsk — Tatry (SK)", value: "~1100 km, 13–15 godz" },
      { label: "Mińsk — Bukowel (UA)", value: "Na żądanie" },
      {
        label: "Mińsk — Alpy (AT/IT)",
        value: "Transfery długodystansowe po uzgodnieniu",
      },
    ],
    includedTitle: "Co jest wliczone w cenę",
    included: [
      "Miejsce na narty i deskę (w kabinie lub na dachu)",
      "Przestronny minivan mieszczący do 8 pasażerów",
      "Ciepła kabina i gorące napoje w drodze",
      "Pomoc w załadunku i rozładunku sprzętu",
      "Po drodze przystanek na odpoczynek i kawę",
      "Stała cena zwrotu w obie strony",
    ],
    whyTitle: "Dlaczego ComfortLine",
    whyItems: [
      "Doświadczeni kierowcy zimowi, znający zaśnieżone drogi",
      "Opony z kolcami i pełne przygotowanie zimowe",
      "Grupa do 8 osób — taniej niż bilety kolejowe",
      "Odbiór w ustalonym dniu i godzinie",
      "Dzieci i zwierzęta mile widziane",
      "Praca w Nowym Roku i Świętach Bożego Narodzenia",
    ],
    ctaTitle: "Zarezerwuj transfer narciarski",
    ctaDesc:
      "Prześlij prośbę — nasz menedżer wkrótce się z Tobą skontaktuje, potwierdzi liczbę pasażerów i sprzętu oraz poda cenę.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Ośrodek narciarski",
    backBtn: "← Wszystkie usługi",
  },
  fr: {
    badge: "Transfert à ski",
    title: "Transfert Station de Ski",
    subtitle:
      "Nous transportons vos skis, planches et équipements chauds. Silichi, Logoisk, Zakopane, Tatras ou les Alpes : vos vacances commencent dès que vous quittez la maison, pas après une bagarre pour une place dans le bus.",
    stats: [
      { label: "Bagages", value: "Skis/planches OK" },
      { label: "Minifourgonnette", value: "Jusqu'à 8 personnes" },
      { label: "Ramassage", value: "De ta porte" },
      { label: "Saison", value: "Décembre-mars" },
    ],
    photosTitle: "Destinations hivernales",
    photos: [
      {
        src: "https://images.pexels.com/photos/848612/pexels-photo-848612.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Piste de ski",
      },
      {
        src: "https://images.pexels.com/photos/376697/pexels-photo-376697.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Tatras en hiver",
      },
      {
        src: "https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg?auto=compress&cs=tinysrgb&w=800",
        caption: "Snowboard",
      },
    ],
    howTitle: "Comment fonctionne le transfert",
    steps: [
      {
        icon: Briefcase,
        title: "Nous chargeons tout le matériel",
        desc: "Skis, planches, chaussures, casques, valises de vêtements chauds, tout rentre dans notre minibus.",
      },
      {
        icon: MapPin,
        title: "Directement à l'ascenseur",
        desc: "Dépose à votre chalet, hôtel ou directement à la base — pas de navettes, pas de transferts.",
      },
      {
        icon: CheckCircle2,
        title: "Retour dans les délais",
        desc: "Prise en charge à l'heure convenue : vos vacances sont sans soucis de transfert.",
      },
    ],
    infoTitle: "Stations populaires",
    infoRows: [
      { label: "Minsk — Silichi / Logoïsk", value: "~30 à 40 km, 45 minutes" },
      { label: "Minsk — Zakopane (PL)", value: "~900 km, 11 à 13 heures" },
      { label: "Minsk — Tatras (SK)", value: "~1 100 km, 13 à 15 heures" },
      { label: "Minsk — Boukovel (UA)", value: "Sur demande" },
      {
        label: "Minsk — Alpes (AT/IT)",
        value: "Transferts long-courriers sur rendez-vous",
      },
    ],
    includedTitle: "Ce qui est inclus",
    included: [
      "Espace pour skis et planches (à l'intérieur de la cabine ou sur le toit)",
      "Minivan spacieux jusqu'à 8 passagers",
      "Cabine chaleureuse et boissons chaudes sur la route",
      "Aide au chargement et déchargement du matériel",
      "Repos et arrêts café en cours de route",
      "Prix de retour fixe dans les deux sens",
    ],
    whyTitle: "Pourquoi ComfortLine",
    whyItems: [
      "Conducteurs hivernaux expérimentés familiers avec les routes enneigées",
      "Pneus cloutés et préparation hivernale complète",
      "Groupe de 8 personnes maximum – moins cher que les billets de train",
      "Prise en charge à la date et à l'heure convenues",
      "Enfants et animaux bienvenus",
      "Travailler pendant le Nouvel An et Noël",
    ],
    ctaTitle: "Réservez un transfert de ski",
    ctaDesc:
      "Soumettez une demande : notre responsable vous contactera sous peu, confirmera le nombre de passagers et d'équipement et proposera un prix.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Station de ski",
    backBtn: "← Tous les services",
  },
  seo: {
    titleRu: "Лыжный трансфер | Силичи, Татры, Закопане, Альпы | ComfortLine",
    titleEn: "Ski Transfer | Silichi, Tatras, Zakopane, Alps | ComfortLine",
    descRu:
      "Трансфер на горнолыжные курорты: Силичи, Логойск (Беларусь), Закопане и Татры (Польша), Альпы. Везём лыжи, борды и снаряжение. Минивэн до 8 человек. Сезон декабрь–март.",
    descEn:
      "Transfer to ski resorts — Silichi, Logoisk (Belarus), Zakopane, Tatras (Poland), Alps. We carry skis, boards, full gear. Minivan for up to 8 people. Season December–March.",
    pathRu: "/лыжный-трансфер",
    pathEn: "/ski-transfer",
    breadcrumbRu: "Лыжный трансфер",
    breadcrumbEn: "Ski Transfer",
    fromName: "Минск",
    toName: "Горнолыжный курорт",
  },
};

export default function SkiTransferPage() {
  return <RouteLandingPage data={data} />;
}
