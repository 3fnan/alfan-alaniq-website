"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

/** Animated stat number that counts up once it scrolls into view. */
export default function Counter({ value, suffix = "", label, className }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 24, stiffness: 90 });
  const rounded = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  return (
    <div ref={ref} className={className}>
      <div className="font-display text-3xl font-semibold text-gold-light">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <div className="mt-1 text-xs text-[#A9B6C0]">{label}</div>
    </div>
  );
}
