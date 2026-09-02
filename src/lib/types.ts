/**
 * Shared content types.
 *
 * Every section of the site renders from the typed data in `src/content`, so
 * these interfaces are the contract between copy and presentation: editing the
 * CV content never requires touching a component.
 */

/** A single navigable section, used by the header nav and scroll-spy. */
export interface NavItem {
  /** DOM id of the target section, without the leading `#`. */
  id: string;
  label: string;
}

/** An external or mailto link rendered as an icon/button pair. */
export interface SocialLink {
  label: string;
  href: string;
  /** Key resolved against the icon registry in `components/ui/Icon.tsx`. */
  icon: "github" | "linkedin" | "mail" | "document" | "phone";
}

/** A headline metric shown in the hero stats strip. */
export interface Stat {
  /** Numeric portion used by the count-up animation. */
  value: number;
  /** Rendered before the number, e.g. `~`. */
  prefix?: string;
  /** Rendered after the number, e.g. `+` or `%`. */
  suffix?: string;
  label: string;
  /** Short attribution so each figure is traceable to the CV. */
  detail: string;
}

/** Identity, positioning and contact details. */
export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  availability: string;
  /** Short paragraphs for the about section, in reading order. */
  summary: string[];
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  /** Path to the CV inside `public/`. */
  resume: string;
  /** Canonical site origin, used for metadata and JSON-LD. */
  siteUrl: string;
}

/** One group of related technologies in the skills grid. */
export interface SkillCategory {
  id: string;
  title: string;
  /** One-line framing of why this group matters. */
  blurb: string;
  skills: string[];
}

/** A role in the experience timeline. */
export interface Experience {
  id: string;
  role: string;
  company: string;
  /** Employer of record when it differs from where the work happened. */
  client?: string;
  location: string;
  /** Human-readable range, e.g. `Sep 2023 – May 2026`. */
  period: string;
  /** ISO start date, used for sorting and JSON-LD. */
  start: string;
  /** ISO end date, or `null` while current. */
  end: string | null;
  type: "Full-time" | "Consultant" | "Internship" | "Part-time" | "Research";
  /** Context paragraph shown above the achievement bullets. */
  summary: string;
  /** Quantified achievements, phrased result-first. */
  achievements: string[];
  tech: string[];
  /** Renders a highlighted accent treatment for the flagship role. */
  featured?: boolean;
}

/** Project categories driving the filter control. */
export type ProjectCategory =
  | "Real-Time Media"
  | "AI Tooling"
  | "Data Visualisation"
  | "Machine Learning"
  | "Research";

/** A project card, optionally with a detail dialog. */
export interface Project {
  id: string;
  title: string;
  /** One-sentence summary shown on the card. */
  summary: string;
  /** Longer paragraphs shown in the detail dialog. */
  details: string[];
  category: ProjectCategory;
  tech: string[];
  /** Period label, e.g. `2026` or `2022`. */
  period: string;
  repo?: string;
  demo?: string;
  /** Card thumbnail path inside `public/`. */
  image?: string;
  /** Additional screenshots shown in the dialog. */
  gallery?: string[];
  /** Featured projects render first, at larger size. */
  featured?: boolean;
  /** Groups older coursework under a separate heading. */
  archive?: boolean;
}

/** A degree in the education list. */
export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
}

/** A spoken language with its proficiency level. */
export interface Language {
  name: string;
  level: string;
}
