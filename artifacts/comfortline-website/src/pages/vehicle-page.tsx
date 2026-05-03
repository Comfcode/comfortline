import { motion } from "framer-motion";
import { Users, Briefcase, Calendar, Shield, CheckCircle2, PhoneCall, ArrowRight, Plane, Car } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLang } from "@/context/language-context";
import { GlobalBookingModal } from "@/components/sections/GlobalBookingModal";
import { Seo } from "@/seo/Seo";
import { vehicleJsonLd } from "@/seo/jsonld";
import { SITE_URL } from "@/seo/seo-config";

const vehicleSeo: Record<string, { titleRu: string; titleEn: string; descRu: string; descEn: string; pathRu: string; pathEn: string; breadcrumbRu: string; breadcrumbEn: string }> = {
  "mercedes-e-class": {
    titleRu: "Mercedes-Benz E-Class — бизнес-седан для трансфера | ComfortLine",
    titleEn: "Mercedes-Benz E-Class — Business Sedan Transfer | ComfortLine",
    descRu: "Mercedes-Benz E-Class 2021 — представительский бизнес-седан с кожаным салоном и климат-контролем. Идеален для деловых поездок, встреч партнёров и трансферов в аэропорт. До 4 пассажиров, 2 чемодана.",
    descEn: "Mercedes-Benz E-Class 2021 — executive business sedan with leather interior and climate control. Ideal for business trips, partner meetings and airport transfers. Up to 4 passengers, 2 suitcases.",
    pathRu: "/трансфер-мерседес-е-класс",
    pathEn: "/mercedes-e-class-transfer",
    breadcrumbRu: "Mercedes-Benz E-Class",
    breadcrumbEn: "Mercedes-Benz E-Class",
  },
  "kia-carnival": {
    titleRu: "Kia Carnival — минивэн для группового трансфера | ComfortLine",
    titleEn: "Kia Carnival — Minivan for Group Transfer | ComfortLine",
    descRu: "Kia Carnival — комфортный минивэн на 7 пассажиров. Идеален для семей, групп и багажа. Просторный салон, климат-контроль, индивидуальные кресла.",
    descEn: "Kia Carnival — comfortable 7-seater minivan. Ideal for families, groups and luggage. Spacious cabin, climate control, individual seats.",
    pathRu: "/трансфер-киа-карнавал",
    pathEn: "/kia-carnival-transfer",
    breadcrumbRu: "Kia Carnival",
    breadcrumbEn: "Kia Carnival",
  },
  "hyundai-palisade": {
    titleRu: "Hyundai Palisade — премиум-SUV для трансфера | ComfortLine",
    titleEn: "Hyundai Palisade — Premium SUV Transfer | ComfortLine",
    descRu: "Hyundai Palisade — премиум-кроссовер на 7 мест. Высокая посадка, кожаный салон, климат-контроль. Идеален для семейных поездок и трансферов с большим багажом.",
    descEn: "Hyundai Palisade — premium 7-seater SUV. Elevated seating, leather interior, climate control. Ideal for family trips and transfers with extensive luggage.",
    pathRu: "/трансфер-хендай-палисад",
    pathEn: "/hyundai-palisade-transfer",
    breadcrumbRu: "Hyundai Palisade",
    breadcrumbEn: "Hyundai Palisade",
  },
  "fiat-scudo": {
    titleRu: "Fiat Scudo — минивэн на 8 пассажиров | ComfortLine",
    titleEn: "Fiat Scudo — 8-Seater Minivan | ComfortLine",
    descRu: "Fiat Scudo — вместительный минивэн на 8 пассажиров. Идеален для больших групп, корпоративных поездок и спортивного снаряжения (лыжи, борды).",
    descEn: "Fiat Scudo — spacious 8-seater minivan. Ideal for large groups, corporate trips and sports gear (skis, snowboards).",
    pathRu: "/трансфер-фиат-скудо",
    pathEn: "/fiat-scudo-transfer",
    breadcrumbRu: "Fiat Scudo",
    breadcrumbEn: "Fiat Scudo",
  },
};

