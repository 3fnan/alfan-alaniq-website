import type { Metadata } from "next";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ContactCTASection from "@/components/home/ContactCTASection";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import BlurCircle from "@/components/ui/BlurCircle";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "300+ HVAC, VRF, ducting, MEP and fit-out projects completed by Alfan Al Aniq Technical Services across Dubai, Sharjah, Abu Dhabi, RAK and the UAE.",
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectsGrid />
      <ContactCTASection />
    </main>
  );
}
