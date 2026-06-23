import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}

export default function Badge({ children, className, tone = "light" }: BadgeProps) {
  return (
    <span
      className={cn(
        "mb-4 inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em]",
        tone === "dark" ? "text-gold-light" : "text-gold",
        className
      )}
    >
      <span className={cn("h-px w-5", tone === "dark" ? "bg-gold-light" : "bg-gold")} />
      {children}
    </span>
  );
}
