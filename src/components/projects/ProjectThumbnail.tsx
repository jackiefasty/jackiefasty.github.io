import type { Project } from "@/lib/types";

/**
 * Card media area for a project.
 *
 * Projects with a screenshot show it. The rest get a slim decorative band
 * rather than a placeholder mockup: inventing a fake UI for work with no
 * public interface would misrepresent it, and a full-height empty panel reads
 * as a broken image.
 */
export function ProjectThumbnail({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-16/9 overflow-hidden border-b border-border bg-surface-raised">
        {/* Static export disables the image optimizer, so a plain img is used. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
    );
  }

  return (
    <div
      className="relative h-24 overflow-hidden border-b border-border bg-surface-raised"
      aria-hidden
    >
      <div className="backdrop-grid absolute inset-0 opacity-70" />
      <div className="absolute -bottom-20 left-1/2 size-56 -translate-x-1/2 rounded-full bg-accent/12 blur-3xl" />
    </div>
  );
}
