import { useEffect, useRef } from "react";
import { Instagram, ExternalLink } from "lucide-react";
import { useLang } from "@/context/language-context";
import { instagramPostUrls } from "@/data/instagramPosts";

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

const EMBED_SCRIPT_SRC = "https://www.instagram.com/embed.js";

function ensureEmbedScript(): Promise<void> {
  return new Promise((resolve) => {
    if (window.instgrm?.Embeds) {
      resolve();
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${EMBED_SCRIPT_SRC}"]`,
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      return;
    }
    const s = document.createElement("script");
    s.src = EMBED_SCRIPT_SRC;
    s.async = true;
    s.onload = () => resolve();
    document.body.appendChild(s);
  });
}

export function InstagramFeed() {
  const { t } = useLang();
  const i = t.instagram;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (instagramPostUrls.length === 0) return;
    let cancelled = false;
    ensureEmbedScript().then(() => {
      if (cancelled) return;
      window.instgrm?.Embeds.process();
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (instagramPostUrls.length === 0) return null;

  return (
    <section
      id="instagram"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 flex items-center justify-center gap-2">
            <Instagram className="h-4 w-4" />
            {i.label}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {i.heading}
          </h3>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {i.subheading}
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
        >
          {instagramPostUrls.map((url) => (
            <blockquote
              key={url}
              className="instagram-media w-full max-w-[400px]"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "12px",
                boxShadow:
                  "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: 0,
                padding: 0,
                width: "100%",
              }}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={i.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
          >
            <Instagram className="h-4 w-4" />
            {i.cta}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
