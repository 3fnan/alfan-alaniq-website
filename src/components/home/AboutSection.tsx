import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ImageReveal from "@/components/ui/ImageReveal";
import { company } from "@/data/company";

interface AboutSectionProps {
  /** The home page already shows this photo in the hero. */
  showImage?: boolean;
}

export default function AboutSection({ showImage = true }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 sm:py-24">
      <Container>
        <SectionHeading title="Who we are" />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <Reveal className="space-y-4 text-[17px] leading-relaxed text-body">
            <p>
              Alfan Al Aniq Technical Services was set up in Dubai in {company.founded}, built on
              experience from earlier HVAC projects. The aim was to give each customer the right
              solution for their building, not just the standard one.
            </p>
            <p>
              Since then we have worked with well-known contractors, developers, hospitals and
              factories across the Emirates. Prompt delivery, and a habit of sitting down to
              &ldquo;think together&rdquo; with the client about what is really causing a problem,
              is what built our name in Dubai&apos;s HVAC market.
            </p>
            <p>
              Our ground staff are managed by experienced HVAC professionals, and we take on HVAC,
              MEP and fit-out work across the U.A.E.
            </p>
          </Reveal>

          <div className="space-y-10">
            {showImage && (
              <ImageReveal shape="chamfer-lg" className="aspect-[3/2] w-full">
                <Image
                  src="/images/about/about-installation.png"
                  alt="Rooftop chiller, ceiling ductwork, plant-room pipework and a commercial building"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </ImageReveal>
            )}

            <Reveal delay={0.1}>
              <figure className="relative pl-10">
                <span aria-hidden className="absolute -top-3 left-0 font-display text-6xl leading-none text-gold">
                  &ldquo;
                </span>
                <blockquote className="font-display text-2xl font-medium leading-snug text-navy">
                  Comfort is primarily about determining ranges, not chasing extremes. Cooling is only
                  one of the many aspects of human comfort.
                </blockquote>
              </figure>
            </Reveal>

            <dl className="grid gap-8 sm:grid-cols-2">
              <Reveal delay={0.15}>
                <dt className="flex items-center gap-3 text-sm font-semibold text-navy">
                  <span aria-hidden className="h-[3px] w-6 bg-gold" />
                  Vision
                </dt>
                <dd className="mt-3 text-[15px] leading-relaxed text-steel">{company.vision}</dd>
              </Reveal>
              <Reveal delay={0.25}>
                <dt className="flex items-center gap-3 text-sm font-semibold text-navy">
                  <span aria-hidden className="h-[3px] w-6 bg-gold" />
                  Mission
                </dt>
                <dd className="mt-3 text-[15px] leading-relaxed text-steel">{company.mission}</dd>
              </Reveal>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
