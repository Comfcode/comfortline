import { MapPin, ShieldCheck, Building2 } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Варшаву",
    title: "Минск — Варшава",
    subtitle:
      "Комфортный трансфер из Минска в центр Варшавы. Прямая поездка без пересадок — деловые встречи, шоппинг, отдых или транзит через Польшу.",
    stats: [
      { label: "Расстояние", value: "~550 км" },
      { label: "Время в пути", value: "6–8 ч" },
      { label: "Граница", value: "Беларусь–Польша" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Варшава — достопримечательности",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Royal_Castle_in_Warsaw%2C_Poland%2C_2022%2C_03.jpg/1280px-Royal_Castle_in_Warsaw%2C_Poland%2C_2022%2C_03.jpg",
        caption: "Королевский замок (Старый город)",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Lotnisko_Chopina_w_Warszawie_2018b.jpg/1280px-Lotnisko_Chopina_w_Warszawie_2018b.jpg",
        caption: "Аэропорт Варшавы Шопен (WAW)",
      },
    ],
    howTitle: "Как проходит поездка",
    steps: [
      {
        icon: MapPin,
        title: "Выезд из Минска",
        desc: "Водитель заберёт вас по указанному адресу в Минске и направится к польской границе.",
      },
      {
        icon: ShieldCheck,
        title: "Граница Беларусь–Польша",
        desc: "Переход на Тересполь или Кукурыки. Водитель знает актуальные очереди и помогает на КПП.",
      },
      {
        icon: Building2,
        title: "Варшава: любой адрес",
        desc: "Отель в центре, Центральный вокзал, торговый центр или деловой район — куда скажете.",
      },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      { label: "Маршрут", value: "Минск → Брест → Тересполь → Варшава" },
      { label: "Расстояние", value: "~550 км" },
      {
        label: "Пограничный переход",
        value: "Тересполь / Кукурыки (Беларусь–Польша)",
      },
      {
        label: "Время пересечения границы",
        value: "1–5 ч в зависимости от очереди",
      },
      {
        label: "Необходимые документы",
        value: "Виза Шенген (для граждан не ЕС), загранпаспорт",
      },
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
    faqTitle: "Частые вопросы — Минск–Варшава",
    faq: [
      {
        q: "Сколько стоит трансфер из Минска в Варшаву?",
        a: "Цена — по запросу, свяжитесь с нами. Стоимость зависит от класса авто (бизнес-седан 1–3 пассажира или минивэн 4–8), необходимости детского кресла, поездки с домашним животным, конечного адреса в Варшаве, сезона и других пожеланий клиента. Менеджер озвучит фиксированную сумму без счётчика — без доплат на месте, с включёнными топливом, страховкой, помощью на границе, водой и багажом без ограничений.",
      },
      {
        q: "Сколько занимает дорога Минск–Варшава?",
        a: "Сама дорога ~550 км по трассе М1/A2 занимает 6–8 часов. К этому добавляется пограничный переход Брест–Тересполь или Кукурыки — обычно 1–3 часа, в пиковые дни до 5 часов. Итог: планируйте 7–11 часов в одну сторону.",
      },
      {
        q: "Какой пограничный переход вы используете?",
        a: "По умолчанию Брест–Тересполь как самый удобный для пассажирских автомобилей. При сильных очередях водитель может перенаправить на Песчатка–Половцы или Кукурыки (грузовой/легковой) — выбор делается утром по актуальной обстановке.",
      },
      {
        q: "Какие документы нужны для въезда в Польшу?",
        a: "Действующий загранпаспорт и шенгенская виза (для граждан, которым она требуется). Граждане ЕС/Польши — только паспорт или ID-карта. Дети — собственный загранпаспорт. Рекомендуем иметь медстраховку с покрытием Шенгенской зоны.",
      },
      {
        q: "Можно ли сделать остановку по дороге?",
        a: "Да. Бесплатно — техническая остановка на АЗС каждые 2 часа. Платные остановки (заехать в Брестскую крепость, торговый центр в Бресте или в Тересполе обменять валюту) бронируются заранее у менеджера и стоят символическую сумму за остановку до 30 минут.",
      },
      {
        q: "Доступен ли обратный трансфер Варшава–Минск?",
        a: "Да, обратный трансфер бронируется одной заявкой и стоит так же, как и в одну сторону. Если бронируете оба направления вместе — скидка 5%. Подача в Варшаве: отель, аэропорт WAW/WMI, Центральный вокзал — куда удобно.",
      },
      {
        q: "Какой автомобиль подадут?",
        a: "По умолчанию Mercedes-Benz E-class (бизнес-седан, до 3 пассажиров с багажом) или Volkswagen Passat (комфорт, до 3 пассажиров с багажом). Для группы 4–5 человек — Hyundai Palisade (до 4) или Kia Carnival (до 5); для 6–8 человек — Fiat Scudo. Все автомобили не старше 5 лет, с кондиционером и Wi-Fi.",
      },
    ],
    ctaTitle: "Заказать трансфер Минск–Варшава",
    ctaDesc:
      "Оставьте заявку — менеджер свяжется с вами в ближайшее время и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Варшава",
    backBtn: "← Все услуги",
  },
  en: {
    badge: "Warsaw Transfer",
    title: "Minsk — Warsaw",
    subtitle:
      "Comfortable private transfer from Minsk to Warsaw city centre. Direct, no changes — whether for business, shopping, sightseeing or onward travel across Poland.",
    stats: [
      { label: "Distance", value: "~550 km" },
      { label: "Travel time", value: "6–8 hrs" },
      { label: "Border", value: "Belarus–Poland" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Warsaw — Highlights",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Royal_Castle_in_Warsaw%2C_Poland%2C_2022%2C_03.jpg/1280px-Royal_Castle_in_Warsaw%2C_Poland%2C_2022%2C_03.jpg",
        caption: "Royal Castle (Old Town)",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Lotnisko_Chopina_w_Warszawie_2018b.jpg/1280px-Lotnisko_Chopina_w_Warszawie_2018b.jpg",
        caption: "Warsaw Chopin Airport (WAW)",
      },
    ],
    howTitle: "How the transfer works",
    steps: [
      {
        icon: MapPin,
        title: "Departure from Minsk",
        desc: "Your driver picks you up at your Minsk address and heads for the Polish border.",
      },
      {
        icon: ShieldCheck,
        title: "Belarus–Poland border",
        desc: "Terespol or Kukuryki crossing. Your driver knows current queue conditions and assists at the checkpoint.",
      },
      {
        icon: Building2,
        title: "Warsaw — any address",
        desc: "City centre hotel, Central Station, shopping centre or business district — wherever you need.",
      },
    ],
    infoTitle: "Route Details",
    infoRows: [
      { label: "Route", value: "Minsk → Brest → Terespol → Warsaw" },
      { label: "Distance", value: "~550 km" },
      {
        label: "Border crossing",
        value: "Terespol / Kukuryki (Belarus–Poland)",
      },
      { label: "Border crossing time", value: "1–5 hrs depending on queues" },
      {
        label: "Documents required",
        value: "Schengen visa (non-EU citizens), valid passport",
      },
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
    faqTitle: "Frequently asked — Minsk to Warsaw",
    faq: [
      {
        q: "How much does a Minsk to Warsaw transfer cost?",
        a: "Price is on request — please contact us. The exact figure depends on the vehicle class (business sedan for 1–3 passengers or minivan for 4–8), whether you need a child seat, whether you travel with a pet, your final Warsaw address, the season, and any other special requests. Our manager confirms a fixed price (no meter) with fuel, insurance, border assistance, bottled water and unlimited luggage already included — no extras at pickup or drop-off.",
      },
      {
        q: "How long does the Minsk to Warsaw drive take?",
        a: "The ~550 km drive on the M1/A2 highway takes 6–8 hours. Add 1–3 hours (up to 5 on peak days) for the Brest–Terespol or Kukuryki border crossing. Plan for 7–11 hours one way.",
      },
      {
        q: "Which border crossing do you use?",
        a: "By default Brest–Terespol — the most convenient for passenger cars. If queues are heavy the driver may switch to Peschatka–Polowce or Kukuryki, decided in the morning based on live conditions.",
      },
      {
        q: "What documents do I need to enter Poland?",
        a: "A valid passport and a Schengen visa (for nationals who need one). EU/Polish citizens — passport or national ID only. Children require their own passport. Schengen-area medical insurance is recommended.",
      },
      {
        q: "Can I make stops along the way?",
        a: "Yes. Free technical stops at petrol stations every 2 hours. Paid stops (Brest Fortress, a Brest shopping centre, or a currency exchange in Terespol) are arranged in advance with our manager for a small fee per stop up to 30 minutes.",
      },
      {
        q: "Is the return transfer Warsaw to Minsk available?",
        a: "Yes, the return is booked in a single request at the same one-way rate. Book both directions together — 5% discount. Pickup in Warsaw: hotel, WAW/WMI airport, Central Station — wherever suits you.",
      },
      {
        q: "Which vehicle will I get?",
        a: "By default a Mercedes-Benz E-class (business sedan, up to 3 passengers with luggage) or Volkswagen Passat (comfort, up to 3 passengers with luggage). For 4–5 passengers — Hyundai Palisade (up to 4) or Kia Carnival (up to 5); for 6–8 passengers — Fiat Scudo. All vehicles are no more than 5 years old, with A/C and Wi-Fi.",
      },
    ],
    ctaTitle: "Book Minsk–Warsaw Transfer",
    ctaDesc:
      "Submit a request and our manager will contact you shortly with an exact price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Warsaw",
    backBtn: "← All services",
  },
  pl: {
    badge: "Przesiadka Warszawa",
    title: "Mińsk — Warszawa",
    subtitle:
      "Wygodny prywatny transfer z Mińska do centrum Warszawy. Bezpośrednio, bez zmian – czy to w interesach, na zakupy, na zwiedzanie, czy w dalszą podróż po Polsce.",
    stats: [
      { label: "Odległość", value: "~550 km" },
      { label: "Czas podróży", value: "6–8 godz" },
      { label: "Granica", value: "Białoruś – Polska" },
      { label: "Klasa pojazdu", value: "Biznes / Minivan" },
    ],
    photosTitle: "Warszawa — najważniejsze momenty",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Royal_Castle_in_Warsaw%2C_Poland%2C_2022%2C_03.jpg/1280px-Royal_Castle_in_Warsaw%2C_Poland%2C_2022%2C_03.jpg",
        caption: "Zamek Królewski (Stare Miasto)",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Lotnisko_Chopina_w_Warszawie_2018b.jpg/1280px-Lotnisko_Chopina_w_Warszawie_2018b.jpg",
        caption: "Lotnisko Chopina w Warszawie (WAW)",
      },
    ],
    howTitle: "Jak działa transfer",
    steps: [
      {
        icon: MapPin,
        title: "Wyjazd z Mińska",
        desc: "Twój kierowca odbierze Cię pod Twoim adresem w Mińsku i uda się w stronę polskiej granicy.",
      },
      {
        icon: ShieldCheck,
        title: "Granica białorusko-polska",
        desc: "Przejście Terespol lub Kukuryki. Twój kierowca zna aktualny stan kolejek i pomaga na punkcie kontrolnym.",
      },
      {
        icon: Building2,
        title: "Warszawa – dowolny adres",
        desc: "Hotel w centrum miasta, Dworzec Centralny, centrum handlowe lub dzielnica biznesowa – gdziekolwiek potrzebujesz.",
      },
    ],
    infoTitle: "Szczegóły trasy",
    infoRows: [
      { label: "Trasa", value: "Mińsk → Brześć → Terespol → Warszawa" },
      { label: "Odległość", value: "~550 km" },
      {
        label: "Przejście graniczne",
        value: "Terespol / Kukuryki (Białoruś – Polska)",
      },
      {
        label: "Czas przekraczania granicy",
        value: "1–5 godzin w zależności od kolejek",
      },
      {
        label: "Wymagane dokumenty",
        value: "Wiza Schengen (obywatele spoza UE), ważny paszport",
      },
    ],
    includedTitle: "Co jest wliczone w cenę",
    included: [
      "Odbiór z Twojego adresu w Mińsku",
      "Trasa bezpośrednia – bez przesiadek",
      "Pomoc kierowcy na granicy",
      "Woda butelkowana i wygodna kabina",
      "Foteliki dziecięce na zamówienie",
      "Stała cena — bez licznika, bez niespodzianek",
    ],
    whyTitle: "Dlaczego ComfortLine",
    whyItems: [
      "Regularnie kursuje po Warszawie od 2015 roku",
      "Kierowca znający przejścia graniczne i kolejki",
      "Opcjonalne przystanki na trasie na życzenie",
      "Dostępny również transfer powrotny Warszawa → Mińsk",
      "Dostępność 24 godziny na dobę, 7 dni w tygodniu, także w święta",
      "Sprawdzone opinie prawdziwych klientów",
    ],
    faqTitle: "Często zadawane pytania — Mińsk do Warszawy",
    faq: [
      {
        q: "Ile kosztuje transfer z Mińska do Warszawy?",
        a: "Cena na zapytanie – prosimy o kontakt. Dokładna liczba zależy od klasy pojazdu (biznesowy sedan dla 1–3 pasażerów lub minivan dla 4–8 osób), tego, czy potrzebujesz fotelika dziecięcego, czy podróżujesz ze zwierzęciem, Twojego ostatecznego adresu w Warszawie, pory roku i innych specjalnych życzeń. Nasz menadżer potwierdza stałą cenę (bez licznika) obejmującą paliwo, ubezpieczenie, pomoc graniczną, wodę butelkowaną i nieograniczoną liczbę bagażu – bez dodatkowych opłat przy odbiorze i wylocie.",
      },
      {
        q: "Ile trwa podróż z Mińska do Warszawy?",
        a: "Przejazd ~550 km autostradą M1/A2 zajmuje 6–8 godzin. Dolicz 1–3 godziny (do 5 w dni szczytu) na przejście graniczne Brześć–Terespol lub Kukuryki. Zaplanuj podróż na 7–11 godzin w jedną stronę.",
      },
      {
        q: "Z jakiego przejścia granicznego korzystasz?",
        a: "Domyślnie Brześć–Terespol — najwygodniejszy dla samochodów osobowych. Jeśli kolejki są duże, kierowca może przesiąść się na Peschatkę – Polowce lub Kukuryki, o czym zadecyduje rano na podstawie warunków na żywo.",
      },
      {
        q: "Jakie dokumenty potrzebuję, aby wjechać do Polski?",
        a: "Ważny paszport i wiza Schengen (dla obywateli, którzy jej potrzebują). Obywatele UE/Polski – wyłącznie paszport lub dowód osobisty. Dzieci muszą posiadać własny paszport. Zalecane jest ubezpieczenie medyczne strefy Schengen.",
      },
      {
        q: "Czy mogę robić przystanki po drodze?",
        a: "Tak. Bezpłatne postoje techniczne na stacjach benzynowych co 2 godziny. Przystanki płatne (Twierdza Brzeska, centrum handlowe w Brześciu lub kantor w Terespolu) ustalane są wcześniej z naszym menadżerem za niewielką opłatą za postój do 30 minut.",
      },
      {
        q: "Czy dostępny jest transfer powrotny z Warszawy do Mińska?",
        a: "Tak, powrót rezerwowany jest w ramach jednego wniosku i obowiązuje ta sama stawka za bilet w jedną stronę. Zarezerwuj oba kierunki razem — 5% rabatu. Odbiór z Warszawy: hotel, lotnisko WAW/WMI, Dworzec Centralny – gdziekolwiek Ci pasuje.",
      },
      {
        q: "Który pojazd otrzymam?",
        a: "Domyślnie Mercedes-Benz E-klasa (biznesowy sedan, do 3 pasażerów z bagażem) lub Volkswagen Passat (komfort, do 3 pasażerów z bagażem). Dla 4–5 pasażerów — Hyundai Palisade (do 4 osób) lub Kia Carnival (do 5 osób); dla 6–8 pasażerów — Fiat Scudo. Wszystkie pojazdy mają nie więcej niż 5 lat i są wyposażone w klimatyzację i Wi-Fi.",
      },
    ],
    ctaTitle: "Zarezerwuj transfer Mińsk–Warszawa",
    ctaDesc:
      "Prześlij zapytanie, a nasz menedżer wkrótce skontaktuje się z Tobą i poda dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Warszawa",
    backBtn: "← Wszystkie usługi",
  },
  fr: {
    badge: "Transfert de Varsovie",
    title: "Minsk — Varsovie",
    subtitle:
      "Transfert privé confortable de Minsk au centre-ville de Varsovie. Direct, aucun changement, que ce soit pour les affaires, le shopping, les visites touristiques ou la poursuite de votre voyage à travers la Pologne.",
    stats: [
      { label: "Distance", value: "~550km" },
      { label: "Temps de trajet", value: "6 à 8 heures" },
      { label: "Frontière", value: "Biélorussie-Pologne" },
      { label: "Classe de véhicule", value: "Affaires / Minifourgonnette" },
    ],
    photosTitle: "Varsovie — Points forts",
    photos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Royal_Castle_in_Warsaw%2C_Poland%2C_2022%2C_03.jpg/1280px-Royal_Castle_in_Warsaw%2C_Poland%2C_2022%2C_03.jpg",
        caption: "Château Royal (vieille ville)",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Lotnisko_Chopina_w_Warszawie_2018b.jpg/1280px-Lotnisko_Chopina_w_Warszawie_2018b.jpg",
        caption: "Aéroport Frédéric Chopin de Varsovie (WAW)",
      },
    ],
    howTitle: "Comment fonctionne le transfert",
    steps: [
      {
        icon: MapPin,
        title: "Départ de Minsk",
        desc: "Votre chauffeur vient vous chercher à votre adresse à Minsk et se dirige vers la frontière polonaise.",
      },
      {
        icon: ShieldCheck,
        title: "Frontière Biélorussie-Pologne",
        desc: "Traversée de Terespol ou Kukuryki. Votre chauffeur connaît les conditions actuelles de la file d'attente et vous assiste au point de contrôle.",
      },
      {
        icon: Building2,
        title: "Varsovie — n'importe quelle adresse",
        desc: "Hôtel en centre-ville, gare centrale, centre commercial ou quartier d'affaires, où que vous soyez.",
      },
    ],
    infoTitle: "Détails de l'itinéraire",
    infoRows: [
      { label: "Itinéraire", value: "Minsk → Brest → Terespol → Varsovie" },
      { label: "Distance", value: "~550km" },
      {
        label: "Passage de la frontière",
        value: "Terespol / Kukuryki (Biélorussie-Pologne)",
      },
      {
        label: "Temps de passage de la frontière",
        value: "1 à 5 heures selon les files d'attente",
      },
      {
        label: "Documents requis",
        value: "Visa Schengen (citoyens non-UE), passeport valide",
      },
    ],
    includedTitle: "Ce qui est inclus",
    included: [
      "Prise en charge à votre adresse à Minsk",
      "Itinéraire direct — pas de transfert",
      "Assistance au conducteur à la frontière",
      "Eau en bouteille et cabine confortable",
      "Sièges enfants sur demande",
      "Prix fixe — pas de compteur, pas de surprise",
    ],
    whyTitle: "Pourquoi ComfortLine",
    whyItems: [
      "Varsovie circule régulièrement depuis 2015",
      "Chauffeur familier avec les passages frontaliers et les files d'attente",
      "Arrêts optionnels en cours de route sur demande",
      "Transfert aller-retour Varsovie → Minsk également disponible",
      "Disponible 24h/24 et 7j/7 y compris les jours fériés",
      "Avis vérifiés de vrais clients",
    ],
    faqTitle: "Foire aux questions — Minsk à Varsovie",
    faq: [
      {
        q: "Combien coûte un transfert de Minsk à Varsovie ?",
        a: "Le prix est sur demande – veuillez nous contacter. Le chiffre exact dépend de la classe du véhicule (berline affaires pour 1 à 3 passagers ou monospace pour 4 à 8 passagers), si vous avez besoin d'un siège enfant, si vous voyagez avec un animal de compagnie, votre adresse finale à Varsovie, la saison et toute autre demande particulière. Notre responsable confirme un prix fixe (sans compteur) avec carburant, assurance, assistance aux frontières, eau en bouteille et bagages illimités déjà inclus — aucun extra lors de la prise en charge ou du dépôt.",
      },
      {
        q: "Combien de temps dure le trajet de Minsk à Varsovie ?",
        a: "Le trajet d'environ 550 km sur l'autoroute M1/A2 prend 6 à 8 heures. Ajoutez 1 à 3 heures (jusqu'à 5 les jours de pointe) pour le poste frontière Brest-Terespol ou Kukuryki. Prévoyez 7 à 11 heures aller simple.",
      },
      {
        q: "Quel poste frontière utilisez-vous ?",
        a: "Par défaut Brest-Terespol — le plus pratique pour les voitures particulières. Si les files d'attente sont nombreuses, le chauffeur peut passer à Peschatka-Polowce ou Kukuryki, décidé le matin en fonction des conditions réelles.",
      },
      {
        q: "De quels documents ai-je besoin pour entrer en Pologne ?",
        a: "Un passeport valide et un visa Schengen (pour les nationaux qui en ont besoin). Citoyens de l’UE/polonais – passeport ou carte d’identité nationale uniquement. Les enfants ont besoin de leur propre passeport. Une assurance médicale espace Schengen est recommandée.",
      },
      {
        q: "Puis-je faire des arrêts en cours de route ?",
        a: "Oui. Arrêts techniques gratuits dans les stations-service toutes les 2 heures. Les arrêts payants (Forteresse de Brest, centre commercial de Brest ou bureau de change à Terespol) sont organisés à l'avance avec notre gestionnaire pour une somme modique par arrêt jusqu'à 30 minutes.",
      },
      {
        q: "Le transfert aller-retour de Varsovie à Minsk est-il disponible ?",
        a: "Oui, le retour s'effectue en une seule demande au même tarif aller simple. Réservez les deux sens ensemble — 5 % de réduction. Prise en charge à Varsovie : hôtel, aéroport WAW/WMI, gare centrale — où que vous soyez.",
      },
      {
        q: "Quel véhicule vais-je recevoir ?",
        a: "Par défaut une Mercedes-Benz Classe E (berline affaires, jusqu'à 3 passagers avec bagages) ou une Volkswagen Passat (confort, jusqu'à 3 passagers avec bagages). Pour 4 à 5 passagers : Hyundai Palisade (jusqu'à 4) ou Kia Carnival (jusqu'à 5) ; pour 6 à 8 passagers — Fiat Scudo. Tous les véhicules n'ont pas plus de 5 ans, avec climatisation et Wi-Fi.",
      },
    ],
    ctaTitle: "Réserver un transfert Minsk-Varsovie",
    ctaDesc:
      "Soumettez une demande et notre responsable vous contactera sous peu avec un prix exact.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Varsovie",
    backBtn: "← Tous les services",
  },
  seo: {
    titleRu: "Такси Минск — Варшава | ComfortLine",
    titleEn: "Minsk to Warsaw Private Transfer | ComfortLine",
    descRu:
      "Частный трансфер Минск — центр Варшавы: 550 км, фиксированная цена, подача от двери и помощь на границе Беларусь — Польша.",
    descEn:
      "Private Minsk to central Warsaw transfer: 550 km, fixed fare, door-to-door pickup and assistance at the Belarus–Poland border.",
    pathRu: "/трансфер-варшава",
    pathEn: "/warsaw-transfer",
    breadcrumbRu: "Трансфер в Варшаву",
    breadcrumbEn: "Minsk — Warsaw",
    fromName: "Минск",
    toName: "Варшава",
    priceCurrency: "EUR",
  },
};

export default function WarsawTransferPage() {
  return <RouteLandingPage data={data} />;
}
