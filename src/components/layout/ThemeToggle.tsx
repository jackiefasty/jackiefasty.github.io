"use client";

import { MoonIcon, SunIcon } from "@/components/ui/Icon";
import { useTheme } from "@/lib/useTheme";

/** Button toggling between the dark and light palettes and persisting the choice. */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface/70 text-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? (
        <MoonIcon width={17} height={17} />
      ) : (
        <SunIcon width={17} height={17} />
      )}
    </button>
  );
}