interface VData {
  name: string;
  classBadge: string;
  year: string;
  seats: number;
  luggage: string;
  image: string;
  desc: string;
  featuresLabel: string;
  features: string[];
  idealLabel: string;
  idealFor: string[];
  routesLabel: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaBtn: string;
  backBtn: string;
  specsSeats: string;
  specsLuggage: string;
  specsYear: string;
  specsClass: string;
}

type BilingualVehicle = { ru: VData; en: VData };

const vehicleContent: Record<string, BilingualVehicle> = {
  "mercedes-e-class": {
    ru: {
      name: "Mercedes-Benz E-Class 2021",
      classBadge: "Бизнес",
      year: "2021",
      seats: 4,
      luggage: "2 чемодана",
      image: "/car-mercedes-e.jpg",
      desc: "Представительский бизнес-седан с кожаным салоном, климат-контролем и плавным ходом. Идеален для деловых поездок, встреч партнёров и трансферов в аэропорт.",
      featuresLabel: "Оснащение автомобиля",
      features: [
        "Кожаный салон",
        "Климат-контроль",
        "Тонированные стёкла",
        "USB и беспроводная зарядка",
        "Тихий двигатель",
        "Питьевая вода в дороге",
        "Просторный багажник",
      ],
      idealLabel: "Подходит для",
      idealFor: [
        "Деловые поездки и корпоративные встречи",
        "Трансферы в аэропорт и из аэропорта",
        "VIP-клиенты и корпоративные гости",
        "Пары и одиночные путешественники",
      ],
      routesLabel: "Доступные маршруты",
      ctaTitle: "Забронировать Mercedes E-Class",
      ctaDesc: "Оставьте заявку — менеджер свяжется в течение 15 минут и назовёт точную стоимость.",
      ctaBtn: "Оставить заявку",
      backBtn: "← Автопарк",
      specsSeats: "Мест",
      specsLuggage: "Багаж",
      specsYear: "Год выпуска",
      specsClass: "Класс",
    },
    en: {
      name: "Mercedes-Benz E-Class 2021",
      classBadge: "Business",
      year: "2021",
      seats: 4,
      luggage: "2 suitcases",
      image: "/car-mercedes-e.jpg",
      desc: "A premium business-class sedan with leather interior, climate control, and a smooth, quiet ride. Perfect for business trips, VIP client pickups, and airport transfers.",
      featuresLabel: "Vehicle equipment",
      features: [
        "Leather interior",
        "Climate control",
        "Tinted windows",
        "USB & wireless charging",
        "Quiet engine",
        "Complimentary bottled water",
        "Spacious boot",
      ],
      idealLabel: "Ideal for",
      idealFor: [
        "Business trips and corporate meetings",
        "Airport pick-up and drop-off",
        "VIP and executive clients",
        "Couples and solo travellers",
      ],
      routesLabel: "Available routes",
      ctaTitle: "Book the Mercedes E-Class",
      ctaDesc: "Submit a request and our manager will contact you within 15 minutes with an exact price.",
      ctaBtn: "Request a booking",
      backBtn: "← Fleet",
      specsSeats: "Seats",
      specsLuggage: "Luggage",
      specsYear: "Year",
      specsClass: "Class",
    },
  },

  "kia-carnival": {
    ru: {
      name: "Kia Carnival 2019",
      classBadge: "Минивэн",
      year: "2019",
      seats: 7,
      luggage: "Вместительный",
      image: "/car-kia-carnival.jpg",
      desc: "Просторный семиместный минивэн для семейных и групповых поездок. Большой багажник, комфортные кресла в три ряда и плавный ход на дальних маршрутах.",
      featuresLabel: "Оснащение автомобиля",
      features: [
        "7 мест в 3 рядах",
        "Большой багажный отсек",
        "Климат-контроль",
        "USB-зарядка",
        "Раздвижные двери",
        "Питьевая вода в дороге",
      ],
      idealLabel: "Подходит для",
      idealFor: [
        "Семейные поездки с детьми",
        "Групповые трансферы 5–7 человек",
        "Много багажа или крупные предметы",
        "Длительные поездки в аэропорт",
      ],
      routesLabel: "Доступные маршруты",
      ctaTitle: "Забронировать Kia Carnival",
      ctaDesc: "Оставьте заявку — менеджер свяжется в течение 15 минут и назовёт точную стоимость.",
      ctaBtn: "Оставить заявку",
      backBtn: "← Автопарк",
      specsSeats: "Мест",
      specsLuggage: "Багаж",
      specsYear: "Год выпуска",
      specsClass: "Класс",
    },
    en: {
      name: "Kia Carnival 2019",
      classBadge: "Minivan",
      year: "2019",
      seats: 7,
      luggage: "Spacious",
      image: "/car-kia-carnival.jpg",
      desc: "A spacious 7-seat minivan for family and group travel. Large boot, comfortable three-row seating and a smooth ride on long-distance routes.",
      featuresLabel: "Vehicle equipment",
      features: [
        "7 seats across 3 rows",
        "Large luggage compartment",
        "Climate control",
        "USB charging",
        "Sliding side doors",
        "Complimentary bottled water",
      ],
      idealLabel: "Ideal for",
      idealFor: [
        "Family trips with children",
        "Group transfers of 5–7 people",
        "Heavy or bulky luggage",
        "Long-distance airport runs",
      ],
      routesLabel: "Available routes",
      ctaTitle: "Book the Kia Carnival",
      ctaDesc: "Submit a request and our manager will contact you within 15 minutes with an exact price.",
      ctaBtn: "Request a booking",
      backBtn: "← Fleet",
      specsSeats: "Seats",
      specsLuggage: "Luggage",
      specsYear: "Year",
      specsClass: "Class",
    },
  },

  "hyundai-palisade": {
    ru: {
      name: "Hyundai Palisade 2020",
      classBadge: "Внедорожник",
      year: "2020",
      seats: 7,
      luggage: "Вместительный",
      image: "/car-hyundai-palisade.jpg",
      desc: "Полноразмерный SUV с семью местами, высоким клиренсом и полным приводом. Уверенно держит дорогу в любых условиях — зимой, на трассе и в длительных поездках.",
      featuresLabel: "Оснащение автомобиля",
      features: [
        "7 мест в 3 рядах",
        "Полный привод (AWD)",
        "Высокий клиренс",
        "Панорамная крыша",
        "Климат-контроль",
        "USB и беспроводная зарядка",
        "Питьевая вода в дороге",
      ],
      idealLabel: "Подходит для",
      idealFor: [
        "Семейные поездки с большим багажом",
        "Зимние и межсезонные маршруты",
        "Групповые трансферы до 7 чел.",
        "Длинные дороги с высоким комфортом",
      ],
      routesLabel: "Доступные маршруты",
      ctaTitle: "Забронировать Hyundai Palisade",
      ctaDesc: "Оставьте заявку — менеджер свяжется в течение 15 минут и назовёт точную стоимость.",
      ctaBtn: "Оставить заявку",
      backBtn: "← Автопарк",
      specsSeats: "Мест",
      specsLuggage: "Багаж",
      specsYear: "Год выпуска",
      specsClass: "Класс",
    },
    en: {
      name: "Hyundai Palisade 2020",
      classBadge: "SUV",
      year: "2020",
      seats: 7,
      luggage: "Spacious",
      image: "/car-hyundai-palisade.jpg",
      desc: "A full-size SUV with 7 seats, high ground clearance and all-wheel drive. Handles confidently in any weather — winter roads, motorways, and long-haul trips alike.",
      featuresLabel: "Vehicle equipment",
      features: [
        "7 seats across 3 rows",
        "All-wheel drive (AWD)",
        "High ground clearance",
        "Panoramic roof",
        "Climate control",
        "USB & wireless charging",
        "Complimentary bottled water",
      ],
      idealLabel: "Ideal for",
      idealFor: [
        "Family trips with heavy luggage",
        "Winter and off-season routes",
        "Group transfers up to 7 people",
        "Long-distance comfort travel",
      ],
      routesLabel: "Available routes",
      ctaTitle: "Book the Hyundai Palisade",
      ctaDesc: "Submit a request and our manager will contact you within 15 minutes with an exact price.",
      ctaBtn: "Request a booking",
      backBtn: "← Fleet",
      specsSeats: "Seats",
      specsLuggage: "Luggage",
      specsYear: "Year",
      specsClass: "Class",
    },
  },

  "fiat-scudo": {
    ru: {
      name: "Fiat Scudo 2015",
      classBadge: "Микроавтобус",
      year: "2015",
      seats: 8,
      luggage: "Вместительный",
      image: "/car-fiat-scudo.jpg",
      desc: "Просторный микроавтобус на 8 мест с большим грузовым отсеком. Оптимальный выбор для групп, корпоративных трансферов и поездок с большим количеством багажа.",
      featuresLabel: "Оснащение автомобиля",
      features: [
        "8 пассажирских мест",
        "Большой грузовой отсек",
        "Кондиционер",
        "USB-зарядка",
        "Раздвижные боковые двери",
        "Питьевая вода в дороге",
      ],
      idealLabel: "Подходит для",
      idealFor: [
        "Группы от 5 до 8 человек",
        "Корпоративные трансферы",
        "Много багажа или спортивного снаряжения",
        "Экономичные групповые поездки",
      ],
      routesLabel: "Доступные маршруты",
      ctaTitle: "Забронировать Fiat Scudo",
      ctaDesc: "Оставьте заявку — менеджер свяжется в течение 15 минут и назовёт точную стоимость.",
      ctaBtn: "Оставить заявку",
      backBtn: "← Автопарк",
      specsSeats: "Мест",
      specsLuggage: "Багаж",
      specsYear: "Год выпуска",
      specsClass: "Класс",
    },
    en: {
      name: "Fiat Scudo 2015",
      classBadge: "Minibus",
      year: "2015",
      seats: 8,
      luggage: "Spacious",
      image: "/car-fiat-scudo.jpg",
      desc: "A spacious 8-seat minibus with a large cargo area. The ideal choice for groups, corporate transfers, and trips with heavy or bulky luggage.",
      featuresLabel: "Vehicle equipment",
      features: [
        "8 passenger seats",
        "Large cargo compartment",
        "Air conditioning",
        "USB charging",
        "Sliding side doors",
        "Complimentary bottled water",
      ],
      idealLabel: "Ideal for",
      idealFor: [
        "Groups of 5 to 8 people",
        "Corporate transfers",
        "Heavy or sports equipment",
        "Budget-friendly group travel",
      ],
      routesLabel: "Available routes",
      ctaTitle: "Book the Fiat Scudo",
      ctaDesc: "Submit a request and our manager will contact you within 15 minutes with an exact price.",
      ctaBtn: "Request a booking",
      backBtn: "← Fleet",
      specsSeats: "Seats",
      specsLuggage: "Luggage",
      specsYear: "Year",
      specsClass: "Class",
    },
  },
};

