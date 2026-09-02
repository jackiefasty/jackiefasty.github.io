import { FactCard } from "@/components/about/FactCard";
import { languages } from "@/content/education";

/** Spoken languages with their proficiency level, right-aligned. */
export function LanguagesCard() {
  return (
    <FactCard title="Languages">
      <ul className="mt-5 space-y-2.5">
        {languages.map((language) => (
          <li
            key={language.name}
            className="flex items-baseline justify-between gap-4 text-sm"
          >
            <span className="font-medium text-fg">{language.name}</span>
            <span className="font-mono text-xs text-subtle">
              {language.level}
            </span>
          </li>
        ))}
      </ul>
    </FactCard>
  );
}
