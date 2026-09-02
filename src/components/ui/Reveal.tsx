import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  /**
   * Position within a group, used to stagger the entrance. Callers usually
   * pass the array index, wrapped to the number of columns.
   */
  index?: number;
  /**
   * `scroll` animates as the element enters the viewport. `load` animates once
   * on page load and is only appropriate above the fold, where a scroll-driven
   * timeline would already be complete. `slide` is `load` without the fade,
   * for Largest Contentful Paint candidates that must paint immediately.
   */
  mode?: "scroll" | "load" | "slide";
  className?: string;
  as?: "div" | "li" | "section" | "article";
}

/**
 * Applies a CSS entrance animation to its children.
 *
 * Purely presentational and JS-free: the content is rendered visible and the
 * animation is layered on by CSS, so nothing depends on hydration and the
 * whole thing collapses to static content under `prefers-reduced-motion` or in
 * browsers without scroll-driven animation support.
 */
const modeClass: Record<NonNullable<RevealProps["mode"]>, string> = {
  scroll: "reveal",
  load: "reveal-load",
  slide: "reveal-slide",
};

export function Reveal({
  children,
  index = 0,
  mode = "scroll",
  className,
  as: Tag = "div",
}: RevealProps) {
  return (
    <Tag
      className={cn(modeClass[mode], className)}
      style={{ "--reveal-index": index } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
