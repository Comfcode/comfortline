import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Briefcase, ArrowRight, Car, Bus, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/context/language-context";

const categoryIcon = {
  sedan: Car,
  suv: Truck,
  minivan: Bus,
};

const cars = [
  {
    id: 1,
    slug: "mercedes-e-class",
    name: "Mercedes E-Class 2021",
    classRu: "Бизнес",
    classEn: "Business",
    descRu: "Представительский седан с кожаным салоном, климат-контролем и плавным ходом. Идеален для деловых поездок и трансферов в аэропорт.",
    descEn: "Executive sedan with leather interior, climate control and a smooth quiet ride. Perfect for business trips and airport transfers.",
    seats: 4,
    category: "sedan" as const,
    luggageRu: "2 чемодана",
    luggageEn: "2 suitcases",
    hrefRu: "/mercedes-e-klass-transfer",
    hrefEn: "/mercedes-e-class-transfer",
    detailsRu: "Подробнее о Mercedes",
    detailsEn: "Mercedes details",
  },
  {
    id: 2,
    slug: "kia-carnival",
    name: "Kia Carnival 2019",
    classRu: "Минивэн",
    classEn: "Minivan",
    descRu: "Просторный семиместный минивэн для семейных и групповых поездок. Три ряда сидений и большой багажный отсек.",
    descEn: "Spacious 7-seat minivan for family and group travel. Three rows of seating and a generous luggage area.",
    seats: 7,
    category: "minivan" as const,
    luggageRu: "Вместительный",
    luggageEn: "Spacious",
    hrefRu: "/kia-karnaval-transfer",
    hrefEn: "/kia-carnival-transfer",
    detailsRu: "Подробнее о Kia Carnival",
    detailsEn: "Kia Carnival details",
  },
  {
    id: 3,
    slug: "hyundai-palisade",
    name: "Hyundai Palisade 2020",
    classRu: "Внедорожник",
    classEn: "SUV",
    descRu: "Полноразмерный SUV с полным приводом и высоким клиренсом. Уверенно держит дорогу зимой и на длинных маршрутах.",
    descEn: "Full-size AWD SUV with high ground clearance. Handles confidently in winter and on long-distance routes.",
    seats: 7,
    category: "suv" as const,
    luggageRu: "Вместительный",
    luggageEn: "Spacious",
    hrefRu: "/hyundai-palisade-transfer",
    hrefEn: "/hyundai-palisade-transfer",
    detailsRu: "Подробнее о Palisade",
    detailsEn: "Palisade details",
  },
  {
    id: 4,
    slug: "fiat-scudo",
    name: "Fiat Scudo 2015",
    classRu: "Микроавтобус",
    classEn: "Minibus",
    descRu: "Просторный микроавтобус на 8 мест с большим грузовым отсеком. Оптимален для групп и корпоративных трансферов.",
    descEn: "Spacious 8-seat minibus with a large cargo area. Ideal for groups and corporate transfers.",
    seats: 8,
    category: "minivan" as const,
    luggageRu: "Большой отсек",
    luggageEn: "Large cargo",
    hrefRu: "/fiat-scudo-transfer",
    hrefEn: "/fiat-scudo-transfer",
    detailsRu: "Подробнее о Fiat Scudo",
    detailsEn: "Fiat Scudo details",
  },
];

export function Fleet() {
  const { t, lang } = useLang();
  const f = t.fleet;
  const [filter, setFilter] = useState("all");
  const filteredCars = filter === "all" ? cars : cars.filter(c => c.category === filter);

  const filters = [
    { key: "all", label: f.filterAll },
    { key: "sedan", label: lang === "ru" ? "Седаны" : "Sedans" },
    { key: "suv", label: lang === "ru" ? "Внедорожники" : "SUVs" },
    { key: "minivan", label: lang === "ru" ? "Микроавтобусы" : "Minivans" },
  ];

  return (
    <section id="fleet" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">{f.label}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">{f.heading}</h3>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full mb-10"></div>

          <div className="flex justify-center flex-wrap gap-3">
            {filters.map(({ key, label }) => (
              <Button
                key={key}
                variant={filter === key ? "default" : "outline"}
                onClick={() => setFilter(key)}
                className="rounded-full"
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredCars.map((car, index) => {
              const Icon = categoryIcon[car.category];
              const href = lang === "ru" ? car.hrefRu : car.hrefEn;
              const label = lang === "ru" ? car.classRu : car.classEn;
              const desc = lang === "ru" ? car.descRu : car.descEn;
              const luggage = lang === "ru" ? car.luggageRu : car.luggageEn;
              const detailsLabel = lang === "ru" ? car.detailsRu : car.detailsEn;

              return (
                <motion.div
                  key={car.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.35, delay: index * 0.07 }}
                  className="bg-card border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors group flex flex-col"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors shrink-0">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">{label}</span>
                  </div>

                  <h4 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                    {car.name}
                  </h4>

                  <p className="text-muted-foreground leading-relaxed mb-6">{desc}</p>

                  <div className="mt-auto pt-5 border-t border-border/50 space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Users className="h-4 w-4 text-primary shrink-0" />
                        {f.seats}: {car.seats}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4 text-primary shrink-0" />
                        {luggage}
                      </span>
                    </div>

                    <a
                      href={href}
                      className="flex items-center justify-between gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link pt-1"
                    >
                      <span>{detailsLabel}</span>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
