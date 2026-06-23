import { company } from "@/data/company";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",

    name: company.tradeName,
    legalName: company.legalName,

    url: "https://www.alfanalaniq.ae",

    logo:
      "https://www.alfanalaniq.ae/images/about/about-installation.jpeg",

    description:
      "Professional HVAC, MEP, ducting, fit-out and technical services contractor based in Dubai, UAE.",

    foundingDate: company.founded,

    telephone: company.phones,

    email: company.emails,

    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: "Dubai",
      addressCountry: "AE",
    },

    vatID: company.trn,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}