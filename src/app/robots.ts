import type { MetadataRoute } from "next";

import { profile } from "@/content/profile";

// Required under `output: export` so robots.txt is emitted at build time.
export const dynamic = "force-static";

/** Allows all crawlers and points them at the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${profile.siteUrl}/sitemap.xml`,
  };
}
