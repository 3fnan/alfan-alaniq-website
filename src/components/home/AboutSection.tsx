import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { company } from "@/data/company";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="About the company"
          title="HVAC know-how, applied with a contractor's discipline."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <AnimatedCard className="space-y-4 text-[16.5px] text-[#33414C]">
            <p>
              Alfan Al Aniq Technical Services was established in {company.founded} in
              Dubai, United Arab Emirates, built on experience gained across earlier
              HVAC projects. The goal was simple: deliver the optimum solution to every
              customer, not just the standard one.
            </p>
            <p>
              In a short span of time, the company has worked alongside many
              industry-renowned organisations across the Emirates. Prompt delivery and
              a &ldquo;think together&rdquo; approach to solving customer issues have
              helped establish its name in Dubai&apos;s HVAC service market.
            </p>
            <blockquote className="border-l-2 border-gold py-1 pl-5 font-display text-xl font-medium text-navy">
              &ldquo;Comfort is primarily about determining ranges &mdash; not chasing
              extremes. Cooling is only one of the many aspects of human comfort.&rdquo;
            </blockquote>
            <p>
              Enriched by the technical know-how of its ground staff and managed by
              experienced HVAC professionals, Alfan Al Aniq is a full solution provider
              for HVAC, MEP and fit-out needs across the U.A.E.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={0.15} className="space-y-6">
            <div className="group relative h-72 overflow-hidden rounded-2xl shadow-2xl lg:h-[460px]">
              <Image
                src="/images/about/about-installation.png"
                alt="Alfan Alaniq Technical Services"
                fill
                priority
                sizes="(max-width:1024px)100vw,50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

              {/* Bottom Label */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-gold-light">
                  Since 2021
                </p>

                <h3 className="mt-2 text-3xl font-display font-semibold text-white">
                  Delivering HVAC & MEP Solutions
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="border-t-2 border-gold bg-white p-5">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-gold">Our Vision</div>
                <p className="mt-2 text-sm text-steel">{company.vision}</p>
              </div>
              <div className="border-t-2 border-gold bg-white p-5">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-gold">Our Mission</div>
                <p className="mt-2 text-sm text-steel">{company.mission}</p>
              </div>
            </div>


          </AnimatedCard>
        </div>
      </Container>
    </section>
  );
}
