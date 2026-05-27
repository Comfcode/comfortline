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
    seats: 3,
    image: "/car-mercedes-e.webp",
    category: "sedan",
    luggageRu: "до 3 чемоданов",
    luggageEn: "up to 3 suitcases",
    hrefRu: "/трансфер-мерседес-е-класс",
    hrefEn: "/mercedes-e-class-transfer",
  },
  {
    id: 2,
    name: "Kia Carnival 2019",
    classRu: "Минивэн",
    classEn: "Minivan",
    seats: 5,
    image: "/car-kia-carnival.webp",
    category: "minivan",
    luggageRu: "до 5 чемоданов",
    luggageEn: "up to 5 suitcases",
    hrefRu: "/трансфер-киа-карнавал",
    hrefEn: "/kia-carnival-transfer",
  },
  {
    id: 3,
    name: "Hyundai Palisade 2020",
    classRu: "Внедорожник",
    classEn: "SUV",
    seats: 4,
    image: "/car-hyundai-palisade.webp",
    category: "suv",
    luggageRu: "до 5 чемоданов",
    luggageEn: "up to 5 suitcases",
    hrefRu: "/трансфер-хендай-палисад",
    hrefEn: "/hyundai-palisade-transfer",
  },
  {
    id: 4,
    name: "Mercedes V-Class",
    classRu: "Премиум MPV",
    classEn: "Premium MPV",
    seats: 7,
    image: "/car-van.webp",
    category: "minivan",
    luggageRu: "до 7 чемоданов",
    luggageEn: "up to 7 suitcases",
    hrefRu: "/трансфер-мерседес-в-класс",
    hrefEn: "/mercedes-v-class-transfer",
  },
  {
    id: 5,
    name: "Fiat Scudo 2015",
    classRu: "Микроавтобус",
    classEn: "Minibus",
    seats: 8,
    image: "/car-fiat-scudo.webp",
    category: "minivan",
    luggageRu: "до 6 чемоданов",
    luggageEn: "up to 6 suitcases",
    hrefRu: "/трансфер-фиат-скудо",
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

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <AnimatePresence>
            {filteredCars.map((car) => {
              const href = lang === "ru" ? car.hrefRu : car.hrefEn;
              const label = lang === "ru" ? car.classRu : car.classEn;
              const luggage = lang === "ru" ? car.luggageRu : car.luggageEn;

              return (
                <motion.div
                  key={car.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 flex flex-col"
                >
                  {/* Photo */}
                  <div className="h-48 overflow-hidden relative bg-muted flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img
                      src={car.image}
                      alt={`${car.name} — ${label} ComfortLine, ${f.seats}: ${car.seats}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://placehold.co/600x400/131218/B59C73?text=" + car.name.replace(/ /g, "+");
                      }}
                    />
                    <div className="absolute bottom-3 left-4 z-20 bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                      {label}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h4 className="text-lg font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                      {car.name}
                    </h4>

                    <div className="space-y-2 mb-5 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary shrink-0" />
                        <span>{f.seats}: {car.seats}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-primary shrink-0" />
                        <span>{f.trunk}: {luggage}</span>
                      </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-border/50">
                      <a
                        href={href}
                        className="group/link flex items-center justify-between gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground border border-border/60 hover:border-primary/50 hover:bg-primary/8 hover:text-primary transition-all duration-200"
                      >
                        <span>{lang === "ru" ? "Подробнее" : "View details"}</span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary/40 group-hover/link:text-primary group-hover/link:translate-x-1 transition-all duration-200" />
                      </a>
                    </div>
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