const routeLinks = {
  ru: [
    { label: "Минск — Аэропорт Вильнюса (VNO)", href: "/трансфер-минск-вильнюс-аэропорт" },
    { label: "Минск — Варшава Шопен (WAW)", href: "/трансфер-минск-варшава-шопен" },
    { label: "Минск — Варшава Модлин (WMI)", href: "/трансфер-минск-варшава-модлин" },
  ],
  en: [
    { label: "Minsk — Vilnius Airport (VNO)", href: "/minsk-vilnius-airport" },
    { label: "Minsk — Warsaw Chopin (WAW)", href: "/minsk-warsaw-airport" },
    { label: "Minsk — Warsaw Modlin (WMI)", href: "/minsk-warsaw-modlin-airport" },
  ],
};

interface VehiclePageProps {
  slug: string;
}

export function VehiclePage({ slug }: VehiclePageProps) {
  const { lang } = useLang();
  const vehicle = vehicleContent[slug];
  if (!vehicle) return null;
  const c = vehicle[lang];
  const routes = routeLinks[lang];
  const seo = vehicleSeo[slug];
  const isRu = lang === "ru";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {seo && (
        <Seo
          titleRu={seo.titleRu}
          titleEn={seo.titleEn}
          descRu={seo.descRu}
          descEn={seo.descEn}
          pathRu={seo.pathRu}
          pathEn={seo.pathEn}
          breadcrumbsRu={[
            { name: "Главная", path: "/" },
            { name: isRu ? "Автопарк" : "Fleet", path: "/" },
            { name: seo.breadcrumbRu, path: seo.pathRu },
          ]}
          breadcrumbsEn={[
            { name: "Home", path: "/" },
            { name: "Fleet", path: "/" },
            { name: seo.breadcrumbEn, path: seo.pathEn },
          ]}
          jsonLd={vehicleJsonLd({
            lang,
            name: c.name,
            description: c.desc,
            image: SITE_URL + c.image,
            url: SITE_URL + (isRu ? seo.pathRu : seo.pathEn),
            seatingCapacity: c.seats,
            modelDate: c.year,
            vehicleClass: c.classBadge,
          })}
        />
      )}
      <Navbar />

      <div className="container mx-auto px-4 md:px-6 pt-28 pb-20 max-w-3xl space-y-14">

        {/* Breadcrumb */}
        <div className="flex items-center gap-3">
          <a href="/#fleet" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {c.backBtn}
          </a>
          <span className="text-border/60">·</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
            <Car className="h-3.5 w-3.5" /> {c.classBadge}
          </span>
        </div>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{c.name}</h1>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">{c.desc}</p>

          {/* Spec tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[
              { label: c.specsSeats, value: String(c.seats), icon: Users },
              { label: c.specsLuggage, value: c.luggage, icon: Briefcase },
              { label: c.specsYear, value: c.year, icon: Calendar },
              { label: c.specsClass, value: c.classBadge, icon: Shield },
            ].map(({ label, value, icon: Icon }) => (
              <div key={label} className="bg-card border border-border rounded-2xl p-4 flex flex-col gap-1">
                <Icon className="h-4 w-4 text-primary mb-1" />
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="text-sm font-bold text-foreground">{value}</p>
              </div>
            ))}
          </div>

          {/* Photo gallery — exterior + interior */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden border border-border bg-muted relative" style={{ height: 260 }}>
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://placehold.co/600x260/131218/B59C73?text=" + encodeURIComponent(c.name);
                }}
              />
              <span className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-black/60 text-white/90 backdrop-blur-sm">
                {lang === "ru" ? "Экстерьер" : "Exterior"}
              </span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border bg-muted relative" style={{ height: 260 }}>
              <img
                src="/car-interior.png"
                alt={lang === "ru" ? "Салон" : "Interior"}
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://placehold.co/600x260/131218/B59C73?text=Interior";
                }}
              />
              <span className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-black/60 text-white/90 backdrop-blur-sm">
                {lang === "ru" ? "Интерьер" : "Interior"}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            {c.featuresLabel}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {c.features.map((feat) => (
              <div key={feat} className="flex items-center gap-2.5 py-2.5 px-4 bg-card border border-border/60 rounded-xl">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">{feat}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Ideal for */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            {c.idealLabel}
          </h2>
          <ul className="space-y-2">
            {c.idealFor.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Routes */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2">
            <Plane className="h-4 w-4 text-primary" />
            {c.routesLabel}
          </h2>
          <div className="flex flex-col gap-2">
            {routes.map((route) => (
              <a
                key={route.href}
                href={route.href}
                className="flex items-center justify-between gap-4 bg-card border border-border/60 rounded-xl px-4 py-3.5 hover:border-primary/40 hover:bg-primary/5 transition-colors group"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {route.label}
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
              </a>
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
                  routeName: c.name,
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
