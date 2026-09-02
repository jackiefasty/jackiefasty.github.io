import type { MetadataRoute } from "next";

import { profile } from "@/content/profile";

// Required under `output: export` so sitemap.xml is emitted at build time.
export const dynamic = "force-static";

/**
 * Sitemap for the single-page site.
 *
 * `next build` writes this to `out/sitemap.xml` during the static export, so
 * `lastModified` records the build date.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${profile.siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
