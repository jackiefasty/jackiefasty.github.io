import { TechTag } from "@/components/ui/TechTag";
import type { SkillCategory as SkillCategoryData } from "@/lib/types";

/** Card listing one skill group: title, framing line and its technologies. */
export function SkillCategoryCard({
  category,
}: {
  category: SkillCategoryData;
}) {
  return (
    <div className="surface-card group h-full p-6 transition-colors duration-300 hover:border-accent/40">
      <h3 className="text-base font-semibold text-fg transition-colors group-hover:text-accent">
        {category.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-subtle">
        {category.blurb}
      </p>
      <ul className="mt-5 flex flex-wrap gap-1.5">
        {category.skills.map((skill) => (
          <li key={skill}>
            <TechTag label={skill} />
          </li>
        ))}
      </ul>
    </div>
  );
}
