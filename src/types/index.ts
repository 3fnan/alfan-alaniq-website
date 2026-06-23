export * from "./company";
export * from "./navigation";
export * from "./service";
export * from "./project";
export * from "./client";

export interface WhyChooseUsItem {
  title: string;
  description: string;
  iconKey: "trust" | "speed" | "team" | "tools" | "coverage" | "support";
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}
