import Container from "@/components/ui/Container";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import BlurCircle from "@/components/ui/BlurCircle";

export default function ClientsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-light via-navy to-navy-dark py-28 text-white">
      <BackgroundGrid />
      <BlurCircle className="-right-32 -top-32" />
      <BlurCircle className="bottom-0 left-0" color="#15324E" />
      <Container className="relative z-10">
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
          Our Clients
        </span>

        <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight">
          Trusted by Leading Contractors,
          Developers and Organisations
          Across the UAE.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          We believe long-term relationships are built on consistent
          workmanship, technical expertise and dependable project delivery.
        </p>

        <div className="mt-12 flex flex-wrap gap-6">

          <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur">
            <p className="text-3xl font-display font-bold text-gold">
              {'40'}+
            </p>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-slate-300">
              Trusted Clients
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur">
            <p className="text-3xl font-display font-bold text-gold">
              UAE
            </p>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-slate-300">
              Nationwide Service
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}