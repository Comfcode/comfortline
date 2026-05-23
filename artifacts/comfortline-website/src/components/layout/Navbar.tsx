import { useState, useEffect, ElementType } from "react";
import { Menu, X, Phone, Sun, Moon, Search } from "lucide-react";
import { useLang } from "@/context/language-context";
import { SiWhatsapp, SiTelegram, SiViber, SiMessenger } from "react-icons/si";
import { Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Logo } from "@/components/brand/Logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = !mounted || resolvedTheme === "dark";

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.services,    href: "/#services" },
    { name: t.nav.fleet,       href: "/#fleet" },
    { name: t.nav.advantages,  href: "/#advantages" },
    { name: t.nav.reviews,     href: "/#reviews" },
    { name: t.nav.faq,         href: "/faq" },
    { name: lang === "ru" ? "Блог" : "Blog", href: lang === "ru" ? "/блог" : "/blog" },
    { name: t.nav.contacts,    href: "/#contact" },
  ];

  const socialLinks = [
    { icon: SiTelegram,  href: "https://t.me/transfer_comfortline",           label: "Telegram",  bg: "#229ED9" },
    { icon: SiViber,     href: "viber://chat?number=%2B375291552776",          label: "Viber",     bg: "#7360F2" },
    { icon: SiWhatsapp,  href: "https://wa.me/375291552776",                   label: "WhatsApp",  bg: "#25D366" },
    { icon: Instagram,   href: "https://www.instagram.com/transfer_comfortline/", label: "Instagram", bg: "linear-gradient(45deg,#f09433,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888)" },
    { icon: SiMessenger, href: "https://m.me/103816619260365",                 label: "Messenger", bg: "linear-gradient(45deg,#0084FF,#B34FFF)" },
  ];

  const SocialIcon = ({ icon: Icon, href, label, bg, size = 28 }: {
    icon: ElementType; href: string; label: string; bg: string; size?: number;
  }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex-shrink-0 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 opacity-80 hover:opacity-100"
      style={{ width: size, height: size, background: bg }}
    >
      <Icon style={{ width: size * 0.5, height: size * 0.5 }} />
    </a>
  );

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-border/60 py-3"
          : "bg-background/60 backdrop-blur-sm border-border/30 py-3"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-9">

          {/* Logo — left */}
          <a href="/" className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
            <Logo variant="full" scheme={isDark ? "dark" : "light"} height={26} />
          </a>

          {/* Desktop nav — right */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">

            {/* Nav links — Sequoia-style all caps */}
            <div className="flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[11px] tracking-[0.12em] uppercase font-medium text-foreground/60 hover:text-foreground transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="h-4 w-px bg-border/50" />

            {/* Social icons — compact */}
            <div className="flex items-center gap-1.5">
              {socialLinks.map((s) => (
                <SocialIcon key={s.label} {...s} size={26} />
              ))}
            </div>

            {/* Divider */}
            <div className="h-4 w-px bg-border/50" />

            {/* Phone */}
            <a
              href="tel:+375291552776"
              className="flex items-center gap-1.5 text-[11px] tracking-[0.08em] uppercase font-medium text-foreground/60 hover:text-primary transition-colors whitespace-nowrap"
            >
              <Phone className="h-3 w-3 text-primary" />
              +375 (29) 155-27-76
            </a>

            {/* Divider */}
            <div className="h-4 w-px bg-border/50" />

            {/* Language toggle */}
            <div className="flex items-center gap-0.5 text-[11px] tracking-[0.12em] uppercase font-medium">
              <button
                onClick={() => setLang("ru")}
                className={`px-1.5 py-0.5 transition-colors ${lang === "ru" ? "text-foreground" : "text-foreground/40 hover:text-foreground/70"}`}
              >
                RU
              </button>
              <span className="text-border/60">/</span>
              <button
                onClick={() => setLang("en")}
                className={`px-1.5 py-0.5 transition-colors ${lang === "en" ? "text-foreground" : "text-foreground/40 hover:text-foreground/70"}`}
              >
                EN
              </button>
            </div>

            {/* Theme toggle — minimal */}
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label="Toggle theme"
              className="relative w-[44px] h-[24px] rounded-full border border-border/60 bg-muted/50 flex items-center transition-colors hover:border-primary/40 shrink-0"
            >
              <motion.div
                className="absolute w-[18px] h-[18px] rounded-full bg-primary flex items-center justify-center shadow-sm"
                animate={{ x: isDark ? 3 : 23 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div key="moon" initial={{ opacity: 0, rotate: -30 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 30 }} transition={{ duration: 0.15 }}>
                      <Moon className="h-2.5 w-2.5 text-primary-foreground" />
                    </motion.div>
                  ) : (
                    <motion.div key="sun" initial={{ opacity: 0, rotate: 30 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -30 }} transition={{ duration: 0.15 }}>
                      <Sun className="h-2.5 w-2.5 text-primary-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </button>

          </div>

          {/* Mobile right side */}
          <div className="flex items-center lg:hidden gap-3">
            <a
              href="tel:+375291552776"
              className="flex items-center gap-1.5 text-[11px] tracking-[0.08em] uppercase font-medium text-foreground/70"
            >
              <Phone className="h-3.5 w-3.5 text-primary" />
              <span className="hidden sm:inline">+375 (29) 155-27-76</span>
            </a>
            <button
              aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-foreground/70 hover:text-foreground transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border shadow-lg"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-1">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[11px] tracking-[0.18em] uppercase font-medium text-foreground/60 hover:text-foreground py-3 border-b border-border/30 last:border-0 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {socialLinks.map((s) => (
                    <SocialIcon key={s.label} {...s} size={34} />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-0.5 text-[11px] tracking-[0.12em] uppercase font-medium">
                    <button onClick={() => setLang("ru")} className={`px-2 py-1 transition-colors ${lang === "ru" ? "text-foreground" : "text-foreground/40"}`}>RU</button>
                    <span className="text-border/60">/</span>
                    <button onClick={() => setLang("en")} className={`px-2 py-1 transition-colors ${lang === "en" ? "text-foreground" : "text-foreground/40"}`}>EN</button>
                  </div>
                  <button
                    onClick={() => setTheme(isDark ? "light" : "dark")}
                    aria-label="Toggle theme"
                    className="relative w-[44px] h-[24px] rounded-full border border-border/60 bg-muted/50 flex items-center transition-colors"
                  >
                    <motion.div
                      className="absolute w-[18px] h-[18px] rounded-full bg-primary flex items-center justify-center shadow-sm"
                      animate={{ x: isDark ? 3 : 23 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    >
                      {isDark ? <Moon className="h-2.5 w-2.5 text-primary-foreground" /> : <Sun className="h-2.5 w-2.5 text-primary-foreground" />}
                    </motion.div>
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

    {/* Floating social sidebar — mobile only */}
    <div className="lg:hidden fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2 pr-2">
      {socialLinks.map((s) => (
        <SocialIcon key={s.label} {...s} size={36} />
      ))}
    </div>
    </>
  );
}
