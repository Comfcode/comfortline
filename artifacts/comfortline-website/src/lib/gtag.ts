declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function gtagEvent(name: string, params?: Record<string, string>) {
  try {
    window.gtag?.("event", name, params);
  } catch {}
}

export function gtagPhoneConversion() {
  try {
    window.gtag?.("event", "conversion", {
      send_to: "AW-10822487386/9cb4CP69prkcENqayKgo",
      value: 1.0,
      currency: "USD",
    });
  } catch {}
}
