import { useEffect, useRef, useState } from "react";
import { Gauge } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useGetBorderQueue, getGetBorderQueueQueryKey } from "@workspace/api-client-react";
import { useLang } from "@/context/language-context";
import { BorderQueueWidget } from "@/components/sections/BorderQueueWidget";

const REFETCH_INTERVAL_MS = 3 * 60 * 1000;

type Status = "unknown" | "empty" | "light" | "moderate" | "heavy";

function overallStatus(checkpoints: { total: number }[]): Status {
  if (checkpoints.length === 0) return "unknown";
  const maxTotal = Math.max(...checkpoints.map((c) => c.total));
  if (maxTotal === 0) return "empty";
  if (maxTotal <= 5) return "light";
  if (maxTotal <= 20) return "moderate";
  return "heavy";
}

const DOT_COLOR: Record<Status, string> = {
  unknown: "bg-muted-foreground/40",
  empty: "bg-emerald-400",
  light: "bg-emerald-400",
  moderate: "bg-amber-400",
  heavy: "bg-red-400",
};

export function NavBorderQueueBadge({ variant }: { variant: "desktop" | "mobile" }) {
  const { lang } = useLang();
  const isRu = lang === "ru";
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { data } = useGetBorderQueue({
    query: {
      queryKey: getGetBorderQueueQueryKey(),
      refetchInterval: REFETCH_INTERVAL_MS,
      staleTime: 60_000,
    },
  });

  const checkpoints = data?.checkpoints ?? [];
  const status = overallStatus(checkpoints);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const label = isRu ? "КПП" : "Border";
  const ariaLabel = isRu ? "Живая очередь на границе" : "Live border queue";

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={ariaLabel}
        className={
          variant === "desktop"
            ? "flex items-center gap-1.5 text-[11px] tracking-[0.08em] uppercase font-medium text-foreground/60 hover:text-primary transition-colors whitespace-nowrap shrink-0"
            : "relative flex items-center justify-center p-1 text-foreground/70 hover:text-primary transition-colors shrink-0"
        }
      >
        <span className="relative shrink-0">
          <Gauge className={variant === "desktop" ? "h-3.5 w-3.5 text-primary" : "h-6 w-6 text-primary"} />
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
            <span className={`absolute inline-flex h-full w-full rounded-full ${DOT_COLOR[status]} opacity-75 animate-ping`} />
            <span className={`relative inline-flex h-2 w-2 rounded-full ${DOT_COLOR[status]} ring-1 ring-background`} />
          </span>
        </span>
        {variant === "desktop" && <span>{label}</span>}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="border-queue-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-40 bg-background/40 backdrop-blur-[1px] lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="border-queue-panel"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className={
                variant === "desktop"
                  ? "absolute right-0 top-full mt-3 w-[min(92vw,420px)] z-50 max-h-[75vh] overflow-y-auto rounded-2xl shadow-2xl"
                  : "fixed left-1/2 -translate-x-1/2 top-16 w-[min(92vw,420px)] z-50 max-h-[75vh] overflow-y-auto rounded-2xl shadow-2xl"
              }
            >
              <BorderQueueWidget className="m-0" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
