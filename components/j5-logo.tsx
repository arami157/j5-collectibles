export function J5Logo({ className = "", size = "default" }: { className?: string; size?: "small" | "default" | "medium" | "large" }) {
  const dimensions = {
    small: { width: 48, height: 48 },
    default: { width: 64, height: 64 },
    medium: { width: 80, height: 80 },
    large: { width: 200, height: 200 },
  };

  const { width, height } = dimensions[size];

  return (
    <svg
      viewBox="40 55 120 70"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="J5 Collectibles Logo"
    >
      {/* J5 text - bold comic style */}
      <text
        x="100"
        y="118"
        textAnchor="middle"
        fontFamily="'Impact', 'Arial Black', sans-serif"
        fontSize="72"
        fontWeight="900"
        letterSpacing="-2"
      >
        {/* Black outline */}
        <tspan stroke="#000" strokeWidth="8" fill="none" strokeLinejoin="round">
          J5
        </tspan>
      </text>
      <text
        x="100"
        y="118"
        textAnchor="middle"
        fontFamily="'Impact', 'Arial Black', sans-serif"
        fontSize="72"
        fontWeight="900"
        letterSpacing="-2"
      >
        {/* Black outline */}
        <tspan stroke="#000" strokeWidth="4" fill="none" strokeLinejoin="round">
          J5
        </tspan>
      </text>
      <text
        x="100"
        y="118"
        textAnchor="middle"
        fontFamily="'Impact', 'Arial Black', sans-serif"
        fontSize="72"
        fontWeight="900"
        letterSpacing="-2"
      >
        {/* Orange/gold fill */}
        <tspan fill="url(#j5gradient)">J5</tspan>
      </text>

      {/* Gradient definition */}
      <defs>
        <linearGradient id="j5gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#FF6600" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function J5LogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <J5Logo size="small" />
      <span
        className="text-xl font-black uppercase tracking-tight"
        style={{
          color: "#FF1744",
          textShadow: "0 0 1px rgba(255,255,255,0.4)",
          fontFamily: "'Impact', 'Arial Black', sans-serif",
        }}
      >
        Collectibles
      </span>
    </div>
  );
}
