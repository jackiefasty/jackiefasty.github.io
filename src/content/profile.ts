import type { NavItem, Profile, SocialLink, Stat } from "@/lib/types";

/**
 * Identity, positioning and contact details.
 *
 * Sourced from the CV in `public/Borja_Javierre_CV.pdf`. The email, LinkedIn
 * URL and location here supersede the values on the previous version of the
 * site, which were stale or malformed.
 */
export const profile: Profile = {
  name: "Borja Javierre",
  role: "Senior Video Systems & Real-Time Communications Engineer",
  tagline:
    "I make real-time video hold up at scale: codecs, WebRTC internals and the media pipelines behind them.",
  location: "Barcelona, Spain",
  availability: "Open to senior and staff engineering roles",
  // 300x375 is the full resolution available from the source photo, so the
  // about section caps the rendered width to avoid upscaling it.
  photo: {
    src: "/borja-javierre.webp",
    alt: "Borja Javierre",
    width: 300,
    height: 375,
  },
  summary: [
    "I spent three years embedded in Google Meet's Video team, tuning C++ and Python media pipelines, VP8/VP9/AV1 codecs and WebRTC internals for a product used by hundreds of millions of people. I was promoted to Senior Engineer after 16 months.",
    "Across five-plus years I have worked the full width of real-time media: FFmpeg and GStreamer pipelines, automated codec regression testing, bandwidth estimation and jitter buffer behaviour, and ML models that predict perceived video quality. More recently I have owned backend and infrastructure end to end: FastAPI services, PostgreSQL migrations and GCP infrastructure as code with Terraform.",
    "I also build with AI rather than around it. I designed a multi-agent development workflow using LLMs, MCP servers and RAG retrieval that became a shared engineering standard on my team, cutting an estimated 20+ engineering hours a month on multi-repository work.",
  ],
  email: "borja.javierre@gmail.com",
  phone: "+46 76 451 40 94",
  github: "https://github.com/jackiefasty",
  linkedin: "https://www.linkedin.com/in/borjajavierre",
  resume: "/Borja_Javierre_CV.pdf",
  siteUrl: "https://jackiefasty.github.io",
};

/** Section anchors, in the order they appear on the page. */
export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

/**
 * Headline metrics for the hero.
 *
 * Each figure maps to a specific CV achievement so it survives scrutiny in an
 * interview; `detail` records that provenance on the card itself.
 */
export const stats: Stat[] = [
  {
    value: 5,
    suffix: "+",
    label: "Years in real-time media",
    detail: "Streaming, WebRTC and backend infrastructure",
  },
  {
    value: 3,
    label: "Years on Google Meet",
    detail: "Video team, hundreds of millions of users",
  },
  {
    value: 30,
    suffix: "%",
    label: "Faster codec test cycles",
    detail: "Automated regression pipeline in Python",
  },
  {
    value: 50,
    suffix: "+",
    label: "Codec test cases added",
    detail: "New VP8 and AV1 coverage",
  },
];

/** Primary contact and profile links. */
export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];
