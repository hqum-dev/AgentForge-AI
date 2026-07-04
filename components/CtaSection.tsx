import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import Reveal from "@/components/Reveal";

type CtaSectionProps = {
  title?: string;
  description?: string;
};

/**
 * Full-width closing call to action used at the bottom of every page.
 */
export default function CtaSection({
  title = "Stop paying your best people to do repetitive work",
  description = "In one free AI Workflow Audit, we'll show you exactly which of your workflows can be automated, what it would save, and how fast it pays back. No jargon, no obligation.",
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="grid-texture absolute inset-0" aria-hidden="true" />
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
            {description}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book-audit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-accent-500/30 transition-all hover:bg-accent-600 hover:shadow-accent-500/50 sm:w-auto"
            >
              Schedule a Free AI Workflow Audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="glass-card inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              <PhoneCall className="h-4 w-4" />
              Book a Discovery Call
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
