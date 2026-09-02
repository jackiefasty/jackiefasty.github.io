import { education } from "@/content/education";
import { experiences } from "@/content/experience";
import { profile } from "@/content/profile";
import { skillCategories } from "@/content/skills";

/**
 * Builds the schema.org `Person` graph for the site.
 *
 * Search engines and LLM-based tools read this to answer "who is this and what
 * do they do", so it mirrors the on-page positioning rather than restating the
 * marketing copy.
 */
function buildPersonSchema() {
  const [currentRole] = experiences;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Borja Javierre Moyano",
    alternateName: profile.name,
    url: profile.siteUrl,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    description: profile.summary[0],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressCountry: "ES",
    },
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: skillCategories.flatMap((category) => category.skills),
    knowsLanguage: ["Spanish", "Catalan", "English", "Swedish"],
    alumniOf: education.map((entry) => ({
      "@type": "CollegeOrUniversity",
      name: entry.institution,
    })),
    worksFor: {
      "@type": "Organization",
      name: currentRole.client ?? currentRole.company,
    },
  };
}

/** Injects the `Person` JSON-LD graph into the document. */
export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: all inputs are local, static content.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildPersonSchema()) }}
    />
  );
}
