import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import { clientLogos } from "@/data/clientLogo";
import Button from "@/components/ui/Button";

export default function ClientsSection() {
  const marqueeLogos = [...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="bg-bg-warm py-20">
      <Container>
        <SectionHeading
          eyebrow="Who we've worked with"
          title="Trusted across the Emirates."
        />

        <div className="relative overflow-hidden py-10">
          {/* Marquee */}
          <div className="marquee flex items-center gap-12">
            {marqueeLogos.map((client, index) => (
              <div
                key={index}
                className="flex h-28 w-44 flex-shrink-0 items-center justify-center transition duration-300 hover:scale-105"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={200}
                  height={90}
                  className="max-h-20 w-auto object-contain"
                  style={{
                    transform: `scale(${client.scale ?? 1})`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/clients">
            View All Clients
          </Button>
        </div>
      </Container>
    </section>
  );
}