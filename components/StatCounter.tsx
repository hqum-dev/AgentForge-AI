"use client";

import { useEffect, useRef, useState } from "react";
import type { Stat } from "@/lib/data";

/**
 * Animates a number from 0 to its target value when scrolled into view.
 */
export default function StatCounter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const reduceMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        if (reduceMotion) {
          setDisplay(stat.value);
          return;
        }

        const duration = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(stat.value * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [stat.value]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {stat.prefix}
        {display}
        <span className="text-accent-400">{stat.suffix}</span>
      </p>
      <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
    </div>
  );
}
