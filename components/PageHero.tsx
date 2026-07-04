import Reveal from "@/components/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

/**
 * Dark hero banner used at the top of interior pages.
 */
export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-20 pt-32 lg:pb-28 lg:pt-44">
      <div className="grid-texture absolute inset-0" aria-hidden="true" />
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
