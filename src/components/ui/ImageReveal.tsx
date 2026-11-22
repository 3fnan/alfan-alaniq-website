"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { EASE } from "./Reveal";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Shape of the frame. */
  shape?: "chamfer" | "chamfer-lg" | "none";
}

/**
 * Cut-corner image frame. The image wipes in from the left and settles
 * from a slight zoom when it first scrolls into view.
 *
 * The in-view check sits on the outer wrapper, which is never clipped.
 * Watching the clipped element itself never fires, so the image would
 * stay hidden.
 */
export default function ImageReveal({ children, className, delay = 0, shape = "chamfer" }: ImageRevealProps) {
  return (
    <motion.div
      className={cn("relative", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className={cn("absolute inset-0 overflow-hidden", shape !== "none" && shape)}>
        <motion.div
          className="absolute inset-0"
          variants={{
            hidden: { clipPath: "inset(0 100% 0 0)", scale: 1.12 },
            show: { clipPath: "inset(0 0% 0 0)", scale: 1 },
          }}
          transition={{ duration: 1.1, delay, ease: EASE }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}
