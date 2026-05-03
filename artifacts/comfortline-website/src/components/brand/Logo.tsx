/**
 * ComfortLine Logo — 2025 Redesign
 * Inspired by LogoLounge 2025 trends:
 *   · Crossovers — ribbon arc whose tips S-curve back, implying the form crosses over itself
 *   · Sharps     — tapered blade-like endpoints, positive/negative space tension
 *   · Typemelts  — COMFORT weight 200 (ultra-thin) meets LINE weight 900 (ultra-black)
 *   · Gradient   — gold sheen from bright tip (#EDD9A8) to deep body (#8A7555)
 */

// ─── Geometry ────────────────────────────────────────────────────────────────
// Crescent "C" ribbon in an 80 × 70 viewBox.
// Outer arc: center (38,35) r=27, opening ±52°, endpoints (55,14) and (55,56)
// Inner arc: center (38,35) r=15, opening ±52°, endpoints (47,23) and (47,47)
// Tips: each junction S-curves to a Sharps blade point at (60,9) / (60,61)
// All Bézier control points computed for G1 continuity at arc junctions.
const MARK_PATH =
  "M 60 9 " +
  "C 59 10 59 17 55 14 " +          // upper tip → outer arc start (G1 smooth)
  "A 27 27 0 1 0 55 56 " +          // outer C arc, CCW screen, large
  "C 59 53 59 59 60 61 " +          // outer arc end → lower tip (G1 smooth)
  "C 59 60 51 44 47 47 " +          // lower tip → inner arc start (G1 smooth)
  "A 15 15 0 1 1 47 23 " +          // inner C arc, CW screen, large
  "C 51 26 59 10 60 9 Z";           // inner arc end → upper tip (G1 smooth)

// ─── Gradient ────────────────────────────────────────────────────────────────
// Shine axis: upper blade tip → lower-left body
const GRAD_X1 = 62, GRAD_Y1 = 7;
const GRAD_X2 = 10, GRAD_Y2 = 63;

// ─── Components ──────────────────────────────────────────────────────────────

interface MarkProps {
  size?: number;
  fillColor?: string;    // solid fill override (disables gradient)
  gradientId?: string;   // unique id to avoid SVG defs collision
}

/** Stand-alone symbol mark — use for social avatars, favicons, compact lockups */
export function LogoMark({
  size = 40,
  fillColor,
  gradientId = "clm",
}: MarkProps) {
  const useGrad = !fillColor;
  const fill = fillColor ?? `url(#${gradientId})`;
  const w = +(size * (80 / 70)).toFixed(2);

  return (
    <svg
      width={w}
      height={size}
      viewBox="0 0 80 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {useGrad && (
        <defs>
          <linearGradient
            id={gradientId}
            x1={GRAD_X1} y1={GRAD_Y1}
            x2={GRAD_X2} y2={GRAD_Y2}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%"   stopColor="var(--logo-grad-1, #EDD9A8)" />
            <stop offset="22%"  stopColor="var(--logo-grad-2, #D4B07A)" />
            <stop offset="58%"  stopColor="var(--logo-grad-3, #B59C73)" />
            <stop offset="100%" stopColor="var(--logo-grad-4, #8A7555)" />
          </linearGradient>
        </defs>
      )}
      <path d={MARK_PATH} fill={fill} />
    </svg>
  );
}

// ─── Full Logo ────────────────────────────────────────────────────────────────

interface LogoProps {
  variant?: "full" | "mark" | "stacked";
  scheme?: "dark" | "light";
  height?: number;
  className?: string;
  showTagline?: boolean;
}

