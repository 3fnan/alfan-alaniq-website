import { cn } from "@/lib/utils";

interface BlurCircleProps {
  className?: string;
  color?: string;
}

/** Decorative soft-focus glow used behind hero/section content. */
export default function BlurCircle({ className, color = "#C9A463" }: BlurCircleProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full opacity-20 blur-3xl", className)}
      style={{ background: color, width: 420, height: 420 }}
    />
  );
}
