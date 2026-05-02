import { useState, useEffect, useRef, ElementType, useCallback } from "react";
import { Menu, X, Phone, ChevronDown, ArrowRight, MapPin, Clock, Plane, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/context/language-context";
import { SiWhatsapp, SiTelegram, SiViber, SiMessenger } from "react-icons/si";
import { Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Logo } from "@/components/brand/Logo";

const serviceRoutes = {
  ru: [
    {
      from: "Минск",
      to: "Вильнюс",
      code: "VNO",
      meta: "~250 км · 3–4 ч",
      href: "/minsk-vilnyus-aeroport",
    },
    {
      from: "Минск",
      to: "Варшава Шопен",
      code: "WAW",
      meta: "~550 км · 6–9 ч",
      href: "/minsk-varshava-shopin-aeroport",
    },
    {
      from: "Минск",
      to: "Варшава Модлин",
      code: "WMI",
      meta: "~570 км · 6–10 ч",
      href: "/minsk-varshava-modlin-aeroport",
    },
  ],
  en: [
    {
      from: "Minsk",
      to: "Vilnius",
      code: "VNO",
      meta: "~250 km · 3–4 h",
      href: "/minsk-vilnius-airport",
    },
    {
      from: "Minsk",
      to: "Warsaw Chopin",
      code: "WAW",
      meta: "~550 km · 6–9 h",
      href: "/minsk-warsaw-airport",
    },
    {
      from: "Minsk",
      to: "Warsaw Modlin",
      code: "WMI",
      meta: "~570 km · 6–10 h",
      href: "/minsk-warsaw-modlin-airport",
    },
  ],
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { lang, setLang, t } = useLang();
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const routes = serviceRoutes[lang];

  const openServices = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }, []);

  const closeServices = useCallback(() => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const otherNavLinks = [
    { name: t.nav.fleet, href: "/#fleet" },
    { name: t.nav.advantages, href: "/#advantages" },
    { name: t.nav.reviews, href: "/#reviews" },
    { name: t.nav.faq, href: "/faq" },
    { name: t.nav.contacts, href: "/#contact" },
  ];

  const socialLinks = [
    { icon: SiTelegram, href: "https://t.me/transfer_comfortline", label: "Telegram", bg: "#229ED9", gradient: false },
    { icon: SiViber, href: "viber://chat?number=%2B375291552776", label: "Viber", bg: "#7360F2", gradient: false },
    { icon: SiWhatsapp, href: "https://wa.me/375291552776", label: "WhatsApp", bg: "#25D366", gradient: false },
    { icon: Instagram, href: "https://www.instagram.com/transfer_comfortline/", label: "Instagram", bg: "linear-gradient(45deg,#f09433,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888)", gradient: true },
    { icon: SiMessenger, href: "https://m.me/103816619260365", label: "Messenger", bg: "linear-gradient(45deg,#0084FF,#B34FFF)", gradient: true },
  ];

  const SocialIcon = ({ icon: Icon, href, label, bg, size = 32 }: {
    icon: ElementType; href: string; label: string;
    bg: string; gradient?: boolean; size?: number;
  }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex-shrink-0 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110 active:scale-95"
      style={{ width: size, height: size, background: bg }}
    >
      <Icon style={{ width: size * 0.5, height: size * 0.5 }} />
    </a>
  );

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="shrink-0 group opacity-90 hover:opacity-100 transition-opacity">
            <Logo variant="full" scheme={isDark ? "dark" : "light"} height={30} />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            <div className="flex gap-4 xl:gap-5 items-center">

              {/* Services dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
              >
                <a
                  href="/#services"
                  className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
                  onClick={() => setServicesOpen(false)}
                >
                  {t.nav.services}
                  <ChevronDown className={`h-3.5 w-3.5 text-primary transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </a>

                {/* Dropdown panel */}
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.98 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[340px] bg-popover border border-popover-border rounded-2xl shadow-2xl shadow-black/30 dark:shadow-black/60 z-50 overflow-hidden"
                    >
                      {/* Header */}
                      <div className="px-4 pt-4 pb-2 flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.12em]">
                          {lang === "ru" ? "Направления" : "Routes"}
                        </span>
                      </div>

                      {/* Route cards */}
                      <div className="px-3 pb-3 flex flex-col gap-1.5">
                        {routes.map((route) => (
                          <a
                            key={route.href}
                            href={route.href}
                            onClick={() => setServicesOpen(false)}
                            className="group flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-150"
                          >
                            {/* Route text */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                <span className="truncate">{route.from}</span>
                                <ArrowRight className="h-3 w-3 text-primary/60 shrink-0" />
                                <span className="truncate">{route.to}</span>
                                <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold bg-primary/15 text-primary rounded-md shrink-0 leading-none">
                                  {route.code}
                                </span>
                              </div>
                              <div className="flex items-center gap-1 mt-0.5">
                                <Clock className="h-2.5 w-2.5 text-muted-foreground/60 shrink-0" />
                                <span className="text-[11px] text-muted-foreground/70">{route.meta}</span>
                              </div>
                            </div>
                            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                          </a>
                        ))}
                      </div>

                      {/* Footer */}
                      <a
                        href="/#services"
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center justify-center gap-2 px-4 py-3 border-t border-border/60 text-xs font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        {lang === "ru" ? "Все услуги" : "All services"}
                        <ArrowRight className="h-3 w-3" />
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {otherNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="h-5 w-px bg-border/60" />

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <SocialIcon key={s.label} {...s} size={30} />
              ))}
            </div>

            <div className="h-5 w-px bg-border/60" />

            <a
              href="tel:+375291552776"
              className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors whitespace-nowrap"
            >
              <Phone className="h-4 w-4 text-primary" />
              +375 (29) 155-27-76
            </a>

            {/* Language toggle */}
            <div className="flex items-center gap-1 text-xs font-semibold">
              <button
                onClick={() => setLang("ru")}
                className={`px-1.5 py-0.5 rounded transition-colors ${lang === "ru" ? "text-primary" : "text-foreground/50 hover:text-foreground"}`}
              >
                RU
              </button>
              <span className="text-border">|</span>
              <button
                onClick={() => setLang("en")}
                className={`px-1.5 py-0.5 rounded transition-colors ${lang === "en" ? "text-primary" : "text-foreground/50 hover:text-foreground"}`}
              >
                EN
              </button>
            </div>

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label="Toggle theme"
              className="relative w-[52px] h-[28px] rounded-full border border-border bg-muted flex items-center transition-colors hover:border-primary/40 shrink-0"
            >
              <motion.div
                className="absolute w-[22px] h-[22px] rounded-full bg-primary flex items-center justify-center shadow-sm"
                animate={{ x: isDark ? 3 : 27 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div key="moon" initial={{ opacity: 0, rotate: -30 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 30 }} transition={{ duration: 0.15 }}>
                      <Moon className="h-3 w-3 text-primary-foreground" />
                    </motion.div>
                  ) : (
                    <motion.div key="sun" initial={{ opacity: 0, rotate: 30 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -30 }} transition={{ duration: 0.15 }}>
                      <Sun className="h-3 w-3 text-primary-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg p-4 flex flex-col gap-1">

          {/* Services expandable item */}
          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between text-lg font-medium p-2 hover:bg-muted rounded-md transition-colors"
            >
              <span>{t.nav.services}</span>
              <ChevronDown className={`h-4 w-4 text-primary transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="ml-3 mt-1 mb-2 border-l-2 border-primary/30 pl-3 flex flex-col gap-1">
                {routes.map((route) => (
                  <a
                    key={route.href}
                    href={route.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 py-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    <Plane className="h-3.5 w-3.5 text-primary shrink-0" />
                    {route.label}
                  </a>
                ))}
                <a
                  href="/#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {lang === "ru" ? "Все услуги →" : "All services →"}
                </a>
              </div>
            )}
          </div>

          {otherNavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium p-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <div className="pt-4 border-t border-border mt-2 flex flex-col gap-3">
            <a
              href="tel:+375291552776"
              className="flex items-center gap-3 p-2 text-lg font-semibold"
            >
              <Phone className="h-5 w-5 text-primary" />
              +375 (29) 155-27-76
            </a>
            <div className="flex items-center gap-3 p-2">
              {socialLinks.map((s) => (
                <SocialIcon key={s.label} {...s} size={38} />
              ))}
            </div>
            <div className="flex items-center justify-between gap-4 p-2">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <button
                  onClick={() => setLang("ru")}
                  className={`px-2 py-1 rounded transition-colors ${lang === "ru" ? "text-primary" : "text-foreground/50"}`}
                >
                  RU
                </button>
                <span className="text-border">|</span>
                <button
                  onClick={() => setLang("en")}
                  className={`px-2 py-1 rounded transition-colors ${lang === "en" ? "text-primary" : "text-foreground/50"}`}
                >
                  EN
                </button>
              </div>
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label="Toggle theme"
                className="relative w-[52px] h-[28px] rounded-full border border-border bg-muted flex items-center transition-colors"
              >
                <motion.div
                  className="absolute w-[22px] h-[22px] rounded-full bg-primary flex items-center justify-center shadow-sm"
                  animate={{ x: isDark ? 3 : 27 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  {isDark ? (
                    <Moon className="h-3 w-3 text-primary-foreground" />
                  ) : (
                    <Sun className="h-3 w-3 text-primary-foreground" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>

    {/* Fixed floating social sidebar — mobile only */}
    <div className="lg:hidden fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2 pr-2">
      {socialLinks.map((s) => (
        <SocialIcon key={s.label} {...s} size={36} />
      ))}
    </div>
    </>
  );
}
