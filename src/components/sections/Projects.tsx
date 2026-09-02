"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectDialog } from "@/components/projects/ProjectDialog";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/content/projects";
import type { Project } from "@/lib/types";

const ALL = "All";

/** Filter options, derived from the content so a new category needs no edit here. */
const filterOptions = [
  ALL,
  ...Array.from(new Set(projects.map((project) => project.category))),
];

/**
 * Projects section: current work first, earlier coursework grouped separately.
 *
 * The `archive` flag on a project decides which of the two grids it lands in,
 * so the master's projects support the timeline without competing with the
 * real-time media work for attention.
 */
export function Projects() {
  const [filter, setFilter] = useState(ALL);
  const [selected, setSelected] = useState<Project | null>(null);

  const { current, archived } = useMemo(() => {
    const matching =
      filter === ALL
        ? projects
        : projects.filter((project) => project.category === filter);

    return {
      current: matching.filter((project) => !project.archive),
      archived: matching.filter((project) => project.archive),
    };
  }, [filter]);

  return (
    <section id="projects" className="section-y bg-surface/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          description="Self-directed work in real-time media and AI tooling, followed by selected master's projects from KTH."
        />

        <ProjectFilter
          options={filterOptions}
          active={filter}
          onChange={setFilter}
        />

        {current.length > 0 && (
          <ul className="grid gap-6 md:grid-cols-2">
            {current.map((project, index) => (
              <Reveal
                as="li"
                key={project.id}
                index={index % 2}
                className="h-full"
              >
                <ProjectCard project={project} onOpen={setSelected} />
              </Reveal>
            ))}
          </ul>
        )}

        {archived.length > 0 && (
          <>
            <Reveal className="mt-16 mb-8">
              <h3 className="flex items-center gap-4 font-mono text-xs font-semibold tracking-[0.2em] text-subtle uppercase">
                Earlier work
                <span className="h-px flex-1 bg-border" aria-hidden />
              </h3>
            </Reveal>

            <ul className="grid gap-6 md:grid-cols-2">
              {archived.map((project, index) => (
                <Reveal
                  as="li"
                  key={project.id}
                  index={index % 2}
                  className="h-full"
                >
                  <ProjectCard project={project} onOpen={setSelected} />
                </Reveal>
              ))}
            </ul>
          </>
        )}

        {current.length === 0 && archived.length === 0 && (
          <p className="text-sm text-muted">
            No projects in this category yet.
          </p>
        )}
      </div>

      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
