import type { Metadata } from "next";
import { CheckCircle2, FileSearch, MessagesSquare, FileBarChart } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Book a Free AI Workflow Audit",
  description:
    "Book a free, no-obligation AI Workflow Audit. In about a week, receive a written report identifying your top automation opportunities with estimated hours saved, cost impact, and a recommended roadmap.",
};

const auditSteps = [
  {
    icon: MessagesSquare,
    title: "1. A short kickoff conversation",
    description:
      "We spend 30–45 minutes with you (and any key team members) understanding how work actually flows through your organization.",
  },
  {
    icon: FileSearch,
    title: "2. We map and measure",
    description:
      "Over the following days, we analyze your key workflows, identify repetitive steps, and quantify the hours and costs involved.",
  },
  {
    icon: FileBarChart,
    title: "3. You receive the report",
    description:
      "A written, plain-English report: your top automation opportunities, estimated savings for each, and a prioritized roadmap. Yours to keep — even if we never work together.",
  },
];

const included = [
  "Workflow mapping of your highest-cost processes",
  "Estimated hours and dollars recoverable per opportunity",
  "A prioritized automation roadmap",
  "Honest guidance — including where automation isn't worth it",
  "Zero obligation and zero sales pressure",
];

export default function BookAuditPage() {
  return (
    <>
      <PageHero
        eyebrow="Free AI Workflow Audit"
        title="Find out what your busywork actually costs"
        description="In about a week, you'll know exactly which of your workflows can be automated, what that would save, and where to start — in a written report you keep, free, with no obligation."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* What to expect */}
            <Reveal className="lg:col-span-2">
              <h2 className="text-2xl font-bold tracking-tight text-navy-900">
                How the audit works
              </h2>
              <div className="mt-8 space-y-7">
                {auditSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="flex gap-4">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="font-bold text-navy-900">{step.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 rounded-2xl border border-accent-500/20 bg-accent-500/5 p-6">
                <h3 className="font-bold text-navy-900">What&apos;s included</h3>
                <ul className="mt-4 space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Booking form */}
            <Reveal delay={150} className="lg:col-span-3">
              <h2 className="text-2xl font-bold tracking-tight text-navy-900">
                Book your free audit
              </h2>
              <p className="mt-2 text-slate-600">
                Tell us a little about your organization and we&apos;ll reach out
                within one business day to schedule your kickoff conversation.
              </p>
              <div className="mt-6">
                <LeadForm
                  formName="Free AI Workflow Audit"
                  submitLabel="Book My Free Audit"
                  showWorkflowField
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
