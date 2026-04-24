import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Calendar, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

export function Concierge() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
  });

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-zinc-950 text-zinc-100 font-['Montserrat'] overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
      `}} />
      
      {/* Left Panel */}
      <div className="w-full md:w-[60%] relative min-h-[50vh] md:min-h-screen">
        <div className="absolute inset-0">
          <img 
            src="/__mockup/images/concierge-bg.jpg" 
            alt="Luxury Car Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-zinc-950/60 bg-gradient-to-r from-zinc-950/80 to-transparent mix-blend-multiply" />
        </div>
        
        <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between">
          <div className="text-[#B59C73] font-semibold tracking-widest uppercase text-sm">
            ComfortLine
          </div>
          
          <div className="space-y-6 max-w-xl">
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl leading-tight">
              Arrive <br/>
              <span className="italic text-[#B59C73]">beautifully.</span>
            </h1>
            <p className="text-lg text-zinc-300 font-light max-w-md">
              Premium transfers tailored to your exact schedule. Experience the city from the quiet comfort of our executive fleet.
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-zinc-400">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-950 flex items-center justify-center text-xs"> JD </div>
              <div className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-zinc-950 flex items-center justify-center text-xs"> AS </div>
              <div className="w-8 h-8 rounded-full bg-[#B59C73] border-2 border-zinc-950 flex items-center justify-center text-zinc-950 text-xs font-semibold"> +2k </div>
            </div>
            <p>Trusted by executives worldwide.</p>
          </div>
        </div>
      </div>

      {/* Right Panel - Concierge Chat */}
      <div className="w-full md:w-[40%] bg-zinc-950 flex flex-col justify-center p-8 md:p-16 border-l border-white/5">
        <div className="max-w-md w-full mx-auto space-y-12">
          
          {/* Progress Dots */}
          <div className="flex gap-2 mb-12">
            {[1, 2, 3].map(i => (
              <div 
                key={i} 
                className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${
                  i === step ? 'bg-[#B59C73]' : 
                  i < step ? 'bg-[#B59C73]/40' : 'bg-zinc-800'
                }`}
              />
            ))}
          </div>

          <div className="min-h-[300px]">
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h2 className="text-3xl font-['Playfair_Display'] mb-8">Where are you departing from?</h2>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 h-5 w-5" />
                  <Input 
                    value={formData.from}
                    onChange={(e) => setFormData({...formData, from: e.target.value})}
                    placeholder="Enter pickup address or airport..." 
                    className="pl-12 py-6 bg-zinc-900/50 border-white/10 text-lg focus-visible:ring-[#B59C73] placeholder:text-zinc-600 rounded-xl"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h2 className="text-3xl font-['Playfair_Display'] mb-8">Where to?</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zinc-500 mb-6">
                    <div className="w-2 h-2 rounded-full bg-[#B59C73]" />
                    <span className="text-sm">From: {formData.from || "Selected location"}</span>
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 h-5 w-5" />
                    <Input 
                      value={formData.to}
                      onChange={(e) => setFormData({...formData, to: e.target.value})}
                      placeholder="Enter destination..." 
                      className="pl-12 py-6 bg-zinc-900/50 border-white/10 text-lg focus-visible:ring-[#B59C73] placeholder:text-zinc-600 rounded-xl"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h2 className="text-3xl font-['Playfair_Display'] mb-8">When shall we have the car ready?</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-zinc-400">Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 h-4 w-4" />
                        <Input 
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          className="pl-12 py-6 bg-zinc-900/50 border-white/10 focus-visible:ring-[#B59C73] rounded-xl [color-scheme:dark]"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-zinc-400">Time</Label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 h-4 w-4" />
                        <Input 
                          type="time"
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                          className="pl-12 py-6 bg-zinc-900/50 border-white/10 focus-visible:ring-[#B59C73] rounded-xl [color-scheme:dark]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-8 animate-in fade-in zoom-in-95 duration-700 text-center py-8">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#B59C73]/10 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-[#B59C73]" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-['Playfair_Display']">Your driver is confirmed.</h2>
                  <p className="text-zinc-400">We will send a detailed itinerary to your email shortly.</p>
                </div>
              </div>
            )}
          </div>

          {step < 4 && (
            <div className="pt-8 flex items-center justify-between border-t border-white/5">
              <button 
                onClick={() => setStep(Math.max(1, step - 1))}
                className={`text-sm text-zinc-500 hover:text-zinc-300 transition-colors ${step === 1 ? 'opacity-0 pointer-events-none' : ''}`}
              >
                &larr; Back
              </button>
              
              <Button 
                onClick={nextStep}
                className="bg-[#B59C73] hover:bg-[#a38a60] text-black px-8 py-6 rounded-full text-base font-medium transition-all hover:scale-105"
              >
                {step === 3 ? 'Confirm Booking' : 'Next Step'} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
