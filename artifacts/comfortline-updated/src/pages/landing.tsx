import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Fleet } from "@/components/sections/Fleet";
import { Advantages } from "@/components/sections/Advantages";
import { Reviews } from "@/components/sections/Reviews";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { Contact } from "@/components/sections/Contact";
import { Seo } from "@/seo/Seo";

export default function LandingPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col w-full bg-background selection:bg-primary/30">
      <Seo
        titleRu="ComfortLine — комфортный трансфер Минск–Вильнюс аэропорт, Минск–Варшава аэропорт"
        titleEn="ComfortLine — Comfortable Transfers Minsk–Vilnius Airport, Minsk–Warsaw Airport"
        descRu="Комфортный трансфер из Минска в аэропорт Вильнюса (VNO) и аэропорт Варшавы (WAW, Модлин), Берлин и города Европы. Фиксированная цена, опытный водитель, комфортные авто. Заказ онлайн или +375 (44) 762-06-49."
        descEn="Comfortable transfers from Minsk to Vilnius Airport (VNO) and Warsaw Airport (WAW, Modlin), Berlin and major European cities. Fixed prices, English-speaking drivers, comfortable vehicles. Book online or call +375 (44) 762-06-49."
        pathRu="/"
        pathEn="/en"
        keywordsRu="трансфер минск вильнюс аэропорт, трансфер минск варшава аэропорт, минск vno, минск waw, такси минск аэропорт вильнюса, такси минск аэропорт варшавы, комфортный трансфер из минска, трансфер минск европа, ComfortLine"
        keywordsEn="minsk vilnius airport transfer, minsk warsaw airport transfer, minsk vno taxi, minsk waw taxi, comfortable transfer minsk to vilnius, comfortable transfer minsk to warsaw, minsk europe transfer, ComfortLine"
      />
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <Services />
        <Fleet />
        <Advantages />
        <Reviews />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
