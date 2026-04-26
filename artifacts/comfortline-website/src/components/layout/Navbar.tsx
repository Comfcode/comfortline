import { useState, useEffect, ElementType } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/context/language-context";
import { SiWhatsapp, SiTelegram, SiViber } from "react-icons/si";
import { Instagram } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.services, href: "#services" },
    { name: t.nav.fleet, href: "#fleet" },
    { name: t.nav.prices, href: "#prices" },
    { name: t.nav.advantages, href: "#advantages" },
    { name: t.nav.reviews, href: "#reviews" },
    { name: t.nav.faq, href: "/faq" },
    { name: t.nav.contacts, href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: SiTelegram,
      href: "https://t.me/transfer_comfortline",
      label: "Telegram",
      bg: "#229ED9",
      gradient: false,
    },
    {
      icon: SiViber,
      href: "viber://chat?number=%2B375291552776",
      label: "Viber",
      bg: "#7360F2",
      gradient: false,
    },
    {
      icon: SiWhatsapp,
      href: "https://wa.me/375291552776",
      label: "WhatsApp",
      bg: "#25D366",
      gradient: false,
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/transfer_comfortline/",
      label: "Instagram",
      bg: "linear-gradient(45deg,#f09433,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888)",
      gradient: true,
    },
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
      style={{
        width: size,
        height: size,
        background: bg,
      }}
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
          <a href="/" className="flex items-center gap-1 group shrink-0">
            <span className="text-xl md:text-2xl font-bold text-foreground transition-colors group-hover:text-primary underline-offset-4 group-hover:underline decoration-primary/40">
              Comfort
            </span>
            <span className="text-xl md:text-2xl font-bold text-primary transition-colors group-hover:opacity-80 underline-offset-4 group-hover:underline decoration-primary/40">
              Line
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            <div className="flex gap-4 xl:gap-5">
              {navLinks.map((link) => (
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
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
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
            {/* Language toggle mobile */}
            <div className="flex items-center gap-2 p-2 text-sm font-semibold">
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
