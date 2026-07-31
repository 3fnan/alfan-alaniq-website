import SectionHeading from "@/components/ui/SectionHeading";
import FontPreviewCard from "./FontPreviewCard";
import { fontCandidates } from "@/data/font";

export default function FontLab() {
    return (
        <section className="space-y-16">
            {/* Page Header */}
            <SectionHeading
                eyebrow="Typography Decision Dashboard"
                title="Choose the Perfect Heading Font"
                description="Compare each heading font using realistic website content. Evaluate readability, personality, hierarchy, and overall brand presence before making the final typography decision."
            />

            {/* Goal & Criteria */}
            <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-sm">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div>
                        <h3 className="text-xl font-semibold text-navy">
                            🎯 Goal
                        </h3>

                        <p className="mt-4 leading-8 text-steel">
                            Find the heading font that best represents
                            <strong> Alfan Al Aniq Technical Services.</strong>
                            The chosen font should communicate professionalism,
                            engineering excellence, trust, and premium quality while
                            remaining highly readable across the website.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-navy">
                            Evaluation Criteria
                        </h3>

                        <ul className="mt-4 space-y-3 text-steel">
                            <li>✅ Premium & Professional</li>
                            <li>✅ Engineering & Technical Feel</li>
                            <li>✅ Readable at All Sizes</li>
                            <li>✅ Strong Visual Hierarchy</li>
                            <li>✅ Timeless Design</li>
                            <li>✅ Matches the Brand Identity</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Candidate Fonts */}
            <div>
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                            Candidate Fonts
                        </p>

                        <h2 className="mt-2 text-3xl font-semibold text-navy">
                            Side-by-Side Comparison
                        </h2>
                    </div>

                    <div className="rounded-full bg-gold/10 px-4 py-2 text-sm font-medium text-gold">
                        {fontCandidates.length} Fonts
                    </div>
                </div>

                <div className="grid gap-8 xl:grid-cols-2">
                    {fontCandidates.map((font) => (
                        <FontPreviewCard
                            key={font.name}
                            name={font.name}
                            headingClass={font.headingClass}
                            category={font.category}
                            description={font.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}