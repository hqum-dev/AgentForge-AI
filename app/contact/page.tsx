import type { Metadata } from "next";
import Link from "next/link";
import { Mail, CalendarCheck, ClipboardCheck, ArrowRight } from "lucide-react";
import { site } from "@/lib/data";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact — Talk to an AI Automation Expert",
  description:
    "Contact AgentForge AI to request a consultation, book a discovery call, or ask a question. We respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a human about your automation"
        description="Questions, consultations, or a quick sanity check on whether AI fits your organization — we respond within one business day, jargon-free."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact channels */}
            <Reveal className="lg:col-span-2">
              <h2 className="text-2xl font-bold tracking-tight text-navy-900">
                Three ways to start
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                    <ClipboardCheck className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-bold text-navy-900">
                      Free AI Workflow Audit
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      The best starting point for most organizations — a written
                      report on your automation opportunities and their ROI.
                    </p>
                    <Link
                      href="/book-audit"
                      className="group mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-500 hover:text-accent-600"
                    >
                      Book your audit
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                    <CalendarCheck className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-bold text-navy-900">Discovery call</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      A 30-minute conversation about your goals and whether we&apos;re
                      the right fit. No slides, no pressure.
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                      Use the form and mention your availability — we&apos;ll send a
                      calendar invitation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                    <Mail className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-bold text-navy-900">Email us directly</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      Prefer to write it your own way? Reach us any time at:
                    </p>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-2 inline-block text-sm font-semibold text-accent-500 hover:text-accent-600"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl bg-slate-50 p-6">
                <p className="text-sm leading-relaxed text-slate-600">
                  <strong className="text-navy-900">Our response promise:</strong>{" "}
                  every inquiry gets a personal reply within one business day. Your
                  information is never shared, sold, or added to a mailing list you
                  didn&apos;t ask for.
                </p>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={150} className="lg:col-span-3">
              <LeadForm formName="Consultation Request" submitLabel="Request a Consultation" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
