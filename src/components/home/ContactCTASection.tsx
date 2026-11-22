import { FaWhatsapp } from "react-icons/fa";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { company, telHref, whatsappHref } from "@/data/company";

export default function ContactCTASection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-navy py-16 text-bg sm:py-20">
      <Container className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <Reveal className="max-w-xl">
          <span aria-hidden className="mb-5 block h-[3px] w-12 bg-gold" />
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Need someone to look at a system?
          </h2>
          <p className="mt-3 leading-relaxed text-on-dark-muted">
            New installation, a breakdown, or a fit-out that needs MEP coordination. Tell us about the
            job and we&apos;ll arrange a site visit. Or call{" "}
            <a
              href={telHref(company.phones[0])}
              className="whitespace-nowrap text-bg underline decoration-gold underline-offset-4 hover:text-gold-light"
            >
              {company.phones[0]}
            </a>
            .
          </p>
        </Reveal>
        <Reveal delay={0.15} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-none sm:flex-row sm:items-center sm:gap-4">
          <Button href="/contact" variant="primary" className="w-full sm:w-auto">
            Request a Quote
          </Button>
          <Button href={whatsappHref()} variant="whatsapp" arrow={false} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <FaWhatsapp size={17} /> WhatsApp
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
