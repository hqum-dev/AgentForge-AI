import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { services, industries, site } from "@/lib/data";
import Logo from "@/components/Logo";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/solutions", label: "Solutions" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
  { href: "/book-audit", label: "Free AI Workflow Audit" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Ready to see what automation could save you?
            </h2>
            <p className="mt-2 max-w-xl text-slate-400">
              Book a free AI Workflow Audit — a concrete, no-obligation report on the hours
              and costs hiding in your workflows.
            </p>
          </div>
          <Link
            href="/book-audit"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-accent-500 px-6 py-3 font-semibold text-white shadow-lg shadow-accent-500/25 transition-all hover:bg-accent-600"
          >
            Book Your Free Audit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* Link columns */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="col-span-2 md:col-span-1">
          <Logo dark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Enterprise AI agents, workflow automation, and custom AI solutions that
            eliminate repetitive work — so your team can do the work that matters.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
          >
            <Mail className="h-4 w-4" />
            {site.email}
          </a>
        </div>

        <nav aria-label="Services">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className="text-sm font-medium text-accent-400 transition-colors hover:text-accent-500"
              >
                View all services →
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Industries">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Industries
          </h3>
          <ul className="mt-4 space-y-2.5">
            {industries.slice(0, 6).map((i) => (
              <li key={i.slug}>
                <Link
                  href={`/industries#${i.slug}`}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {i.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/industries"
                className="text-sm font-medium text-accent-400 transition-colors hover:text-accent-500"
              >
                View all industries →
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Company">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} AgentForge AI. All rights reserved.</p>
          <p>AI agents · Workflow automation · Custom AI solutions</p>
        </div>
      </div>
    </footer>
  );
}
