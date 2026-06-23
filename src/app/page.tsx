import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ClientsSection from "@/components/home/ClientsSection";
import ContactCTASection from "@/components/home/ContactCTASection";
import DuctDivider from "@/components/ui/DuctDivider";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

export default function HomePage() {
  return (
    <main>
      <OrganizationSchema />
      <HeroSection />
      <DuctDivider />
      <AboutSection />
      <DuctDivider />
      <ServicesSection />
      <WhyChooseUsSection />
      <DuctDivider />
      <ProjectsSection />
      <DuctDivider />
      <ClientsSection />
      <ContactCTASection />
    </main>
  );
}
