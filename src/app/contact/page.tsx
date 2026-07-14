import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import ContactForm from "@/components/forms/ContactForm";
import { company } from "@/data/company";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import BlurCircle from "@/components/ui/BlurCircle";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a quote from Alfan Al Aniq Technical Services — HVAC, ducting, MEP and fit-out contractor in Dubai, UAE.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-light via-navy to-navy-dark py-28 text-white">
        <BackgroundGrid />

        <BlurCircle className="-right-32 -top-32" />

        <BlurCircle
          className="bottom-0 left-0"
          color="#15324E"
        />
        <Container className="relative z-10">
          <Badge tone="dark">Get in touch</Badge>
          <h1 className="max-w-2xl font-display text-4xl font-semibold sm:text-5xl">
            Let&apos;s think it through together.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[#A9B6C0]">
            Send a short description of the site, the issue and your timeline, and
            we&apos;ll come back with next steps.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-14 lg:grid-cols-[1fr,1.2fr]">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-xl font-semibold text-navy">Contact details</h2>
              <ul className="mt-5 space-y-4 text-[15px] text-[#33414C]">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4.5 w-4.5 flex-none text-gold" />
                  <a href={`mailto:${company.emails}`} className="hover:text-gold">{company.emails[1]}</a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4.5 w-4.5 flex-none text-gold" />
                  <span>{company.phones.join(" \u00b7 ")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4.5 w-4.5 flex-none text-gold" />
                  <span>{company.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4.5 w-4.5 flex-none text-gold" />
                  <span>Sun &ndash; Thu, 8:00 AM &ndash; 6:00 PM (Gulf Standard Time)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-navy/10 bg-white p-7 sm:p-9">
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
