"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { projects, projectFilters } from "@/data/projects";
import type { ProjectFilter } from "@/types";
import { cn } from "@/lib/utils";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";

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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
            >
              <div className="bg-white p-7 flex h-full flex-col rounded-2xl border border-navy/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {/* Project Info */}
                <div>
                  <div className="space-y-4">
                    <h3 className="font-display text-xl font-semibold text-navy">
                      {project.name}
                    </h3>

                    <p className="text-sm text-steel">
                      {project.location}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-navy/10" />

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="inline-block rounded-full bg-gold/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#8A6A2E]">
                    {project.jobDescription}
                  </span>
                  <ArrowUpLeft />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
