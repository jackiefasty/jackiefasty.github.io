import type { NextConfig } from "next";

/**
 * Next.js configuration for a fully static GitHub Pages deployment.
 *
 * The site is published as a GitHub user site (jackiefasty.github.io), which is
 * served from the domain root, so no `basePath` or `assetPrefix` is required.
 * `output: "export"` emits a static bundle into `out/`, which the deploy
 * workflow uploads as the Pages artifact. Next's image optimizer requires a
 * server, so it is disabled in favour of plain `<img>`-style output.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
