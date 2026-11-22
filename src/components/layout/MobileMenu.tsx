"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="overflow-hidden border-t border-gold/15 bg-navy md:hidden"
        >
          <ul className="flex flex-col px-6 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={cn(
                    "block border-b border-white/5 py-3 text-[15px] text-on-dark",
                    pathname === link.href && "text-gold-light"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={onClose}
                className="mb-2 mt-4 chamfer-sm block w-full bg-gold px-4 py-3 text-center text-sm font-semibold text-navy"
              >
                Request a Quote
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
