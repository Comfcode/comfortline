import { Instagram, Send, PhoneCall } from "lucide-react";
import { SiTelegram, SiViber, SiYoutube, SiWhatsapp } from "react-icons/si";

export function Footer() {
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
              Индивидуальный трансфер бизнес и премиум класса. Работаем с 2015 года по всей Беларуси, России и Европе.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <SiTelegram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <SiWhatsapp className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <SiViber className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <SiYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Навигация</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Услуги</a></li>
              <li><a href="#fleet" className="hover:text-primary transition-colors">Автопарк</a></li>
              <li><a href="#prices" className="hover:text-primary transition-colors">Тарифы в аэропорт</a></li>
              <li><a href="#advantages" className="hover:text-primary transition-colors">Преимущества</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Направления</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Трансфер в Аэропорт</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Поездки по Минску</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Межгород по Беларуси</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Трансфер в Россию</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Поездки в Европу</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Контакты</h4>
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
          <p>© {new Date().getFullYear()} ComfortLine. Все права защищены.</p>
          <div className="flex gap-4">
            <span>ИП Мурашко Андрей Антонович</span>
            <span>УНП 193255422</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
