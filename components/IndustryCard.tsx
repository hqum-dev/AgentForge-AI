import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Industry } from "@/lib/data";

export default function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = industry.icon;
  return (
    <Link
      href={`/industries#${industry.slug}`}
      className="group glass-card relative flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-400/15 text-accent-400">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-white">{industry.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
        {industry.summary}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400">
        Explore
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
