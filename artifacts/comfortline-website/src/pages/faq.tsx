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
    icon: "🌍",
    title: "Трансфер через границу",
    items: [
      {
        q: "Как работает трансфер ЕС – Беларусь?",
        a: "Comfortline.by организует поездку «под ключ»:",
        sub: ["Подача автомобиля по адресу", "Профессиональный водитель", "Помощь при пересечении границы", "Доставка в Минск или любой город"],
      },
      {
        q: "Возможен ли проезд через границу без пересадки?",
        a: "Иногда да. Если действуют ограничения — мы организуем водителя с европейской стороны и встречу на стороне Беларуси. Это самый быстрый и безопасный вариант.",
      },
      {
        q: "Нужно ли менять автомобиль на границе?",
        a: "В некоторых случаях — да, это зависит от правил регистрации транспортного средства и текущей пограничной политики. Мы делаем процесс быстрым, удобным и полностью организованным.",
      },
      {
        q: "Сколько занимает пересечение границы?",
        a: "В среднем: 2–12+ часов. Время зависит от очереди, времени суток и процедур погранконтроля. Мы отслеживаем ситуацию в реальном времени и подбираем оптимальный маршрут.",
      },
    ],
  },
  {
    icon: "🚘",
    title: "Маршруты и направления",
    items: [
      {
        q: "Трансфер в Минск доступен?",
        a: "Да, популярные направления:",
        sub: ["Варшава – Минск", "Вильнюс – Минск", "Рига – Минск"],
      },
      {
        q: "В каких странах вы работаете?",
        a: "Мы обеспечиваем международный трансфер в:",
        sub: ["Польша", "Литва", "Латвия", "Германия", "Беларусь"],
      },
    ],
  },
  {
    icon: "💼",
    title: "Автопарк и водители",
    items: [
      {
        q: "Какие автомобили предлагает Comfortline.by?",
        a: "Наш автопарк включает:",
        sub: ["Бизнес-седаны (уровень Mercedes E/S-Class)", "Премиальные автомобили для VIP-клиентов", "Минивэны для групп"],
      },
      {
        q: "Кто ваши водители?",
        a: "Все водители опытны в международных поездках, профессиональны и пунктуальны, прошли подготовку по пограничным процедурам. Вы получаете настоящий chauffeur-сервис, а не просто такси.",
      },
    ],
  },
  {
    icon: "📄",
    title: "Документы для поездки",
    items: [
      {
        q: "Какие документы нужны для въезда в Беларусь?",
        a: "Пассажиры должны иметь:",
        sub: ["Действующий загранпаспорт", "Визу или право на безвизовый въезд", "Медицинскую страховку"],
      },
    ],
  },
  {
    icon: "💳",
    title: "Цены и бронирование",
    items: [
      {
        q: "Сколько стоит трансфер?",
        a: "Цена зависит от маршрута, класса автомобиля и ситуации на границе. Вы получаете фиксированную стоимость без скрытых платежей.",
      },
      {
        q: "Почему выбирают Comfortline.by?",
        a: "Ключевые преимущества:",
        sub: ["Премиум сервис", "Опыт международных поездок", "Поддержка на всех этапах", "Комфорт и безопасность"],
      },
      {
        q: "Как забронировать трансфер?",
        a: "Варианты бронирования:",
        sub: ["Форма на сайте", "WhatsApp / Viber", "Телефон"],
      },
    ],
  },
];

const enFaq: FaqSection[] = [
  {
    icon: "🌍",
    title: "Cross-Border Travel",
    items: [
      {
        q: "How does a private transfer from EU to Belarus work?",
        a: "With Comfortline.by, your EU to Belarus private transfer is fully managed:",
        sub: ["Door-to-door pickup", "Professional chauffeur", "Border coordination", "Continued journey to Minsk or any city in Belarus"],
      },
      {
        q: "Can your chauffeur drive across the EU–Belarus border?",
        a: "Yes — when regulations allow. If restrictions apply, we organize a seamless cross-border transfer with a chauffeur on the EU side and another waiting on the Belarus side. This ensures the fastest and legally compliant route.",
      },
      {
        q: "Do I need to change cars at the border?",
        a: "Sometimes, yes. This depends on vehicle registration rules and current border policies. With Comfortline.by, the transition is pre-arranged, fully synchronized, and comfortable.",
      },
      {
        q: "How long does the EU–Belarus border crossing take?",
        a: "Typical range: 2 to 12+ hours. Crossing time depends on queue length, time of day, and border control procedures. We monitor border conditions in real time to optimize your route.",
      },
    ],
  },
  {
    icon: "🚘",
    title: "Routes & Destinations",
    items: [
      {
        q: "Do you offer transfers to Minsk?",
        a: "Yes — we specialize in:",
        sub: ["Private transfer Warsaw → Minsk", "Chauffeur service Vilnius → Minsk", "Taxi Riga → Minsk"],
      },
      {
        q: "Which countries do you operate in?",
        a: "We provide international chauffeur services across:",
        sub: ["Poland", "Lithuania", "Latvia", "Germany", "Belarus"],
      },
    ],
  },
  {
    icon: "💼",
    title: "Service Level & Vehicles",
    items: [
      {
        q: "What vehicles does Comfortline.by offer?",
        a: "Our fleet includes:",
        sub: ["Executive sedans (Mercedes E/S-Class level)", "Luxury vehicles for VIP clients", "Premium minivans for groups"],
      },
      {
        q: "Who are your chauffeurs?",
        a: "All drivers are experienced in EU–Belarus transfers, professional, discreet, and punctual, and trained in border procedures. You receive a true chauffeur service, not just a taxi.",
      },
    ],
  },
  {
    icon: "📄",
    title: "Travel Requirements",
    items: [
      {
        q: "What documents are required for Belarus travel?",
        a: "Passengers must have:",
        sub: ["Valid passport", "Visa or visa-free eligibility", "Medical insurance"],
      },
    ],
  },
  {
    icon: "💳",
    title: "Pricing & Booking",
    items: [
      {
        q: "How much does a private transfer EU to Belarus cost?",
        a: "Pricing depends on distance and route, vehicle class, and border conditions. With Comfortline.by you get a fixed price in advance with no hidden fees.",
      },
      {
        q: "Why choose Comfortline.by instead of a regular taxi?",
        a: "Key advantages:",
        sub: ["Premium chauffeur experience", "Cross-border expertise", "Flexible routes and timing", "Full assistance at the border"],
      },
      {
        q: "How do I book a transfer?",
        a: "Booking options:",
        sub: ["Website request form", "WhatsApp / Viber", "Phone — fast response guaranteed"],
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
            {lang === "ru" ? "FAQ" : "FAQ"}
          </h1>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-5" />
          <p className="text-muted-foreground text-base">
            {lang === "ru"
              ? "Всё, что вам нужно знать о международном трансфере с Comfortline.by"
              : "Everything you need to know about international transfers with Comfortline.by"}
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
