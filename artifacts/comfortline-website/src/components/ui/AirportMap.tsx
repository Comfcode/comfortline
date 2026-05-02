import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

interface AirportMapProps {
  lat: number;
  lng: number;
  label: string;
  googleMapsUrl: string;
}

export function AirportMap({ lat, lng, label, googleMapsUrl }: AirportMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    let map: unknown;
    let marker: unknown;

    import("leaflet").then((L) => {
      if (!containerRef.current || mapRef.current) return;

      const leaflet = L.default ?? L;

      const m = leaflet.map(containerRef.current!, {
        center: [lat, lng],
        zoom: 14,
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: false,
      });

      leaflet.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        { subdomains: "abcd", maxZoom: 19 }
      ).addTo(m);

      leaflet.control.zoom({ position: "bottomright" }).addTo(m);

      const goldIcon = leaflet.divIcon({
        className: "",
        html: `<div style="
          width: 36px; height: 36px;
          background: #B59C73;
          border: 3px solid #fff;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 4px 16px rgba(181,156,115,0.5);
        "></div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -38],
      });

      const mk = leaflet.marker([lat, lng], { icon: goldIcon }).addTo(m);
      mk.bindPopup(`<span style="font-weight:600;color:#141414">${label}</span>`, {
        closeButton: false,
      });

      map = m;
      marker = mk;
      mapRef.current = m;
    });

    return () => {
      if (map && typeof (map as { remove: () => void }).remove === "function") {
        (map as { remove: () => void }).remove();
      }
      mapRef.current = null;
    };
  }, [lat, lng, label]);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-border" style={{ height: 400 }}>
      <div ref={containerRef} className="w-full h-full" />

      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 right-3 z-[500] flex items-center gap-1.5 px-3 py-2 rounded-lg bg-background/90 backdrop-blur-sm border border-border/80 text-xs font-semibold text-foreground hover:text-primary hover:border-primary/40 transition-colors shadow-lg"
      >
        <ExternalLink className="h-3 w-3" />
        Google Maps
      </a>
    </div>
  );
}
