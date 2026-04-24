import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const prices = [
  {
    name: "Седан (до 4 чел.) — Эконом",
    price: "75 BYN",
    features: ["Встреча с табличкой", "Помощь с багажом", "Детское кресло по запросу", "Ожидание при задержке рейса"]
  },
  {
    name: "Седан (до 4 чел.) — Комфорт",
    price: "85 BYN",
    popular: true,
    features: ["Встреча с табличкой", "Помощь с багажом", "Детское кресло по запросу", "Wi-Fi в салоне", "Вода для пассажиров"]
  },
  {
    name: "Универсал (до 4 чел.)",
    price: "80 BYN",
    features: ["Встреча с табличкой", "Увеличенный багажник", "Детское кресло по запросу", "Ожидание при задержке рейса"]
  },
  {
    name: "Микроавтобус (до 8 чел.)",
    price: "120 BYN",
    features: ["Встреча с табличкой", "Много места для багажа", "Подходит для групп", "Детские кресла по запросу"]
  }
];

export function Pricing() {
  return (
    <section id="prices" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Тарифы</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Трансфер в Аэропорт Минск</h3>
          <p className="text-muted-foreground mt-4">Фиксированные цены на поездки из Минска в Национальный аэропорт или обратно.</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prices.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-card border rounded-2xl p-6 flex flex-col h-full relative ${
                plan.popular ? 'border-primary shadow-lg shadow-primary/10' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Популярный выбор
                </div>
              )}
              
              <h4 className="text-lg font-medium text-muted-foreground mb-2">{plan.name}</h4>
              <div className="text-4xl font-bold text-foreground mb-6">{plan.price}</div>
              
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-card-foreground">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? "default" : "outline"} 
                className={`w-full mt-auto ${plan.popular ? 'shadow-md shadow-primary/20' : ''}`}
                asChild
              >
                <a href="#contact">Заказать</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
