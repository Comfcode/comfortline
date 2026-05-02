import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLang } from "@/context/language-context";

interface FaqItem {
  q: string;
  a: string | string[];
  sub?: string[];
}

interface FaqSection {
  icon: string;
  title: string;
  items: FaqItem[];
}

const ruFaq: FaqSection[] = [
  {
    icon: "📅",
    title: "Бронирование и заказ",
    items: [
      {
        q: "Как сделать заказ?",
        a: "Оставьте заявку на сайте или напишите нам в WhatsApp / Viber — менеджер свяжется в течение 15 минут и согласует все детали: маршрут, время, класс автомобиля и стоимость.",
      },
      {
        q: "За сколько времени нужно бронировать?",
        a: "Рекомендуем оформлять заказ минимум за 24 часа до поездки. Для международных трансферов лучше — за 2–3 дня, особенно в пиковые периоды.",
      },
      {
        q: "Можно ли изменить или отменить заказ?",
        a: "Да. Свяжитесь с нами как можно раньше — по телефону или в мессенджере. Условия отмены зависят от времени до поездки и будут оговорены при бронировании.",
      },
      {
        q: "Что будет, если мой рейс задержали?",
        a: "Мы отслеживаем статус вашего рейса и корректируем время встречи автоматически. Водитель будет ждать вас — доплат за ожидание при задержке рейса нет.",
      },
    ],
  },
  {
    icon: "💳",
    title: "Цены и оплата",
    items: [
      {
        q: "Сколько стоит трансфер?",
        a: "Цена зависит от маршрута и класса автомобиля. Вы получаете фиксированную стоимость до поездки — без скрытых доплат и счётчика. Уточнить цену по конкретному направлению можно через форму на сайте или в WhatsApp.",
      },
      {
        q: "Как можно оплатить?",
        a: "Принимаем наличные и банковскую карту. Точный способ оплаты согласовывается при подтверждении заказа.",
      },
      {
        q: "Есть ли скрытые доплаты?",
        a: "Нет. Вы платите ровно ту сумму, которая была согласована при бронировании. Ожидание при задержке рейса, встреча с табличкой, помощь с багажом — всё включено.",
      },
      {
        q: "Можно ли получить чек или документ для отчётности?",
        a: "Да, по запросу предоставим необходимые документы. Уточните это при оформлении заказа.",
      },
    ],
  },
  {
    icon: "✈️",
    title: "Встреча и посадка",
    items: [
      {
        q: "Где именно водитель встретит меня в аэропорту?",
        a: "Водитель ждёт вас в зале прилётов с именной табличкой. Мы заранее согласуем точное место встречи и отправим контакт водителя.",
      },
      {
        q: "Помогут ли с багажом?",
        a: "Да. Водитель поможет загрузить и выгрузить вещи. Это стандартная часть нашего сервиса.",
      },
      {
        q: "Водитель приедет прямо к выходу из моего дома?",
        a: "Да. Трансфер — «от двери до двери». Водитель приедет по указанному вами адресу точно в назначенное время.",
      },
    ],
  },
  {
    icon: "🌍",
    title: "Граница и документы",
    items: [
      {
        q: "Нужно ли менять машину на границе?",
        a: "В некоторых случаях — да, в зависимости от действующих правил регистрации ТС и пограничной политики. Если пересадка нужна, мы организуем её быстро и комфортно: водитель с европейской стороны уже будет ждать вас.",
      },
      {
        q: "Сколько времени займёт пересечение границы?",
        a: "В среднем от 2 до 12 часов — зависит от очереди, времени суток и пропускного пункта. Мы отслеживаем очереди в реальном времени и выбираем наиболее свободный КПП.",
      },
      {
        q: "Какие документы нужны для пересечения границы?",
        a: "Для поездки в ЕС вам понадобятся:",
        sub: ["Действующий загранпаспорт", "Виза или право на безвизовый въезд", "Медицинская страховка (обязательна для стран Шенгена)", "Другие документы по требованию конкретной страны"],
      },
      {
        q: "Помогает ли водитель на КПП?",
        a: "Да. Водитель сопровождает вас, знает актуальные правила на пропускных пунктах и поможет сориентироваться. Ваша задача — только иметь при себе актуальные документы.",
      },
    ],
  },
  {
    icon: "🚘",
    title: "Автомобили и комфорт",
    items: [
      {
        q: "Какие автомобили у вас есть?",
        a: "В автопарке ComfortLine:",
        sub: ["Бизнес-седаны — до 3–4 пассажиров, просторный багажник", "Минивэны — до 7–8 пассажиров, большое грузовое отделение", "Автомобили бизнес- и премиум-класса для VIP-поездок"],
      },
      {
        q: "Есть ли Wi-Fi и зарядка в машине?",
        a: "Да — в наших автомобилях есть Wi-Fi и USB/зарядки для телефонов.",
      },
      {
        q: "Можно ли остановиться в пути?",
        a: "Да. Мы делаем остановки по запросу — на заправке, кафе или по другой причине. Просто сообщите водителю заранее или во время поездки.",
      },
      {
        q: "Курение в машине разрешено?",
        a: "Нет. Курение в автомобиле запрещено. При необходимости водитель сделает остановку.",
      },
    ],
  },
  {
    icon: "👶",
    title: "Дети и питомцы",
    items: [
      {
        q: "Можно ли заказать детское кресло?",
        a: "Да. Детские автокресла и бустеры предоставляются по предварительному запросу. Укажите возраст и вес ребёнка при бронировании — мы подберём подходящее кресло.",
      },
      {
        q: "Можно ли ехать с грудным ребёнком?",
        a: "Да, мы регулярно перевозим семьи с маленькими детьми. Уточните при заказе — водитель будет готов к комфортной остановке при необходимости.",
      },
      {
        q: "Можно ли взять питомца в поездку?",
        a: "По предварительному согласованию — да. Уточните при бронировании: породу, размер животного и наличие переноски. Мы постараемся подобрать подходящий автомобиль.",
      },
    ],
  },
  {
    icon: "🧳",
    title: "Багаж",
    items: [
      {
        q: "Сколько багажа можно взять?",
        a: "Зависит от выбранного автомобиля. Седаны вмещают 2–3 стандартных чемодана. Минивэны — значительно больше, подходят для больших семей и объёмного груза.",
      },
      {
        q: "Можно ли перевезти велосипед, самокат или лыжи?",
        a: "По предварительной договорённости — да. Сообщите нам о габаритном грузе заранее, и мы подберём подходящий автомобиль.",
      },
      {
        q: "Можно ли везти много вещей при переезде?",
        a: "Да. Для переездов с большим количеством вещей подходит минивэн с вместительным багажным отделением. Обсудите объём при бронировании.",
      },
    ],
  },
  {
    icon: "🗺️",
    title: "Маршруты и направления",
    items: [
      {
        q: "В каких направлениях вы работаете?",
        a: "Основные маршруты ComfortLine:",
        sub: ["Минск ↔ Варшава (аэропорт Шопен и Модлин)", "Минск ↔ Вильнюс (аэропорт VNO)", "Минск ↔ Берлин", "Минск ↔ Прага", "По Беларуси и в Россию", "Групповые трансферы"],
      },
      {
        q: "Работаете ли вы по Минску и Беларуси?",
        a: "Да. Мы выполняем трансферы по всему Минску (аэропорт, вокзал, отели, офисы) и по всей Беларуси.",
      },
      {
        q: "Работаете ли вы 24/7?",
        a: "Да. Принимаем заказы и выполняем поездки круглосуточно, включая выходные и праздники.",
      },
    ],
  },
];

