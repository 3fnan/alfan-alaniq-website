import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { projectSectors } from "@/data/sector";
import { PROJECT_COUNT } from "@/data/stats";

export default function ProjectsSummary() {
  return (
    <section className="bg-bg-warm py-16 sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[1fr,1.4fr] lg:gap-16">
        <Reveal>
          <span aria-hidden className="mb-5 block h-[3px] w-12 bg-gold" />
          <h2 className="font-display text-3xl font-semibold leading-tight text-navy">
            {PROJECT_COUNT} projects, and the list keeps growing
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-[17px] leading-relaxed text-body">
            The table above is only a selection. Our wider portfolio covers healthcare, commercial,
            residential, hospitality and industrial buildings across the UAE.
          </p>
          <h3 className="mt-8 text-sm font-semibold text-navy">Sectors we work in</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {projectSectors.map((sector) => (
              <li key={sector} className="rounded-full bg-navy/[0.06] px-4 py-1.5 text-[15px] text-body">
                {sector}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
