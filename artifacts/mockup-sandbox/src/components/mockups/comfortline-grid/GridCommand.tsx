import React, { useState } from 'react';
import { 
  ArrowRight, 
  Calendar, 
  Car, 
  Clock, 
  Shield, 
  Star, 
  Plane,
  Terminal,
  MapPin,
  ChevronRight
} from 'lucide-react';

export function GridCommand() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-300 font-['Montserrat'] selection:bg-[#B59C73] selection:text-black">
      {/* Top Nav */}
      <nav className="border-b border-white/5 px-8 py-6 flex justify-between items-center bg-[#0A0A0A]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-[#B59C73]/30 bg-[#B59C73]/10 flex items-center justify-center">
            <Terminal className="w-4 h-4 text-[#B59C73]" />
          </div>
          <span className="text-white font-bold tracking-[0.2em] text-sm uppercase">ComfortLine</span>
        </div>
        <div className="flex items-center gap-8 text-xs font-semibold tracking-wider text-zinc-500 uppercase">
          <a href="#" className="hover:text-white transition-colors">Fleet</a>
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Corporate</a>
          <a href="#" className="text-[#B59C73] hover:text-[#B59C73]/80 transition-colors">Account</a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-32 pb-24">
        {/* Header section */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            Command <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#B59C73] to-[#8C7650]">The Road</span>
          </h1>
          <p className="text-zinc-500 font-medium tracking-wide max-w-xl text-lg uppercase text-sm">
            Uncompromising precision. Executive transfer protocols initiated.
          </p>
        </div>

        {/* Command Bar */}
        <div className="mb-24 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B59C73]/20 to-transparent blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          <div className="relative flex flex-col md:flex-row items-stretch bg-[#0F0F0F] border border-white/10 rounded-none overflow-hidden focus-within:border-[#B59C73] transition-colors duration-300">
            <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-white/5 relative">
              <MapPin className="w-4 h-4 text-zinc-600 absolute left-6" />
              <input 
                type="text" 
                placeholder="ORIGIN" 
                className="w-full bg-transparent border-none text-white placeholder:text-zinc-600 focus:ring-0 px-14 py-6 font-semibold uppercase tracking-wider text-sm focus:outline-none"
              />
            </div>
            
            <div className="hidden md:flex items-center justify-center w-12 bg-white/5 border-r border-white/5">
              <ArrowRight className="w-4 h-4 text-zinc-600" />
            </div>

            <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-white/5 relative">
              <MapPin className="w-4 h-4 text-zinc-600 absolute left-6" />
              <input 
                type="text" 
                placeholder="DESTINATION" 
                className="w-full bg-transparent border-none text-white placeholder:text-zinc-600 focus:ring-0 px-14 py-6 font-semibold uppercase tracking-wider text-sm focus:outline-none"
              />
            </div>

            <div className="flex-1 flex items-center border-b md:border-b-0 border-white/5 relative">
              <Calendar className="w-4 h-4 text-zinc-600 absolute left-6" />
              <input 
                type="text" 
                placeholder="DATE & TIME" 
                className="w-full bg-transparent border-none text-white placeholder:text-zinc-600 focus:ring-0 px-14 py-6 font-semibold uppercase tracking-wider text-sm focus:outline-none"
              />
            </div>

            <button className="bg-[#B59C73] hover:bg-[#c2a981] text-black px-12 py-6 font-bold uppercase tracking-widest text-sm transition-colors flex items-center justify-center gap-2">
              Deploy
              <Terminal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Fleet Card */}
          <div className="group bg-[#0A0A0A] border border-white/10 hover:border-[#B59C73]/50 p-8 flex flex-col justify-between min-h-[400px] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B59C73]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex justify-between items-start mb-12">
              <div>
                <span className="inline-block px-2 py-1 bg-white/5 border border-white/10 text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Class E</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-wider">Executive</h3>
              </div>
              <div className="text-right">
                <span className="block text-[#B59C73] font-bold text-xl">FROM €85</span>
                <span className="text-zinc-600 text-xs uppercase tracking-widest font-semibold">Per Transfer</span>
              </div>
            </div>
            
            <div className="relative z-10 space-y-4 mb-8 flex-grow">
              <div className="flex items-center justify-between text-sm border-b border-white/5 pb-2">
                <span className="text-zinc-500 uppercase tracking-wider font-semibold">Passat, Superb</span>
                <span className="text-white font-bold">1-3 PAX</span>
              </div>
              <div className="flex items-center justify-between text-sm border-b border-white/5 pb-2">
                <span className="text-zinc-500 uppercase tracking-wider font-semibold">Baggage</span>
                <span className="text-white font-bold">3 PCS</span>
              </div>
            </div>

            <button className="relative z-10 w-full py-4 border border-white/10 text-white uppercase tracking-widest text-xs font-bold hover:bg-white/5 hover:border-[#B59C73] transition-colors flex items-center justify-between px-6">
              View Fleet Specifications
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Services Card */}
          <div className="group bg-[#0A0A0A] border border-white/10 hover:border-[#B59C73]/50 p-8 flex flex-col justify-between min-h-[400px] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B59C73]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 mb-12">
               <span className="inline-block px-2 py-1 bg-white/5 border border-white/10 text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Protocols</span>
              <h3 className="text-2xl font-black text-white uppercase tracking-wider">Capabilities</h3>
            </div>

            <div className="relative z-10 flex-grow grid grid-cols-2 gap-4">
              <div className="border border-white/5 bg-[#0F0F0F] p-4 flex flex-col items-center justify-center text-center gap-3 hover:border-[#B59C73]/30 transition-colors">
                <Plane className="w-6 h-6 text-[#B59C73]" />
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Airport<br/>Transfer</span>
              </div>
              <div className="border border-white/5 bg-[#0F0F0F] p-4 flex flex-col items-center justify-center text-center gap-3 hover:border-[#B59C73]/30 transition-colors">
                <Clock className="w-6 h-6 text-[#B59C73]" />
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Hourly<br/>Hire</span>
              </div>
              <div className="border border-white/5 bg-[#0F0F0F] p-4 flex flex-col items-center justify-center text-center gap-3 hover:border-[#B59C73]/30 transition-colors">
                <Shield className="w-6 h-6 text-[#B59C73]" />
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">VIP<br/>Security</span>
              </div>
              <div className="border border-white/5 bg-[#0F0F0F] p-4 flex flex-col items-center justify-center text-center gap-3 hover:border-[#B59C73]/30 transition-colors">
                <Car className="w-6 h-6 text-[#B59C73]" />
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Intercity<br/>Travel</span>
              </div>
            </div>
          </div>

          {/* Social Proof Card */}
          <div className="group bg-[#0A0A0A] border border-white/10 hover:border-[#B59C73]/50 p-8 flex flex-col justify-between min-h-[400px] transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B59C73]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex justify-between items-start mb-8">
              <div>
                <span className="inline-block px-2 py-1 bg-white/5 border border-white/10 text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Telemetry</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-wider">Performance</h3>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#B59C73] font-bold text-xl">4.9</span>
                <Star className="w-4 h-4 text-[#B59C73] fill-[#B59C73]" />
              </div>
            </div>

            <div className="relative z-10 space-y-4 flex-grow">
              <div className="bg-[#0F0F0F] border border-white/5 p-4">
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">"Flawless execution. The driver was exactly on time, vehicle immaculate."</p>
                <div className="mt-3 text-[10px] uppercase tracking-widest font-bold text-white flex items-center justify-between">
                  <span>A. Mercer</span>
                  <span className="text-zinc-600">LHR → LDN</span>
                </div>
              </div>
              <div className="bg-[#0F0F0F] border border-white/5 p-4">
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">"Seamless booking interface. The transfer was handled with utmost discretion."</p>
                <div className="mt-3 text-[10px] uppercase tracking-widest font-bold text-white flex items-center justify-between">
                  <span>E. Vance</span>
                  <span className="text-zinc-600">CDG → PAR</span>
                </div>
              </div>
              <div className="bg-[#0F0F0F] border border-white/5 p-4">
                 <div className="mt-1 text-[10px] uppercase tracking-widest font-bold text-[#B59C73] flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                  View 4,209 more logs
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
