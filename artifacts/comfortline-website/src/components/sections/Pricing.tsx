import { useState } from "react";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLang } from "@/context/language-context";

export function Pricing() {
  const { t } = useLang();
  const [activeRoute, setActiveRoute] = useState(0);
  const route = t.pricing.routes[activeRoute];
  const isWide = route.plans.length >= 4;

  return (
    <section id="prices" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">{t.pricing.label}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">{t.pricing.heading}</h3>
          <p className="text-muted-foreground mt-4">{t.pricing.subheading}</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* Route tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {t.pricing.routes.map((r, i) => (
            <button
              key={i}
              onClick={() => setActiveRoute(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeRoute === i
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeRoute}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className={`grid gap-6 ${
              isWide
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
                : "grid-cols-1 md:grid-cols-3 max-w-3xl mx-auto"
            }`}
          >
            {route.plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-card border rounded-2xl p-6 flex flex-col h-full relative ${
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/10"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    {t.pricing.popular}
                  </div>
                )}

                <h4 className="text-sm font-medium text-muted-foreground mb-2 leading-snug">{plan.name}</h4>
                <div className="text-3xl font-bold text-foreground mb-5">{plan.price}</div>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-card-foreground">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className={`w-full mt-auto ${plan.popular ? "shadow-md shadow-primary/20" : ""}`}
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent("open-booking-modal", {
                      detail: {
                        routeIndex: activeRoute,
                        routeName: route.name,
                        planName: plan.name,
                        planPrice: plan.price,
                      },
                    }));
                  }}
                >
                  {t.pricing.book}
                </Button>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
