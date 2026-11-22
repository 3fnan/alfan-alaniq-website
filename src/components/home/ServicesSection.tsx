import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-bg-warm py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="What we install, repair and maintain"
          description="Each job is handled by the trade that does that work every day: duct fabricators on ductwork, HVAC technicians on equipment."
        />

        <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="li" key={service.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/services#${service.slug}`}
                className="group relative block border-t border-navy/15 py-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <span
                  aria-hidden
                  className="absolute -top-px left-0 h-[3px] w-0 bg-gold transition-all duration-500 group-hover:w-full"
                />
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold text-navy transition-colors group-hover:text-gold-ink">
                    {service.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    aria-hidden
                    className="mt-1 flex-none text-gold-ink opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-steel">{service.description}</p>
              </Link>
            </Reveal>
          ))}
        </ul>

        <div className="mt-6">
          <Button href="/services" variant="outline">
            Service details
          </Button>
        </div>
      </Container>
    </section>
  );
}
