import Container from "@/components/ui/Container";
import ClientCard from "@/components/clients/ClientCard";
import { clients } from "@/data/clients";

export default function ClientsGrid() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-14 max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            Trusted Partnerships
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Organisations We've Worked With
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Since our establishment, we've had the privilege of working with
            contractors, developers, healthcare institutions, manufacturers,
            commercial facilities and government-related organizations across
            the UAE.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      </Container>
    </section>
  );
}