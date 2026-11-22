"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatProps {
  value: string;
  label: string;
  tone?: "light" | "dark";
  /** Count up from zero when it scrolls into view. Off for years. */
  count?: boolean;
  className?: string;
}

export default function Stat({ value, label, tone = "dark", count = true, className }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.25 });
  const reduce = useReducedMotion();
  const match = value.match(/^(\d+)(.*)$/);
  const canCount = count && !reduce && !!match;
  const [shown, setShown] = useState(value);

  useEffect(() => {
    if (!canCount || !match) return;
    const target = Number(match[1]);
    const suffix = match[2];
    // Only count when it comes into view. Leaving the screen keeps the final
    // number, so it never sits at zero half-visible at the edge.
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setShown(`${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, canCount, value]);

  return (
    <div ref={ref} className={className}>
      <div
        className={cn(
          "font-display text-4xl font-semibold tabular-nums",
          tone === "dark" ? "text-gold-light" : "text-navy"
        )}
      >
        {shown}
      </div>
      <div className={cn("mt-1 text-sm", tone === "dark" ? "text-on-dark-muted" : "text-steel")}>{label}</div>
    </div>
  );
}
