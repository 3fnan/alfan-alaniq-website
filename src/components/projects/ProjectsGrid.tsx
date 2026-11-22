"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { EASE } from "@/components/ui/Reveal";
import { projects, projectFilters } from "@/data/projects";
import type { ProjectFilter } from "@/types";
import { cn } from "@/lib/utils";

export default function ProjectsGrid() {
  const [active, setActive] = useState<ProjectFilter["value"]>("all");

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div role="group" aria-label="Filter projects by type" className="mb-8 flex flex-wrap gap-2">
          {projectFilters.map((filter) => {
            const on = active === filter.value;
            return (
              <button
                key={filter.value}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(filter.value)}
                className={cn(
                  "relative rounded-full border px-4 py-1.5 text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
                  on ? "border-navy text-bg" : "border-navy/20 text-body hover:border-navy/50"
                )}
              >
                {on && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 -z-0 rounded-full bg-navy"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{filter.label}</span>
              </button>
            );
          })}
        </div>

        <p className="mb-3 font-mono text-xs text-steel" aria-live="polite">
          Showing {filtered.length} of {projects.length}
        </p>

        <table className="w-full text-left text-[15px]">
          <thead className="hidden border-b-2 border-navy text-xs text-steel sm:table-header-group">
            <tr>
              <th scope="col" className="py-3 pr-5 font-medium">Project</th>
              <th scope="col" className="px-5 py-3 font-medium">Location</th>
              <th scope="col" className="py-3 pl-5 font-medium">Scope</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence initial={false} mode="popLayout">
              {filtered.map((project, i) => (
                <motion.tr
                  key={project.id}
                  layout
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 12 }}
                  transition={{ duration: 0.35, delay: Math.min(i * 0.02, 0.3), ease: EASE }}
                  className="group block border-b border-navy/10 py-4 transition-colors hover:bg-white sm:table-row sm:py-0"
                >
                  <td className="block font-medium text-navy sm:table-cell sm:py-4 sm:pr-5">
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                      {project.name}
                    </span>
                  </td>
                  <td className="block text-sm text-steel sm:table-cell sm:px-5 sm:py-4 sm:text-[15px]">
                    {project.location}
                  </td>
                  <td className="mt-1 block text-sm text-gold-ink sm:mt-0 sm:table-cell sm:py-4 sm:pl-5 sm:text-[15px]">
                    {project.jobDescription}
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </Container>
    </section>
  );
}
