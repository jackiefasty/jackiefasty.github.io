"use client";

import { useEffect, useRef } from "react";

import { ButtonLink } from "@/components/ui/Button";
import {
  CloseIcon,
  ExternalLinkIcon,
  GithubIcon,
} from "@/components/ui/Icon";
import { TechTagList } from "@/components/ui/TechTag";
import type { Project } from "@/lib/types";

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}

/**
 * Modal presenting a project's full write-up, links and screenshots.
 *
 * Built on the native `<dialog>` element so focus trapping, Escape handling
 * and inert backgrounding come from the platform rather than custom key
 * handlers. `showModal` is called imperatively because that behaviour is not
 * available declaratively via the `open` attribute.
 */
export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (project && !dialog.open) {
      dialog.showModal();
    } else if (!project && dialog.open) {
      dialog.close();
    }
  }, [project]);

  // Keep background scroll locked for as long as a project is open.
  useEffect(() => {
    if (!project) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        // The backdrop is part of the dialog box, so a click landing on the
        // element itself rather than its content means "outside".
        if (event.target === dialogRef.current) {
          onClose();
        }
      }}
      className="m-auto w-[min(46rem,calc(100vw-2rem))] rounded-2xl border border-border bg-surface p-0 text-fg backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      aria-labelledby="project-dialog-title"
    >
      {project && (
        <div className="max-h-[85svh] overflow-y-auto">
          <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-surface/95 px-6 py-5 backdrop-blur">
            <div>
              <p className="font-mono text-xs text-subtle">
                {project.period} · {project.category}
              </p>
              <h3
                id="project-dialog-title"
                className="mt-1.5 text-xl font-semibold"
              >
                {project.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-fg"
              aria-label="Close project details"
            >
              <CloseIcon width={17} height={17} />
            </button>
          </div>

          <div className="space-y-5 px-6 py-6">
            {project.details.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-sm leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}

            <TechTagList items={project.tech} />

            {project.gallery && project.gallery.length > 0 && (
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.gallery.map((src) => (
                  <li key={src}>
                    {/* Static export disables the image optimizer. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      decoding="async"
                      className="w-full rounded-lg border border-border"
                    />
                  </li>
                ))}
              </ul>
            )}

            {(project.repo || project.demo) && (
              <div className="flex flex-wrap gap-3 pt-1">
                {project.demo && (
                  <ButtonLink href={project.demo}>
                    <ExternalLinkIcon width={16} height={16} />
                    Live demo
                  </ButtonLink>
                )}
                {project.repo && (
                  <ButtonLink href={project.repo} variant="secondary">
                    <GithubIcon width={16} height={16} />
                    View code
                  </ButtonLink>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
