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
