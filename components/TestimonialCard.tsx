import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/data";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
      <Quote className="h-8 w-8 text-accent-500/30" aria-hidden="true" />
      <blockquote className="mt-4 flex-1 leading-relaxed text-slate-700">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-slate-100 pt-5">
        <p className="font-semibold text-navy-900">{testimonial.name}</p>
        <p className="text-sm text-slate-500">
          {testimonial.role} · {testimonial.org}
        </p>
      </figcaption>
    </figure>
  );
}
