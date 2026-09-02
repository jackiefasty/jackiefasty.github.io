"use client";

import { useEffect, useRef, useState } from "react";

import type { Stat } from "@/lib/types";

const DURATION_MS = 1100;

/** Expo-out easing, matching the CSS entrance curve. */
function easeOutExpo(progress: number): number {
  return progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
}

/**
 * Counts a metric up from zero the first time it scrolls into view.
 *
 * The final value is what renders server-side, so the correct number is on
 * screen even if JS never runs. The count-up only starts from the intersection
 * callback, which fires while the card is still fading in, so resetting to
 * zero is not visible. It is skipped entirely under `prefers-reduced-motion`.
 */
export function StatCounter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(stat.value);

  useEffect(() => {
    const element = ref.current;

    if (
      !element ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frame = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return;
        }

        observer.disconnect();

        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / DURATION_MS, 1);
          setDisplay(Math.round(easeOutExpo(progress) * stat.value));

          if (progress < 1) {
            frame = requestAnimationFrame(tick);
          }
        };

        frame = requestAnimationFrame(tick);
      },
      { rootMargin: "-60px 0px" },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [stat.value]);

  const prefix = stat.prefix ?? "";
  const suffix = stat.suffix ?? "";

  return (
    <div
      ref={ref}
      className="surface-card h-full p-5 transition-colors duration-300 hover:border-accent/40"
      aria-label={`${prefix}${stat.value}${suffix} ${stat.label}. ${stat.detail}.`}
    >
      <p
        className="font-mono text-3xl font-bold tracking-tight text-accent sm:text-4xl"
        aria-hidden
      >
        {prefix}
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-semibold text-fg">{stat.label}</p>
      <p className="mt-1 text-xs leading-relaxed text-subtle">{stat.detail}</p>
    </div>
  );
}
