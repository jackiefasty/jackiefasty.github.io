"use client";

import { useEffect, useState } from "react";

import { MobileNav } from "@/components/layout/MobileNav";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { MenuIcon } from "@/components/ui/Icon";
import { navItems, profile } from "@/content/profile";
import { cn } from "@/lib/cn";
import { useActiveSection } from "@/lib/useActiveSection";

const sectionIds = navItems.map((item) => item.id);

/**
 * Sticky site header with scroll-spy section navigation.
 *
 * The bar is transparent over the hero and gains a border and blurred
 * background once the page scrolls, so it never competes with the headline.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-bg/80 backdrop-blur-lg"
            : "border-b border-transparent",
        )}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <a
            href="#top"
            className="font-mono text-sm font-semibold tracking-tight text-fg transition-colors hover:text-accent"
          >
            {profile.name.toLowerCase().replace(" ", ".")}
          </a>

          <nav aria-label="Sections" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={activeId === item.id ? "true" : undefined}
                    className={cn(
                      "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200",
                      activeId === item.id
                        ? "bg-accent/10 text-accent"
                        : "text-muted hover:text-fg",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden rounded-full border border-border bg-surface/70 px-4 py-1.5 text-sm font-semibold text-fg transition-colors hover:border-accent/60 hover:text-accent sm:inline-flex"
            >
              Résumé
            </a>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted hover:text-fg md:hidden"
              aria-label="Open navigation"
              aria-expanded={menuOpen}
            >
              <MenuIcon width={18} height={18} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        items={navItems}
        open={menuOpen}
        activeId={activeId}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
