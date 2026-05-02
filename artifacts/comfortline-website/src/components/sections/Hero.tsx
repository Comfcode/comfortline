import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/context/language-context";
import { BookingWidget } from "@/components/sections/BookingWidget";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-[100dvh] flex items-end justify-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Dark mode: heavy charcoal veil; light mode: thin dark scrim — photo stays sharp */}
        <div className="absolute inset-0 bg-black/20 dark:bg-black/55 z-10"></div>
        {/* Bottom gradient for text legibility — always dark, never white */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent dark:from-background dark:via-background/40 z-10"></div>
        <img
          src="/hero-bg.png"
          alt="Premium black sedan"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 pb-12 pt-32">
        {/* Hero copy */}
        <div className="max-w-3xl mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              {t.hero.badge}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
              {t.hero.headline1}
              {t.hero.headline2 && (
                <>
                  <br />
                  <span className="text-primary italic font-serif">{t.hero.headline2}</span>
                </>
              )}
            </h1>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-white/80 text-base md:text-lg">
              {t.hero.checkmarks.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Compact Booking Widget */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <BookingWidget />
        </motion.div>

      </div>
    </section>
  );
}
