import { motion } from "framer-motion";
import { useLang } from "@/context/language-context";
import { ExternalLink, Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { SiWhatsapp, SiTelegram, SiViber, SiMessenger } from "react-icons/si";
import { Instagram } from "lucide-react";

export function Contact() {
  const { t } = useLang();
  const lic = t.contact.licensing;

  return (
    <section id="contact" className="py-24 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">{t.contact.label}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.contact.heading}</h3>
          <p className="text-muted-foreground">{t.contact.subheading}</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-8 space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{t.contact.phone}</div>
                <a href="tel:+375291552776" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                  +375 (29) 155-27-76
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{t.contact.email}</div>
                <a href="mailto:info@comfortline.by" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  info@comfortline.by
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{t.contact.address}</div>
                <div className="text-foreground font-medium">г. Минск, ул. Фёдорова, 19-10</div>
              </div>
            </div>

            {/* Messenger quick links */}
            <div className="pt-4 border-t border-border/50">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Messenger</div>
              <div className="flex gap-3">
                {[
                  { icon: SiWhatsapp, href: "https://wa.me/375291552776", label: "WhatsApp", cls: "hover:bg-green-500" },
                  { icon: SiTelegram, href: "https://t.me/transfer_comfortline", label: "Telegram", cls: "hover:bg-sky-500" },
                  { icon: SiViber, href: "viber://chat?number=%2B375291552776", label: "Viber", cls: "hover:bg-purple-500" },
                  { icon: Instagram, href: "https://www.instagram.com/transfer_comfortline/", label: "Instagram", cls: "hover:bg-pink-500" },
                  { icon: SiMessenger, href: "https://m.me/103816619260365", label: "Messenger", cls: "hover:bg-blue-500" },
                ].map(({ icon: Icon, href, label, cls }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-foreground hover:text-white transition-colors ${cls}`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Licensing info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-card border border-border/60 rounded-2xl p-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-5">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider">{lic.badge}</span>
            </div>
            <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4">{lic.heading}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              {lic.text}
            </p>
            <div className="space-y-3 text-xs text-muted-foreground">
              <div className="flex flex-col gap-1">
                <span className="font-medium text-foreground/70">{lic.registryLabel}</span>
                <div className="flex flex-wrap gap-2">
                  <a href={lic.registryUrl1} target="_blank" rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1">
                    {lic.registryUrl1} <ExternalLink className="h-3 w-3" />
                  </a>
                  <a href={lic.registryUrl2} target="_blank" rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1">
                    {lic.registryUrl2} <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-medium text-foreground/70">{lic.directLinkLabel}</span>
                <a href={lic.directLinkUrl} target="_blank" rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1 break-all">
                  {lic.directLinkUrl} <ExternalLink className="h-3 w-3 shrink-0" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
