"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { EASE } from "@/components/ui/Reveal";

interface PageHeaderProps {
  /** Short page name shown in the breadcrumb, e.g. "Services". */
  crumb: string;
  /** First part of the headline, heavy white. */
  title: string;
  /** Second part of the headline, light gold. */
  accent?: string;
  intro?: ReactNode;
  /** Photo shown in the cut-corner panel on the right (large screens). */
  image?: string;
  children?: ReactNode;
}

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

/** Header band at the top of every inner page. */
export default function PageHeader({ crumb, title, accent, intro, image, children }: PageHeaderProps) {
  const lines = [
    { text: title, cls: "font-bold text-bg" },
    ...(accent ? [{ text: accent, cls: "font-light text-gold-light" }] : []),
  ];

  return (
    <section className="relative overflow-hidden bg-navy text-bg">
      {image && (
        <motion.div
          aria-hidden
          className="chamfer-lg pointer-events-none absolute bottom-10 right-0 top-10 hidden w-[34vw] max-w-[640px] xl:block"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: EASE }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, delay: 0.15, ease: EASE }}
          >
            <Image src={image} alt="" fill sizes="(min-width: 1280px) 34vw, 1px" className="object-cover" />
          </motion.div>
          {/* Blend the photo's left edge into the navy band. */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/30 to-transparent" />
        </motion.div>
      )}

      <Container className="relative pb-14 pt-12 sm:pb-16 sm:pt-14 xl:pb-20 xl:pt-16">
        <motion.nav aria-label="Breadcrumb" className="text-sm font-medium text-on-dark-muted" {...rise(0)}>
          <Link href="/" className="hover:text-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light">
            Home
          </Link>
          <span className="mx-2 text-on-dark-faint">/</span>
          <span aria-current="page" className="text-on-dark">
            {crumb}
          </span>
        </motion.nav>
        <h1 className="mt-6 max-w-3xl font-display text-[44px] leading-[0.98] tracking-[-0.02em] sm:text-6xl xl:max-w-[46rem] xl:text-[76px]">
          {lines.map((line, i) => (
            <span key={line.text} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className={`block text-balance ${line.cls}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.14, ease: EASE }}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>
        {intro && (
          <motion.p className="mt-7 max-w-2xl text-lg leading-relaxed text-on-dark-muted xl:max-w-[38rem]" {...rise(0.35)}>
            {intro}
          </motion.p>
        )}
        {children && <motion.div className="xl:max-w-[44rem]" {...rise(0.45)}>{children}</motion.div>}
      </Container>

      <motion.div
        aria-hidden
        className="relative z-10 h-[3px] origin-left bg-gold"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
      />
    </section>
  );
}
