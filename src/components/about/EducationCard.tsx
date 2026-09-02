import { FactCard } from "@/components/about/FactCard";
import { education } from "@/content/education";

/** Degrees, newest first, with institution and dates. */
export function EducationCard() {
  return (
    <FactCard title="Education">
      <ul className="mt-5 space-y-5">
        {education.map((entry) => (
          <li key={entry.id}>
            <p className="text-sm font-semibold text-fg">
              {entry.degree}: {entry.field}
            </p>
            <p className="mt-1 text-sm text-muted">{entry.institution}</p>
            <p className="mt-0.5 font-mono text-xs text-subtle">
              {entry.location} · {entry.period}
            </p>
          </li>
        ))}
      </ul>
    </FactCard>
  );
}
