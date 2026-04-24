import { Plane, Users, MapPin, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Plane,
    title: "Трансфер в Аэропорт",
    description: "Индивидуальный и групповой. Фиксированная цена. Предварительный заказ. Детские кресла. Встретим с табличкой."
  },
  {
    icon: Users,
    title: "Группы / Делегации до 8 человек",
    description: "Трансферы, экскурсии. Вместительные микроавтобусы (8 мест), большие багажные отделения."
  },
  {
    icon: MapPin,
    title: "Поездки по Минску, Беларуси и России",
    description: "Почасовая оплата в городе, подсчёт по километражу между городами. Седаны, микроавтобусы."
  },
  {
    icon: Globe2,
    title: "Поездки по Европе (Литва, Латвия, Польша)",
    description: "На выбор автомобили разных классов и типов кузова. Комфортное прохождение границы."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Наши Услуги</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Направления комфорта</h3>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
