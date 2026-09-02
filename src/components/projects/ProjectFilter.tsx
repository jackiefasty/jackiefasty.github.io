"use client";

import { cn } from "@/lib/cn";

interface ProjectFilterProps {
  /** Category labels, already prefixed with the `All` option. */
  options: string[];
  active: string;
  onChange: (option: string) => void;
}

/**
 * Segmented control filtering the project grid by category.
 *
 * Rendered as a radio group rather than a list of buttons so keyboard users get
 * arrow-key navigation and screen readers announce the current selection.
 */
export function ProjectFilter({
  options,
  active,
  onChange,
}: ProjectFilterProps) {
  return (
    <div
      role="radiogroup"
      aria-label="Filter projects by category"
      className="mb-10 flex flex-wrap gap-2"
    >
      {options.map((option) => (
        <button
          key={option}
          type="button"
          role="radio"
          aria-checked={active === option}
          onClick={() => onChange(option)}
          className={cn(
            "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200",
            active === option
              ? "border-accent/50 bg-accent/10 text-accent"
              : "border-border bg-surface/60 text-muted hover:border-accent/40 hover:text-fg",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
