import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ImageReveal from "@/components/ui/ImageReveal";
import { whyChooseUs } from "@/data/whyChooseUs";

export default function WhyChooseUsSection() {
  return (
    <section className="bg-navy py-20 text-bg sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1fr,1.6fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            title="How we work"
            description="What clients can expect when they bring us a job."
            tone="dark"
            className="mb-8"
          />
          <ImageReveal shape="chamfer-lg" className="hidden aspect-[4/3] w-full sm:block lg:aspect-[5/6]">
            <Image
              src="/images/services/ventilation.png"
              alt="Plant room with air handling units, galvanised ductwork and an exposed concrete ceiling"
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-[55%_center]"
            />
          </ImageReveal>
        </div>

        <ol className="border-t border-white/10">
          {whyChooseUs.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 0.06}
              className="group grid gap-2 border-b border-white/10 py-7 sm:grid-cols-[3rem,12rem,1fr] sm:gap-6"
            >
              <span className="font-mono text-sm text-gold/70 transition-colors group-hover:text-gold-light">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg font-semibold text-bg transition-colors group-hover:text-gold-light">
                {item.title}
              </h3>
              <p className="leading-relaxed text-on-dark-muted">{item.description}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
