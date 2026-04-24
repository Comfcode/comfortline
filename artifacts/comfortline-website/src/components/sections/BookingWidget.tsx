import { useState, useRef, useEffect } from "react";
import { ArrowLeftRight, CalendarDays, ChevronDown, X, Briefcase } from "lucide-react";
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

function Counter({
  label, note, value, onChange, min = 0, max = 8,
}: {
  label: string; note: string; value: number;
  onChange: (v: number) => void; min?: number; max?: number;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
      <div>
        <div className="text-sm font-semibold text-white">{label}</div>
        {note && <div className="text-xs text-white/50 mt-0.5">{note}</div>}
      </div>
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min}
          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors disabled:opacity-25 disabled:cursor-not-allowed text-base leading-none">
          −
        </button>
        <span className="w-5 text-center text-sm font-bold text-white">{value}</span>
        <button type="button" onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max}
          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-primary hover:text-primary transition-colors disabled:opacity-25 disabled:cursor-not-allowed text-base leading-none">
          +
        </button>
      </div>
    </div>
  );
}

function FloatField({
  label, value, onChange, type = "text", readOnly = false, icon, onClick, min,
}: {
  label: string; value: string; onChange?: (v: string) => void;
  type?: string; readOnly?: boolean; icon?: React.ReactNode;
  onClick?: () => void; min?: string;
}) {
  const filled = value.length > 0;
  return (
    <div className="relative w-full h-full flex items-center" onClick={onClick}>
      <input
        type={type}
        value={value}
        onChange={e => onChange?.(e.target.value)}
        readOnly={readOnly}
        min={min}
        placeholder=" "
        className={`
          peer w-full h-full bg-transparent outline-none border-0
          text-white text-sm font-medium pt-5 pb-1 px-0
          placeholder-transparent
          ${readOnly ? "cursor-pointer" : ""}
          [color-scheme:dark]
        `}
      />
      <label className={`
        absolute left-0 transition-all duration-150 pointer-events-none select-none
        ${filled || "peer-focus:top-1 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:text-primary peer-focus:uppercase peer-focus:tracking-wider"}
        ${filled ? "top-1 text-[10px] font-semibold text-primary uppercase tracking-wider" : "top-1/2 -translate-y-1/2 text-sm text-white/40"}
      `}>
        {label}
      </label>
      {icon && (
        <div className="shrink-0 text-white/30 ml-2">{icon}</div>
      )}
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
  const dateRef = useRef<HTMLInputElement>(null);

  const classOptions: { key: VehicleClass; label: string }[] = [
    { key: "any", label: b.classAny },
    { key: "economy", label: b.classEconomy },
    { key: "comfort", label: b.classComfort },
    { key: "business", label: b.classBusiness },
    { key: "premium", label: b.classPremium },
  ];

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (paxRef.current && !paxRef.current.contains(e.target as Node)) setPaxOpen(false);
    }
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, []);

  const swap = () => { const t = from; setFrom(to); setTo(t); };

  const totalPax = pax.adults + pax.children + pax.babies;
  const classLabel = classOptions.find(c => c.key === pax.vehicleClass)?.label ?? b.classAny;
  const paxValue = totalPax > 0
    ? `${totalPax} ${totalPax === 1 ? b.adults.toLowerCase() : b.adults.toLowerCase()}${pax.vehicleClass !== "any" ? ` · ${classLabel}` : ""}`
    : "";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast({ title: b.toastTitle, description: b.toastDesc });
  }

  const sep = <div className="shrink-0 w-px h-10 bg-white/10" />;

  return (
    <form onSubmit={handleSubmit} id="booking">
      <div className="flex flex-col md:flex-row items-stretch bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl overflow-visible shadow-2xl">

        {/* FROM */}
        <div className="flex-1 flex items-center gap-3 px-5 py-4 min-w-0">
          <FloatField label={b.from} value={from} onChange={setFrom} />
          {/* Swap button sits between From and To, centered */}
          <button
            type="button"
            onClick={swap}
            aria-label="Swap"
            className="shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-primary hover:text-primary transition-colors"
          >
            <ArrowLeftRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {sep}

        {/* TO */}
        <div className="flex-1 flex items-center px-5 py-4 min-w-0">
          <FloatField label={b.to} value={to} onChange={setTo} />
        </div>

        {sep}

        {/* DATE */}
        <div className="flex-1 flex items-center gap-2 px-5 py-4 min-w-0">
          <div className="flex-1 relative">
            <input
              ref={dateRef}
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              placeholder=" "
              className="peer w-full bg-transparent outline-none border-0 text-white text-sm font-medium pt-5 pb-1 px-0 placeholder-transparent [color-scheme:dark]"
            />
            <label className={`
              absolute left-0 transition-all duration-150 pointer-events-none select-none
              ${date ? "top-1 text-[10px] font-semibold text-primary uppercase tracking-wider" : "top-1/2 -translate-y-1/2 text-sm text-white/40 peer-focus:top-1 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:text-primary peer-focus:uppercase peer-focus:tracking-wider"}
            `}>
              {b.date}
            </label>
          </div>
          <CalendarDays className="h-4 w-4 text-white/30 shrink-0" />
        </div>

        {sep}

        {/* PASSENGERS */}
        <div className="flex-1 relative min-w-0" ref={paxRef}>
          <button
            type="button"
            onClick={() => setPaxOpen(v => !v)}
            className="w-full h-full flex items-center gap-2 px-5 py-4 text-left"
          >
            <div className="flex-1 relative min-w-0">
              <span className={`
                block transition-all duration-150
                ${paxValue ? "text-[10px] font-semibold text-primary uppercase tracking-wider mb-0.5" : ""}
              `}>
                {paxValue ? b.passengersClass : ""}
              </span>
              <span className={`block text-sm font-medium truncate ${paxValue ? "text-white" : "text-white/40"}`}>
                {paxValue || b.passengersClass}
              </span>
            </div>
            <ChevronDown className={`h-4 w-4 text-white/30 shrink-0 transition-transform ${paxOpen ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {paxOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-0 right-0 md:left-auto md:right-0 md:min-w-[300px] mt-2 bg-[#1a1a2e] border border-white/10 rounded-xl shadow-2xl z-50 p-4"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-white/50 uppercase tracking-wider">{b.passengersClass}</span>
                  <button type="button" onClick={() => setPaxOpen(false)} className="text-white/30 hover:text-white transition-colors">
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

                <div className="mt-3 pt-3 border-t border-white/10">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white/50 uppercase tracking-wider mb-2.5">
                    <Briefcase className="h-3.5 w-3.5" />
                    {b.vehicleClass}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {classOptions.map(opt => (
                      <button key={opt.key} type="button"
                        onClick={() => setPax(p => ({ ...p, vehicleClass: opt.key }))}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                          pax.vehicleClass === opt.key
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-white/15 text-white/60 hover:border-primary/60 hover:text-white"
                        }`}>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button type="button" onClick={() => setPaxOpen(false)}
                  className="mt-4 w-full py-2 rounded-lg bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition-opacity">
                  {b.apply}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SUBMIT */}
        <div className="px-3 py-3 shrink-0 flex items-center">
          <button type="submit"
            className="w-full md:w-auto px-7 py-4 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:opacity-90 active:scale-95 transition-all whitespace-nowrap shadow-lg shadow-primary/30">
            {b.cta}
          </button>
        </div>
      </div>
    </form>
  );
}
