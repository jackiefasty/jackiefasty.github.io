import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education, languages } from "@/content/education";
import { profile } from "@/content/profile";

/**
 * About section: the senior narrative, with education and languages alongside.
 *
 * The two-column layout puts prose in the wider column and the factual
 * sidebar — degrees and languages — in a sticky rail on large screens.
 */
export function About() {
  return (
    <section id="about" className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="About"
          title="Real-time video, from codec internals to production infrastructure"
        />

        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div className="space-y-5">
            {profile.summary.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 32)} index={index}>
                <p className="text-base leading-relaxed text-muted sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            <Reveal index={1}>
              <div className="surface-card p-6">
                <h3 className="font-mono text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                  Education
                </h3>
                <ul className="mt-5 space-y-5">
                  {education.map((entry) => (
                    <li key={entry.id}>
                      <p className="text-sm font-semibold text-fg">
                        {entry.degree} — {entry.field}
                      </p>
                      <p className="mt-1 text-sm text-muted">
                        {entry.institution}
                      </p>
                      <p className="mt-0.5 font-mono text-xs text-subtle">
                        {entry.location} · {entry.period}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal index={2}>
              <div className="surface-card p-6">
                <h3 className="font-mono text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                  Languages
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {languages.map((language) => (
                    <li
                      key={language.name}
                      className="flex items-baseline justify-between gap-4 text-sm"
                    >
                      <span className="font-medium text-fg">
                        {language.name}
                      </span>
                      <span className="font-mono text-xs text-subtle">
                        {language.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
