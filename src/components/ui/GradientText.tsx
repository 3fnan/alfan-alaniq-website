import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