const enFaq: FaqSection[] = [
  {
    icon: "📅",
    title: "Booking & Orders",
    items: [
      {
        q: "How do I book a transfer?",
        a: "Submit a request on our website or message us on WhatsApp / Viber — a manager will contact you within 15 minutes to confirm the route, timing, vehicle class, and exact price.",
      },
      {
        q: "How far in advance should I book?",
        a: "We recommend booking at least 24 hours ahead. For international transfers, 2–3 days is ideal — especially during busy periods.",
      },
      {
        q: "Can I change or cancel my booking?",
        a: "Yes. Contact us as soon as possible by phone or messenger. Cancellation terms depend on how much time is left before your journey and will be agreed when booking.",
      },
      {
        q: "What if my flight is delayed?",
        a: "We monitor your flight status and adjust the pickup time automatically. Your driver will wait — there are no extra charges for flight delay waiting.",
      },
    ],
  },
  {
    icon: "💳",
    title: "Pricing & Payment",
    items: [
      {
        q: "How much does a transfer cost?",
        a: "The price depends on the route and vehicle class. You receive a fixed, agreed price before the trip — no hidden charges, no meter. Request a quote via the website form or WhatsApp.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash and bank card. The exact payment method is confirmed when your booking is finalised.",
      },
      {
        q: "Are there any hidden fees?",
        a: "No. You pay exactly the amount agreed at booking. Flight-delay waiting, airport meet & greet, and luggage assistance are all included.",
      },
      {
        q: "Can I get a receipt or invoice?",
        a: "Yes — on request. Let us know when you book and we will prepare the necessary documents.",
      },
    ],
  },
  {
    icon: "✈️",
    title: "Pickup & Drop-off",
    items: [
      {
        q: "Where exactly will the driver meet me at the airport?",
        a: "Your driver waits in the arrivals hall with a name board. We agree the exact meeting point in advance and send you the driver's contact details.",
      },
      {
        q: "Will the driver help with luggage?",
        a: "Yes. Loading and unloading luggage is a standard part of our service.",
      },
      {
        q: "Will the driver come to my front door?",
        a: "Yes. This is a true door-to-door service. Your driver arrives at the address you provide, exactly on time.",
      },
    ],
  },
  {
    icon: "🌍",
    title: "Border & Documents",
    items: [
      {
        q: "Do I need to change cars at the border?",
        a: "Sometimes, yes — depending on current vehicle registration rules and border policy. If a transfer is needed, we organise it seamlessly: a driver on the European side will already be waiting for you.",
      },
      {
        q: "How long does the border crossing take?",
        a: "Typically 2–12 hours, depending on the queue, time of day, and checkpoint. We monitor queues in real time and choose the least congested crossing.",
      },
      {
        q: "What documents do I need for the EU border?",
        a: "For travel to the EU you will need:",
        sub: ["Valid international passport", "Schengen visa or visa-free eligibility", "Medical / travel insurance (required for Schengen countries)", "Any additional documents required by the specific country"],
      },
      {
        q: "Will the driver help at the checkpoint?",
        a: "Yes. Your driver knows current border procedures and will guide you through. You only need to have your own documents ready.",
      },
    ],
  },
  {
    icon: "🚘",
    title: "Vehicles & Comfort",
    items: [
      {
        q: "What vehicles are available?",
        a: "The ComfortLine fleet includes:",
        sub: ["Executive sedans — up to 3–4 passengers, generous boot", "Premium minivans — up to 7–8 passengers, large cargo space", "Business and luxury-class cars for VIP trips"],
      },
      {
        q: "Is there Wi-Fi and phone charging in the car?",
        a: "Yes — all our vehicles are equipped with Wi-Fi and USB / power charging points.",
      },
      {
        q: "Can we stop during the journey?",
        a: "Yes. We make stops on request — at a petrol station, cafe, or anywhere else. Just let the driver know in advance or during the trip.",
      },
      {
        q: "Is smoking allowed in the car?",
        a: "No. Smoking inside the vehicle is not permitted. The driver will be happy to make a stop if needed.",
      },
    ],
  },
  {
    icon: "👶",
    title: "Children & Pets",
    items: [
      {
        q: "Can I request a child seat?",
        a: "Yes. Child seats and booster seats are available on request. Please provide the child's age and weight when booking so we can fit the right seat.",
      },
      {
        q: "Can I travel with an infant?",
        a: "Yes — we regularly travel with families with young children. Mention it when booking and the driver will be ready for comfortable stops when needed.",
      },
      {
        q: "Can I bring a pet?",
        a: "By prior arrangement — yes. Let us know the breed, size, and whether you have a carrier when booking. We will do our best to assign a suitable vehicle.",
      },
    ],
  },
  {
    icon: "🧳",
    title: "Luggage",
    items: [
      {
        q: "How much luggage can I bring?",
        a: "It depends on the vehicle. Sedans comfortably fit 2–3 standard suitcases. Minivans offer significantly more space — perfect for families and bulky items.",
      },
      {
        q: "Can I bring a bicycle, scooter, or skis?",
        a: "By prior arrangement — yes. Let us know about oversized items when booking and we will choose the right vehicle.",
      },
      {
        q: "I'm moving and have a lot of bags. Can you help?",
        a: "Yes. Our minivans have a very large cargo area — ideal for relocation trips. Discuss the volume with us when booking.",
      },
    ],
  },
  {
    icon: "🗺️",
    title: "Routes & Destinations",
    items: [
      {
        q: "Which routes do you cover?",
        a: "Main ComfortLine routes:",
        sub: ["Minsk ↔ Warsaw (Chopin & Modlin airports)", "Minsk ↔ Vilnius (VNO airport)", "Minsk ↔ Berlin", "Minsk ↔ Prague", "Across Belarus and to Russia", "Group transfers"],
      },
      {
        q: "Do you operate within Minsk and Belarus?",
        a: "Yes. We handle transfers across all of Minsk (airport, station, hotels, offices) and throughout Belarus.",
      },
      {
        q: "Do you operate 24/7?",
        a: "Yes. We accept bookings and run journeys around the clock, including weekends and public holidays.",
      },
    ],
  },
];

