import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ImageReveal from "@/components/ui/ImageReveal";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

const FEATURED_IDS = [1, 2, 20, 23, 22, 29, 3, 6, 30];

export default function ProjectsSection() {
  const featured = projects.filter((p) => FEATURED_IDS.includes(p.id));

  return (
    <section id="projects" className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            title="Recent projects"
            description="Hospitals, university buildings, showrooms, villas and hotel fit-outs."
            className="mb-0"
          />
          <Button href="/projects" variant="outline" className="self-start sm:mb-1 sm:self-auto">
            All projects
          </Button>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal as="article" key={project.id} delay={(i % 3) * 0.1}>
              <Link href="/projects" className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                <ImageReveal className="aspect-[4/3] w-full" delay={(i % 3) * 0.1}>
                  <Image
                    src={project.image!}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </ImageReveal>
                <p className="mt-4 font-mono text-xs text-gold-ink">{project.jobDescription}</p>
                <h3 className="mt-1 font-display text-xl font-semibold leading-snug text-navy transition-colors group-hover:text-gold-ink">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-steel">{project.location}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
