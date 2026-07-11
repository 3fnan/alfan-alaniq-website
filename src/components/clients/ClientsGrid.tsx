import Container from "@/components/ui/Container";
import ClientCard from "@/components/clients/ClientCard";
import { clients } from "@/data/clients";
import { Plus } from "lucide-react";

export default function ClientsGrid() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-14 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            Trusted Partnerships
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Organisations We&apos;ve Worked With
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Since our establishment, we&apos;ve had the privilege of working with
            contractors, developers, healthcare institutions, manufacturers,
            commercial facilities and government-related organizations across
            the UAE.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
          {/* Many More Card */}

          <article
            className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-2xl"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
              <Plus size={28} />
            </div>
            <h3 className="text-xl font-display font-semibold leading-snug text-navy transition-colors group-hover:text-gold">
              And Many More...
            </h3>
            <p className="mt-6 text-sm leading-7 text-steel">
              We&apos;ve successfully partnered with many additional contractors,
              developers and facility management companies across the UAE.
            </p>
            <div className="mt-6">
              <span className="rounded-full bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold">
                300+ PROJECTS
              </span>
            </div>

          </article>
        </div>
      </Container>
    </section>
  );
}