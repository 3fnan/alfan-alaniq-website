import type { CompanyDetails } from "@/types";

export const company: CompanyDetails = {
  legalName: "ALFAN AL ANIQ TECHNICAL SERVICES",
  tradeName: "Alfan Al Aniq Technical Services",
  licenseNumber: "927018",
  legalStatus: "Sole Establishment",
  trn: "100312070400003",
  address:
    "Heirs of Ahmed Obaid Bin Touq Al Marri Building, Al Marar, Deira, Dubai, U.A.E.",
  shortAddress: "Al Marar, Deira, Dubai",
  emails: ["info@alfanalaniq.ae", "ihsan@alfanalaniq.ae"],
  primaryEmail: "info@alfanalaniq.ae",
  phones: ["+971 52 783 8646", "+971 52 415 0026"],
  // Digits only, international format, for wa.me links.
  whatsapp: "971527838646",
  hours: "Sun – Thu, 8:00 AM – 6:00 PM",
  serviceAreas: ["Dubai", "Sharjah", "Abu Dhabi", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"],
  founded: "2021",
  vision:
    "To be a brand of trust and reliability in the industry, by providing solutions to customers based on their specific requirements.",
  mission:
    "To put a smile on our customer's face, by bringing comfort to their indoor environment.",
};

/** Strip spaces so a display number can be used in a tel: link. */
export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

export const whatsappHref = (text?: string) =>
  `https://wa.me/${company.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`;
