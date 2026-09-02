import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-bg hover:bg-accent-soft shadow-lg shadow-accent/20 hover:shadow-accent/30",
  secondary:
    "border border-border bg-surface/70 text-fg hover:border-accent/60 hover:bg-surface-raised",
  ghost: "text-muted hover:text-fg hover:bg-surface-raised",
};

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  children: ReactNode;
}

/**
 * Anchor styled as a button.
 *
 * Every call to action on the site is a link, whether to a section, a mailto,
 * or an external profile, so there is no `<button>` variant. Links to other
 * origins get `target="_blank"` and `rel="noreferrer"` automatically.
 */
export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5",
        variantStyles[variant],
        className,
      )}
      {...(isExternal
        ? { target: "_blank", rel: "noreferrer noopener" }
        : null)}
      {...props}
    >
      {children}
    </a>
  );
}
