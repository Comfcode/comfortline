import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Fleet } from "@/components/sections/Fleet";
import { Pricing } from "@/components/sections/Pricing";
import { Advantages } from "@/components/sections/Advantages";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";

export default function LandingPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col w-full bg-background selection:bg-primary/30">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <Services />
        <Fleet />
        <Pricing />
        <Advantages />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
