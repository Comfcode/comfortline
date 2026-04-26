import { useState, useEffect } from "react";
import { X, ArrowRight, ChevronLeft, Check, ChevronDown } from "lucide-react";
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

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  startStep?: 1 | 2;
  initialRouteIndex?: number;
  prefilledDate?: string;
  prefilledPax?: PassengerState;
  prefilledRouteName?: string;
  prefilledFrom?: string;
  prefilledTo?: string;
}

function plural(n: number, one: string, few: string, many: string) {
  if (n === 1) return `${n} ${one}`;
  if (n >= 2 && n <= 4) return `${n} ${few}`;
  return `${n} ${many}`;
}

function SmallCounter({ label, value, onChange, min = 0, max = 8 }: {
  label: string; value: number; onChange: (v: number) => void; min?: number; max?: number;
}) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-700">{label}</span>
      <div className="flex items-center gap-2.5">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min}
          className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-sm leading-none">
          −
        </button>
        <span className="w-4 text-center text-sm font-bold text-gray-800">{value}</span>
        <button type="button" onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max}
          className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-sm leading-none">
          +
        </button>
      </div>
    </div>
  );
}

export function BookingModal({
  open, onClose,
  startStep = 1,
  initialRouteIndex,
  prefilledDate = "",
  prefilledPax,
  prefilledRouteName,
  prefilledFrom = "",
  prefilledTo = "",
}: BookingModalProps) {
  const { t } = useLang();
  const { toast } = useToast();
  const m = t.modal;
  const b = t.booking;

  const defaultPax: PassengerState = { adults: 1, children: 0, babies: 0, pets: 0, suitcases: 1, vehicleClass: "any" };

  const [step, setStep] = useState<1 | 2>(startStep);
  const [activeRoute, setActiveRoute] = useState(initialRouteIndex ?? 0);
  const [selectedRouteName, setSelectedRouteName] = useState<string | null>(prefilledRouteName ?? null);
  const [selectedPlanName, setSelectedPlanName] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  const [date, setDate] = useState(prefilledDate);
  const [pax, setPax] = useState<PassengerState>(prefilledPax ?? defaultPax);
  const [paxOpen, setPaxOpen] = useState(false);

  const [name,      setName]      = useState("");
  const [email,     setEmail]     = useState("");
  const [phone,     setPhone]     = useState("");
  const [comment,   setComment]   = useState("");
  const [agreed,    setAgreed]    = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!open) return;
    setStep(startStep);
    setActiveRoute(initialRouteIndex ?? 0);
    setSelectedRouteName(prefilledRouteName ?? null);
    setSelectedPlanName(null);
    setSelectedPrice(null);
    setDate(prefilledDate);
    setPax(prefilledPax ?? defaultPax);
    setPaxOpen(false);
    setName(""); setEmail(""); setPhone(""); setComment("");
    setAgreed(false);
  }, [open]);

  const classOptions: { key: VehicleClass; label: string }[] = [
    { key: "any",      label: b.classAny     },
    { key: "comfort",  label: b.classComfort  },
    { key: "business", label: b.classBusiness },
    { key: "premium",  label: b.classPremium  },
  ];

  const classLabel = classOptions.find(c => c.key === pax.vehicleClass)?.label ?? b.classAny;
  const totalPax   = pax.adults + pax.children + pax.babies;
  const paxSummary = plural(totalPax, m.passenger, m.passengerFew, m.passengerMany)
    + (pax.vehicleClass !== "any" ? ` · ${classLabel}` : "");

  const routes = t.pricing.routes;

  function selectPlan(plan: { name: string; price: string }) {
    setSelectedRouteName(routes[activeRoute].name);
    setSelectedPlanName(plan.name);
    setSelectedPrice(plan.price);
    setStep(2);
  }

  const formattedDate = date
    ? new Intl.DateTimeFormat(t.lang === "ru" ? "ru-RU" : "en-GB", {
        day: "numeric", month: "long", year: "numeric",
      }).format(new Date(date))
    : null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed) return;
    setSubmitting(true);
    try {
      const from = prefilledRouteName ? prefilledFrom : (selectedRouteName ?? prefilledFrom);
      const to   = prefilledRouteName ? prefilledTo   : "";
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: selectedRouteName ?? from,
          to: selectedPlanName ? selectedPlanName : to,
          date,
          adults: pax.adults, children: pax.children, babies: pax.babies,
          pets: pax.pets, suitcases: pax.suitcases, vehicleClass: pax.vehicleClass,
          lang: t.lang, name, email, phone, comment,
        }),
      });
      if (res.ok) {
        toast({ title: b.toastTitle, description: b.toastDesc });
        onClose();
      } else {
        toast({ title: "Error", description: "Failed to send request. Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Failed to send request. Please try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  }

  const inputCls = "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition bg-white";

  const isWide = routes[activeRoute].plans.length >= 4;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className={`relative w-full bg-white rounded-2xl shadow-2xl pointer-events-auto max-h-[90dvh] overflow-y-auto ${
                step === 1 ? "max-w-2xl" : "max-w-lg"
              }`}
              onClick={e => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">

                {/* ── STEP 1: Route selection ── */}
                {step === 1 && (
                  <motion.div key="step1"
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
                      <h2 className="text-xl font-bold text-gray-900">{m.step1Title}</h2>
                      <button type="button" onClick={onClose}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors">
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="px-6 py-5">
                      {/* Route tabs */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {routes.map((r, i) => (
                          <button key={i} type="button" onClick={() => setActiveRoute(i)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                              activeRoute === i
                                ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                                : "bg-gray-100 text-gray-600 hover:text-gray-900"
                            }`}>
                            {r.name}
                          </button>
                        ))}
                      </div>

                      {/* Plan cards */}
                      <AnimatePresence mode="wait">
                        <motion.div key={activeRoute}
                          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          className={`grid gap-4 ${
                            isWide
                              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                              : "grid-cols-1 sm:grid-cols-3"
                          }`}
                        >
                          {routes[activeRoute].plans.map((plan, i) => (
                            <div key={i}
                              className={`relative border rounded-xl p-4 flex flex-col gap-3 ${
                                plan.popular ? "border-primary shadow-md shadow-primary/10" : "border-gray-200"
                              }`}
                            >
                              {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap">
                                  {t.pricing.popular}
                                </div>
                              )}
                              <div>
                                <p className="text-xs text-gray-500 mb-1">{plan.name}</p>
                                <p className="text-2xl font-bold text-gray-900">{plan.price}</p>
                              </div>
                              <ul className="space-y-1.5 flex-1">
                                {plan.features.map((f, j) => (
                                  <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                                    <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                                    <span>{f}</span>
                                  </li>
                                ))}
                              </ul>
                              <button type="button"
                                onClick={() => selectPlan(plan)}
                                className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all ${
                                  plan.popular
                                    ? "bg-primary text-primary-foreground hover:opacity-90 shadow-sm shadow-primary/20"
                                    : "border border-gray-200 text-gray-700 hover:border-primary hover:text-primary"
                                }`}>
                                {m.selectPlan}
                              </button>
                            </div>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 2: Booking form ── */}
                {step === 2 && (
                  <motion.div key="step2"
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        {startStep === 1 && (
                          <button type="button" onClick={() => setStep(1)}
                            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors mr-1">
                            <ChevronLeft className="h-5 w-5" />
                          </button>
                        )}
                        <h2 className="text-xl font-bold text-gray-900">{m.step2Title}</h2>
                      </div>
                      <button type="button" onClick={onClose}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors">
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="px-6 py-5 space-y-5">

                      {/* Selected route + plan badge */}
                      {selectedRouteName && (
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-sm font-semibold px-3 py-1.5 rounded-full">
                            <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                            {selectedRouteName}
                          </span>
                          {selectedPlanName && (
                            <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-full">
                              {m.planLabel}: {selectedPlanName}
                            </span>
                          )}
                          {selectedPrice && (
                            <span className="inline-flex items-center bg-gray-50 border border-gray-200 text-gray-600 text-sm font-medium px-3 py-1.5 rounded-full">
                              {selectedPrice}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Date */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                          {b.date}
                        </label>
                        <input type="date" value={date} onChange={e => setDate(e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                          className={`${inputCls} [color-scheme:light]`}
                        />
                        {formattedDate && (
                          <p className="text-xs text-gray-400 mt-1">{formattedDate}</p>
                        )}
                      </div>

                      {/* Passengers (compact expandable) */}
                      <div className="relative">
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                          {b.passengersClass}
                        </label>
                        <button type="button" onClick={() => setPaxOpen(v => !v)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 hover:border-primary/40 transition-colors bg-white">
                          <span>{paxSummary}</span>
                          <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${paxOpen ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {paxOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 6, scale: 0.97 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 6, scale: 0.97 }}
                              transition={{ duration: 0.15 }}
                              className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-20 p-4"
                            >
                              <SmallCounter label={b.adults}   value={pax.adults}   min={1} max={8} onChange={v => setPax(p => ({ ...p, adults: v }))} />
                              <SmallCounter label={b.children} value={pax.children} max={5}         onChange={v => setPax(p => ({ ...p, children: v }))} />
                              <SmallCounter label={b.babies}   value={pax.babies}   max={4}         onChange={v => setPax(p => ({ ...p, babies: v }))} />
                              <SmallCounter label={b.pets}     value={pax.pets}     max={2}         onChange={v => setPax(p => ({ ...p, pets: v }))} />
                              <div className="my-2 border-t border-gray-100" />
                              <SmallCounter label={b.suitcases} value={pax.suitcases} max={10}     onChange={v => setPax(p => ({ ...p, suitcases: v }))} />
                              <div className="mt-3 pt-3 border-t border-gray-100">
                                <p className="text-xs font-semibold text-gray-600 mb-2">{b.vehicleClass}</p>
                                <div className="grid grid-cols-2 gap-1.5">
                                  {classOptions.map(opt => (
                                    <button key={opt.key} type="button"
                                      onClick={() => setPax(p => ({ ...p, vehicleClass: opt.key }))}
                                      className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-colors ${
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
                                className="mt-3 w-full py-2 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-opacity">
                                {b.apply}
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Contact form */}
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <h3 className="text-base font-bold text-gray-900 mb-1">{m.contactHeading}</h3>
                          <p className="text-sm text-gray-500">{m.contactSubtext}</p>
                        </div>

                        <input type="text" placeholder={m.name} value={name}
                          onChange={e => setName(e.target.value)} required className={inputCls} />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="email" placeholder={m.email} value={email}
                            onChange={e => setEmail(e.target.value)} className={inputCls} />
                          <input type="tel" placeholder={m.phone} value={phone}
                            onChange={e => setPhone(e.target.value)} required className={inputCls} />
                        </div>

                        <textarea placeholder={m.comment} value={comment}
                          onChange={e => setComment(e.target.value)} rows={2}
                          className={`${inputCls} resize-none`} />

                        <label className="flex items-start gap-3 cursor-pointer group">
                          <div className="relative mt-0.5 shrink-0">
                            <input type="checkbox" checked={agreed}
                              onChange={e => setAgreed(e.target.checked)}
                              className="sr-only" required />
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                              agreed ? "bg-primary border-primary" : "border-gray-300 group-hover:border-primary/50"
                            }`}>
                              {agreed && (
                                <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              )}
                            </div>
                          </div>
                          <span className="text-sm text-gray-600 leading-snug">
                            {m.privacyText}{" "}
                            <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:opacity-80">{m.privacyLink}</a>
                            {" "}{m.privacyAnd}{" "}
                            <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:opacity-80">{m.termsLink}</a>
                          </span>
                        </label>

                        <button type="submit" disabled={submitting || !agreed}
                          className="w-full py-4 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed">
                          {submitting ? "..." : m.submit}
                        </button>
                      </form>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
