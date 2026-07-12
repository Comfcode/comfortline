import { MapPin, ShieldCheck, Building2 } from "lucide-react";
import { RouteLandingPage, RoutePageData } from "./route-landing-page";

const data: RoutePageData = {
  ru: {
    badge: "Трансфер в Даугавпилс",
    title: "Минск — Даугавпилс",
    subtitle:
      "Прямой трансфер из Минска в Даугавпилс — второй по величине город Латвии. Грандиозная крепость XIX века, Центр Марка Ротко и многонациональный дух города на берегу Даугавы.",
    stats: [
      { label: "Расстояние", value: "~300 км" },
      { label: "Время в пути", value: "3.5–5 ч" },
      { label: "Граница", value: "Беларусь–Латвия" },
      { label: "Класс авто", value: "Бизнес / Минивэн" },
    ],
    photosTitle: "Даугавпилс — достопримечательности",
    photos: [
      {
        src: "/img/daugavpils/fortress.png",
        caption:
          "Даугавпилсская крепость — одна из крупнейших хорошо сохранившихся крепостей Восточной Европы",
      },
      {
        src: "/img/daugavpils/rothko-centre.png",
        caption:
          "Центр Марка Ротко — музей в стенах крепости, посвящённый великому абстракционисту, родившемуся в Даугавпилсе",
      },
      {
        src: "/img/daugavpils/city-river.png",
        caption: "Исторический центр Даугавпилса на берегу реки Даугавы",
      },
    ],
    howTitle: "Как проходит поездка",
    steps: [
      {
        icon: MapPin,
        title: "Выезд из Минска",
        desc: "Водитель заберёт вас по указанному адресу в Минске и направится к латвийской границе по оптимальному маршруту.",
      },
      {
        icon: ShieldCheck,
        title: "Граница Беларусь–Латвия",
        desc: "Переход Урбаны / Патарниеки. Водитель знает актуальные очереди и помогает на КПП.",
      },
      {
        icon: Building2,
        title: "Даугавпилс: любой адрес",
        desc: "Довезём до отеля, крепости, Центра Ротко или любого другого адреса в городе.",
      },
    ],
    infoTitle: "Детали маршрута",
    infoRows: [
      { label: "Маршрут", value: "Минск → Полоцк → Урбаны → Даугавпилс" },
      { label: "Расстояние", value: "~300 км" },
      {
        label: "Пограничный переход",
        value: "Урбаны / Патарниеки (Беларусь–Латвия)",
      },
      {
        label: "Время пересечения границы",
        value: "1–6 ч в зависимости от очереди",
      },
      { label: "Необходимые документы", value: "Виза Шенген, загранпаспорт" },
      {
        label: "Ближайший аэропорт",
        value: "RIX (Рига) — 220 км от Даугавпилса",
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
      "Один из кратчайших маршрутов в Латвию из Минска",
      "Опытные водители маршрута Минск–Латвия",
      "Знание актуальных очередей на границе Урбаны",
      "Возможен продолжительный маршрут до Риги (+220 км)",
      "Обратный трансфер: из Даугавпилса в Минск",
      "Работаем 24/7, включая праздники",
    ],
    faqTitle: "Часто задаваемые вопросы",
    faq: [
      {
        q: "Какой маршрут до Даугавпилса?",
        a: "Едем через Полоцк — КПП Урбаны/Патарниеки — Даугавпилс. Расстояние около 300 км, время в пути 3,5–5 ч без учёта границы.",
      },
      {
        q: "Нужна ли виза в Латвию?",
        a: "Гражданам Беларуси требуется шенгенская виза. Уточняйте актуальные требования в посольстве Латвии или на официальных сайтах перед поездкой.",
      },
      {
        q: "Кто такой Марк Ротко и при чём тут Даугавпилс?",
        a: "Марк Ротко — один из величайших американских художников XX века, основоположник абстрактного экспрессионизма. Он родился в Даугавпилсе в 1903 году. Центр Марка Ротко в стенах крепости хранит работы мастера и рассказывает его историю.",
      },
      {
        q: "Можно ли продолжить поездку до Риги?",
        a: "Да — от Даугавпилса до Риги примерно 220 км (2–2,5 ч). Мы можем сделать остановку в Даугавпилсе и затем везти вас до Риги или аэропорта. Обговорите детали с менеджером при бронировании.",
      },
    ],
    ctaTitle: "Заказать трансфер Минск–Даугавпилс",
    ctaDesc:
      "Оставьте заявку — менеджер свяжется с вами в ближайшее время и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    prefilledFrom: "Минск",
    prefilledTo: "Даугавпилс",
    backBtn: "← Трансферы в Латвию",
  },
  en: {
    badge: "Daugavpils Transfer",
    title: "Minsk — Daugavpils",
    subtitle:
      "Direct private transfer from Minsk to Daugavpils — Latvia's second-largest city. A vast 19th-century fortress, the Mark Rothko Art Centre and the multicultural spirit of a city on the Daugava river.",
    stats: [
      { label: "Distance", value: "~300 km" },
      { label: "Travel time", value: "3.5–5 hrs" },
      { label: "Border", value: "Belarus–Latvia" },
      { label: "Vehicle class", value: "Business / Minivan" },
    ],
    photosTitle: "Daugavpils — Highlights",
    photos: [
      {
        src: "/img/daugavpils/fortress.png",
        caption:
          "Daugavpils Fortress — one of the largest well-preserved fortresses in Eastern Europe",
      },
      {
        src: "/img/daugavpils/rothko-centre.png",
        caption:
          "Mark Rothko Art Centre — a museum inside the fortress dedicated to the great abstract expressionist born here",
      },
      {
        src: "/img/daugavpils/city-river.png",
        caption: "Daugavpils historic centre on the banks of the Daugava river",
      },
    ],
    howTitle: "How the transfer works",
    steps: [
      {
        icon: MapPin,
        title: "Departure from Minsk",
        desc: "Your driver picks you up at your Minsk address and heads for the Latvian border via the fastest route.",
      },
      {
        icon: ShieldCheck,
        title: "Belarus–Latvia border",
        desc: "Urbany / Pāternieki crossing. Your driver knows current queue conditions and assists at the checkpoint.",
      },
      {
        icon: Building2,
        title: "Daugavpils — any address",
        desc: "We drop you at your hotel, the fortress, the Rothko Centre or any other address in the city.",
      },
    ],
    infoTitle: "Route Details",
    infoRows: [
      { label: "Route", value: "Minsk → Polotsk → Urbany → Daugavpils" },
      { label: "Distance", value: "~300 km" },
      {
        label: "Border crossing",
        value: "Urbany / Pāternieki (Belarus–Latvia)",
      },
      { label: "Border crossing time", value: "1–6 hrs depending on queues" },
      { label: "Documents required", value: "Schengen visa, valid passport" },
      {
        label: "Nearest airport",
        value: "RIX (Riga) — 220 km from Daugavpils",
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
      "One of the shortest Minsk–Latvia routes",
      "Experienced drivers on the Minsk–Latvia corridor",
      "Up-to-date knowledge of Urbany border queues",
      "Easy extension to Riga (+220 km) on the same trip",
      "Return transfer Daugavpils → Minsk also available",
      "Available 24/7 including public holidays",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "What is the route to Daugavpils?",
        a: "We go via Polotsk – Urbany/Pāternieki border crossing – Daugavpils. Total distance is about 300 km, travel time 3.5–5 hours excluding the border stop.",
      },
      {
        q: "Do I need a visa to enter Latvia?",
        a: "Citizens of Belarus require a Schengen visa. Please check the latest requirements with the Latvian embassy or official sources before travelling.",
      },
      {
        q: "Who is Mark Rothko and what is his connection to Daugavpils?",
        a: "Mark Rothko is one of the greatest American painters of the 20th century and a pioneer of abstract expressionism. He was born in Daugavpils in 1903. The Mark Rothko Art Centre, located inside the historic fortress, preserves his works and tells his story.",
      },
      {
        q: "Can we continue on to Riga after Daugavpils?",
        a: "Yes — Riga is about 220 km (2–2.5 hrs) from Daugavpils. We can stop in Daugavpils and then continue to Riga city or Riga Airport. Just let the manager know when booking.",
      },
    ],
    ctaTitle: "Book Minsk–Daugavpils Transfer",
    ctaDesc:
      "Submit a request and our manager will contact you shortly with an exact price.",
    ctaBtn: "Request a booking",
    prefilledFrom: "Minsk",
    prefilledTo: "Daugavpils",
    backBtn: "← Latvia transfers",
  },
  pl: {
    badge: "Transfer Daugavpils",
    title: "Mińsk — Dyneburg",
    subtitle:
      "Bezpośredni prywatny transfer z Mińska do Dyneburga — drugiego co do wielkości miasta Łotwy. Rozległa XIX-wieczna twierdza, Centrum Sztuki Marka Rothko i wielokulturowy duch miasta nad Dźwiną.",
    stats: [
      { label: "Odległość", value: "~300 km" },
      { label: "Czas podróży", value: "3,5–5 godz" },
      { label: "Granica", value: "Białoruś – Łotwa" },
      { label: "Klasa pojazdu", value: "Biznes / Minivan" },
    ],
    photosTitle: "Dyneburg — najważniejsze wydarzenia",
    photos: [
      {
        src: "/img/daugavpils/fortress.png",
        caption:
          "Twierdza Daugavpils — jedna z największych dobrze zachowanych twierdz w Europie Wschodniej",
      },
      {
        src: "/img/daugavpils/rothko-centre.png",
        caption:
          "Centrum Sztuki Marka Rothko — muzeum wewnątrz twierdzy poświęcone urodzonemu tu wielkiemu ekspresjoniście abstrakcyjnemu",
      },
      {
        src: "/img/daugavpils/city-river.png",
        caption: "Historyczne centrum Daugavpils nad brzegiem rzeki Dźwiny",
      },
    ],
    howTitle: "Jak działa transfer",
    steps: [
      {
        icon: MapPin,
        title: "Wyjazd z Mińska",
        desc: "Twój kierowca odbierze Cię pod Twoim adresem w Mińsku i najszybszą trasą uda się do granicy z Łotwą.",
      },
      {
        icon: ShieldCheck,
        title: "Granica białorusko-łotewska",
        desc: "Skrzyżowanie Urbany/Pāternieki. Twój kierowca zna aktualny stan kolejek i pomaga na punkcie kontrolnym.",
      },
      {
        icon: Building2,
        title: "Dyneburg — dowolny adres",
        desc: "Podwieziemy Cię do Twojego hotelu, twierdzy, Centrum Rothko lub pod dowolny inny adres w mieście.",
      },
    ],
    infoTitle: "Szczegóły trasy",
    infoRows: [
      { label: "Trasa", value: "Mińsk → Połock → Urbany → Dyneburg" },
      { label: "Odległość", value: "~300 km" },
      {
        label: "Przejście graniczne",
        value: "Urbany / Pāternieki (Białoruś – Łotwa)",
      },
      {
        label: "Czas przekraczania granicy",
        value: "1–6 godzin w zależności od kolejek",
      },
      { label: "Wymagane dokumenty", value: "Wiza Schengen, ważny paszport" },
      {
        label: "Najbliższe lotnisko",
        value: "RIX (Ryga) — 220 km od Dyneburga",
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
      "Jedna z najkrótszych tras Mińsk – Łotwa",
      "Doświadczeni kierowcy na korytarzu Mińsk – Łotwa",
      "Aktualna wiedza o kolejkach granicznych Urbany",
      "Łatwe przedłużenie do Rygi (+220 km) w ramach tej samej podróży",
      "Dostępny jest również transfer powrotny Daugavpils → Mińsk",
      "Dostępność 24 godziny na dobę, 7 dni w tygodniu, także w święta",
    ],
    faqTitle: "Często zadawane pytania",
    faq: [
      {
        q: "Jaka jest trasa do Dyneburga?",
        a: "Jedziemy przez przejście graniczne Połock – Urbany/Pāternieki – Dyneburg. Całkowita odległość wynosi około 300 km, czas przejazdu 3,5–5 godzin bez przystanku granicznego.",
      },
      {
        q: "Czy potrzebuję wizy, aby wjechać na Łotwę?",
        a: "Obywatele Białorusi potrzebują wizy Schengen. Przed podróżą sprawdź najnowsze wymagania w ambasadzie Łotwy lub w oficjalnych źródłach.",
      },
      {
        q: "Kim jest Mark Rothko i jakie są jego powiązania z Dyneburgiem?",
        a: "Mark Rothko to jeden z najwybitniejszych amerykańskich malarzy XX wieku i pionier abstrakcyjnego ekspresjonizmu. Urodził się w Dyneburgu w 1903 roku. Centrum Sztuki Marka Rothko, mieszczące się w historycznej twierdzy, przechowuje jego dzieła i opowiada jego historię.",
      },
      {
        q: "Czy po Dyneburgu możemy kontynuować podróż do Rygi?",
        a: "Tak — Ryga jest oddalona od Dyneburga o około 220 km (2–2,5 godz.). Możemy zatrzymać się w Daugavpils, a następnie kontynuować podróż do Rygi lub na lotnisko w Rydze. Po prostu daj znać menadżerowi podczas dokonywania rezerwacji.",
      },
    ],
    ctaTitle: "Zarezerwuj transfer Mińsk–Daugavpils",
    ctaDesc:
      "Prześlij zapytanie, a nasz menedżer wkrótce skontaktuje się z Tobą i poda dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    prefilledFrom: "Mińsk",
    prefilledTo: "Dyneburg",
    backBtn: "← Transfery Łotwy",
  },
  fr: {
    badge: "Transfert Daugavpils",
    title: "Minsk — Daugavpils",
    subtitle:
      "Transfert privé direct de Minsk à Daugavpils, la deuxième plus grande ville de Lettonie. Une vaste forteresse du XIXe siècle, le centre d'art Mark Rothko et l'esprit multiculturel d'une ville au bord de la rivière Daugava.",
    stats: [
      { label: "Distance", value: "~300km" },
      { label: "Temps de trajet", value: "3,5 à 5 heures" },
      { label: "Frontière", value: "Biélorussie-Lettonie" },
      { label: "Classe de véhicule", value: "Affaires / Minifourgonnette" },
    ],
    photosTitle: "Daugavpils — Points forts",
    photos: [
      {
        src: "/img/daugavpils/fortress.png",
        caption:
          "Forteresse de Daugavpils — l'une des plus grandes forteresses bien conservées d'Europe de l'Est",
      },
      {
        src: "/img/daugavpils/rothko-centre.png",
        caption:
          "Mark Rothko Art Center — un musée à l'intérieur de la forteresse dédié au grand expressionniste abstrait né ici",
      },
      {
        src: "/img/daugavpils/city-river.png",
        caption:
          "Centre historique de Daugavpils sur les rives de la rivière Daugava",
      },
    ],
    howTitle: "Comment fonctionne le transfert",
    steps: [
      {
        icon: MapPin,
        title: "Départ de Minsk",
        desc: "Votre chauffeur vient vous chercher à votre adresse à Minsk et se dirige vers la frontière lettone par l'itinéraire le plus rapide.",
      },
      {
        icon: ShieldCheck,
        title: "Frontière Biélorussie-Lettonie",
        desc: "Traversée Urbany / Pāternieki. Votre chauffeur connaît les conditions actuelles de la file d'attente et vous assiste au point de contrôle.",
      },
      {
        icon: Building2,
        title: "Daugavpils — n'importe quelle adresse",
        desc: "Nous vous déposons à votre hôtel, à la forteresse, au Centre Rothko ou à toute autre adresse de la ville.",
      },
    ],
    infoTitle: "Détails de l'itinéraire",
    infoRows: [
      { label: "Itinéraire", value: "Minsk → Polotsk → Urbany → Daugavpils" },
      { label: "Distance", value: "~300km" },
      {
        label: "Passage de la frontière",
        value: "Urbany / Pāternieki (Biélorussie-Lettonie)",
      },
      {
        label: "Temps de passage de la frontière",
        value: "1 à 6 heures selon les files d'attente",
      },
      { label: "Documents requis", value: "Visa Schengen, passeport valide" },
      {
        label: "Aéroport le plus proche",
        value: "RIX (Riga) — 220 km de Daugavpils",
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
      "L'une des routes les plus courtes Minsk-Lettonie",
      "Chauffeurs expérimentés sur le corridor Minsk-Lettonie",
      "Connaissance à jour des files d'attente aux frontières d'Urbany",
      "Extension facile jusqu'à Riga (+220 km) sur le même trajet",
      "Transfert aller-retour Daugavpils → Minsk également disponible",
      "Disponible 24h/24 et 7j/7 y compris les jours fériés",
    ],
    faqTitle: "Questions fréquemment posées",
    faq: [
      {
        q: "Quel est l'itinéraire vers Daugavpils?",
        a: "Nous passons par Polotsk – poste frontière Urbany/Pāternieki – Daugavpils. La distance totale est d'environ 300 km, la durée du trajet entre 3,5 et 5 heures sans compter l'arrêt frontalier.",
      },
      {
        q: "Ai-je besoin d’un visa pour entrer en Lettonie ?",
        a: "Les citoyens biélorusses ont besoin d'un visa Schengen. Veuillez vérifier les dernières exigences auprès de l'ambassade de Lettonie ou de sources officielles avant de voyager.",
      },
      {
        q: "Qui est Mark Rothko et quel est son lien avec Daugavpils ?",
        a: "Mark Rothko est l'un des plus grands peintres américains du XXe siècle et un pionnier de l'expressionnisme abstrait. Il est né à Daugavpils en 1903. Le centre d'art Mark Rothko, situé à l'intérieur de la forteresse historique, conserve ses œuvres et raconte son histoire.",
      },
      {
        q: "Pouvons-nous continuer vers Riga après Daugavpils ?",
        a: "Oui, Riga se trouve à environ 220 km (2 à 2,5 heures) de Daugavpils. Nous pouvons nous arrêter à Daugavpils puis continuer vers la ville de Riga ou l'aéroport de Riga. Il suffit d'en informer le responsable lors de la réservation.",
      },
    ],
    ctaTitle: "Réserver un transfert Minsk-Daugavpils",
    ctaDesc:
      "Soumettez une demande et notre responsable vous contactera sous peu avec un prix exact.",
    ctaBtn: "Demander une réservation",
    prefilledFrom: "Minsk",
    prefilledTo: "Daugavpils",
    backBtn: "← Transferts Lettonie",
  },
  seo: {
    titleRu: "Трансфер Минск — Даугавпилс | Латвия | ComfortLine",
    titleEn: "Minsk to Daugavpils Transfer | Latvia | ComfortLine",
    descRu:
      "Прямой трансфер из Минска в Даугавпилс. ~300 км, 3,5–5 ч. Крепость XIX века, Центр Марка Ротко. Граница Урбаны–Патарниеки, фиксированная цена.",
    descEn:
      "Direct transfer from Minsk to Daugavpils. ~300 km, 3.5–5 hrs. 19th-c fortress, Mark Rothko Art Centre. Urbany–Pāternieki border, fixed price.",
    pathRu: "/трансфер-минск-даугавпилс",
    pathEn: "/minsk-daugavpils-transfer",
    breadcrumbRu: "Трансфер Минск–Даугавпилс",
    breadcrumbEn: "Minsk — Daugavpils",
    fromName: "Минск",
    toName: "Даугавпилс",
  },
};

export default function MinskDaugavpilsTransferPage() {
  return <RouteLandingPage data={data} />;
}
