declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (method: string, ...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  if (window.gtag) window.gtag("event", name, params ?? {});
  if (window.clarity) window.clarity("event", name);
}
