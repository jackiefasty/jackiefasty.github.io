export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "theme";

/**
 * Inline script that applies the stored theme before first paint.
 *
 * This must run synchronously in `<head>`. Reading `localStorage` from an
 * effect would let the dark default paint first, producing a visible flash for
 * anyone who chose light. Exported as a string for injection via
 * `dangerouslySetInnerHTML` from the root layout, and kept in a server-safe
 * module so the layout does not import a client component just for this.
 */
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    document.documentElement.dataset.theme = theme;
  } catch (error) {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

/**
 * Reads the theme currently applied to the document.
 *
 * @returns The active theme, defaulting to `dark` if the attribute is absent.
 */
export function readTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

/**
 * Applies a theme to the document and persists the choice.
 *
 * @param theme - The theme to activate.
 */
export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;

  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage is unavailable in some private-browsing modes; the in-page
    // toggle still works, it just will not survive a reload.
  }
}
