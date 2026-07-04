import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Services — AI Agents, Automation & Custom AI Solutions",
  description:
    "Ten enterprise AI services: AI agents, workflow automation, business process optimization, CRM automation, executive AI assistants, document automation, knowledge management, AI chatbots, custom AI solutions, and AI strategy consulting.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="AI services built for real operations"
        description="Ten disciplines, one goal: eliminate the repetitive work holding your organization back. Every engagement is scoped, priced, and measured against concrete ROI."
      />

      {/* Quick-jump index */}
      <nav
        aria-label="Services index"
        className="border-b border-slate-200 bg-white"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 px-4 py-6 sm:px-6 lg:px-8">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:border-accent-500 hover:text-accent-500"
            >
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Detailed service sections */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="space-y-20 lg:space-y-28">
          {services.map((service, i) => {
            const Icon = service.icon;
            const reversed = i % 2 === 1;
            return (
              <section
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28"
                aria-labelledby={`${service.slug}-title`}
              >
                <Reveal>
                  <div
                    className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                      reversed ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div>
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-500 ring-1 ring-accent-500/20">
                        <Icon className="h-7 w-7" />
                      </span>
                      <h2
                        id={`${service.slug}-title`}
                        className="mt-5 text-3xl font-bold tracking-tight text-navy-900"
                      >
                        {service.title}
                      </h2>
                      <p className="mt-4 text-lg leading-relaxed text-slate-600">
                        {service.description}
                      </p>
                      <Link
                        href="/book-audit"
                        className="group mt-6 inline-flex items-center gap-2 font-semibold text-accent-500 transition-colors hover:text-accent-600"
                      >
                        Discuss this in a free workflow audit
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                      <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                        What you get
                      </h3>
                      <ul className="mt-5 space-y-4">
                        {service.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                            <span className="text-slate-700">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </section>
            );
          })}
        </div>
      </div>

      <CtaSection
        title="Not sure which service you need?"
        description="That's exactly what the free AI Workflow Audit answers. We'll map your workflows and tell you which of these services — if any — will actually pay off."
      />
    </>
  );
}
