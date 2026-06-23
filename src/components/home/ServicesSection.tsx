import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-bg-warm py-20">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Six disciplines, one comfort system."
          description="From first install to breakdown call-out, each service is handled by the trade that owns it — not generalists stretched thin."
        />

        <div className="grid gap-px border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedCard key={service.slug} delay={i * 0.05} className="bg-bg-warm">
                <div className="flex h-full min-h-[230px] flex-col gap-3.5 bg-bg p-8 transition-colors hover:bg-white">
                  <Icon className="h-8 w-8 text-gold" strokeWidth={1.4} />
                  <h3 className="font-display text-lg font-semibold text-navy">{service.title}</h3>
                  <p className="text-[14.5px] text-steel">{service.description}</p>
                </div>
              </AnimatedCard>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button href="/services" variant="outline">See All Services</Button>
        </div>
      </Container>
    </section>
  );
}