function AccordionItem({ item, isOpen, onToggle }: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`border rounded-xl overflow-hidden transition-colors ${isOpen ? "border-primary/40 bg-card" : "border-border bg-card/50"}`}>
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-foreground leading-snug pr-4">{item.q}</span>
        <ChevronDown className={`h-4 w-4 text-primary shrink-0 mt-0.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm text-muted-foreground space-y-2">
              {item.a && <p>{item.a}</p>}
              {item.sub && (
                <ul className="space-y-1.5 mt-2">
                  {item.sub.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1 shrink-0">▸</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  const { t, lang } = useLang();
  const sections = lang === "ru" ? ruFaq : enFaq;
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});

  function toggle(key: string) {
    setOpenMap(m => ({ ...m, [key]: !m[key] }));
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <div className="pt-28 pb-12 border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <p className="text-primary font-semibold tracking-wider uppercase text-xs mb-3">
            {lang === "ru" ? "Частые вопросы" : "Frequently Asked Questions"}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            FAQ
          </h1>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-5" />
          <p className="text-muted-foreground text-base">
            {lang === "ru"
              ? "Всё, что вам нужно знать о трансфере с ComfortLine"
              : "Everything you need to know about travelling with ComfortLine"}
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 md:px-6 max-w-3xl py-14 space-y-12">
        {sections.map((section) => (
          <div key={section.title}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">{section.icon}</span>
              <h2 className="text-lg font-bold text-foreground">{section.title}</h2>
              <div className="flex-1 h-px bg-border/40" />
            </div>
            <div className="space-y-3">
              {section.items.map((item, i) => {
                const key = `${section.title}-${i}`;
                return (
                  <AccordionItem
                    key={key}
                    item={item}
                    isOpen={!!openMap[key]}
                    onToggle={() => toggle(key)}
                  />
                );
              })}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
          <p className="text-foreground font-bold text-lg mb-2">
            {lang === "ru" ? "Остались вопросы?" : "Still have questions?"}
          </p>
          <p className="text-muted-foreground text-sm mb-5">
            {lang === "ru"
              ? "Свяжитесь с нами — ответим быстро и подберём маршрут под ваши задачи."
              : "Contact us — we respond fast and will find the right route for you."}
          </p>
          <a
            href="/#contact"
            className="inline-block px-8 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
          >
            {lang === "ru" ? "Связаться с нами" : "Contact us"}
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
