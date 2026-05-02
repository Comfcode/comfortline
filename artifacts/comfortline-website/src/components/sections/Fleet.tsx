import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, ArrowRight } from "lucide-react";
import { useLang } from "@/context/language-context";

const cars = [
  {
    id: 1,
    name: "Mercedes E-Class 2021",
    classRu: "Бизнес",
    classEn: "Business",
    seats: 4,
    image: "/car-mercedes-e.jpg",
    category: "sedan",
    luggageRu: "Стандарт",
    luggageEn: "Standard",
    hrefRu: "/mercedes-e-klass-transfer",
    hrefEn: "/mercedes-e-class-transfer",
  },
  {
    id: 2,
    name: "Kia Carnival 2019",
    classRu: "Минивэн",
    classEn: "Minivan",
    seats: 7,
    image: "/car-kia-carnival.jpg",
    category: "minivan",
    luggageRu: "Вместительный",
    luggageEn: "Spacious",
    hrefRu: "/kia-karnaval-transfer",
    hrefEn: "/kia-carnival-transfer",
  },
  {
    id: 3,
    name: "Hyundai Palisade 2020",
    classRu: "Внедорожник",
    classEn: "SUV",
    seats: 7,
    image: "/car-hyundai-palisade.jpg",
    category: "suv",
    luggageRu: "Вместительный",
    luggageEn: "Spacious",
    hrefRu: "/hyundai-palisade-transfer",
    hrefEn: "/hyundai-palisade-transfer",
  },
  {
    id: 4,
    name: "Fiat Scudo 2015",
    classRu: "Микроавтобус",
    classEn: "Minibus",
    seats: 8,
    image: "/car-fiat-scudo.jpg",
    category: "minivan",
    luggageRu: "Вместительный",
    luggageEn: "Spacious",
    hrefRu: "/fiat-scudo-transfer",
    hrefEn: "/fiat-scudo-transfer",
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

          <div className="flex justify-center gap-3">
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

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 flex flex-col"
              >
                <div className="h-48 overflow-hidden relative bg-muted flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://placehold.co/600x400/131218/B59C73?text=" + car.name.replace(/ /g, "+");
                    }}
                  />
                  <div className="absolute bottom-3 left-4 z-20 bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    {lang === "ru" ? car.classRu : car.classEn}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h4 className="text-lg font-bold mb-3 text-card-foreground">{car.name}</h4>

                  {/* Specs */}
                  <div className="space-y-2 mb-5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary shrink-0" />
                      <span>{f.seats}: {car.seats}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-primary shrink-0" />
                      <span>{f.trunk}: {lang === "ru" ? car.luggageRu : car.luggageEn}</span>
                    </div>
                  </div>

                  <Button
                    variant="default"
                    className="w-full"
                    onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
                  >
                    {f.book}
                  </Button>
                  <a
                    href={lang === "ru" ? car.hrefRu : car.hrefEn}
                    className="mt-2 flex items-center justify-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {lang === "ru" ? "Подробнее" : "Details"}
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
