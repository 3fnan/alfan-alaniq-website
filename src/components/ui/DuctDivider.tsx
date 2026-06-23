"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DuctDividerProps {
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Signature visual motif: a ridged duct-seam line, referencing the
 * company's own ducting fabrication work. Draws itself in on scroll.
 */
export default function DuctDivider({ tone = "light", className }: DuctDividerProps) {
  const stroke = tone === "dark" ? "#E3C076" : "#C9A463";

  return (
    <div className={cn("w-full overflow-hidden leading-none", className)}>
      <svg viewBox="0 0 1200 26" preserveAspectRatio="none" className="block h-[26px] w-full">
        <motion.path
          d="M0,13 L40,13 L46,4 L54,22 L62,4 L70,22 L78,4 L86,22 L94,13 L1200,13"
          stroke={stroke}
          strokeWidth={1.4}
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
        <motion.circle
          cx={46} cy={4} r={2.2} fill={stroke}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.4, delay: 0.7 }}
        />
        <motion.circle
          cx={86} cy={22} r={2.2} fill={stroke}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.4, delay: 0.7 }}
        />
      </svg>
    </div>
  );
}
