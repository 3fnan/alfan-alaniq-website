import type { Metadata } from "next";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import ContactCTASection from "@/components/home/ContactCTASection";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import DuctDivider from "@/components/ui/DuctDivider";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import BlurCircle from "@/components/ui/BlurCircle";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Alfan Al Aniq Technical Services — an HVAC, ducting, MEP and fit-out contractor established in 2021 in Dubai, UAE.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-light via-navy to-navy-dark py-28 text-white">
        <BackgroundGrid />

        <BlurCircle className="-right-32 -top-32" />

        <BlurCircle
          className="bottom-0 left-0"
          color="#15324E"
        />
        <Container className="relative z-10">
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
    </main >
  );
}
