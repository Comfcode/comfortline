// Blog articles. Russian-only — Yandex is the priority audience and all topics
// are Belarus / RU-speaker focused. Each article ships a structured body so we
// can render it in React AND prerender the full text into the static HTML.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "link"; href: string; label: string; description?: string }
  | { type: "img"; src: string; alt: string; caption?: string }
  | { type: "liveQueue" };

export interface Article {
  slug: string;
  slugEn?: string;
  slugPl?: string;
  slugFr?: string;
  titleEn?: string;
  titlePl?: string;
  titleFr?: string;
  descriptionEn?: string;
  descriptionPl?: string;
  descriptionFr?: string;
  ogSlug: string;
  title: string;
  description: string;
  intro: string;
  introEn?: string;
  introPl?: string;
  introFr?: string;
  dateISO: string;
  readingMin: number;
  category: string;
  categoryEn?: string;
  categoryPl?: string;
  categoryFr?: string;
  tags: string[];
  body: Block[];
  bodyEn?: Block[];
  bodyPl?: Block[];
  bodyFr?: Block[];
  related: string[]; // slugs of related articles
  ctaRoute?: { label: string; labelEn?: string; labelPl?: string; labelFr?: string; path: string }; // internal link to a money page
}

export const BLOG_BASE_RU = "/блог";
export const BLOG_BASE_EN = "/blog";
export const BLOG_BASE_PL = "/pl/blog";
export const BLOG_BASE_FR = "/fr/blog";

