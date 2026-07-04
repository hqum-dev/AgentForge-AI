import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/data";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies#${study.slug}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-xl hover:shadow-accent-500/10"
    >
      <span className="inline-flex w-fit rounded-full bg-navy-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-700">
        {study.industry}
      </span>
      <h3 className="mt-4 text-lg font-bold leading-snug text-navy-900">
        {study.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
        {study.challenge}
      </p>
      <div className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-100 pt-5">
        {study.results.map((r) => (
          <div key={r.label}>
            <p className="text-lg font-bold tracking-tight text-accent-500">
              {r.metric}
            </p>
            <p className="mt-0.5 text-xs leading-tight text-slate-500">{r.label}</p>
          </div>
        ))}
      </div>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-500">
        Read the case study
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