export function Logo({
  variant = "full",
  scheme = "dark",
  height = 36,
  className = "",
  showTagline = false,
}: LogoProps) {
  const isDark = scheme === "dark";
  const wordPrimary   = isDark ? "#F5F0E8" : "#131218";
  const taglineColor  = isDark ? "rgba(245,240,232,0.38)" : "rgba(19,18,24,0.35)";
  const gradId = `cl-logo-${variant}-${scheme}`;

  // ── Mark only ──
  if (variant === "mark") {
    return (
      <LogoMark size={height} gradientId={gradId} className={className} />
    );
  }

  // ── Stacked ──
  if (variant === "stacked") {
    const vw = 160, vh = showTagline ? 130 : 122;
    const w  = +(height * (vw / vh)).toFixed(2);
    const h  = height;
    // mark translate: center 80-wide mark (content x=11..60) in 160-wide canvas
    // content width ≈ 49, desired center x = 80, so tx = 80 - (11 + 49/2) = 80 - 35.5 = 44.5
    const tx = 44;

    return (
      <svg
        width={w} height={h}
        viewBox={`0 0 ${vw} ${vh}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="ComfortLine"
      >
        <defs>
          <linearGradient
            id={gradId}
            x1={GRAD_X1 + tx} y1={GRAD_Y1}
            x2={GRAD_X2 + tx} y2={GRAD_Y2}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%"   stopColor="var(--logo-grad-1, #EDD9A8)" />
            <stop offset="22%"  stopColor="var(--logo-grad-2, #D4B07A)" />
            <stop offset="58%"  stopColor="var(--logo-grad-3, #B59C73)" />
            <stop offset="100%" stopColor="var(--logo-grad-4, #8A7555)" />
          </linearGradient>
        </defs>

        {/* Mark, centered */}
        <g transform={`translate(${tx}, 0)`}>
          <path d={MARK_PATH} fill={`url(#${gradId})`} />
        </g>

        {/* Wordmark */}
        <text x="80" y="89"
          fontFamily="Montserrat, sans-serif" fontWeight="200" fontSize="14"
          fill={wordPrimary} textAnchor="middle" letterSpacing="5"
        >COMFORT</text>
        <text x="80" y="113"
          fontFamily="Montserrat, sans-serif" fontWeight="900" fontSize="16"
          fill="var(--logo-grad-3, #B59C73)" textAnchor="middle" letterSpacing="1.5"
        >LINE</text>
        {showTagline && (
          <text x="80" y={showTagline ? 126 : 0}
            fontFamily="Montserrat, sans-serif" fontWeight="300" fontSize="7"
            fill={taglineColor} textAnchor="middle" letterSpacing="4"
          >TRANSFER</text>
        )}
      </svg>
    );
  }

  // ── Full horizontal ──
  const vw = showTagline ? 255 : 250;
  const w  = +(height * (vw / 70)).toFixed(2);

  return (
    <svg
      width={w} height={height}
      viewBox={`0 0 ${vw} 70`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ComfortLine"
    >
      <defs>
        <linearGradient
          id={gradId}
          x1={GRAD_X1} y1={GRAD_Y1}
          x2={GRAD_X2} y2={GRAD_Y2}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%"   stopColor="var(--logo-grad-1, #EDD9A8)" />
          <stop offset="22%"  stopColor="var(--logo-grad-2, #D4B07A)" />
          <stop offset="58%"  stopColor="var(--logo-grad-3, #B59C73)" />
          <stop offset="100%" stopColor="var(--logo-grad-4, #8A7555)" />
        </linearGradient>
      </defs>

      {/* Mark */}
      <path d={MARK_PATH} fill={`url(#${gradId})`} />

      {/* Wordmark — Typemelts: ultra-thin COMFORT, ultra-black LINE */}
      <text x="84" y="29"
        fontFamily="Montserrat, sans-serif" fontWeight="200" fontSize="13"
        fill={wordPrimary} letterSpacing="5"
      >COMFORT</text>
      <text x="84" y="55"
        fontFamily="Montserrat, sans-serif" fontWeight="900" fontSize="17"
        fill="var(--logo-grad-3, #B59C73)" letterSpacing="1.5"
      >LINE</text>
      {showTagline && (
        <text x="84" y="67"
          fontFamily="Montserrat, sans-serif" fontWeight="300" fontSize="7"
          fill={taglineColor} letterSpacing="4"
        >TRANSFER</text>
      )}
    </svg>
  );
}

// re-export for brandbook backward compat — same component different name
export { LogoMark as LogoMarkCompat };
