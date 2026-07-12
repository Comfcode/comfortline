import { MapPin, Users, CheckCircle2 } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер в санаторий",
    title: "Трансфер в санатории Беларуси",
    subtitle:
      "Доставим вас от двери дома или аэропорта прямо к корпусу санатория. Нарочь, Браслав, Жлобин, Беловежская Пуща — комфорт без пересадок на электричках и автобусах.",
    stats: [
      { label: "Маршруты", value: "Все санатории РБ" },
      { label: "Багаж", value: "Без ограничений" },
      { label: "Подача", value: "Из любой точки" },
      { label: "Класс авто", value: "Седан / Минивэн" },
    ],
    photosTitle: "Здравницы Беларуси",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/%D0%A1%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D0%B9_%D0%9D%D0%B0%D1%80%D0%BE%D1%87%D1%8C_%D0%B2%D0%B8%D0%B4_%D1%81_%D0%BE%D0%B7%D0%B5%D1%80%D0%B0.jpg/1280px-%D0%A1%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D0%B9_%D0%9D%D0%B0%D1%80%D0%BE%D1%87%D1%8C_%D0%B2%D0%B8%D0%B4_%D1%81_%D0%BE%D0%B7%D0%B5%D1%80%D0%B0.jpg",
        caption: "Санаторий «Нарочь»",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/%D0%A1%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D0%B9_%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22_-_panoramio.jpg/1280px-%D0%A1%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D0%B9_%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22_-_panoramio.jpg",
        caption: "Санаторий «Спутник»",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Sanatoriy_Krinica.jpg",
        caption: "Санаторий «Криница»",
      },
    ],
    howTitle: "Как проходит поездка",
    steps: [
      {
        icon: MapPin,
        title: "Подача к адресу",
        desc: "Заберём вас от дома, аэропорта или вокзала в назначенное время — без долгого ожидания.",
      },
      {
        icon: Users,
        title: "Комфорт всей семье",
        desc: "Помощь с багажом, удобный салон, остановки по запросу. Перевозим с пожилыми пассажирами и детьми.",
      },
      {
        icon: CheckCircle2,
        title: "Прямо к корпусу",
        desc: "Доставим прямо к нужному корпусу санатория — не нужно идти с чемоданами.",
      },
    ],
    infoTitle: "Популярные направления",
    infoRows: [
      { label: "Минск — Нарочь", value: "~160 км, 2–2,5 ч" },
      { label: "Минск — Браслав", value: "~240 км, 3–3,5 ч" },
      { label: "Минск — Беловежская Пуща", value: "~370 км, 4,5–5 ч" },
      { label: "Минск — Жлобин / Бобруйск", value: "~150–170 км, 2–2,5 ч" },
      {
        label: "Аэропорт Минск — любой санаторий",
        value: "Прямой трансфер без посадок",
      },
    ],
    includedTitle: "Что включено",
    included: [
      "Подача в любую точку Беларуси",
      "Помощь с багажом и сумками",
      "Остановки по запросу (туалет, кафе)",
      "Сопровождение пожилых пассажиров",
      "Детские кресла и бустеры по запросу",
      "Фиксированная цена в обе стороны",
    ],
    whyTitle: "Почему ComfortLine",
    whyItems: [
      "Доставка прямо к корпусу санатория",
      "Возможен трансфер «туда-обратно» через 7–14–21 день",
      "Чистый и просторный салон",
      "Возможность перевозки с домашним питомцем",
      "Опытные водители — спокойная и плавная езда",
      "Работаем 24/7 — рейс в любое время",
    ],
    ctaTitle: "Заказать трансфер в санаторий",
    ctaDesc:
      "Оставьте заявку — менеджер свяжется в ближайшее время, уточнит санаторий и назовёт точную стоимость в обе стороны.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Санаторий",
    backBtn: "← Все услуги",
    faqTitle: "Частые вопросы — трансфер в санатории",
    faq: [
      {
        q: "Сколько стоит трансфер из Минска в санаторий «Нарочь»?",
        a: "Цена — по запросу, свяжитесь с нами. Стоимость зависит от класса авто (бизнес-седан 1–3 пассажира или минивэн 4–8), необходимости детского кресла, поездки с домашним животным, конкретного санатория и даты, а также других пожеланий клиента. Маршрут до Нарочи ~160 км, время в пути 2–2,5 часа. Менеджер озвучит фиксированную сумму с включёнными топливом, страховкой, помощью с багажом и подачей от любого адреса в Минске.",
      },
      {
        q: "До каких санаториев вы возите?",
        a: "Все санатории Беларуси: Нарочь и Сосны (озеро Нарочь), Лесные озёра и Браславские озёра, «Спутник», «Криница», «Журавушка», Беловежская Пуща, Жлобин, Бобруйск, Могилёвская и Брестская области. Доставляем точно к нужному корпусу — без долгих прогулок с чемоданами.",
      },
      {
        q: "Подаёте ли вы прямо из аэропорта Минск-2?",
        a: "Да. Встретим у выхода из терминала с табличкой и доставим прямо к корпусу санатория без пересадок и автобусов. Из аэропорта в Нарочь — около 3 часов.",
      },
      {
        q: "Можно ли заказать обратный трансфер заранее?",
        a: "Да, чаще всего так и делают: бронируете «туда и обратно» одной заявкой, мы фиксируем дату возврата (через 7, 14 или 21 день). Скидка 5% на пару поездок. За день до возврата водитель уточнит точное время выезда.",
      },
      {
        q: "Можно ли с пожилым пассажиром или ребёнком?",
        a: "Да — это наш основной профиль. Помогаем сесть/встать, грузим всё в багажник сами, везём плавно без резких манёвров. Детские кресла — бесплатно по запросу. Можно делать остановки в дороге каждые 1,5–2 часа.",
      },
      {
        q: "А с домашним животным?",
        a: "Везём кошек и собак мелких/средних пород в переноске или на коврике. Предупредите менеджера при заказе — подадим машину с защитным чехлом (небольшая доплата за подготовку салона).",
      },
    ],
  },
  en: {
    badge: "Resort Transfer",
    title: "Transfer to Belarus Resorts",
    subtitle:
      "Door-to-door transfers from home or airport directly to your resort building. Naroch, Braslav, Zhlobin, Belovezhskaya Pushcha — no train changes, no shuttle buses.",
    stats: [
      { label: "Destinations", value: "All Belarus resorts" },
      { label: "Luggage", value: "No limits" },
      { label: "Pickup", value: "From anywhere" },
      { label: "Vehicle", value: "Sedan / Minivan" },
    ],
    photosTitle: "Belarus Resorts",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/%D0%A1%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D0%B9_%D0%9D%D0%B0%D1%80%D0%BE%D1%87%D1%8C_%D0%B2%D0%B8%D0%B4_%D1%81_%D0%BE%D0%B7%D0%B5%D1%80%D0%B0.jpg/1280px-%D0%A1%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D0%B9_%D0%9D%D0%B0%D1%80%D0%BE%D1%87%D1%8C_%D0%B2%D0%B8%D0%B4_%D1%81_%D0%BE%D0%B7%D0%B5%D1%80%D0%B0.jpg",
        caption: "Naroch Resort",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/%D0%A1%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D0%B9_%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22_-_panoramio.jpg/1280px-%D0%A1%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D0%B9_%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22_-_panoramio.jpg",
        caption: "Sputnik Resort",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Sanatoriy_Krinica.jpg",
        caption: "Krinitsa Resort",
      },
    ],
    howTitle: "How the transfer works",
    steps: [
      {
        icon: MapPin,
        title: "Pickup at your address",
        desc: "We collect you from home, the airport or the station at the agreed time — no long waits.",
      },
      {
        icon: Users,
        title: "Comfort for the whole family",
        desc: "Luggage assistance, comfortable cabin, on-request stops. Suitable for elderly passengers and children.",
      },
      {
        icon: CheckCircle2,
        title: "Right to the building",
        desc: "We drop you off directly at the correct resort building — no walking with suitcases.",
      },
    ],
    infoTitle: "Popular destinations",
    infoRows: [
      { label: "Minsk — Naroch", value: "~160 km, 2–2.5 hrs" },
      { label: "Minsk — Braslav", value: "~240 km, 3–3.5 hrs" },
      { label: "Minsk — Belovezhskaya Pushcha", value: "~370 km, 4.5–5 hrs" },
      { label: "Minsk — Zhlobin / Bobruisk", value: "~150–170 km, 2–2.5 hrs" },
      {
        label: "Minsk Airport — any resort",
        value: "Direct transfer, no stops",
      },
    ],
    includedTitle: "What's included",
    included: [
      "Pickup anywhere in Belarus",
      "Help with luggage and bags",
      "On-request stops (restroom, café)",
      "Assistance for elderly passengers",
      "Child seats and boosters on request",
      "Fixed return price both ways",
    ],
    whyTitle: "Why ComfortLine",
    whyItems: [
      "Drop-off at the exact resort building",
      "Round-trip option: pickup after 7–14–21 days",
      "Clean and spacious cabin",
      "Pets welcome on request",
      "Experienced drivers — calm, smooth driving",
      "24/7 — depart anytime",
    ],
    ctaTitle: "Book a Resort Transfer",
    ctaDesc:
      "Submit a request — our manager will reach out shortly, confirm the resort and quote a fixed return price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Resort",
    backBtn: "← All services",
    faqTitle: "Frequently asked — Belarus resort transfers",
    faq: [
      {
        q: "How much is a transfer from Minsk to Naroch resort?",
        a: "Price is on request — please contact us. The exact figure depends on the vehicle class (business sedan for 1–3 passengers or minivan for 4–8), whether you need a child seat, whether you travel with a pet, the chosen resort and date, and any other special requests. The route to Naroch is ~160 km, around 2–2.5 hours one way. Our manager confirms a fixed price with fuel, insurance, luggage help and pickup from any Minsk address already included.",
      },
      {
        q: "Which Belarusian resorts do you serve?",
        a: "All major Belarus sanatoriums and resorts: Naroch and Sosny (Lake Naroch), Forest Lakes and Braslav Lakes, Sputnik, Krinitsa, Zhuravushka, Belovezhskaya Pushcha, Zhlobin, Bobruisk and resorts across Mogilev and Brest regions. We drop you right at the building — no long walk with suitcases.",
      },
      {
        q: "Can you pick us up directly from Minsk Airport (MSQ)?",
        a: "Yes. We meet you at the terminal exit with a name sign and drive straight to your resort, no buses or transfers. Airport to Naroch is about 3 hours.",
      },
      {
        q: "Can I book the return transfer in advance?",
        a: "Yes — most clients do. Book round-trip in one request and we fix the return date (after 7, 14 or 21 days). 5% discount on the pair. The driver confirms the exact return time the day before.",
      },
      {
        q: "Is it suitable for elderly passengers or small children?",
        a: "Yes — this is our specialty. We help with boarding, load all luggage ourselves, drive smoothly without sudden manoeuvres. Child seats are free on request. Stops every 1.5–2 hours en route are no problem.",
      },
      {
        q: "Can I travel with a pet?",
        a: "Yes — small and medium cats and dogs in a carrier or on a mat. Let the manager know at booking — we'll bring a car with a protective seat cover (small cabin-prep surcharge applies).",
      },
    ],
  },
  pl: {
    badge: "Transfer z ośrodka",
    title: "Transfer do kurortów na Białorusi",
    subtitle:
      "Transfery od drzwi do drzwi z domu lub lotniska bezpośrednio do budynku ośrodka. Narocz, Brasław, Żłobin, Puszcza Białowieska — bez przesiadek, bez autobusów wahadłowych.",
    stats: [
      { label: "Miejsca docelowe", value: "Wszystkie kurorty na Białorusi" },
      { label: "Bagaż", value: "Żadnych ograniczeń" },
      { label: "Odbiór", value: "Z dowolnego miejsca" },
      { label: "Pojazd", value: "Sedan/Minivan" },
    ],
    photosTitle: "Kurorty na Białorusi",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/%D0%A1%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D0%B9_%D0%9D%D0%B0%D1%80%D0%BE%D1%87%D1%8C_%D0%B2%D0%B8%D0%B4_%D1%81_%D0%BE%D0%B7%D0%B5%D1%80%D0%B0.jpg/1280px-%D0%A1%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D0%B9_%D0%9D%D0%B0%D1%80%D0%BE%D1%87%D1%8C_%D0%B2%D0%B8%D0%B4_%D1%81_%D0%BE%D0%B7%D0%B5%D1%80%D0%B0.jpg",
        caption: "Ośrodek Narocz",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/%D0%A1%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D0%B9_%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22_-_panoramio.jpg/1280px-%D0%A1%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D0%B9_%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22_-_panoramio.jpg",
        caption: "Ośrodek Sputnik",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Sanatoriy_Krinica.jpg",
        caption: "Ośrodek Krinitsa",
      },
    ],
    howTitle: "Jak działa transfer",
    steps: [
      {
        icon: MapPin,
        title: "Odbiór pod Twoim adresem",
        desc: "Odbierzemy Cię z domu, lotniska lub dworca o umówionej godzinie – bez długiego czekania.",
      },
      {
        icon: Users,
        title: "Komfort dla całej rodziny",
        desc: "Pomoc bagażowa, wygodna kabina, przystanki na żądanie. Odpowiedni dla starszych pasażerów i dzieci.",
      },
      {
        icon: CheckCircle2,
        title: "Prawo do budynku",
        desc: "Wysadzimy Cię bezpośrednio pod właściwym budynkiem ośrodka — bez konieczności chodzenia z walizkami.",
      },
    ],
    infoTitle: "Popularne kierunki",
    infoRows: [
      { label: "Mińsk — Narocz", value: "~160 km, 2–2,5 godz" },
      { label: "Mińsk — Brasław", value: "~240 km, 3–3,5 godz" },
      { label: "Mińsk — Puszcza Białowieska", value: "~370 km, 4,5–5 godz" },
      { label: "Mińsk — Żłobin / Bobrujsk", value: "~150–170 km, 2–2,5 godz" },
      {
        label: "Lotnisko w Mińsku — dowolny kurort",
        value: "Bezpośredni transfer, bez przystanków",
      },
    ],
    includedTitle: "Co jest wliczone w cenę",
    included: [
      "Odbiór w dowolnym miejscu na Białorusi",
      "Pomoc z bagażami i torbami",
      "Przystanki na żądanie (toaleta, kawiarnia)",
      "Pomoc dla starszych pasażerów",
      "Foteliki dziecięce i podstawki podwyższające na zamówienie",
      "Stała cena zwrotu w obie strony",
    ],
    whyTitle: "Dlaczego ComfortLine",
    whyItems: [
      "Dowóz do konkretnego budynku ośrodka",
      "Opcja podróży w obie strony: odbiór po 7–14–21 dniach",
      "Czysta i przestronna kabina",
      "Zwierzęta mile widziane na życzenie",
      "Doświadczeni kierowcy — spokojna, płynna jazda",
      "24 godziny na dobę, 7 dni w tygodniu — wyjazd o dowolnej porze",
    ],
    ctaTitle: "Zarezerwuj transfer do ośrodka",
    ctaDesc:
      "Prześlij prośbę — nasz menedżer wkrótce się z Tobą skontaktuje, potwierdzi ośrodek i poda stałą cenę za zwrot.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Ośrodek",
    backBtn: "← Wszystkie usługi",
    faqTitle: "Często zadawane pytania — transfery do kurortów na Białorusi",
    faq: [
      {
        q: "Ile kosztuje transfer z Mińska do kurortu Narocz?",
        a: "Cena na zapytanie – prosimy o kontakt. Dokładna liczba zależy od klasy pojazdu (biznesowy sedan dla 1–3 pasażerów lub minivan dla 4–8 osób), tego, czy potrzebujesz fotelika dziecięcego, czy podróżujesz ze zwierzęciem, wybranego ośrodka i terminu oraz innych specjalnych życzeń. Trasa do Narocz wynosi ~160 km, czas podróży w jedną stronę wynosi około 2–2,5 godziny. Nasz menadżer potwierdza stałą cenę obejmującą paliwo, ubezpieczenie, pomoc w zakresie bagażu i odbiór z dowolnego adresu w Mińsku.",
      },
      {
        q: "Które białoruskie kurorty obsługujecie?",
        a: "Wszystkie główne białoruskie sanatoria i kurorty: Narocz i Sosny (Jezioro Narocz), Jeziora Leśne i Jeziora Brasławskie, Sputnik, Krinica, Żurawuszka, Puszcza Białowieska, Żłobin, Bobrujsk oraz kurorty w obwodzie mohylewskim i brzeskim. Podrzucimy Cię bezpośrednio pod budynek – bez długiego spaceru z walizkami.",
      },
      {
        q: "Czy możesz nas odebrać bezpośrednio z lotniska w Mińsku (MSQ)?",
        a: "Tak. Spotkamy się z Tobą przy wyjściu z terminala z tabliczką z nazwą i pojedziemy prosto do Twojego ośrodka, bez autobusów i przesiadek. Z lotniska do Narocz jest około 3 godziny.",
      },
      {
        q: "Czy mogę zarezerwować transfer powrotny z wyprzedzeniem?",
        a: "Tak – większość klientów tak robi. Zarezerwuj przejazd w obie strony na jedno żądanie, a my ustalimy termin powrotu (po 7, 14 lub 21 dniach). Rabat 5% na parę. Dokładną godzinę powrotu kierowca potwierdza dzień wcześniej.",
      },
      {
        q: "Czy jest odpowiedni dla starszych pasażerów i małych dzieci?",
        a: "Tak – to nasza specjalność. Pomagamy przy wejściu na pokład, sami załadowujemy cały bagaż, jeździmy płynnie i bez gwałtownych manewrów. Foteliki dziecięce są bezpłatne na życzenie. Przystanki na trasie co 1,5–2 godziny nie stanowią problemu.",
      },
      {
        q: "Czy mogę podróżować ze zwierzęciem?",
        a: "Tak – małe i średnie koty i psy w transporterze lub na macie. Poinformuj menadżera przy rezerwacji — przywieziemy samochód z ochronnym pokrowcem na siedzenia (obowiązuje dodatkowa opłata za małe przygotowanie kabiny).",
      },
    ],
  },
  fr: {
    badge: "Transfert du complexe",
    title: "Transfert vers les complexes hôteliers de Biélorussie",
    subtitle:
      "Transferts porte-à-porte depuis votre domicile ou votre aéroport directement vers votre complexe hôtelier. Naroch, Braslav, Zhlobin, Belovezhskaya Pushcha — pas de changement de train, pas de navettes.",
    stats: [
      {
        label: "Destinations",
        value: "Toutes les stations balnéaires de Biélorussie",
      },
      { label: "Bagages", value: "Aucune limite" },
      { label: "Ramassage", value: "De n'importe où" },
      { label: "Véhicule", value: "Berline / Minifourgonnette" },
    ],
    photosTitle: "Resort Biélorussie",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/%D0%A1%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D0%B9_%D0%9D%D0%B0%D1%80%D0%BE%D1%87%D1%8C_%D0%B2%D0%B8%D0%B4_%D1%81_%D0%BE%D0%B7%D0%B5%D1%80%D0%B0.jpg/1280px-%D0%A1%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D0%B9_%D0%9D%D0%B0%D1%80%D0%BE%D1%87%D1%8C_%D0%B2%D0%B8%D0%B4_%D1%81_%D0%BE%D0%B7%D0%B5%D1%80%D0%B0.jpg",
        caption: "Complexe hôtelier Naroch",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/%D0%A1%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D0%B9_%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22_-_panoramio.jpg/1280px-%D0%A1%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D0%B9_%22%D0%A1%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA%22_-_panoramio.jpg",
        caption: "Hôtel Spoutnik",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Sanatoriy_Krinica.jpg",
        caption: "Krinitsa Resort",
      },
    ],
    howTitle: "Comment fonctionne le transfert",
    steps: [
      {
        icon: MapPin,
        title: "Retrait à votre adresse",
        desc: "Nous venons vous chercher à votre domicile, à l'aéroport ou à la gare à l'heure convenue – pas de longues attentes.",
      },
      {
        icon: Users,
        title: "Du confort pour toute la famille",
        desc: "Assistance bagages, cabine confortable, arrêts à la demande. Convient aux passagers âgés et aux enfants.",
      },
      {
        icon: CheckCircle2,
        title: "Droit au bâtiment",
        desc: "Nous vous déposons directement au bon bâtiment du complexe – pas de marche avec des valises.",
      },
    ],
    infoTitle: "Destinations populaires",
    infoRows: [
      { label: "Minsk — Naroch", value: "~160 km, 2 à 2,5 heures" },
      { label: "Minsk — Braslav", value: "~240 km, 3 à 3,5 heures" },
      {
        label: "Minsk — Belovezhskaya Pushcha",
        value: "~370 km, 4,5 à 5 heures",
      },
      {
        label: "Minsk — Jlobine / Bobrouïsk",
        value: "~150-170 km, 2-2,5 heures",
      },
      {
        label: "Aéroport de Minsk — n'importe quelle station",
        value: "Transfert direct, sans arrêts",
      },
    ],
    includedTitle: "Ce qui est inclus",
    included: [
      "Retrait partout en Biélorussie",
      "Aide avec les bagages et les sacs",
      "Arrêts sur demande (toilettes, café)",
      "Assistance aux passagers âgés",
      "Sièges enfants et rehausseurs sur demande",
      "Prix de retour fixe dans les deux sens",
    ],
    whyTitle: "Pourquoi ComfortLine",
    whyItems: [
      "Dépôt au bâtiment exact du complexe",
      "Option aller-retour : prise en charge après 7 à 14 à 21 jours",
      "Cabine propre et spacieuse",
      "Animaux acceptés sur demande",
      "Conducteurs expérimentés — conduite calme et douce",
      "24h/24 et 7j/7 : départ à tout moment",
    ],
    ctaTitle: "Réservez un transfert vers le complexe",
    ctaDesc:
      "Soumettez une demande - notre responsable vous contactera sous peu, confirmera la station et proposera un prix de retour fixe.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Station touristique",
    backBtn: "← Tous les services",
    faqTitle:
      "Foire aux questions — Transferts vers les stations en Biélorussie",
    faq: [
      {
        q: "Combien coûte un transfert de Minsk à la station balnéaire de Naroch ?",
        a: "Le prix est sur demande – veuillez nous contacter. Le montant exact dépend de la classe du véhicule (berline affaires pour 1 à 3 passagers ou monospace pour 4 à 8 passagers), de la nécessité ou non d'un siège enfant, du fait que vous voyagez avec un animal de compagnie, du lieu et de la date choisis ainsi que de toute autre demande particulière. Le trajet jusqu'à Naroch fait environ 160 km, soit environ 2 à 2,5 heures aller simple. Notre responsable confirme un prix fixe avec carburant, assurance, aide aux bagages et prise en charge à n'importe quelle adresse de Minsk déjà inclus.",
      },
      {
        q: "Quelles stations balnéaires biélorusses desservez-vous ?",
        a: "Tous les principaux sanatoriums et stations balnéaires de Biélorussie : Naroch et Sosny (lac Naroch), les lacs forestiers et les lacs Braslav, Spoutnik, Krinitsa, Zhuravushka, Belovezhskaya Pushcha, Zhlobin, Bobruisk et les stations balnéaires des régions de Moguilev et de Brest. Nous vous déposons directement au bâtiment – ​​pas de longue marche avec des valises.",
      },
      {
        q: "Pouvez-vous venir nous chercher directement à l'aéroport de Minsk (MSQ) ?",
        a: "Oui. Nous vous rencontrons à la sortie du terminal avec une pancarte nominative et nous conduisons directement à votre station, sans bus ni transfert. L'aéroport de Naroch est à environ 3 heures.",
      },
      {
        q: "Puis-je réserver le transfert aller-retour à l'avance ?",
        a: "Oui, la plupart des clients le font. Réservez l'aller-retour en une seule demande et nous fixons la date de retour (après 7, 14 ou 21 jours). 5% de réduction sur la paire. Le chauffeur confirme l'heure exacte du retour la veille.",
      },
      {
        q: "Est-il adapté aux passagers âgés ou aux jeunes enfants ?",
        a: "Oui, c'est notre spécialité. Nous aidons à l'embarquement, chargeons nous-mêmes tous les bagages, conduisons en douceur, sans manœuvres brusques. Les sièges enfants sont gratuits sur demande. Les arrêts toutes les 1,5 à 2 heures en cours de route ne posent aucun problème.",
      },
      {
        q: "Puis-je voyager avec un animal de compagnie ?",
        a: "Oui — chats et chiens de petite et moyenne taille dans une cage de transport ou sur un tapis. Informez-en le responsable lors de la réservation : nous apporterons une voiture avec une housse de protection pour le siège (un petit supplément pour la préparation de la cabine s'applique).",
      },
    ],
  },
  seo: {
    titleRu:
      "Трансфер в санатории Беларуси | Нарочь, Браслав, Беловежская Пуща | ComfortLine",
    titleEn:
      "Belarus Resort Transfer | Naroch, Braslav, Belovezhskaya | ComfortLine",
    descRu:
      "Трансфер в санатории Беларуси: Нарочь, Браслав, Беловежская Пуща, Жлобин и др. От двери дома или аэропорта прямо к корпусу санатория. Помощь с багажом, удобно с детьми и пожилыми.",
    descEn:
      "Transfer to Belarus resorts — Naroch, Braslav, Belovezhskaya Pushcha, Zhlobin. Door-to-door from home or airport directly to the resort building. Luggage help, family-friendly.",
    pathRu: "/трансфер-в-санаторий",
    pathEn: "/sanatorium-transfer",
    breadcrumbRu: "Трансфер в санаторий",
    breadcrumbEn: "Resort Transfer",
    fromName: "Минск",
    toName: "Санаторий",
    priceCurrency: "EUR",
  },
};

export default function SanatoriumTransferPage() {
  return <RouteLandingPage data={data} />;
}
