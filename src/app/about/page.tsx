import type { Metadata } from "next";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import ContactCTASection from "@/components/home/ContactCTASection";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import DuctDivider from "@/components/ui/DuctDivider";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Alfan Al Aniq Technical Services — an HVAC, ducting, MEP and fit-out contractor established in 2021 in Dubai, UAE.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-navy py-16 text-bg">
        <Container>
          <Badge tone="dark">About us</Badge>
          <h1 className="max-w-2xl font-display text-4xl font-semibold sm:text-5xl">
            A small team, built around the trades that matter.
          </h1>
        </Container>
      </section>
      <AboutSection />
      <DuctDivider />
      <WhyChooseUsSection />
      <ContactCTASection />
    </main>
  );
}
