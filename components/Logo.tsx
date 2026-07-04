type LogoProps = {
  /** Render the wordmark for dark backgrounds */
  dark?: boolean;
};

export default function Logo({ dark = false }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="32" height="32" rx="8" fill="url(#lg)" />
        {/* Forge / spark mark */}
        <path
          d="M16 6l2.4 5.6L24 14l-5.6 2.4L16 22l-2.4-5.6L8 14l5.6-2.4L16 6z"
          fill="white"
        />
        <circle cx="23.5" cy="23.5" r="2.5" fill="white" fillOpacity="0.85" />
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="32" y2="32">
            <stop stopColor="#2563EB" />
            <stop offset="1" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
      </svg>
      <span
        className={`text-lg font-bold tracking-tight transition-colors ${
          dark ? "text-white" : "text-navy-900"
        }`}
      >
        AgentForge{" "}
        <span className={dark ? "text-accent-400" : "text-accent-500"}>AI</span>
      </span>
    </span>
  );
}
