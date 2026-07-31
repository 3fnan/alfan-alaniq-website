import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import { company } from "@/data/company";
import { navLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-navy pt-16 text-bg">
      <Container>
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-3">
          <div>
            <span className="block font-display text-lg">Alfan Al Aniq</span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-gold-light">
              Technical Services
            </span>
            <p className="mt-4 max-w-xs text-sm text-[#A9B6C0]">
              Delivering HVAC, MEP, interior fit-out and technical contracting solutions across the UAE since {company.founded}.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-gold-light">Navigate</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-[#D9DEE4]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-gold-light">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm text-[#D9DEE4]">
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-1 flex-none text-gold" />

                <div className="flex flex-col gap-1">
                  {company.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="transition-colors hover:text-gold-light"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-1 flex-none text-gold" />

                <div className="flex flex-col gap-1">
                  {company.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="transition-colors hover:text-gold-light"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 flex-none text-gold" />
                <span>{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 py-6 text-center text-[11.5px] text-[#8295A2] md:flex-row md:text-left">
          <span className="font-mono">
            &copy; {new Date().getFullYear()} {company.legalName}
          </span>
        </div>
      </Container>
    </footer>
  );
}
