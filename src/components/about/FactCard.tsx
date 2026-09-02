import type { ReactNode } from "react";

interface FactCardProps {
  /** All-caps accent heading, e.g. `Education`. */
  title: string;
  children: ReactNode;
}

/**
 * Card shell for the factual panels in the about section.
 *
 * Education and languages share an identical frame and heading treatment, so
 * the styling lives here rather than being repeated in both.
 */
export function FactCard({ title, children }: FactCardProps) {
  return (
    <div className="surface-card h-full p-6">
      <h3 className="font-mono text-xs font-semibold tracking-[0.18em] text-accent uppercase">
        {title}
      </h3>
      {children}
    </div>
  );
}
