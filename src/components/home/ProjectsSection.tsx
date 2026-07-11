import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

const FEATURED_IDS = [1, 2, 20, 23, 22, 14];

export default function ProjectsSection() {
  const featured = projects.filter((p) => FEATURED_IDS.includes(p.id));

  return (
    <section id="projects" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Track record"
          title="Few of our projects:"
          description="From hospitals and university buildings to luxury villas and beachfront fit-outs."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <AnimatedCard key={project.id} delay={i * 0.05}>
              <div className="overflow-hidden rounded-xl border border-navy/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                {/* Project Image */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={project.image!}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <span className="inline-block rounded-full bg-gold/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#8A6A2E]">
                    {project.jobDescription}
                  </span>

                  <h3 className="mt-4 font-display text-2xl font-semibold text-navy">
                    {project.name}
                  </h3>

                  <p className="mt-3 text-sm text-steel">
                    UAE
                  </p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/projects" variant="outline">
            View Featured Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}