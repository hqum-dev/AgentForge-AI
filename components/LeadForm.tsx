"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { industries, site } from "@/lib/data";

type LeadFormProps = {
  /** Subject line prefix used in the delivered email */
  formName: string;
  /** Label for the submit button */
  submitLabel: string;
  /** Show the "biggest time drain" field (used on the audit form) */
  showWorkflowField?: boolean;
};

type FormState = {
  name: string;
  email: string;
  organization: string;
  industry: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  organization: "",
  industry: "",
  message: "",
};

/**
 * Lead-capture form. Submissions are delivered via the visitor's email
 * client (mailto) so the site works with zero backend configuration.
 * Swap the submit handler for a form service (Formspree, Basin, etc.)
 * when one is connected — see README.
 */
export default function LeadForm({
  formName,
  submitLabel,
  showWorkflowField = false,
}: LeadFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const update =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `[${formName}] ${form.name} — ${form.organization || "No organization given"}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Organization: ${form.organization}`,
      `Industry: ${form.industry || "Not specified"}`,
      "",
      showWorkflowField ? "Biggest time drain / message:" : "Message:",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-500" />
        <h3 className="mt-4 text-2xl font-bold text-navy-900">Almost done!</h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-slate-600">
          Your email app should have opened with your request pre-filled — just press{" "}
          <strong>Send</strong> and we&apos;ll get back to you within one business day.
        </p>
        <p className="mt-4 text-sm text-slate-500">
          Didn&apos;t open? Email us directly at{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-accent-500 hover:underline"
          >
            {site.email}
          </a>
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-navy-900 placeholder:text-slate-400 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="lf-name" className="mb-1.5 block text-sm font-medium text-navy-900">
            Full name *
          </label>
          <input
            id="lf-name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            value={form.name}
            onChange={update("name")}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="lf-email" className="mb-1.5 block text-sm font-medium text-navy-900">
            Work email *
          </label>
          <input
            id="lf-email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@organization.com"
            value={form.email}
            onChange={update("email")}
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="lf-org"
            className="mb-1.5 block text-sm font-medium text-navy-900"
          >
            Organization *
          </label>
          <input
            id="lf-org"
            type="text"
            required
            autoComplete="organization"
            placeholder="Acme Health Partners"
            value={form.organization}
            onChange={update("organization")}
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="lf-industry"
            className="mb-1.5 block text-sm font-medium text-navy-900"
          >
            Industry
          </label>
          <select
            id="lf-industry"
            value={form.industry}
            onChange={update("industry")}
            className={inputClasses}
          >
            <option value="">Select an industry…</option>
            {industries.map((i) => (
              <option key={i.slug} value={i.title}>
                {i.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="lf-message"
            className="mb-1.5 block text-sm font-medium text-navy-900"
          >
            {showWorkflowField
              ? "What's the biggest time drain in your organization? *"
              : "How can we help? *"}
          </label>
          <textarea
            id="lf-message"
            required
            rows={5}
            placeholder={
              showWorkflowField
                ? "e.g. Our team spends every Friday manually assembling reports from three different systems…"
                : "Tell us a little about your organization and what you'd like to explore…"
            }
            value={form.message}
            onChange={update("message")}
            className={inputClasses}
          />
        </div>
      </div>
      <button
        type="submit"
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-accent-500/25 transition-all hover:bg-accent-600 hover:shadow-accent-500/40 sm:w-auto"
      >
        {submitLabel}
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
      <p className="mt-4 text-xs text-slate-500">
        We respond within one business day. Your information is never shared or sold.
      </p>
    </form>
  );
}
