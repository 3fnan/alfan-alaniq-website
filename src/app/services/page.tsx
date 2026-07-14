import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import AnimatedCard from "@/components/ui/AnimatedCard";
import ContactCTASection from "@/components/home/ContactCTASection";
import { services } from "@/data/services";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import BlurCircle from "@/components/ui/BlurCircle";

export const metadata: Metadata = {
  title: "Services",
  description:
    "HVAC equipment installation, ducting, ventilation, repair services, design support and AMC contracts from Alfan Al Aniq Technical Services, Dubai.",
};

export default function ServicesPage() {
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
          <Badge tone="dark">What we do</Badge>
          <h1 className="max-w-2xl font-display text-4xl font-semibold sm:text-5xl">
            Six disciplines, one comfort system.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[#A9B6C0]">
            Equipment installation, ducting, ventilation, repair, design support and
            special applications &mdash; handled by the trade that owns it.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="space-y-14">
          {services.map((service, i) => {
            const Icon = service.icon;
            const reversed = i % 2 === 1;
            return (
              <AnimatedCard key={service.slug} delay={0.05}>
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 ${reversed ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                >
                  <div className="relative h-64 w-full overflow-hidden border border-navy/10 sm:h-80">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <Icon className="mb-4 h-9 w-9 text-gold" strokeWidth={1.4} />
                    <h2 className="font-display text-2xl font-semibold text-navy">{service.title}</h2>
                    <p className="mt-3 text-[16px] text-steel">{service.longDescription}</p>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </Container>
      </section>

      <ContactCTASection />
    </main>
  );
}
