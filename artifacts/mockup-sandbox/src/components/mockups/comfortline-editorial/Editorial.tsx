import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Menu } from "lucide-react";

export function Editorial() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-950 via-zinc-900 to-neutral-950 text-stone-200 font-['Montserrat'] overflow-x-hidden selection:bg-[#B59C73] selection:text-stone-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-8 mix-blend-difference">
        <div className="font-['Playfair_Display'] text-2xl tracking-widest text-white uppercase">
          ComfortLine
        </div>
        <button className="text-white hover:text-[#B59C73] transition-colors">
          <Menu className="w-8 h-8 font-light" strokeWidth={1} />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-32 pb-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-start space-y-4">
            <span className="text-[#B59C73] tracking-[0.3em] text-sm uppercase font-light ml-2">
              Premium Chauffeur Service
            </span>
            <h1 className="font-['Playfair_Display'] text-7xl md:text-[9rem] lg:text-[12rem] leading-[0.85] tracking-tight text-white italic font-light">
              Arrive
            </h1>
            <h1 className="font-['Playfair_Display'] text-7xl md:text-[9rem] lg:text-[12rem] leading-[0.85] tracking-tight text-white ml-12 md:ml-32">
              Unnoticed.
            </h1>
          </div>
          
          <div className="mt-32 max-w-md ml-auto text-right">
            <p className="text-stone-400 font-light leading-relaxed text-lg mb-8">
              Exacting standards for those who command the room before they even enter it. The definitive premium transfer experience.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Spread Section 1 */}
      <section className="py-32 px-6 md:px-20 border-t border-stone-800/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2 aspect-[3/4] bg-stone-900 relative overflow-hidden group">
            {/* Image Placeholder - use absolute positioning to fake an image if none exists, or use a solid elegant color block for mockup purposes */}
            <div className="absolute inset-0 bg-stone-800/30 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
            <img 
              src="/__mockup/images/car-interior-dark.jpg" 
              alt="Luxury Interior" 
              className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute bottom-8 left-8">
              <span className="font-['Playfair_Display'] text-4xl italic text-white">01</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl text-white mb-8 leading-tight">
              Absolute <br /> <span className="italic text-stone-400">Discretion.</span>
            </h2>
            <p className="text-stone-400 font-light leading-relaxed text-lg max-w-md">
              Our fleet is meticulously maintained and completely unmarked. Tinted windows and acoustic isolation ensure your journey remains entirely your own.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Spread Section 2 */}
      <section className="py-32 px-6 md:px-20 bg-stone-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-20 items-center">
          <div className="w-full md:w-5/12 aspect-square bg-stone-900 relative overflow-hidden">
            <img 
              src="/__mockup/images/chauffeur.jpg" 
              alt="Chauffeur" 
              className="w-full h-full object-cover opacity-50 sepia-[.3] contrast-125"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
             <div className="absolute top-8 right-8">
              <span className="font-['Playfair_Display'] text-4xl italic text-white">02</span>
            </div>
          </div>
          <div className="w-full md:w-7/12 flex flex-col">
            <h2 className="font-['Playfair_Display'] text-6xl md:text-8xl text-white mb-10 leading-none tracking-tighter">
              Impeccable <br /> Standard.
            </h2>
            <div className="flex flex-col sm:flex-row gap-12 text-stone-400 font-light">
              <div className="flex-1">
                <h3 className="text-white font-medium mb-3 tracking-widest text-xs uppercase text-[#B59C73]">The Fleet</h3>
                <p className="leading-relaxed">Mercedes-Benz S-Class, V-Class, and BMW 7 Series. Handpicked for unparalleled comfort and dynamic presence.</p>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-medium mb-3 tracking-widest text-xs uppercase text-[#B59C73]">The Drivers</h3>
                <p className="leading-relaxed">Trained in evasive driving, etiquette, and profound silence. They anticipate needs before they are articulated.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Booking Footer */}
      <section className="relative py-40 px-6 md:px-20 border-t border-stone-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl text-white mb-16 italic">
            Reserve your journey.
          </h2>
          
          <form className="flex flex-col md:flex-row items-center justify-center gap-0 max-w-2xl mx-auto relative group">
            <Input 
              type="text" 
              placeholder="Destination or Itinerary..." 
              className="h-16 rounded-none border-b border-stone-700 bg-transparent text-white text-lg px-0 placeholder:text-stone-600 focus-visible:ring-0 focus-visible:border-[#B59C73] focus-visible:ring-offset-0 transition-colors w-full md:w-2/3"
            />
            <Button 
              type="button" 
              className="h-16 w-full md:w-auto rounded-none bg-[#B59C73] hover:bg-[#a38a60] text-stone-950 px-12 text-sm tracking-[0.2em] uppercase font-medium transition-all"
            >
              Request <ArrowRight className="ml-3 w-4 h-4" />
            </Button>
          </form>
          <div className="mt-8 text-stone-500 text-xs tracking-widest uppercase font-light">
            Or contact our concierge at <a href="tel:+18005550199" className="text-[#B59C73] hover:text-white transition-colors">+1 800 555 0199</a>
          </div>
        </div>
      </section>
    </div>
  );
}
