import { Badge } from "@/components/ui/Badge";
import { TechTagList } from "@/components/ui/TechTag";
import { cn } from "@/lib/cn";
import type { Experience } from "@/lib/types";

/**
 * One role on the experience timeline.
 *
 * The marker dot is positioned on the shared vertical rule drawn by the parent
 * list. Featured roles get an accent ring so the Google Meet tenure reads as
 * the anchor of the timeline without needing extra copy to say so.
 */
export function TimelineItem({ experience }: { experience: Experience }) {
  return (
    <article className="relative pl-10 sm:pl-14">
      <span
        className={cn(
          "absolute left-0 top-2 flex size-4 -translate-x-[7px] items-center justify-center rounded-full border-2",
          experience.featured
            ? "border-accent bg-accent ring-4 ring-accent/15"
            : "border-border bg-surface-raised",
        )}
        aria-hidden
      />

      <div
        className={cn(
          "surface-card p-6 transition-colors duration-300 hover:border-accent/40",
          experience.featured && "border-accent/30",
        )}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-fg">
              {experience.role}
            </h3>
            <p className="mt-1 text-sm font-medium text-accent">
              {experience.company}
              {experience.client && (
                <span className="text-muted">
                  {" "}
                  — embedded at {experience.client}
                </span>
              )}
            </p>
          </div>
          <Badge tone={experience.featured ? "accent" : "neutral"}>
            {experience.type}
          </Badge>
        </div>

        <p className="mt-2 font-mono text-xs text-subtle">
          {experience.period} · {experience.location}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-muted">
          {experience.summary}
        </p>

        <ul className="mt-5 space-y-3">
          {experience.achievements.map((achievement) => (
            <li
              key={achievement.slice(0, 40)}
              className="flex gap-3 text-sm leading-relaxed text-muted"
            >
              <span
                className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-accent/70"
                aria-hidden
              />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>

        <TechTagList items={experience.tech} className="mt-5" />
      </div>
    </article>
  );
}
