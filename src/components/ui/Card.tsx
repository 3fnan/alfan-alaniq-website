import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "border border-navy/10 bg-white p-7 transition-colors duration-200 hover:bg-bg-warm/60",
        className
      )}
    >
      {children}
    </div>
  );
}
