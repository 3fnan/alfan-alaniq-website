"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DuctDividerProps {
  className?: string;
}

/** Ridged duct-seam line. Used once, under the home hero. */
export default function DuctDivider({ className }: DuctDividerProps) {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className={cn("w-full overflow-hidden leading-none", className)}>
      <svg viewBox="0 0 1200 26" preserveAspectRatio="none" className="block h-[26px] w-full text-gold">
        <motion.path
          d="M0,13 L40,13 L46,4 L54,22 L62,4 L70,22 L78,4 L86,22 L94,13 L1200,13"
          stroke="currentColor"
          strokeWidth={1.4}
          fill="none"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
