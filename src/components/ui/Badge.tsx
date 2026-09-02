import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface BadgeProps {
  children: ReactNode;
  /** `accent` for availability and current-role markers, `neutral` otherwise. */
  tone?: "accent" | "neutral";
  className?: string;
}

/** Small pill for statuses such as availability or employment type. */
export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        tone === "accent"
          ? "border-accent/35 bg-accent/10 text-accent"
          : "border-border bg-surface-raised text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Availability pill with a pulsing indicator dot. */
export function AvailabilityBadge({ children }: { children: ReactNode }) {
  return (
    <Badge tone="accent">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
        <span className="relative inline-flex size-2 rounded-full bg-accent" />
      </span>
      {children}
    </Badge>
  );
}
