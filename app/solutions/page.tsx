import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { solutions } from "@/lib/data";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Solutions — Outcome-Focused AI Automation Packages",
  description:
    "Four outcome-focused solution areas: front office & customer experience, back office & operations, documents & knowledge, and leadership insight & decision support.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Start with the outcome, not the technology"
        description="Most organizations don't need 'an AI strategy' — they need a specific problem to stop hurting. These four solution areas cover where automation delivers the fastest, most measurable wins."
      />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="space-y-14">
          {solutions.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <Reveal key={solution.slug}>
                <section
                  id={solution.slug}
                  aria-labelledby={`${solution.slug}-title`}
                  className="scroll-mt-28 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="grid lg:grid-cols-5">
                    {/* Title panel */}
                    <div className="relative overflow-hidden bg-navy-950 p-8 lg:col-span-2 sm:p-10">
                      <div className="grid-texture absolute inset-0" aria-hidden="true" />
                      <div className="relative">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-400/15 text-accent-400">
                          <Icon className="h-7 w-7" />
                        </span>
                        <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-accent-400">
                          Solution {String(i + 1).padStart(2, "0")}
                        </p>
                        <h2
                          id={`${solution.slug}-title`}
                          className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl"
                        >
                          {solution.title}
                        </h2>
                        <Link
                          href="/book-audit"
                          className="group mt-8 inline-flex items-center gap-2 font-semibold text-accent-400 transition-colors hover:text-accent-500"
                        >
                          Audit this area for free
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Detail panel */}
                    <div className="p-8 lg:col-span-3 sm:p-10">
                      <div className="grid gap-8 sm:grid-cols-2">
                        <div>
                          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-slate-500">
                            <XCircle className="h-4 w-4 text-rose-400" />
                            The problem today
                          </p>
                          <p className="mt-3 leading-relaxed text-slate-600">
                            {solution.problem}
                          </p>
                        </div>
                        <div>
                          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-slate-500">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                            After AgentForge
                          </p>
                          <p className="mt-3 leading-relaxed text-slate-600">
                            {solution.outcome}
                          </p>
                        </div>
                      </div>
                      <div className="mt-8 border-t border-slate-100 pt-7">
                        <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                          What&apos;s included
                        </p>
                        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                          {solution.includes.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                              <span className="text-slate-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </Reveal>
            );
          })}
        </div>
      </div>

      <CtaSection
        title="Which solution fits your organization?"
        description="Request a consultation and we'll walk your leadership through exactly where each solution applies — with numbers specific to your operation."
      />
    </>
  );
}
