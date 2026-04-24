import { useState, useRef, useEffect } from "react";
import { MapPin, CalendarDays, ArrowLeftRight, ChevronDown, Users, Briefcase, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/language-context";
import { useToast } from "@/hooks/use-toast";

type VehicleClass = "any" | "economy" | "comfort" | "business" | "premium";

interface PassengerState {
  adults: number;
  children: number;
  babies: number;
  suitcases: number;
  vehicleClass: VehicleClass;
}

function Counter({ label, note, value, onChange, min = 0, max = 8 }: {
  label: string; note: string; value: number;
  onChange: (v: number) => void; min?: number; max?: number;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
      <div>
        <div className="text-sm font-medium text-foreground">{label}</div>
        <div className="text-xs text-muted-foreground">{note}</div>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-lg leading-none"
        >
          −
        </button>
        <span className="w-5 text-center text-sm font-semibold text-foreground">{value}</span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-lg leading-none"
        >
          +
        </button>
      </div>
    </div>
  );
}

export function BookingWidget() {
  const { t } = useLang();
  const { toast } = useToast();
  const b = t.booking;

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [paxOpen, setPaxOpen] = useState(false);
  const [pax, setPax] = useState<PassengerState>({
    adults: 1, children: 0, babies: 0, suitcases: 1, vehicleClass: "any",
  });
  const paxRef = useRef<HTMLDivElement>(null);

  const classOptions: { key: VehicleClass; label: string }[] = [
    { key: "any", label: b.classAny },
    { key: "economy", label: b.classEconomy },
    { key: "comfort", label: b.classComfort },
    { key: "business", label: b.classBusiness },
    { key: "premium", label: b.classPremium },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (paxRef.current && !paxRef.current.contains(e.target as Node)) {
        setPaxOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const totalPax = pax.adults + pax.children + pax.babies;
  const classLabel = classOptions.find(c => c.key === pax.vehicleClass)?.label ?? b.classAny;
  const paxSummary = totalPax > 0
    ? `${totalPax} ${totalPax === 1 ? (t.booking.adults.toLowerCase()) : (t.booking.adults.toLowerCase())}${pax.vehicleClass !== "any" ? ` · ${classLabel}` : ""}`
    : b.passengersClass;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!from.trim() || !to.trim()) {
      toast({ title: "⚠️", description: t.booking.fromPlaceholder });
      return;
    }
    toast({ title: b.toastTitle, description: b.toastDesc });
  }

  return (
    <div id="booking" className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-0 bg-card border border-border rounded-2xl shadow-xl shadow-black/10 overflow-visible">

          {/* FROM */}
          <div className="flex-1 flex items-center gap-3 px-5 py-4 border-b md:border-b-0 md:border-r border-border/60 min-w-0">
            <MapPin className="h-4 w-4 text-primary shrink-0" />
            <div className="min-w-0 flex-1">
              <label className="block text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">{b.from}</label>
              <input
                type="text"
                value={from}
                onChange={e => setFrom(e.target.value)}
                placeholder={b.fromPlaceholder}
                className="w-full bg-transparent text-sm font-medium text-foreground placeholder:text-muted-foreground/60 outline-none"
              />
            </div>
          </div>

          {/* SWAP */}
          <button
            type="button"
            onClick={swap}
            className="hidden md:flex items-center justify-center w-9 h-9 -mx-4.5 z-10 shrink-0 bg-card border border-border rounded-full hover:border-primary hover:text-primary text-muted-foreground transition-colors shadow-sm"
            aria-label="Swap"
          >
            <ArrowLeftRight className="h-3.5 w-3.5" />
          </button>

          {/* TO */}
          <div className="flex-1 flex items-center gap-3 px-5 py-4 border-b md:border-b-0 md:border-r border-border/60 min-w-0">
            <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
            <div className="min-w-0 flex-1">
              <label className="block text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">{b.to}</label>
              <input
                type="text"
                value={to}
                onChange={e => setTo(e.target.value)}
                placeholder={b.toPlaceholder}
                className="w-full bg-transparent text-sm font-medium text-foreground placeholder:text-muted-foreground/60 outline-none"
              />
            </div>
          </div>

          {/* DATE */}
          <div className="flex-1 flex items-center gap-3 px-5 py-4 border-b md:border-b-0 md:border-r border-border/60 min-w-0 relative">
            <CalendarDays className="h-4 w-4 text-muted-foreground shrink-0 pointer-events-none" />
            <div className="min-w-0 flex-1">
              <label className="block text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">{b.date}</label>
              <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                placeholder={b.datePlaceholder}
                className="w-full bg-transparent text-sm font-medium text-foreground placeholder:text-muted-foreground/60 outline-none [color-scheme:dark] dark:[color-scheme:dark] light:[color-scheme:light]"
              />
            </div>
          </div>

          {/* PASSENGERS & CLASS */}
          <div className="flex-1 relative min-w-0" ref={paxRef}>
            <button
              type="button"
              onClick={() => setPaxOpen(v => !v)}
              className="w-full flex items-center gap-3 px-5 py-4 border-b md:border-b-0 md:border-r border-border/60 text-left"
            >
              <Users className="h-4 w-4 text-muted-foreground shrink-0" />
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">{b.passengersClass}</div>
                <div className="text-sm font-medium text-foreground truncate">{paxSummary}</div>
              </div>
              <ChevronDown className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform ${paxOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {paxOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 right-0 md:right-auto md:min-w-[320px] mt-2 bg-card border border-border rounded-xl shadow-2xl z-50 p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{b.passengersClass}</span>
                    <button type="button" onClick={() => setPaxOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <Counter label={b.adults} note={b.adultsNote} value={pax.adults} min={1} max={8}
                    onChange={v => setPax(p => ({ ...p, adults: v }))} />
                  <Counter label={b.children} note={b.childrenNote} value={pax.children} max={7}
                    onChange={v => setPax(p => ({ ...p, children: v }))} />
                  <Counter label={b.babies} note={b.babiesNote} value={pax.babies} max={4}
                    onChange={v => setPax(p => ({ ...p, babies: v }))} />
                  <Counter label={b.suitcases} note="" value={pax.suitcases} max={10}
                    onChange={v => setPax(p => ({ ...p, suitcases: v }))} />

                  <div className="mt-4 pt-3 border-t border-border/50">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      <Briefcase className="inline h-3.5 w-3.5 mr-1.5 -mt-0.5" />
                      {b.vehicleClass}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {classOptions.map(opt => (
                        <button
                          key={opt.key}
                          type="button"
                          onClick={() => setPax(p => ({ ...p, vehicleClass: opt.key }))}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                            pax.vehicleClass === opt.key
                              ? "bg-primary text-primary-foreground border-primary"
                              : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setPaxOpen(false)}
                    className="mt-4 w-full py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    {b.apply}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* SUBMIT */}
          <div className="px-3 py-3 shrink-0">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3.5 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap shadow-lg shadow-primary/25"
            >
              {b.cta}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
