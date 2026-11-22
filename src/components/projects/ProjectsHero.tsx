import PageHeader from "@/components/layout/PageHeader";
import { PROJECT_COUNT } from "@/data/stats";

export default function ProjectsHero() {
  return (
    <PageHeader
      crumb="Projects"
      image="/images/projects/zazen.png"
      title="Selected projects"
      accent="across the UAE."
      intro={`Since 2021 we've completed ${PROJECT_COUNT} HVAC, VRF, ducting, MEP and fit-out jobs for hospitals, hotels, homes, offices and factories in the UAE. This is a representative selection.`}
    />
  );
}
