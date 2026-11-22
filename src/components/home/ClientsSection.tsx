import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { clientLogos } from "@/data/clientLogo";

export default function ClientsSection() {
  const marqueeLogos = [...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            title="Who we've worked with"
            description="Main contractors, facility managers and building owners in Dubai, Sharjah and Abu Dhabi."
            className="mb-0"
          />
          <Button href="/clients" variant="outline" className="self-start sm:mb-1 sm:self-auto">
            Full client list
          </Button>
        </div>
      </Container>

      <div className="relative mt-12 overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee items-center gap-16">
          {marqueeLogos.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              aria-hidden={index >= clientLogos.length}
              className="flex h-20 w-40 flex-shrink-0 items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={index >= clientLogos.length ? "" : client.name}
                width={200}
                height={90}
                className="max-h-16 w-auto object-contain"
                style={{ transform: `scale(${client.scale ?? 1})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
