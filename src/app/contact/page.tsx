import type { Metadata } from "next";
import type { ReactNode } from "react";
import { FaWhatsapp, FaPhoneAlt, FaRegCalendarAlt } from "react-icons/fa";
import { SiGmail, SiGooglemaps } from "react-icons/si";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHeader from "@/components/layout/PageHeader";
import ContactForm from "@/components/forms/ContactForm";
import { company, mapsHref, telHref, whatsappHref } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a quote from Alfan Al Aniq Technical Services, an HVAC, ducting, MEP and fit-out contractor in Deira, Dubai.",
};

const linkCls = "transition-colors hover:text-gold-ink";

// Brand-style icon chips: white chip for multi-colour logos, solid colour for the rest.
const chip = {
  phone: "bg-[#1A73E8] text-white",
  whatsapp: "bg-whatsapp text-white",
  gmail: "bg-white text-[#EA4335] ring-1 ring-navy/10",
  maps: "bg-white text-[#34A853] ring-1 ring-navy/10",
  clock: "bg-[#1A73E8] text-white",
};

function Row({ icon, label, children, delay, iconClass = "bg-gold/15 text-gold-ink" }: { icon: ReactNode; label: string; children: ReactNode; delay: number; iconClass?: string }) {
  return (
    <Reveal as="li" delay={delay} className="flex items-start gap-4 border-b border-navy/10 py-5 first:pt-0">
      <span className={`mt-0.5 flex h-11 w-11 flex-none items-center justify-center rounded-full shadow-sm ${iconClass}`}>
        {icon}
      </span>
      <div>
        <span className="block text-sm text-steel">{label}</span>
        <div className="mt-0.5 text-[15px] text-navy">{children}</div>
      </div>
    </Reveal>
  );
}

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        crumb="Contact"
        image="/images/services/contactus.jpg"
        title="Call, WhatsApp,"
        accent="or send us the job details."
        intro="Tell us where the site is, what the problem is and when you need it done. We'll come back to you with next steps."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-14 lg:grid-cols-[1fr,1.3fr] lg:gap-20">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">Contact details</h2>
            <span aria-hidden className="mt-4 block h-[3px] w-12 bg-gold" />

            <ul className="mt-8">
              <Row icon={<FaPhoneAlt size={17} aria-hidden />} label="Phone" delay={0} iconClass={chip.phone}>
                {company.phones.map((phone) => (
                  <a key={phone} href={telHref(phone)} className={`block ${linkCls}`}>
                    {phone}
                  </a>
                ))}
              </Row>
              <Row icon={<FaWhatsapp size={22} aria-hidden />} label="WhatsApp" delay={0.06} iconClass={chip.whatsapp}>
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  {company.phones[0]}
                </a>
              </Row>
              <Row icon={<SiGmail size={20} aria-hidden />} label="Email" delay={0.12} iconClass={chip.gmail}>
                {company.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className={`block ${linkCls}`}>
                    {email}
                  </a>
                ))}
              </Row>
              <Row icon={<SiGooglemaps size={20} aria-hidden />} label="Office" delay={0.18} iconClass={chip.maps}>
                <a href={mapsHref} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  {company.address}
                </a>
              </Row>
              <Row icon={<FaRegCalendarAlt size={18} aria-hidden />} label="Working hours" delay={0.24} iconClass={chip.clock}>
                {company.hours} (GST)
              </Row>
            </ul>
          </div>

          <Reveal delay={0.1} className="relative">
            <div aria-hidden className="chamfer-lg absolute -right-1.5 -top-1.5 bottom-1.5 left-1.5 bg-gold-light/60 sm:-right-3 sm:-top-3 sm:bottom-3 sm:left-3" />
            <div className="chamfer-lg relative bg-white p-7 sm:p-10">
              <h2 className="font-display text-2xl font-semibold text-navy">Request a quote</h2>
              <p className="mb-8 mt-2 text-sm text-steel">
                Fill this in and it opens WhatsApp with your message ready to send.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
