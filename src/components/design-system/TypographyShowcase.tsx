import SectionHeading from "@/components/ui/SectionHeading";
import TypographyExample from "./TypographyExample";
import FontLab from "./FontLab";

export default function TypographyShowcase() {
    return (
        <section className="space-y-16">
            {/* Page Header */}
            <div>
                <h1 className="font-display text-5xl font-semibold text-navy">
                    Design System
                </h1>

                <p className="mt-4 max-w-3xl text-lg leading-8 text-steel">
                    A centralized library of the typography, components, colors and design patterns that define the Alfan Al Aniq brand experience.
                </p>
            </div>

            {/* Typography */}
            <SectionHeading
                eyebrow="Typography"
                title="Typography Scale"
                description="Consistent typography styles used across every page and component."
            />

            <div className="space-y-8">
                <TypographyExample label="Display">
                    <h1 className="font-display font-normal text-6xl text-navy">
                        Comfort is multidimensional.
                    </h1>
                </TypographyExample>

                <TypographyExample label="Hero Heading">
                    <h1 className="font-display text-5xl text-navy">
                        Engineering Comfort. Building Confidence.                    </h1>
                </TypographyExample>

                <TypographyExample label="Section Heading">
                    <h2 className="text-4xl font-normal text-navy">
                        Our Services
                    </h2>
                </TypographyExample>

                <TypographyExample label="Card Title">
                    <h3 className="text-2xl font-semibold text-navy">
                        Complete HVAC Solutions</h3>
                </TypographyExample>

                <TypographyExample label="Body Large">
                    <p className="max-w-3xl text-xl leading-9 text-steel">
                        Trusted HVAC, MEP and Interior Fit-Out specialists serving projects across the UAE.                    </p>
                </TypographyExample>

                <TypographyExample label="Body">
                    <p className="max-w-3xl text-lg leading-8 text-steel">
                        Alfan Al Aniq Technical Services delivers reliable engineering
                        solutions for commercial, residential and industrial projects
                        throughout the UAE.
                    </p>
                </TypographyExample>

                <TypographyExample label="Caption">
                    <p className="text-sm uppercase tracking-[0.25em] text-steel">
                        EST. 2021                    </p>
                </TypographyExample>

                <TypographyExample label="Mono Label">
                    <p className="font-mono text-sm text-navy">
                        DUBAI • UAE                    </p>
                </TypographyExample>
            </div>
            <FontLab />
        </section>
    );
}