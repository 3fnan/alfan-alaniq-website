"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "./Reveal";

interface SectionHeadingProps {
  title: ReactNode;
  description?: string;
  tone?: "light" | "dark";
  className?: string;
}

/** Section title with a short gold rule that draws in on scroll. */
export default function SectionHeading({ title, description, tone = "light", className }: SectionHeadingProps) {
  return (
    <motion.div
      className={cn("mb-10 max-w-2xl", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.span
        aria-hidden
        className="mb-5 block h-[3px] w-12 origin-left bg-gold"
        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
        transition={{ duration: 0.6, ease: EASE }}
      />
      <motion.h2
        className={cn(
          "text-balance font-display text-[34px] font-bold leading-[1.02] tracking-[-0.015em] sm:text-[46px]",
          tone === "dark" ? "text-bg" : "text-navy"
        )}
        variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className={cn(
            "mt-3 text-base leading-relaxed sm:text-[17px]",
            tone === "dark" ? "text-on-dark-muted" : "text-steel"
          )}
          variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
