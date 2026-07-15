import { useState } from "react";
import { motion } from "framer-motion";
import { Plane, Clock, MapPin, Car, ArrowRight, Info, CheckCircle2, PhoneCall, ShieldCheck, HelpCircle, ChevronDown, Wallet } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLang } from "@/context/language-context";
import { GlobalBookingModal } from "@/components/sections/GlobalBookingModal";
import { Seo } from "@/seo/Seo";
import { taxiServiceJsonLd, faqJsonLd } from "@/seo/jsonld";
import { SITE_URL } from "@/seo/seo-config";
import { getHomeSectionHref } from "@/lib/lang-urls";

const content = {
  ru: {
    badge: "Трансфер",
    title: "Трансфер Минск — Аэропорт Вильнюса (VNO)",
    subtitle: "Индивидуальный трансфер Минск — аэропорт Вильнюса (VNO) на ваш рейс. Подача от двери в Минске, фиксированная цена, опытный водитель и помощь на границе Беларусь–Литва.",
    seoIntro: "Из Минска в аэропорт Вильнюса (VNO) можно добраться тремя основными способами: рейсовым автобусом, маршруткой или индивидуальным трансфером. Самый быстрый и удобный — индивидуальный трансфер: подача от двери в Минске, доставка прямо к терминалу VNO, фиксированная цена за всю машину (1–3 пассажира) без счётчика. Маршрут ~175 км через пограничный переход Каменный Лог / Котловка занимает 2,5–5 часов в зависимости от очередей. Подаём комфорт-класс Volkswagen Passat или бизнес-седан Mercedes E-class.",
    comparisonTitle: "Способы добраться: автобус, маршрутка, трансфер",
    comparisonIntro: "Сравнение трёх основных способов уехать из Минска в аэропорт Вильнюса (VNO):",
    comparison: {
      headers: ["Транспорт", "Цена", "Время", "Кому подойдёт"],
      rows: [
        ["Рейсовый автобус (Ecolines, Lux Express)", "По расписанию перевозчика", "5–7 ч + ожидание на границе", "Бюджетные путешественники без багажа"],
        ["Маршрутка (Минсктранс, частники)", "По расписанию перевозчика", "4–6 ч", "1 пассажир с лёгким багажом"],
        ["Индивидуальный трансфер ComfortLine", "Фиксированная цена за машину (1–3 пасс.) — по запросу", "2,5–5 ч от двери до терминала", "Семьи, командировки, ночные/утренние рейсы, большой багаж"],
      ],
    },
    stats: [
      { label: "Расстояние", value: "~175 км" },
      { label: "Время в пути", value: "2,5–5 ч" },
      { label: "Класс авто", value: "Комфорт / Бизнес" },
      { label: "Подача машины", value: "До двери" },
    ],
    howTitle: "Как проходит трансфер",
    steps: [
      { icon: MapPin, title: "Подача от двери", desc: "Водитель приедет к вашему адресу в Минске точно в назначенное время." },
      { icon: ShieldCheck, title: "Пересечение границы", desc: "Беларусь–Литва. Водитель поможет на КПП, знает актуальные маршруты и очереди." },
      { icon: Plane, title: "Прибытие в аэропорт", desc: "Доставим прямо к нужному терминалу с запасом до вылета." },
    ],
    airportTitle: "Аэропорт Вильнюса (VNO)",
    airportInfo: [
      { label: "Полное название", value: "Международный аэропорт Вильнюс" },
      { label: "IATA код", value: "VNO" },
      { label: "Адрес", value: "Rodūnios kelias 10A, Вильнюс, Литва" },
      { label: "Терминалы", value: "1 терминал (все рейсы)" },
      { label: "Основные авиакомпании", value: "Ryanair, Wizz Air, LOT, Turkish Airlines, flydubai" },
      { label: "Трансфер в центр", value: "Автобус №1 (40 мин), такси (25–35 мин)" },
    ],
    photosTitle: "Аэропорт в фото",
    photos: [
      { src: "/vilnius-airport-exterior.jpg", caption: "Терминал аэропорта Вильнюса (VNO)" },
      { src: "/vilnius-airport-interior.jpg", caption: "Зал вылета аэропорта Вильнюса" },
    ],
    tipsTitle: "Полезная информация",
    tips: [
      "Аэропорт открыт круглосуточно. Рейсы есть ранним утром и поздно ночью.",
      "Пограничный контроль Беларусь–Литва: в среднем 1–3 часа. В пиковые дни — до 5 часов.",
      "Рекомендуем выезжать с запасом 4–5 часов до вылета.",
      "Бесплатный Wi-Fi, кафе и зоны отдыха в единственном терминале.",
      "Стойка регистрации открывается за 2–3 часа до вылета.",
      "Вильнюс — альтернатива Варшаве: зачастую дешевле перелёт из VNO.",
    ],
    whyTitle: "Почему ComfortLine",
    whyItems: [
      "Фиксированная цена без счётчика и скрытых доплат",
      "Опытный водитель с навыком пограничного перехода",
      "Детские кресла по запросу",
      "Встреча с табличкой при обратном трансфере",
      "Помощь с багажом",
      "Работаем 24/7, включая праздники",
    ],
    faqTitle: "Частые вопросы — Минск → Аэропорт Вильнюса",
    faq: [
      { q: "Сколько стоит трансфер из Минска в аэропорт Вильнюса (VNO)?", a: "Цена — по запросу, свяжитесь с нами. Стоимость зависит от класса авто (комфорт / бизнес / минивэн), необходимости детского кресла, поездки с домашним животным, конкретного адреса подачи в Минске и других пожеланий клиента. Менеджер озвучит фиксированную сумму без счётчика — без доплат на месте, с включёнными топливом, страховкой, помощью на границе, водой и багажом." },
      { q: "Сколько занимает дорога Минск — VNO?", a: "Сама поездка ~175 км занимает примерно 2 часа по трассе М7. К этому добавляется пограничный переход Каменный Лог / Котловка — обычно 1–3 часа, в пиковые дни до 4–5 часов. Итого планируйте 2,5–5 часов от двери до терминала VNO. Рекомендуем выезжать с запасом 4–5 часов до вылета." },
      { q: "Какой пограничный переход вы используете?", a: "По умолчанию Каменный Лог (Беларусь) — Мядининкай (Литва), он же «Котловка». Это основной автомобильный переход на этом маршруте. При больших очередях водитель может перенаправить на Бенякони — Шальчининкай. Решение принимается утром по актуальной обстановке." },
      { q: "Какие документы нужны для въезда в Литву?", a: "Действующий загранпаспорт и шенгенская виза (для граждан Беларуси/России и других стран, которым она требуется). Граждане ЕС/Литвы — паспорт или ID-карта. Дети — собственный загранпаспорт. Рекомендуем шенгенскую медицинскую страховку." },
      { q: "Что дешевле: автобус или индивидуальный трансфер?", a: "Если едете один с маленькой сумкой — рейсовый автобус (Ecolines, Lux Express) обычно дешевле в пересчёте на одного человека. Если едете вдвоём, втроём или семьёй с багажом — индивидуальный трансфер чаще выгоднее по цене на человека и быстрее на 1–3 часа за счёт прямой доставки от двери до терминала без пересадок и ночных пересадок на вокзале. Точную сумму на ваше количество пассажиров уточните у менеджера." },
      { q: "Подаёте ли вы машину ночью или рано утром на ранний рейс?", a: "Да, работаем 24/7 включая праздники. На рейсы 5:00–7:00 утра обычно выезжаем из Минска в 23:00–00:00. Ночная подача и работа в праздники без доплат." },
      { q: "Доступен ли обратный трансфер из аэропорта Вильнюса в Минск?", a: "Да. Водитель встретит вас в зале прилёта VNO с табличкой с вашим именем (бесплатно), поможет с багажом и доставит к указанному адресу в Минске. Бронируйте сразу обе поездки — скидка 5%." },
      { q: "Можно ли с детским креслом?", a: "Да, детские кресла и бустеры предоставляются бесплатно по запросу при бронировании. Укажите возраст ребёнка." },
    ],
    ctaTitle: "Забронировать трансфер",
    ctaDesc: "Оставьте заявку — менеджер свяжется с вами в ближайшее время и назовёт точную стоимость.",
    ctaBtn: "Оставить заявку",
    backBtn: "← Все услуги",
  },
  en: {
    badge: "Transfer",
    title: "Minsk to Vilnius Airport (VNO) Transfer",
    subtitle: "Private door-to-door transfer from Minsk to Vilnius International Airport (VNO). Fixed price, professional driver, full assistance at the Belarus–Lithuania border.",
    seoIntro: "There are three main ways to travel from Minsk to Vilnius Airport (VNO): scheduled coach, shared minibus, or private transfer. The fastest and most convenient is a private transfer: door pickup in Minsk, drop-off right at the VNO terminal, a fixed price for the whole car (1–3 passengers) — no meter. The ~175 km route via the Kamenny Log / Kotlovka border crossing takes 2.5–5 hours depending on queues. We use a comfort-class Volkswagen Passat or a business-class Mercedes E-class.",
    comparisonTitle: "How to get there: coach, minibus, private transfer",
    comparisonIntro: "Comparison of the three main ways to travel from Minsk to Vilnius Airport (VNO):",
    comparison: {
      headers: ["Transport", "Price", "Travel time", "Best for"],
      rows: [
        ["Scheduled coach (Ecolines, Lux Express)", "Per carrier's tariff", "5–7 hrs + border wait", "Solo budget travellers with light luggage"],
        ["Shared minibus (Minsktrans, private)", "Per carrier's tariff", "4–6 hrs", "1 passenger with light luggage"],
        ["ComfortLine private transfer", "Fixed price per car (1–4 pax) — on request", "2.5–5 hrs door to terminal", "Families, business trips, night/early flights, lots of luggage"],
      ],
    },
    stats: [
      { label: "Distance", value: "~175 km" },
      { label: "Travel time", value: "2.5–5 hrs" },
      { label: "Vehicle class", value: "Comfort / Business" },
      { label: "Pickup", value: "Door-to-door" },
    ],
    howTitle: "How the transfer works",
    steps: [
      { icon: MapPin, title: "Door pickup", desc: "Your driver arrives at your Minsk address exactly on time." },
      { icon: ShieldCheck, title: "Border crossing", desc: "Belarus–Lithuania. Your driver knows the border routines and monitors queue conditions." },
      { icon: Plane, title: "Airport arrival", desc: "Delivered directly to the right terminal well ahead of your flight." },
    ],
    airportTitle: "Vilnius Airport (VNO)",
    airportInfo: [
      { label: "Full name", value: "Vilnius International Airport" },
      { label: "IATA code", value: "VNO" },
      { label: "Address", value: "Rodūnios kelias 10A, Vilnius, Lithuania" },
      { label: "Terminals", value: "1 terminal (all flights)" },
      { label: "Main airlines", value: "Ryanair, Wizz Air, LOT, Turkish Airlines, flydubai" },
      { label: "City transfer", value: "Bus #1 (40 min), taxi (25–35 min)" },
    ],
    photosTitle: "Airport Gallery",
    photos: [
      { src: "/vilnius-airport-exterior.jpg", caption: "Vilnius Airport terminal (VNO)" },
      { src: "/vilnius-airport-interior.jpg", caption: "Vilnius Airport departures hall" },
    ],
    tipsTitle: "Useful Information",
    tips: [
      "The airport operates 24/7. Early morning and late-night flights are common.",
      "Belarus–Lithuania border crossing: 1–3 hours on average, up to 5 hours on busy days.",
      "We recommend departing 4–5 hours before your flight.",
      "Free Wi-Fi, cafes and rest zones are available in the single terminal.",
      "Check-in desks open 2–3 hours before departure.",
      "Vilnius is a popular alternative to Warsaw — often cheaper flights from VNO.",
    ],
    whyTitle: "Why ComfortLine",
    whyItems: [
      "Fixed price — no meter, no hidden extras",
      "Driver experienced in border crossings",
      "Child seats available on request",
      "Name-board meet & greet for return transfers",
      "Luggage assistance included",
      "Available 24/7 including holidays",
    ],
    faqTitle: "Frequently asked — Minsk to Vilnius Airport",
    faq: [
      { q: "How much does a Minsk to Vilnius Airport (VNO) transfer cost?", a: "Price is on request — please contact us. The exact figure depends on the vehicle class (comfort / business / minivan), whether you need a child seat, whether you travel with a pet, your pickup address in Minsk, and any other special requests. Our manager confirms a fixed price (no meter) with fuel, insurance, border assistance, bottled water and luggage already included — no extras at pickup or drop-off." },
      { q: "How long is the Minsk to VNO trip?", a: "The drive itself, ~175 km on the M7 highway, is around 2 hours. Add 1–3 hours (up to 4–5 on peak days) for the Kamenny Log / Kotlovka border crossing. Plan for 2.5–5 hours door to terminal. We recommend leaving Minsk 4–5 hours before your flight." },
      { q: "Which border crossing do you use?", a: "By default Kamenny Log (Belarus) — Medininkai (Lithuania), also known as 'Kotlovka' — the main passenger crossing on this route. If queues are heavy the driver may switch to Benyakoni — Šalčininkai. The decision is made in the morning based on live conditions." },
      { q: "What documents do I need to enter Lithuania?", a: "A valid passport and a Schengen visa (for Belarusian, Russian and other nationals who need one). EU/Lithuanian citizens — passport or national ID. Children require their own passport. Schengen-area medical insurance is recommended." },
      { q: "Is the coach cheaper than a private transfer?", a: "If you're travelling solo with a small bag — yes, the scheduled coach (Ecolines, Lux Express) is usually cheaper per person. If you're travelling as a couple, family or group with luggage, a private transfer is often cheaper per person and 1–3 hours faster thanks to direct door-to-terminal service with no transfers and no nighttime waits at the bus station. Ask our manager for the exact quote based on your party size." },
      { q: "Do you operate at night or for early-morning flights?", a: "Yes, we run 24/7 including holidays. For 5:00–7:00 AM flights we typically depart Minsk at 23:00–00:00. No surcharge for nights or holidays." },
      { q: "Is the return transfer Vilnius Airport to Minsk available?", a: "Yes. The driver meets you in the VNO arrivals hall with a name sign (free of charge), helps with luggage, and drops you at your Minsk address. Book both directions in one request — 5% discount." },
      { q: "Can I request a child seat?", a: "Yes — child seats and boosters are provided free of charge on request at booking. Please tell us the child's age." },
    ],
    ctaTitle: "Book your transfer",
    ctaDesc: "Submit a request and our manager will contact you shortly with an exact price.",
    ctaBtn: "Request a booking",
    backBtn: "← All services",
  },
  pl: {
    badge: "Przenosić",
    title: "Transfer z Mińska na lotnisko w Wilnie (VNO).",
    subtitle: "Prywatny transfer od drzwi do drzwi z Mińska na międzynarodowe lotnisko w Wilnie (VNO). Stała cena, profesjonalny kierowca, pełna pomoc na granicy białorusko-litewskiej.",
    seoIntro: "Istnieją trzy główne sposoby podróżowania z Mińska na lotnisko w Wilnie (VNO): autokar rozkładowy, wspólny minibus lub prywatny transfer. Najszybszy i najwygodniejszy jest transfer prywatny: odbiór pod drzwi w Mińsku, dowóz bezpośrednio pod terminal VNO, stała cena za cały samochód (1–3 pasażerów) – bez licznika. Trasa ~175 km przez przejście graniczne Kamenny Log/Kotlovka zajmuje 2,5–5 godzin w zależności od kolejek. Jeździmy komfortowym Volkswagenem Passatem lub biznesowym Mercedesem E-klasą.",
    comparisonTitle: "Jak dojechać: autokar, minibus, prywatny transfer",
    comparisonIntro: "Porównanie trzech głównych sposobów podróży z Mińska na lotnisko w Wilnie (VNO):",
    comparison: {
      headers: ["Transport", "Cena", "Czas podróży", "Najlepsze dla"],
      rows: [
        ["Autokar rozkładowy (Ecolines, Lux Express)", "Według taryfy przewoźnika", "5–7 godzin + oczekiwanie na granicy", "Podróżujący samotnie z ograniczonym budżetem i lekkim bagażem"],
        ["Wspólny minibus (Minsktrans, prywatny)", "Według taryfy przewoźnika", "4–6 godz", "1 pasażer z lekkim bagażem"],
        ["Prywatny transfer ComfortLine", "Stała cena za samochód (1–4 os.) — na zapytanie", "2,5–5 godzin od drzwi do terminala", "Rodziny, podróże służbowe, nocne/wczesne loty, dużo bagażu"],
      ],
    },
    stats: [
      { label: "Dystans", value: "~175 km" },
      { label: "Czas podróży", value: "2,5–5 godz" },
      { label: "Klasa pojazdu", value: "Komfort / Biznes" },
      { label: "Ulec poprawie", value: "Od drzwi do drzwi" },
    ],
    howTitle: "Jak działa transfer",
    steps: [
      { icon: MapPin, title: "Odbiór drzwi", desc: "Twój kierowca dotrze pod Twój adres w Mińsku dokładnie na czas." },
      { icon: ShieldCheck, title: "Przejście graniczne", desc: "Białoruś – Litwa. Twój kierowca zna procedury graniczne i monitoruje stan kolejek." },
      { icon: Plane, title: "Przylot na lotnisko", desc: "Dostarczone bezpośrednio do odpowiedniego terminala na długo przed lotem." },
    ],
    airportTitle: "Port Lotniczy Wilno (VNO)",
    airportInfo: [
      { label: "Pełne imię i nazwisko", value: "Międzynarodowy Port Lotniczy w Wilnie" },
      { label: "Kod IATA", value: "VNO" },
      { label: "Adres", value: "Rodūnios kelias 10A, Wilno, Litwa" },
      { label: "Terminale", value: "1 terminal (wszystkie loty)" },
      { label: "Główne linie lotnicze", value: "Ryanair, Wizz Air, LOT, Turkish Airlines, flydubai" },
      { label: "Transfer miejski", value: "Autobus nr 1 (40 min), taksówka (25–35 min)" },
    ],
    photosTitle: "Galeria Lotniska",
    photos: [
      { src: "/vilnius-airport-exterior.jpg", caption: "Terminal lotniska w Wilnie (VNO)" },
      { src: "/vilnius-airport-interior.jpg", caption: "Hala odlotów lotniska w Wilnie" },
    ],
    tipsTitle: "Przydatne informacje",
    tips: [
      "Lotnisko działa 24 godziny na dobę, 7 dni w tygodniu. Loty wcześnie rano i późno w nocy są powszechne.",
      "Przejście graniczne Białoruś – Litwa: średnio 1–3 godziny, w pracowite dni do 5 godzin.",
      "Zalecamy wyruszenie na 4–5 godzin przed lotem.",
      "W jednym terminalu dostępne jest bezpłatne Wi-Fi, kawiarnie i strefy odpoczynku.",
      "Stanowiska odprawy czynne są 2–3 godziny przed odlotem.",
      "Wilno to popularna alternatywa dla Warszawy — często tańsze loty z VNO.",
    ],
    whyTitle: "Dlaczego ComfortLine",
    whyItems: [
      "Stała cena — bez licznika, bez ukrytych dodatków",
      "Kierowca doświadczony w przejściach granicznych",
      "Foteliki dziecięce dostępne na życzenie",
      "Spotkania i powitania na tablicy ogłoszeń w sprawie transferów powrotnych",
      "Pomoc bagażowa wliczona w cenę",
      "Dostępność 24 godziny na dobę, 7 dni w tygodniu, także w święta",
    ],
    faqTitle: "Często zadawane pytania — Mińsk do lotniska w Wilnie",
    faq: [
      { q: "Ile kosztuje transfer z Mińska na lotnisko w Wilnie (VNO)?", a: "Cena na zapytanie – prosimy o kontakt. Dokładna liczba zależy od klasy pojazdu (komfort/biznes/minivan), tego, czy potrzebujesz fotelika dziecięcego, czy podróżujesz ze zwierzęciem, adresu odbioru w Mińsku i wszelkich innych specjalnych życzeń. Nasz menadżer potwierdza stałą cenę (bez licznika) obejmującą paliwo, ubezpieczenie, pomoc graniczną, wodę butelkowaną i bagaż już wliczony w cenę – bez żadnych dodatkowych opłat przy odbiorze i nadaniu." },
      { q: "Jak długo trwa podróż z Mińska do VNO?", a: "Sam dojazd ~175 km autostradą M7 trwa około 2 godzin. Dolicz 1–3 godziny (do 4–5 w dni szczytu) na przejście graniczne Kamenny Log/Kotlovka. Zaplanuj podróż od drzwi do terminala na 2,5–5 godzin. Zalecamy opuszczenie Mińska na 4–5 godzin przed lotem." },
      { q: "Z jakiego przejścia granicznego korzystasz?", a: "Domyślnie Kamenny Log (Białoruś) — Medininkai (Litwa), zwana także „Kotłowką” — główne przejście pasażerskie na tej trasie. Jeśli kolejki są duże, kierowca może przesiąść się na Benyakoni — Salčininkai. Decyzja zapada rano na podstawie warunków na żywo." },
      { q: "Jakie dokumenty potrzebuję, aby wjechać na Litwę?", a: "Ważny paszport i wiza Schengen (dla obywateli Białorusi, Rosji i innych, którzy jej potrzebują). Obywatele UE/Litwy — paszport lub dowód osobisty. Dzieci muszą posiadać własny paszport. Zalecane jest ubezpieczenie medyczne strefy Schengen." },
      { q: "Czy autokar jest tańszy niż prywatny transfer?", a: "Jeśli podróżujesz samotnie z małą torbą — tak, rozkładowy autokar (Ecolines, Lux Express) jest zazwyczaj tańszy w przeliczeniu na osobę. Jeśli podróżujesz z bagażem w parze, rodzinie lub grupie, prywatny transfer jest często tańszy w przeliczeniu na osobę i 1–3 godziny szybszy dzięki bezpośredniemu serwisowi od drzwi do terminala, bez przesiadek i nocnego czekania na dworcu autobusowym. Zapytaj naszego menadżera o dokładną wycenę w zależności od wielkości imprezy." },
      { q: "Czy obsługujecie loty w nocy czy poranne loty?", a: "Tak, działamy 24 godziny na dobę, 7 dni w tygodniu, także w święta. W przypadku lotów w godzinach 5:00–7:00 zazwyczaj wypływamy z Mińska o 23:00–00:00. Brak dopłat za noclegi i święta." },
      { q: "Czy dostępny jest transfer z lotniska w Wilnie do Mińska?", a: "Tak. Kierowca czeka na Ciebie w hali przylotów VNO z tabliczką z nazwiskiem (bezpłatnie), pomaga z bagażem i podwozi pod Twój adres w Mińsku. Zarezerwuj oba kierunki w jednym zapytaniu — 5% rabatu." },
      { q: "Czy mogę poprosić o fotelik dziecięcy?", a: "Tak — foteliki dziecięce i podstawki są dostarczane bezpłatnie na życzenie przy rezerwacji. Proszę podać wiek dziecka." },
    ],
    ctaTitle: "Zarezerwuj swój transfer",
    ctaDesc: "Prześlij zapytanie, a nasz menedżer wkrótce skontaktuje się z Tobą i poda dokładną cenę.",
    ctaBtn: "Poproś o rezerwację",
    backBtn: "← Wszystkie usługi",
  },
  fr: {
    badge: "Transfert",
    title: "Transfert de Minsk à l'aéroport de Vilnius (VNO)",
    subtitle: "Transfert privé de porte à porte de Minsk à l'aéroport international de Vilnius (VNO). Prix ​​fixe, chauffeur professionnel, assistance complète à la frontière Biélorussie-Lituanie.",
    seoIntro: "Il existe trois moyens principaux de voyager de Minsk à l'aéroport de Vilnius (VNO) : un autocar régulier, un minibus partagé ou un transfert privé. Le plus rapide et le plus pratique est un transfert privé : prise en charge à la porte à Minsk, dépose directement au terminal VNO, prix fixe pour la voiture entière (1 à 3 passagers) — pas de compteur. Le parcours d'environ 175 km via le poste frontière de Kamenny Log / Kotlovka prend 2,5 à 5 heures en fonction des files d'attente. Nous utilisons une Volkswagen Passat de classe confort ou une Mercedes Classe E de classe affaires.",
    comparisonTitle: "Comment s'y rendre : autocar, minibus, transfert privé",
    comparisonIntro: "Comparaison des trois principaux moyens de transport de Minsk à l'aéroport de Vilnius (VNO) :",
    comparison: {
      headers: ["Transport", "Prix", "Temps de trajet", "Idéal pour"],
      rows: [
        ["Autocar régulier (Ecolines, Lux Express)", "Tarif par transporteur", "5 à 7 heures + attente à la frontière", "Voyageurs solitaires à petit budget avec bagages légers"],
        ["Minibus partagé (Minsktrans, privé)", "Tarif par transporteur", "4 à 6 heures", "1 passager avec bagages légers"],
        ["Transfert privé ComfortLine", "Prix ​​fixe par voiture (1 à 4 personnes) — sur demande", "2,5 à 5 heures de la porte au terminal", "Familles, voyages d'affaires, vols de nuit/tôt, beaucoup de bagages"],
      ],
    },
    stats: [
      { label: "Distance", value: "~175km" },
      { label: "Temps de trajet", value: "2,5 à 5 heures" },
      { label: "Classe de véhicule", value: "Confort / Affaires" },
      { label: "Ramasser", value: "Porte-à-porte" },
    ],
    howTitle: "Comment fonctionne le transfert",
    steps: [
      { icon: MapPin, title: "Ramassage de porte", desc: "Votre chauffeur arrive à votre adresse à Minsk exactement à l'heure." },
      { icon: ShieldCheck, title: "Poste frontière", desc: "Biélorussie – Lituanie. Votre chauffeur connaît les routines frontalières et surveille les conditions de file d'attente." },
      { icon: Plane, title: "Arrivée à l'aéroport", desc: "Livré directement au bon terminal bien avant votre vol." },
    ],
    airportTitle: "Aéroport de Vilnius (VNO)",
    airportInfo: [
      { label: "Nom et prénom", value: "Aéroport international de Vilnius" },
      { label: "Code IATA", value: "VNO" },
      { label: "Adresse", value: "Rodūnios kelias 10A, Vilnius, Lituanie" },
      { label: "Terminaux", value: "1 terminal (tous les vols)" },
      { label: "Principales compagnies aériennes", value: "Ryanair, Wizz Air, LOT, Turkish Airlines, flydubai" },
      { label: "Transfert de ville", value: "Bus n°1 (40 min), taxi (25-35 min)" },
    ],
    photosTitle: "Galerie de l'aéroport",
    photos: [
      { src: "/vilnius-airport-exterior.jpg", caption: "Terminal de l'aéroport de Vilnius (VNO)" },
      { src: "/vilnius-airport-interior.jpg", caption: "Hall des départs de l’aéroport de Vilnius" },
    ],
    tipsTitle: "Informations utiles",
    tips: [
      "L'aéroport fonctionne 24h/24 et 7j/7. Les vols tôt le matin et tard le soir sont courants.",
      "Passage de la frontière entre la Biélorussie et la Lituanie : 1 à 3 heures en moyenne, jusqu'à 5 heures les jours de pointe.",
      "Nous vous recommandons de partir 4 à 5 heures avant votre vol.",
      "Une connexion Wi-Fi gratuite, des cafés et des zones de repos sont disponibles dans le terminal unique.",
      "Les comptoirs d'enregistrement ouvrent 2 à 3 heures avant le départ.",
      "Vilnius est une alternative populaire à Varsovie — des vols souvent moins chers au départ de VNO.",
    ],
    whyTitle: "Pourquoi ComfortLine",
    whyItems: [
      "Prix ​​fixe — pas de compteur, pas d'extras cachés",
      "Chauffeur expérimenté aux passages de frontières",
      "Sièges enfants disponibles sur demande",
      "Rencontre et accueil sur un tableau de noms pour les transferts de retour",
      "Assistance bagages incluse",
      "Disponible 24h/24 et 7j/7 y compris les jours fériés",
    ],
    faqTitle: "Foire aux questions — Minsk à l'aéroport de Vilnius",
    faq: [
      { q: "Combien coûte un transfert de Minsk à l'aéroport de Vilnius (VNO) ?", a: "Le prix est sur demande – veuillez nous contacter. Le montant exact dépend de la classe du véhicule (confort/business/minivan), de la nécessité ou non d'un siège enfant, du fait que vous voyagez avec un animal de compagnie, de votre adresse de prise en charge à Minsk et de toute autre demande particulière. Notre responsable confirme un prix fixe (sans compteur) avec carburant, assurance, assistance aux frontières, eau en bouteille et bagages déjà inclus — aucun extra lors de la prise en charge ou du dépôt." },
      { q: "Quelle est la durée du trajet Minsk - VNO ?", a: "Le trajet lui-même, environ 175 km sur l'autoroute M7, dure environ 2 heures. Ajoutez 1 à 3 heures (jusqu'à 4 à 5 heures les jours de pointe) pour le poste frontière de Kamenny Log / Kotlovka. Prévoyez 2,5 à 5 heures de porte au terminal. Nous vous recommandons de quitter Minsk 4 à 5 heures avant votre vol." },
      { q: "Quel poste frontière utilisez-vous ?", a: "Par défaut, Kamenny Log (Biélorussie) — Medininkai (Lituanie), également connu sous le nom de « Kotlovka » — est le principal passage pour passagers sur cette route. Si les files d'attente sont nombreuses, le chauffeur peut passer à Benyakoni — Šalčininkai. La décision est prise le matin en fonction des conditions réelles." },
      { q: "De quels documents ai-je besoin pour entrer en Lituanie ?", a: "Un passeport valide et un visa Schengen (pour les ressortissants biélorusses, russes et autres qui en ont besoin). Citoyens de l’UE/lituaniens – passeport ou carte d’identité nationale. Les enfants ont besoin de leur propre passeport. Une assurance médicale espace Schengen est recommandée." },
      { q: "L'autocar est-il moins cher qu'un transfert privé ?", a: "Si vous voyagez seul avec un petit sac, oui, l'autocar régulier (Ecolines, Lux Express) est généralement moins cher par personne. Si vous voyagez en couple, en famille ou en groupe avec des bagages, un transfert privé est souvent moins cher par personne et 1 à 3 heures plus rapide grâce au service direct de porte à terminal sans transfert ni attente nocturne à la gare routière. Demandez à notre responsable le devis exact en fonction de la taille de votre groupe." },
      { q: "Opérez-vous de nuit ou pour des vols tôt le matin ?", a: "Oui, nous fonctionnons 24h/24 et 7j/7, y compris les jours fériés. Pour les vols de 5h00 à 7h00, nous partons généralement de Minsk entre 23h00 et minuit. Pas de supplément pour les nuits ou les jours fériés." },
      { q: "Le transfert aller-retour de l'aéroport de Vilnius à Minsk est-il disponible ?", a: "Oui. Le chauffeur vous attend dans le hall des arrivées de VNO avec une pancarte nominative (gratuite), vous aide à porter vos bagages et vous dépose à votre adresse à Minsk. Réservez dans les deux sens en une seule demande — 5 % de réduction." },
      { q: "Puis-je demander un siège enfant ?", a: "Oui, les sièges enfants et rehausseurs sont fournis gratuitement sur demande lors de la réservation. Merci de nous indiquer l'âge de l'enfant." },
    ],
    ctaTitle: "Réservez votre transfert",
    ctaDesc: "Soumettez une demande et notre responsable vous contactera sous peu avec un prix exact.",
    ctaBtn: "Demander une réservation",
    backBtn: "← Tous les services",
  },
};

