import Button from "@/components/ui/Button";

interface FontPreviewCardProps {
  name: string;
  headingClass: string;
  category: string;
  description: string;
}

export default function FontPreviewCard({
  name,
  headingClass,
  category,
  description,
}: FontPreviewCardProps) {
  return (
    <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-navy">{name}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.25em] text-gold">
            {category}
          </p>
        </div>

        <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
          Candidate
        </span>
      </div>

      {/* Hero Heading */}
      <h1
        className={`${headingClass} text-5xl leading-[1.1] text-navy`}
      >
        Comfort is
        <br />
        multidimensional.
        <br />
        <span className="text-gold">
          We engineer every part of it.
        </span>
      </h1>

      {/* Section Heading */}
      <h2 className={`${headingClass} mt-10 text-3xl text-navy`}>
        Our Services
      </h2>

      {/* Body */}
      <p className="mt-4 max-w-md text-base leading-8 text-steel">
        Professional HVAC, MEP & Interior Fit-Out solutions across the UAE.
        Designed for reliability, efficiency and long-term performance.
      </p>

      {/* Button */}
      <div className="mt-8">
        <Button>Request a Quote</Button>
      </div>

      {/* Navigation */}
      <div className="mt-10 flex flex-wrap gap-6 text-xs font-semibold uppercase tracking-[0.18em] text-steel">
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>

      {/* Alphabet */}
      <div className="mt-10 space-y-3">
        <p className={`${headingClass} text-xl text-navy`}>
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </p>

        <p className={`${headingClass} text-xl text-navy`}>
          abcdefghijklmnopqrstuvwxyz
        </p>
      </div>

      {/* Numbers */}
      <div className="mt-8">
        <p className={`${headingClass} text-3xl text-navy`}>
          1234567890
        </p>
      </div>

      {/* Caption */}
      <p className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-steel">
        Dubai, U.A.E. — Est. 2021
      </p>

      {/* Footer */}
      <div className="mt-8 border-t border-navy/10 pt-6">
        <p className="text-sm font-medium text-navy">
          Best suited for
        </p>

        <p className="mt-2 text-sm leading-7 text-steel">
          {description}
        </p>
      </div>
    </div>
  );
}