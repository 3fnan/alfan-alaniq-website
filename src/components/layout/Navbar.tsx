"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
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

        <div className="hidden items-center md:flex">
          <div className="hidden md:flex">
            <div className="flex overflow-hidden rounded-lg border border-gold/70 bg-navy/40 backdrop-blur-sm">
              {/* Call */}
              <a
                href="tel:+971527838646"
                aria-label="Call Us"
                className="group flex h-11 w-11 items-center justify-center border-r border-gold/30 text-gold-light transition-all duration-300 hover:bg-gold hover:text-navy"
              >
                <Phone
                  size={18}
                  strokeWidth={2.2}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/971527838646"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="group flex h-11 w-11 items-center justify-center border-r border-gold/30 text-gold-light transition-all duration-300 hover:bg-gold hover:text-navy"
              >
                <FaWhatsapp
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              {/* CTA */}
              <Link
                href="/contact"
                className="group flex h-11 items-center gap-2 px-6 text-[13px] font-semibold tracking-wide text-gold-light transition-all duration-300 hover:bg-gold hover:text-navy"
              >
                <span>Request a Quote</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="tel:+971527838646"
            aria-label="Call Us"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-all duration-300 hover:bg-gold hover:text-navy"
          >
            <Phone size={20} />
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-bg transition-all duration-300 hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
      />
    </header>
  );
}