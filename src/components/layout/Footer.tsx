import Link from "next/link";
import type { ReactNode } from "react";
import { FaWhatsapp, FaPhoneAlt, FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { company, mapsHref, telHref, whatsappHref } from "@/data/company";
import { navLinks } from "@/data/navigation";

const heading = "mb-5 text-sm font-semibold text-on-dark";
const link = "transition-colors hover:text-gold-light";

function Item({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span aria-hidden className="mt-0.5 flex-none text-gold">
        {icon}
      </span>
      <div className="flex flex-col gap-1">{children}</div>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy pt-16 text-bg">
      <Container>
        <div className="grid gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.2fr,0.8fr,1.2fr,1.2fr] lg:gap-10">
          <div>
            <span className="block font-display text-xl font-semibold">Alfan Al Aniq</span>
            <span className="block text-sm text-gold-light">Technical Services</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-on-dark-muted">
              HVAC, ducting, ventilation and MEP contractor in Deira, Dubai. Working across the UAE since{" "}
              {company.founded}.
            </p>
          </div>

          <div>
            <h3 className={heading}>Pages</h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-on-dark-muted sm:grid-cols-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={heading}>Contact</h3>
            <ul className="flex flex-col gap-4 text-sm text-on-dark-muted">
              <Item icon={<FaPhoneAlt size={13} />}>
                {company.phones.map((phone) => (
                  <a key={phone} href={telHref(phone)} className={link}>
                    {phone}
                  </a>
                ))}
              </Item>
              <Item icon={<HiOutlineMail size={16} />}>
                {company.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className={link}>
                    {email}
                  </a>
                ))}
              </Item>
            </ul>

            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2.5 rounded-full border border-gold/40 px-5 py-2.5 text-sm font-semibold text-gold-light transition-colors hover:border-gold hover:bg-gold hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light"
            >
              <FaWhatsapp size={18} aria-hidden />
              Chat on WhatsApp
              <ArrowRight size={15} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div>
            <h3 className={heading}>Office</h3>
            <ul className="flex flex-col gap-4 text-sm text-on-dark-muted">
              <Item icon={<MdOutlineLocationOn size={17} />}>
                <a href={mapsHref} target="_blank" rel="noopener noreferrer" className={`leading-relaxed ${link}`}>
                  {company.address}
                </a>
              </Item>
              <Item icon={<FaRegCalendarAlt size={14} />}>
                <span>{company.hours}</span>
              </Item>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-6 text-sm text-on-dark-faint md:flex-row md:justify-between">
          <span>
            &copy; {new Date().getFullYear()} {company.tradeName}
          </span>
        </div>
      </Container>
    </footer>
  );
}
