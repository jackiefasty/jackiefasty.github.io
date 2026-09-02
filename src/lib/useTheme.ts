"use client";

import { useCallback, useSyncExternalStore } from "react";

import { applyTheme, readTheme, type Theme } from "@/lib/theme";

/**
 * Subscribes to changes of the `data-theme` attribute on `<html>`.
 *
 * @param onChange - Called whenever the attribute changes.
 * @returns An unsubscribe function.
 */
function subscribe(onChange: () => void): () => void {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  return () => observer.disconnect();
}

/** Server and hydration snapshot, matching the `data-theme` set in the layout. */
function getServerSnapshot(): Theme {
  return "dark";
}

/**
 * Reads and toggles the active theme.
 *
 * The theme is owned by the DOM — an inline script sets it before React loads —
 * so it is consumed here as an external store rather than mirrored into React
 * state. That keeps a single source of truth and avoids a render pass that
 * would briefly disagree with what is on screen.
 *
 * @returns The active theme and a function that switches to the other one.
 */
export function useTheme(): { theme: Theme; toggleTheme: () => void } {
  const theme = useSyncExternalStore(
    subscribe,
    readTheme,
    getServerSnapshot,
  );

  const toggleTheme = useCallback(() => {
    applyTheme(readTheme() === "dark" ? "light" : "dark");
  }, []);

  return { theme, toggleTheme };
}
