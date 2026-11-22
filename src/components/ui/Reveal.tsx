"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Distance to travel up, in px. */
  y?: number;
  as?: "div" | "li" | "article";
}

/** Fades and lifts content into place each time it scrolls into view. */
export default function Reveal({ children, delay = 0, className, y = 24, as = "div" }: RevealProps) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </Tag>
  );
}
