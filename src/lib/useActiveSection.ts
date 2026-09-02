"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view, for header scroll-spy.
 *
 * Uses a single `IntersectionObserver` with a top-biased root margin so a
 * section becomes active once it clears the sticky header, and picks the
 * topmost intersecting entry when several qualify at once.
 *
 * @param ids - Section element ids to observe, in document order.
 * @returns The id of the active section, or an empty string above the first one.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-88px 0px -60% 0px", threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
