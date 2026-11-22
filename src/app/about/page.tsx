import type { Metadata } from "next";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import ContactCTASection from "@/components/home/ContactCTASection";
import PageHeader from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Alfan Al Aniq Technical Services is an HVAC, ducting, MEP and fit-out contractor established in 2021 in Deira, Dubai.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        crumb="About"
        image="/images/about/about-installation.png"
        title="Set up in Dubai in 2021,"
        accent="built on years of HVAC work."
        intro="An HVAC, ducting and MEP contractor based in Al Marar, Deira, working for contractors, developers and building owners across the UAE."
      />
      <AboutSection />
      <WhyChooseUsSection />
      <ContactCTASection />
    </main>
  );
}
