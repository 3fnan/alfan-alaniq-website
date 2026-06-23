"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
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
    <section className="py-16">
      <Container>
        <div className="mb-10 flex flex-wrap gap-2.5">
          {projectFilters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActive(filter.value)}
              className={cn(
                "rounded-full border px-4 py-2 font-mono text-[11.5px] uppercase tracking-wide transition-colors",
                active === filter.value
                  ? "border-navy bg-navy text-gold-light"
                  : "border-navy/10 bg-white text-steel hover:border-navy/30"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="overflow-hidden border border-navy/10">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-navy">
                <th className="px-4 py-3 text-left font-mono text-[11.5px] uppercase tracking-wide text-steel">No.</th>
                <th className="px-4 py-3 text-left font-mono text-[11.5px] uppercase tracking-wide text-steel">Project</th>
                <th className="px-4 py-3 text-left font-mono text-[11.5px] uppercase tracking-wide text-steel">Job Description</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((project, i) => (
                <motion.tr
                  key={project.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.02 }}
                  className="border-b border-navy/10 hover:bg-bg-warm/60"
                >
                  <td className="px-4 py-3.5 font-mono text-xs text-steel">
                    {String(project.id).padStart(2, "0")}
                  </td>
                  <td className="px-4 py-3.5 text-[14.5px] text-ink">{project.name}</td>
                  <td className="px-4 py-3.5">
                    <span className="inline-block rounded-full bg-gold/15 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wide text-[#8A6A2E]">
                      {project.jobDescription}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
