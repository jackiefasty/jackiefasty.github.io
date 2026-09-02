import { TimelineItem } from "@/components/experience/TimelineItem";
import { ButtonLink } from "@/components/ui/Button";
import { DocumentIcon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/content/experience";
import { profile } from "@/content/profile";

/**
 * Experience section: the full professional timeline, newest first.
 *
 * A single absolutely positioned rule runs behind the list and each item draws
 * its own marker onto it, so the spine stays continuous regardless of how tall
 * individual entries grow.
 */
export function Experience() {
  return (
    <section id="experience" className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="Professional journey"
          description="Eight roles across real-time media, streaming, payments and broadcast — with the measurable outcome of each one stated first."
        />

        <div className="relative">
          <span
            className="absolute top-2 bottom-2 left-0 w-px bg-gradient-to-b from-accent/50 via-border to-transparent"
            aria-hidden
          />

          <ol className="space-y-6">
            {experiences.map((experience, index) => (
              <Reveal as="li" key={experience.id} index={Math.min(index, 2)}>
                <TimelineItem experience={experience} />
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="mt-10">
          <ButtonLink href={profile.resume} variant="secondary">
            <DocumentIcon width={17} height={17} />
            Full résumé (PDF)
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
