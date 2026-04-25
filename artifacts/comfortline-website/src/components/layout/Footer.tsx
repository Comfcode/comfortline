import { PhoneCall, Send } from "lucide-react";
import { Instagram } from "lucide-react";
import { SiTelegram, SiViber, SiYoutube, SiWhatsapp } from "react-icons/si";
import { useLang } from "@/context/language-context";

const navHrefs = ["#services", "#fleet", "#prices", "#advantages", "#reviews"];

export function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Logo & About */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-1 group mb-6">
              <span className="text-2xl font-bold text-foreground">
                Comfort
              </span>
              <span className="text-2xl font-bold text-primary">Line</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {f.tagline}
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/transfer_comfortline/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://t.me/transfer_comfortline" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <SiTelegram className="h-5 w-5" />
              </a>
              <a href="https://wa.me/375291552776" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <SiWhatsapp className="h-5 w-5" />
              </a>
              <a href="viber://chat?number=%2B375291552776" aria-label="Viber" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <SiViber className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <SiYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">{f.navHeading}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {f.navLinks.map((label, i) => (
                <li key={i}><a href={navHrefs[i]} className="hover:text-primary transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-6">{f.servicesHeading}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {f.serviceLinks.map((label, i) => (
                <li key={i}><a href="#services" className="hover:text-primary transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-6">{f.contactsHeading}</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <PhoneCall className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+375291552776" className="hover:text-primary transition-colors font-medium text-foreground">+375 (29) 155-27-76</a>
              </li>
              <li className="flex items-start gap-3">
                <Send className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@comfortline.by" className="hover:text-primary transition-colors">info@comfortline.by</a>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                <span>г. Минск, ул. Фёдорова, 19-10</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} ComfortLine. {f.copyright}</p>
          <div className="flex flex-wrap gap-4 items-center">
            <span>{f.legalName}</span>
            <span>{f.unp}</span>
            <a href="/privacy" className="hover:text-primary transition-colors underline underline-offset-2">
              {f.privacyPolicy}
            </a>
            <a href="/terms" className="hover:text-primary transition-colors underline underline-offset-2">
              {f.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
