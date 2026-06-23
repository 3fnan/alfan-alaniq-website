import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Badge from "./Badge";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Badge tone={tone}>{eyebrow}</Badge>
      <h2
        className={cn(
          "font-display text-[28px] font-semibold sm:text-4xl",
          tone === "dark" ? "text-bg" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-3.5 text-[16.5px]", tone === "dark" ? "text-[#A9B6C0]" : "text-steel")}>
          {description}
        </p>
      )}
    </div>
  );
}
