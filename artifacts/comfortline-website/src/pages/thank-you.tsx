import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, Phone } from "lucide-react";
import { useLang } from "@/context/language-context";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { gtagPhoneConversion } from "@/lib/gtag";

const content = {
  ru: {
    badge: "Заявка принята",
    title: "Спасибо за ваш запрос!",
    subtitle: "Мы получили вашу заявку и свяжемся с вами в ближайшее время для подтверждения деталей.",
    promise1: "Ответим в ближайшее время",
    promise2: "Подтвердим маршрут и стоимость",
    promise3: "Пришлём детали на email",
    backBtn: "Вернуться на главную",
    phoneLabel: "Или позвоните нам прямо сейчас",
  },
  en: {
    badge: "Request received",
    title: "Thank you for your inquiry!",
    subtitle: "We've received your booking request and will contact you shortly to confirm the details.",
    promise1: "Response shortly",
    promise2: "Route and price confirmed",
    promise3: "Details sent to your email",
    backBtn: "Back to home",
    phoneLabel: "Or call us right now",
  },
};

export default function ThankYouPage() {
  const { lang } = useLang();
  const c = content[lang];

  useEffect(() => {
    document.title = lang === "ru"
      ? "Заявка принята — ComfortLine"
      : "Thank You — ComfortLine";
    const existing = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const prevContent = existing?.content;
    let el = existing;
    let createdByUs = false;
    if (!el) {
      el = document.createElement("meta");
      el.name = "robots";
      document.head.appendChild(el);
      createdByUs = true;
    }
    el.content = "noindex, nofollow";
    return () => {
      if (!el) return;
      if (createdByUs) {
        el.remove();
      } else if (prevContent !== undefined) {
        el.content = prevContent;
      }
    };
  }, [lang]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-lg text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-150" />
              <div className="relative w-24 h-24 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-primary" />
              </div>
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs tracking-[0.12em] uppercase font-semibold mb-5"
          >
            {c.badge}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-bold text-3xl sm:text-4xl text-foreground mb-4 leading-tight"
          >
            {c.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.38 }}
            className="text-muted-foreground text-base leading-relaxed mb-10 max-w-md mx-auto"
          >
            {c.subtitle}
          </motion.p>

          {/* Promises */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-col gap-3 mb-10 text-left max-w-xs mx-auto"
          >
            {[c.promise1, c.promise2, c.promise3].map((text) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-sm text-foreground/80">{text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {c.backBtn}
            </a>
            <a
              href="tel:+375291552776"
              onClick={gtagPhoneConversion}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-primary/50 text-foreground font-semibold text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              +375 (29) 155-27-76
            </a>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
