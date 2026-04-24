import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLang } from "@/context/language-context";

const prices = ["from $75", "from $85", "from $80", "from $120"];
const popularIndex = 1;

export function Pricing() {
  const { t } = useLang();

  return (
    <section id="prices" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">{t.pricing.label}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">{t.pricing.heading}</h3>
          <p className="text-muted-foreground mt-4">{t.pricing.subheading}</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.pricing.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-card border rounded-2xl p-6 flex flex-col h-full relative ${
                index === popularIndex ? 'border-primary shadow-lg shadow-primary/10' : 'border-border'
              }`}
            >
              {index === popularIndex && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {t.pricing.popular}
                </div>
              )}

              <h4 className="text-lg font-medium text-muted-foreground mb-2">{plan.name}</h4>
              <div className="text-4xl font-bold text-foreground mb-6">{prices[index]}</div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-card-foreground">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={index === popularIndex ? "default" : "outline"}
                className={`w-full mt-auto ${index === popularIndex ? 'shadow-md shadow-primary/20' : ''}`}
                asChild
              >
                <a href="#contact">{t.pricing.book}</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
