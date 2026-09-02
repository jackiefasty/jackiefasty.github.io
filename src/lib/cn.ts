/**
 * Joins class names, dropping falsy values.
 *
 * A deliberately minimal alternative to `clsx`: the codebase only ever needs
 * conditional concatenation, not Tailwind conflict resolution.
 *
 * @param classes - Class name fragments; `false`, `null` and `undefined` are skipped.
 * @returns The surviving fragments joined by a single space.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
