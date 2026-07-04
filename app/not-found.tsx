import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy-950 pt-20">
      <div className="grid-texture absolute inset-0" aria-hidden="true" />
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
          404 — Page not found
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          This page got automated away
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
          get you back to something useful.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 font-semibold text-white shadow-lg shadow-accent-500/30 transition-all hover:bg-accent-600"
          >
            Back to home
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/book-audit"
            className="glass-card inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            Book a free audit
          </Link>
        </div>
      </div>
    </section>
  );
}
