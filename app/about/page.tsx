import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Handshake,
  ShieldCheck,
  LineChart,
  Lightbulb,
  Users,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "About Us — Why AgentForge AI Exists",
  description:
    "AgentForge AI is an AI consulting and automation firm built on a simple conviction: the most valuable people in every organization spend too much of their time on work a machine should do.",
};

const values = [
  {
    icon: Target,
    title: "ROI or we say no",
    description:
      "We model the business case before we build. If the numbers don't justify the project, we'll tell you — and we've turned down work on exactly those grounds.",
  },
  {
    icon: Handshake,
    title: "Plain English, always",
    description:
      "You'll never need to decode jargon to understand what we're building, what it costs, or how it's performing. Clarity is a deliverable.",
  },
  {
    icon: ShieldCheck,
    title: "Security before speed",
    description:
      "Least-privilege access, encrypted data, human review gates, and full audit trails come standard — especially in regulated industries.",
  },
  {
    icon: LineChart,
    title: "Measured, not assumed",
    description:
      "Every automation ships with metrics. We report hours saved and errors prevented the same way you report revenue: with real numbers.",
  },
  {
    icon: Lightbulb,
    title: "Boring technology, bold results",
    description:
      "We use the newest AI where it earns its place and proven tools everywhere else. Your operations are not our science experiment.",
  },
  {
    icon: Users,
    title: "Your team, elevated",
    description:
      "Automation should make your people more valuable, not obsolete. We design with your staff, train them thoroughly, and build for their independence.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="We exist to end busywork"
        description="AgentForge AI was founded on a simple observation: in almost every organization, the most capable people spend a shocking share of their week on work a machine should be doing."
      />

      {/* Mission narrative */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Our story
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-600">
              <p>
                We started AgentForge AI after years of watching the same pattern repeat
                across companies, nonprofits, clinics, schools, and agencies: talented
                people hired for their judgment, spending their days on data entry,
                copy-paste, status chasing, and report assembly. The cost wasn&apos;t
                just hours — it was burnout, errors, slow customer response, and growth
                that stalled because every new client meant more administrative weight.
              </p>
              <p>
                Modern AI changed what&apos;s possible, but most organizations were
                offered only two bad options: generic software that didn&apos;t fit
                their workflows, or expensive enterprise consultancies priced for the
                Fortune 500. We built AgentForge to close that gap — enterprise-grade
                AI engineering, delivered with the pragmatism and pricing that
                mid-sized organizations, nonprofits, and public institutions actually
                need.
              </p>
              <p>
                Today we design, build, and maintain AI agents, workflow automations,
                dashboards, and custom AI systems across eight industries. Every
                engagement starts the same way: a free workflow audit that puts real
                numbers on the problem before anyone commits a dollar to solving it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title="Principles we don't compromise on"
            description="These aren't wall posters. They're the standards clients hold us to — and the reason our retention rate is 94%."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={(i % 3) * 100} className="h-full">
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-navy-900">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Difference band */}
      <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-28">
        <div className="grid-texture absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                The AgentForge Difference
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Consultants who ship, engineers who listen
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-400">
                Most firms make you choose: strategy decks with no working software, or
                developers who build exactly what you asked for — even when it&apos;s
                the wrong thing. Our team does both jobs. We challenge the brief when
                the data says to, then build production systems with our own hands.
              </p>
              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-2 font-semibold text-accent-400 transition-colors hover:text-accent-500"
              >
                Request a consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
            <Reveal delay={150}>
              <dl className="glass-card grid grid-cols-2 gap-8 rounded-3xl p-8 sm:p-10">
                {[
                  { term: "Industries served", detail: "8 sectors" },
                  { term: "Workflows automated", detail: "120+" },
                  { term: "Client retention", detail: "94%" },
                  { term: "Typical payback", detail: "< 6 months" },
                ].map((item) => (
                  <div key={item.term}>
                    <dt className="text-sm text-slate-400">{item.term}</dt>
                    <dd className="mt-1 text-2xl font-bold tracking-tight text-white">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaSection
        title="Let's find out what your team could do with its time back"
        description="Start with a free AI Workflow Audit or a 30-minute discovery call — whichever suits how your organization makes decisions."
      />
    </>
  );
}
