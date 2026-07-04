import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/data";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Case Studies — Measured Results from Real Engagements",
  description:
    "Anonymized case studies from AgentForge AI engagements across healthcare, nonprofits, manufacturing, professional services, government, and financial services — with verified, measured results.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Measured results, not marketing claims"
        description="Each engagement below is a real client, anonymized for confidentiality. The metrics were measured after deployment and verified with the client — because 'trust us, it's better' isn't a business case."
      />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="space-y-14">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug}>
              <article
                id={study.slug}
                aria-labelledby={`${study.slug}-title`}
                className="scroll-mt-28 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="grid lg:grid-cols-3">
                  {/* Results panel */}
                  <div className="relative overflow-hidden bg-navy-950 p-8 sm:p-10">
                    <div className="hero-glow absolute inset-0" aria-hidden="true" />
                    <div className="relative flex h-full flex-col">
                      <span className="inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-300">
                        {study.industry}
                      </span>
                      <p className="mt-4 text-sm font-medium text-slate-400">
                        {study.client}
                      </p>
                      <div className="mt-8 flex-1 space-y-6">
                        {study.results.map((r) => (
                          <div key={r.label}>
                            <p className="text-3xl font-bold tracking-tight text-white">
                              {r.metric}
                            </p>
                            <p className="mt-1 text-sm text-slate-400">{r.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Narrative panel */}
                  <div className="p-8 lg:col-span-2 sm:p-10">
                    <p className="text-sm font-semibold uppercase tracking-widest text-accent-500">
                      Case Study {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2
                      id={`${study.slug}-title`}
                      className="mt-2 text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl"
                    >
                      {study.title}
                    </h2>
                    <div className="mt-7 space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                          The challenge
                        </h3>
                        <p className="mt-2 leading-relaxed text-slate-600">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                          What we built
                        </h3>
                        <p className="mt-2 leading-relaxed text-slate-600">
                          {study.solution}
                        </p>
                      </div>
                    </div>
                    <div className="mt-7 flex flex-wrap gap-2 border-t border-slate-100 pt-6">
                      {study.services.map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-accent-500/10 px-3 py-1 text-xs font-semibold text-accent-600"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/book-audit"
                      className="group mt-7 inline-flex items-center gap-2 font-semibold text-accent-500 transition-colors hover:text-accent-600"
                    >
                      Get results like these — start with a free audit
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <CtaSection
        title="Your workflows could be the next case study"
        description="Every engagement above started the same way: a free workflow audit that quantified the opportunity. Yours is one click away."
      />
    </>
  );
}
