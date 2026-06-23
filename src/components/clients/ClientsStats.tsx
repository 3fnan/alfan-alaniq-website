import Container from "@/components/ui/Container";
import Counter from "@/components/ui/Counter";
import { companyStats } from "@/data/stats";

export default function ClientsStats() {
    return (
        <section className="border-y border-navy/10 bg-white py-16">
            <Container>
                <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
                    {companyStats.map((stat) => (
                        <Counter
                            key={stat.label}
                            value={stat.value}
                            suffix={stat.suffix}
                            label={stat.label}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}