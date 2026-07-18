import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { projectSectors } from "@/data/sector";

export default function ProjectsSummary() {
    return (
        <section className="py-24">
            <Container>
                <div className="relative overflow-hidden rounded-3xl border border-navy/10 bg-white px-8 py-14 shadow-sm md:px-16">
                    <p className="text-center font-mono text-xs uppercase tracking-[0.35em] text-gold">
                        250+ Successfully Delivered Projects
                    </p>
                    <h2 className="mt-4 text-center font-display text-4xl font-bold text-navy md:text-5xl">
                        Our Portfolio Continues Beyond This List
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-steel">
                        From healthcare facilities and commercial developments to
                        residential communities, hospitality venues and industrial facilities, we
                        continue to deliver reliable HVAC, MEP and fit-out solutions tailored to our
                        clients requirements. The projects showcased above represent only a selection of our completed work
                        across the UAE.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-3">
                        {projectSectors.map((projectSector) => (
                            <span
                                key={projectSector}
                                className="rounded-full border border-gold/20 bg-gold/10 px-5 py-2 text-sm font-medium text-navy transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-white"
                            >
                                {projectSector}
                            </span>
                        ))}
                    </div>
                    <div className="mx-auto mt-12 h-px w-64 bg-gold/30" />
                    <h3 className="mt-12 text-center font-display text-3xl font-semibold text-navy">
                        Planning your next project?
                    </h3>
                    <p className="mx-auto mt-4 max-w-2xl text-center text-steel">
                        Whether you&apos;re planning a new installation, system upgrade, fit-out or
                        technical maintenance, our experienced team is ready to understand your
                        requirements and recommend the right solution.
                    </p>
                    <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
                        <Button href="/contact">
                            Request a Quote
                        </Button>

                        <Button href="/contact" variant="outline">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}