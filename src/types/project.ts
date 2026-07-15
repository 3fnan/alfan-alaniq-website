export type ProjectCategory = "HVAC" | "VRF" | "DUCT" | "MEP" | "FITOUT";

export interface Project {
  id: number;
  name: string;
  location: string;
  jobDescription: string;
  category: ProjectCategory;
  image?: string;
}

export interface ProjectFilter {
  label: string;
  value: "all" | ProjectCategory;
}
