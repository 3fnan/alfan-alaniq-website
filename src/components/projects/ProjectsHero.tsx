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
            300+ Projects Delivered Across the UAE
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[#A9B6C0]">
            Since 2021, we've delivered HVAC, MEP, VRF, ducting and fit-out solutions across healthcare, hospitality, residential, commercial and industrial developments throughout the UAE. Below is a curated selection of representative projects from our portfolio.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
