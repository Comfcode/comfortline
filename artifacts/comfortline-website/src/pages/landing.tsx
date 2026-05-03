import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Fleet } from "@/components/sections/Fleet";
import { Advantages } from "@/components/sections/Advantages";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { Seo } from "@/seo/Seo";

export default function LandingPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col w-full bg-background selection:bg-primary/30">
      <Seo
        titleRu="ComfortLine — премиум трансфер Минск — Вильнюс, Варшава, Берлин"
        titleEn="ComfortLine — Premium Transfers from Minsk to Vilnius, Warsaw, Berlin"
        descRu="Индивидуальный трансфер из Минска в аэропорты Вильнюса (VNO), Варшавы (WAW, WMI), Берлина и города Европы. Фиксированная цена, опытный водитель, премиум-автомобили. Заказ онлайн или +375 (29) 155-27-76."
        descEn="Private transfers from Minsk to Vilnius (VNO), Warsaw (WAW, WMI), Berlin and major European cities. Fixed prices, English-speaking drivers, premium vehicles. Book online or call +375 (29) 155-27-76."
        pathRu="/"
        pathEn="/"
        keywordsRu="трансфер из минска, трансфер минск вильнюс, трансфер минск варшава, такси минск европа, ComfortLine, заказ авто в аэропорт"
        keywordsEn="transfer from minsk, minsk vilnius airport, minsk warsaw transfer, minsk taxi europe, ComfortLine private transfer"
      />
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <Services />
        <Fleet />
        <Advantages />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
