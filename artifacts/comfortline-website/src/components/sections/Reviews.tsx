import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Александра",
    city: "Минск",
    text: "Ездили коллективом на экскурсию в Дудутки. Водитель приехал за 15 минут до оговоренного времени. Машина была чистой и аккуратной. Спасибо за высокий уровень сервиса!"
  },
  {
    name: "Евгений",
    city: "Москва",
    text: "Приезжали в Минск компанией 6 человек. Обратились в ComfortLine. Нас встретили в аэропорту с табличкой, доехали быстро и дешево. Отличная организация трансфера."
  },
  {
    name: "Юлия",
    city: "Молодечно",
    text: "Решили семьёй поехать в Египет. Семья не маленькая, трое детей. Воспользовались трансфером и не прогадали. В микроавтобусе было просторно, комфортно. Спасибо!"
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Отзывы</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Что говорят наши клиенты</h3>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10 rotate-180" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center font-bold text-xl text-primary uppercase">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.city}</p>
                </div>
              </div>
              
              <p className="text-card-foreground/90 italic leading-relaxed">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
