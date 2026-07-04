import Link from "next/link";
import {
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Clock,
  TrendingUp,
} from "lucide-react";
import {
  services,
  industries,
  benefits,
  caseStudies,
  testimonials,
  stats,
  faqs,
} from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TrustedBy from "@/components/TrustedBy";
import ServiceCard from "@/components/ServiceCard";
import IndustryCard from "@/components/IndustryCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import CaseStudyCard from "@/components/CaseStudyCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatCounter from "@/components/StatCounter";
import FaqAccordion from "@/components/FaqAccordion";
import CtaSection from "@/components/CtaSection";

export default function HomePage() {
  return (
    <>
      {/* ============================== Hero ============================== */}
      <section className="relative overflow-hidden bg-navy-950 pb-24 pt-36 lg:pb-36 lg:pt-52">
        <div className="grid-texture absolute inset-0" aria-hidden="true" />
        <div className="hero-glow absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="glass-card mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                Enterprise AI consulting & automation
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Your team&apos;s best hours,{" "}
                <span className="bg-gradient-to-r from-accent-500 to-accent-400 bg-clip-text text-transparent">
                  given back
                </span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
                AgentForge AI builds AI agents, workflow automations, and custom AI
                solutions that eliminate repetitive work — for businesses, nonprofits,
                healthcare, education, and government.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
            <Reveal delay={400}>
              <ul className="mx-auto mt-12 flex max-w-2xl flex-col items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-400 sm:flex-row">
                <li className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent-400" />
                  15–30 hrs saved per employee monthly
                </li>
                <li className="inline-flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-accent-400" />
                  Payback typically under 6 months
                </li>
                <li className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-accent-400" />
                  Security & compliance first
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================== Trusted By =========================== */}
      <TrustedBy />

      {/* ============================ Services ============================ */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Everything you need to put AI to work"
            description="From your first automation to a fully agentic operation — we design, build, and maintain AI systems that pay for themselves."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 100} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-navy-900 transition-all hover:border-accent-500 hover:text-accent-500"
            >
              View all 10 services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* =========================== Industries =========================== */}
      <section className="relative overflow-hidden bg-navy-950 py-24 lg:py-32">
        <div className="grid-texture absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            eyebrow="Industries We Serve"
            title="Deep experience where it matters"
            description="Every sector has its own systems, regulations, and constraints. We build automation that respects all three."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={(i % 4) * 80} className="h-full">
                <IndustryCard industry={industry} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= Process ============================= */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="A proven path from audit to ROI"
            description="No big-bang risk, no black boxes. Seven disciplined steps take you from “where are we losing time?” to automation that keeps improving."
          />
          <div className="mt-16">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      {/* ============================= Benefits ============================ */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Benefits of AI Automation"
            title="What changes when the busywork disappears"
            description="AI automation isn't about replacing people — it's about removing the work that was never a good use of them."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <Reveal key={benefit.title} delay={(i % 3) * 100} className="h-full">
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-navy-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================== Case Studies ========================== */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case Studies"
            title="Real workflows. Measured results."
            description="A sample of recent engagements — anonymized to protect client confidentiality, with results verified by our clients."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(0, 3).map((study, i) => (
              <Reveal key={study.slug} delay={(i % 3) * 100} className="h-full">
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-navy-900 transition-all hover:border-accent-500 hover:text-accent-500"
            >
              Explore all case studies
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ========================= Stats / ROI band ======================== */}
      <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-24">
        <div className="hero-glow absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCounter key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================== Testimonials =========================== */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="What our clients say"
            description="Leaders across healthcare, government, nonprofits, and professional services on working with AgentForge AI."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 2) * 100} className="h-full">
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== FAQ =============================== */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions, straight answers"
            description="Everything organizations ask us before starting — costs, timelines, security, and what happens to your team."
          />
          <Reveal className="mt-12">
            <FaqAccordion faqs={faqs} />
          </Reveal>
        </div>
      </section>

      {/* ============================ Final CTA ============================ */}
      <CtaSection />
    </>
  );
}
