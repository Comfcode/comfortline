import { useState, useEffect } from "react";
import { BookingModal } from "./BookingModal";

export function GlobalBookingModal() {
  const [config, setConfig] = useState<{
    open: boolean;
    prefilledFrom?: string;
    prefilledTo?: string;
    routeName?: string;
    planName?: string;
    planPrice?: string;
  }>({ open: false });

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as {
        prefilledFrom?: string;
        prefilledTo?: string;
        routeName?: string;
        planName?: string;
        planPrice?: string;
      } | undefined;
      setConfig({
        open: true,
        prefilledFrom: detail?.prefilledFrom,
        prefilledTo: detail?.prefilledTo,
        routeName: detail?.routeName,
        planName: detail?.planName,
        planPrice: detail?.planPrice,
      });
    };
    window.addEventListener("open-booking-modal", handler);
    return () => window.removeEventListener("open-booking-modal", handler);
  }, []);

  return (
    <BookingModal
      open={config.open}
      onClose={() => setConfig(c => ({ ...c, open: false }))}
      prefilledFrom={config.prefilledFrom ?? ""}
      prefilledTo={config.prefilledTo ?? ""}
      routeName={config.routeName}
      planName={config.planName}
      planPrice={config.planPrice}
    />
  );
}