export const ARTICLES: Article[] = [
  {
    slug: "граница-беларусь-литва",
    slugEn: "belarus-lithuania-border-crossing-guide",
    slugPl: "granica-bialorus-litwa-2026",
    slugFr: "frontiere-bielorussie-lituanie-2026",
    titleEn: "Belarus–Lithuania Border Crossing Guide 2026: Wait Times, Documents & Checkpoints",
    titlePl: "Granica Białoruś–Litwa w 2026 roku: kolejki, dokumenty i przejścia",
    titleFr: "Frontière Biélorussie–Lituanie en 2026 : délais, documents et postes",
    descriptionEn: "Everything about crossing the Belarus–Lithuania border in 2026: open checkpoints, typical wait times, required documents and tips from ComfortLine drivers.",
    descriptionPl: "Przekraczanie granicy Białoruś–Litwa w 2026 roku: otwarte przejścia, czas oczekiwania, wymagane dokumenty i porady kierowców ComfortLine.",
    descriptionFr: "Tout savoir sur la frontière Biélorussie–Lituanie en 2026 : postes ouverts, délais, documents requis et conseils des chauffeurs ComfortLine.",
    ogSlug: "blog-granitsa-belarus-litva",
    title: "Как пересечь границу Беларусь — Литва в 2026: время, документы, КПП",
    description:
      "Подробный гайд по границе Беларусь–Литва в 2026: какие КПП работают, сколько стоят очереди, какие документы нужны для въезда в ЕС, советы водителей ComfortLine.",
    intro:
      "Граница Беларусь–Литва — это самый востребованный маршрут наших трансферов. Ниже собрано всё, что нужно знать перед поездкой в 2026 году: список рабочих КПП, среднее время прохождения, документы, типичные причины отказа и советы из практики.",
    dateISO: "2026-04-15",
    readingMin: 9,
    category: "Граница",
    tags: ["граница", "Литва", "КПП", "документы"],
    body: [
      { type: "h2", text: "Какие КПП работают в 2026" },
      {
        type: "p",
        text:
          "Из четырёх исторических переходов между Беларусью и Литвой к 2026 году для легкового транспорта стабильно работают только два: Каменный Лог (Лоша) и Бенякони. Котловка функционирует ограниченно, Лаворишкес для частных авто закрыт. Перед выездом всегда сверяемся со сводкой ГТК Беларуси и ситуацией на сайте Государственной пограничной охраны Литвы (VSAT).",
      },
      {
        type: "table",
        headers: ["КПП", "Литовская сторона", "Авто", "Среднее время"],
        rows: [
          ["Каменный Лог", "Мядининкай", "Легковые + автобусы", "2–5 ч"],
          ["Бенякони", "Шальчининкай", "Легковые", "3–6 ч"],
          ["Котловка", "Лаворишкес", "Ограниченно", "—"],
        ],
      },
      { type: "h2", text: "Документы для въезда в Литву" },
      {
        type: "ul",
        items: [
          "Действующий паспорт (срок действия не менее 3 месяцев после выезда из ЕС).",
          "Шенгенская виза или ВНЖ страны ЕС.",
          "Медицинская страховка с покрытием от 30 000 €.",
          "Подтверждение цели поездки: бронь отеля, билеты, приглашение.",
          "Подтверждение финансового обеспечения (~50 € в день).",
          "Для несовершеннолетних — нотариальное согласие, если ребёнок едет без обоих родителей.",
        ],
      },
      { type: "h2", text: "Сколько по времени стоять на границе" },
      {
        type: "p",
        text:
          "Самое непредсказуемое в маршруте Минск–Вильнюс — именно граница. По данным наших водителей за 2025–2026 год, в будние дни утром и днём время прохождения Каменного Лога — 2,5–4 часа. По пятницам вечером и в воскресенье днём — может вырасти до 6–8 часов. Бенякони обычно медленнее на 1–1,5 часа, но иногда наоборот — зависит от смены.",
      },
      {
        type: "link",
        href: "https://mon.declarant.by/#/zone",
        label: "Электронная очередь в зонах ожидания — mon.declarant.by",
        description: "Лучший источник живой информации об очередях на границе в интернете: официальный сервис мониторинга регистрации транспорта в системе электронной очереди на белорусских КПП, включая Каменный Лог и Бенякони, в реальном времени. Если сайт не открывается — попробуйте зайти через VPN.",
      },
      { type: "liveQueue" },
      { type: "h3", text: "Лайфхаки от наших водителей" },
      {
        type: "ul",
        items: [
          "Самое спокойное время — вторник и среда с 6:00 до 11:00.",
          "В пятницу и воскресенье берите запас 6 часов до вылета сверх обычного времени поездки.",
          "Если граница встала, водитель ComfortLine оперативно меняет маршрут — Каменный Лог ↔ Бенякони отличаются на 40 минут езды.",
          "Заправляйтесь в Беларуси: в Литве топливо дороже на 30–40%.",
          "Готовьте документы заранее в одной папке — это ускоряет проверку.",
        ],
      },
      { type: "h2", text: "Типичные причины отказа во въезде" },
      {
        type: "ul",
        items: [
          "Истёкшая или некорректно оформленная страховка.",
          "Отсутствие подтверждения цели поездки и обратных билетов.",
          "Неверно заполненная декларация о ввозимых товарах.",
          "Подозрение на санкционные товары (см. отдельный гайд).",
          "Истекающий через 1–2 месяца паспорт.",
        ],
      },
      {
        type: "callout",
        text:
          "Если вам важна гарантия, что вы успеете на рейс — закажите трансфер ComfortLine с буфером на границу. Водители знают актуальные очереди в реальном времени и могут оперативно сменить КПП.",
      },
    ],
    categoryEn: "Border",
    categoryPl: "Granica",
    categoryFr: "Frontière",
    introEn:
      "The Belarus–Lithuania border is our busiest transfer route. Here is everything you need to know for 2026: open checkpoints, average crossing times, required documents, common reasons for refusal and tips from our drivers.",
    introPl: "Granica Białoruś–Litwa to najczęściej obsługiwana trasa naszych transferów. Zebraliśmy najważniejsze informacje na 2026 rok: czynne przejścia, średni czas odprawy, dokumenty, przyczyny odmowy wjazdu i porady kierowców.",
    introFr: "La frontière Biélorussie–Lituanie est l’itinéraire le plus fréquent de nos transferts. Voici l’essentiel pour 2026 : postes ouverts, délais moyens, documents, motifs de refus et conseils de nos chauffeurs.",
    bodyEn: [
      { type: "h2", text: "Open Checkpoints in 2026" },
      {
        type: "p",
        text: "Of the four historic crossings between Belarus and Lithuania, only two operate reliably for private cars in 2026: Kamenny Log (Losha) and Benyakoni. Kotlovka operates on a restricted basis; Lavorishkes is closed to private vehicles. Always check the Belarusian State Customs Committee and Lithuanian State Border Guard Service (VSAT) before departure.",
      },
      {
        type: "table",
        headers: ["Checkpoint (BY)", "Lithuanian side", "Vehicles", "Avg. wait time"],
        rows: [
          ["Kamenny Log", "Medininkai", "Cars + buses", "2–5 h"],
          ["Benyakoni", "Šalčininkai", "Cars", "3–6 h"],
          ["Kotlovka", "Lavorishkes", "Restricted", "—"],
        ],
      },
      { type: "h2", text: "Documents for Entry into Lithuania" },
      {
        type: "ul",
        items: [
          "Valid passport (at least 3 months' validity beyond the planned EU exit date).",
          "Schengen visa or EU residence permit.",
          "Medical insurance with coverage of at least €30,000.",
          "Proof of purpose of trip: hotel booking, tickets, invitation letter.",
          "Proof of sufficient funds (~€50 per day).",
          "For minors travelling without both parents — notarised parental consent.",
        ],
      },
      { type: "h2", text: "How Long Does the Border Take?" },
      {
        type: "p",
        text: "The border is the most unpredictable part of the Minsk–Vilnius journey. Based on our drivers' data for 2025–2026, on weekdays in the morning and afternoon Kamenny Log takes 2.5–4 hours. On Friday evenings and Sunday afternoons it can stretch to 6–8 hours. Benyakoni is typically 1–1.5 hours slower, though shifts occasionally change this.",
      },
      {
        type: "link",
        href: "https://mon.declarant.by/#/zone",
        label: "Electronic queue at waiting zones — mon.declarant.by",
        description: "The best live queue information available online: the official Belarusian customs monitoring service for vehicle registration in the electronic waiting-zone queue at border checkpoints, including Kamenny Log and Benyakoni, updated in real time. If the site doesn't load, try opening it with a VPN.",
      },
      { type: "liveQueue" },
      { type: "h3", text: "Driver Tips" },
      {
        type: "ul",
        items: [
          "Quietest time: Tuesday–Wednesday, 6:00–11:00.",
          "On Fridays and Sundays allow an extra 6-hour buffer on top of normal journey time.",
          "If one crossing is jammed, a ComfortLine driver will switch routes — Kamenny Log and Benyakoni are 40 minutes apart.",
          "Fill up in Belarus: fuel is 30–40% cheaper than in Lithuania.",
          "Keep all documents in one folder — it speeds up the inspection noticeably.",
        ],
      },
      { type: "h2", text: "Common Reasons for Entry Refusal" },
      {
        type: "ul",
        items: [
          "Expired or incorrectly issued insurance.",
          "No confirmation of purpose of trip or return tickets.",
          "Incorrectly completed customs declaration.",
          "Suspected sanctioned goods (see our separate customs guide).",
          "Passport expiring within 1–2 months.",
        ],
      },
      {
        type: "callout",
        text: "If you need to guarantee you make your flight — book a ComfortLine transfer with a border buffer. Our drivers monitor queue lengths in real time and can switch checkpoints instantly.",
      },
    ],
    bodyPl: [
      { type: "h2", text: "Które przejścia graniczne działają w 2026 roku" },
      { type: "p", text: "Spośród czterech historycznych przejść między Białorusią a Litwą dla samochodów osobowych stabilnie działają Kamienny Łog (Łosza) i Bieniakonie. Kotłówka działa w ograniczonym zakresie, a Ławaryszki są zamknięte dla prywatnych samochodów. Przed wyjazdem należy sprawdzić komunikaty białoruskiego Komitetu Celnego i litewskiej VSAT." },
      { type: "table", headers: ["Przejście (BY)", "Strona litewska", "Pojazdy", "Średni czas"], rows: [["Kamienny Łog", "Miedniki", "Samochody i autobusy", "2–5 godz."], ["Bieniakonie", "Soleczniki", "Samochody", "3–6 godz."], ["Kotłówka", "Ławaryszki", "Ograniczony ruch", "—"]] },
      { type: "h2", text: "Dokumenty wymagane przy wjeździe na Litwę" },
      { type: "ul", items: ["Ważny paszport — co najmniej 3 miesiące po planowanym wyjeździe z UE.", "Wiza Schengen lub karta pobytu w kraju UE.", "Ubezpieczenie medyczne z sumą co najmniej 30 000 €.", "Potwierdzenie celu podróży: rezerwacja hotelu, bilety lub zaproszenie.", "Potwierdzenie środków finansowych — około 50 € dziennie.", "Dla osoby niepełnoletniej podróżującej bez obojga rodziców — zgoda notarialna."] },
      { type: "h2", text: "Ile trwa przekroczenie granicy" },
      { type: "p", text: "Granica jest najbardziej nieprzewidywalnym etapem podróży Mińsk–Wilno. Według danych kierowców z lat 2025–2026 odprawa w Kamiennym Łogu w dni robocze trwa zwykle 2,5–4 godziny. W piątkowe wieczory i niedzielne popołudnia czas może wzrosnąć do 6–8 godzin. Bieniakonie są zazwyczaj wolniejsze o 1–1,5 godziny, choć zależy to od zmiany." },
      { type: "link", href: "https://mon.declarant.by/#/zone", label: "Elektroniczna kolejka — mon.declarant.by", description: "Oficjalny monitoring rejestracji pojazdów w strefach oczekiwania na białoruskich przejściach, aktualizowany w czasie rzeczywistym. Jeśli strona się nie otwiera, spróbuj użyć VPN." },
      { type: "liveQueue" },
      { type: "h3", text: "Porady naszych kierowców" },
      { type: "ul", items: ["Najspokojniej jest we wtorki i środy od 6:00 do 11:00.", "W piątki i niedziele zaplanuj dodatkowe 6 godzin przed odlotem.", "Gdy jedno przejście jest zatłoczone, kierowca może zmienić trasę; przejścia dzieli około 40 minut jazdy.", "Zatankuj na Białorusi — paliwo na Litwie jest droższe o 30–40%.", "Przygotuj wszystkie dokumenty w jednej teczce."] },
      { type: "h2", text: "Najczęstsze przyczyny odmowy wjazdu" },
      { type: "ul", items: ["Nieważne lub nieprawidłowe ubezpieczenie.", "Brak potwierdzenia celu podróży albo biletu powrotnego.", "Błędnie wypełniona deklaracja celna.", "Podejrzenie przewozu towarów objętych sankcjami.", "Paszport tracący ważność w ciągu 1–2 miesięcy."] },
      { type: "callout", text: "Jeżeli musisz zdążyć na lot, zarezerwuj transfer ComfortLine z odpowiednim zapasem na granicę. Kierowcy monitorują kolejki i mogą szybko zmienić przejście." }
    ],
    bodyFr: [
      { type: "h2", text: "Postes-frontières ouverts en 2026" },
      { type: "p", text: "Parmi les quatre passages historiques entre la Biélorussie et la Lituanie, seuls Kamenny Log (Losha) et Benyakoni fonctionnent régulièrement pour les voitures particulières. Kotlovka est soumis à des restrictions et Lavorishkes est fermé aux véhicules privés. Vérifiez toujours les informations des douanes biélorusses et du VSAT lituanien avant le départ." },
      { type: "table", headers: ["Poste (BY)", "Côté lituanien", "Véhicules", "Délai moyen"], rows: [["Kamenny Log", "Medininkai", "Voitures et bus", "2–5 h"], ["Benyakoni", "Šalčininkai", "Voitures", "3–6 h"], ["Kotlovka", "Lavorishkes", "Accès limité", "—"]] },
      { type: "h2", text: "Documents nécessaires pour entrer en Lituanie" },
      { type: "ul", items: ["Passeport valable au moins trois mois après la sortie prévue de l’UE.", "Visa Schengen ou titre de séjour d’un pays de l’UE.", "Assurance médicale couvrant au moins 30 000 €.", "Justificatif du voyage : réservation d’hôtel, billets ou invitation.", "Preuve de ressources suffisantes — environ 50 € par jour.", "Pour un mineur sans ses deux parents : autorisation parentale notariée."] },
      { type: "h2", text: "Combien de temps faut-il à la frontière ?" },
      { type: "p", text: "La frontière est l’étape la plus imprévisible du trajet Minsk–Vilnius. D’après nos chauffeurs en 2025–2026, Kamenny Log prend généralement 2 h 30 à 4 h en semaine. Le vendredi soir et le dimanche après-midi, l’attente peut atteindre 6 à 8 heures. Benyakoni est souvent plus lent de 1 à 1 h 30, selon l’équipe de contrôle." },
      { type: "link", href: "https://mon.declarant.by/#/zone", label: "File d’attente électronique — mon.declarant.by", description: "Service officiel de suivi en temps réel des véhicules enregistrés dans les zones d’attente des postes biélorusses. Si le site ne s’ouvre pas, essayez avec un VPN." },
      { type: "liveQueue" },
      { type: "h3", text: "Conseils de nos chauffeurs" },
      { type: "ul", items: ["Les périodes les plus calmes sont le mardi et le mercredi de 6 h à 11 h.", "Le vendredi et le dimanche, prévoyez six heures supplémentaires avant votre vol.", "Si un poste est saturé, le chauffeur peut changer d’itinéraire ; les deux passages sont séparés par environ 40 minutes.", "Faites le plein en Biélorussie : le carburant est 30 à 40 % plus cher en Lituanie.", "Regroupez tous vos documents dans une pochette."] },
      { type: "h2", text: "Motifs fréquents de refus d’entrée" },
      { type: "ul", items: ["Assurance expirée ou incorrecte.", "Absence de justificatif du voyage ou de billet retour.", "Déclaration douanière incorrecte.", "Soupçon de transport de marchandises sanctionnées.", "Passeport expirant dans un ou deux mois."] },
      { type: "callout", text: "Si vous devez absolument prendre votre vol, réservez un transfert ComfortLine avec une marge suffisante. Nos chauffeurs suivent les files en temps réel et peuvent changer rapidement de poste." }
    ],
    related: ["какой-кпп-выбрать", "что-нельзя-ввозить-в-ес", "как-добраться-до-аэропорта-вильнюса"],
    ctaRoute: { label: "Заказать трансфер Минск — Вильнюс (VNO)", labelEn: "Book Minsk–Vilnius (VNO) transfer", labelPl: "Zarezerwuj transfer Mińsk–Wilno (VNO)", labelFr: "Réserver le transfert Minsk–Vilnius (VNO)", path: "/трансфер-минск-вильнюс-аэропорт" },
  },

  {
    slug: "стоимость-трансфер-минск-варшава",
    slugEn: "minsk-warsaw-transfer-price-2026",
    slugPl: "cena-transferu-minsk-warszawa-2026",
    slugFr: "prix-transfert-minsk-varsovie-2026",
    titleEn: "Minsk to Warsaw Transfer Price 2026: Fixed Costs, Inclusions & Booking",
    titlePl: "Cena transferu Mińsk–Warszawa w 2026 roku: koszty i rezerwacja",
    titleFr: "Prix du transfert Minsk–Varsovie en 2026 : tarifs et réservation",
    descriptionEn: "How much does a private transfer from Minsk to Warsaw cost in 2026? Fixed prices by car type, what's included, border tips, and how to book.",
    descriptionPl: "Ile kosztuje prywatny transfer z Mińska do Warszawy w 2026 roku? Stałe ceny według klasy auta, zakres usługi, granica i rezerwacja.",
    descriptionFr: "Combien coûte un transfert privé de Minsk à Varsovie en 2026 ? Tarifs fixes selon le véhicule, services inclus, frontière et réservation.",
    ogSlug: "blog-stoimost-transfer-minsk-varshava",
    title: "Сколько стоит трансфер Минск — Варшава в 2026",
    description:
      "Из чего складывается цена трансфера Минск–Варшава: расстояние, класс авто, очереди на границе, доплаты. Сравнение комфорт- и бизнес-класса, реальные кейсы.",
    intro:
      "Трансфер Минск–Варшава — это поездка в 550–600 км с пересечением границы. Цена зависит не столько от километров, сколько от класса авто, времени суток и сезона. Разбираем, из чего она складывается.",
    dateISO: "2026-04-10",
    readingMin: 7,
    category: "Цены",
    tags: ["цена", "Варшава", "трансфер"],
    body: [
      { type: "h2", text: "Из чего состоит цена" },
      {
        type: "ul",
        items: [
          "Топливо туда-обратно — зависит от класса авто и расхода.",
          "Время водителя (8–12 часов по маршруту + ожидание).",
          "Дорожные сборы и платные дороги в Польше.",
          "Амортизация авто на дальнем маршруте.",
          "Простой на границе.",
        ],
      },
      { type: "h2", text: "Сравнение классов авто" },
      {
        type: "table",
        headers: ["Класс", "Авто", "Пассажиров", "Стоимость"],
        rows: [
          ["Эконом", "VW Polo / Renault Logan", "до 3", "По запросу"],
          ["Комфорт", "VW Passat / Skoda Octavia", "до 3", "По запросу"],
          ["Бизнес", "Mercedes E-class", "до 3", "По запросу"],
          ["Минивэн", "Hyundai Palisade / Kia Carnival", "до 4–5", "По запросу"],
          ["Микроавтобус", "Fiat Scudo и аналоги", "до 8", "По запросу"],
        ],
      },
      {
        type: "p",
        text:
          "Финальная стоимость зависит от точки подачи в Минске, конкретного аэропорта Варшавы (Шопен или Модлин), сезона и времени суток. Все цены ComfortLine фиксированные — что назвал менеджер, то вы и платите, без счётчика и доплат за пробки. Точную стоимость сообщим в ближайшее время после заявки.",
      },
      { type: "h2", text: "Когда трансфер дороже" },
      {
        type: "ul",
        items: [
          "Праздничные даты (новогодние, майские, католические праздники в Польше).",
          "Поездка ночью с подачей с 23:00 до 06:00.",
          "Срочный заказ менее чем за 12 часов.",
          "Подача за пределами Минска (область, регионы).",
          "Дополнительные остановки в маршруте.",
        ],
      },
      { type: "h2", text: "Что входит в цену ComfortLine" },
      {
        type: "ul",
        items: [
          "Подача от любого адреса в Минске.",
          "Помощь водителя на границе и с багажом.",
          "Бутилированная вода в авто.",
          "Wi-Fi и USB-зарядки.",
          "Детское кресло по запросу — бесплатно.",
        ],
      },
      {
        type: "callout",
        text:
          "Хотите точную цену под ваши даты? Оставьте заявку — менеджер пришлёт расчёт в ближайшее время.",
      },
    ],
    categoryEn: "Pricing",
    categoryPl: "Ceny",
    categoryFr: "Tarifs",
    introEn:
      "A Minsk–Warsaw transfer covers 550–600 km including a border crossing. The price depends less on distance and more on car class, time of day and season. Here is how it all adds up.",
    introPl: "Transfer Mińsk–Warszawa obejmuje 550–600 km i przekroczenie granicy. Cena zależy nie tylko od odległości, ale także od klasy samochodu, pory dnia i sezonu. Wyjaśniamy, z czego składa się koszt podróży.",
    introFr: "Le transfert Minsk–Varsovie représente 550 à 600 km avec un passage de frontière. Le tarif dépend de la catégorie du véhicule, de l’heure et de la saison autant que de la distance. Voici comment il est calculé.",
    bodyEn: [
      { type: "h2", text: "What Makes Up the Price" },
      {
        type: "ul",
        items: [
          "Fuel for the round trip — depends on car class and fuel consumption.",
          "Driver's time (8–12 hours on the route plus border waiting).",
          "Road tolls and motorway charges in Poland.",
          "Vehicle wear on a long-distance route.",
          "Waiting time at the border.",
        ],
      },
      { type: "h2", text: "Car Class Comparison" },
      {
        type: "table",
        headers: ["Class", "Vehicle", "Passengers", "Price"],
        rows: [
          ["Economy", "VW Polo / Renault Logan", "up to 3", "On request"],
          ["Comfort", "VW Passat / Skoda Octavia", "up to 3", "On request"],
          ["Business", "Mercedes E-Class", "up to 3", "On request"],
          ["Minivan", "Hyundai Palisade / Kia Carnival", "up to 4–5", "On request"],
          ["Minibus", "Fiat Scudo and similar", "up to 8", "On request"],
        ],
      },
      {
        type: "p",
        text: "The final price depends on your pick-up address in Minsk, which Warsaw airport (Chopin or Modlin), season and time of day. All ComfortLine prices are fixed — what the manager quotes is what you pay, with no meter and no surcharge for traffic. We'll confirm an exact price shortly after your request.",
      },
      { type: "h2", text: "When the Transfer Costs More" },
      {
        type: "ul",
        items: [
          "Public holidays (New Year, May holidays, Polish national holidays).",
          "Night journeys with pick-up between 23:00 and 06:00.",
          "Last-minute booking less than 12 hours in advance.",
          "Pick-up outside Minsk city (Minsk region or other Belarusian cities).",
          "Additional stops along the route.",
        ],
      },
      { type: "h2", text: "What Is Included in the ComfortLine Price" },
      {
        type: "ul",
        items: [
          "Pick-up from any address in Minsk.",
          "Driver assistance at the border and with luggage.",
          "Bottled water in the car.",
          "Wi-Fi and USB chargers.",
          "Child seat on request — free of charge.",
        ],
      },
      {
        type: "callout",
        text: "Want an exact price for your dates? Send us a request — our manager will reply with a quote shortly.",
      },
    ],
    bodyPl: [
      { type: "h2", text: "Co składa się na cenę" },
      { type: "ul", items: ["Paliwo w obie strony — zużycie zależy od klasy samochodu.", "Czas pracy kierowcy: 8–12 godzin jazdy oraz oczekiwanie na granicy.", "Opłaty drogowe i płatne odcinki w Polsce.", "Eksploatacja samochodu na długiej trasie.", "Postój podczas odprawy granicznej."] },
      { type: "h2", text: "Porównanie klas samochodów" },
      { type: "table", headers: ["Klasa", "Samochód", "Pasażerowie", "Cena"], rows: [["Ekonomiczna", "VW Polo / Renault Logan", "do 3", "Na zapytanie"], ["Komfort", "VW Passat / Skoda Octavia", "do 3", "Na zapytanie"], ["Biznes", "Mercedes Klasy E", "do 3", "Na zapytanie"], ["Minivan", "Hyundai Palisade / Kia Carnival", "do 4–5", "Na zapytanie"], ["Mikrobus", "Fiat Scudo i podobne", "do 8", "Na zapytanie"]] },
      { type: "p", text: "Ostateczna cena zależy od adresu odbioru w Mińsku, wybranego lotniska w Warszawie — Chopina lub Modlin — sezonu i pory dnia. Ceny ComfortLine są stałe: płacisz kwotę potwierdzoną przez menedżera, bez taksometru i dopłat za korki. Dokładną wycenę otrzymasz po wysłaniu zapytania." },
      { type: "h2", text: "Kiedy transfer kosztuje więcej" },
      { type: "ul", items: ["Święta i terminy o zwiększonym ruchu, w tym Nowy Rok, majówka i polskie święta państwowe.", "Przejazd nocny z odbiorem między 23:00 a 06:00.", "Pilna rezerwacja dokonana mniej niż 12 godzin wcześniej.", "Odbiór poza Mińskiem.", "Dodatkowe przystanki na trasie."] },
      { type: "h2", text: "Co obejmuje cena ComfortLine" },
      { type: "ul", items: ["Odbiór spod dowolnego adresu w Mińsku.", "Pomoc kierowcy na granicy i przy bagażu.", "Woda butelkowana w samochodzie.", "Wi-Fi i ładowarki USB.", "Bezpłatny fotelik dziecięcy na życzenie."] },
      { type: "callout", text: "Chcesz poznać dokładną cenę dla wybranego terminu? Wyślij zapytanie — nasz menedżer wkrótce prześle wycenę." }
    ],
    bodyFr: [
      { type: "h2", text: "Composition du tarif" },
      { type: "ul", items: ["Carburant pour l’aller-retour, selon la catégorie et la consommation du véhicule.", "Temps du chauffeur : 8 à 12 heures de trajet, plus l’attente à la frontière.", "Péages et routes payantes en Pologne.", "Usure du véhicule sur un long trajet.", "Immobilisation pendant le contrôle frontalier."] },
      { type: "h2", text: "Comparaison des catégories de véhicules" },
      { type: "table", headers: ["Catégorie", "Véhicule", "Passagers", "Tarif"], rows: [["Économique", "VW Polo / Renault Logan", "jusqu’à 3", "Sur demande"], ["Confort", "VW Passat / Skoda Octavia", "jusqu’à 3", "Sur demande"], ["Affaires", "Mercedes Classe E", "jusqu’à 3", "Sur demande"], ["Monospace", "Hyundai Palisade / Kia Carnival", "jusqu’à 4–5", "Sur demande"], ["Minibus", "Fiat Scudo ou similaire", "jusqu’à 8", "Sur demande"]] },
      { type: "p", text: "Le prix final dépend de l’adresse de prise en charge à Minsk, de l’aéroport choisi à Varsovie — Chopin ou Modlin — de la saison et de l’heure. Les tarifs ComfortLine sont fixes : vous payez le montant confirmé par le conseiller, sans compteur ni supplément pour les embouteillages. Nous communiquons le prix exact après votre demande." },
      { type: "h2", text: "Quand le transfert coûte-t-il plus cher ?" },
      { type: "ul", items: ["Jours fériés et périodes très demandées, notamment le Nouvel An et les fêtes polonaises.", "Départ de nuit entre 23 h et 6 h.", "Réservation urgente moins de 12 heures avant le départ.", "Prise en charge en dehors de Minsk.", "Arrêts supplémentaires sur l’itinéraire."] },
      { type: "h2", text: "Ce qui est inclus dans le tarif ComfortLine" },
      { type: "ul", items: ["Prise en charge à toute adresse à Minsk.", "Assistance du chauffeur à la frontière et pour les bagages.", "Eau en bouteille dans le véhicule.", "Wi-Fi et prises USB.", "Siège enfant gratuit sur demande."] },
      { type: "callout", text: "Vous souhaitez un prix précis pour vos dates ? Envoyez une demande : notre conseiller vous transmettra rapidement un devis." }
    ],
    related: ["граница-беларусь-литва", "что-нельзя-ввозить-в-ес"],
    ctaRoute: { label: "Заказать трансфер Минск — Варшава Шопен (WAW)", labelEn: "Book Minsk–Warsaw Chopin (WAW) transfer", labelPl: "Zarezerwuj transfer Mińsk–Lotnisko Chopina (WAW)", labelFr: "Réserver le transfert Minsk–Varsovie Chopin (WAW)", path: "/трансфер-минск-варшава-шопен" },
  },

  {
    slug: "что-нельзя-ввозить-в-ес",
    slugEn: "what-not-to-bring-from-belarus-to-eu",
    slugPl: "czego-nie-wolno-wwiezc-z-bialorusi-do-ue-2026",
    slugFr: "produits-interdits-bielorussie-union-europeenne-2026",
    titleEn: "What You Cannot Bring from Belarus into the EU: 2026 Customs Rules & Limits",
    titlePl: "Czego nie wolno wwozić z Białorusi do UE w 2026 roku: limity celne",
    titleFr: "Produits interdits de Biélorussie vers l’UE en 2026 : règles douanières",
    descriptionEn: "Full list of prohibited and restricted items when crossing from Belarus to the EU: cash limits, alcohol, tobacco, food, valuables and customs rules explained.",
    descriptionPl: "Pełna lista towarów zakazanych i ograniczonych przy wjeździe z Białorusi do UE: limity gotówki, alkoholu, tytoniu, żywności i zasady deklarowania.",
    descriptionFr: "Liste complète des produits interdits ou limités de Biélorussie vers l’UE : espèces, alcool, tabac, aliments, objets de valeur et déclaration.",
    ogSlug: "blog-chto-nelzya-vvozit-v-es",
    title: "Что нельзя ввозить из Беларуси в ЕС в 2026: полный список с лимитами",
    description:
      "Полный список запрещённых и ограниченных товаров при пересечении границы Беларусь–ЕС в 2026. Лимиты на алкоголь, сигареты, наличные, продукты питания, посылки. Что проверяют на границе и чем грозит нарушение.",
    intro:
      "Литва, Польша и Латвия применяют санкционные правила ЕС на въезд из Беларуси очень строго. Даже один лишний блок сигарет или 200 мл духов сверх нормы могут привести к конфискации. Ниже — исчерпывающий список запретов, актуальные лимиты и советы, как проехать без проблем.",
    dateISO: "2026-05-20",
    readingMin: 12,
    category: "Таможня",
    tags: ["таможня", "ЕС", "санкции", "запреты", "граница", "Литва", "Польша", "Латвия", "декларирование", "нормы ввоза", "таможенные правила 2026"],
    body: [
      { type: "h2", text: "Полностью запрещено к ввозу в ЕС из Беларуси" },
      {
        type: "p",
        text: "Следующие категории товаров запрещены к ввозу в страны ЕС из Беларуси вне зависимости от количества и стоимости — в рамках санкционного пакета ЕС:",
      },
      {
        type: "ul",
        items: [
          "Бензин и дизельное топливо в канистрах сверх топливного бака автомобиля (Литва — 0 л, Польша — до 10 л, Латвия — 0 л).",
          "Табачные изделия сверх установленного лимита (см. таблицу ниже).",
          "Любая военная и охотничья техника, пневматика, газовые баллончики самообороны.",
          "Лекарственные препараты без рецепта в количестве, превышающем личные нужды на поездку.",
          "Продукты животного происхождения: мясо, колбасные изделия, молоко, сыр, творог, мёд — запрещены к ввозу в ЕС.",
          "Свежие фрукты, овощи, растения, семена, саженцы, почва.",
          "Товары под санкциями ЕС: отдельные виды стали, древесины, калийных удобрений, техники.",
          "Электроника на сумму свыше 750 € — требует письменной декларации.",
        ],
      },
      { type: "h2", text: "Таможенные лимиты для физических лиц: Литва, Польша, Латвия" },
      {
        type: "p",
        text: "Нормы действительны для совершеннолетних пассажиров при въезде из третьих стран (Беларусь — не член ЕС и не ЕАЭС для целей европейской таможни). Сниженные лимиты применяются при поездках короче 24 часов.",
      },
      {
        type: "table",
        headers: ["Категория", "Лимит для Литвы", "Лимит для Польши", "Лимит для Латвии"],
        rows: [
          ["Сигареты", "40 шт", "40 шт", "40 шт"],
          ["Сигары (малые, до 3 г)", "20 шт", "20 шт", "20 шт"],
          ["Сигары (обычные)", "10 шт", "10 шт", "10 шт"],
          ["Табак для самокруток", "50 г", "50 г", "50 г"],
          ["Крепкий алкоголь (>22%)", "1 л", "1 л", "1 л"],
          ["Вино (негазированное)", "4 л", "4 л", "4 л"],
          ["Пиво", "16 л", "16 л", "16 л"],
          ["Парфюмерия (духи)", "50 мл", "50 мл", "50 мл"],
          ["Туалетная вода", "250 мл", "250 мл", "250 мл"],
          ["Товары/подарки (стоимость)", "до 300 €", "до 300 €", "до 300 €"],
          ["Топливо в канистре", "0 л", "до 10 л", "0 л"],
        ],
      },
      {
        type: "callout",
        text: "Лимиты не суммируются: нельзя взять 0 сигарет и 2 л крепкого вместо 1 л. Каждая категория — независимая норма.",
      },
      { type: "h2", text: "Лимиты на беспошлинный ввоз товаров в Беларусь" },
      {
        type: "p",
        text: "Норма беспошлинного ввоза зависит от способа пересечения границы. Для наземного транспорта (машина, автобус) и пешего перехода — то есть для всех пассажиров ComfortLine — с 1 апреля 2024 года действует сниженная норма: стоимость товаров не выше 500 € и вес не более 25 кг на одного взрослого пассажира.",
      },
      {
        type: "table",
        headers: ["Способ ввоза", "Стоимость", "Вес"],
        rows: [
          ["Наземный транспорт / пешком (с 1 апреля 2024)", "до 500 €", "до 25 кг"],
          ["Воздушный транспорт (самолёт)", "до 10 000 €", "до 50 кг"],
          ["Доставка перевозчиком (не лично)", "до 200 €", "до 31 кг"],
          ["Международные почтовые отправления", "до 200 €", "до 31 кг (брутто)"],
        ],
      },
      {
        type: "p",
        text: "Табак и табачные изделия — отдельная норма, одинаковая для всех способов ввоза: 200 сигарет, или 50 сигар (сигарилл), или 200 стиков нагреваемого табака, или 250 г табака (либо ассорти этих товаров общим весом не более 250 г). Алкогольные напитки крепостью более 0,5% — не более 3 л при ввозе в багаже. Нормы на алкоголь и табак действуют для лиц старше 18 лет.",
      },
      {
        type: "p",
        text: "Сверх этих лимитов ввоз облагается таможенными платежами: для товаров в багаже наземным транспортом — 30% от суммы превышения стоимости, но не менее 4 € за каждый кг превышения по весу. Для товаров, доставленных перевозчиком или почтой, ставка ниже — 15% от превышения, но не менее 2 € за кг. Алкоголь в количестве от 3 до 5 л облагается по ставке 10 € за литр сверх нормы 3 л; этиловый спирт (до 5 л) — 22 € за литр. Товары с признаками коммерческой партии (оптовые количества, несколько одинаковых единиц) декларируются и оформляются отдельно как товары не для личного пользования.",
      },
      {
        type: "link",
        href: "https://www.customs.gov.by/fizicheskim-litsam/besposhlinnyy-vvoz-vyvoz-tovarov-dlya-lichnogo-polzovaniya/",
        label: "ГТК Беларуси — беспошлинный ввоз/вывоз товаров для личного пользования",
        description: "Официальные стоимостные, весовые и количественные нормы беспошлинного ввоза и вывоза товаров физическими лицами",
      },
      {
        type: "link",
        href: "https://www.customs.gov.by/fizicheskim-litsam/vvoz-tovarov-dlya-lichnogo-polzovaniya-s-uplatoy-tamozhennykh-platezhey/",
        label: "ГТК Беларуси — ввоз товаров с уплатой таможенных платежей",
        description: "Официальные ставки таможенных пошлин и налогов при превышении беспошлинных норм ввоза",
      },
      { type: "h2", text: "Наличные деньги и декларирование" },
      {
        type: "p",
        text: "Правила вывоза наличных из Беларуси и ввоза в ЕС регулируются независимо — белорусской таможней (ГТК) и таможней страны въезда в ЕС.",
      },
      {
        type: "h3",
        text: "Вывоз наличных из Беларуси",
      },
      {
        type: "ul",
        items: [
          "До 10 000 USD (или эквивалент в любой валюте) — без декларации.",
          "Свыше 10 000 USD — обязательная письменная таможенная декларация при пересечении белорусской границы.",
          "Не задекларированные суммы сверх лимита подлежат полной конфискации.",
          "Ювелирные украшения для личного пользования, банковские карты и дорожные чеки к денежному лимиту не относятся.",
        ],
      },
      {
        type: "h3",
        text: "Ввоз наличных в ЕС (Литва, Польша, Латвия)",
      },
      {
        type: "ul",
        items: [
          "До 10 000 € (или эквивалент) — без декларации на стороне ЕС.",
          "Свыше 10 000 € — обязательная декларация EU Cash Declaration при въезде в зону ЕС.",
          "Декларация подаётся таможне страны въезда (литовской, польской или латвийской).",
          "Сокрытие суммы свыше лимита — штраф и конфискация всей суммы.",
        ],
      },
      {
        type: "link",
        href: "https://www.customs.by/deklarirovaniye",
        label: "ГТК Беларуси — официальная страница: правила декларирования",
        description: "Актуальные нормы вывоза наличных, ювелирных изделий и товаров физическими лицами при выезде из Беларуси",
      },
      { type: "h2", text: "Международные посылки и товары из интернет-магазинов" },
      {
        type: "p",
        text: "Если вы везёте посылку, полученную через белорусскую почту или СДЭК, либо товары, заказанные на OZON/Wildberries/AliExpress, таможня применяет отдельные правила контроля международных почтовых отправлений.",
      },
      {
        type: "ul",
        items: [
          "Товары из ЕАЭС (Россия, Казахстан и др.) при пересечении белорусско-европейской границы рассматриваются как товары из третьей страны.",
          "Норма беспошлинного ввоза в ЕС — до 150 € на посылку, свыше — таможенная пошлина и НДС страны въезда.",
          "Товары с коммерческими признаками (несколько одинаковых единиц, упаковка с ценниками оптом) — таможня вправе переквалифицировать как коммерческий груз.",
          "Правила ГТК РБ о контроле товаров, следующих в адрес физических лиц из ЕАЭС, описаны на официальном сайте таможни.",
        ],
      },
      {
        type: "link",
        href: "https://customs.gov.by/participants-ved/perevozchikam/informatsiya-o-provedenii-kontrolya-mezhdunarodnykh-pochtovykh-otpravleniy-i-tovarov-sleduyushchikh-/",
        label: "ГТК РБ — контроль международных почтовых отправлений и товаров физических лиц",
        description: "Официальная информация о порядке таможенного контроля посылок и товаров, ввозимых физическими лицами из государств ЕАЭС",
      },
      { type: "h2", text: "Что проверяют на границе Беларусь–ЕС" },
      {
        type: "ul",
        items: [
          "Топливные баки — пограничники Литвы и Латвии могут запросить открыть бак для проверки.",
          "Сигареты и табак — сканируют штрих-коды акцизных марок, считают пачки.",
          "Алкоголь — проверяют наличие акцизных марок, сверяют количество.",
          "Электроника — могут запросить чеки или выписки для оценки стоимости.",
          "Продукты питания — холодильники и сумки с едой осматриваются на наличие запрещённых категорий.",
          "Содержимое багажника и чемоданов — рентгеновский сканер, иногда ручной досмотр.",
          "Банковские карты и телефоны — крайне редко, только при подозрении в контрабанде.",
        ],
      },
      { type: "h2", text: "Что будет за нарушение таможенных правил" },
      {
        type: "table",
        headers: ["Нарушение", "Последствие"],
        rows: [
          ["Незадекларированные сигареты сверх нормы", "Конфискация всей партии табака"],
          ["Алкоголь сверх лимита", "Конфискация излишка + штраф"],
          ["Незадекларированные наличные > 10 000 €", "Конфискация всей суммы, задержание"],
          ["Запрещённые продукты питания", "Конфискация на месте, штраф"],
          ["Топливо в канистре (Литва/Латвия)", "Конфискация канистры с топливом"],
          ["Незадекларированная электроника свыше 750 €", "Задержание товара, оформление, пошлина"],
        ],
      },
      { type: "h2", text: "Частые вопросы о таможне на границе Беларусь–ЕС" },
      {
        type: "h3",
        text: "Можно ли везти домашнюю еду в Литву или Польшу?",
      },
      {
        type: "p",
        text: "Нет. Продукты животного происхождения (мясо, молочное, яйца, мёд) запрещены к ввозу в ЕС из Беларуси без исключений. Консервы в заводской упаковке — в ограниченном количестве, но пограничники нередко конфискуют и их. Безопаснее не везти ничего.",
      },
      {
        type: "h3",
        text: "Считаются ли сигареты в кармане отдельно от сигарет в чемодане?",
      },
      {
        type: "p",
        text: "Нет, лимит суммарный на человека. 40 сигарет — это 2 пачки суммарно, независимо от того, где они находятся.",
      },
      {
        type: "h3",
        text: "Нужно ли декларировать ноутбук или телефон?",
      },
      {
        type: "p",
        text: "Один ноутбук и один телефон для личного пользования — без декларации. Несколько ноутбуков или новые устройства в заводской упаковке на сумму свыше 750 € — требуют письменной декларации.",
      },
      {
        type: "h3",
        text: "Есть ли разница между Каменным Логом, Терехово и Брузги?",
      },
      {
        type: "p",
        text: "Таможенные правила одинаковы на всех КПП — разница только в загруженности и скорости прохождения. Выбор КПП влияет на время ожидания, а не на нормы ввоза.",
      },
      {
        type: "callout",
        text: "Правила меняются: санкционные пакеты ЕС обновляются несколько раз в год. Перед поездкой проверяйте актуальные нормы на сайтах таможни Беларуси и страны въезда. Водители ComfortLine следят за изменениями и предупредят о актуальных ограничениях.",
      },
    ],
    categoryEn: "Customs",
    categoryPl: "Cło",
    categoryFr: "Douane",
    introEn:
      "Lithuania, Poland and Latvia enforce EU sanction rules on entry from Belarus very strictly. Even one extra packet of cigarettes or 200 ml of perfume over the limit can lead to confiscation. Below is the complete list of prohibitions, current limits and advice on how to cross without issues.",
    introPl: "Litwa, Polska i Łotwa bardzo rygorystycznie stosują unijne sankcje wobec osób przyjeżdżających z Białorusi. Nawet przekroczenie limitu papierosów lub perfum może prowadzić do konfiskaty. Poniżej przedstawiamy zakazy, aktualne limity i praktyczne wskazówki.",
    introFr: "La Lituanie, la Pologne et la Lettonie appliquent strictement les sanctions européennes aux arrivées depuis la Biélorussie. Un dépassement de la franchise de cigarettes ou de parfum peut entraîner une confiscation. Voici les interdictions, limites et conseils pratiques.",
    bodyEn: [
      { type: "h2", text: "Items Completely Prohibited from Belarus into the EU" },
      {
        type: "p",
        text: "The following categories of goods are banned from import into EU countries from Belarus regardless of quantity or value, under the EU sanctions package:",
      },
      {
        type: "ul",
        items: [
          "Petrol and diesel in canisters beyond the vehicle fuel tank (Lithuania — 0 l, Poland — up to 10 l, Latvia — 0 l).",
          "Tobacco products over the established limit (see table below).",
          "Any military or hunting equipment, air guns, self-defence gas sprays.",
          "Prescription medications in quantities exceeding personal needs for the trip.",
          "Animal-origin food: meat, sausages, dairy (milk, cheese, cottage cheese), honey — prohibited from import into the EU.",
          "Fresh fruit, vegetables, plants, seeds, seedlings, soil.",
          "EU-sanctioned goods: certain types of steel, timber, potassium fertilisers, machinery.",
          "Electronics worth over €750 — requires a written declaration.",
        ],
      },
      { type: "h2", text: "Personal Customs Allowances: Lithuania, Poland, Latvia" },
      {
        type: "p",
        text: "Allowances apply to adult passengers entering from third countries (Belarus is not an EU member). Reduced limits apply for trips shorter than 24 hours.",
      },
      {
        type: "table",
        headers: ["Category", "Lithuania", "Poland", "Latvia"],
        rows: [
          ["Cigarettes", "40", "40", "40"],
          ["Cigarillos (up to 3 g)", "20", "20", "20"],
          ["Cigars", "10", "10", "10"],
          ["Rolling tobacco", "50 g", "50 g", "50 g"],
          ["Spirits (>22% ABV)", "1 l", "1 l", "1 l"],
          ["Still wine", "4 l", "4 l", "4 l"],
          ["Beer", "16 l", "16 l", "16 l"],
          ["Perfume (eau de parfum)", "50 ml", "50 ml", "50 ml"],
          ["Eau de toilette", "250 ml", "250 ml", "250 ml"],
          ["Goods / gifts (value)", "up to €300", "up to €300", "up to €300"],
          ["Fuel in canister", "0 l", "up to 10 l", "0 l"],
        ],
      },
      {
        type: "callout",
        text: "Allowances are not interchangeable: you cannot skip cigarettes and bring 2 l of spirits instead of 1 l. Each category is an independent limit.",
      },
      { type: "h2", text: "Duty-Free Import Allowances into Belarus" },
      {
        type: "p",
        text: "The duty-free allowance depends on how you cross the border. For land transport (car, bus) or on foot — which covers all ComfortLine passengers — a reduced allowance has applied since 1 April 2024: goods worth no more than €500 and weighing no more than 25 kg per adult passenger.",
      },
      {
        type: "table",
        headers: ["Mode of entry", "Value", "Weight"],
        rows: [
          ["Land transport / on foot (since 1 April 2024)", "up to €500", "up to 25 kg"],
          ["Air transport (flight)", "up to €10,000", "up to 50 kg"],
          ["Delivered by carrier (not carried in person)", "up to €200", "up to 31 kg"],
          ["International postal items", "up to €200", "up to 31 kg (gross)"],
        ],
      },
      {
        type: "p",
        text: "Tobacco products have a separate allowance that's the same for every mode of entry: 200 cigarettes, or 50 cigars (cigarillos), or 200 heated-tobacco sticks, or 250 g of tobacco (or an assortment of these totalling no more than 250 g). Alcoholic drinks over 0.5% ABV — no more than 3 l when carried in baggage. Alcohol and tobacco allowances apply to travellers aged 18 and over.",
      },
      {
        type: "p",
        text: "Above these limits, customs duty applies: for goods in baggage entering by land, the rate is 30% of the excess value, but no less than €4 per kilogram over the weight limit. For goods delivered by a carrier or by post, the rate is lower — 15% of the excess, but no less than €2 per kilogram. Alcohol between 3 and 5 l is charged at €10 per litre over the 3 l allowance; ethyl spirit (up to 5 l) is charged at €22 per litre. Goods showing signs of a commercial shipment (wholesale quantities, multiple identical items) are declared and processed separately as goods not intended for personal use.",
      },
      {
        type: "link",
        href: "https://www.customs.gov.by/fizicheskim-litsam/besposhlinnyy-vvoz-vyvoz-tovarov-dlya-lichnogo-polzovaniya/",
        label: "Belarus State Customs Committee — duty-free import/export of goods for personal use",
        description: "Official value, weight and quantity allowances for duty-free import and export of goods by individuals",
      },
      {
        type: "link",
        href: "https://www.customs.gov.by/fizicheskim-litsam/vvoz-tovarov-dlya-lichnogo-polzovaniya-s-uplatoy-tamozhennykh-platezhey/",
        label: "Belarus State Customs Committee — import of goods with payment of customs duties",
        description: "Official customs duty and tax rates for goods that exceed the duty-free import allowances",
      },
      { type: "h2", text: "Cash and Declaration Requirements" },
      {
        type: "p",
        text: "Rules on exporting cash from Belarus and importing it into the EU are regulated independently — by Belarusian customs (SCC) and by the customs authority of the EU entry country.",
      },
      { type: "h3", text: "Exporting Cash from Belarus" },
      {
        type: "ul",
        items: [
          "Up to USD 10,000 (or equivalent in any currency) — no declaration required.",
          "Over USD 10,000 — mandatory written customs declaration at the Belarusian border.",
          "Undeclared amounts above the limit are subject to full confiscation.",
          "Personal jewellery, bank cards and traveller's cheques do not count towards the cash limit.",
        ],
      },
      { type: "h3", text: "Importing Cash into the EU (Lithuania, Poland, Latvia)" },
      {
        type: "ul",
        items: [
          "Up to €10,000 (or equivalent) — no declaration required on the EU side.",
          "Over €10,000 — mandatory EU Cash Declaration upon entering the EU zone.",
          "The declaration is submitted to the customs of the entry country (Lithuanian, Polish or Latvian).",
          "Concealing amounts above the limit — fine and confiscation of the entire sum.",
        ],
      },
      {
        type: "link",
        href: "https://www.customs.by/deklarirovaniye",
        label: "Belarusian State Customs Committee — official declaration rules",
        description: "Current limits on exporting cash, jewellery and goods for private individuals leaving Belarus",
      },
      { type: "h2", text: "Parcels and Online Shopping Items" },
      {
        type: "p",
        text: "If you are carrying a parcel from a Belarusian courier service or goods ordered online (OZON, Wildberries, AliExpress), customs applies separate rules for international postal items.",
      },
      {
        type: "ul",
        items: [
          "Goods from EAEU countries (Russia, Kazakhstan, etc.) are treated as goods from a third country at the Belarus–EU border.",
          "EU duty-free import threshold — up to €150 per parcel; above that, customs duty and VAT of the entry country apply.",
          "Goods with commercial characteristics (multiple identical units, wholesale retail packaging) may be reclassified as commercial cargo.",
          "Belarusian SCC rules on controlling goods sent to private individuals from the EAEU are on the official customs website.",
        ],
      },
      {
        type: "link",
        href: "https://customs.gov.by/participants-ved/perevozchikam/informatsiya-o-provedenii-kontrolya-mezhdunarodnykh-pochtovykh-otpravleniy-i-tovarov-sleduyushchikh-/",
        label: "Belarusian SCC — control of international postal items and personal goods",
        description: "Official information on customs procedures for parcels and goods imported by private individuals from EAEU states",
      },
      { type: "h2", text: "What Border Guards Check at Belarus–EU Crossings" },
      {
        type: "ul",
        items: [
          "Fuel tanks — Lithuanian and Latvian border guards may ask you to open the tank for inspection.",
          "Cigarettes and tobacco — excise stamp barcodes are scanned, packs are counted.",
          "Alcohol — excise stamps are checked and quantities verified.",
          "Electronics — receipts or bank statements may be requested to assess value.",
          "Food — coolers and food bags are inspected for prohibited categories.",
          "Boot and luggage — X-ray scanner, sometimes manual search.",
          "Bank cards and phones — very rarely, only on suspicion of smuggling.",
        ],
      },
      { type: "h2", text: "Consequences of Customs Violations" },
      {
        type: "table",
        headers: ["Violation", "Consequence"],
        rows: [
          ["Undeclared cigarettes over the limit", "Confiscation of the entire tobacco batch"],
          ["Alcohol over the limit", "Confiscation of excess + fine"],
          ["Undeclared cash over €10,000", "Confiscation of entire sum, possible detention"],
          ["Prohibited food products", "On-the-spot confiscation, fine"],
          ["Fuel in canister (Lithuania/Latvia)", "Confiscation of canister and fuel"],
          ["Undeclared electronics over €750", "Item held, customs processing, duty charge"],
        ],
      },
      { type: "h2", text: "Frequently Asked Questions" },
      { type: "h3", text: "Can I bring home-cooked food into Lithuania or Poland?" },
      {
        type: "p",
        text: "No. Animal-origin products (meat, dairy, eggs, honey) are banned from import into the EU from Belarus with no exceptions. Factory-sealed preserves are allowed in limited quantities, but border guards often confiscate them too. The safest option is to bring nothing.",
      },
      { type: "h3", text: "Do cigarettes in my pocket count separately from those in my suitcase?" },
      {
        type: "p",
        text: "No, the limit is total per person. 40 cigarettes means 2 packs in total, regardless of where they are.",
      },
      { type: "h3", text: "Do I need to declare a laptop or phone?" },
      {
        type: "p",
        text: "One laptop and one phone for personal use — no declaration needed. Multiple laptops or new devices in factory packaging worth over €750 in total require a written declaration.",
      },
      { type: "h3", text: "Is there a difference between Kamenny Log, Terekhovka and Bruzgi?" },
      {
        type: "p",
        text: "Customs rules are identical at all checkpoints — the difference is only in traffic volume and processing speed. Your choice of crossing affects waiting time, not import allowances.",
      },
      {
        type: "callout",
        text: "Rules change: EU sanctions packages are updated several times a year. Check the current limits on the Belarusian customs website and the entry country's customs authority before every trip. ComfortLine drivers monitor updates and will alert you to current restrictions.",
      },
    ],
    bodyPl: [
      { type: "h2", text: "Towary całkowicie zakazane przy wwozie z Białorusi do UE" },
      { type: "p", text: "W ramach sankcji UE poniższych kategorii nie wolno wwozić z Białorusi niezależnie od ilości i wartości:" },
      { type: "ul", items: ["Benzyna i olej napędowy w kanistrach poza zbiornikiem pojazdu (Litwa 0 l, Polska do 10 l, Łotwa 0 l).", "Wyroby tytoniowe ponad dozwolony limit.", "Sprzęt wojskowy i myśliwski, broń pneumatyczna oraz gaz obronny.", "Leki na receptę w ilości przekraczającej potrzeby osobiste.", "Produkty pochodzenia zwierzęcego: mięso, wędliny, mleko, sery, twaróg i miód.", "Świeże owoce, warzywa, rośliny, nasiona, sadzonki i ziemia.", "Towary objęte sankcjami UE, m.in. wybrane wyroby stalowe, drewno, nawozy potasowe i maszyny.", "Elektronikę o wartości ponad 750 € trzeba zgłosić pisemnie."] },
      { type: "h2", text: "Limity celne dla podróżnych: Litwa, Polska i Łotwa" },
      { type: "p", text: "Limity dotyczą dorosłych podróżnych przybywających z państwa trzeciego. Przy podróży krótszej niż 24 godziny mogą obowiązywać niższe normy." },
      { type: "table", headers: ["Kategoria", "Litwa", "Polska", "Łotwa"], rows: [["Papierosy", "40", "40", "40"], ["Cygaretki do 3 g", "20", "20", "20"], ["Cygara", "10", "10", "10"], ["Tytoń", "50 g", "50 g", "50 g"], ["Alkohol powyżej 22%", "1 l", "1 l", "1 l"], ["Wino niemusujące", "4 l", "4 l", "4 l"], ["Piwo", "16 l", "16 l", "16 l"], ["Perfumy", "50 ml", "50 ml", "50 ml"], ["Woda toaletowa", "250 ml", "250 ml", "250 ml"], ["Towary i prezenty", "do 300 €", "do 300 €", "do 300 €"], ["Paliwo w kanistrze", "0 l", "do 10 l", "0 l"]] },
      { type: "callout", text: "Limitów nie można wymieniać między kategoriami: rezygnacja z papierosów nie zwiększa limitu mocnego alkoholu." },
      { type: "h2", text: "Bezcłowy wwóz na Białoruś" },
      { type: "p", text: "Przy wjeździe transportem lądowym lub pieszo od 1 kwietnia 2024 r. można bez cła wwieźć na osobę dorosłą towary o wartości do 500 € i wadze do 25 kg." },
      { type: "table", headers: ["Sposób wjazdu", "Wartość", "Waga"], rows: [["Transport lądowy / pieszo", "do 500 €", "do 25 kg"], ["Samolot", "do 10 000 €", "do 50 kg"], ["Dostawa przewoźnikiem", "do 200 €", "do 31 kg"], ["Przesyłka międzynarodowa", "do 200 €", "do 31 kg brutto"]] },
      { type: "p", text: "Niezależnie od sposobu wjazdu limit tytoniu wynosi 200 papierosów, 50 cygar lub cygaretek, 200 wkładów do podgrzewania albo 250 g tytoniu. Alkoholu powyżej 0,5% można przewieźć do 3 l. Limity obowiązują od 18. roku życia." },
      { type: "p", text: "Przekroczenie limitu przy wjeździe lądowym podlega opłacie 30% nadwyżki, nie mniej niż 4 € za kilogram. Dla przesyłek stawka wynosi 15%, nie mniej niż 2 € za kilogram. Za alkohol od 3 do 5 l pobiera się 10 € za każdy litr ponad limit. Ilości handlowe są odprawiane oddzielnie." },
      { type: "link", href: "https://www.customs.gov.by/fizicheskim-litsam/besposhlinnyy-vvoz-vyvoz-tovarov-dlya-lichnogo-polzovaniya/", label: "Białoruski Komitet Celny — bezcłowy wwóz i wywóz", description: "Oficjalne limity wartości, wagi i ilości towarów osobistych" },
      { type: "link", href: "https://www.customs.gov.by/fizicheskim-litsam/vvoz-tovarov-dlya-lichnogo-polzovaniya-s-uplatoy-tamozhennykh-platezhey/", label: "Białoruski Komitet Celny — wwóz z opłatami", description: "Oficjalne stawki dla towarów przekraczających limity" },
      { type: "h2", text: "Gotówka i obowiązek deklaracji" },
      { type: "p", text: "Wywóz gotówki z Białorusi i jej wwóz do UE regulują oddzielnie przepisy białoruskie i przepisy kraju wjazdu." },
      { type: "h3", text: "Wywóz gotówki z Białorusi" },
      { type: "ul", items: ["Do 10 000 USD lub równowartości — bez deklaracji.", "Powyżej 10 000 USD — obowiązkowa deklaracja pisemna.", "Niezadeklarowana nadwyżka może zostać skonfiskowana.", "Biżuteria osobista, karty bankowe i czeki podróżne nie wchodzą do limitu gotówki."] },
      { type: "h3", text: "Wwóz gotówki do UE" },
      { type: "ul", items: ["Do 10 000 € lub równowartości — bez deklaracji.", "Powyżej 10 000 € — obowiązkowa unijna deklaracja środków pieniężnych.", "Deklarację składa się organom celnym kraju wjazdu.", "Ukrycie nadwyżki grozi grzywną i konfiskatą."] },
      { type: "link", href: "https://www.customs.by/deklarirovaniye", label: "Białoruski Komitet Celny — zasady deklarowania", description: "Aktualne limity gotówki, biżuterii i towarów" },
      { type: "h2", text: "Przesyłki i zakupy internetowe" },
      { type: "p", text: "Dla paczek kurierskich i zakupów z platform internetowych obowiązują zasady dotyczące przesyłek międzynarodowych." },
      { type: "ul", items: ["Towary z państw EUG traktuje się na granicy Białoruś–UE jak pochodzące z państwa trzeciego.", "Unijny próg zwolnienia z cła wynosi do 150 € na przesyłkę; powyżej nalicza się cło i VAT.", "Wiele identycznych produktów może zostać uznane za ładunek handlowy.", "Aktualne zasady kontroli publikuje białoruska administracja celna."] },
      { type: "link", href: "https://customs.gov.by/participants-ved/perevozchikam/informatsiya-o-provedenii-kontrolya-mezhdunarodnykh-pochtovykh-otpravleniy-i-tovarov-sleduyushchikh-/", label: "Kontrola przesyłek międzynarodowych", description: "Oficjalne informacje o procedurach celnych" },
      { type: "h2", text: "Co sprawdzają służby graniczne" },
      { type: "ul", items: ["Zbiornik paliwa i kanistry.", "Liczbę papierosów i oznaczenia akcyzowe.", "Ilość alkoholu i banderole.", "Wartość elektroniki na podstawie rachunków.", "Torby z żywnością i lodówki turystyczne.", "Bagażnik i walizki skanerem lub ręcznie.", "Karty i telefony tylko wyjątkowo, przy podejrzeniu przemytu."] },
      { type: "h2", text: "Konsekwencje naruszeń" },
      { type: "table", headers: ["Naruszenie", "Konsekwencja"], rows: [["Papierosy ponad limit", "Konfiskata całej partii"], ["Alkohol ponad limit", "Konfiskata nadwyżki i grzywna"], ["Gotówka ponad 10 000 €", "Konfiskata, możliwe zatrzymanie"], ["Zakazana żywność", "Konfiskata i grzywna"], ["Paliwo w kanistrze na Litwie/Łotwie", "Konfiskata"], ["Elektronika ponad 750 €", "Zatrzymanie, odprawa i opłata"]] },
      { type: "h2", text: "Najczęstsze pytania" },
      { type: "h3", text: "Czy można wwieźć domowe jedzenie?" },
      { type: "p", text: "Nie. Mięso, nabiał, jaja i miód są zakazane. Najbezpieczniej nie przewozić żadnych produktów pochodzenia zwierzęcego." },
      { type: "h3", text: "Czy papierosy w kieszeni liczą się osobno?" },
      { type: "p", text: "Nie. Limit 40 papierosów jest łączny na osobę, niezależnie od miejsca przechowywania." },
      { type: "h3", text: "Czy laptop lub telefon trzeba deklarować?" },
      { type: "p", text: "Jeden używany laptop i telefon nie wymagają deklaracji. Kilka nowych urządzeń w opakowaniach o łącznej wartości ponad 750 € należy zgłosić." },
      { type: "h3", text: "Czy zasady różnią się między przejściami?" },
      { type: "p", text: "Zasady celne są jednakowe. Przejścia różnią się jedynie obciążeniem i szybkością odprawy." },
      { type: "callout", text: "Przepisy i sankcje zmieniają się kilka razy w roku. Przed podróżą sprawdź strony urzędów celnych. Kierowcy ComfortLine śledzą aktualizacje i informują o ograniczeniach." }
    ],
    bodyFr: [
      { type: "h2", text: "Produits totalement interdits de Biélorussie vers l’UE" },
      { type: "p", text: "Dans le cadre des sanctions européennes, les catégories suivantes sont interdites quelle que soit leur quantité ou leur valeur :" },
      { type: "ul", items: ["Essence ou gazole en bidon hors réservoir du véhicule : Lituanie 0 l, Pologne jusqu’à 10 l, Lettonie 0 l.", "Produits du tabac dépassant la franchise.", "Matériel militaire ou de chasse, armes à air comprimé et aérosols de défense.", "Médicaments sur ordonnance en quantité supérieure aux besoins personnels du voyage.", "Produits d’origine animale : viande, charcuterie, lait, fromage, fromage blanc et miel.", "Fruits et légumes frais, plantes, semences, jeunes plants et terre.", "Marchandises sanctionnées par l’UE, notamment certains produits en acier, bois, engrais potassiques et machines.", "Les appareils électroniques d’une valeur supérieure à 750 € doivent être déclarés par écrit."] },
      { type: "h2", text: "Franchises douanières : Lituanie, Pologne et Lettonie" },
      { type: "p", text: "Ces franchises concernent les voyageurs adultes arrivant d’un pays tiers. Des seuils réduits peuvent s’appliquer aux séjours de moins de 24 heures." },
      { type: "table", headers: ["Catégorie", "Lituanie", "Pologne", "Lettonie"], rows: [["Cigarettes", "40", "40", "40"], ["Cigarillos jusqu’à 3 g", "20", "20", "20"], ["Cigares", "10", "10", "10"], ["Tabac à rouler", "50 g", "50 g", "50 g"], ["Spiritueux à plus de 22%", "1 l", "1 l", "1 l"], ["Vin non mousseux", "4 l", "4 l", "4 l"], ["Bière", "16 l", "16 l", "16 l"], ["Parfum", "50 ml", "50 ml", "50 ml"], ["Eau de toilette", "250 ml", "250 ml", "250 ml"], ["Biens et cadeaux", "jusqu’à 300 €", "jusqu’à 300 €", "jusqu’à 300 €"], ["Carburant en bidon", "0 l", "jusqu’à 10 l", "0 l"]] },
      { type: "callout", text: "Les franchises ne sont pas interchangeables : renoncer aux cigarettes ne permet pas de doubler la quantité de spiritueux." },
      { type: "h2", text: "Franchises à l’entrée en Biélorussie" },
      { type: "p", text: "Depuis le 1er avril 2024, l’entrée par voie terrestre ou à pied permet d’importer sans droits, par adulte, jusqu’à 500 € de marchandises et 25 kg." },
      { type: "table", headers: ["Mode d’entrée", "Valeur", "Poids"], rows: [["Transport terrestre / à pied", "jusqu’à 500 €", "jusqu’à 25 kg"], ["Avion", "jusqu’à 10 000 €", "jusqu’à 50 kg"], ["Livraison par transporteur", "jusqu’à 200 €", "jusqu’à 31 kg"], ["Envoi postal international", "jusqu’à 200 €", "jusqu’à 31 kg brut"]] },
      { type: "p", text: "La franchise de tabac, identique pour tous les modes d’entrée, est de 200 cigarettes, 50 cigares ou cigarillos, 200 bâtonnets de tabac chauffé ou 250 g de tabac. La limite d’alcool de plus de 0,5% est de 3 l. Ces franchises sont réservées aux personnes de 18 ans et plus." },
      { type: "p", text: "Au-delà des seuils terrestres, les droits représentent 30% de l’excédent, avec un minimum de 4 € par kilogramme. Pour les colis, le taux est de 15%, minimum 2 € par kilogramme. Entre 3 et 5 l d’alcool, chaque litre excédentaire coûte 10 €. Les quantités commerciales sont traitées séparément." },
      { type: "link", href: "https://www.customs.gov.by/fizicheskim-litsam/besposhlinnyy-vvoz-vyvoz-tovarov-dlya-lichnogo-polzovaniya/", label: "Douanes biélorusses — importation et exportation en franchise", description: "Limites officielles de valeur, poids et quantité pour les biens personnels" },
      { type: "link", href: "https://www.customs.gov.by/fizicheskim-litsam/vvoz-tovarov-dlya-lichnogo-polzovaniya-s-uplatoy-tamozhennykh-platezhey/", label: "Douanes biélorusses — importation avec paiement", description: "Taux officiels applicables au dépassement des franchises" },
      { type: "h2", text: "Espèces et obligation de déclaration" },
      { type: "p", text: "La sortie d’espèces de Biélorussie et leur entrée dans l’UE sont régies séparément par les règles biélorusses et celles du pays européen d’arrivée." },
      { type: "h3", text: "Sortie d’espèces de Biélorussie" },
      { type: "ul", items: ["Jusqu’à 10 000 USD ou l’équivalent : aucune déclaration.", "Au-delà de 10 000 USD : déclaration écrite obligatoire.", "L’excédent non déclaré peut être intégralement confisqué.", "Bijoux personnels, cartes bancaires et chèques de voyage ne comptent pas dans cette limite."] },
      { type: "h3", text: "Entrée d’espèces dans l’Union européenne" },
      { type: "ul", items: ["Jusqu’à 10 000 € ou l’équivalent : aucune déclaration.", "Au-delà de 10 000 € : déclaration européenne d’argent liquide obligatoire.", "La déclaration est remise aux douanes du pays d’entrée.", "La dissimulation de l’excédent expose à une amende et à la confiscation."] },
      { type: "link", href: "https://www.customs.by/deklarirovaniye", label: "Douanes biélorusses — règles de déclaration", description: "Limites actuelles concernant les espèces, bijoux et marchandises" },
      { type: "h2", text: "Colis et achats en ligne" },
      { type: "p", text: "Les colis de services de livraison et les achats effectués sur des plateformes en ligne relèvent des règles des envois postaux internationaux." },
      { type: "ul", items: ["Les marchandises provenant de l’UEE sont considérées comme originaires d’un pays tiers à la frontière Biélorussie–UE.", "Le seuil européen de franchise est de 150 € par colis ; au-delà, droits et TVA sont dus.", "Plusieurs articles identiques peuvent être requalifiés en cargaison commerciale.", "Les règles de contrôle à jour sont publiées par l’administration douanière biélorusse."] },
      { type: "link", href: "https://customs.gov.by/participants-ved/perevozchikam/informatsiya-o-provedenii-kontrolya-mezhdunarodnykh-pochtovykh-otpravleniy-i-tovarov-sleduyushchikh-/", label: "Contrôle des envois postaux internationaux", description: "Informations officielles sur les procédures douanières" },
      { type: "h2", text: "Ce que contrôlent les gardes-frontières" },
      { type: "ul", items: ["Réservoir de carburant et bidons.", "Nombre de cigarettes et marquages fiscaux.", "Quantité d’alcool et timbres d’accise.", "Valeur des appareils électroniques à l’aide des factures.", "Sacs alimentaires et glacières.", "Coffre et bagages au scanner ou manuellement.", "Cartes bancaires et téléphones, très rarement et uniquement en cas de soupçon."] },
      { type: "h2", text: "Conséquences des infractions douanières" },
      { type: "table", headers: ["Infraction", "Conséquence"], rows: [["Cigarettes au-delà de la franchise", "Confiscation de tout le tabac"], ["Alcool excédentaire", "Confiscation de l’excédent et amende"], ["Plus de 10 000 € non déclarés", "Confiscation, détention possible"], ["Aliments interdits", "Confiscation et amende"], ["Carburant en bidon en Lituanie/Lettonie", "Confiscation"], ["Électronique de plus de 750 €", "Retenue, formalités et droits"]] },
      { type: "h2", text: "Questions fréquentes" },
      { type: "h3", text: "Puis-je emporter de la nourriture faite maison ?" },
      { type: "p", text: "Non. La viande, les produits laitiers, les œufs et le miel sont interdits. Le plus sûr est de ne transporter aucun aliment d’origine animale." },
      { type: "h3", text: "Les cigarettes dans une poche comptent-elles séparément ?" },
      { type: "p", text: "Non. La limite totale est de 40 cigarettes par personne, quel que soit l’endroit où elles sont rangées." },
      { type: "h3", text: "Faut-il déclarer un ordinateur ou un téléphone ?" },
      { type: "p", text: "Un ordinateur et un téléphone personnels ne nécessitent pas de déclaration. Plusieurs appareils neufs emballés, d’une valeur totale supérieure à 750 €, doivent être déclarés." },
      { type: "h3", text: "Les règles changent-elles selon le poste-frontière ?" },
      { type: "p", text: "Non. Les règles douanières sont identiques ; seuls la circulation et le temps de traitement varient." },
      { type: "callout", text: "Les règles et sanctions évoluent plusieurs fois par an. Consultez les sites officiels des douanes avant le voyage. Les chauffeurs ComfortLine suivent les changements et signalent les restrictions en vigueur." }
    ],
    related: ["граница-беларусь-литва", "какой-кпп-выбрать", "граница-беларусь-польша"],
    ctaRoute: { label: "Заказать трансфер в Литву, Польшу или Латвию", labelEn: "Book a transfer to Lithuania, Poland or Latvia", labelPl: "Zarezerwuj transfer na Litwę, do Polski lub na Łotwę", labelFr: "Réserver un transfert vers la Lituanie, la Pologne ou la Lettonie", path: "/трансфер-минск-вильнюс-аэропорт" },
  },

  {
    slug: "какой-кпп-выбрать",
    slugEn: "which-belarus-border-crossing-to-choose",
    slugPl: "kamienny-log-kotlowka-bieniakonie-ktore-przejscie-wybrac",
    slugFr: "kamenny-log-kotlovka-benyakoni-quel-poste-choisir",
    titleEn: "Kamenny Log vs Kotlovka vs Benyakoni: Which Belarus Border Crossing Is Fastest",
    titlePl: "Kamienny Łog, Kotłówka czy Bieniakonie: które przejście wybrać?",
    titleFr: "Kamenny Log, Kotlovka ou Benyakoni : quel poste-frontière choisir ?",
    descriptionEn: "Comparing Belarus–Lithuania border checkpoints in 2026: average wait times, working hours, truck restrictions and which crossing is best for car transfers.",
    descriptionPl: "Porównanie przejść Białoruś–Litwa w 2026 roku: kolejki, infrastruktura, ograniczenia oraz najlepsza trasa dla transferu samochodem.",
    descriptionFr: "Comparatif des postes Biélorussie–Lituanie en 2026 : attentes, infrastructures, restrictions et meilleur itinéraire en voiture.",
    ogSlug: "blog-kakoy-kpp-vybrat",
    title: "Каменный Лог vs Котловка vs Бенякони — какой КПП выбрать в 2026",
    description:
      "Сравнение литовских КПП Каменный Лог, Котловка и Бенякони в 2026: время прохождения, инфраструктура, плюсы и минусы каждого пункта пропуска.",
    intro:
      "Если вы едете из Минска в Литву, у вас три варианта пунктов пропуска. Выбор КПП может сэкономить или, наоборот, отнять до 4 часов. Разбираем каждый — на основе ежедневной статистики наших водителей.",
    dateISO: "2026-03-28",
    readingMin: 6,
    category: "Граница",
    tags: ["КПП", "Литва", "Каменный Лог", "Бенякони"],
    body: [
      { type: "h2", text: "Каменный Лог — основной выбор" },
      {
        type: "p",
        text:
          "Главный КПП по объёму трафика. Хорошая инфраструктура, две полосы для легкового транспорта, есть зона для оплаты сборов, кафе и туалеты с обеих сторон. Расположен на трассе М7 Минск–Вильнюс. Литовская сторона называется Мядининкай (Medininkai).",
      },
      {
        type: "ul",
        items: [
          "Плюсы: быстрая обработка, развитая инфраструктура, удобная трасса.",
          "Минусы: самый загруженный КПП, в часы пик стоит до 6 часов.",
          "Лучшее время: вт–ср, 6:00–11:00.",
        ],
      },
      { type: "h2", text: "Бенякони — резервный вариант" },
      {
        type: "p",
        text:
          "Запасной КПП в 60 км южнее Каменного Лога, литовская сторона — Шальчининкай (Šalčininkai). Меньше потока, но и меньше пропускная способность. Ехать дальше — крюк +40 минут до Вильнюса.",
      },
      {
        type: "ul",
        items: [
          "Плюсы: меньше очередь в выходные.",
          "Минусы: дольше путь до Вильнюса (~140 км вместо 100 км от Каменного Лога), скромная инфраструктура.",
          "Когда выбирать: пятница вечер и воскресенье день, когда Каменный Лог встал.",
        ],
      },
      { type: "h2", text: "Котловка — ограниченно работает" },
      {
        type: "p",
        text:
          "С 2023 года движение через Котловку ограничено. Для большинства легковых пассажирских маршрутов в 2026 году КПП фактически недоступен. Перед поездкой обязательно сверяйтесь с актуальной сводкой.",
      },
      { type: "h2", text: "Как выбрать КПП в день поездки" },
      {
        type: "ol",
        items: [
          "Зайдите на сайт ГТК Беларуси и проверьте текущее количество авто в очереди.",
          "Сравните: если на Каменном Логе >150 авто, рассмотрите Бенякони.",
          "Учитывайте день недели: пятница–воскресенье — точно Бенякони.",
          "Проверьте VSAT (литовская сторона) — иногда литовцы тормозят сильнее белорусов.",
          "Доверьтесь водителю — у нас данные обновляются каждые 30 минут.",
        ],
      },
      {
        type: "link",
        href: "https://mon.declarant.by/#/zone",
        label: "Электронная очередь в зонах ожидания — mon.declarant.by",
        description: "Лучший источник живой информации об очередях на границе в интернете: официальный сервис мониторинга регистрации транспорта в электронной очереди на КПП, обновляется в реальном времени. Если сайт не открывается — попробуйте зайти через VPN.",
      },
      { type: "liveQueue" },
      {
        type: "callout",
        text:
          "В ComfortLine водитель сам решает по дороге, какой КПП быстрее. Это часть фиксированной цены — никаких доплат за смену маршрута.",
      },
    ],
    categoryEn: "Border",
    categoryPl: "Granica",
    categoryFr: "Frontière",
    introEn:
      "Travelling from Minsk to Lithuania, you have three checkpoint options. The choice of crossing can save — or cost — up to 4 hours. Here is a breakdown based on our drivers' daily statistics.",
    introPl: "Podróżując z Mińska na Litwę, możesz wybierać spośród trzech przejść. Właściwy wybór pozwala zaoszczędzić nawet cztery godziny. Porównanie opiera się na codziennych danych naszych kierowców.",
    introFr: "Pour aller de Minsk en Lituanie, trois postes sont envisageables. Le bon choix peut faire gagner jusqu’à quatre heures. Ce comparatif repose sur les statistiques quotidiennes de nos chauffeurs.",
    bodyEn: [
      { type: "h2", text: "Kamenny Log — The Main Choice" },
      {
        type: "p",
        text: "The highest-traffic checkpoint. Good infrastructure, two lanes for private cars, a fee zone, café and toilets on both sides. Located on the M7 Minsk–Vilnius highway. The Lithuanian side is called Medininkai.",
      },
      {
        type: "ul",
        items: [
          "Pros: fast processing, well-developed infrastructure, convenient highway.",
          "Cons: the busiest crossing — can queue up to 6 hours at peak times.",
          "Best time: Tuesday–Wednesday, 6:00–11:00.",
        ],
      },
      { type: "h2", text: "Benyakoni — The Backup Option" },
      {
        type: "p",
        text: "A backup crossing 60 km south of Kamenny Log; the Lithuanian side is Šalčininkai. Less traffic but also lower throughput. The detour adds about 40 minutes to Vilnius.",
      },
      {
        type: "ul",
        items: [
          "Pros: shorter queue on weekends.",
          "Cons: longer route to Vilnius (~140 km instead of ~100 km from Kamenny Log), modest facilities.",
          "When to choose: Friday evening and Sunday afternoon when Kamenny Log is backed up.",
        ],
      },
      { type: "h2", text: "Kotlovka — Restricted Operation" },
      {
        type: "p",
        text: "Since 2023, traffic through Kotlovka has been restricted. For most private passenger routes in 2026 the checkpoint is effectively unavailable. Always check the latest situation before departure.",
      },
      { type: "h2", text: "How to Choose a Crossing on the Day of Travel" },
      {
        type: "ol",
        items: [
          "Check the Belarusian State Customs Committee website for the current queue length.",
          "Compare: if Kamenny Log shows more than 150 cars, consider Benyakoni.",
          "Factor in the day of the week: Friday–Sunday — strongly consider Benyakoni.",
          "Check VSAT (Lithuanian side) — Lithuanian processing sometimes takes longer than Belarusian.",
          "Trust your driver — our queue data is updated every 30 minutes.",
        ],
      },
      {
        type: "link",
        href: "https://mon.declarant.by/#/zone",
        label: "Electronic queue at waiting zones — mon.declarant.by",
        description: "The best live queue information available online: the official Belarusian customs monitoring service for vehicle registration in the electronic border-crossing queue, updated in real time. If the site doesn't load, try opening it with a VPN.",
      },
      { type: "liveQueue" },
      {
        type: "callout",
        text: "A ComfortLine driver decides en route which crossing is faster. This is part of the fixed price — no extra charge for a route change.",
      },
    ],
    bodyPl: [
      { type: "h2", text: "Kamienny Łog — główny wybór" },
      { type: "p", text: "To przejście o największym natężeniu ruchu. Ma dobrą infrastrukturę, dwa pasy dla samochodów osobowych, strefę opłat, kawiarnię i toalety po obu stronach. Leży przy trasie M7 Mińsk–Wilno; po stronie litewskiej nazywa się Medininkai (Miedniki)." },
      { type: "ul", items: ["Zalety: sprawna odprawa, rozwinięta infrastruktura i wygodna trasa.", "Wady: największe obciążenie; w godzinach szczytu oczekiwanie dochodzi do 6 godzin.", "Najlepszy czas: wtorek–środa, 6:00–11:00."] },
      { type: "h2", text: "Bieniakonie — wariant rezerwowy" },
      { type: "p", text: "Przejście położone 60 km na południe od Kamiennego Łogu; po stronie litewskiej to Šalčininkai (Soleczniki). Ruch jest mniejszy, ale przepustowość również. Objazd wydłuża drogę do Wilna o około 40 minut." },
      { type: "ul", items: ["Zalety: krótsze kolejki w weekendy.", "Wady: około 140 km do Wilna zamiast 100 km i skromniejsza infrastruktura.", "Warto wybrać w piątek wieczorem lub niedzielę, gdy Kamienny Łog jest zatłoczony."] },
      { type: "h2", text: "Kotłówka — ruch ograniczony" },
      { type: "p", text: "Od 2023 roku ruch przez Kotłówkę jest ograniczony. W 2026 roku przejście jest praktycznie niedostępne dla większości prywatnych tras pasażerskich. Przed wyjazdem trzeba sprawdzić aktualne komunikaty." },
      { type: "h2", text: "Jak wybrać przejście w dniu podróży" },
      { type: "ol", items: ["Sprawdź aktualną liczbę samochodów w serwisie białoruskiej administracji celnej.", "Jeżeli w Kamiennym Łogu czeka ponad 150 aut, rozważ Bieniakonie.", "Uwzględnij dzień tygodnia; od piątku do niedzieli Bieniakonie często są lepsze.", "Sprawdź także dane litewskiego VSAT.", "Zaufaj kierowcy ComfortLine — dane o kolejkach aktualizujemy co 30 minut."] },
      { type: "link", href: "https://mon.declarant.by/#/zone", label: "Elektroniczna kolejka — mon.declarant.by", description: "Oficjalny monitoring pojazdów w elektronicznej kolejce, aktualizowany w czasie rzeczywistym. Jeśli strona nie działa, spróbuj użyć VPN." },
      { type: "liveQueue" },
      { type: "callout", text: "Kierowca ComfortLine wybiera po drodze szybsze przejście. Zmiana trasy jest objęta stałą ceną i nie powoduje dopłat." }
    ],
    bodyFr: [
      { type: "h2", text: "Kamenny Log — le choix principal" },
      { type: "p", text: "C’est le poste au trafic le plus important. Il dispose de deux voies pour les voitures, d’une zone de paiement, d’un café et de toilettes des deux côtés. Il se trouve sur la M7 Minsk–Vilnius ; le côté lituanien s’appelle Medininkai." },
      { type: "ul", items: ["Avantages : traitement efficace, bonnes infrastructures et route pratique.", "Inconvénient : poste le plus fréquenté, avec jusqu’à six heures d’attente aux heures de pointe.", "Meilleur créneau : mardi–mercredi, de 6 h à 11 h."] },
      { type: "h2", text: "Benyakoni — la solution de secours" },
      { type: "p", text: "Ce poste se situe 60 km au sud de Kamenny Log ; le côté lituanien est Šalčininkai. Le trafic est plus faible, mais sa capacité aussi. Le détour ajoute environ 40 minutes jusqu’à Vilnius." },
      { type: "ul", items: ["Avantage : file souvent plus courte le week-end.", "Inconvénients : environ 140 km jusqu’à Vilnius au lieu de 100 km et services plus limités.", "À choisir le vendredi soir ou le dimanche lorsque Kamenny Log est saturé."] },
      { type: "h2", text: "Kotlovka — fonctionnement limité" },
      { type: "p", text: "La circulation par Kotlovka est restreinte depuis 2023. En 2026, ce poste est pratiquement indisponible pour la plupart des trajets privés. Vérifiez impérativement les informations officielles avant le départ." },
      { type: "h2", text: "Choisir le poste le jour du voyage" },
      { type: "ol", items: ["Consultez le nombre actuel de véhicules sur le site des douanes biélorusses.", "Si Kamenny Log compte plus de 150 voitures, envisagez Benyakoni.", "Tenez compte du jour : du vendredi au dimanche, Benyakoni est souvent préférable.", "Vérifiez également le VSAT du côté lituanien.", "Faites confiance au chauffeur ComfortLine : nos données sont actualisées toutes les 30 minutes."] },
      { type: "link", href: "https://mon.declarant.by/#/zone", label: "File d’attente électronique — mon.declarant.by", description: "Suivi officiel en temps réel des véhicules enregistrés dans la file électronique. Si le site ne s’ouvre pas, essayez avec un VPN." },
      { type: "liveQueue" },
      { type: "callout", text: "Le chauffeur ComfortLine choisit en route le poste le plus rapide. Le changement d’itinéraire est compris dans le tarif fixe, sans supplément." }
    ],
    related: ["граница-беларусь-литва", "как-добраться-до-аэропорта-вильнюса"],
    ctaRoute: { label: "Заказать трансфер Минск — Вильнюс (VNO)", labelEn: "Book Minsk–Vilnius (VNO) transfer", labelPl: "Zarezerwuj transfer Mińsk–Wilno (VNO)", labelFr: "Réserver le transfert Minsk–Vilnius (VNO)", path: "/трансфер-минск-вильнюс-аэропорт" },
  },

  {
    slug: "трансфер-с-детьми",
    slugEn: "family-airport-transfer-with-children",
    slugPl: "transfer-na-lotnisko-z-dziecmi-z-minska",
    slugFr: "transfert-aeroport-avec-enfants-depuis-minsk",
    titleEn: "Airport Transfer with Children from Minsk: Family Travel Checklist",
    titlePl: "Transfer z dziećmi z Mińska na lotnisko: lista dla rodziców",
    titleFr: "Transfert aéroport avec des enfants depuis Minsk : liste pratique",
    descriptionEn: "How to travel with kids from Minsk to the airport by private transfer: car seats, luggage, timing and tips for a smooth family journey.",
    descriptionPl: "Jak podróżować z dziećmi prywatnym transferem z Mińska na lotnisko: foteliki, bagaż, dokumenty, czas i praktyczne wskazówki.",
    descriptionFr: "Voyager avec des enfants en transfert privé de Minsk à l’aéroport : sièges auto, bagages, documents, horaires et conseils pratiques.",
    ogSlug: "blog-transfer-s-detmi",
    title: "Трансфер с детьми из Минска в аэропорт: чек-лист для родителей",
    description:
      "Чек-лист для трансфера с детьми из Минска в аэропорты Европы: документы, кресла, питание в дороге, советы по границе. Опыт водителей ComfortLine.",
    intro:
      "Поездка с детьми в аэропорт — это всегда стресс. Дальняя дорога, граница, ночные смены и капризы. Ниже — выжимка из опыта наших водителей за 8 лет: как сделать трансфер комфортным для всех.",
    dateISO: "2026-03-20",
    readingMin: 6,
    category: "С детьми",
    tags: ["дети", "семья", "трансфер"],
    body: [
      { type: "h2", text: "Документы на ребёнка" },
      {
        type: "ul",
        items: [
          "Загранпаспорт ребёнка (даже грудничку).",
          "Шенгенская виза или вписан в визу родителя.",
          "Свидетельство о рождении — оригинал.",
          "Если ребёнок едет без обоих родителей — нотариальное согласие, переведённое и заверенное.",
          "Медицинская страховка с покрытием от 30 000 €.",
        ],
      },
      { type: "h2", text: "Детские кресла" },
      {
        type: "p",
        text:
          "По правилам Беларуси и ЕС дети до 12 лет ростом до 150 см обязательно перевозятся в специальном автокресле или с использованием бустера. ComfortLine предоставляет кресла бесплатно — нужно только указать возраст и вес ребёнка при бронировании.",
      },
      {
        type: "table",
        headers: ["Возраст", "Вес", "Тип удерживающего устройства"],
        rows: [
          ["0–1 год", "до 13 кг", "Автолюлька группы 0/0+"],
          ["1–4 года", "9–18 кг", "Автокресло группы 1"],
          ["3–7 лет", "15–25 кг", "Автокресло группы 2"],
          ["7–12 лет", "22–36 кг", "Бустер группы 3"],
        ],
      },
      { type: "h2", text: "Что взять в дорогу" },
      {
        type: "ul",
        items: [
          "Воду и перекус на 4–6 часов (на границе магазинов нет).",
          "Влажные салфетки, бумажные полотенца, мусорные пакеты.",
          "Сменную одежду на случай разлива/недомогания.",
          "Любимую игрушку и наушники для мультиков.",
          "Лёгкое одеяло — в авто работает кондиционер.",
          "Препараты от укачивания, если ребёнок чувствителен.",
        ],
      },
      { type: "h2", text: "Как пройти границу с ребёнком быстрее" },
      {
        type: "ul",
        items: [
          "Не выезжайте в пиковое время — пятница вечер и воскресенье день.",
          "Имейте все документы в одной папке.",
          "При сильной очереди попросите водителя узнать о \"семейной\" полосе — на некоторых КПП Литвы пропускают вне очереди при маленьких детях.",
          "Заранее покормите и сводите ребёнка в туалет.",
        ],
      },
      {
        type: "callout",
        text:
          "Закажите трансфер минивэном — больше места, ребёнку удобнее в кресле, есть куда поставить коляску. ComfortLine подаёт Hyundai Palisade или Kia Carnival.",
      },
    ],
    categoryEn: "Family Travel",
    categoryPl: "Podróż z rodziną",
    categoryFr: "Voyage en famille",
    introEn:
      "Travelling to the airport with children is always stressful — a long road, a border crossing, night departures and restless kids. Below is the distilled experience of our drivers over 8 years: how to make the transfer comfortable for everyone.",
    introPl: "Podróż na lotnisko z dziećmi bywa stresująca: długa trasa, granica, nocny wyjazd i zmęczenie. Zebraliśmy doświadczenia naszych kierowców z ośmiu lat pracy, aby ułatwić komfortową podróż całej rodzinie.",
    introFr: "Un trajet vers l’aéroport avec des enfants peut être stressant : longue route, frontière, départ nocturne et fatigue. Voici les conseils tirés de huit années d’expérience de nos chauffeurs pour voyager confortablement en famille.",
    bodyEn: [
      { type: "h2", text: "Documents for Your Child" },
      {
        type: "ul",
        items: [
          "International passport for the child (including infants).",
          "Schengen visa, or the child is entered into a parent's visa.",
          "Birth certificate — original.",
          "If the child travels without both parents — notarised parental consent, translated and certified.",
          "Medical insurance with at least €30,000 coverage.",
        ],
      },
      { type: "h2", text: "Child Seats" },
      {
        type: "p",
        text: "Under Belarusian and EU law, children under 12 who are shorter than 150 cm must travel in an approved child restraint system or booster seat. ComfortLine provides seats free of charge — just specify the child's age and weight when booking.",
      },
      {
        type: "table",
        headers: ["Age", "Weight", "Restraint type"],
        rows: [
          ["0–1 year", "up to 13 kg", "Group 0/0+ infant carrier"],
          ["1–4 years", "9–18 kg", "Group 1 car seat"],
          ["3–7 years", "15–25 kg", "Group 2 car seat"],
          ["7–12 years", "22–36 kg", "Group 3 booster"],
        ],
      },
      { type: "h2", text: "What to Pack for the Journey" },
      {
        type: "ul",
        items: [
          "Water and snacks for 4–6 hours (no shops at the border).",
          "Wet wipes, paper towels, small bin bags.",
          "A change of clothes in case of spills or motion sickness.",
          "A favourite toy and headphones for videos.",
          "A light blanket — the car has air conditioning.",
          "Anti-nausea medication if your child is prone to motion sickness.",
        ],
      },
      { type: "h2", text: "How to Cross the Border with Children More Quickly" },
      {
        type: "ul",
        items: [
          "Avoid peak times — Friday evening and Sunday afternoon.",
          "Keep all documents in one folder.",
          "If the queue is long, ask the driver about a family lane — some Lithuanian checkpoints allow families with young children to go ahead of the queue.",
          "Feed the children and take a bathroom break before the border.",
        ],
      },
      {
        type: "callout",
        text: "Book a minivan — more space, a more comfortable seat for the child, room for a pram. ComfortLine provides the Hyundai Palisade or Kia Carnival.",
      },
    ],
    bodyPl: [
      { type: "h2", text: "Dokumenty dziecka" },
      { type: "ul", items: ["Paszport dziecka, także niemowlęcia.", "Wiza Schengen lub wpisanie dziecka do wizy rodzica, jeśli przepisy na to pozwalają.", "Oryginał aktu urodzenia.", "Gdy dziecko podróżuje bez obojga rodziców — przetłumaczona i poświadczona zgoda notarialna.", "Ubezpieczenie medyczne z ochroną co najmniej 30 000 €."] },
      { type: "h2", text: "Foteliki dziecięce" },
      { type: "p", text: "Zgodnie z przepisami Białorusi i UE dzieci poniżej 12 lat i niższe niż 150 cm powinny podróżować w odpowiednim foteliku lub na podstawce. ComfortLine zapewnia foteliki bezpłatnie — podczas rezerwacji podaj wiek i wagę dziecka." },
      { type: "table", headers: ["Wiek", "Waga", "Rodzaj zabezpieczenia"], rows: [["0–1 rok", "do 13 kg", "Nosidełko grupy 0/0+"], ["1–4 lata", "9–18 kg", "Fotelik grupy 1"], ["3–7 lat", "15–25 kg", "Fotelik grupy 2"], ["7–12 lat", "22–36 kg", "Podstawka grupy 3"]] },
      { type: "h2", text: "Co zabrać w podróż" },
      { type: "ul", items: ["Wodę i przekąski na 4–6 godzin — na granicy nie ma sklepów.", "Chusteczki nawilżane, ręczniki papierowe i małe worki na śmieci.", "Ubranie na zmianę.", "Ulubioną zabawkę i słuchawki do oglądania bajek.", "Lekki koc na czas działania klimatyzacji.", "Lek na chorobę lokomocyjną, jeśli dziecko jej doświadcza."] },
      { type: "h2", text: "Jak sprawniej przekroczyć granicę z dzieckiem" },
      { type: "ul", items: ["Unikaj piątkowych wieczorów i niedzielnych popołudni.", "Trzymaj wszystkie dokumenty w jednej teczce.", "Przy długiej kolejce zapytaj kierowcę o pas rodzinny; niektóre litewskie przejścia przepuszczają rodziny z małymi dziećmi wcześniej.", "Nakarm dziecko i skorzystajcie z toalety przed dojazdem do granicy."] },
      { type: "callout", text: "Wybierz minivana: zapewnia więcej miejsca na fotelik i wózek. ComfortLine może podstawić Hyundai Palisade lub Kia Carnival." }
    ],
    bodyFr: [
      { type: "h2", text: "Documents de l’enfant" },
      { type: "ul", items: ["Passeport de l’enfant, y compris pour un nourrisson.", "Visa Schengen ou inscription sur le visa du parent lorsque la réglementation le permet.", "Acte de naissance original.", "Si l’enfant voyage sans ses deux parents : autorisation notariée, traduite et certifiée.", "Assurance médicale couvrant au moins 30 000 €."] },
      { type: "h2", text: "Sièges enfant" },
      { type: "p", text: "Selon les règles biélorusses et européennes, les enfants de moins de 12 ans mesurant moins de 150 cm doivent utiliser un dispositif homologué ou un rehausseur. ComfortLine fournit gratuitement le siège : indiquez simplement l’âge et le poids lors de la réservation." },
      { type: "table", headers: ["Âge", "Poids", "Dispositif"], rows: [["0–1 an", "jusqu’à 13 kg", "Coque groupe 0/0+"], ["1–4 ans", "9–18 kg", "Siège groupe 1"], ["3–7 ans", "15–25 kg", "Siège groupe 2"], ["7–12 ans", "22–36 kg", "Rehausseur groupe 3"]] },
      { type: "h2", text: "À emporter pendant le trajet" },
      { type: "ul", items: ["Eau et collations pour 4 à 6 heures, car il n’y a pas de magasin à la frontière.", "Lingettes, essuie-tout et petits sacs poubelle.", "Vêtements de rechange.", "Jouet préféré et casque pour regarder des dessins animés.", "Couverture légère lorsque la climatisation fonctionne.", "Médicament contre le mal des transports si nécessaire."] },
      { type: "h2", text: "Passer plus rapidement la frontière avec un enfant" },
      { type: "ul", items: ["Évitez le vendredi soir et le dimanche après-midi.", "Regroupez tous les documents dans une pochette.", "En cas de longue file, demandez au chauffeur s’il existe une voie familiale ; certains postes lituaniens donnent la priorité aux familles avec de jeunes enfants.", "Faites manger l’enfant et prévoyez un passage aux toilettes avant la frontière."] },
      { type: "callout", text: "Réservez un monospace : davantage d’espace pour le siège et la poussette. ComfortLine peut proposer un Hyundai Palisade ou un Kia Carnival." }
    ],
    related: ["граница-беларусь-литва", "стоимость-трансфер-минск-варшава"],
    ctaRoute: { label: "Заказать минивэн с детским креслом", labelEn: "Book a minivan with child seat", labelPl: "Zarezerwuj minivana z fotelikiem dziecięcym", labelFr: "Réserver un monospace avec siège enfant", path: "/трансфер-хендай-палисад" },
  },

  {
    slug: "как-добраться-до-аэропорта-вильнюса",
    slugEn: "how-to-get-to-vilnius-airport-from-minsk",
    slugPl: "jak-dojechac-z-minska-na-lotnisko-w-wilnie-vno",
    slugFr: "comment-aller-de-minsk-a-aeroport-vilnius-vno",
    titleEn: "How to Get from Minsk to Vilnius Airport (VNO): All Options 2026",
    titlePl: "Jak dojechać z Mińska na lotnisko w Wilnie (VNO) w 2026 roku",
    titleFr: "Comment aller de Minsk à l’aéroport de Vilnius (VNO) en 2026",
    descriptionEn: "Complete guide to reaching Vilnius Airport from Minsk in 2026: private transfer, bus, minibus — travel times, prices and an honest comparison.",
    descriptionPl: "Transfer prywatny, taksówka dzielona, autobus lub własne auto z Mińska na lotnisko VNO: porównanie czasu, ceny i wygody w 2026 roku.",
    descriptionFr: "Transfert privé, taxi partagé, bus ou voiture de Minsk à VNO : comparaison des durées, prix et niveaux de confort en 2026.",
    ogSlug: "blog-kak-dobratsya-do-vno",
    title: "Как добраться из Минска в аэропорт Вильнюса (VNO) в 2026",
    description:
      "Все способы добраться из Минска в аэропорт Вильнюса (VNO) в 2026: трансфер, такси, автобус, личное авто. Сравнение цены, времени и удобства.",
    intro:
      "Аэропорт Вильнюса (VNO) — самый удобный международный хаб для жителей Беларуси. Из Минска до VNO ~175 км. Ниже сравниваем все варианты, как туда добраться.",
    dateISO: "2026-03-15",
    readingMin: 5,
    category: "Аэропорт",
    tags: ["VNO", "Вильнюс", "аэропорт"],
    body: [
      { type: "h2", text: "Сравнение вариантов" },
      {
        type: "table",
        headers: ["Способ", "Время", "Стоимость", "Комфорт"],
        rows: [
          ["Личный трансфер ComfortLine", "3–5 ч", "По запросу", "★★★★★"],
          ["Сборное такси", "4–6 ч", "Дешевле трансфера", "★★★"],
          ["Автобус Минск–Вильнюс", "5–7 ч", "Самый бюджетный", "★★"],
          ["Личное авто", "3–5 ч", "Топливо + парковка", "★★★★"],
        ],
      },
      { type: "h2", text: "Трансфер: плюсы и минусы" },
      {
        type: "p",
        text:
          "Индивидуальный трансфер — самый предсказуемый вариант. Подача от двери в назначенное время, заранее согласованная стоимость, водитель помогает на границе и с багажом. Подходит, если нужно быть уверенным во времени или едет семья с детьми.",
      },
      { type: "h2", text: "Сборное такси и автобус" },
      {
        type: "p",
        text:
          "Дешевле, но менее предсказуемо. Сборные машины ждут заполнения, могут собирать пассажиров по нескольким адресам в Минске. Автобусы ходят по расписанию, но останавливаются в общем потоке на КПП и могут стоять дольше из-за группового досмотра.",
      },
      { type: "h2", text: "Личное авто" },
      {
        type: "p",
        text:
          "Хороший вариант, если поездка короткая (3–5 дней). На длительные поездки добавляются расходы на парковку в аэропорту, топливо туда-обратно и страховку «Зелёная карта».",
      },
      {
        type: "callout",
        text:
          "Если для вас важно успеть на рейс без сюрпризов — индивидуальный трансфер ComfortLine. Заказ онлайн или по телефону, расчёт в ближайшее время.",
      },
    ],
    categoryEn: "Airport",
    categoryPl: "Lotnisko",
    categoryFr: "Aéroport",
    introEn:
      "Vilnius Airport (VNO) is the most convenient international hub for Belarusian travellers. Minsk to VNO is around 175 km. Here we compare all the options for getting there.",
    introPl: "Lotnisko w Wilnie (VNO) jest jednym z najwygodniejszych międzynarodowych portów dla podróżnych z Białorusi. Od Mińska dzieli je około 175 km. Porównujemy wszystkie sposoby dojazdu.",
    introFr: "L’aéroport de Vilnius (VNO) est l’un des hubs internationaux les plus pratiques pour les voyageurs biélorusses. Il se trouve à environ 175 km de Minsk. Voici toutes les solutions pour s’y rendre.",
    bodyEn: [
      { type: "h2", text: "Options Compared" },
      {
        type: "table",
        headers: ["Option", "Time", "Price", "Comfort"],
        rows: [
          ["Private transfer ComfortLine", "3–5 h", "On request", "★★★★★"],
          ["Shared taxi", "4–6 h", "Less than private transfer", "★★★"],
          ["Bus Minsk–Vilnius", "5–7 h", "Most budget-friendly", "★★"],
          ["Own car", "3–5 h", "Fuel + parking", "★★★★"],
        ],
      },
      { type: "h2", text: "Private Transfer: Pros and Cons" },
      {
        type: "p",
        text: "A private transfer is the most predictable option. Door-to-door pick-up at an agreed time, a price confirmed in advance, and a driver who assists at the border and with luggage. Ideal when you need certainty about timing or are travelling as a family with children.",
      },
      { type: "h2", text: "Shared Taxi and Bus" },
      {
        type: "p",
        text: "Cheaper, but less predictable. Shared vehicles wait until full and may collect passengers at several addresses across Minsk. Buses run on a fixed schedule but stop in the common queue at the checkpoint and can be delayed by group passport inspections.",
      },
      { type: "h2", text: "Own Car" },
      {
        type: "p",
        text: "A good option for short trips of 3–5 days. For longer trips, costs add up: airport parking fees, fuel for the return journey and a Green Card insurance policy.",
      },
      {
        type: "callout",
        text: "If catching your flight without surprises matters — choose a private ComfortLine transfer. Book online or by phone; quote shortly.",
      },
    ],
    bodyPl: [
      { type: "h2", text: "Porównanie możliwości" },
      { type: "table", headers: ["Sposób", "Czas", "Cena", "Komfort"], rows: [["Prywatny transfer ComfortLine", "3–5 godz.", "Na zapytanie", "★★★★★"], ["Taksówka dzielona", "4–6 godz.", "Taniej niż transfer prywatny", "★★★"], ["Autobus Mińsk–Wilno", "5–7 godz.", "Najtańsza opcja", "★★"], ["Własny samochód", "3–5 godz.", "Paliwo i parking", "★★★★"]] },
      { type: "h2", text: "Transfer prywatny: zalety i wady" },
      { type: "p", text: "Prywatny transfer jest najbardziej przewidywalnym rozwiązaniem. Kierowca odbiera spod wskazanego adresu o ustalonej godzinie, cena jest potwierdzana wcześniej, a podczas podróży pomaga na granicy i przy bagażu. To dobry wybór przy locie o konkretnej godzinie oraz dla rodzin z dziećmi." },
      { type: "h2", text: "Taksówka dzielona i autobus" },
      { type: "p", text: "Są tańsze, ale mniej przewidywalne. Taksówki dzielone mogą czekać na komplet pasażerów i odbierać ich z kilku adresów. Autobusy kursują według rozkładu, lecz stoją we wspólnej kolejce i mogą zostać opóźnione przez kontrolę całej grupy." },
      { type: "h2", text: "Własny samochód" },
      { type: "p", text: "To rozsądna opcja przy krótkim wyjeździe na 3–5 dni. Przy dłuższej podróży trzeba doliczyć parking na lotnisku, paliwo w obie strony oraz odpowiednie ubezpieczenie pojazdu." },
      { type: "callout", text: "Jeżeli chcesz dotrzeć na lot bez niespodzianek, wybierz indywidualny transfer ComfortLine. Rezerwacja jest dostępna online lub telefonicznie; dokładną wycenę otrzymasz po zgłoszeniu." }
    ],
    bodyFr: [
      { type: "h2", text: "Comparaison des solutions" },
      { type: "table", headers: ["Solution", "Durée", "Prix", "Confort"], rows: [["Transfert privé ComfortLine", "3–5 h", "Sur demande", "★★★★★"], ["Taxi partagé", "4–6 h", "Moins cher qu’un transfert privé", "★★★"], ["Bus Minsk–Vilnius", "5–7 h", "Option la plus économique", "★★"], ["Voiture personnelle", "3–5 h", "Carburant et stationnement", "★★★★"]] },
      { type: "h2", text: "Transfert privé : avantages et inconvénients" },
      { type: "p", text: "Le transfert privé est la solution la plus prévisible. Le chauffeur vient à l’adresse convenue, le tarif est confirmé à l’avance et il aide à la frontière ainsi qu’avec les bagages. Cette formule convient particulièrement lorsque l’horaire du vol est impératif ou pour une famille avec des enfants." },
      { type: "h2", text: "Taxi partagé et bus" },
      { type: "p", text: "Ces solutions coûtent moins cher mais sont moins prévisibles. Un taxi partagé peut attendre d’être complet et prendre des passagers à plusieurs adresses. Les bus suivent un horaire, mais restent dans la file commune et peuvent être retardés par le contrôle du groupe." },
      { type: "h2", text: "Voiture personnelle" },
      { type: "p", text: "C’est une option intéressante pour un séjour court de trois à cinq jours. Pour une absence plus longue, il faut ajouter le stationnement à l’aéroport, le carburant aller-retour et l’assurance automobile nécessaire." },
      { type: "callout", text: "Pour rejoindre votre vol sans mauvaise surprise, choisissez un transfert individuel ComfortLine. Réservation en ligne ou par téléphone ; le tarif exact est confirmé après la demande." }
    ],
    related: ["граница-беларусь-литва", "какой-кпп-выбрать", "трансфер-с-детьми"],
    ctaRoute: { label: "Заказать трансфер Минск — Вильнюс (VNO)", labelEn: "Book Minsk–Vilnius (VNO) transfer", labelPl: "Zarezerwuj transfer Mińsk–Wilno (VNO)", labelFr: "Réserver le transfert Minsk–Vilnius (VNO)", path: "/трансфер-минск-вильнюс-аэропорт" },
  },

  {
    slug: "аэропорт-варшавы-вав",
    slugEn: "warsaw-chopin-airport-guide-from-belarus",
    slugPl: "lotnisko-chopina-warszawa-waw-przewodnik-z-bialorusi",
    slugFr: "aeroport-varsovie-chopin-waw-guide-depuis-bielorussie",
    titleEn: "Warsaw Chopin Airport (WAW): Complete Guide for Travelers from Belarus",
    titlePl: "Lotnisko Chopina w Warszawie (WAW): przewodnik dla podróżnych z Białorusi",
    titleFr: "Aéroport Varsovie-Chopin (WAW) : guide pour les voyageurs de Biélorussie",
    descriptionEn: "Everything about Warsaw Chopin Airport for passengers from Belarus: terminals, check-in tips, transfer options and how to get there from Minsk.",
    descriptionPl: "Lotnisko Chopina WAW dla pasażerów z Białorusi: terminale, odprawa, strefa spotkań, transfer z Mińska i lotnisko Modlin.",
    descriptionFr: "L’aéroport Chopin WAW pour les passagers de Biélorussie : terminaux, enregistrement, accueil, transfert depuis Minsk et Modlin.",
    ogSlug: "blog-airport-warsaw-waw",
    title: "Аэропорт Варшавы (WAW): полный гайд для пассажиров из Беларуси",
    description:
      "Всё об аэропорте Варшавы Фредерик Шопен (WAW) для путешественников из Беларуси: терминалы, регистрация, транзит, где встречают водители, Модлин (WMI) как альтернатива.",
    intro:
      "Аэропорт Варшавы имени Фредерика Шопена (WAW) — крупнейший хаб Польши и один из самых востребованных аэропортов для жителей Беларуси. Ниже — всё, что нужно знать перед вылетом.",
    dateISO: "2026-05-20",
    readingMin: 6,
    category: "Аэропорт",
    tags: ["WAW", "Варшава", "аэропорт", "Польша"],
    body: [
      { type: "h2", text: "Общая информация" },
      {
        type: "p",
        text: "WAW находится в 10 км к юго-западу от центра Варшавы. Расстояние от Минска — около 550–600 км, время в пути с трансфером — 7–9 часов с учётом границы. Аэропорт работает круглосуточно. Основные авиакомпании: LOT, Ryanair, Wizz Air, Lufthansa, Turkish Airlines.",
      },
      { type: "h2", text: "Терминалы: А и В" },
      {
        type: "p",
        text: "WAW имеет два пассажирских терминала, соединённых пешеходным переходом (5–7 минут): Терминал А — основной, международные и европейские рейсы; Терминал В — бюджетные перевозчики (Ryanair, Wizz Air). Перед поездкой проверьте на сайте авиакомпании, какой терминал ваш рейс.",
      },
      {
        type: "table",
        headers: ["Терминал", "Кто летает", "Регистрация (рекомендуется)"],
        rows: [
          ["Терминал А", "LOT, Lufthansa, Turkish, Emirates и др.", "За 2–3 часа до вылета"],
          ["Терминал В", "Ryanair, Wizz Air", "За 2 часа (онлайн-регистрация обязательна)"],
        ],
      },
      { type: "h2", text: "Зона встречи и трансфер" },
      {
        type: "p",
        text: "Зона прилёта и встречи находится на первом этаже обоих терминалов. Водители ComfortLine встречают с табличкой в зале прилёта. Парковка для подачи авто — P1 (Терминал А) и P2 (Терминал В), первые 15–20 минут бесплатно.",
      },
      { type: "h2", text: "Модлин (WMI) — альтернатива WAW" },
      {
        type: "p",
        text: "В 35 км севернее Варшавы находится аэропорт Варшава Модлин (WMI) — бюджетная альтернатива, которую активно использует Ryanair. Добраться туда из Минска дольше примерно на 30–40 минут. При бронировании трансфера важно уточнить: WAW или WMI.",
      },
      { type: "h2", text: "Советы перед вылетом" },
      {
        type: "ul",
        items: [
          "Онлайн-регистрация у Ryanair и Wizz Air обязательна — иначе сбор €50–55 за стойке.",
          "Приезжайте в аэропорт минимум за 2 часа (а для WAW → Терминал А — за 2,5).",
          "Табло с рейсами обновляется за 24 ч. Проверьте номер выхода (gate) онлайн накануне.",
          "Обмен валют в аэропорту невыгоден — лучше снять злотые заранее.",
          "Бесплатный Wi-Fi есть во всех зонах — работает стабильно.",
        ],
      },
      {
        type: "callout",
        text: "ComfortLine осуществляет трансферы к обоим аэропортам Варшавы — WAW и WMI. Водитель доставит от двери до зоны регистрации и при необходимости поможет с багажом.",
      },
    ],
    categoryEn: "Airport",
    categoryPl: "Lotnisko",
    categoryFr: "Aéroport",
    introEn:
      "Warsaw Frederic Chopin Airport (WAW) is Poland's largest hub and one of the most popular airports for Belarusian travellers. Here is everything you need to know before your flight.",
    introPl: "Lotnisko Chopina w Warszawie (WAW) jest największym portem lotniczym w Polsce i jednym z najpopularniejszych wśród podróżnych z Białorusi. Oto najważniejsze informacje przed wylotem.",
    introFr: "L’aéroport Frédéric-Chopin de Varsovie (WAW) est le principal hub de Pologne et l’un des plus utilisés par les voyageurs biélorusses. Voici l’essentiel avant votre vol.",
    bodyEn: [
      { type: "h2", text: "General Information" },
      {
        type: "p",
        text: "WAW is located 10 km south-west of Warsaw city centre. Distance from Minsk — approximately 550–600 km; journey time by transfer is 7–9 hours including the border. The airport operates 24/7. Main airlines: LOT, Ryanair, Wizz Air, Lufthansa, Turkish Airlines.",
      },
      { type: "h2", text: "Terminals: A and B" },
      {
        type: "p",
        text: "WAW has two passenger terminals connected by a walkway (5–7 minutes): Terminal A — main terminal, international and European flights; Terminal B — budget carriers (Ryanair, Wizz Air). Before you travel, check your airline's website to confirm which terminal your flight uses.",
      },
      {
        type: "table",
        headers: ["Terminal", "Airlines", "Recommended check-in"],
        rows: [
          ["Terminal A", "LOT, Lufthansa, Turkish, Emirates etc.", "2–3 hours before departure"],
          ["Terminal B", "Ryanair, Wizz Air", "2 hours (online check-in mandatory)"],
        ],
      },
      { type: "h2", text: "Meet-and-Greet and Transfer" },
      {
        type: "p",
        text: "The arrivals and meet-and-greet zone is on the ground floor of both terminals. ComfortLine drivers meet passengers with a name board in the arrivals hall. Drop-off parking: P1 (Terminal A) and P2 (Terminal B); the first 15–20 minutes are free.",
      },
      { type: "h2", text: "Modlin (WMI) — An Alternative to WAW" },
      {
        type: "p",
        text: "Warsaw Modlin Airport (WMI) is 35 km north of Warsaw — a budget alternative used heavily by Ryanair. From Minsk it takes roughly 30–40 minutes longer. When booking a transfer, always confirm whether you mean WAW or WMI.",
      },
      { type: "h2", text: "Pre-Flight Tips" },
      {
        type: "ul",
        items: [
          "Online check-in is mandatory for Ryanair and Wizz Air — printing a boarding pass at the desk costs €50–55.",
          "Arrive at the airport at least 2 hours early (2.5 hours for WAW Terminal A).",
          "Flight boards update 24 h in advance. Check your gate online the evening before.",
          "Currency exchange at the airport is unfavourable — withdraw Polish złoty in advance.",
          "Free Wi-Fi is available throughout the airport and works reliably.",
        ],
      },
      {
        type: "callout",
        text: "ComfortLine transfers to both Warsaw airports — WAW and WMI. Your driver delivers you from door to check-in and assists with luggage.",
      },
    ],
    bodyPl: [
      { type: "h2", text: "Informacje ogólne" },
      { type: "p", text: "WAW znajduje się 10 km na południowy zachód od centrum Warszawy. Odległość z Mińska wynosi około 550–600 km, a przejazd z granicą trwa zwykle 7–9 godzin. Lotnisko działa przez całą dobę. Obsługują je m.in. LOT, Ryanair, Wizz Air, Lufthansa i Turkish Airlines." },
      { type: "h2", text: "Terminale A i B" },
      { type: "p", text: "Terminale pasażerskie są połączone przejściem, którego pokonanie zajmuje 5–7 minut. Terminal A obsługuje główne połączenia europejskie i międzynarodowe, a Terminal B przewoźników niskokosztowych. Przed wyjazdem sprawdź terminal na stronie linii lotniczej." },
      { type: "table", headers: ["Terminal", "Linie", "Zalecana odprawa"], rows: [["Terminal A", "LOT, Lufthansa, Turkish, Emirates i inne", "2–3 godziny przed odlotem"], ["Terminal B", "Ryanair, Wizz Air", "2 godziny; odprawa online obowiązkowa"]] },
      { type: "h2", text: "Strefa spotkań i transfer" },
      { type: "p", text: "Strefa przylotów i spotkań mieści się na parterze obu terminali. Kierowca ComfortLine czeka w hali przylotów z tabliczką. Do odbioru używane są parkingi P1 przy Terminalu A i P2 przy Terminalu B; pierwsze 15–20 minut jest bezpłatne." },
      { type: "h2", text: "Modlin (WMI) jako alternatywa" },
      { type: "p", text: "Lotnisko Warszawa-Modlin znajduje się około 35 km na północ od Warszawy i jest wykorzystywane głównie przez tanie linie, zwłaszcza Ryanair. Dojazd z Mińska trwa około 30–40 minut dłużej. Przy rezerwacji zawsze wskaż właściwy kod: WAW albo WMI." },
      { type: "h2", text: "Wskazówki przed wylotem" },
      { type: "ul", items: ["Ryanair i Wizz Air wymagają odprawy online; wydruk karty przy stanowisku może kosztować 50–55 €.", "Przyjedź co najmniej 2 godziny wcześniej, a do Terminalu A najlepiej 2,5 godziny przed odlotem.", "Sprawdź numer bramki online poprzedniego wieczoru.", "Kursy wymiany na lotnisku są niekorzystne; złote przygotuj wcześniej.", "Bezpłatne Wi-Fi działa we wszystkich strefach."] },
      { type: "callout", text: "ComfortLine realizuje transfery na oba warszawskie lotniska — WAW i WMI. Kierowca dowiezie Cię od drzwi do strefy odprawy i pomoże z bagażem." }
    ],
    bodyFr: [
      { type: "h2", text: "Informations générales" },
      { type: "p", text: "WAW se situe à 10 km au sud-ouest du centre de Varsovie. La distance depuis Minsk est d’environ 550 à 600 km et le transfert prend généralement 7 à 9 heures avec la frontière. L’aéroport fonctionne 24 h/24. Il accueille notamment LOT, Ryanair, Wizz Air, Lufthansa et Turkish Airlines." },
      { type: "h2", text: "Terminaux A et B" },
      { type: "p", text: "Les deux terminaux sont reliés par un passage de 5 à 7 minutes. Le terminal A accueille les principaux vols européens et internationaux ; le terminal B est utilisé par les compagnies à bas prix. Vérifiez toujours le terminal sur le site de votre compagnie." },
      { type: "table", headers: ["Terminal", "Compagnies", "Enregistrement conseillé"], rows: [["Terminal A", "LOT, Lufthansa, Turkish, Emirates et autres", "2 à 3 heures avant le départ"], ["Terminal B", "Ryanair, Wizz Air", "2 heures ; enregistrement en ligne obligatoire"]] },
      { type: "h2", text: "Zone d’accueil et transfert" },
      { type: "p", text: "La zone des arrivées et des rencontres se trouve au rez-de-chaussée des deux terminaux. Le chauffeur ComfortLine attend avec une pancarte nominative. Les parkings de prise en charge sont P1 pour le terminal A et P2 pour le terminal B ; les 15 à 20 premières minutes sont gratuites." },
      { type: "h2", text: "Modlin (WMI), alternative à WAW" },
      { type: "p", text: "L’aéroport de Varsovie-Modlin se trouve à 35 km au nord de la capitale et accueille surtout les compagnies à bas prix, notamment Ryanair. Depuis Minsk, le trajet prend environ 30 à 40 minutes de plus. Lors de la réservation, précisez toujours WAW ou WMI." },
      { type: "h2", text: "Conseils avant le vol" },
      { type: "ul", items: ["Ryanair et Wizz Air imposent l’enregistrement en ligne ; l’impression au comptoir peut coûter 50 à 55 €.", "Arrivez au moins 2 heures à l’avance, ou 2 h 30 pour le terminal A.", "Vérifiez votre porte d’embarquement en ligne la veille au soir.", "Le change à l’aéroport est défavorable ; procurez-vous des zlotys auparavant.", "Le Wi-Fi gratuit est disponible dans toutes les zones."] },
      { type: "callout", text: "ComfortLine dessert les deux aéroports de Varsovie, WAW et WMI. Le chauffeur vous conduit de votre porte à la zone d’enregistrement et vous aide avec les bagages." }
    ],
    related: ["стоимость-трансфер-минск-варшава", "граница-беларусь-польша", "что-нельзя-ввозить-в-ес"],
    ctaRoute: { label: "Заказать трансфер Минск — Варшава (WAW)", labelEn: "Book Minsk–Warsaw (WAW) transfer", labelPl: "Zarezerwuj transfer Mińsk–Warszawa (WAW)", labelFr: "Réserver le transfert Minsk–Varsovie (WAW)", path: "/трансфер-минск-варшава-шопен" },
  },

  {
    slug: "граница-беларусь-польша",
    slugEn: "belarus-poland-border-crossing-guide",
    slugPl: "granica-bialorus-polska-2026-przejscia-dokumenty-kolejki",
    slugFr: "frontiere-bielorussie-pologne-2026-postes-documents-attente",
    titleEn: "Belarus–Poland Border Crossing Guide 2026: Checkpoints, Documents & Wait Times",
    titlePl: "Granica Białoruś–Polska w 2026: przejścia, dokumenty i kolejki",
    titleFr: "Frontière Biélorussie–Pologne en 2026 : postes, documents et attente",
    descriptionEn: "Practical guide to crossing the Belarus–Poland border in 2026: working checkpoints, required documents, typical wait times and practical tips.",
    descriptionPl: "Praktyczny przewodnik po granicy Białoruś–Polska w 2026 roku: czynne przejścia, dokumenty, czas oczekiwania i porady kierowców.",
    descriptionFr: "Guide pratique de la frontière Biélorussie–Pologne en 2026 : postes ouverts, documents, délais habituels et conseils des chauffeurs.",
    ogSlug: "blog-granitsa-belarus-polsha",
    title: "Граница Беларусь–Польша в 2026: КПП, документы, очереди",
    description:
      "Гайд по пересечению границы Беларусь–Польша в 2026: рабочие КПП (Брест–Тересполь, Домачево, Брузги), документы, время ожидания, лайфхаки от водителей.",
    intro:
      "Граница Беларусь–Польша — второй по востребованности маршрут после литовского. Расстояние от Минска до Бреста — около 350 км, затем пересечение границы и дорога до Варшавы ещё 200 км. Рассказываем, как это устроено в 2026.",
    dateISO: "2026-05-10",
    readingMin: 8,
    category: "Граница",
    tags: ["граница", "Польша", "Брест", "КПП", "Тересполь"],
    body: [
      { type: "h2", text: "Рабочие КПП в 2026" },
      {
        type: "p",
        text: "Для легковых автомобилей на белорусско-польской границе в 2026 году работают три основных пункта пропуска. Выбор КПП сильно влияет на время ожидания — учитывайте это при планировании поездки.",
      },
      {
        type: "table",
        headers: ["КПП (BY)", "КПП (PL)", "Маршрут", "Среднее время"],
        rows: [
          ["Брест (Тересполь)", "Тересполь", "М1 / Е30 → Варшава", "3–7 ч"],
          ["Домачево", "Словатыче", "Южный объезд", "1–3 ч"],
          ["Брузги", "Кузница Белостоцкая", "Гродно → Белосток", "2–5 ч"],
        ],
      },
      { type: "h2", text: "Брест–Тересполь: самый загруженный" },
      {
        type: "p",
        text: "Основной и самый известный переход. Находится прямо на трассе М1 (Берлинское шоссе). Здесь проходит основной поток легковых автомобилей, поэтому в пятницу–воскресенье и накануне праздников очереди могут достигать 6–10 часов. Рекомендуем ехать во вторник–четверг, рано утром.",
      },
      { type: "h2", text: "Домачево: тихая альтернатива" },
      {
        type: "p",
        text: "КПП Домачево находится в 43 км южнее Бреста. Маршрут длиннее на 60–80 км, но очереди — в 2–3 раза меньше. Отличный выбор, если попали в пятничный час пик. Дорога до Варшавы через Люблин добавляет около часа.",
      },
      { type: "h2", text: "Брузги (Гродно): для северного направления" },
      {
        type: "p",
        text: "Переход Брузги–Кузница идеально подходит для поездок из Гродно или тем, кто едет в Белосток, Гданьск или Трёхградье. Из Минска до Брузгов около 330 км. Очереди обычно умеренные, но в летний сезон могут вырастать.",
      },
      { type: "h2", text: "Документы для въезда в Польшу" },
      {
        type: "ul",
        items: [
          "Паспорт со сроком действия не менее 3 месяцев после предполагаемой даты выезда из ЕС.",
          "Шенгенская виза или действующий ВНЖ страны ЕС.",
          "Медицинская страховка (минимум 30 000 €, действующая во всех странах Шенгена).",
          "Подтверждение брони отеля или приглашение от принимающей стороны.",
          "Обратные билеты или подтверждение цели поездки.",
          "«Зелёная карта» — если едете на личном авто.",
        ],
      },
      { type: "h2", text: "Советы водителей ComfortLine" },
      {
        type: "ul",
        items: [
          "Планируйте поездку на вторник–четверг — очереди в 2–3 раза меньше, чем в пятницу.",
          "Держите все документы в одной папке — это реально ускоряет проверку.",
          "На Тересполе иногда спрашивают цель поездки устно — отвечайте чётко: туризм, бизнес, транзит.",
          "Мобильная связь A1/МТС работает до белорусской стороны, далее — польские операторы.",
          "Наличные злотые с собой — на польской стороне терминалы есть, но иногда «зависают».",
        ],
      },
      {
        type: "link",
        href: "https://mon.declarant.by/#/zone",
        label: "Электронная очередь в зонах ожидания — mon.declarant.by",
        description: "Лучший источник живой информации об очередях на границе в интернете: официальный сервис мониторинга регистрации транспорта в электронной очереди на белорусских КПП, включая Брест и Домачево, обновляется в реальном времени. Если сайт не открывается — попробуйте зайти через VPN.",
      },
      { type: "liveQueue" },
      {
        type: "callout",
        text: "Водители ComfortLine отслеживают ситуацию на обоих переходах онлайн. При необходимости — оперативно перестраиваем маршрут на Домачево, чтобы вы не теряли лишние часы.",
      },
    ],
    categoryEn: "Border",
    categoryPl: "Granica",
    categoryFr: "Frontière",
    introEn:
      "The Belarus–Poland border is the second busiest route after Lithuania. Minsk to Brest is around 350 km, then the border crossing and another 200 km to Warsaw. Here is how it works in 2026.",
    introPl: "Granica Białoruś–Polska jest drugą najczęściej wybieraną trasą po kierunku litewskim. Z Mińska do Brześcia jest około 350 km, a po przekroczeniu granicy pozostaje około 200 km do Warszawy.",
    introFr: "La frontière Biélorussie–Pologne est le deuxième itinéraire le plus fréquent après la Lituanie. Minsk–Brest représente environ 350 km, puis il reste près de 200 km jusqu’à Varsovie après la frontière.",
    bodyEn: [
      { type: "h2", text: "Working Checkpoints in 2026" },
      {
        type: "p",
        text: "Three main checkpoints operate for private cars on the Belarus–Poland border in 2026. Your choice of crossing significantly affects waiting time — factor this into your travel planning.",
      },
      {
        type: "table",
        headers: ["Checkpoint (BY)", "Checkpoint (PL)", "Route", "Avg. wait time"],
        rows: [
          ["Brest (Terespol)", "Terespol", "M1 / E30 → Warsaw", "3–7 h"],
          ["Domachevo", "Sławatycze", "Southern bypass", "1–3 h"],
          ["Bruzgi", "Kuźnica Białostocka", "Grodno → Białystok", "2–5 h"],
        ],
      },
      { type: "h2", text: "Brest–Terespol: The Busiest Crossing" },
      {
        type: "p",
        text: "The main and best-known crossing, located directly on the M1 highway (the Berlin road). It handles the largest volume of private cars, so on Friday–Sunday and before public holidays queues can reach 6–10 hours. We recommend travelling Tuesday–Thursday, early in the morning.",
      },
      { type: "h2", text: "Domachevo: The Quiet Alternative" },
      {
        type: "p",
        text: "Domachevo is 43 km south of Brest. The route is 60–80 km longer, but queues are 2–3 times shorter. An excellent choice if you get caught in Friday rush hour. The route to Warsaw via Lublin adds about one hour.",
      },
      { type: "h2", text: "Bruzgi (Grodno): For the Northern Direction" },
      {
        type: "p",
        text: "The Bruzgi–Kuźnica crossing is ideal for travellers from Grodno, or for those heading to Białystok, Gdańsk or the Tri-City. Minsk to Bruzgi is about 330 km. Queues are usually moderate but can grow in summer.",
      },
      { type: "h2", text: "Documents for Entry into Poland" },
      {
        type: "ul",
        items: [
          "Passport valid for at least 3 months beyond your planned EU departure date.",
          "Schengen visa or a valid EU residence permit.",
          "Medical insurance (minimum €30,000, valid across all Schengen countries).",
          "Hotel booking confirmation or invitation from a host.",
          "Return tickets or confirmation of purpose of visit.",
          "Green Card — if driving your own vehicle.",
        ],
      },
      { type: "h2", text: "ComfortLine Driver Tips" },
      {
        type: "ul",
        items: [
          "Plan for Tuesday–Thursday — queues are 2–3 times shorter than on Fridays.",
          "Keep all documents in one folder — it genuinely speeds up the inspection.",
          "At Terespol, guards sometimes ask about the purpose of your visit verbally — answer clearly: tourism, business or transit.",
          "A1/MTS mobile signal works up to the Belarusian side; beyond that, Polish networks take over.",
          "Bring Polish złoty cash — card terminals exist on the Polish side but sometimes fail.",
        ],
      },
      {
        type: "link",
        href: "https://mon.declarant.by/#/zone",
        label: "Electronic queue at waiting zones — mon.declarant.by",
        description: "The best live queue information available online: the official Belarusian customs monitoring service for vehicle registration in the electronic border-crossing queue, including Brest and Domachevo, updated in real time. If the site doesn't load, try opening it with a VPN.",
      },
      { type: "liveQueue" },
      {
        type: "callout",
        text: "ComfortLine drivers monitor both crossings online. If needed, we reroute to Domachevo quickly so you don't lose unnecessary hours.",
      },
    ],
    bodyPl: [
      { type: "h2", text: "Czynne przejścia w 2026 roku" },
      { type: "p", text: "Dla samochodów osobowych działają trzy główne przejścia. Wybór ma duży wpływ na czas oczekiwania i powinien być częścią planowania podróży." },
      { type: "table", headers: ["Przejście BY", "Przejście PL", "Trasa", "Średni czas"], rows: [["Brześć", "Terespol", "M1 / E30 do Warszawy", "3–7 godz."], ["Domaczewo", "Sławatycze", "Objazd południowy", "1–3 godz."], ["Bruzgi", "Kuźnica Białostocka", "Grodno–Białystok", "2–5 godz."]] },
      { type: "h2", text: "Brześć–Terespol: najbardziej zatłoczone przejście" },
      { type: "p", text: "Najbardziej znane przejście leży bezpośrednio przy trasie M1. Obsługuje największy ruch samochodowy, dlatego od piątku do niedzieli i przed świętami kolejki mogą trwać 6–10 godzin. Najlepiej podróżować od wtorku do czwartku wcześnie rano." },
      { type: "h2", text: "Domaczewo: spokojniejsza alternatywa" },
      { type: "p", text: "Domaczewo znajduje się 43 km na południe od Brześcia. Trasa jest dłuższa o 60–80 km, ale kolejki bywają 2–3 razy krótsze. Droga do Warszawy przez Lublin wydłuża przejazd o około godzinę." },
      { type: "h2", text: "Bruzgi: kierunek północny" },
      { type: "p", text: "Przejście Bruzgi–Kuźnica jest wygodne dla podróżnych z Grodna oraz jadących do Białegostoku, Gdańska lub Trójmiasta. Z Mińska jest około 330 km. Kolejki są zwykle umiarkowane, lecz rosną latem." },
      { type: "h2", text: "Dokumenty potrzebne przy wjeździe do Polski" },
      { type: "ul", items: ["Paszport ważny co najmniej 3 miesiące po planowanym wyjeździe z UE.", "Wiza Schengen lub ważna karta pobytu w UE.", "Ubezpieczenie medyczne na minimum 30 000 €, ważne w całej strefie Schengen.", "Rezerwacja hotelu lub zaproszenie.", "Bilet powrotny albo potwierdzenie celu podróży.", "Wymagane ubezpieczenie pojazdu przy podróży własnym autem."] },
      { type: "h2", text: "Porady kierowców ComfortLine" },
      { type: "ul", items: ["Planuj wyjazd od wtorku do czwartku; kolejki są znacznie krótsze niż w piątek.", "Trzymaj dokumenty w jednej teczce.", "W Terespolu jasno podaj cel podróży: turystyka, biznes lub tranzyt.", "Zasięg białoruskich operatorów działa do granicy, dalej przełącz telefon na polską sieć.", "Miej przy sobie złote, ponieważ terminale po polskiej stronie czasami nie działają."] },
      { type: "link", href: "https://mon.declarant.by/#/zone", label: "Elektroniczna kolejka — mon.declarant.by", description: "Oficjalny monitoring kolejek w Brześciu i Domaczewie, aktualizowany w czasie rzeczywistym. Jeśli strona się nie otwiera, spróbuj użyć VPN." },
      { type: "liveQueue" },
      { type: "callout", text: "Kierowcy ComfortLine śledzą sytuację online. W razie potrzeby szybko zmieniamy trasę na Domaczewo, aby ograniczyć czas oczekiwania." }
    ],
    bodyFr: [
      { type: "h2", text: "Postes ouverts en 2026" },
      { type: "p", text: "Trois postes principaux accueillent les voitures particulières. Le choix du passage influence fortement l’attente et doit être intégré à la préparation du trajet." },
      { type: "table", headers: ["Poste BY", "Poste PL", "Itinéraire", "Délai moyen"], rows: [["Brest", "Terespol", "M1 / E30 vers Varsovie", "3–7 h"], ["Domachevo", "Sławatycze", "Contournement sud", "1–3 h"], ["Bruzgi", "Kuźnica Białostocka", "Grodno–Białystok", "2–5 h"]] },
      { type: "h2", text: "Brest–Terespol : le passage le plus fréquenté" },
      { type: "p", text: "Ce poste se trouve directement sur la M1 et concentre le plus grand trafic. Du vendredi au dimanche et avant les jours fériés, l’attente peut atteindre 6 à 10 heures. Privilégiez le mardi au jeudi, tôt le matin." },
      { type: "h2", text: "Domachevo : l’alternative plus calme" },
      { type: "p", text: "Domachevo se trouve 43 km au sud de Brest. Le trajet est plus long de 60 à 80 km, mais les files sont souvent deux à trois fois plus courtes. Le passage par Lublin ajoute environ une heure jusqu’à Varsovie." },
      { type: "h2", text: "Bruzgi : pour le nord de la Pologne" },
      { type: "p", text: "Bruzgi–Kuźnica convient aux voyageurs venant de Grodno ou se rendant à Białystok, Gdańsk et dans la Tricité. La distance depuis Minsk est d’environ 330 km. L’attente reste généralement modérée, sauf en été." },
      { type: "h2", text: "Documents nécessaires pour entrer en Pologne" },
      { type: "ul", items: ["Passeport valable au moins trois mois après la sortie prévue de l’UE.", "Visa Schengen ou titre de séjour européen valide.", "Assurance médicale d’au moins 30 000 €, valable dans tout l’espace Schengen.", "Réservation d’hôtel ou invitation.", "Billet retour ou justificatif du voyage.", "Assurance automobile requise si vous conduisez votre propre véhicule."] },
      { type: "h2", text: "Conseils des chauffeurs ComfortLine" },
      { type: "ul", items: ["Voyagez du mardi au jeudi ; les files sont nettement plus courtes que le vendredi.", "Regroupez tous les documents dans une pochette.", "À Terespol, indiquez clairement le motif : tourisme, affaires ou transit.", "Le réseau mobile biélorusse fonctionne jusqu’à la frontière, puis les opérateurs polonais prennent le relais.", "Prévoyez des zlotys en espèces, car les terminaux peuvent être indisponibles."] },
      { type: "link", href: "https://mon.declarant.by/#/zone", label: "File électronique — mon.declarant.by", description: "Suivi officiel en temps réel des files à Brest et Domachevo. Si le site ne s’ouvre pas, essayez avec un VPN." },
      { type: "liveQueue" },
      { type: "callout", text: "Les chauffeurs ComfortLine suivent la situation en ligne. Si nécessaire, nous passons rapidement par Domachevo afin d’éviter plusieurs heures d’attente." }
    ],
    related: ["стоимость-трансфер-минск-варшава", "что-нельзя-ввозить-в-ес", "аэропорт-варшавы-вав"],
    ctaRoute: { label: "Заказать трансфер Минск — Варшава", labelEn: "Book Minsk–Warsaw transfer", labelPl: "Zarezerwuj transfer Mińsk–Warszawa", labelFr: "Réserver le transfert Minsk–Varsovie", path: "/трансфер-минск-варшава-шопен" },
  },

  {
    slug: "аэропорт-риги-rix",
    slugEn: "riga-airport-guide-from-minsk-belarus",
    slugPl: "lotnisko-ryga-rix-przewodnik-z-minska-bialorusi",
    slugFr: "aeroport-riga-rix-guide-depuis-minsk-bielorussie",
    titleEn: "Riga Airport (RIX) Guide for Passengers from Minsk & Belarus",
    titlePl: "Lotnisko w Rydze (RIX): przewodnik dla pasażerów z Mińska i Białorusi",
    titleFr: "Aéroport de Riga (RIX) : guide pour les passagers de Minsk et Biélorussie",
    descriptionEn: "Complete guide to Riga Airport for travelers from Belarus: terminals, how to get there from Minsk, check-in tips and private transfer options.",
    descriptionPl: "Lotnisko RIX dla podróżnych z Białorusi: terminal, linie lotnicze, strefa spotkań, odprawa i prywatny transfer Mińsk–Ryga.",
    descriptionFr: "Guide de RIX pour les voyageurs de Biélorussie : terminal, compagnies, zone d’accueil, enregistrement et transfert Minsk–Riga.",
    ogSlug: "blog-airport-riga-rix",
    title: "Аэропорт Риги (RIX): гайд для пассажиров из Беларуси",
    description:
      "Всё об аэропорте Риги (RIX) для путешественников из Беларуси: терминал, авиакомпании, зона встречи, парковка, советы по трансферу Минск–Рига.",
    intro:
      "Международный аэропорт Риги (RIX) — третий по размеру хаб Балтии после Вильнюса и Таллина. Для жителей Беларуси он интересен рейсами airBaltic и другими направлениями, которых нет в Вильнюсе. Расстояние от Минска — около 470 км.",
    dateISO: "2026-04-28",
    readingMin: 5,
    category: "Аэропорт",
    tags: ["RIX", "Рига", "аэропорт", "Латвия"],
    body: [
      { type: "h2", text: "Почему Рига, а не Вильнюс?" },
      {
        type: "p",
        text: "Вильнюс ближе (175 км против 470 км), но Рига выигрывает по маршрутной сети: airBaltic летит из Риги в более чем 80 направлений. Рига лучше подходит для перелётов в скандинавские страны, Исландию, Канаду и некоторые азиатские направления, которых нет в VNO.",
      },
      { type: "h2", text: "Структура аэропорта" },
      {
        type: "p",
        text: "RIX — компактный аэропорт с одним терминалом и тремя пирсами (A, B, C). Пирс A — некоммерческие и региональные рейсы. Пирс B — Шенгенские рейсы. Пирс C — рейсы за пределы Шенгена. Навигация простая: указатели дублируются на латышском, английском и русском языках.",
      },
      {
        type: "table",
        headers: ["Авиакомпания", "Ключевые направления"],
        rows: [
          ["airBaltic", "Хельсинки, Амстердам, Лондон, Берлин, Дубай, Торонто"],
          ["Ryanair", "Бристоль, Дублин, Мадрид, Милан, Афины"],
          ["Wizz Air", "Вена, Берлин, Рим, Барселона"],
          ["Finnair", "Хельсинки (транзит по всему миру)"],
        ],
      },
      { type: "h2", text: "Зона прилёта и встречи" },
      {
        type: "p",
        text: "Зона встречи находится на первом этаже, выход из зоны прилёта — прямо в общий зал. Водители ComfortLine встречают с табличкой у выхода из таможенной зоны. Ориентир: кофейня-сеть Coffee & Chocolate у главного выхода.",
      },
      { type: "h2", text: "Советы перед вылетом" },
      {
        type: "ul",
        items: [
          "airBaltic требует онлайн-регистрацию — без неё сбор у стойки около €30.",
          "Ручная кладь: airBaltic разрешает только маленькую сумку бесплатно, за чемодан в салон — доплата.",
          "Бесплатный WiFi в аэропорту — подключается через SMS-верификацию (нужен латвийский или роуминговый номер).",
          "Магазины Duty Free — открываются за зоной паспортного контроля, цены на алкоголь заметно ниже рижских.",
          "Аэроэкспресс из центра Риги: автобус №22 ходит каждые 10–15 минут, 30 минут в пути.",
        ],
      },
      { type: "h2", text: "Трансфер Минск–Рига: что важно знать" },
      {
        type: "p",
        text: "Маршрут Минск–Рига проходит через границу Беларусь–Латвия (КПП Григоровщина / Патерниеки). Это менее загруженный переход, чем литовские — среднее время прохождения в будни 1,5–3 часа. Общее время в пути 7–9 часов. Рекомендуем выезжать с запасом 3–4 часа до вылета.",
      },
      {
        type: "callout",
        text: "ComfortLine выполняет трансферы в аэропорт Риги (RIX). Подача от двери, помощь с багажом, актуальная информация по очереди на границе — всё включено.",
      },
    ],
    categoryEn: "Airport",
    categoryPl: "Lotnisko",
    categoryFr: "Aéroport",
    introEn:
      "Riga International Airport (RIX) is the third-largest hub in the Baltics after Vilnius and Tallinn. For Belarusian travellers it is attractive for airBaltic routes and destinations not available from Vilnius. Distance from Minsk — around 470 km.",
    introPl: "Międzynarodowe lotnisko w Rydze (RIX) jest trzecim co do wielkości portem w krajach bałtyckich. Podróżnych z Białorusi przyciąga siatką airBaltic i kierunkami niedostępnymi z Wilna. Od Mińska dzieli je około 470 km.",
    introFr: "L’aéroport international de Riga (RIX) est le troisième hub des pays baltes. Il attire les voyageurs biélorusses grâce au réseau airBaltic et à des destinations absentes de Vilnius. Il se trouve à environ 470 km de Minsk.",
    bodyEn: [
      { type: "h2", text: "Why Riga Rather than Vilnius?" },
      {
        type: "p",
        text: "Vilnius is closer (175 km vs 470 km), but Riga wins on route network: airBaltic flies from Riga to more than 80 destinations. Riga is better for flights to Scandinavia, Iceland, Canada and certain Asian routes not available from VNO.",
      },
      { type: "h2", text: "Airport Layout" },
      {
        type: "p",
        text: "RIX is a compact single-terminal airport with three piers (A, B, C). Pier A — non-commercial and regional flights. Pier B — Schengen flights. Pier C — non-Schengen flights. Wayfinding is straightforward: signs are in Latvian, English and Russian.",
      },
      {
        type: "table",
        headers: ["Airline", "Key destinations"],
        rows: [
          ["airBaltic", "Helsinki, Amsterdam, London, Berlin, Dubai, Toronto"],
          ["Ryanair", "Bristol, Dublin, Madrid, Milan, Athens"],
          ["Wizz Air", "Vienna, Berlin, Rome, Barcelona"],
          ["Finnair", "Helsinki (global connections)"],
        ],
      },
      { type: "h2", text: "Arrivals and Meet-and-Greet" },
      {
        type: "p",
        text: "The meet-and-greet zone is on the ground floor; the arrivals exit leads directly into the main hall. ComfortLine drivers meet passengers with a name board at the customs exit. Landmark: the Coffee & Chocolate café near the main exit.",
      },
      { type: "h2", text: "Pre-Flight Tips" },
      {
        type: "ul",
        items: [
          "airBaltic requires online check-in — without it there is an approximately €30 desk fee.",
          "Carry-on: airBaltic allows only a small bag for free; a cabin bag incurs an extra charge.",
          "Free airport Wi-Fi connects via SMS verification (requires a Latvian or roaming number).",
          "Duty Free shops open after passport control — alcohol prices are noticeably lower than in Riga city.",
          "City bus No. 22 to Riga centre runs every 10–15 minutes; journey time 30 minutes.",
        ],
      },
      { type: "h2", text: "Minsk–Riga Transfer: Key Facts" },
      {
        type: "p",
        text: "The Minsk–Riga route passes through the Belarus–Latvia border (checkpoints Grigorovshchina / Patarnieki). This is a less congested crossing than the Lithuanian ones — average waiting time on weekdays is 1.5–3 hours. Total journey time is 7–9 hours. We recommend departing 3–4 hours before your flight.",
      },
      {
        type: "callout",
        text: "ComfortLine transfers to Riga Airport (RIX). Door-to-door pick-up, luggage assistance and live border queue information — all included.",
      },
    ],
    bodyPl: [
      { type: "h2", text: "Dlaczego Ryga zamiast Wilna?" },
      { type: "p", text: "Wilno jest bliżej, ale Ryga oferuje większą siatkę połączeń: airBaltic lata do ponad 80 miejsc. RIX jest szczególnie wygodny przy podróżach do Skandynawii, Islandii, Kanady i na wybrane kierunki azjatyckie." },
      { type: "h2", text: "Układ lotniska" },
      { type: "p", text: "RIX to kompaktowe lotnisko z jednym terminalem i trzema pirsami. A obsługuje loty regionalne, B loty Schengen, a C połączenia poza Schengen. Oznaczenia są po łotewsku, angielsku i rosyjsku." },
      { type: "table", headers: ["Linia", "Główne kierunki"], rows: [["airBaltic", "Helsinki, Amsterdam, Londyn, Berlin, Dubaj, Toronto"], ["Ryanair", "Bristol, Dublin, Madryt, Mediolan, Ateny"], ["Wizz Air", "Wiedeń, Berlin, Rzym, Barcelona"], ["Finnair", "Helsinki i połączenia światowe"]] },
      { type: "h2", text: "Przyloty i miejsce spotkania" },
      { type: "p", text: "Wyjście z przylotów prowadzi bezpośrednio do głównej hali na parterze. Kierowca ComfortLine czeka z tabliczką przy wyjściu ze strefy celnej. Punktem orientacyjnym jest kawiarnia Coffee & Chocolate przy głównym wyjściu." },
      { type: "h2", text: "Wskazówki przed wylotem" },
      { type: "ul", items: ["airBaltic wymaga odprawy online; odprawa przy stanowisku kosztuje około 30 €.", "Bezpłatny bagaż podręczny obejmuje małą torbę; większa walizka kabinowa jest dodatkowo płatna.", "Bezpłatne Wi-Fi wymaga weryfikacji SMS-em.", "Sklepy Duty Free znajdują się za kontrolą paszportową.", "Autobus miejski nr 22 kursuje do centrum co 10–15 minut; podróż trwa około 30 minut."] },
      { type: "h2", text: "Transfer Mińsk–Ryga: najważniejsze informacje" },
      { type: "p", text: "Trasa prowadzi przez przejście Hryhorowszczyna–Pāternieki na granicy Białoruś–Łotwa. Jest ono zwykle mniej zatłoczone niż przejścia litewskie; w dni robocze odprawa trwa przeciętnie 1,5–3 godziny. Cała podróż zajmuje 7–9 godzin, dlatego zalecamy dodatkowy zapas przed lotem." },
      { type: "callout", text: "ComfortLine realizuje transfery na lotnisko w Rydze. Odbiór spod drzwi, pomoc z bagażem i aktualne informacje o kolejce granicznej są wliczone w usługę." }
    ],
    bodyFr: [
      { type: "h2", text: "Pourquoi Riga plutôt que Vilnius ?" },
      { type: "p", text: "Vilnius est plus proche, mais Riga dispose d’un réseau plus vaste : airBaltic dessert plus de 80 destinations. RIX est particulièrement pratique pour la Scandinavie, l’Islande, le Canada et certaines liaisons asiatiques." },
      { type: "h2", text: "Organisation de l’aéroport" },
      { type: "p", text: "RIX est un aéroport compact avec un terminal et trois jetées. A accueille les vols régionaux, B les vols Schengen et C les vols hors Schengen. La signalisation est en letton, anglais et russe." },
      { type: "table", headers: ["Compagnie", "Destinations principales"], rows: [["airBaltic", "Helsinki, Amsterdam, Londres, Berlin, Dubaï, Toronto"], ["Ryanair", "Bristol, Dublin, Madrid, Milan, Athènes"], ["Wizz Air", "Vienne, Berlin, Rome, Barcelone"], ["Finnair", "Helsinki et correspondances mondiales"]] },
      { type: "h2", text: "Arrivées et point de rencontre" },
      { type: "p", text: "La sortie des arrivées mène directement au hall principal du rez-de-chaussée. Le chauffeur ComfortLine attend avec une pancarte à la sortie de la douane. Le café Coffee & Chocolate, près de la sortie principale, sert de repère." },
      { type: "h2", text: "Conseils avant le vol" },
      { type: "ul", items: ["airBaltic impose l’enregistrement en ligne ; le comptoir facture environ 30 €.", "Seul un petit sac est gratuit ; une valise cabine entraîne un supplément.", "Le Wi-Fi gratuit utilise une vérification par SMS.", "Les boutiques Duty Free se trouvent après le contrôle des passeports.", "Le bus urbain 22 rejoint le centre toutes les 10 à 15 minutes en environ 30 minutes."] },
      { type: "h2", text: "Transfert Minsk–Riga : informations essentielles" },
      { type: "p", text: "L’itinéraire passe par Grigorovshchina–Pāternieki à la frontière Biélorussie–Lettonie. Ce poste est généralement moins chargé que ceux de Lituanie ; en semaine, le passage prend en moyenne 1 h 30 à 3 h. Le trajet total dure 7 à 9 heures, avec une marge recommandée avant le vol." },
      { type: "callout", text: "ComfortLine assure les transferts vers l’aéroport de Riga. Prise en charge à domicile, aide aux bagages et informations actualisées sur la frontière sont incluses." }
    ],
    related: ["граница-беларусь-польша", "что-нельзя-ввозить-в-ес", "как-добраться-до-аэропорта-вильнюса"],
    ctaRoute: { label: "Заказать трансфер Минск — Рига (RIX)", labelEn: "Book Minsk–Riga (RIX) transfer", labelPl: "Zarezerwuj transfer Mińsk–Ryga (RIX)", labelFr: "Réserver le transfert Minsk–Riga (RIX)", path: "/трансфер-минск-рига-аэропорт" },
  },

  {
    slug: "автобус-минск-варшава-модлин-вильнюс",
    slugEn: "minsk-warsaw-vilnius-bus-vs-private-transfer",
    slugPl: "minsk-warszawa-wilno-autobus-czy-transfer-prywatny-2026",
    slugFr: "minsk-varsovie-vilnius-bus-ou-transfert-prive-2026",
    titleEn: "Minsk to Warsaw & Vilnius Airport: Bus vs Private Transfer Comparison 2026",
    titlePl: "Mińsk–Warszawa i Wilno: autobus czy prywatny transfer na lotnisko?",
    titleFr: "Minsk–Varsovie et Vilnius : bus ou transfert privé vers l’aéroport ?",
    descriptionEn: "Comparing buses, minibuses and private transfers from Minsk to Warsaw (Chopin, Modlin) and Vilnius airports in 2026: prices, comfort and wait times.",
    descriptionPl: "Porównanie autobusów, busów i prywatnych transferów z Mińska na lotniska Chopina, Modlin i Wilno w 2026 roku: czas, cena i wygoda.",
    descriptionFr: "Comparaison des bus, minibus et transferts privés de Minsk vers Chopin, Modlin et Vilnius en 2026 : durée, prix et confort.",
    ogSlug: "blog-avtobus-minsk-varshava-modlin-vilnius",
    title: "Автобус и маршрутка Минск — Варшава (Модлин, Шопен) и Вильнюс: всё о поездке в аэропорт в 2026",
    description:
      "Расписание и цены автобусов и маршруток Минск — Варшава (аэропорты Модлин WMI и Шопен WAW) и Минск — Вильнюс в 2026. Сравнение с частным трансфером: что выбрать для поездки на самолёт.",
    intro:
      "Большинство пассажиров, летящих через Варшаву или Вильнюс, первым делом ищут автобус или маршрутку — дёшево и привычно. Но для поездки именно в аэропорт у этого варианта есть несколько критических нюансов, которые стоит знать заранее, чтобы не опоздать на рейс.",
    dateISO: "2026-06-01",
    readingMin: 11,
    category: "Советы",
    tags: ["автобус", "маршрутка", "Минск Варшава", "Модлин", "Вильнюс", "аэропорт", "трансфер", "Шопен", "как добраться", "WMI", "WAW", "VNO"],
    body: [
      { type: "h2", text: "Автобусы и маршрутки Минск — Варшава: текущие варианты" },
      {
        type: "p",
        text: "Из Минска в Варшаву регулярно ходят рейсовые автобусы и частные маршрутки. Большинство маршрутов идут на варшавский автовокзал Zachodnia или в центр города — и это ключевой момент, если вы летите из аэропорта.",
      },
      {
        type: "table",
        headers: ["Перевозчик", "Тип", "Время в пути", "Цена от", "Багаж"],
        rows: [
          ["Ecolines", "Рейсовый автобус", "8–10 ч", "25–40 €", "1 чемодан включён"],
          ["Lux Express", "Рейсовый автобус", "8–10 ч", "25–45 €", "1 чемодан включён"],
          ["Частные маршрутки", "Микроавтобус", "7–9 ч", "20–35 €", "Ограничен, зависит от водителя"],
          ["ComfortLine (трансфер)", "Частный автомобиль", "6–8 ч", "По запросу", "Без ограничений"],
        ],
      },
      {
        type: "callout",
        text: "Автобусы Минск — Варшава прибывают на автовокзал Zachodnia в центре города. До аэропорта Шопен (WAW) оттуда 30–40 мин на городском автобусе или такси. До Модлина (WMI) — отдельный автобус Modlinbus, ещё 45–60 мин. Это критически важно при расчёте времени выезда.",
      },
      { type: "h2", text: "Минск — аэропорт Модлин (WMI): как добраться на автобусе" },
      {
        type: "p",
        text: "Аэропорт Варшава Модлин (WMI) находится в 35 км к северу от центра Варшавы. Прямых автобусов из Беларуси до Модлина нет — это важно понимать при планировании поездки.",
      },
      {
        type: "ul",
        items: [
          "Шаг 1: автобус или маршрутка Минск → Варшава (автовокзал Zachodnia или центр). Время: 7–10 часов.",
          "Шаг 2: переезд в Варшаве до станции Dworzec Centralny или Młociny на метро/такси. Время: 20–40 мин.",
          "Шаг 3: автобус Modlinbus до аэропорта WMI. Время: 45–60 мин, ходит каждые 30–60 мин.",
          "Итого в пути: 9–12 часов + 2 пересадки с чемоданами.",
        ],
      },
      {
        type: "p",
        text: "При этом Modlinbus работает не круглосуточно — ранние и поздние рейсы могут не совпасть с расписанием. Если ваш самолёт улетает в 6:00–8:00 утра или прилетает после 22:00, велик шанс, что автобус Modlinbus уже не ходит.",
      },
      { type: "h2", text: "Минск — аэропорт Варшавы Шопен (WAW): варианты на автобусе" },
      {
        type: "p",
        text: "Аэропорт Варшавы Шопен (WAW) расположен в 8 км от центра — добраться проще, чем до Модлина. От автовокзала Zachodnia до WAW курсирует городской автобус 175 и экспресс-автобус, время в пути 20–35 мин.",
      },
      {
        type: "ul",
        items: [
          "Автобус 175 (городской) от Zachodnia до WAW: ~30 мин, билет ~1,5 €.",
          "Такси от автовокзала до WAW: 15–20 мин, 15–25 €.",
          "Минимальный запас времени от выхода из автобуса до начала регистрации: 2,5–3 часа.",
          "Рейсовые автобусы часто задерживаются на границе — закладывайте буфер не менее 3–4 часов.",
        ],
      },
      { type: "h2", text: "Минск — аэропорт Вильнюса (VNO): автобус и маршрутка" },
      {
        type: "p",
        text: "Вильнюс ближе к Минску — около 170–180 км. Маршруток и рейсовых автобусов на этом направлении больше, конкуренция выше, цены ниже.",
      },
      {
        type: "table",
        headers: ["Вариант", "Время в пути", "Цена от", "До аэропорта VNO"],
        rows: [
          ["Ecolines (Минск → Вильнюс)", "3–4 ч", "10–20 €", "Автовокзал в центре, такси до VNO 15 мин / 10–12 €"],
          ["Lux Express (Минск → Вильнюс)", "3–4 ч", "12–22 €", "Автовокзал, такси или автобус №1 до VNO"],
          ["Частные маршрутки", "2,5–3,5 ч", "10–18 €", "Иногда довозят до аэропорта — уточняйте"],
          ["ComfortLine (трансфер)", "2,5–3 ч", "По запросу", "Прямо к терминалу вылета"],
        ],
      },
      {
        type: "p",
        text: "Аэропорт Вильнюса находится в 5 км от центра города. Городской автобус №1 довезёт от автовокзала за 20–25 мин. Такси — 10–15 €. Это самый реалистичный маршрут «на автобусе» из трёх направлений.",
      },
      { type: "h2", text: "Частный трансфер vs автобус: честное сравнение" },
      {
        type: "p",
        text: "Автобус и маршрутка — нормальный выбор для поездки в город. Для поездки в аэропорт на конкретный рейс картина другая:",
      },
      {
        type: "table",
        headers: ["Критерий", "Автобус / маршрутка", "Частный трансфер"],
        rows: [
          ["Откуда подача", "Фиксированная остановка", "От вашей двери"],
          ["Куда доставка", "Автовокзал в центре", "Прямо к терминалу"],
          ["Расписание", "Фиксированное, нельзя перенести", "Под ваш рейс"],
          ["Задержка на границе", "Ждут все пассажиры вместе", "Водитель контролирует ситуацию"],
          ["Чемоданы", "Ограничение по количеству и размеру", "Любой объём багажа"],
          ["Дети до 12 лет", "Без детского кресла", "Детское кресло по запросу"],
          ["Домашние животные", "Как правило, запрещены", "Разрешены"],
          ["Конфиденциальность", "Общий салон", "Только ваша группа"],
          ["Гарантия посадки на рейс", "Нет (задержки часты)", "Отслеживаем границу"],
          ["Цена за группу 3–4 человека", "30–80 € × кол-во мест", "По запросу"],
        ],
      },
      { type: "h2", text: "Когда автобус точно не подходит для поездки в аэропорт" },
      {
        type: "ul",
        items: [
          "Ранний вылет (до 8:00) или поздний прилёт (после 22:00) — автобусы не совпадают по расписанию, Modlinbus не ходит.",
          "Вы летите через Модлин (WMI) — 2 пересадки с чемоданами делают поездку очень рискованной.",
          "Едут 2 и более человека — суммарная цена автобусных билетов сопоставима с трансфером.",
          "Много багажа — чемоданы, лыжное снаряжение, детские коляски.",
          "С детьми до 12 лет — в автобусе нет детских кресел.",
          "Домашние животные — большинство перевозчиков не пропускают.",
          "Стыковочный рейс с ограниченным временем — задержка на границе закрывает вылет.",
          "Важная деловая поездка — опоздание на рейс означает срыв встреч.",
        ],
      },
      { type: "h2", text: "Что подготовить для поездки в аэропорт Варшавы или Вильнюса" },
      {
        type: "h3",
        text: "Документы",
      },
      {
        type: "ul",
        items: [
          "Загранпаспорт — срок действия не менее 3 месяцев после даты возвращения.",
          "Шенгенская виза или действующий ВНЖ страны ЕС.",
          "Посадочный талон — распечатанный или в приложении авиакомпании (скачайте офлайн-версию).",
          "Медицинская страховка на весь период поездки (минимум 30 000 €).",
          "Бронирование отеля или приглашение (могут спросить на границе).",
        ],
      },
      {
        type: "h3",
        text: "Тайминг: когда выезжать из Минска",
      },
      {
        type: "table",
        headers: ["Направление", "Время в пути", "Рекомендуемый запас", "Выезд при вылете в 12:00"],
        rows: [
          ["Минск → Модлин (WMI)", "9–12 ч (+ 2 пересадки)", "4 ч до вылета", "Накануне вечером"],
          ["Минск → Шопен (WAW)", "8–10 ч (+такси/автобус)", "3 ч до вылета", "01:00–02:00 ночи"],
          ["Минск → Вильнюс (VNO)", "3–4 ч (+ такси 15 мин)", "2,5 ч до вылета", "05:30–06:00"],
          ["Трансфер ComfortLine → WAW", "6–8 ч door-to-door", "2 ч до вылета", "02:00–04:00"],
          ["Трансфер ComfortLine → WMI", "6–8 ч door-to-door", "2 ч до вылета", "02:00–04:00"],
          ["Трансфер ComfortLine → VNO", "2,5–3 ч door-to-door", "2 ч до вылета", "07:00–07:30"],
        ],
      },
      {
        type: "h3",
        text: "Что взять в поездку",
      },
      {
        type: "ul",
        items: [
          "Наличные злотые (Польша) или евро/литы (Литва) — на такси, кофе, непредвиденные расходы.",
          "Польская/литовская SIM или роуминг — для навигации и связи после пересечения границы.",
          "Зарядка и пауэрбанк — дорога занимает 3–10 часов.",
          "Вода и еда в дорогу — особенно важно с детьми и при ранних выездах.",
          "Подушка и плед — для ночных поездок.",
          "Страховой полис в приложении или распечатанный.",
        ],
      },
      { type: "h2", text: "Частые вопросы о поездке в аэропорт Варшавы и Вильнюса" },
      {
        type: "h3",
        text: "Можно ли уехать на маршрутке и успеть на утренний рейс?",
      },
      {
        type: "p",
        text: "Зависит от аэропорта. На Вильнюс (VNO) — да, если вылет не раньше 10:00 и граница пройдёт быстро. На Варшаву Шопен (WAW) — рискованно при вылете раньше 13:00. На Модлин (WMI) — крайне рискованно при любом утреннем рейсе из-за 2 пересадок.",
      },
      {
        type: "h3",
        text: "Что будет, если автобус задержится на границе?",
      },
      {
        type: "p",
        text: "Автобус ждёт пока все пассажиры пройдут паспортный контроль — это может занять 1–4 часа. Пересесть на другой транспорт в середине очереди практически невозможно. Водитель частного трансфера отслеживает загруженность КПП и при необходимости перестраивается на другой пункт пропуска.",
      },
      {
        type: "h3",
        text: "Дешевле ли автобус, если едем вдвоём?",
      },
      {
        type: "p",
        text: "До Вильнюса — да, автобус выгоднее. До Варшавы вдвоём автобус стоит 50–90 €, плюс такси до аэропорта 15–25 € × 2 + риск задержки. Трансфер на двоих до WAW — цена по запросу, но без пересадок, от двери до терминала. При двух и более пассажирах разница часто оказывается меньше, чем кажется.",
      },
      {
        type: "h3",
        text: "Везут ли маршрутки прямо в аэропорт?",
      },
      {
        type: "p",
        text: "Некоторые частные маршрутки предлагают доставку до аэропорта Вильнюса — уточняйте при бронировании. До Варшавы такой опции практически нет: маршрутки идут в центр, дальше самостоятельно. Это стоит уточнять у конкретного перевозчика заранее.",
      },
      {
        type: "callout",
        text: "ComfortLine выполняет трансферы из любой точки Беларуси прямо к терминалу вылета — Модлин, Шопен или Вильнюс. Выезд в удобное вам время, детские кресла, помощь с багажом и актуальная информация по очереди на границе. Цена фиксирована — никаких сюрпризов.",
      },
    ],
    categoryEn: "Travel Tips",
    categoryPl: "Porady",
    categoryFr: "Conseils",
    introEn:
      "Most passengers flying through Warsaw or Vilnius start by searching for a bus or minibus — cheap and familiar. But for a trip to the airport specifically, this option has several critical nuances worth knowing in advance to avoid missing your flight.",
    introPl: "Większość pasażerów lecących przez Warszawę lub Wilno najpierw szuka autobusu albo busa — to rozwiązanie tanie i znane. Przy podróży na konkretny lot ma jednak kilka ważnych ograniczeń, które warto poznać, aby nie spóźnić się na samolot.",
    introFr: "La plupart des passagers passant par Varsovie ou Vilnius cherchent d’abord un bus ou un minibus, une solution économique et familière. Pour rejoindre un vol précis, elle présente toutefois plusieurs contraintes importantes à connaître afin de ne pas manquer l’avion.",
    bodyEn: [
      { type: "h2", text: "Buses and Minibuses Minsk–Warsaw: Current Options" },
      {
        type: "p",
        text: "Scheduled buses and private minibuses run regularly from Minsk to Warsaw. Most routes terminate at Warsaw's Zachodnia bus station or the city centre — and this is a crucial point if you are flying from an airport.",
      },
      {
        type: "table",
        headers: ["Operator", "Type", "Journey time", "From", "Luggage"],
        rows: [
          ["Ecolines", "Scheduled bus", "8–10 h", "€25–40", "1 suitcase included"],
          ["Lux Express", "Scheduled bus", "8–10 h", "€25–45", "1 suitcase included"],
          ["Private minibuses", "Minibus", "7–9 h", "€20–35", "Limited, driver-dependent"],
          ["ComfortLine (transfer)", "Private car", "6–8 h", "On request", "No limits"],
        ],
      },
      {
        type: "callout",
        text: "Minsk–Warsaw buses arrive at Zachodnia bus station in the city centre. From there to Chopin Airport (WAW): 30–40 min by city bus or taxi. To Modlin (WMI): a separate Modlinbus, another 45–60 min. This is critical when calculating your departure time.",
      },
      { type: "h2", text: "Minsk to Modlin Airport (WMI): Getting There by Bus" },
      {
        type: "p",
        text: "Warsaw Modlin Airport (WMI) is 35 km north of Warsaw city centre. There are no direct buses from Belarus to Modlin — this is important to understand when planning your trip.",
      },
      {
        type: "ul",
        items: [
          "Step 1: bus or minibus Minsk → Warsaw (Zachodnia or city centre). Time: 7–10 hours.",
          "Step 2: travel within Warsaw to Dworzec Centralny or Młociny by metro/taxi. Time: 20–40 min.",
          "Step 3: Modlinbus to WMI airport. Time: 45–60 min; runs every 30–60 min.",
          "Total journey: 9–12 hours + 2 connections with luggage.",
        ],
      },
      {
        type: "p",
        text: "Modlinbus does not operate around the clock — early-morning and late-night flights may not align with the timetable. If your plane departs at 6:00–8:00 or lands after 22:00, Modlinbus may no longer be running.",
      },
      { type: "h2", text: "Minsk to Chopin Airport Warsaw (WAW): Bus Options" },
      {
        type: "p",
        text: "Warsaw Chopin Airport (WAW) is 8 km from the city centre — easier to reach than Modlin. City bus 175 and the express bus run from Zachodnia to WAW, journey time 20–35 min.",
      },
      {
        type: "ul",
        items: [
          "Bus 175 (city) from Zachodnia to WAW: ~30 min, ticket ~€1.50.",
          "Taxi from bus station to WAW: 15–20 min, €15–25.",
          "Minimum buffer from stepping off the bus to check-in opening: 2.5–3 hours.",
          "Scheduled buses often get delayed at the border — allow a buffer of at least 3–4 hours.",
        ],
      },
      { type: "h2", text: "Minsk to Vilnius Airport (VNO): Bus and Minibus" },
      {
        type: "p",
        text: "Vilnius is closer to Minsk — about 170–180 km. There are more minibuses and scheduled buses on this route, more competition and lower prices.",
      },
      {
        type: "table",
        headers: ["Option", "Journey time", "From", "To VNO airport"],
        rows: [
          ["Ecolines (Minsk → Vilnius)", "3–4 h", "€10–20", "City bus station; taxi to VNO 15 min / €10–12"],
          ["Lux Express (Minsk → Vilnius)", "3–4 h", "€12–22", "Bus station, taxi or bus No.1 to VNO"],
          ["Private minibuses", "2.5–3.5 h", "€10–18", "Some go to the airport — confirm when booking"],
          ["ComfortLine (transfer)", "2.5–3 h", "On request", "Directly to the departure terminal"],
        ],
      },
      {
        type: "p",
        text: "Vilnius Airport is 5 km from the city centre. City bus No. 1 from the bus station takes 20–25 min. Taxi — €10–15. This is the most realistic 'bus option' of the three directions.",
      },
      { type: "h2", text: "Private Transfer vs Bus: An Honest Comparison" },
      {
        type: "p",
        text: "A bus or minibus is a perfectly reasonable choice for travelling to a city. For travelling to a specific airport for a specific flight, the picture changes:",
      },
      {
        type: "table",
        headers: ["Criterion", "Bus / minibus", "Private transfer"],
        rows: [
          ["Pick-up point", "Fixed stop", "From your door"],
          ["Drop-off point", "City bus station", "Directly to the terminal"],
          ["Schedule", "Fixed, cannot be changed", "Matched to your flight"],
          ["Border delay", "All passengers wait together", "Driver monitors the situation"],
          ["Luggage", "Quantity and size restrictions", "Any amount of luggage"],
          ["Children under 12", "No child seats", "Child seat on request"],
          ["Pets", "Generally prohibited", "Allowed"],
          ["Privacy", "Shared cabin", "Your group only"],
          ["Guarantee of making the flight", "None (delays are frequent)", "We track the border"],
          ["Price for a group of 3–4", "€30–80 × per seat", "On request"],
        ],
      },
      { type: "h2", text: "When a Bus Is Definitely Not Suitable for Airport Travel" },
      {
        type: "ul",
        items: [
          "Early departure (before 08:00) or late arrival (after 22:00) — buses don't align with timetables, Modlinbus doesn't run.",
          "You are flying via Modlin (WMI) — 2 connections with luggage make the journey very risky.",
          "Two or more passengers — the combined cost of bus tickets is comparable to a transfer.",
          "Heavy luggage — suitcases, ski equipment, pushchairs.",
          "With children under 12 — buses have no child seats.",
          "Pets — most operators don't allow them.",
          "Connecting flight with limited time — a border delay cancels your flight.",
          "An important business trip — missing a flight means missing meetings.",
        ],
      },
      { type: "h2", text: "What to Prepare for Your Airport Journey" },
      { type: "h3", text: "Documents" },
      {
        type: "ul",
        items: [
          "International passport — valid for at least 3 months beyond your return date.",
          "Schengen visa or valid EU residence permit.",
          "Boarding pass — printed or in the airline app (download the offline version).",
          "Medical insurance for the full trip duration (minimum €30,000).",
          "Hotel booking or invitation (may be requested at the border).",
        ],
      },
      { type: "h3", text: "Timing: When to Leave Minsk" },
      {
        type: "table",
        headers: ["Route", "Journey time", "Recommended buffer", "Departure for a 12:00 flight"],
        rows: [
          ["Minsk → Modlin (WMI)", "9–12 h (+ 2 connections)", "4 h before departure", "Evening before"],
          ["Minsk → Chopin (WAW)", "8–10 h (+taxi/bus)", "3 h before departure", "01:00–02:00"],
          ["Minsk → Vilnius (VNO)", "3–4 h (+ taxi 15 min)", "2.5 h before departure", "05:30–06:00"],
          ["ComfortLine transfer → WAW", "6–8 h door-to-door", "2 h before departure", "02:00–04:00"],
          ["ComfortLine transfer → WMI", "6–8 h door-to-door", "2 h before departure", "02:00–04:00"],
          ["ComfortLine transfer → VNO", "2.5–3 h door-to-door", "2 h before departure", "07:00–07:30"],
        ],
      },
      { type: "h3", text: "What to Pack" },
      {
        type: "ul",
        items: [
          "Polish złoty (Poland) or euros (Lithuania) in cash — for a taxi, coffee and unexpected costs.",
          "Polish/Lithuanian SIM or roaming — for navigation and calls after crossing the border.",
          "Charger and power bank — the journey takes 3–10 hours.",
          "Water and food — especially important with children and for early-morning departures.",
          "Travel pillow and blanket — for night journeys.",
          "Insurance policy in the app or printed.",
        ],
      },
      { type: "h2", text: "Frequently Asked Questions" },
      { type: "h3", text: "Can I take a minibus and make an early-morning flight?" },
      {
        type: "p",
        text: "It depends on the airport. For Vilnius (VNO) — yes, if the flight is no earlier than 10:00 and the border is quick. For Warsaw Chopin (WAW) — risky for departures before 13:00. For Modlin (WMI) — extremely risky for any morning flight due to 2 connections.",
      },
      { type: "h3", text: "What happens if the bus gets delayed at the border?" },
      {
        type: "p",
        text: "The bus waits until every passenger has cleared passport control — this can take 1–4 hours. Switching to another vehicle in the middle of the queue is virtually impossible. A private transfer driver monitors checkpoint congestion and can reroute to a different crossing if necessary.",
      },
      { type: "h3", text: "Is a bus cheaper if there are two of us?" },
      {
        type: "p",
        text: "To Vilnius — yes, the bus is cheaper. To Warsaw for two, two bus tickets come to €50–90 plus taxi to the airport €15–25 each, plus the risk of delay. A transfer for two to WAW is available on request — no connections, door to terminal. For two or more passengers the price difference is often smaller than it appears.",
      },
      { type: "h3", text: "Do minibuses go directly to the airport?" },
      {
        type: "p",
        text: "Some private minibuses offer drop-off at Vilnius Airport — confirm when booking. For Warsaw, this option barely exists: minibuses go to the city centre, from where you continue independently. Always check with the specific operator in advance.",
      },
      {
        type: "callout",
        text: "ComfortLine transfers from any point in Belarus directly to the departure terminal — Modlin, Chopin or Vilnius. Departure at a time convenient for you, child seats, luggage assistance and live border queue information. Fixed price — no surprises.",
      },
    ],
    bodyPl: [
      { type: "h2", text: "Autobusy i busy Mińsk–Warszawa: dostępne możliwości" },
      { type: "p", text: "Regularne autobusy i prywatne busy kursują z Mińska głównie na Dworzec Zachodni lub do centrum Warszawy. To ważne, ponieważ żaden z tych punktów nie jest terminalem lotniczym." },
      { type: "table", headers: ["Przewoźnik", "Rodzaj", "Czas", "Cena od", "Bagaż"], rows: [["Ecolines", "Autobus", "8–10 godz.", "25–40 €", "1 walizka"], ["Lux Express", "Autobus", "8–10 godz.", "25–45 €", "1 walizka"], ["Prywatne busy", "Minibus", "7–9 godz.", "20–35 €", "Zależnie od kierowcy"], ["ComfortLine", "Prywatny samochód", "6–8 godz.", "Na zapytanie", "Bez typowych ograniczeń"]] },
      { type: "callout", text: "Autobusy kończą trasę na Dworcu Zachodnim. Do lotniska Chopina trzeba doliczyć 30–40 minut, a do Modlina kolejne 45–60 minut i osobny przejazd." },
      { type: "h2", text: "Mińsk–Modlin (WMI) autobusem" },
      { type: "p", text: "Modlin leży 35 km na północ od Warszawy i nie ma bezpośredniego autobusu z Białorusi." },
      { type: "ul", items: ["Autobus Mińsk–Warszawa: 7–10 godzin.", "Przejazd z Dworca Zachodniego do centrum lub Młocin: 20–40 minut.", "Autobus do Modlina: 45–60 minut, zwykle co 30–60 minut.", "Łącznie 9–12 godzin i dwie przesiadki z bagażem."] },
      { type: "p", text: "Połączenia do Modlina nie kursują całą dobę. Przy lotach o 6:00–8:00 lub przylotach po 22:00 rozkład może nie zapewnić połączenia." },
      { type: "h2", text: "Mińsk–Lotnisko Chopina (WAW) autobusem" },
      { type: "p", text: "WAW znajduje się około 8 km od centrum. Z Dworca Zachodniego podróż komunikacją miejską lub taksówką trwa zwykle 20–35 minut." },
      { type: "ul", items: ["Komunikacja miejska: około 30 minut i około 1,5 €.", "Taksówka: 15–20 minut, zwykle 15–25 €.", "Od przyjazdu autobusu do rozpoczęcia odprawy zachowaj 2,5–3 godziny.", "Na możliwe opóźnienie graniczne dolicz co najmniej 3–4 godziny."] },
      { type: "h2", text: "Mińsk–Lotnisko w Wilnie (VNO)" },
      { type: "p", text: "Wilno leży około 170–180 km od Mińska. Połączeń autobusowych i busów jest więcej, a ceny są niższe niż na kierunku warszawskim." },
      { type: "table", headers: ["Opcja", "Czas", "Cena od", "Dojazd do VNO"], rows: [["Ecolines", "3–4 godz.", "10–20 €", "Dworzec i 15 minut taksówką"], ["Lux Express", "3–4 godz.", "12–22 €", "Dworzec, taksówka lub autobus"], ["Prywatny bus", "2,5–3,5 godz.", "10–18 €", "Czasem bezpośrednio — potwierdź"], ["ComfortLine", "2,5–3 godz.", "Na zapytanie", "Bezpośrednio pod terminal"]] },
      { type: "p", text: "Lotnisko znajduje się 5 km od centrum Wilna. Z dworca można dojechać autobusem miejskim w 20–25 minut lub taksówką." },
      { type: "h2", text: "Prywatny transfer a autobus" },
      { type: "p", text: "Autobus dobrze sprawdza się w podróży do miasta. Przy locie o konkretnej godzinie liczą się jednak bezpośredni dojazd i możliwość dopasowania wyjazdu." },
      { type: "table", headers: ["Kryterium", "Autobus / bus", "Prywatny transfer"], rows: [["Odbiór", "Stały przystanek", "Spod wskazanego adresu"], ["Cel", "Dworzec w centrum", "Terminal lotniska"], ["Rozkład", "Stały", "Dopasowany do lotu"], ["Granica", "Cała grupa czeka razem", "Kierowca monitoruje sytuację"], ["Bagaż", "Limity", "Dopasowany do grupy"], ["Dzieci", "Zwykle bez fotelika", "Fotelik na życzenie"], ["Zwierzęta", "Często niedozwolone", "Dozwolone po uzgodnieniu"], ["Prywatność", "Wspólny pojazd", "Tylko Twoja grupa"]] },
      { type: "h2", text: "Kiedy autobus nie nadaje się na podróż lotniczą" },
      { type: "ul", items: ["Wylot przed 8:00 lub przylot po 22:00.", "Podróż z małym dzieckiem wymagającym fotelika.", "Duża liczba walizek, sprzęt sportowy lub wózek.", "Podróż ze zwierzęciem.", "Grupa co najmniej trzech osób.", "Bilet lotniczy, którego nie można łatwo zmienić."] },
      { type: "h2", text: "Jak przygotować się do podróży" },
      { type: "h3", text: "Dokumenty" },
      { type: "ul", items: ["Ważny paszport i wiza lub karta pobytu.", "Ubezpieczenie medyczne.", "Bilet i potwierdzenie odprawy.", "Dokumenty dzieci oraz zgoda rodzicielska, jeśli jest wymagana."] },
      { type: "h3", text: "Kiedy wyjechać" },
      { type: "p", text: "Do VNO zaplanuj zwykły czas przejazdu oraz minimum 3 godziny rezerwy. Do WAW lub WMI dolicz czas na granicę, przejazd przez Warszawę i przesiadki; przy autobusie bezpieczny bufor powinien być większy." },
      { type: "h3", text: "Co spakować" },
      { type: "ul", items: ["Wodę i przekąski.", "Ładowarkę i powerbank.", "Gotówkę w euro i złotych.", "Dokumenty w łatwo dostępnej teczce.", "Polisę ubezpieczeniową w telefonie lub na papierze."] },
      { type: "h2", text: "Najczęstsze pytania" },
      { type: "h3", text: "Czy bus pozwoli zdążyć na poranny lot?" },
      { type: "p", text: "Do Wilna bywa to możliwe przy locie po 10:00. Do WAW przed 13:00 ryzyko jest większe, a do Modlina poranne połączenie z dwiema przesiadkami jest szczególnie ryzykowne." },
      { type: "h3", text: "Co jeśli autobus utknie na granicy?" },
      { type: "p", text: "Autobus czeka na odprawę wszystkich pasażerów i praktycznie nie może zmienić przejścia. Kierowca prywatnego transferu monitoruje obciążenie i może wcześniej zmienić trasę." },
      { type: "h3", text: "Czy dla dwóch osób autobus jest tańszy?" },
      { type: "p", text: "Do Wilna zwykle tak. Do Warszawy trzeba doliczyć dwa bilety, transfer miejski lub taksówkę i ryzyko opóźnienia. Przy kilku pasażerach różnica względem prywatnego samochodu często maleje." },
      { type: "h3", text: "Czy busy jadą bezpośrednio na lotnisko?" },
      { type: "p", text: "Niektóre busy dowożą do VNO, ale trzeba to potwierdzić. Na trasie warszawskiej większość kończy przejazd w centrum." },
      { type: "callout", text: "ComfortLine dowozi z dowolnego adresu na Białorusi bezpośrednio do terminalu Modlin, Chopina lub Wilno. Godzina wyjazdu, foteliki, pomoc z bagażem i monitoring granicy są dopasowane do podróży." }
    ],
    bodyFr: [
      { type: "h2", text: "Bus et minibus Minsk–Varsovie : solutions actuelles" },
      { type: "p", text: "Les lignes régulières et minibus privés arrivent principalement à la gare routière Zachodnia ou dans le centre de Varsovie, et non directement à l’aéroport." },
      { type: "table", headers: ["Transporteur", "Type", "Durée", "Prix dès", "Bagages"], rows: [["Ecolines", "Bus", "8–10 h", "25–40 €", "1 valise"], ["Lux Express", "Bus", "8–10 h", "25–45 €", "1 valise"], ["Minibus privés", "Minibus", "7–9 h", "20–35 €", "Selon le chauffeur"], ["ComfortLine", "Voiture privée", "6–8 h", "Sur demande", "Adapté au groupe"]] },
      { type: "callout", text: "Depuis Zachodnia, ajoutez 30 à 40 minutes vers Chopin et 45 à 60 minutes supplémentaires vers Modlin, avec une correspondance distincte." },
      { type: "h2", text: "Minsk–Modlin (WMI) en bus" },
      { type: "p", text: "Modlin se situe à 35 km au nord de Varsovie et aucun bus direct ne part de Biélorussie." },
      { type: "ul", items: ["Bus Minsk–Varsovie : 7 à 10 heures.", "Transfert de Zachodnia vers le centre ou Młociny : 20 à 40 minutes.", "Bus vers Modlin : 45 à 60 minutes, toutes les 30 à 60 minutes.", "Total : 9 à 12 heures et deux correspondances avec les bagages."] },
      { type: "p", text: "Les liaisons vers Modlin ne circulent pas toute la nuit. Elles conviennent mal aux départs entre 6 h et 8 h ou aux arrivées après 22 h." },
      { type: "h2", text: "Minsk–Varsovie-Chopin (WAW) en bus" },
      { type: "p", text: "WAW est à environ 8 km du centre. Depuis Zachodnia, le trajet en transport urbain ou taxi dure généralement 20 à 35 minutes." },
      { type: "ul", items: ["Transport urbain : environ 30 minutes et 1,50 €.", "Taxi : 15 à 20 minutes, généralement 15 à 25 €.", "Gardez 2 h 30 à 3 h entre l’arrivée du bus et l’enregistrement.", "Ajoutez au moins 3 à 4 heures de marge pour la frontière."] },
      { type: "h2", text: "Minsk–Aéroport de Vilnius (VNO)" },
      { type: "p", text: "Vilnius se trouve à environ 170–180 km de Minsk. Les bus et minibus sont plus nombreux et moins chers que vers Varsovie." },
      { type: "table", headers: ["Option", "Durée", "Prix dès", "Accès à VNO"], rows: [["Ecolines", "3–4 h", "10–20 €", "Gare puis taxi 15 min"], ["Lux Express", "3–4 h", "12–22 €", "Gare, taxi ou bus"], ["Minibus privé", "2 h 30–3 h 30", "10–18 €", "Parfois direct, à confirmer"], ["ComfortLine", "2 h 30–3 h", "Sur demande", "Directement au terminal"]] },
      { type: "p", text: "VNO se trouve à 5 km du centre de Vilnius. Depuis la gare, comptez 20 à 25 minutes en bus urbain ou un court trajet en taxi." },
      { type: "h2", text: "Transfert privé ou bus : comparaison" },
      { type: "table", headers: ["Critère", "Bus / minibus", "Transfert privé"], rows: [["Départ", "Arrêt fixe", "Votre adresse"], ["Arrivée", "Gare routière", "Terminal"], ["Horaire", "Fixe", "Adapté au vol"], ["Frontière", "Tout le groupe attend", "Le chauffeur surveille la situation"], ["Bagages", "Limités", "Adaptés au groupe"], ["Enfants", "Souvent sans siège", "Siège sur demande"], ["Animaux", "Souvent interdits", "Acceptés après accord"], ["Confidentialité", "Habitacle partagé", "Votre groupe uniquement"]] },
      { type: "h2", text: "Quand éviter le bus pour rejoindre un vol" },
      { type: "ul", items: ["Départ avant 8 h ou arrivée après 22 h.", "Voyage avec un jeune enfant nécessitant un siège.", "Nombreuses valises, poussette ou équipement sportif.", "Voyage avec un animal.", "Groupe de trois personnes ou plus.", "Billet aérien difficilement modifiable."] },
      { type: "h2", text: "Préparer le voyage" },
      { type: "h3", text: "Documents" },
      { type: "ul", items: ["Passeport et visa ou titre de séjour.", "Assurance médicale.", "Billet et confirmation d’enregistrement.", "Documents des enfants et autorisation parentale si nécessaire."] },
      { type: "h3", text: "Heure de départ" },
      { type: "p", text: "Pour VNO, ajoutez au temps normal au moins trois heures de marge. Pour WAW ou WMI, prévoyez davantage pour la frontière, Varsovie et les correspondances." },
      { type: "h3", text: "À emporter" },
      { type: "ul", items: ["Eau et collations.", "Chargeur et batterie externe.", "Espèces en euros et zlotys.", "Documents facilement accessibles.", "Police d’assurance numérique ou imprimée."] },
      { type: "h2", text: "Questions fréquentes" },
      { type: "h3", text: "Un minibus permet-il de prendre un vol matinal ?" },
      { type: "p", text: "Vers Vilnius, c’est parfois possible après 10 h. Pour WAW avant 13 h, le risque augmente. Pour un vol matinal à Modlin, les deux correspondances rendent le trajet particulièrement risqué." },
      { type: "h3", text: "Que se passe-t-il si le bus est bloqué à la frontière ?" },
      { type: "p", text: "Le bus attend que tous les passagers terminent le contrôle et ne peut pratiquement pas changer de poste. Un chauffeur privé surveille les files et peut adapter l’itinéraire plus tôt." },
      { type: "h3", text: "Le bus est-il moins cher à deux ?" },
      { type: "p", text: "Vers Vilnius, généralement oui. Vers Varsovie, ajoutez deux billets, le transport jusqu’à l’aéroport et le risque de retard. Avec plusieurs passagers, l’écart avec une voiture privée diminue." },
      { type: "h3", text: "Les minibus vont-ils directement à l’aéroport ?" },
      { type: "p", text: "Certains desservent VNO sur confirmation. Vers Varsovie, la plupart terminent dans le centre-ville." },
      { type: "callout", text: "ComfortLine conduit depuis toute adresse en Biélorussie directement aux terminaux de Modlin, Chopin ou Vilnius, avec horaire adapté, sièges enfant, aide aux bagages et suivi de la frontière." }
    ],
    related: ["стоимость-трансфер-минск-варшава", "аэропорт-варшавы-вав", "как-добраться-до-аэропорта-вильнюса"],
    ctaRoute: { label: "Рассчитать стоимость трансфера в аэропорт", labelEn: "Get a transfer quote to the airport", labelPl: "Poproś o wycenę transferu na lotnisko", labelFr: "Demander un devis pour le transfert aéroport", path: "/трансфер-минск-варшава-модлин" },
  },
  {
    slug: "виза-свободный-въезд-в-беларусь-2026",
    slugEn: "visa-free-entry-belarus-2026",
    slugPl: "bezwizowy-wjazd-na-bialorus-2026-przewodnik",
    slugFr: "entree-sans-visa-bielorussie-2026-guide",
    titleEn: "Visa-Free Entry to Belarus 2026: Complete Guide for European Citizens",
    titlePl: "Bezwizowy wjazd na Białoruś w 2026 roku: kompletny przewodnik",
    titleFr: "Entrée sans visa en Biélorussie en 2026 : guide complet",
    descriptionEn: "Which European countries can enter Belarus without a visa in 2026, which border checkpoints to use, required documents, and private transfer options.",
    descriptionPl: "Kto może wjechać na Białoruś bez wizy w 2026 roku, przez jakie przejścia, jakie dokumenty są wymagane i jak zorganizować prywatny transfer.",
    descriptionFr: "Qui peut entrer en Biélorussie sans visa en 2026, par quels postes, avec quels documents et comment organiser un transfert privé.",
    ogSlug: "blog-visa-free-belarus-2026",
    title: "Безвизовый въезд в Беларусь в 2026: полный гайд для граждан Европы",
    description:
      "Кто может въехать в Беларусь без визы в 2026 году, через какие КПП, какие документы нужны — и почему частный трансфер это самый удобный способ добраться. Официальные источники + советы от перевозчика.",
    intro:
      "Беларусь открыта для гостей из Европы: в 2026 году граждане десятков стран могут въехать без оформления визы. Замки Мир и Несвиж, Беловежская пуща, Брестская крепость, рестораны Минска — всё это доступно без визовых хлопот. Разбираем действующие режимы, нужные документы, пограничные переходы и лучший способ добраться.",
    dateISO: "2026-06-13",
    readingMin: 12,
    category: "Въезд в Беларусь",
    tags: ["безвиз", "въезд в Беларусь", "документы", "Европа", "туризм"],
    body: [
      {
        type: "callout",
        text: "Актуальный официальный список стран и условий безвизового въезда публикует Министерство иностранных дел Республики Беларусь: mfa.gov.by/visa/freemove/general/ — проверяйте перед поездкой, правила периодически обновляются.",
      },
      { type: "h2", text: "Два основных безвизовых режима в 2026 году" },
      {
        type: "p",
        text: "Беларусь предлагает два основных формата безвизового въезда, различающихся по способу прибытия: воздушный и наземный. Помимо них существуют специальные региональные программы (Гродненская область, Августовский канал). Важно заранее определить, какой режим подходит именно вам.",
      },
      {
        type: "table",
        headers: ["Режим", "Длительность", "Въезд через", "Охват стран"],
        rows: [
          ["Аэропорты Беларуси", "до 30 суток", "Нац. аэропорт Минск, аэропорты Бреста, Витебска, Гомеля, Гродно, Могилёва (кроме рейсов из РФ)", "76 государств"],
          ["Наземная граница (авто и ж/д)", "до 30 суток; для граждан Польши, Литвы, Латвии и лиц со статусом негражданина Латвии — до 90 суток", "Все международные автодорожные и железнодорожные КПП", "35 европейских государств"],
        ],
      },
      { type: "h2", text: "Режим 1 — через аэропорты Беларуси: до 30 суток" },
      {
        type: "p",
        text: "Граждане 76 государств — включая все страны Евросоюза, Великобританию, США, Канаду, Австралию, Японию и многие другие — могут прилететь в Беларусь без визы и остаться до 30 суток. Въезд возможен через Национальный аэропорт Минск, а также аэропорты Бреста, Витебска, Гомеля, Гродно и Могилёва. Важное исключение: рейсы, прилетающие из Российской Федерации, под этот режим не подпадают.",
      },
      {
        type: "ul",
        items: [
          "Срок пребывания — не более 30 суток со дня въезда.",
          "Въезд — через Нац. аэропорт Минск (MSQ), аэропорты Бреста, Витебска, Гомеля, Гродно, Могилёва.",
          "Режим не распространяется на прилетающих рейсами из России.",
          "Выезд — через любой пограничный переход.",
          "Цель визита — туризм, деловые встречи, транзит, посещение родственников.",
          "При себе обязательно: медицинская страховка с покрытием в Беларуси.",
        ],
      },
      {
        type: "callout",
        text: "Если вы летите в Минск из Варшавы, Вильнюса, Риги, Берлина или другого европейского города — этот режим действует автоматически. После прилёта можно добраться до нужного города в Беларуси частным трансфером, а выехать — через любой наземный или воздушный пункт пропуска.",
      },
      { type: "h2", text: "Режим 2 — наземная и железнодорожная граница: до 30 суток" },
      {
        type: "p",
        text: "Граждане 35 европейских государств могут въезжать в Беларусь через все международные автодорожные и железнодорожные пункты пропуска без визы — на срок до 30 суток со дня въезда. Для граждан Польши, Литвы, Латвии, а также лиц, имеющих статус негражданина Латвии, срок увеличен до 90 суток.",
      },
      {
        type: "ul",
        items: [
          "Въезд — через любой международный автодорожный или железнодорожный КПП.",
          "Срок пребывания — до 30 суток для большинства стран.",
          "Для граждан Польши, Литвы, Латвии и лиц со статусом негражданина Латвии — до 90 суток.",
          "Охват: 35 европейских государств (полный список — на сайте МИД РБ).",
          "Медицинская страховка обязательна.",
        ],
      },
      {
        type: "callout",
        text: "Граждане Польши, Литвы и Латвии могут находиться в Беларуси до 90 суток без визы — въезд через любой международный автодорожный или железнодорожный КПП.",
      },
      { type: "h3", text: "Специальные региональные программы" },
      {
        type: "p",
        text: "Помимо основных двух режимов, МИД Беларуси ведёт отдельные программы: посещение Гродненской области (до 15 суток, только через КПП Брузги, Берестовица, Песчатка на границе с Польшей) и зоны Августовского канала (до 10 суток, через КПП Лесная). Эти программы ограничены определёнными регионами страны и подходят для узкотематических туристических маршрутов.",
      },
      { type: "h2", text: "Страны с правом безвизового въезда" },
      {
        type: "p",
        text: "Полный и актуальный перечень публикуется на сайте МИД РБ. В числе стран, граждане которых могут въехать без визы через аэропорты Беларуси (76 государств):",
      },
      {
        type: "ul",
        items: [
          "Все 27 стран Европейского союза — Польша, Германия, Франция, Италия, Испания, Нидерланды, Швеция, Австрия, Бельгия, Дания, Финляндия, Греция, Чехия, Венгрия, Румыния, Болгария и другие.",
          "Великобритания, Швейцария, Норвегия, Исландия, Лихтенштейн.",
          "США, Канада, Австралия, Новая Зеландия.",
          "Япония, Южная Корея, Сингапур.",
          "Бразилия, Аргентина, Мексика.",
          "Всего 76 государств — полный список на mfa.gov.by/visa/freemove/general/",
        ],
      },
      {
        type: "link",
        href: "https://mfa.gov.by/visa/freemove/general/",
        label: "Официальный список стран и актуальные условия — МИД Республики Беларусь",
        description: "Проверяйте перед поездкой: правила могут обновляться",
      },
      { type: "h2", text: "Какие документы нужны на границе" },
      {
        type: "p",
        text: "Пакет документов небольшой, но каждый из них обязателен. Пограничники Беларуси проверяют их внимательно — лучше подготовиться заранее.",
      },
      {
        type: "ol",
        items: [
          "Действующий загранпаспорт — срок действия не менее 90 дней на момент въезда.",
          "Медицинская страховка, действующая на территории Беларуси, на весь срок пребывания. Минимальная страховая сумма — эквивалент 10 000 долларов США. Многие европейские полисы EHIC не покрывают Беларусь — уточняйте у страховщика.",
          "Документы, подтверждающие цель поездки: бронь отеля, приглашение, программа деловой встречи, туристический маршрут.",
          "Наличие средств к существованию — ориентировочно от 25–50 EUR в сутки (размер не фиксирован законодательно, оценивается индивидуально).",
          "Для несовершеннолетних без обоих родителей — нотариально заверенное согласие на выезд от родителей или законных представителей.",
        ],
      },
      { type: "h3", text: "Медицинская страховка: на что обратить внимание" },
      {
        type: "p",
        text: "Это самое распространённое основание для отказа во въезде. Важно: европейская карта медицинского страхования (EHIC) действует только в странах ЕС/ЕЭЗ, в Беларуси она не принимается. Потребуется отдельный полис. Оформить его можно онлайн за несколько минут — стоимость для поездки на 5–7 дней в Беларусь составляет 5–15 EUR в зависимости от страховщика.",
      },
      { type: "h3", text: "Нужна ли регистрация по месту пребывания" },
      {
        type: "p",
        text: "При размещении в отеле регистрацию оформляет гостиница автоматически. При проживании у частных лиц — хозяин жилья обязан зарегистрировать гостя в течение 5 рабочих дней через местный орган внутренних дел или портал gosuslugi.by. Нарушение этого требования может повлечь штраф при выезде.",
      },
      { type: "h2", text: "Почему частный трансфер — это лучший вариант для въезда в Беларусь" },
      {
        type: "p",
        text: "Большинство безвизовых туристов прилетают в Минск через промежуточный европейский аэропорт — Варшаву, Вильнюс, Ригу или Каунас. Дальше возникает вопрос: как добраться до Беларуси комфортно и без стресса? Автобусы и маршрутки существуют, но у них есть серьёзные ограничения.",
      },
      {
        type: "table",
        headers: ["Критерий", "Автобус/маршрутка", "Частный трансфер ComfortLine"],
        rows: [
          ["Место отправления", "Автобусная станция", "Ваш отель, аэропорт или адрес"],
          ["Место прибытия", "Автовокзал в Минске", "Ваш отель или адрес в Беларуси"],
          ["Расписание", "Фиксированное", "Под ваш рейс или удобное время"],
          ["Поддержка на границе", "Нет", "Водитель помогает, знает процедуру"],
          ["Время в пути", "4–7 ч + ожидание пересадки", "Прямо от точки А до точки Б"],
          ["Комфорт", "Сидячие места, ограничен багаж", "Бизнес-авто, кондиционер, wi-fi"],
          ["Детские кресла", "Нет", "По запросу, бесплатно"],
          ["Гибкость маршрута", "Нет", "Остановки, объезды — по желанию"],
        ],
      },
      { type: "h3", text: "Граница: почему с нами проще" },
      {
        type: "p",
        text: "Пересечение белорусско-литовской или белорусско-польской границы может занять от 2 до 8 часов в зависимости от дня недели и времени суток. Наши водители проходят этот маршрут регулярно — они знают, в каком окне меньше очередь, когда лучше выехать и как подготовить документы так, чтобы таможня прошла быстрее. Это особенно важно для тех, кто впервые пересекает границу Беларуси.",
      },
      {
        type: "ul",
        items: [
          "Водитель заранее предупредит, какой пакет документов нужно держать под рукой.",
          "Актуальная информация об очерёдности на КПП — отслеживаем в режиме реального времени.",
          "При длительном ожидании — комфортный автомобиль, климат-контроль, возможность поспать.",
          "Детские кресла, помощь с багажом — входит в стандарт.",
          "Вас встретят в аэропорту с табличкой и проводят к автомобилю.",
        ],
      },
      { type: "h2", text: "Популярные маршруты из Европы в Беларусь" },
      { type: "h3", text: "Вильнюс / Аэропорт VNO → Минск" },
      {
        type: "p",
        text: "Самый востребованный маршрут. Многие европейцы летят до Вильнюса — прямые рейсы из большинства европейских городов — а затем добираются до Беларуси наземным транспортом. Расстояние Вильнюс–Минск около 175 км. Пограничный переход Каменный Лог / Котловка. Время в пути с учётом границы — 3,5–6 часов.",
      },
      { type: "h3", text: "Варшава / Аэропорт WAW и Модлин → Минск" },
      {
        type: "p",
        text: "Варшава — крупнейший хаб для рейсов из Западной Европы, Северной Америки и Азии. От Варшавы до Минска около 550 км — это полноценная дорожная поездка. Граница в районе Тересполь / Брест-Тересполь. Маршрут популярен у тех, кто летит через Варшаву и хочет продолжить путь в Беларусь без пересадок.",
      },
      { type: "h3", text: "Каунас / Аэропорт KUN → Минск" },
      {
        type: "p",
        text: "Аэропорт Каунаса — база Ryanair и других лоукостеров. Прямые рейсы в Каунас из десятков европейских городов по выгодным тарифам. Расстояние Каунас–Минск около 270 км. Маршрут проходит через тот же белорусско-литовский погранпереход, что и Вильнюс.",
      },
      { type: "h3", text: "Рига / Аэропорт RIX → Минск" },
      {
        type: "p",
        text: "Рига — удобная точка въезда для путешественников из скандинавских стран и Прибалтики. Расстояние Рига–Минск около 470 км. Граница проходит через Григоровщину или Патарниеки. Время в пути — 5,5–8 часов с учётом пограничного контроля.",
      },
      { type: "h2", text: "Что посмотреть в Беларуси: топ-10 направлений" },
      {
        type: "p",
        text: "Беларусь удивляет гостей сочетанием природы, истории и доступных цен. Вот что стоит включить в маршрут:",
      },
      {
        type: "ul",
        items: [
          "Мирский замок — объект Всемирного наследия ЮНЕСКО, один из красивейших замков Восточной Европы. 100 км от Минска.",
          "Несвижский дворцово-парковый комплекс — резиденция рода Радзивиллов, тоже в списке ЮНЕСКО. Рядом с Миром.",
          "Брестская крепость — мощный мемориальный комплекс, символ стойкости. 350 км от Минска.",
          "Беловежская пуща — древнейший первобытный лес Европы, резиденция Деда Мороза, зубры в дикой природе.",
          "Гродно — исторический город с польским и литовским влиянием, старинные костёлы, замки, уютные кафе.",
          "Минск — современная столица с широкими проспектами, сталинской архитектурой, развитой гастросценой и музеями.",
          "Дудутки — этнографический музей под открытым небом с мастерскими, конными прогулками и белорусской кухней.",
          "Хатынь — мемориальный комплекс в память о сожжённых деревнях Беларуси.",
          "Страусиная ферма в Большой Своротве — неожиданно популярный аттракцион для семей с детьми.",
          "Августовский канал — живописный водный путь вдоль польско-белорусской границы, идеален для прогулок и велопоходов.",
        ],
      },
      { type: "h2", text: "Практические советы перед поездкой" },
      {
        type: "table",
        headers: ["Вопрос", "Ответ"],
        rows: [
          ["Нужна ли белорусская валюта?", "Белорусский рубль (BYN). Карты Visa/Mastercard принимают большинство магазинов и ресторанов, но иметь наличные полезно."],
          ["Работают ли карты в Беларуси?", "Карты, выпущенные в странах ЕС, могут не приниматься после 2022 года — уточняйте у банка. МИР, Union Pay работают."],
          ["Мобильный интернет?", "Роуминг ЕС в Беларуси не действует. Рекомендуем купить белорусскую SIM-карту (A1, MTS, life:)) по прилёту — от 5 BYN."],
          ["Безопасность?", "Беларусь традиционно считается одной из самых безопасных стран региона по уровню уличной преступности."],
          ["Языковой барьер?", "В Минске молодое поколение неплохо говорит по-английски, особенно в сфере туризма. В регионах — сложнее. Водители ComfortLine общаются на английском."],
        ],
      },
      { type: "h2", text: "Часто задаваемые вопросы" },
      { type: "h3", text: "Можно ли въехать по внутреннему паспорту ЕС?" },
      {
        type: "p",
        text: "Нет. Для въезда в Беларусь требуется только загранпаспорт. Внутренние удостоверения личности (ID-карты), действующие внутри ЕС, в Беларуси не принимаются.",
      },
      { type: "h3", text: "Нужна ли виза при въезде через польскую или литовскую границу?" },
      {
        type: "p",
        text: "Для граждан 35 европейских государств — нет: въезд через любой международный автодорожный или железнодорожный КПП возможен без визы на срок до 30 суток. Для граждан Польши, Литвы и Латвии срок увеличен до 90 суток. Граждане стран за пределами этого списка 35 государств для наземного въезда по-прежнему нуждаются в визе, однако могут воспользоваться аэропортовым режимом (76 государств, въезд через аэропорты Беларуси).",
      },
      { type: "h3", text: "Что будет, если превысить 30-дневный лимит?" },
      {
        type: "p",
        text: "Нарушение сроков пребывания влечёт административную ответственность — штраф и возможный запрет на въезд. Выезжайте строго до истечения разрешённого срока.",
      },
      { type: "h3", text: "Можно ли въехать и сразу выехать, чтобы обнулить дни?" },
      {
        type: "p",
        text: "Формально правила не запрещают повторный въезд после выезда. Однако пограничники могут усмотреть злоупотребление режимом и отказать во въезде. Для длительного пребывания рекомендуем оформить обычную визу.",
      },
      { type: "h3", text: "Можно ли работать в Беларуси по безвизовому режиму?" },
      {
        type: "p",
        text: "Нет. Безвизовый режим предполагает туристические и деловые поездки без трудоустройства. Для работы нужно соответствующее разрешение и виза.",
      },
      {
        type: "callout",
        text: "ComfortLine выполняет трансферы из Вильнюса, Каунаса, Варшавы, Риги и других европейских городов прямо до вашего адреса в Беларуси. Один звонок — и комфортный автомобиль с русскоязычным водителем заберёт вас у терминала прилёта. Детские кресла, помощь с документами на границе, актуальная информация об очередях — всё включено.",
      },
    ],
    categoryEn: "Entering Belarus",
    categoryPl: "Wjazd na Białoruś",
    categoryFr: "Entrée en Biélorussie",
    introEn:
      "Belarus is open to European visitors: in 2026, citizens of dozens of countries can enter without a visa. Mir and Nesvizh Castles, Białowieża Forest, Brest Fortress, Minsk restaurants — all of it without any visa paperwork. Here we cover the current entry regimes, required documents, border crossings and the most comfortable way to get there.",
    introPl: "Białoruś jest otwarta dla gości z Europy: w 2026 roku obywatele wielu państw mogą wjechać bez wcześniejszego uzyskania wizy. Wyjaśniamy obowiązujące tryby, wymagane dokumenty, przejścia graniczne i wygodne możliwości dojazdu.",
    introFr: "La Biélorussie accueille les visiteurs européens : en 2026, les citoyens de nombreux pays peuvent entrer sans demander de visa au préalable. Voici les régimes applicables, les documents, les postes-frontières et les solutions de transport.",
    bodyEn: [
      {
        type: "callout",
        text: "The official list of countries and visa-free entry conditions is published by the Ministry of Foreign Affairs of the Republic of Belarus: mfa.gov.by/visa/freemove/general/ — check before your trip, rules are updated periodically.",
      },
      { type: "h2", text: "Two Main Visa-Free Entry Regimes in 2026" },
      {
        type: "p",
        text: "Belarus offers two main visa-free entry formats differing by arrival method: by air and by land. There are also special regional programmes (Grodno region, Augustów Canal). It is important to determine which regime applies to you before you travel.",
      },
      {
        type: "table",
        headers: ["Regime", "Duration", "Entry via", "Countries covered"],
        rows: [
          [
            "Belarusian airports",
            "up to 30 days",
            "Minsk National Airport, airports of Brest, Vitebsk, Gomel, Grodno, Mogilev (except flights from Russia)",
            "76 states",
          ],
          [
            "Land border (road & rail)",
            "up to 30 days; citizens of Poland, Lithuania, Latvia and stateless persons of Latvia — up to 90 days",
            "All international road and railway border crossings",
            "35 European states",
          ],
        ],
      },
      { type: "h2", text: "Regime 1 — Belarusian Airports: Up to 30 Days" },
      {
        type: "p",
        text: "Citizens of 76 states — including all EU countries, the United Kingdom, USA, Canada, Australia, Japan and many others — can fly to Belarus without a visa and stay for up to 30 days. Entry is through Minsk National Airport as well as the airports of Brest, Vitebsk, Gomel, Grodno and Mogilev. Important exception: flights arriving from the Russian Federation do not fall under this regime.",
      },
      {
        type: "ul",
        items: [
          "Duration — no more than 30 days from the date of entry.",
          "Entry — through Minsk National Airport (MSQ), airports of Brest, Vitebsk, Gomel, Grodno, Mogilev.",
          "The regime does not apply to passengers arriving on flights from Russia.",
          "Exit — through any border crossing.",
          "Purpose — tourism, business meetings, transit, visiting relatives.",
          "Required: medical insurance valid in Belarus.",
        ],
      },
      {
        type: "callout",
        text: "If you are flying to Minsk from Warsaw, Vilnius, Riga, Berlin or any other European city — this regime applies automatically. After landing, a private transfer can take you anywhere in Belarus, and you can exit through any land or air checkpoint.",
      },
      { type: "h2", text: "Regime 2 — Land and Railway Border: Up to 30 Days" },
      {
        type: "p",
        text: "Citizens of 35 European states can enter Belarus through any international road or railway border crossing without a visa, for up to 30 days from the date of entry. Citizens of Poland, Lithuania, Latvia and stateless persons of Latvia are granted a longer stay of up to 90 days.",
      },
      {
        type: "ul",
        items: [
          "Entry — through any international road or railway border crossing.",
          "Duration — up to 30 days for most countries.",
          "For citizens of Poland, Lithuania, Latvia and stateless persons of Latvia — up to 90 days.",
          "Coverage: 35 European states (full list on the MFA website).",
          "Medical insurance is mandatory.",
        ],
      },
      {
        type: "callout",
        text: "Citizens of Poland, Lithuania and Latvia can stay in Belarus for up to 90 days without a visa — entry through any international road or railway border crossing.",
      },
      { type: "h3", text: "Special Regional Programmes" },
      {
        type: "p",
        text: "Beyond the two main regimes, the Belarusian MFA runs separate programmes: a visit to the Grodno region (up to 15 days, only through checkpoints Bruzgi, Berestovitsa, Peschatka on the Polish border) and the Augustów Canal zone (up to 10 days, through checkpoint Lesnaya). These programmes are restricted to specific areas and suit narrow themed itineraries.",
      },
      { type: "h2", text: "Countries with Visa-Free Entry Rights" },
      {
        type: "p",
        text: "The full and current list is published on the MFA website. Countries whose citizens can enter visa-free through Belarusian airports (76 states) include:",
      },
      {
        type: "ul",
        items: [
          "All 27 EU member states — Poland, Germany, France, Italy, Spain, Netherlands, Sweden, Austria, Belgium, Denmark, Finland, Greece, Czech Republic, Hungary, Romania, Bulgaria and others.",
          "United Kingdom, Switzerland, Norway, Iceland, Liechtenstein.",
          "USA, Canada, Australia, New Zealand.",
          "Japan, South Korea, Singapore.",
          "Brazil, Argentina, Mexico.",
          "76 states in total — full list at mfa.gov.by/visa/freemove/general/",
        ],
      },
      {
        type: "link",
        href: "https://mfa.gov.by/visa/freemove/general/",
        label: "Official list of countries and current conditions — Ministry of Foreign Affairs of Belarus",
        description: "Check before your trip: rules may be updated",
      },
      { type: "h2", text: "Documents Required at the Border" },
      {
        type: "p",
        text: "The document pack is short but every item is mandatory. Belarusian border guards check carefully — it is best to prepare in advance.",
      },
      {
        type: "ol",
        items: [
          "Valid international passport — at least 90 days of validity remaining at the time of entry.",
          "Medical insurance valid in Belarus for the entire duration of stay. Minimum coverage — equivalent to USD 10,000. Many European EHIC cards do not cover Belarus — check with your insurer.",
          "Documents confirming purpose of visit: hotel booking, invitation letter, business meeting agenda, tourist itinerary.",
          "Proof of sufficient funds — approximately EUR 25–50 per day (not fixed by law, assessed individually).",
          "For minors travelling without both parents — notarised parental consent.",
        ],
      },
      { type: "h3", text: "Medical Insurance: What to Check" },
      {
        type: "p",
        text: "This is the most common reason for entry refusal. Important: the European Health Insurance Card (EHIC) is valid only in EU/EEA countries and is not accepted in Belarus. A separate policy is required. You can get one online in minutes — a 5–7 day policy for Belarus typically costs EUR 5–15 depending on the insurer.",
      },
      { type: "h3", text: "Is Registration Required?" },
      {
        type: "p",
        text: "Hotels register guests automatically. If staying with a private individual, the host must register the guest within 5 working days through the local internal affairs office or via gosuslugi.by. Failure to comply may result in a fine upon departure.",
      },
      { type: "h2", text: "Why a Private Transfer Is the Best Way to Enter Belarus" },
      {
        type: "p",
        text: "Most visa-free tourists fly to Minsk via a European hub — Warsaw, Vilnius, Riga or Kaunas. Then comes the question: how to reach Belarus comfortably and without stress? Buses and shared minivans exist, but come with serious limitations.",
      },
      {
        type: "table",
        headers: ["Criteria", "Bus / minivan", "Private transfer ComfortLine"],
        rows: [
          ["Pick-up point", "Bus station", "Your hotel, airport or address"],
          ["Drop-off point", "Bus terminal in Minsk", "Your hotel or any address in Belarus"],
          ["Schedule", "Fixed timetable", "Matched to your flight or preferred time"],
          ["Border support", "None", "Driver assists, knows the procedure"],
          ["Journey time", "4–7 h + transfer wait", "Direct from A to B"],
          ["Comfort", "Seats, limited luggage", "Business car, A/C, Wi-Fi"],
          ["Child seats", "Not available", "On request, free of charge"],
          ["Route flexibility", "None", "Stops, detours — at your request"],
        ],
      },
      { type: "h3", text: "The Border: Why It Is Easier with Us" },
      {
        type: "p",
        text: "Crossing the Belarus–Lithuania or Belarus–Poland border can take anywhere from 2 to 8 hours depending on the day and time. Our drivers do this route regularly — they know which lane moves faster, when to set off, and how to prepare documents to speed up customs. This matters especially for first-time border crossers.",
      },
      {
        type: "ul",
        items: [
          "Your driver will tell you in advance which documents to have ready.",
          "Live queue information at border crossings — tracked in real time.",
          "During long waits — a comfortable car with climate control, a chance to sleep.",
          "Child seats, luggage assistance — included as standard.",
          "Meet-and-greet at the arrivals terminal with a name board.",
        ],
      },
      { type: "h2", text: "Popular Routes from Europe to Belarus" },
      { type: "h3", text: "Vilnius / VNO Airport → Minsk" },
      {
        type: "p",
        text: "The most popular route. Many Europeans fly to Vilnius — direct flights from most European cities — then travel on to Belarus by road. Vilnius–Minsk is around 175 km. Border crossing at Kamenny Log / Kotlovka. Journey time including the border: 3.5–6 hours.",
      },
      { type: "h3", text: "Warsaw / WAW and Modlin Airports → Minsk" },
      {
        type: "p",
        text: "Warsaw is the major hub for flights from Western Europe, North America and Asia. Warsaw to Minsk is about 550 km — a full road trip. Border crossing near Terespol / Brest. Popular for travellers connecting through Warsaw who want to continue to Belarus without additional transit.",
      },
      { type: "h3", text: "Kaunas / KUN Airport → Minsk" },
      {
        type: "p",
        text: "Kaunas Airport is a Ryanair and low-cost carrier base with direct flights from dozens of European cities at competitive fares. Kaunas–Minsk is around 270 km. The route passes through the same Belarus–Lithuania crossing as Vilnius.",
      },
      { type: "h3", text: "Riga / RIX Airport → Minsk" },
      {
        type: "p",
        text: "Riga is a convenient entry point for travellers from Scandinavia and the Baltic states. Riga–Minsk is around 470 km. The border crossing is at Grigorovshchina or Patarnieki. Journey time including border control: 5.5–8 hours.",
      },
      { type: "h2", text: "What to See in Belarus: Top 10 Destinations" },
      {
        type: "p",
        text: "Belarus surprises visitors with its combination of nature, history and affordable prices. Here is what to include on your itinerary:",
      },
      {
        type: "ul",
        items: [
          "Mir Castle — a UNESCO World Heritage Site, one of the finest castles in Eastern Europe. 100 km from Minsk.",
          "Nesvizh Palace and Park Complex — the Radziwiłł family residence, also UNESCO-listed. Close to Mir.",
          "Brest Fortress — a powerful memorial complex, a symbol of resilience. 350 km from Minsk.",
          "Białowieża Forest — the oldest primeval forest in Europe, home of wild European bison and Belarus's Father Frost residence.",
          "Grodno — a historic city with Polish and Lithuanian heritage, old churches, castles and cosy cafés.",
          "Minsk — a modern capital with wide boulevards, Stalinist architecture, a vibrant food scene and museums.",
          "Dudutki — an open-air ethnographic museum with craft workshops, horse riding and traditional Belarusian cuisine.",
          "Khatyn Memorial — a moving complex commemorating the villages destroyed during World War II.",
          "Ostrich Farm in Bolshaya Svorotva — a surprisingly popular attraction for families with children.",
          "Augustów Canal — a scenic waterway along the Polish–Belarusian border, ideal for walking and cycling.",
        ],
      },
      { type: "h2", text: "Practical Tips Before Your Trip" },
      {
        type: "table",
        headers: ["Question", "Answer"],
        rows: [
          ["Do I need Belarusian currency?", "Belarusian ruble (BYN). Cards are accepted at most shops and restaurants, but cash is useful."],
          ["Do cards work in Belarus?", "Cards issued in EU countries may not be accepted since 2022 — check with your bank. Mir and UnionPay work."],
          ["Mobile data?", "EU roaming does not apply in Belarus. We recommend buying a local SIM (A1, MTS, life:)) on arrival — from BYN 5."],
          ["Safety?", "Belarus is traditionally considered one of the safest countries in the region in terms of street crime."],
          ["Language barrier?", "In Minsk the younger generation speaks reasonable English, especially in tourism. In rural areas it is harder. ComfortLine drivers communicate in English."],
        ],
      },
      { type: "h2", text: "Frequently Asked Questions" },
      { type: "h3", text: "Can I enter on an EU national ID card?" },
      {
        type: "p",
        text: "No. Entry to Belarus requires an international passport. National identity cards (ID cards) valid within the EU are not accepted in Belarus.",
      },
      { type: "h3", text: "Is a visa needed when entering through the Polish or Lithuanian border?" },
      {
        type: "p",
        text: "For citizens of 35 European states — no: entry through any international road or railway border crossing is possible without a visa for up to 30 days. For citizens of Poland, Lithuania and Latvia the limit is 90 days. Citizens of countries outside that list still need a visa for land entry, but may use the airport regime (76 states, entry through Belarusian airports).",
      },
      { type: "h3", text: "What happens if I overstay the 30-day limit?" },
      {
        type: "p",
        text: "Overstaying is an administrative offence — a fine and a potential entry ban. Leave strictly before your permitted period expires.",
      },
      { type: "h3", text: "Can I exit and re-enter immediately to reset the days?" },
      {
        type: "p",
        text: "The rules do not formally prohibit re-entry after exit. However, border guards may treat it as abuse of the regime and refuse entry. For a longer stay we recommend obtaining a regular visa.",
      },
      { type: "h3", text: "Can I work in Belarus on the visa-free regime?" },
      {
        type: "p",
        text: "No. The visa-free regime covers tourist and business visits only, not employment. Work requires the appropriate permit and visa.",
      },
      {
        type: "callout",
        text: "ComfortLine operates transfers from Vilnius, Kaunas, Warsaw, Riga and other European cities directly to your address in Belarus. One call — and a comfortable car with an English-speaking driver will meet you at the arrivals terminal. Child seats, border document assistance, live queue information — all included.",
      },
    ],
    bodyPl: [
      { type: "callout", text: "Oficjalną listę państw i warunki ruchu bezwizowego publikuje Ministerstwo Spraw Zagranicznych Republiki Białorusi: mfa.gov.by/visa/freemove/general/ — sprawdź je przed podróżą, ponieważ przepisy są okresowo aktualizowane." },
      { type: "h2", text: "Dwa główne tryby bezwizowe w 2026 roku" },
      { type: "p", text: "Białoruś oferuje dwa główne tryby bezwizowego wjazdu, zależne od sposobu przybycia: drogą lotniczą oraz lądową. Istnieją także specjalne programy regionalne dla obwodu grodzieńskiego i Kanału Augustowskiego." },
      { type: "table", headers: ["Tryb", "Długość pobytu", "Wjazd przez", "Liczba państw"], rows: [["Lotniska Białorusi", "do 30 dni", "Mińsk oraz lotniska Brześcia, Witebska, Homla, Grodna i Mohylewa (z wyjątkiem lotów z Rosji)", "76 państw"], ["Granica lądowa (droga i kolej)", "do 30 dni; obywatele Polski, Litwy i Łotwy oraz osoby ze statusem nieobywatela Łotwy — do 90 dni", "Wszystkie międzynarodowe drogowe i kolejowe przejścia graniczne", "35 państw europejskich"]] },
      { type: "h2", text: "Tryb 1 — przez lotniska Białorusi: do 30 dni" },
      { type: "p", text: "Obywatele 76 państw, w tym wszystkich krajów UE, Wielkiej Brytanii, USA, Kanady, Australii i Japonii, mogą przylecieć bez wizy i pozostać do 30 dni. Wyjątek stanowią loty przylatujące z Federacji Rosyjskiej." },
      { type: "ul", items: ["Pobyt nie dłuższy niż 30 dni od dnia wjazdu.", "Wjazd przez lotnisko Mińsk (MSQ) oraz lotniska Brześcia, Witebska, Homla, Grodna i Mohylewa.", "Tryb nie obejmuje pasażerów przylatujących z Rosji.", "Wyjazd przez dowolne przejście graniczne.", "Cel: turystyka, spotkania biznesowe, tranzyt lub odwiedziny u rodziny.", "Obowiązkowe ubezpieczenie medyczne ważne na Białorusi."] },
      { type: "callout", text: "Jeżeli lecisz do Mińska z Warszawy, Wilna, Rygi, Berlina lub innego miasta europejskiego, ten tryb stosuje się automatycznie. Po przylocie możesz skorzystać z prywatnego transferu, a wyjechać przez dowolne przejście lądowe lub lotnicze." },
      { type: "h2", text: "Tryb 2 — granica drogowa i kolejowa: do 30 dni" },
      { type: "p", text: "Obywatele 35 państw europejskich mogą wjechać bez wizy przez wszystkie międzynarodowe drogowe i kolejowe przejścia graniczne na okres do 30 dni. Dla obywateli Polski, Litwy i Łotwy oraz nieobywateli Łotwy okres ten wynosi do 90 dni." },
      { type: "ul", items: ["Wjazd przez dowolne międzynarodowe przejście drogowe lub kolejowe.", "Do 30 dni dla większości państw.", "Do 90 dni dla obywateli Polski, Litwy i Łotwy oraz nieobywateli Łotwy.", "Program obejmuje 35 państw europejskich — pełna lista znajduje się na stronie MSZ.", "Ubezpieczenie medyczne jest obowiązkowe."] },
      { type: "callout", text: "Obywatele Polski, Litwy i Łotwy mogą przebywać na Białorusi bez wizy do 90 dni, wjeżdżając przez dowolne międzynarodowe przejście drogowe lub kolejowe." },
      { type: "h3", text: "Specjalne programy regionalne" },
      { type: "p", text: "Dodatkowe programy obejmują obwód grodzieński — do 15 dni przez wybrane przejścia na granicy z Polską — oraz strefę Kanału Augustowskiego — do 10 dni. Są ograniczone do wskazanych regionów." },
      { type: "h2", text: "Państwa objęte ruchem bezwizowym" },
      { type: "p", text: "Pełną aktualną listę publikuje białoruskie MSZ. Wśród 76 państw objętych trybem lotniskowym znajdują się:" },
      { type: "ul", items: ["Wszystkie 27 państw UE, w tym Polska, Niemcy, Francja, Włochy, Hiszpania, Czechy, Węgry, Rumunia i Bułgaria.", "Wielka Brytania, Szwajcaria, Norwegia, Islandia i Liechtenstein.", "USA, Kanada, Australia i Nowa Zelandia.", "Japonia, Korea Południowa i Singapur.", "Brazylia, Argentyna i Meksyk.", "Łącznie 76 państw — pełna lista na mfa.gov.by/visa/freemove/general/."] },
      { type: "link", href: "https://mfa.gov.by/visa/freemove/general/", label: "Oficjalna lista państw i aktualne warunki — MSZ Republiki Białorusi", description: "Sprawdź przed podróżą: przepisy mogą się zmieniać" },
      { type: "h2", text: "Dokumenty wymagane na granicy" },
      { type: "p", text: "Lista dokumentów jest krótka, ale każdy z nich jest obowiązkowy. Najlepiej przygotować wszystko przed wyjazdem." },
      { type: "ol", items: ["Ważny paszport — co najmniej 90 dni ważności w chwili wjazdu.", "Ubezpieczenie medyczne ważne na Białorusi przez cały pobyt, z ochroną co najmniej 10 000 USD. Karta EKUZ nie wystarcza.", "Dokument potwierdzający cel podróży: rezerwacja hotelu, zaproszenie, program spotkania lub plan turystyczny.", "Środki na utrzymanie — orientacyjnie 25–50 EUR dziennie, oceniane indywidualnie.", "Dla małoletnich podróżujących bez obojga rodziców — notarialna zgoda rodziców lub opiekunów."] },
      { type: "h3", text: "Ubezpieczenie medyczne: co sprawdzić" },
      { type: "p", text: "Brak odpowiedniej polisy jest częstą przyczyną odmowy wjazdu. EKUZ nie obowiązuje na Białorusi. Osobną polisę na 5–7 dni można zwykle kupić online za około 5–15 EUR." },
      { type: "h3", text: "Czy trzeba się zarejestrować" },
      { type: "p", text: "Hotel rejestruje gościa automatycznie. Przy pobycie prywatnym gospodarz musi dokonać rejestracji w ciągu 5 dni roboczych w urzędzie spraw wewnętrznych lub przez gosuslugi.by. Brak rejestracji może skutkować grzywną." },
      { type: "h2", text: "Dlaczego prywatny transfer jest najwygodniejszy" },
      { type: "p", text: "Wielu podróżnych dociera przez Warszawę, Wilno, Rygę lub Kowno. Autobusy istnieją, ale prywatny transfer zapewnia bezpośredni przejazd, elastyczną godzinę i pomoc na granicy." },
      { type: "table", headers: ["Kryterium", "Autobus / bus", "Prywatny transfer ComfortLine"], rows: [["Odbiór", "Dworzec autobusowy", "Hotel, lotnisko lub wskazany adres"], ["Cel", "Dworzec w Mińsku", "Dowolny adres na Białorusi"], ["Rozkład", "Stały", "Dopasowany do lotu"], ["Pomoc na granicy", "Brak", "Kierowca zna procedurę i pomaga"], ["Czas", "4–7 godz. plus przesiadki", "Bezpośrednio od A do B"], ["Komfort", "Ograniczony bagaż", "Auto biznesowe, klimatyzacja, Wi‑Fi"], ["Foteliki", "Brak", "Bezpłatnie na życzenie"], ["Elastyczność", "Brak", "Postoje i objazdy na życzenie"]] },
      { type: "h3", text: "Granica: dlaczego z nami jest łatwiej" },
      { type: "p", text: "Przekroczenie granicy z Litwą lub Polską może potrwać 2–8 godzin. Nasi kierowcy regularnie pokonują te trasy, monitorują kolejki i pomagają przygotować dokumenty." },
      { type: "ul", items: ["Kierowca wcześniej przypomni, które dokumenty przygotować.", "Kolejki na przejściach monitorujemy na bieżąco.", "Podczas oczekiwania masz klimatyzowany samochód i możliwość odpoczynku.", "Foteliki dziecięce i pomoc z bagażem są w standardzie.", "Odbiór w terminalu z tabliczką imienną."] },
      { type: "h2", text: "Popularne trasy z Europy na Białoruś" },
      { type: "h3", text: "Wilno / lotnisko VNO → Mińsk" },
      { type: "p", text: "Najpopularniejsza trasa ma około 175 km. Przejazd przez Kamienny Łog lub Kotłówkę wraz z kontrolą graniczną trwa zwykle 3,5–6 godzin." },
      { type: "h3", text: "Warszawa / lotniska WAW i Modlin → Mińsk" },
      { type: "p", text: "Warszawa jest dużym hubem dla lotów z Europy Zachodniej, Ameryki Północnej i Azji. Trasa około 550 km prowadzi przez Terespol i Brześć." },
      { type: "h3", text: "Kowno / lotnisko KUN → Mińsk" },
      { type: "p", text: "Lotnisko w Kownie obsługuje wiele tanich połączeń. Do Mińska jest około 270 km, a trasa prowadzi przez granicę białorusko-litewską." },
      { type: "h3", text: "Ryga / lotnisko RIX → Mińsk" },
      { type: "p", text: "Ryga jest wygodna dla podróżnych ze Skandynawii i krajów bałtyckich. Trasa około 470 km przez Grigorowszczynę lub Pāternieki trwa wraz z granicą około 5,5–8 godzin." },
      { type: "h2", text: "Co zobaczyć na Białorusi: 10 miejsc" },
      { type: "p", text: "Białoruś łączy przyrodę, historię i przystępne ceny. Warto uwzględnić:" },
      { type: "ul", items: ["Zamek w Mirze — obiekt UNESCO, 100 km od Mińska.", "Pałac i park w Nieświeżu — rezydencja Radziwiłłów, również UNESCO.", "Twierdza Brzeska — monumentalny kompleks pamięci.", "Puszcza Białowieska — pierwotny las i siedlisko żubrów.", "Grodno — historyczne miasto z polskim i litewskim dziedzictwem.", "Mińsk — szerokie aleje, architektura, restauracje i muzea.", "Dudutki — skansen rzemiosła i kuchni białoruskiej.", "Memoriał Chatyń — miejsce pamięci wsi zniszczonych podczas wojny.", "Farma strusi w Wielkiej Sworotwie — atrakcja rodzinna.", "Kanał Augustowski — malownicza trasa piesza i rowerowa."] },
      { type: "h2", text: "Praktyczne wskazówki" },
      { type: "table", headers: ["Pytanie", "Odpowiedź"], rows: [["Waluta?", "Rubel białoruski (BYN); karty są powszechne, ale gotówka bywa przydatna."], ["Czy działają karty?", "Karty wydane w UE mogą nie działać — sprawdź w banku. Działają Mir i UnionPay."], ["Internet mobilny?", "Roaming UE nie obowiązuje. Lokalną kartę SIM A1, MTS lub life:) kupisz od około 5 BYN."], ["Bezpieczeństwo?", "Białoruś ma tradycyjnie niski poziom przestępczości ulicznej."], ["Język?", "W turystyce w Mińsku można porozumieć się po angielsku; kierowcy ComfortLine obsługują klientów po angielsku."]] },
      { type: "h2", text: "Najczęściej zadawane pytania" },
      { type: "h3", text: "Czy można wjechać z dowodem osobistym UE?" },
      { type: "p", text: "Nie. Wymagany jest paszport; dowód osobisty ważny w UE nie jest akceptowany." },
      { type: "h3", text: "Czy przy wjeździe z Polski lub Litwy potrzebna jest wiza?" },
      { type: "p", text: "Obywatele 35 państw europejskich mogą wjechać bez wizy na 30 dni, a obywatele Polski, Litwy i Łotwy — na 90 dni. Pozostali powinni sprawdzić tryb lotniskowy lub uzyskać wizę." },
      { type: "h3", text: "Co grozi za przekroczenie dozwolonego pobytu?" },
      { type: "p", text: "Jest to wykroczenie administracyjne, które może oznaczać grzywnę i zakaz ponownego wjazdu." },
      { type: "h3", text: "Czy można wyjechać i od razu wrócić, aby liczyć dni od nowa?" },
      { type: "p", text: "Przepisy formalnie tego nie zakazują, ale straż graniczna może uznać to za nadużycie i odmówić wjazdu. Przy dłuższym pobycie zalecana jest zwykła wiza." },
      { type: "h3", text: "Czy można pracować w trybie bezwizowym?" },
      { type: "p", text: "Nie. Ruch bezwizowy obejmuje turystykę i wizyty biznesowe bez zatrudnienia. Do pracy potrzebne są odpowiednie zezwolenie i wiza." },
      { type: "callout", text: "ComfortLine realizuje transfery z Wilna, Kowna, Warszawy, Rygi i innych miast Europy pod wskazany adres na Białorusi. Foteliki dziecięce, pomoc z dokumentami i aktualne informacje o kolejkach są wliczone." },
    ],
    related: ["граница-беларусь-литва", "аэропорт-варшавы-вав", "как-добраться-до-аэропорта-вильнюса"],
    ctaRoute: { label: "Забронировать трансфер из Европы в Беларусь", labelEn: "Book a transfer from Europe to Belarus", labelPl: "Zarezerwuj transfer z Europy na Białoruś", path: "/трансфер-минск-вильнюс-аэропорт" },
  },
  {
    slug: "вывоз-60-евро-в-беларусь-из-литвы-латвии",
    slugEn: "eu-60-euro-cash-limit-belarus-lithuania-latvia",
    titleEn: "Why You Can't Take More Than €60 in Cash From Lithuania or Latvia to Belarus (2026)",
    descriptionEn: "The EU sanctions rule that limits cash euro banknotes crossing from Lithuania or Latvia into Belarus to €60 per person — legal basis, how checks work in practice, and what happens if you carry more.",
    ogSlug: "blog-60-evro-litva-latvia-belarus",
    title: "Почему из Литвы и Латвии в Беларусь нельзя вывезти больше 60 евро наличными (2026)",
    description:
      "Разбираем санкционное правило ЕС, которое ограничивает вывоз наличных евро из Литвы и Латвии в Беларусь суммой 60 евро на человека: откуда оно взялось, как проверяют на границе и что делать, если у вас больше.",
    intro:
      "Если вы едете из Литвы или Латвии в Беларусь и везёте с собой наличные евро — важно знать: с 2022 года действует санкционное правило Евросоюза, которое фактически ограничивает сумму наличных евро при выезде в Беларусь суммой 60 € на человека. Разбираем, откуда это взялось, как это проверяют на границе и как не попасть в неприятную ситуацию.",
    dateISO: "2026-06-28",
    readingMin: 7,
    category: "Граница",
    tags: ["наличные", "евро", "Литва", "Латвия", "санкции", "граница", "60 евро"],
    body: [
      { type: "h2", text: "Откуда взялось ограничение «не больше 60 евро»" },
      {
        type: "p",
        text:
          "В марте 2022 года Совет ЕС ввёл запрет на продажу, поставку, передачу или экспорт банкнот, номинированных в валюте любого государства-члена ЕС (включая евро), в адрес Беларуси, правительства и Национального банка Беларуси или для использования в Беларуси. Это часть общего санкционного пакета, изначально направленного на евро, а затем расширенного на все валюты стран ЕС.",
      },
      {
        type: "p",
        text:
          "У этого запрета есть исключение: он не касается передачи банкнот, необходимых для личных нужд физических лиц, которые едут в Беларусь, или членов их семьи, сопровождающих их в поездке. Именно в рамках этого «личного» исключения таможенные и пограничные службы Литвы и Латвии на практике установили порог — 60 евро наличными на одного человека. Суммы выше этого порога считаются выходящими за пределы «личных нужд» и подпадают под запрет.",
      },
      {
        type: "link",
        href: "https://eur-lex.europa.eu/eli/reg/2006/765/oj/eng",
        label: "Регламент Совета (ЕС) № 765/2006 — официальный текст на EUR-Lex",
        description: "Базовый санкционный регламент ЕС в отношении Беларуси, включающий запрет на вывоз банкнот стран ЕС (в редакции 2022–2026 гг.)",
      },
      { type: "h2", text: "Как правило действует на литовской и латвийской границе" },
      {
        type: "table",
        headers: ["Страна выезда", "Лимит наличных евро", "Другие валюты"],
        rows: [
          ["Литва → Беларусь", "до 60 € на человека", "без ограничения суммы (до 10 000 € в декларацию)"],
          ["Латвия → Беларусь", "до 60 € на человека", "без ограничения суммы (до 10 000 € в декларацию)"],
          ["Беларусь → ЕС (въезд)", "запрета на ввоз евро нет", "—"],
        ],
      },
      {
        type: "p",
        text:
          "Важно понимать: ограничение действует только в одном направлении — при вывозе наличных евро (и других валют ЕС) ИЗ Литвы и Латвии В Беларусь. Обратный ввоз евро из Беларуси в страны ЕС не запрещён. Проверки проводятся выборочно — сотрудник таможни или пограничной службы может попросить показать содержимое кошелька при выезде из ЕС в сторону Беларуси, особенно на автобусных и легковых КПП.",
      },
      { type: "h2", text: "Что происходит, если у вас нашли больше 60 евро" },
      {
        type: "ul",
        items: [
          "Деньги, как правило, не изымают на месте — пассажира просто не выпускают с суммой сверх лимита и просят вернуться в ЕС, чтобы обменять избыток на другую валюту (доллары, злотые и т.д.) или оставить деньги в ЕС.",
          "Если сумма значительная, деньги могут быть изъяты до решения суда — тогда вопрос возврата решается в судебном порядке.",
          "За нарушение предусмотрена административная ответственность по законодательству страны выезда.",
          "Строгость проверки зависит от конкретного пункта пропуска и смены сотрудников — где-то проверяют почти всегда, где-то выборочно.",
        ],
      },
      { type: "h2", text: "Как не попасть в неприятную ситуацию" },
      {
        type: "ul",
        items: [
          "Перед поездкой посчитайте наличные евро в кошельке и во всех отделениях сумки — лимит считается суммарно на человека.",
          "Если нужно взять с собой больше, переведите избыток в другую валюту (доллары США, польские злотые) — эти валюты не входят в запрет по банкнотам стран ЕС.",
          "Для сумм свыше 10 000 € в эквиваленте (в любой валюте) обязательно заполните декларацию и сохраните подтверждение происхождения средств.",
          "Уточните у водителя или туроператора актуальную практику проверки на конкретном КПП — она периодически меняется.",
        ],
      },
      {
        type: "link",
        href: "https://mon.declarant.by/#/zone",
        label: "Электронная очередь в зонах ожидания — mon.declarant.by",
        description: "Лучший источник живой информации об очередях на границе в интернете: официальный сервис мониторинга регистрации транспорта в системе электронной очереди на белорусских КПП, обновляется в реальном времени. Полезно спланировать, в какое время меньше проверок. Если сайт не открывается — попробуйте зайти через VPN.",
      },
      { type: "liveQueue" },
      { type: "h2", text: "А сколько товаров можно ввезти в Беларусь без пошлины" },
      {
        type: "p",
        text:
          "Это отдельный вопрос, не связанный с санкциями ЕС, а регулируемый белорусским таможенным законодательством. Норма для въезда в Беларусь наземным транспортом — до 500 евро и 25 кг товаров на человека (по состоянию на 2026 год). При превышении лимита нужно декларировать товар и оплатить пошлину.",
      },
      {
        type: "table",
        headers: ["Способ въезда", "Беспошлинный лимит", "Лимит по весу"],
        rows: [
          ["Наземный транспорт", "500 €", "25 кг"],
          ["Авиаперелёт", "10 000 €", "50 кг"],
          ["Международные посылки", "200 €", "31 кг"],
        ],
      },
      { type: "h2", text: "Часто задаваемые вопросы" },
      { type: "h3", text: "Ограничение касается только евро?" },
      {
        type: "p",
        text: "Изначально запрет касался только евро, но впоследствии был расширен на банкноты любой официальной валюты стран ЕС (злотые, чешские кроны, шведские кроны и т.д.). Доллары США и валюты стран, не входящих в ЕС, под этот запрет не подпадают.",
      },
      { type: "h3", text: "Если я въезжаю в ЕС из Беларуси с евро — тоже действует лимит?" },
      {
        type: "p",
        text: "Нет. Ограничение действует только на вывоз банкнот ИЗ стран ЕС В Беларусь. Ввоз наличных евро (или других валют) из Беларуси в Литву, Латвию и другие страны ЕС этим правилом не ограничен — действуют только общие правила декларирования сумм свыше 10 000 евро.",
      },
      { type: "h3", text: "60 евро — это на машину или на человека?" },
      {
        type: "p",
        text: "Лимит считается на одного человека. Если в машине едет несколько пассажиров, у каждого может быть при себе до 60 евро наличными — но суммы нельзя формально «складывать» и провозить как деньги одного пассажира.",
      },
      {
        type: "callout",
        text:
          "Водители ComfortLine ежедневно работают на маршрутах Минск–Литва и Минск–Латвия и в курсе актуальной практики проверок на каждом конкретном КПП. Перед поездкой мы всегда напоминаем пассажирам о лимите по наличным и других нюансах, чтобы дорога прошла без неприятных сюрпризов.",
      },
    ],
    categoryEn: "Border",
    introEn:
      "If you're travelling from Lithuania or Latvia to Belarus with cash euros, there's an EU sanctions rule you should know about. Since 2022, an EU regulation has effectively capped the amount of cash euro banknotes you can bring into Belarus at €60 per person. Here's where the rule comes from, how it's enforced at the border, and how to avoid trouble.",
    bodyEn: [
      { type: "h2", text: "Where the '€60 limit' comes from" },
      {
        type: "p",
        text:
          "In March 2022 the Council of the EU banned the sale, supply, transfer or export of banknotes denominated in any EU member state's currency (including the euro) to Belarus, its government, its central bank, or for use in Belarus. This is part of the broader EU sanctions package, originally targeting the euro and later widened to cover all EU member-state currencies.",
      },
      {
        type: "p",
        text:
          "The ban carries one exception: it does not apply to banknotes needed for the personal use of natural persons travelling to Belarus, or their accompanying family members. In practice, Lithuanian and Latvian customs and border services have set the working threshold for that 'personal use' exception at €60 in cash per person. Amounts above that are treated as exceeding personal needs and fall under the export ban.",
      },
      {
        type: "link",
        href: "https://eur-lex.europa.eu/eli/reg/2006/765/oj/eng",
        label: "Council Regulation (EC) No 765/2006 — official text on EUR-Lex",
        description: "The core EU sanctions regulation concerning Belarus, including the ban on exporting EU member-state banknotes (as amended 2022–2026)",
      },
      { type: "h2", text: "How the rule is enforced at the Lithuanian and Latvian border" },
      {
        type: "table",
        headers: ["Direction", "Cash euro limit", "Other currencies"],
        rows: [
          ["Lithuania → Belarus", "up to €60 per person", "no set cap (declare above €10,000)"],
          ["Latvia → Belarus", "up to €60 per person", "no set cap (declare above €10,000)"],
          ["Belarus → EU (entry)", "no import ban on euros", "—"],
        ],
      },
      {
        type: "p",
        text:
          "The key detail: the restriction only applies in one direction — exporting cash euros (and other EU currencies) FROM Lithuania and Latvia TO Belarus. Bringing euros back into the EU from Belarus is not restricted. Checks are done on a spot basis — a customs or border officer may ask you to show the cash in your wallet when exiting the EU towards Belarus, especially at bus and car checkpoints.",
      },
      { type: "h2", text: "What happens if you're found with more than €60" },
      {
        type: "ul",
        items: [
          "The cash is usually not confiscated on the spot — you're simply not allowed to proceed with the excess and asked to return into the EU to exchange it into another currency (USD, PLN, etc.) or leave it behind.",
          "For larger amounts, the cash can be seized pending a court decision, with the return of funds decided judicially.",
          "Violations carry administrative liability under the exiting country's law.",
          "Enforcement strictness varies by checkpoint and shift — some checkpoints check almost every traveller, others only spot-check.",
        ],
      },
      { type: "h2", text: "How to avoid a problem" },
      {
        type: "ul",
        items: [
          "Before travelling, count all the cash euros in your wallet and every pocket of your bag — the limit is a per-person total, not just what's visible.",
          "If you need to carry more, convert the excess into another currency (US dollars, Polish złoty) — these are not covered by the EU banknote export ban.",
          "For amounts above €10,000 equivalent (in any currency), file a declaration and keep proof of the funds' origin.",
          "Ask your driver or tour operator about current enforcement practice at the specific checkpoint — it changes periodically.",
        ],
      },
      {
        type: "link",
        href: "https://mon.declarant.by/#/zone",
        label: "Electronic queue at waiting zones — mon.declarant.by",
        description: "The best live queue information available online: the official Belarusian customs monitoring service for vehicle registration in the electronic border-crossing queue, updated in real time. Useful for timing your trip around fewer checks. If the site doesn't load, try opening it with a VPN.",
      },
      { type: "liveQueue" },
      { type: "h2", text: "How much can you bring into Belarus duty-free" },
      {
        type: "p",
        text:
          "This is a separate question governed by Belarusian customs law rather than EU sanctions. The allowance for entering Belarus by land transport is up to €500 in value and up to 25 kg of goods per person (as of 2026). Exceeding the limit requires declaring the goods and paying duty.",
      },
      {
        type: "table",
        headers: ["Mode of entry", "Duty-free limit", "Weight limit"],
        rows: [
          ["Land transport", "€500", "25 kg"],
          ["Air travel", "€10,000", "50 kg"],
          ["International parcels", "€200", "31 kg"],
        ],
      },
      { type: "h2", text: "Frequently Asked Questions" },
      { type: "h3", text: "Does the restriction only apply to euros?" },
      {
        type: "p",
        text: "Originally it applied only to the euro, but the ban was later extended to banknotes of any official EU member-state currency (Polish złoty, Czech koruna, Swedish krona, etc.). US dollars and non-EU currencies are not covered.",
      },
      { type: "h3", text: "Does the limit apply when entering the EU from Belarus with euros?" },
      {
        type: "p",
        text: "No. The restriction only applies to exporting banknotes FROM EU countries TO Belarus. Bringing cash euros (or other currencies) from Belarus into Lithuania, Latvia or other EU countries is not restricted by this rule — only the standard declaration requirement above €10,000 applies.",
      },
      { type: "h3", text: "Is the €60 limit per car or per person?" },
      {
        type: "p",
        text: "The limit applies per person. If several passengers travel in the same car, each may individually carry up to €60 in cash — but amounts cannot formally be pooled and carried as one passenger's money.",
      },
      {
        type: "callout",
        text:
          "ComfortLine drivers run the Minsk–Lithuania and Minsk–Latvia routes daily and stay current on enforcement practice at each specific checkpoint. Before every trip we remind passengers about the cash limit and other border nuances, so the journey goes smoothly.",
      },
    ],
    related: ["граница-беларусь-литва", "какой-кпп-выбрать", "виза-свободный-въезд-в-беларусь-2026"],
    ctaRoute: { label: "Забронировать трансфер в Литву или Латвию", labelEn: "Book a transfer to Lithuania or Latvia", path: "/трансфер-в-литву" },
  },
  {
    slug: "советские-мозаики-минска",
    slugEn: "soviet-mosaics-minsk-guide",
    titleEn: "Soviet Mosaics of Minsk: A Walking Guide to the City's Hidden Monumental Art",
    descriptionEn: "Where to find Minsk's best Soviet-era mosaics: the Vostok-1 towers ('Golden Gates'), the Florentine mosaic at Oktyabrskaya metro, and the Dom Kino frieze — with photos and directions.",
    ogSlug: "blog-sovetskie-mozaiki-minska",
    title: "Советские мозаики Минска: гид по монументальному искусству города",
    description:
      "Где искать лучшие советские мозаики Минска: башни микрорайона Восток-1 («Золотые ворота»), флорентийская мозаика на «Октябрьской» и фриз Дома кино — с фото и маршрутом.",
    intro:
      "Минск — один из самых недооценённых городов Европы для любителей советского монументального искусства. На фасадах жилых башен, в переходах метро и на кинотеатрах до сих пор сохранились огромные мозаичные панно 1960–1980-х годов — эпические сцены труда, космоса и культуры, выложенные смальтой и мрамором. Собрали маршрут по трём главным точкам, которые стоит увидеть своими глазами.",
    dateISO: "2026-07-05",
    readingMin: 8,
    category: "Минск",
    tags: ["Минск", "мозаика", "архитектура", "советское искусство", "экскурсия"],
    body: [
      { type: "h2", text: "Восток-1: «Золотые ворота» с мозаичными башнями" },
      {
        type: "p",
        text:
          "Главная точка маршрута — микрорайон Восток-1 у одноимённой станции метро. Две высотные жилые башни здесь называют «Золотыми воротами Минска»: их торцевые фасады, выходящие на проспект Независимости, полностью покрыты мозаикой на тему освоения космоса, науки, труда и искусства. Панно создавались в 1970-е годы группой белорусских художников-монументалистов и остаются одними из крупнейших мозаичных композиций в стране.",
      },
      {
        type: "img",
        src: "/mosaic-vostok-panorama.jpg",
        alt: "Жилая башня микрорайона Восток-1 в Минске с мозаикой на фасаде",
        caption: "Башня Восток-1 на проспекте Независимости — мозаика видна с проезжей части и из окон метро.",
      },
      {
        type: "p",
        text:
          "Каждая башня разбита на несколько крупных регистров: в верхней части — символика космоса и науки, ниже — фигуры рабочих, учёных и деятелей культуры в стилизованных арках. Композиция читается снизу вверх, как единое повествование о советском проекте будущего.",
      },
      {
        type: "img",
        src: "/mosaic-vostok-science.jpg",
        alt: "Крупный план мозаики «Город науки» на башне Восток-1 в Минске",
        caption: "Фрагмент «Город науки» — фигуры в золотой смальте на фоне символа СССР.",
      },
      {
        type: "img",
        src: "/mosaic-vostok-culture.jpg",
        alt: "Мозаика «Город культуры» на второй башне микрорайона Восток-1",
        caption: "Соседняя башня посвящена теме культуры и искусства — та же система арок и цветных лент.",
      },
      {
        type: "callout",
        text: "Лучшее время для фото — раннее утро или ближе к вечеру: солнце светит вдоль проспекта и подсвечивает смальту сбоку, из-за чего мозаика «загорается».",
      },
      { type: "h2", text: "Станция метро «Октябрьская»: флорентийская мозаика Кузнецова" },
      {
        type: "p",
        text:
          "В переходе станции метро «Октябрьская» сохранилась масштабная флорентийская мозаика (техника набора из природного камня и мрамора без смальты) работы художника Андрея Кузнецова — «Этапы большого пути». Композиция рассказывает историю индустриализации и достижений советской эпохи через фигуры рабочих, инженеров и символику труда.",
      },
      {
        type: "img",
        src: "/mosaic-oktyabrskaya-metro.jpg",
        alt: "Флорентийская мозаика в переходе станции метро Октябрьская в Минске",
        caption: "Мозаика «Этапы большого пути» над лестницей в переходе станции «Октябрьская».",
      },
      {
        type: "p",
        text:
          "В отличие от ярких мозаик Восток-1, здесь преобладает приглушённая палитра натурального камня — охра, тёмно-коричневый, серый мрамор. Это одна из немногих флорентийских мозаик такого масштаба, сохранившихся в интерьере действующего общественного пространства в Беларуси.",
      },
      { type: "h2", text: "Дом кино: фриз с партизанской темой" },
      {
        type: "p",
        text:
          "Здание бывшего Дома кино на улице Толбухина — ещё один пример советского монументального искусства, интегрированного в фасад общественного здания. Протяжённый декоративный фриз в верхней части здания посвящён партизанской и военной теме — узнаваемый мотив для белорусской монументальной живописи 1970-х годов, где память о войне соседствует с образами мирного труда и кино как искусства.",
      },
      {
        type: "img",
        src: "/mosaic-domkino-frieze.jpg",
        alt: "Мозаичный фриз с партизанской темой на здании бывшего Дома кино в Минске",
        caption: "Фриз на фасаде бывшего Дома кино — стилизованные лица и символика партизанского движения.",
      },
      {
        type: "p",
        text:
          "Здание неоднократно меняло назначение (сейчас в нём располагается Дворец детей и молодёжи), но фасадный декор сохранён. Стоит заглянуть сюда, если вы уже смотрите башни Восток-1 — это в 10–15 минутах на машине.",
      },
      {
        type: "callout",
        text:
          "Маршрут по всем трём точкам занимает около 2–3 часов с учётом переездов на машине и остановок для фото. Многие туристы объединяют его с посещением проспекта Независимости — крупнейшего цельного ансамбля сталинской архитектуры в Европе.",
      },
      { type: "h2", text: "Как спланировать маршрут" },
      {
        type: "ol",
        items: [
          "Начните с башен Восток-1 (метро «Восток») — это самая эффектная и фотогеничная точка.",
          "Доедьте до станции метро «Октябрьская» и спуститесь в переход к мозаике Кузнецова.",
          "Завершите маршрут у здания бывшего Дома кино на Толбухина, чтобы увидеть фриз.",
        ],
      },
      {
        type: "p",
        text:
          "Если вы прилетаете в Минск транзитом или у вас несколько свободных часов между рейсами, водитель ComfortLine может провести вас по этому маршруту на комфортном автомобиле с остановками у каждой точки — без необходимости разбираться в общественном транспорте.",
      },
    ],
    categoryEn: "Minsk",
    introEn:
      "Minsk is one of Europe's most underrated cities for fans of Soviet monumental art. Huge mosaic panels from the 1960s–1980s — epic scenes of labour, space and culture rendered in smalt and marble — still cover residential towers, metro passages and cinema façades across the city. Here is a route to the four most rewarding spots.",
    bodyEn: [
      { type: "h2", text: "Vostok-1: the 'Golden Gates' mosaic towers" },
      {
        type: "p",
        text:
          "The route's centrepiece is the Vostok-1 neighbourhood, next to the metro station of the same name. Locals call its two high-rise residential towers the 'Golden Gates of Minsk': their end walls, facing Independence Avenue, are completely covered in mosaics on the themes of space exploration, science, labour and art. The panels were created in the 1970s by a group of Belarusian monumental artists and remain among the largest mosaic compositions in the country.",
      },
      {
        type: "img",
        src: "/mosaic-vostok-panorama.jpg",
        alt: "Vostok-1 residential tower in Minsk with a large mosaic on its facade",
        caption: "A Vostok-1 tower on Independence Avenue — the mosaic is visible from the street and from the metro exit.",
      },
      {
        type: "p",
        text:
          "Each tower is divided into large registers: cosmic and scientific symbolism at the top, then figures of workers, scientists and cultural figures set within stylised arches below. The composition reads bottom-to-top as a single narrative about the Soviet vision of the future.",
      },
      {
        type: "img",
        src: "/mosaic-vostok-science.jpg",
        alt: "Close-up of the 'City of Science' mosaic on the Vostok-1 tower in Minsk",
        caption: "A fragment of 'City of Science' — figures in gold smalt against a Soviet emblem.",
      },
      {
        type: "img",
        src: "/mosaic-vostok-culture.jpg",
        alt: "'City of Culture' mosaic on the second Vostok-1 tower",
        caption: "The neighbouring tower is dedicated to culture and the arts, using the same arch-and-ribbon system.",
      },
      {
        type: "callout",
        text: "The best light for photos is early morning or early evening, when the sun rakes along the avenue and lights the smalt from the side, making the mosaic 'glow'.",
      },
      { type: "h2", text: "Oktyabrskaya metro station: Kuznetsov's Florentine mosaic" },
      {
        type: "p",
        text:
          "The underground passage at Oktyabrskaya metro station holds a large Florentine mosaic (a technique using inlaid natural stone and marble rather than smalt) by artist Andrey Kuznetsov, titled 'Stages of the Great Journey'. The composition tells the story of industrialisation and Soviet-era achievement through figures of workers, engineers and labour symbolism.",
      },
      {
        type: "img",
        src: "/mosaic-oktyabrskaya-metro.jpg",
        alt: "Florentine mosaic in the underpass at Oktyabrskaya metro station in Minsk",
        caption: "'Stages of the Great Journey' above the stairway in the Oktyabrskaya station passage.",
      },
      {
        type: "p",
        text:
          "Unlike the bright colours of Vostok-1, this piece is dominated by a muted natural-stone palette — ochre, dark brown, grey marble. It's one of the few Florentine mosaics of this scale still preserved inside a working public space in Belarus.",
      },
      { type: "h2", text: "Dom Kino: the partisan-themed frieze" },
      {
        type: "p",
        text:
          "The former Dom Kino (House of Cinema) building on Talbukhina Street is another example of Soviet monumental art built into a public façade. A long decorative frieze along the top of the building is dedicated to the partisan and wartime theme — a recurring motif in Belarusian monumental painting of the 1970s, where memory of the war sits alongside images of peaceful labour and cinema as an art form.",
      },
      {
        type: "img",
        src: "/mosaic-domkino-frieze.jpg",
        alt: "Mosaic frieze with a partisan theme on the former Dom Kino building in Minsk",
        caption: "The frieze on the former Dom Kino façade — stylised faces and partisan-movement symbolism.",
      },
      {
        type: "p",
        text:
          "The building has changed function more than once (it now houses a children's and youth centre), but the façade decoration has been preserved. Worth a short stop if you're already visiting the Vostok-1 towers — it's a 10–15 minute drive away.",
      },
      {
        type: "callout",
        text:
          "The full three-stop route takes about 2–3 hours including driving time and photo stops. Many visitors combine it with a walk down Independence Avenue, the largest intact ensemble of Stalinist architecture in Europe.",
      },
      { type: "h2", text: "How to plan the route" },
      {
        type: "ol",
        items: [
          "Start at the Vostok-1 towers (Vostok metro station) — the most striking and photogenic stop.",
          "Head to Oktyabrskaya metro station and go down into the passage to see the Kuznetsov mosaic.",
          "Finish at the former Dom Kino building on Talbukhina Street to see the frieze.",
        ],
      },
      {
        type: "p",
        text:
          "If you're passing through Minsk between flights or have a few free hours, a ComfortLine driver can take you along this route in a comfortable car with stops at each site — no need to figure out public transport.",
      },
    ],
    related: ["как-добраться-до-аэропорта-вильнюса", "аэропорт-варшавы-вав"],
    ctaRoute: { label: "Заказать трансфер и экскурсию по Минску", labelEn: "Book a Minsk transfer and city tour", path: "/трансфер-по-минску" },
  },
];

export function findArticle(slug: string): Article | undefined {
  const decoded = decodeURIComponent(slug);
  return ARTICLES.find((a) => [a.slug, a.slugEn, a.slugPl, a.slugFr].includes(decoded));
}
