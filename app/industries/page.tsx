import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { industries } from "@/lib/data";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Industries — AI Automation for Every Sector",
  description:
    "AI automation for small businesses, nonprofits, education, healthcare, manufacturing, professional services, government, and financial services — built around each sector's systems, regulations, and constraints.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Automation that speaks your sector's language"
        description="HIPAA, FERPA, public-records law, audit trails, legacy ERPs — every industry has non-negotiables. We design around them from day one, not as an afterthought."
      />

      {/* Quick-jump index */}
      <nav aria-label="Industries index" className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 px-4 py-6 sm:px-6 lg:px-8">
          {industries.map((i) => (
            <a
              key={i.slug}
              href={`#${i.slug}`}
              className="rounded-full border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:border-accent-500 hover:text-accent-500"
            >
              {i.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-2">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.slug} delay={(i % 2) * 100} className="h-full">
                <section
                  id={industry.slug}
                  aria-labelledby={`${industry.slug}-title`}
                  className="flex h-full scroll-mt-28 flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-accent-500/40 hover:shadow-xl hover:shadow-accent-500/5 sm:p-10"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500 ring-1 ring-accent-500/20">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h2
                      id={`${industry.slug}-title`}
                      className="text-2xl font-bold tracking-tight text-navy-900"
                    >
                      {industry.title}
                    </h2>
                  </div>
                  <p className="mt-5 leading-relaxed text-slate-600">
                    {industry.description}
                  </p>
                  <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-slate-500">
                    Common engagements
                  </h3>
                  <ul className="mt-4 flex-1 space-y-3">
                    {industry.useCases.map((useCase) => (
                      <li key={useCase} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                        <span className="text-slate-700">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/book-audit"
                    className="group mt-7 inline-flex items-center gap-2 font-semibold text-accent-500 transition-colors hover:text-accent-600"
                  >
                    Get a free workflow audit for your organization
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </section>
              </Reveal>
            );
          })}
        </div>
      </div>

      <CtaSection
        title="Don't see your industry?"
        description="These eight sectors are where we work most — but repetitive work is universal. Book a discovery call and we'll tell you honestly whether we're the right fit."
      />
    </>
  );
}
