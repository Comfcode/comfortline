import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
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
  from: string;
  to: string;
  date: string;
  pax: PassengerState;
}

function plural(n: number, one: string, few: string, many: string) {
  if (n === 1) return `${n} ${one}`;
  if (n >= 2 && n <= 4) return `${n} ${few}`;
  return `${n} ${many}`;
}

export function BookingModal({ open, onClose, from, to, date, pax }: BookingModalProps) {
  const { t } = useLang();
  const { toast } = useToast();
  const m = t.modal;
  const b = t.booking;

  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [phone,   setPhone]   = useState("");
  const [comment, setComment] = useState("");
  const [agreed,  setAgreed]  = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const classMap: Record<VehicleClass, string> = {
    any:      b.classAny,
    comfort:  b.classComfort,
    business: b.classBusiness,
    premium:  b.classPremium,
  };
  const classLabel = classMap[pax.vehicleClass];

  const totalPax = pax.adults + pax.children + pax.babies;

  const formattedDate = date
    ? new Intl.DateTimeFormat(t.lang === "ru" ? "ru-RU" : "en-GB", {
        day: "numeric", month: "long", year: "numeric",
      }).format(new Date(date))
    : "—";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed) return;
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
          name,
          email,
          phone,
          comment,
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

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl pointer-events-auto max-h-[90dvh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">{m.title}</h2>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="px-6 py-5 space-y-5">
                {/* Route summary */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border-b border-gray-200">
                    <span className="font-bold text-gray-900">{from || "—"}</span>
                    <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                    <span className="font-bold text-gray-900">{to || "—"}</span>
                    {date && (
                      <span className="text-gray-500 text-sm ml-1">, {formattedDate}</span>
                    )}
                  </div>

                  <div className="grid grid-cols-3 divide-x divide-gray-200">
                    <div className="px-4 py-3 text-center">
                      <div className="text-sm font-bold text-gray-900">
                        {plural(totalPax, m.passenger, m.passengerFew, m.passengerMany)}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {plural(pax.adults, m.adult, m.adultFew, m.adultMany)}
                      </div>
                    </div>
                    <div className="px-4 py-3 text-center">
                      <div className="text-sm font-bold text-gray-900">{classLabel}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{m.classLabel}</div>
                    </div>
                    <div className="px-4 py-3 text-center">
                      <div className="text-sm font-bold text-gray-900">
                        {plural(pax.suitcases, m.suitcase, m.suitcaseFew, m.suitcaseMany)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact details */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{m.contactHeading}</h3>
                    <p className="text-sm text-gray-500">{m.contactSubtext}</p>
                  </div>

                  <input
                    type="text"
                    placeholder={m.name}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    className={inputCls}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="email"
                      placeholder={m.email}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className={inputCls}
                    />
                    <input
                      type="tel"
                      placeholder={m.phone}
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      required
                      className={inputCls}
                    />
                  </div>

                  <textarea
                    placeholder={m.comment}
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    rows={3}
                    className={`${inputCls} resize-none`}
                  />

                  {/* Privacy checkbox */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5 shrink-0">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={e => setAgreed(e.target.checked)}
                        className="sr-only"
                        required
                      />
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
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={submitting || !agreed}
                    className="w-full py-4 bg-primary text-primary-foreground font-bold text-sm rounded-xl hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? "..." : m.submit}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
