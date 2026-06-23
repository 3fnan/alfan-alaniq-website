import { cn } from "@/lib/utils";

interface BackgroundGridProps {
  className?: string;
}

/** Subtle technical-blueprint grid backdrop. */
export default function BackgroundGrid({ className }: BackgroundGridProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 opacity-[0.06]", className)}
      style={{
        backgroundImage:
          "linear-gradient(#C9A463 1px, transparent 1px), linear-gradient(90deg, #C9A463 1px, transparent 1px)",
        backgroundSize: "42px 42px",
      }}
    />
  );
}
