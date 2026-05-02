import { Plane, Users, MapPin, Globe2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/context/language-context";

const icons = [Plane, Users, MapPin, Globe2];

const airportRoutes = {
  ru: [
    { label: "Минск — Аэропорт Вильнюса (VNO)", href: "/minsk-vilnius-airport" },
    { label: "Минск — Варшава Шопен (WAW)", href: "/minsk-warsaw-airport" },
    { label: "Минск — Варшава Модлин (WMI)", href: "/minsk-warsaw-modlin-airport" },
  ],
  en: [
    { label: "Minsk — Vilnius Airport (VNO)", href: "/minsk-vilnius-airport" },
    { label: "Minsk — Warsaw Chopin (WAW)", href: "/minsk-warsaw-airport" },
    { label: "Minsk — Warsaw Modlin (WMI)", href: "/minsk-warsaw-modlin-airport" },
  ],
};

export function Services() {
  const { t, lang } = useLang();
  const routes = airportRoutes[lang];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">{t.services.label}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">{t.services.heading}</h3>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Popular airport routes — shown only on the first card */}
                {index === 0 && (
                  <div className="mt-6 pt-5 border-t border-border/50 space-y-2">
                    {routes.map((route) => (
                      <a
                        key={route.href}
                        href={route.href}
                        className="flex items-center justify-between gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link"
                      >
                        <span>{route.label}</span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all" />
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
