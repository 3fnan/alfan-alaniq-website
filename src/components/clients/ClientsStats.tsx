import Container from "@/components/ui/Container";
import Stat from "@/components/ui/Stat";
import { companyStats } from "@/data/stats";

export default function ClientsStats() {
  return (
    <section className="border-b border-navy/10 bg-white">
      <Container>
        <dl className="grid grid-cols-2 divide-navy/10 md:grid-cols-4 md:divide-x">
          {companyStats.map((stat) => (
            <div key={stat.label} className="py-8 md:px-6 md:first:pl-0">
              <Stat value={stat.value} label={stat.label} count={stat.count} tone="light" />
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
