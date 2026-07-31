import Button from "@/components/ui/Button";

interface FontPreviewCardProps {
  option: string;
  headingClass: string;
  bodyClass?: string;
}

export default function FontPreviewCard({
  option,
  headingClass,
  bodyClass = "",
}: FontPreviewCardProps) {
  return (
    <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-8 flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.35em] text-gold">
          {option}
        </span>

        <span className="rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-steel">
          Font Test
        </span>
      </div>

      <h2 className={`${headingClass} text-5xl leading-tight text-navy`}>
        Comfort is
        <br />
        multidimensional.
      </h2>

      <p className={`${bodyClass} mt-6 text-lg leading-8 text-steel`}>
        Professional HVAC, MEP & Interior Fit-Out solutions across the UAE.
      </p>

      <div className="mt-8 flex gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-steel">
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
        <span>Projects</span>
      </div>

      <div className="mt-8">
        <Button>Request a Quote</Button>
      </div>

      <p className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-steel">
        Established in 2021
      </p>
    </div>
  );
}