export default function MinskVilniusAirportPage() {
  const { lang, locale } = useLang();
  const c = content[locale as keyof typeof content] ?? content.en;
  const isRu = lang === "ru";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        titleRu="Такси Минск — аэропорт Вильнюса | Индивидуальный трансфер"
        titleEn="Minsk to Vilnius Airport (VNO) Private Transfer | ComfortLine"
        descRu="Такси и индивидуальный трансфер Минск — аэропорт Вильнюса (VNO) — Минск. Фиксированная цена, подача от двери, помощь на границе, работа 24/7."
        descEn="Private Minsk to Vilnius Airport (VNO) transfer: 175 km, fixed fare, door-to-door pickup and Belarus–Lithuania border assistance."
        pathRu="/трансфер-минск-вильнюс-аэропорт"
        pathEn="/minsk-vilnius-airport"
        keywordsRu="такси минск аэропорт вильнюса, такси аэропорт вильнюса минск, индивидуальный трансфер минск вильнюс, трансфер минск vno, частный трансфер минск вильнюс"
        keywordsEn="minsk vilnius airport transfer, minsk to vno taxi, private transfer minsk vilnius, vilnius international airport ride, belarus lithuania border transfer"
        breadcrumbsRu={[
          { name: "Главная", path: "/" },
          { name: "Трансфер Минск — Аэропорт Вильнюса (VNO)", path: "/трансфер-минск-вильнюс-аэропорт" },
        ]}
        breadcrumbsEn={[
          { name: "Home", path: "/" },
          { name: "Minsk — Vilnius Airport (VNO)", path: "/minsk-vilnius-airport" },
        ]}
        jsonLd={[
          taxiServiceJsonLd({
            lang,
            name: isRu ? "Трансфер Минск — Аэропорт Вильнюса (VNO)" : "Minsk to Vilnius Airport (VNO) Transfer",
            description: isRu
              ? "Индивидуальный трансфер из Минска в международный аэропорт Вильнюса (VNO). Фиксированная цена, подача от двери, опытный водитель."
              : "Private door-to-door transfer from Minsk to Vilnius International Airport (VNO). Fixed price, professional driver.",
            url: SITE_URL + (isRu ? "/трансфер-минск-вильнюс-аэропорт" : "/minsk-vilnius-airport"),
            fromName: isRu ? "Минск" : "Minsk",
            toName: isRu ? "Аэропорт Вильнюса (VNO)" : "Vilnius International Airport (VNO)",
            priceCurrency: "EUR",
          }),
          faqJsonLd(c.faq.map((f) => ({ question: f.q, answer: f.a }))),
        ]}
      />
      <Navbar />

      {/* Hero */}
      <div className="pt-28 pb-14 border-b border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative">
          <a href={getHomeSectionHref(lang, "services")} className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors mb-6">
            {c.backBtn}
          </a>
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary mb-4">
            {c.badge}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            {c.title}
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-6">
            {c.subtitle}
          </p>
          <p className="text-muted-foreground/90 text-sm md:text-[15px] leading-relaxed max-w-3xl mb-10">
            {c.seoIntro}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {c.stats.map((s) => (
              <div key={s.label} className="bg-card border border-border rounded-xl p-4">
                <p className="text-primary font-bold text-lg">{s.value}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-booking-modal", {
                detail: {
                  prefilledFrom:
                  locale === "ru" ? "Минск" : locale === "pl" ? "Mińsk" : "Minsk",
                  prefilledTo:
                  locale === "ru"
                    ? "${m[1]}"
                    : locale === "pl"
                      ? "${destMap[1]}"
                      : locale === "fr"
                        ? "${destMap[0]}"
                        : "${m[2]}",
                }
              }))}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20 cursor-pointer"
            >
              {locale === "ru"
                ? "Забронировать трансфер"
                : locale === "pl"
                  ? "Zarezerwuj transfer"
                  : locale === "fr"
                    ? "Réserver le transfert"
                    : "Book transfer"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl py-14 space-y-16">

        {/* Price/transport comparison — AI-overview style */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-3">
            <Wallet className="h-5 w-5 text-primary" />
            {c.comparisonTitle}
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-2xl">{c.comparisonIntro}</p>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-primary/5">
                  {c.comparison.headers.map((h) => (
                    <th key={h} scope="col" className="px-4 py-3 text-left font-semibold text-foreground whitespace-nowrap text-xs uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.comparison.rows.map((row, i) => (
                  <tr key={i} className={`${i < c.comparison.rows.length - 1 ? "border-b border-border/50" : ""} ${i === c.comparison.rows.length - 1 ? "bg-primary/[0.04]" : ""}`}>
                    {row.map((cell, j) => (
                      <td key={j} className={`px-4 py-3 align-top ${j === 0 ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* How it works */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-8">{c.howTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.steps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 relative">
                  <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                    {i + 1}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <StepIcon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  {i < c.steps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/40 z-10" />
                  )}
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* Airport Info */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Info className="h-5 w-5 text-primary" />
            {c.airportTitle}
          </h2>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {c.airportInfo.map((row, i) => (
              <div key={i} className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-6 py-4 ${i < c.airportInfo.length - 1 ? "border-b border-border/50" : ""}`}>
                <span className="text-muted-foreground text-sm min-w-[180px] shrink-0">{row.label}</span>
                <span className="text-foreground text-sm font-medium">{row.value}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Airport Photos */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            {c.photosTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {c.photos.map((photo, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden aspect-video bg-card border border-border">
                <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tips */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Clock className="h-5 w-5 text-primary" />
            {c.tipsTitle}
          </h2>
          <ul className="space-y-3">
            {c.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Related routes — internal SEO links */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Plane className="h-5 w-5 text-primary" />
            {isRu ? "Похожие направления" : "Related transfers"}
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-2xl">
            {isRu
              ? "Если из Вильнюса нет нужного рейса — рассмотрите альтернативные аэропорты с прямым трансфером из Минска:"
              : "If Vilnius doesn't have your flight, consider these alternative airports with direct transfer from Minsk:"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href={isRu ? "/трансфер-минск-варшава-шопен" : "/minsk-warsaw-airport"}
              className="block bg-card border border-border rounded-2xl p-5 hover:border-primary/50 hover:bg-primary/5 transition-colors group"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {isRu ? "Трансфер Минск — Аэропорт Варшавы Шопен (WAW)" : "Minsk — Warsaw Chopin Airport (WAW)"}
                </p>
                <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {isRu
                  ? "~550 км, 6–10 ч. Главный международный аэропорт Польши. LOT, Lufthansa, Turkish Airlines."
                  : "~550 km, 6–10 hrs. Poland's main international airport. LOT, Lufthansa, Turkish Airlines."}
              </p>
            </a>
            <a
              href={isRu ? "/трансфер-минск-варшава-модлин" : "/minsk-warsaw-modlin-airport"}
              className="block bg-card border border-border rounded-2xl p-5 hover:border-primary/50 hover:bg-primary/5 transition-colors group"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {isRu ? "Трансфер Минск — Аэропорт Варшавы Модлин (WMI)" : "Minsk — Warsaw Modlin Airport (WMI)"}
                </p>
                <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {isRu
                  ? "~600 км, 7–10 ч. Бюджетный хаб Ryanair и Wizz Air, в 35 км от центра Варшавы."
                  : "~600 km, 7–10 hrs. Ryanair and Wizz Air budget hub, 35 km from central Warsaw."}
              </p>
            </a>
          </div>
        </motion.section>

        {/* Why ComfortLine */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Car className="h-5 w-5 text-primary" />
            {c.whyTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {c.whyItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl px-5 py-4">
                <span className="text-primary mt-0.5 shrink-0">▸</span>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <HelpCircle className="h-5 w-5 text-primary" />
            {c.faqTitle}
          </h2>
          <div className="space-y-3">
            {c.faq.map((entry, i) => (
              <VilniusFaqItem key={i} q={entry.q} a={entry.a} />
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 md:p-10 text-center">
            <PhoneCall className="h-8 w-8 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-3">{c.ctaTitle}</h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">{c.ctaDesc}</p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-booking-modal", {
                detail: {
                  prefilledFrom: lang === "ru" ? "Минск" : "Minsk",
                  prefilledTo: lang === "ru" ? "Аэропорт Вильнюса (VNO)" : "Vilnius Airport (VNO)",
                }
              }))}
              className="inline-block px-10 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20 cursor-pointer"
            >
              {c.ctaBtn}
            </button>
          </div>
        </motion.section>

      </div>

      <GlobalBookingModal />
      <Footer />
    </div>
  );
}
let vilniusFaqUid = 0;
function VilniusFaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const [id] = useState(() => `vno-faq-${++vilniusFaqUid}`);
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-primary/5 transition-colors"
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="text-sm font-semibold text-foreground">{q}</span>
        <ChevronDown className={`h-4 w-4 text-primary shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div id={id} role="region" className="px-5 pb-4 -mt-1 text-sm text-muted-foreground leading-relaxed">{a}</div>
      )}
    </div>
  );
}
