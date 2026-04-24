import { Shield, Clock, Car, Calendar, HeartHandshake, Star } from "lucide-react";
import { motion } from "framer-motion";

const advantages = [
  {
    icon: Car,
    title: "Вся линейка транспорта",
    description: "Седаны эконом и комфорт, микроавтобусы до 8 мест. Подберем авто под ваши нужды."
  },
  {
    icon: Clock,
    title: "Всегда вовремя",
    description: "Менеджер координирует весь процесс. Подача машины точно в назначенное время."
  },
  {
    icon: Star,
    title: "Профессиональные водители",
    description: "Вежливые, опытные, отлично знают город и маршруты. По запросу — водитель в деловом костюме."
  },
  {
    icon: Calendar,
    title: "Предзаказ и день в день",
    description: "Принимаем заявки заранее и срочные заказы минимум за 5 часов до прибытия."
  },
  {
    icon: Shield,
    title: "Пассажиры застрахованы",
    description: "Ваша безопасность — наш приоритет. Жизнь и здоровье каждого пассажира застрахованы на время поездки."
  },
  {
    icon: HeartHandshake,
    title: "Гибкие тарифы",
    description: "Фиксированные цены на популярные направления и специальные условия для постоянных корпоративных клиентов."
  }
];

export function Advantages() {
  return (
    <section id="advantages" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Почему ComfortLine</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Безупречный сервис в каждой поездке</h3>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                <adv.icon className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">{adv.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
