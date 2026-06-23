"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gold/25 bg-navy/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-wrap items-center justify-between px-7 py-3.5">
        <Link href="/" className="flex items-center gap-3 text-bg">
          <svg viewBox="0 0 40 40" className="h-8 w-8 flex-none">
            <path d="M8 30 L20 10 L32 30" stroke="#C9A463" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M11 26 L29 26" stroke="#C9A463" strokeWidth={2} strokeLinecap="round" />
            <circle cx={20} cy={10} r={2} fill="#C9A463" />
          </svg>
          <span className="leading-tight">
            <span className="block font-display text-[17px] font-semibold tracking-wide">Alfan Al Aniq</span>
            <span className="block font-mono text-[9.5px] uppercase tracking-[0.16em] text-gold-light">Technical Services</span>
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "group relative text-[13.5px] font-medium uppercase tracking-[0.06em] text-[#D9DEE4] transition-colors hover:text-bg",
                    pathname === link.href && "text-bg"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300",
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-sm border border-gold px-4.5 py-2 text-[12.5px] font-semibold text-gold-light transition-colors hover:bg-gold hover:text-navy md:inline-block"
        >
          Request a Quote
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-bg md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
