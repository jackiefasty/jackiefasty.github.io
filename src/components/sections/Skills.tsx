import { SkillCategoryCard } from "@/components/skills/SkillCategory";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/content/skills";

/**
 * Skills section: a grid of categories mirroring the CV's own groupings.
 *
 * Grouping by domain rather than listing a flat wall of logos keeps the video
 * and media specialism visible as the centre of gravity.
 */
export function Skills() {
  return (
    <section id="skills" className="section-y bg-surface/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Tech stack & tools"
          description="Grouped the way I actually use them: real-time media at the core, with the testing, backend and AI tooling that surrounds it."
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal
              as="li"
              key={category.id}
              index={index % 3}
              className="h-full"
            >
              <SkillCategoryCard category={category} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
