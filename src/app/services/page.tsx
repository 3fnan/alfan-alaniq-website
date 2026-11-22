import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ImageReveal from "@/components/ui/ImageReveal";
import ContactCTASection from "@/components/home/ContactCTASection";
import PageHeader from "@/components/layout/PageHeader";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "HVAC equipment installation, ducting, ventilation, repair services and design support from Alfan Al Aniq Technical Services, Dubai.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        crumb="Services"
        image="/images/services/equipment.png"
        title="What we install,"
        accent="repair and maintain."
        intro="Equipment installation, ductwork, ventilation, breakdown repair and design support, each handled by the trade that does that work every day."
      >
        <ul className="mt-8 flex flex-wrap gap-2">
          {services.map((s) => (
            <li key={s.slug}>
              <a
                href={`#${s.slug}`}
                className="block rounded-full border border-white/20 px-4 py-1.5 text-sm text-on-dark transition-colors hover:border-gold hover:bg-gold hover:text-navy"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </PageHeader>

      <section className="py-16 sm:py-24">
        <Container className="space-y-20 sm:space-y-28">
          {services.map((service, i) => {
            const reversed = i % 2 === 1;
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <ImageReveal shape="chamfer-lg" className={cn("aspect-[3/2] w-full", reversed && "lg:order-2")}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </ImageReveal>
                <Reveal delay={0.15}>
                  <span className="font-mono text-sm text-gold-ink">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="mt-2 font-display text-3xl font-semibold text-navy sm:text-4xl">{service.title}</h2>
                  <span aria-hidden className="mt-5 block h-[3px] w-12 bg-gold" />
                  <p className="mt-5 text-[17px] leading-relaxed text-body">{service.longDescription}</p>
                </Reveal>
              </article>
            );
          })}
        </Container>
      </section>

      <ContactCTASection />
    </main>
  );
}
