import { ImageResponse } from "next/og";

import { profile, stats } from "@/content/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name}: ${profile.role}`;

// Required under `output: export` so the PNG is generated at build time.
export const dynamic = "force-static";

/**
 * Social share card, rendered to a PNG at build time.
 *
 * `next build` evaluates this route during the static export, so the resulting
 * image ships as a plain file and needs no server at request time. Styling is
 * restricted to the subset of CSS Satori supports, hence the inline styles and
 * explicit flex layout.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #060a11 0%, #101c2c 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 22,
              color: "#22d3ee",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            <div style={{ width: 48, height: 3, background: "#22d3ee" }} />
            {profile.location}
          </div>

          <div
            style={{
              marginTop: 28,
              fontSize: 82,
              fontWeight: 700,
              color: "#ebf2fa",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {profile.name}
          </div>

          <div
            style={{
              marginTop: 22,
              fontSize: 36,
              fontWeight: 600,
              color: "#5eead4",
              lineHeight: 1.25,
              maxWidth: 960,
            }}
          >
            {profile.role}
          </div>
        </div>

        <div style={{ display: "flex", gap: 56 }}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div style={{ fontSize: 44, fontWeight: 700, color: "#22d3ee" }}>
                {`${stat.prefix ?? ""}${stat.value}${stat.suffix ?? ""}`}
              </div>
              <div
                style={{
                  marginTop: 6,
                  fontSize: 19,
                  color: "#94a6ba",
                  maxWidth: 210,
                  lineHeight: 1.3,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
