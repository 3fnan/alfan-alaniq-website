import Container from "@/components/ui/Container";
import ClientCard from "@/components/clients/ClientCard";
import { clients } from "@/data/clients";

export default function ClientsGrid() {
  const sorted = [...clients].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section className="py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr,2fr] lg:gap-16">
        <div>
          <h2 className="font-display text-3xl font-semibold leading-tight text-navy">Client list</h2>
          <p className="mt-3 leading-relaxed text-steel">
            A selection of the organisations we have carried out HVAC, ducting, MEP and fit-out work
            for since 2021.
          </p>
        </div>

        <ul className="border-t border-navy/10 sm:columns-2 sm:gap-10 [&>li]:break-inside-avoid">
          {sorted.map((client, i) => (
            <ClientCard key={client.id} client={client} index={i} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
