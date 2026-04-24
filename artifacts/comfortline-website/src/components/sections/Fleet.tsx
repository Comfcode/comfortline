import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Briefcase } from "lucide-react";

const cars = [
  {
    id: 1,
    name: "Renault Logan",
    class: "Эконом",
    seats: 4,
    price: "от 35 руб/час",
    image: "/car-logan.png",
    category: "sedan"
  },
  {
    id: 2,
    name: "Volkswagen Polo",
    class: "Комфорт",
    seats: 4,
    price: "от 40 руб/час",
    image: "/car-polo.png",
    category: "sedan"
  },
  {
    id: 3,
    name: "Volkswagen Passat B7",
    class: "Комфорт+",
    seats: 4,
    price: "от 50 руб/час",
    image: "/car-passat.png",
    category: "sedan"
  },
  {
    id: 4,
    name: "Volkswagen T5 Caravelle",
    class: "Минивэн",
    seats: 8,
    price: "от 60 руб/час",
    image: "/car-van.png",
    category: "minivan"
  }
];

export function Fleet() {
  const [filter, setFilter] = useState("all");

  const filteredCars = filter === "all" ? cars : cars.filter(c => c.category === filter);

  return (
    <section id="fleet" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Наш Автопарк</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Автомобили для любых задач</h3>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full mb-10"></div>
          
          <div className="flex justify-center gap-4">
            <Button 
              variant={filter === "all" ? "default" : "outline"} 
              onClick={() => setFilter("all")}
              className="rounded-full"
            >
              Все авто
            </Button>
            <Button 
              variant={filter === "sedan" ? "default" : "outline"} 
              onClick={() => setFilter("sedan")}
              className="rounded-full"
            >
              Седаны
            </Button>
            <Button 
              variant={filter === "minivan" ? "default" : "outline"} 
              onClick={() => setFilter("minivan")}
              className="rounded-full"
            >
              Микроавтобусы
            </Button>
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
                className="bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="h-48 overflow-hidden relative bg-muted flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/131218/B59C73?text=' + car.name.replace(' ', '+');
                    }}
                  />
                  <div className="absolute bottom-3 left-4 z-20 bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    {car.class}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-4 text-card-foreground">{car.name}</h4>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{car.seats} места</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span>{car.category === 'minivan' ? 'Много багажа' : 'Стандарт'}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-semibold text-lg">{car.price}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10" asChild>
                      <a href="#contact">Заказать</a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
