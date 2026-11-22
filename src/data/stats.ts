import { company } from "./company";

/** Single source for every headline number on the site. */
export interface CompanyStat {
  value: string;
  label: string;
  /** Animate a count-up. Off for the founding year. */
  count: boolean;
}

export const companyStats: CompanyStat[] = [
  { value: "300+", label: "Projects completed", count: true },
  { value: "40+", label: "Clients served", count: true },
  { value: String(company.serviceAreas.length), label: "Emirates covered", count: true },
  { value: company.founded, label: "Established in Dubai", count: false },
];

export const PROJECT_COUNT = "300+";
