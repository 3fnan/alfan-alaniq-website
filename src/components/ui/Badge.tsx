import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}

/** Small mono label. Use sparingly, only where it carries information. */
export default function Badge({ children, className, tone = "light" }: BadgeProps) {
  return (
    <span
      className={cn(
        "mb-4 inline-block font-mono text-xs",
        tone === "dark" ? "text-gold-light" : "text-gold-ink",
        className
      )}
    >
      {children}
    </span>
  );
}
