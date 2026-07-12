import { Download, ShieldCheck, X } from "lucide-react";
import { Logo, LogoMark } from "@/components/brand/Logo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/seo/Seo";
import { useLang } from "@/context/language-context";

const colors = [
  { name: "Charcoal 950", hex: "#0E0D13", use: "Primary dark canvas" },
  { name: "Charcoal 900", hex: "#131218", use: "Dark surface" },
  { name: "Charcoal 800", hex: "#1C1B24", use: "Raised surface" },
  { name: "Signature Gold", hex: "#B59C73", use: "Primary brand accent" },
  { name: "Gold Highlight", hex: "#D4B07A", use: "Highlights only" },
  { name: "Warm White", hex: "#F5F0E8", use: "Text on dark" },
  { name: "Paper", hex: "#F8F7F5", use: "Light canvas" },
  { name: "Ink", hex: "#131218", use: "Text on light" },
];

const downloads = [
  ["Complete asset package", "/brand/comfortline-brand-assets.zip"],
  ["Primary SVG", "/brand/comfortline-logo-primary.svg"],
  ["Light-background SVG", "/brand/comfortline-logo-on-light.svg"],
  ["White SVG", "/brand/comfortline-logo-white.svg"],
  ["Black SVG", "/brand/comfortline-logo-black.svg"],
  ["Primary PNG", "/brand/comfortline-logo-primary.png"],
  ["Light-background PNG", "/brand/comfortline-logo-on-light.png"],
  ["Primary JPEG", "/brand/comfortline-logo-primary.jpg"],
  ["Light-background JPEG", "/brand/comfortline-logo-on-light.jpg"],
  ["Primary WebP", "/brand/comfortline-logo-primary.webp"],
  ["Vector PDF", "/brand/comfortline-logo-primary.pdf"],
  ["Vector EPS", "/brand/comfortline-logo-primary.eps"],
  ["Symbol SVG", "/brand/comfortline-mark.svg"],
  ["Symbol PNG", "/brand/comfortline-mark.png"],
  ["Design tokens", "/brand/comfortline.tokens.json"],
];

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-7">
        <span className="text-xs font-mono text-primary">{number}</span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          {title}
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>
      {children}
    </section>
  );
}

