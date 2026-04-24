import { useState, useRef, useEffect } from "react";
import { ArrowLeftRight, ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/language-context";
import { useToast } from "@/hooks/use-toast";

type VehicleClass = "any" | "comfort" | "business" | "premium";

interface PassengerState {
  adults: number;
  children: number;
  babies: number;
  pets: number;
  suitcases: number;
  vehicleClass: VehicleClass;
}

function paxLabel(n: number, one: string, few: string, many: string) {
  if (n === 1) return `${n} ${one}`;
  if (n >= 2 && n <= 4) return `${n} ${few}`;
  return `${n} ${many}`;
}

function Counter({
  label, note, value, onChange, min = 0, max = 8,
}: {
  label: string; note: string; value: number;
  onChange: (v: number) => void; min?: number; max?: number;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <div>
        <div className="text-sm font-semibold text-gray-800">{label}</div>
        {note && <div className="text-xs text-gray-400 mt-0.5">{note}</div>}
      </div>
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-base leading-none">
          −
        </button>
        <span className="w-5 text-center text-sm font-bold text-gray-800">{value}</span>
        <button type="button" onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-base leading-none">
          +
        </button>
      </div>
    </div>
  );
}

/* Shared field wrapper — gives every field the same floating-label height */
function FieldShell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative w-full h-[52px] ${className}`}>
      {children}
    </div>
  );
}

const floatingLabel = "absolute left-0 top-1 text-[10px] font-semibold text-primary uppercase tracking-wider pointer-events-none select-none";
const restingLabel  = "absolute left-0 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none select-none transition-all duration-150";
const inputBase     = "absolute inset-0 pt-5 pb-1 px-0 w-full bg-transparent outline-none border-0 text-sm font-medium text-gray-900 placeholder-transparent";

export function BookingWidget() {
  const { t } = useLang();
  const { toast } = useToast();
  const b = t.booking;

  const [from, setFrom] = useState("");
  const [to,   setTo]   = useState("");
  const [date, setDate] = useState("");
  const [paxOpen, setPaxOpen] = useState(false);
  const [pax, setPax] = useState<PassengerState>({
    adults: 1, children: 0, babies: 0, pets: 0, suitcases: 1, vehicleClass: "any",
  });
  const paxRef = useRef<HTMLDivElement>(null);

  const classOptions: { key: VehicleClass; label: string }[] = [
    { key: "any",      label: b.classAny     },
    { key: "comfort",  label: b.classComfort  },
    { key: "business", label: b.classBusiness },
    { key: "premium",  label: b.classPremium  },
  ];

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (paxRef.current && !paxRef.current.contains(e.target as Node)) setPaxOpen(false);
    }
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, []);

  const swap = () => { const tmp = from; setFrom(to); setTo(tmp); };

  const totalPax  = pax.adults + pax.children + pax.babies;
  const classLabel = classOptions.find(c => c.key === pax.vehicleClass)?.label ?? b.classAny;
  const paxSummary = paxLabel(totalPax, b.passengerOne, b.passengerFew, b.passengerMany)
    + (pax.vehicleClass !== "any" ? ` · ${classLabel}` : "");

  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from, to, date,
          adults: pax.adults,
          children: pax.children,
          babies: pax.babies,
          pets: pax.pets,
          suitcases: pax.suitcases,
          vehicleClass: pax.vehicleClass,
          lang: t.lang,
        }),
      });
      if (res.ok) {
        toast({ title: b.toastTitle, description: b.toastDesc });
      } else {
        toast({ title: "Error", description: "Failed to send request. Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Failed to send request. Please try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  }

  const Sep = () => <div className="shrink-0 w-px h-10 bg-gray-200 self-center" />;

  return (
    <form onSubmit={handleSubmit} id="booking">
      <div className="flex flex-col md:flex-row items-stretch bg-white rounded-2xl shadow-2xl overflow-visible">

        {/* FROM */}
        <div className="flex-1 flex items-center gap-3 px-5 py-4 min-w-0">
          <FieldShell className="flex-1">
            <input type="text" value={from} onChange={e => setFrom(e.target.value)}
              placeholder=" " className={`${inputBase} peer`} />
            <label className={from ? floatingLabel : `${restingLabel} peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:text-primary peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider`}>
              {b.from}
            </label>
          </FieldShell>

          <button type="button" onClick={swap} aria-label="Swap"
            className="shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-colors">
            <ArrowLeftRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <Sep />

        {/* TO */}
        <div className="flex-1 flex items-center px-5 py-4 min-w-0">
          <FieldShell>
            <input type="text" value={to} onChange={e => setTo(e.target.value)}
              placeholder=" " className={`${inputBase} peer`} />
            <label className={to ? floatingLabel : `${restingLabel} peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:text-primary peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider`}>
              {b.to}
            </label>
          </FieldShell>
        </div>

        <Sep />

        {/* DATE */}
        <div className="flex-1 flex items-center gap-2 px-5 py-4 min-w-0">
          <FieldShell className="flex-1">
            <input type="date" value={date} onChange={e => setDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className={`${inputBase} [color-scheme:light] peer`} />
            {/* Label always floats for date since browser shows placeholder */}
            <label className={floatingLabel}>{b.date}</label>
          </FieldShell>
        </div>

        <Sep />

        {/* PASSENGERS */}
        <div className="flex-1 relative min-w-0" ref={paxRef}>
          <button type="button" onClick={() => setPaxOpen(v => !v)}
            className="w-full h-full flex items-center gap-2 px-5 py-4 text-left">
            <FieldShell className="flex-1 pointer-events-none">
              <span className={floatingLabel}>{b.passengersClass}</span>
              <span className="absolute bottom-1 left-0 text-sm font-medium text-gray-900 truncate w-full">
                {paxSummary}
              </span>
            </FieldShell>
            <ChevronDown className={`h-4 w-4 text-gray-400 shrink-0 transition-transform ${paxOpen ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {paxOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-0 right-0 md:left-auto md:right-0 md:min-w-[320px] mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 p-5"
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs text-gray-400">{b.maxPassengers}</p>
                  <button type="button" onClick={() => setPaxOpen(false)}
                    className="text-gray-300 hover:text-gray-600 transition-colors">
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <Counter label={b.adults}   note={b.adultsNote}   value={pax.adults}   min={1} max={8} onChange={v => setPax(p => ({ ...p, adults: v }))} />
                <Counter label={b.children} note={b.childrenNote} value={pax.children} max={5}         onChange={v => setPax(p => ({ ...p, children: v }))} />
                <Counter label={b.babies}   note={b.babiesNote}   value={pax.babies}   max={4}         onChange={v => setPax(p => ({ ...p, babies: v }))} />
                <Counter label={b.pets}     note={b.petsNote}     value={pax.pets}     max={2}         onChange={v => setPax(p => ({ ...p, pets: v }))} />

                <div className="my-3 border-t border-gray-100" />

                <Counter label={b.suitcases} note=""              value={pax.suitcases} max={10}       onChange={v => setPax(p => ({ ...p, suitcases: v }))} />

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-base font-semibold text-gray-800 mb-3">{b.vehicleClass}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {classOptions.map(opt => (
                      <button key={opt.key} type="button"
                        onClick={() => setPax(p => ({ ...p, vehicleClass: opt.key }))}
                        className={`px-3 py-2.5 rounded-xl text-sm font-semibold border transition-colors ${
                          pax.vehicleClass === opt.key
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-gray-200 text-gray-700 hover:border-primary/40"
                        }`}>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button type="button" onClick={() => setPaxOpen(false)}
                  className="mt-4 w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition-opacity">
                  {b.apply}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SUBMIT */}
        <div className="px-3 py-3 shrink-0 flex items-center">
          <button type="submit" disabled={submitting}
            className="w-full md:w-auto px-7 py-4 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:opacity-90 active:scale-95 transition-all whitespace-nowrap shadow-lg shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed">
            {submitting ? "..." : b.cta}
          </button>
        </div>
      </div>
    </form>
  );
}
