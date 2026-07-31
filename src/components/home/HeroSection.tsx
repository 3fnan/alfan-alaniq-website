"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import BlurCircle from "@/components/ui/BlurCircle";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import Counter from "@/components/ui/Counter";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-light via-navy to-navy-dark pb-16 pt-24 text-bg">
      <BackgroundGrid />
      <BlurCircle className="-right-32 -top-32" />
      <BlurCircle className="bottom-0 left-0" color="#15324E" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-gold-light"
        >
          <span className="h-px w-5 bg-gold-light" />
          Dubai, U.A.E. &mdash; Est. 2021
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl font-display text-4xl leading-tight sm:text-5xl lg:text-[64px]"
        >
          Comfort is multidimensional.{" "}
          <span className="text-gold-light">We engineer every part of it.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 max-w-lg text-lg text-[#C9D2DA]"
        >
          Alfan Al Aniq Technical Services designs, installs and maintains HVAC,
          ducting, MEP and fit-out systems across the Emirates. Built on a
          &ldquo;think together&rdquo; approach to solving the real problems behind a
          building&apos;s comfort.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <Button href="/contact" variant="primary">Request a Quote</Button>
          <Button href="/projects" variant="ghost">View Our Projects</Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-16 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4"
        >
          <div className="bg-navy-dark/60 px-5 py-6"><Counter value={2021} label="Founded in Dubai" /></div>
          <div className="bg-navy-dark/60 px-5 py-6"><Counter value={300} suffix="+" label="Projects delivered" /></div>
          <div className="bg-navy-dark/60 px-5 py-6"><Counter value={40} suffix="+" label="Prestigious clients" /></div>
          <div className="bg-navy-dark/60 px-5 py-6"><Counter value={10} suffix="+" label="Trades on-site" /></div>
        </motion.div>
      </Container>
    </section>
  );
}
