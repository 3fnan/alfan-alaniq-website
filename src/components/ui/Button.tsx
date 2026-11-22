import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "whatsapp" | "ghost" | "outline";

const base =
  "group relative inline-flex items-center justify-center gap-2 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none";

/*
 * primary: solid gold, cut-corner shape.
 * ghost / outline: no box at all, a text link with an underline that fills on hover.
 *   ghost is for dark backgrounds, outline for light ones.
 */
const variants: Record<Variant, string> = {
  primary:
    "chamfer-sm bg-gold px-7 py-3.5 text-navy hover:bg-gold-light focus-visible:bg-gold-light focus-visible:underline focus-visible:decoration-2 focus-visible:underline-offset-4",
  whatsapp:
    "chamfer-sm bg-whatsapp px-7 py-3.5 text-navy hover:bg-whatsapp-dark focus-visible:bg-whatsapp-dark focus-visible:underline focus-visible:decoration-2 focus-visible:underline-offset-4",
  ghost:
    "py-2 text-bg hover:text-gold-light focus-visible:text-gold-light focus-visible:ring-2 focus-visible:ring-gold-light",
  outline:
    "py-2 text-navy hover:text-gold-ink focus-visible:text-gold-ink focus-visible:ring-2 focus-visible:ring-gold",
};

const underline: Record<Exclude<Variant, "primary" | "whatsapp">, string> = {
  ghost: "bg-white/30 after:bg-gold-light",
  outline: "bg-navy/25 after:bg-gold",
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  /** Show the sliding arrow. Defaults to on. */
  arrow?: boolean;
}

type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = ButtonAsButton | ButtonAsLink;

function Inner({ children, variant, arrow }: { children: ReactNode; variant: Variant; arrow: boolean }) {
  return (
    <>
      {children}
      {arrow && (
        <ArrowRight
          size={16}
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
      {(variant === "ghost" || variant === "outline") && (
        <span
          aria-hidden
          className={cn(
            "absolute bottom-0 left-0 h-px w-full after:absolute after:inset-0 after:origin-left after:scale-x-0 after:transition-transform after:duration-500 group-hover:after:scale-x-100",
            underline[variant]
          )}
        />
      )}
    </>
  );
}

export default function Button({ variant = "primary", className, arrow = true, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className);
  const content = (
    <Inner variant={variant} arrow={arrow}>
      {props.children}
    </Inner>
  );

  if ("href" in props && props.href) {
    const { href, children: _c, ...rest } = props;
    void _c;
    if (/^(https?:|tel:|mailto:)/.test(href)) {
      return (
        <a href={href} className={classes} {...rest}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  const { children: _c, ...rest } = props as ButtonAsButton;
  void _c;
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
