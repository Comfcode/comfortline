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
        titleRu="Такси и частный трансфер из Минска | ComfortLine"
        titleEn="Private Taxi Transfers from Minsk | ComfortLine"
        descRu="Такси и индивидуальный трансфер из Минска в Вильнюс, Варшаву и аэропорты Европы. Фиксированная цена, комфортные авто и опытные водители."
        descEn="Private taxi and individual transfers from Minsk to Vilnius, Warsaw and European airports. Fixed fares and professional drivers."
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
