"use client";

import { useEffect } from "react";

import { CloseIcon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/lib/types";

interface MobileNavProps {
  items: NavItem[];
  open: boolean;
  activeId: string;
  onClose: () => void;
}

/**
 * Full-screen section menu for small viewports.
 *
 * Locks background scrolling while open and closes on Escape. The panel stays
 * mounted only when open, so its links are absent from the tab order otherwise.
 */
export function MobileNav({ items, open, activeId, onClose }: MobileNavProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-md md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <div className="flex h-16 items-center justify-end px-5">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted hover:text-fg"
          aria-label="Close navigation"
        >
          <CloseIcon />
        </button>
      </div>
      <nav className="px-8 pt-6">
        <ul className="flex flex-col gap-1">
          {items.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={onClose}
                className={cn(
                  "flex items-baseline gap-4 border-b border-border/60 py-4 text-2xl font-semibold transition-colors",
                  activeId === item.id
                    ? "text-accent"
                    : "text-fg hover:text-accent",
                )}
              >
                <span className="font-mono text-xs text-subtle">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
