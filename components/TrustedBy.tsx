import { trustedBy } from "@/lib/data";

/**
 * Infinite-scrolling band of client organization wordmarks.
 * The list is duplicated so the marquee loops seamlessly.
 */
export default function TrustedBy() {
  return (
    <section aria-label="Trusted by organizations" className="border-y border-slate-200 bg-slate-50 py-10">
      <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
        Trusted by organizations across sectors
      </p>
      <div
        className="relative mt-7 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="animate-marquee flex w-max items-center gap-14 pr-14">
          {[...trustedBy, ...trustedBy].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-lg font-semibold tracking-tight text-slate-400 transition-colors hover:text-navy-700"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