export default function BrandbookPage() {
  const { lang } = useLang();
  const ru = lang === "ru";
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        titleRu="Бренд-система ComfortLine"
        titleEn="ComfortLine Brand System"
        descRu="Официальная бренд-система ComfortLine: логотип, цвета, типографика, голос и правила применения."
        descEn="Official ComfortLine brand system: logo, color, typography, voice and application rules."
        pathRu="/brandbook"
        pathEn="/brandbook"
        noBusinessJsonLd
        noindex
      />
      <Navbar />

      <main className="pt-20 pb-28">
        <header className="bg-[#0E0D13] border-y border-white/5">
          <div className="container mx-auto max-w-6xl px-6 py-20 md:py-28 grid md:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <p className="text-[#B59C73] text-xs font-semibold tracking-[0.24em] uppercase mb-5">
                Brand identity system · 2026
              </p>
              <h1 className="text-[#F5F0E8] text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl">
                {ru
                  ? "Спокойная уверенность в каждой поездке"
                  : "Quiet confidence in every journey"}
              </h1>
              <p className="text-[#F5F0E8]/65 text-base md:text-lg leading-relaxed max-w-2xl mt-6">
                {ru
                  ? "ComfortLine сочетает точность профессионального трансфера с тёплым персональным сервисом. Система едина: угольная основа, фирменное золото, ясная типографика и сдержанная подача."
                  : "ComfortLine combines the precision of a professional transfer with warm, personal service. The system is intentionally consistent: charcoal foundations, signature gold, clear typography and restrained expression."}
              </p>
            </div>
            <div className="rounded-3xl bg-[#131218] border border-white/10 p-12 flex justify-center">
              <Logo variant="stacked" scheme="dark" height={150} showTagline />
            </div>
          </div>
        </header>

        <div className="container mx-auto max-w-6xl px-6 mt-20 space-y-24">
          <Section
            number="01"
            title={ru ? "Стратегия бренда" : "Brand strategy"}
          >
            <div className="grid md:grid-cols-3 gap-4">
              {[
                [
                  ru ? "Обещание" : "Promise",
                  ru
                    ? "Личная поездка без неопределённости — от двери до двери."
                    : "A personal journey without uncertainty, door to door.",
                ],
                [
                  ru ? "Характер" : "Character",
                  ru
                    ? "Спокойный, надёжный, внимательный, международный."
                    : "Calm, dependable, attentive and international.",
                ],
                [
                  ru ? "Отличие" : "Difference",
                  ru
                    ? "Человеческое сопровождение там, где маршрут сложнее обычного такси."
                    : "Human guidance where the journey is more complex than an ordinary taxi.",
                ],
              ].map(([title, body]) => (
                <article
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <h3 className="font-semibold text-primary">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </Section>

          <Section number="02" title={ru ? "Основной логотип" : "Primary logo"}>
            <p className="text-muted-foreground max-w-3xl leading-relaxed mb-8">
              {ru
                ? "Знак — направленная вперёд лента в форме C. Он выражает движение, маршрут и личное сопровождение. Горизонтальная версия является основной; знак используется самостоятельно только в компактных форматах."
                : "The mark is a forward-moving ribbon shaped as a C. It represents motion, route and personal guidance. The horizontal lockup is primary; the symbol may stand alone only in compact applications."}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#0E0D13] border border-white/10 p-12 min-h-56 flex items-center justify-center">
                <Logo variant="full" scheme="dark" height={54} />
              </div>
              <div className="rounded-2xl bg-[#F8F7F5] border border-black/10 p-12 min-h-56 flex items-center justify-center">
                <Logo variant="full" scheme="light" height={54} />
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-dashed border-primary/50 p-10 flex flex-col items-center gap-5">
              <div className="p-9 border border-dashed border-primary/50">
                <Logo variant="full" scheme="dark" height={40} />
              </div>
              <p className="text-sm text-muted-foreground text-center">
                {ru
                  ? "Защитное поле: не менее высоты буквы C со всех сторон."
                  : "Clear space: at least one wordmark-cap-height on every side."}
              </p>
            </div>
          </Section>

          <Section
            number="03"
            title={
              ru ? "Знак и минимальные размеры" : "Symbol and minimum sizes"
            }
          >
            <div className="grid md:grid-cols-[1fr_1.4fr] gap-4">
              <div className="rounded-2xl bg-[#0E0D13] p-12 flex items-center justify-center">
                <LogoMark size={116} gradientId="brandbook-mark" />
              </div>
              <div className="rounded-2xl border border-border bg-card p-7">
                <dl className="grid gap-5 text-sm">
                  <div>
                    <dt className="font-semibold">Digital lockup</dt>
                    <dd className="text-muted-foreground mt-1">
                      120 px minimum width
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Digital symbol</dt>
                    <dd className="text-muted-foreground mt-1">
                      24 px minimum width; use the simplified favicon below 24
                      px
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Print lockup</dt>
                    <dd className="text-muted-foreground mt-1">
                      32 mm minimum width
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Print symbol</dt>
                    <dd className="text-muted-foreground mt-1">
                      7 mm minimum width
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </Section>

          <Section number="04" title={ru ? "Цветовая система" : "Color system"}>
            <p className="text-muted-foreground max-w-3xl leading-relaxed mb-8">
              {ru
                ? "Цвета применяются по смысловым ролям, а не выбираются произвольно. Золото обозначает действие и премиальное внимание; оно не используется для длинного текста."
                : "Colors are assigned by semantic role, not chosen decoratively. Gold signals action and premium attention; it is not used for long-form text."}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {colors.map((color) => (
                <div
                  key={color.hex}
                  className="rounded-2xl border border-border overflow-hidden bg-card"
                >
                  <div className="h-24" style={{ background: color.hex }} />
                  <div className="p-4">
                    <p className="font-semibold text-sm">{color.name}</p>
                    <code className="text-xs text-primary">{color.hex}</code>
                    <p className="text-xs text-muted-foreground mt-2">
                      {color.use}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex gap-3 items-start rounded-2xl border border-border bg-card p-5">
              <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                WCAG 2.2 AA governs interface text and controls: 4.5:1 for
                normal text, 3:1 for large text and essential interface
                graphics. Use Warm White on Charcoal and Ink on Paper for body
                copy.
              </p>
            </div>
          </Section>

          <Section number="05" title={ru ? "Типографика" : "Typography"}>
            <div className="rounded-2xl border border-border bg-card p-7 md:p-10">
              <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center">
                <div className="text-7xl font-extrabold text-primary">Aa</div>
                <div>
                  <h3 className="text-2xl font-bold">Montserrat</h3>
                  <p className="text-muted-foreground mt-2">
                    Primary family for interface, editorial and signage. System
                    sans-serif is the fallback.
                  </p>
                </div>
              </div>
              <div className="mt-10 grid gap-5">
                <p className="text-5xl font-extrabold tracking-tight">
                  Display / 800
                </p>
                <p className="text-3xl font-bold tracking-tight">
                  Heading / 700
                </p>
                <p className="text-xl font-semibold">Subheading / 600</p>
                <p className="text-base leading-7 max-w-3xl">
                  Body / 400 — concise, readable and generous in line height.
                  Use sentence case and avoid excessive tracking in paragraphs.
                </p>
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
                  Label / 600
                </p>
              </div>
            </div>
          </Section>

          <Section
            number="06"
            title={ru ? "Голос и содержание" : "Voice and content"}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-7">
                <h3 className="font-semibold text-emerald-500">
                  {ru ? "Использовать" : "Use"}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground list-disc pl-5">
                  <li>
                    {ru
                      ? "Конкретные факты: маршрут, время, цена, документы."
                      : "Concrete facts: route, time, price and documents."}
                  </li>
                  <li>
                    {ru
                      ? "Спокойные короткие предложения и понятные действия."
                      : "Calm, short sentences and clear next actions."}
                  </li>
                  <li>
                    {ru
                      ? "Честно обозначать переменные условия границы."
                      : "State variable border conditions honestly."}
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-7">
                <h3 className="font-semibold text-red-500">
                  {ru ? "Не использовать" : "Avoid"}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground list-disc pl-5">
                  <li>
                    {ru
                      ? "Непроверенные обещания и гарантии времени на границе."
                      : "Unverified promises or guaranteed border times."}
                  </li>
                  <li>
                    {ru
                      ? "Крикливый люкс, превосходные степени и давление."
                      : "Flashy luxury, superlatives and pressure."}
                  </li>
                  <li>
                    {ru
                      ? "Повторение ключевых слов вместо полезного текста."
                      : "Keyword repetition in place of useful information."}
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          <Section number="07" title={ru ? "Фотостиль" : "Photography"}>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                ru
                  ? "Реальные автомобили и водители"
                  : "Real vehicles and drivers",
                ru
                  ? "Естественный свет и спокойный цвет"
                  : "Natural light and restrained color",
                ru
                  ? "Контекст маршрута, а не стоковый люкс"
                  : "Journey context, not stock luxury",
              ].map((item) => (
                <div
                  key={item}
                  className="aspect-[4/3] rounded-2xl border border-border bg-gradient-to-br from-[#1C1B24] to-[#0E0D13] p-6 flex items-end"
                >
                  <p className="text-sm font-semibold text-[#F5F0E8]">{item}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section
            number="08"
            title={ru ? "Недопустимое применение" : "Logo misuse"}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                ru ? "Не растягивать" : "Do not stretch",
                ru ? "Не поворачивать" : "Do not rotate",
                ru ? "Не перекрашивать" : "Do not recolor",
                ru ? "Не размещать на шумном фоне" : "Avoid busy backgrounds",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-red-500/25 bg-red-500/5 p-6 min-h-40 flex flex-col justify-between"
                >
                  <div
                    className={
                      index === 0
                        ? "scale-x-125"
                        : index === 1
                          ? "rotate-12"
                          : index === 2
                            ? "grayscale"
                            : "blur-[1px]"
                    }
                  >
                    <Logo variant="mark" scheme="dark" height={48} />
                  </div>
                  <p className="text-sm flex items-center gap-2">
                    <X className="h-4 w-4 text-red-500" />
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section number="09" title={ru ? "Файлы бренда" : "Brand assets"}>
            <p className="text-muted-foreground max-w-3xl leading-relaxed mb-7">
              {ru
                ? "SVG — основной формат для цифровых интерфейсов; PDF/EPS — для профессиональной печати; PNG — для прозрачного растра; JPEG — только для непрозрачных светлых или тёмных фонов; WebP — для компактной веб-доставки."
                : "SVG is the digital master; PDF/EPS serve professional print; PNG is the transparent raster; JPEG is only for fixed light or dark backgrounds; WebP is the compact web delivery format."}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {downloads.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  download
                  className="rounded-xl border border-border bg-card px-5 py-4 flex items-center justify-between gap-4 hover:border-primary/60 transition-colors"
                >
                  <span className="text-sm font-medium">{label}</span>
                  <Download className="h-4 w-4 text-primary" />
                </a>
              ))}
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
