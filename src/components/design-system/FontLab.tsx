import SectionHeading from "@/components/ui/SectionHeading";
import FontPreviewCard from "./FontPreviewCard";

const fontOptions = [
    {
        option: "Option A",
        heading: "font-heading",
        body: "font-sans",
    },
    {
        option: "Option B",
        heading: "font-zilla",
        body: "font-sans",
    },
    {
        option: "Option C",
        heading: "font-manrope",
        body: "font-sans",
    },
    {
        option: "Option D",
        heading: "font-bricolage",
        body: "font-sans",
    },
    {
        option: "Option E",
        heading: "font-jakarta",
        body: "font-sans",
    },
    {
        option: "Option F",
        heading: "font-space",
        body: "font-sans",
    },
    {
        option: "Option G",
        heading: "font-sans",
        body: "font-sans",
    },
];

export default function FontLab() {
    return (
        <section className="space-y-10">
            <SectionHeading
                eyebrow="Font Laboratory"
                title="Choose the Website Typography"
                description="The same UI rendered using different heading fonts. Pick your favourite before revealing the font names."
            />

            <div className="grid gap-8 lg:grid-cols-2">
                {fontOptions.map((font) => (
                    <FontPreviewCard
                        key={font.option}
                        option={font.option}
                        headingClass={font.heading}
                        bodyClass={font.body}
                    />
                ))}
            </div>
        </section>
    );
}