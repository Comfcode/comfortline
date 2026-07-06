import { SiGoogle, SiTripadvisor } from "react-icons/si";
import { useLang } from "@/context/language-context";
import { gtagEvent } from "@/lib/gtag";

const GOOGLE_REVIEW_URL = "https://maps.app.goo.gl/oBgzb3Z5maMfhbwc7";
const TRIPADVISOR_REVIEW_URL = "https://www.tripadvisor.com/UserReviewEdit-d34505679?m=68676";

interface ReviewLinksProps {
  variant?: "buttons" | "icons";
  className?: string;
}

export function ReviewLinks({ variant = "buttons", className = "" }: ReviewLinksProps) {
  const { t } = useLang();
  const r = t.reviewLinks;

  const links = [
    {
      key: "google",
      icon: SiGoogle,
      href: GOOGLE_REVIEW_URL,
      label: r.google,
      cls: "hover:bg-[#4285F4] hover:text-white",
    },
    {
      key: "tripadvisor",
      icon: SiTripadvisor,
      href: TRIPADVISOR_REVIEW_URL,
      label: r.tripadvisor,
      cls: "hover:bg-[#34E0A1] hover:text-black",
    },
  ];

  if (variant === "icons") {
    return (
      <div className={`flex gap-3 ${className}`}>
        {links.map(({ key, icon: Icon, href, label, cls }) => (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            onClick={() => gtagEvent("contact", { event_category: "review", event_label: label })}
            className={`w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-foreground transition-colors ${cls}`}
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.map(({ key, icon: Icon, href, label, cls }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => gtagEvent("contact", { event_category: "review", event_label: label })}
          className={`inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3.5 py-2 text-xs font-medium text-foreground transition-colors ${cls}`}
        >
          <Icon className="h-4 w-4" />
          {label}
        </a>
      ))}
    </div>
  );
}
