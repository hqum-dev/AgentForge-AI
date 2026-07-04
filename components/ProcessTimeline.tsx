import { processSteps } from "@/lib/data";
import Reveal from "@/components/Reveal";

/**
 * Numbered vertical timeline of the 7-step engagement process.
 */
export default function ProcessTimeline() {
  return (
    <ol className="relative mx-auto max-w-3xl">
      {processSteps.map((step, i) => {
        const Icon = step.icon;
        const isLast = i === processSteps.length - 1;
        return (
          <li key={step.step} className="relative flex gap-5 pb-10 sm:gap-7">
            {/* Connector line */}
            {!isLast && (
              <span
                aria-hidden="true"
                className="absolute left-6 top-14 h-[calc(100%-3.5rem)] w-px bg-gradient-to-b from-accent-500/50 to-slate-200 sm:left-7"
              />
            )}
            <Reveal delay={i * 60} className="shrink-0">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500 ring-1 ring-accent-500/20 sm:h-14 sm:w-14">
                <Icon className="h-6 w-6" />
              </span>
            </Reveal>
            <Reveal delay={i * 60 + 80} className="pt-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-500">
                Step {step.step}
              </p>
              <h3 className="mt-1 text-xl font-bold text-navy-900">{step.title}</h3>
              <p className="mt-2 max-w-xl leading-relaxed text-slate-600">
                {step.description}
              </p>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
