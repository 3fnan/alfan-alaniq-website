import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BlurCircle from "@/components/ui/BlurCircle";

export default function ContactCTASection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-bg">
      <BlurCircle className="-bottom-40 -right-20" />
      <Container className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-lg">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Have a comfort problem? Let&apos;s think it through together.
          </h2>
          <p className="mt-3 text-[#A9B6C0]">
            Whether it&apos;s a full HVAC install, a breakdown call-out, or a fit-out
            that needs MEP coordination &mdash; reach out and we&apos;ll send someone
            to assess it.
          </p>
        </div>
        <div className="flex flex-none gap-4">
          <Button href="/contact" variant="primary">Request a Quote</Button>
          <Button href="/services" variant="ghost">Our Services</Button>
        </div>
      </Container>
    </section>
  );
}
