import React from "react";
import { Calendar, MapPin, Navigation, Clock, User, ChevronRight, Menu } from "lucide-react";

export function Cinematic() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-['Montserrat',sans-serif] selection:bg-[#B59C73] selection:text-white relative overflow-hidden flex flex-col">
      {/* Background with deep dark gradient and image overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black z-10 opacity-80" />
        <img 
          src="/__mockup/images/cinematic-bg.jpg" 
          alt="Luxury background" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        {/* Subtle teal/indigo undertones */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/10 via-transparent to-teal-900/10 z-10" />
        
        {/* Radial gradient blob behind the panel */}
        <div className="absolute top-1/4 right-[10%] w-[600px] h-[600px] bg-[#B59C73]/10 rounded-full blur-[120px] z-10" />
      </div>

      {/* Glass Navbar */}
      <nav className="relative z-50 w-full p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="text-2xl font-bold tracking-widest text-white border-b-2 border-[#B59C73] pb-1">
              COMFORT<span className="text-[#B59C73]">LINE</span>
            </div>
            
            {/* Nav Links - Glass Pill */}
            <div className="hidden md:flex items-center gap-8 px-8 py-3 rounded-full bg-slate-950/40 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <a href="#" className="text-sm tracking-wide text-slate-300 hover:text-white transition-colors">FLEET</a>
              <a href="#" className="text-sm tracking-wide text-slate-300 hover:text-white transition-colors">SERVICES</a>
              <a href="#" className="text-sm tracking-wide text-slate-300 hover:text-white transition-colors">CORPORATE</a>
              <a href="#" className="text-sm tracking-wide text-slate-300 hover:text-white transition-colors">CONTACT</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block text-sm font-medium text-[#B59C73] hover:text-white transition-colors uppercase tracking-wider">
              Log In
            </button>
            <button className="p-2 rounded-full bg-slate-900/50 border border-white/10 backdrop-blur-sm text-white md:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-20 flex-1 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto w-full px-6 py-12 gap-12">
        
        {/* Left: Massive Typography */}
        <div className="flex-1 lg:pr-12">
          <div className="inline-block px-3 py-1 mb-6 rounded-full border border-[#B59C73]/30 bg-[#B59C73]/10 text-[#B59C73] text-xs font-semibold tracking-widest uppercase backdrop-blur-sm">
            Premium Chauffeur Service
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-[1.1] tracking-tight text-white mb-6 drop-shadow-2xl">
            ELEVATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B59C73] to-[#D4C3A3] font-serif italic font-light">YOUR</span> JOURNEY.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed font-light">
            Experience uncompromised luxury and flawless execution with our executive transfer service. Because arriving is an art form.
          </p>
        </div>

        {/* Right: Glassmorphism Booking Panel */}
        <div className="w-full max-w-md">
          <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none" />
            
            <h2 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#B59C73]"></span>
              Reserve Your Car
            </h2>

            <form className="space-y-6 relative z-10" onSubmit={e => e.preventDefault()}>
              
              {/* Pickup */}
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase ml-1">Pickup Location</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B59C73] w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Enter airport, hotel, or address" 
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#B59C73]/50 focus:bg-black/60 transition-all font-light"
                  />
                </div>
              </div>

              {/* Dropoff */}
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase ml-1">Dropoff Location</label>
                <div className="relative">
                  <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B59C73] w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Enter destination" 
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#B59C73]/50 focus:bg-black/60 transition-all font-light"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="flex gap-4">
                <div className="space-y-2 flex-1">
                  <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase ml-1">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B59C73] w-5 h-5" />
                    <input 
                      type="text" 
                      placeholder="Select date" 
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#B59C73]/50 focus:bg-black/60 transition-all font-light"
                    />
                  </div>
                </div>
                <div className="space-y-2 flex-1">
                  <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase ml-1">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B59C73] w-5 h-5" />
                    <input 
                      type="text" 
                      placeholder="00:00" 
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#B59C73]/50 focus:bg-black/60 transition-all font-light"
                    />
                  </div>
                </div>
              </div>

              {/* Passengers */}
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase ml-1">Passengers</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B59C73] w-5 h-5" />
                  <select className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white appearance-none focus:outline-none focus:border-[#B59C73]/50 focus:bg-black/60 transition-all font-light">
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4+">4+ Passengers</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button className="w-full group bg-gradient-to-r from-[#C2A87E] to-[#B59C73] hover:from-[#D4C3A3] hover:to-[#C2A87E] text-slate-950 font-bold text-sm tracking-widest uppercase py-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(181,156,115,0.3)] mt-8">
                Request Quote
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
            </form>
          </div>
        </div>
      </main>
      
      {/* Footer/Trust markers */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pb-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-widest text-slate-500 uppercase">
        <div className="flex gap-6">
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#B59C73]"></span> 24/7 Concierge</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#B59C73]"></span> Premium Fleet</span>
        </div>
        <div>
          © 2026 ComfortLine. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
