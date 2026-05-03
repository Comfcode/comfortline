import { useEffect, useState } from "react";
import { Instagram, ExternalLink, Play, Images } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/context/language-context";

type InstagramPost = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};

type ApiResponse = {
  posts: InstagramPost[];
  configured: boolean;
};

const GRID_LIMIT = 9;

export function InstagramFeed() {
  const { t } = useLang();
  const i = t.instagram;
  const [posts, setPosts] = useState<InstagramPost[] | null>(null);

  useEffect(() => {
    const baseUrl = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
    const url = `${baseUrl}/api/instagram/posts`;
    let cancelled = false;
    fetch(url)
      .then((r) => (r.ok ? (r.json() as Promise<ApiResponse>) : null))
      .then((data) => {
        if (cancelled) return;
        if (data && Array.isArray(data.posts)) {
          setPosts(data.posts.slice(0, GRID_LIMIT));
        } else {
          setPosts([]);
        }
      })
      .catch(() => {
        if (!cancelled) setPosts([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (posts === null || posts.length === 0) return null;

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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {posts.map((p, idx) => {
            const img = p.media_type === "VIDEO" ? p.thumbnail_url : p.media_url;
            return (
              <motion.a
                key={p.id}
                href={p.permalink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.32) }}
                className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-muted"
                aria-label={p.caption?.slice(0, 100) ?? "Instagram post"}
              >
                {img ? (
                  <img
                    src={img}
                    alt={p.caption?.slice(0, 120) ?? "Instagram post"}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <Instagram className="h-10 w-10" />
                  </div>
                )}

                {(p.media_type === "VIDEO" || p.media_type === "CAROUSEL_ALBUM") && (
                  <div className="absolute top-2 right-2 bg-black/55 backdrop-blur-sm text-white rounded-full p-1.5">
                    {p.media_type === "VIDEO" ? (
                      <Play className="h-3.5 w-3.5 fill-white" />
                    ) : (
                      <Images className="h-3.5 w-3.5" />
                    )}
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 md:p-4">
                  <p className="text-white text-xs md:text-sm leading-snug line-clamp-3">
                    {p.caption?.slice(0, 160) ?? ""}
                  </p>
                </div>
              </motion.a>
            );
          })}
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
