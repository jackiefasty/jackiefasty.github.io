"use client";

import { ProjectThumbnail } from "@/components/projects/ProjectThumbnail";
import { ExternalLinkIcon, GithubIcon } from "@/components/ui/Icon";
import { TechTagList } from "@/components/ui/TechTag";
import { cn } from "@/lib/cn";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  /** Opens the detail dialog for this project. */
  onOpen: (project: Project) => void;
}

const actionStyles =
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors";

/**
 * Project card: thumbnail, summary, tech tags and actions.
 *
 * The card is an `article` with a real `h3` title rather than one large
 * button. That keeps the document outline meaningful, keeps the tech tag list
 * valid (a `ul` cannot live inside a `button`), and gives the reader three
 * distinct destinations instead of one ambiguous click target.
 */
export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "surface-card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/40",
        project.featured && "border-accent/25",
      )}
    >
      <ProjectThumbnail project={project} />

      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-3 font-mono text-xs text-subtle">
          {project.period}
          <span className="size-1 rounded-full bg-subtle" aria-hidden />
          {project.category}
        </p>

        <h3 className="mt-3 text-lg font-semibold text-fg transition-colors group-hover:text-accent">
          {project.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>

        <TechTagList items={project.tech} limit={6} className="mt-5" />
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-border px-6 py-4">
        <button
          type="button"
          onClick={() => onOpen(project)}
          className={cn(
            actionStyles,
            "border-border text-muted hover:border-accent/50 hover:text-accent",
          )}
          aria-label={`Read more about ${project.title}`}
        >
          Details
        </button>

        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              actionStyles,
              "border-border text-muted hover:border-accent/50 hover:text-accent",
            )}
            aria-label={`${project.title} source code on GitHub`}
          >
            <GithubIcon width={14} height={14} />
            Code
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              actionStyles,
              "border-accent/40 bg-accent/10 text-accent hover:bg-accent/20",
            )}
            aria-label={`${project.title} live demo`}
          >
            <ExternalLinkIcon width={14} height={14} />
            Live demo
          </a>
        )}
      </div>
    </article>
  );
}
