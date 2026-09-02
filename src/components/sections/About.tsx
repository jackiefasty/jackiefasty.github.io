import { EducationCard } from "@/components/about/EducationCard";
import { LanguagesCard } from "@/components/about/LanguagesCard";
import { ProfilePhoto } from "@/components/about/ProfilePhoto";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";

/**
 * About section: the senior narrative, the photo, and the factual panels.
 *
 * Laid out as two bands rather than a prose column beside a tall stacked rail.
 * Stacking the photo, education and languages vertically made the rail much
 * taller than the prose, leaving a large empty block to its left; education
 * and languages now sit side by side underneath, spanning the full width.
 */
export function About() {
  return (
    <section id="about" className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="About"
          title="Real-time video, from codec internals to production infrastructure"
        />

        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div className="space-y-5">
            {profile.summary.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 32)} index={index}>
                <p className="text-base leading-relaxed text-muted sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal index={1} className="lg:pt-1">
            <ProfilePhoto />
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14">
          <Reveal className="h-full">
            <EducationCard />
          </Reveal>
          <Reveal index={1} className="h-full">
            <LanguagesCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
