"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import Badge from "@/components/ui/Badge";

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-bg">
      <BackgroundGrid />
      <Container className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Badge tone="dark">Track record</Badge>
          <h1 className="max-w-2xl font-display text-4xl font-semibold sm:text-5xl">
            28+ projects, five disciplines.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[#A9B6C0]">
            From hospitals and university buildings to luxury villas and beachfront
            fit-outs &mdash; filter by job type to see where each trade has been put
            to work.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
