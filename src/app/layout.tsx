import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { profile } from "@/content/profile";
import { themeInitScript } from "@/lib/theme";

// Self-hosted at build time by next/font, so no runtime request to Google.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const description =
  "Senior software engineer specialising in real-time video: three years on Google Meet's Video team tuning VP8/VP9/AV1 codecs, WebRTC internals and C++/Python media pipelines at global scale.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name}: ${profile.role}`,
    template: `%s: ${profile.name}`,
  },
  description,
  keywords: [
    "Borja Javierre",
    "video systems engineer",
    "WebRTC engineer",
    "real-time communications",
    "video codecs",
    "AV1",
    "VP9",
    "libwebrtc",
    "FFmpeg",
    "GStreamer",
    "C++",
    "Python",
    "senior software engineer",
    "Barcelona",
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: profile.siteUrl,
    siteName: `${profile.name}: Portfolio`,
    title: `${profile.name}: ${profile.role}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name}: ${profile.role}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#060a11" },
    { media: "(prefers-color-scheme: light)", color: "#fafbfd" },
  ],
};

/**
 * Root layout: fonts, metadata, theme bootstrap and the page chrome.
 *
 * `suppressHydrationWarning` is required on `<html>` because the inline theme
 * script mutates `data-theme` before React hydrates.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
