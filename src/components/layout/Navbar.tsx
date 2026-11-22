"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { company, telHref, whatsappHref } from "@/data/company";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

const roundIcon =
  "flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold-light transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-navy focus-visible:bg-gold focus-visible:text-navy focus-visible:outline-none";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-navy transition-[box-shadow,border-color] duration-300",
        scrolled ? "border-gold/40 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]" : "border-gold/20"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-wrap items-center justify-between px-6 transition-[padding] duration-300 sm:px-7",
          scrolled ? "py-2.5" : "py-3.5"
        )}
      >
        <Link href="/" className="group flex items-center gap-3 text-bg">
          <svg viewBox="0 0 40 40" className="h-8 w-8 flex-none" aria-hidden>
            <path d="M8 30 L20 10 L32 30" stroke="#C9A463" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M11 26 L29 26" stroke="#C9A463" strokeWidth={2} strokeLinecap="round" />
            <circle cx={20} cy={10} r={2} fill="#C9A463" />
          </svg>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold">Alfan Al Aniq</span>
            <span className="block font-mono text-[9.5px] uppercase tracking-[0.16em] text-gold-light">Technical Services</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-6 lg:gap-7">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative py-1 text-sm font-medium text-on-dark transition-colors hover:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light",
                      "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-gold after:transition-transform after:duration-300",
                      active ? "text-bg after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <a href={telHref(company.phones[0])} aria-label={`Call ${company.phones[0]}`} className={roundIcon}>
            <Phone size={16} strokeWidth={2} />
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-whatsapp-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            <FaWhatsapp size={17} />
          </a>
          <Link
            href="/contact"
            className="chamfer-sm ml-1.5 bg-gold px-5 py-2.5 text-[13px] font-semibold text-navy transition-colors hover:bg-gold-light focus-visible:bg-gold-light focus-visible:underline focus-visible:outline-none"
          >
            Request a Quote
          </Link>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <a
            href={telHref(company.phones[0])}
            aria-label={`Call ${company.phones[0]}`}
            className="flex h-10 w-10 items-center justify-center rounded-full text-bg hover:bg-white/10"
          >
            <Phone size={20} />
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp text-navy hover:bg-whatsapp-dark"
          >
            <FaWhatsapp size={20} />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full text-bg hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
