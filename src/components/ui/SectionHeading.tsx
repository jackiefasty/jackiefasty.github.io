import { Reveal } from "@/components/ui/Reveal";

interface SectionHeadingProps {
  /** All-caps kicker above the title, e.g. `EXPERIENCE`. */
  eyebrow: string;
  title: string;
  /** Optional supporting line under the title. */
  description?: string;
}

/** Consistent eyebrow, title and description block opening each section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-2xl sm:mb-16">
      <p className="mb-3 flex items-center gap-3 font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase">
        <span className="h-px w-8 bg-accent/50" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </Reveal>
  );
}
