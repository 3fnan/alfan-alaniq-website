import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

/** Frosted glass card for use over dark/photographic backgrounds. */
export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-sm border border-white/15 bg-white/[0.06] p-7 backdrop-blur-md",
        className
      )}
    >
      {children}
    </div>
  );
}
