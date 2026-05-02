interface MarkProps {
  goldColor?: string;
  lineColor?: string;
  size?: number;
}

export function LogoMark({ goldColor = "#B59C73", lineColor = "#F5F0E8", size = 40 }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M 39 15 A 20 20 0 1 0 39 45"
        stroke={goldColor}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <line x1="42" y1="22" x2="57" y2="22" stroke={lineColor} strokeWidth="3" strokeLinecap="round" />
      <line x1="42" y1="38" x2="51" y2="38" stroke={lineColor} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

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
  const gold = "#B59C73";
  const wordPrimary = scheme === "dark" ? "#F5F0E8" : "#131218";
  const wordSecondary = gold;
  const lineColor = scheme === "dark" ? "#F5F0E8" : "#131218";
  const taglineColor = scheme === "dark" ? "rgba(245,240,232,0.45)" : "rgba(19,18,24,0.4)";

  if (variant === "mark") {
    return (
      <svg
        width={height}
        height={height}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="ComfortLine mark"
      >
        <path d="M 39 15 A 20 20 0 1 0 39 45" stroke={gold} strokeWidth="4.5" strokeLinecap="round" />
        <line x1="42" y1="22" x2="57" y2="22" stroke={lineColor} strokeWidth="3" strokeLinecap="round" />
        <line x1="42" y1="38" x2="51" y2="38" stroke={lineColor} strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === "stacked") {
    const w = height * 2.6;
    const h = height * 1.8;
    return (
      <svg
        width={w}
        height={h}
        viewBox="0 0 156 108"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="ComfortLine"
      >
        <g transform="translate(48, 0)">
          <path d="M 39 15 A 20 20 0 1 0 39 45" stroke={gold} strokeWidth="4.5" strokeLinecap="round" />
          <line x1="42" y1="22" x2="57" y2="22" stroke={lineColor} strokeWidth="3" strokeLinecap="round" />
          <line x1="42" y1="38" x2="51" y2="38" stroke={lineColor} strokeWidth="3" strokeLinecap="round" />
        </g>
        <text
          x="78"
          y="74"
          fontFamily="Montserrat, sans-serif"
          fontWeight="500"
          fontSize="15"
          fill={wordPrimary}
          textAnchor="middle"
          letterSpacing="4"
        >
          COMFORT
        </text>
        <text
          x="78"
          y="92"
          fontFamily="Montserrat, sans-serif"
          fontWeight="800"
          fontSize="15"
          fill={wordSecondary}
          textAnchor="middle"
          letterSpacing="6"
        >
          LINE
        </text>
        {showTagline && (
          <text
            x="78"
            y="106"
            fontFamily="Montserrat, sans-serif"
            fontWeight="300"
            fontSize="7"
            fill={taglineColor}
            textAnchor="middle"
            letterSpacing="4"
          >
            TRANSFER
          </text>
        )}
      </svg>
    );
  }

  const w = showTagline ? height * 6.2 : height * 5.8;
  const vw = showTagline ? 223 : 210;

  return (
    <svg
      width={w}
      height={height}
      viewBox={`0 0 ${vw} 60`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ComfortLine"
    >
      <path d="M 39 15 A 20 20 0 1 0 39 45" stroke={gold} strokeWidth="4.5" strokeLinecap="round" />
      <line x1="42" y1="22" x2="57" y2="22" stroke={lineColor} strokeWidth="3" strokeLinecap="round" />
      <line x1="42" y1="38" x2="51" y2="38" stroke={lineColor} strokeWidth="3" strokeLinecap="round" />
      <text
        x="70"
        y="27"
        fontFamily="Montserrat, sans-serif"
        fontWeight="500"
        fontSize="13"
        fill={wordPrimary}
        letterSpacing="3.5"
      >
        COMFORT
      </text>
      <text
        x="70"
        y="44"
        fontFamily="Montserrat, sans-serif"
        fontWeight="800"
        fontSize="13"
        fill={wordSecondary}
        letterSpacing="5.5"
      >
        LINE
      </text>
      {showTagline && (
        <text
          x="71"
          y="55"
          fontFamily="Montserrat, sans-serif"
          fontWeight="300"
          fontSize="7"
          fill={taglineColor}
          letterSpacing="4"
        >
          TRANSFER
        </text>
      )}
    </svg>
  );
}
