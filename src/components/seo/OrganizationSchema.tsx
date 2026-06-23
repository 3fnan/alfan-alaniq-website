"use client";

import { OrganizationJsonLd } from "next-seo";
import { company } from "@/data/company";

/**
 * Structured data (JSON-LD) for the organization, rendered via next-seo.
 * Page-level SEO tags themselves are handled by the Next.js Metadata API
 * (see each page's `metadata` export) — this component only adds the
 * machine-readable business schema for search engines.
 */
export default function OrganizationSchema() {
  return (
    <OrganizationJsonLd
      type="HomeAndConstructionBusiness"
      name={company.tradeName}
      url="https://www.alfanalaniq.ae/"
      logo="https://www.alfanalaniq.ae/images/about/about-installation.jpeg"
      description="HVAC, ducting, MEP and fit-out contractor based in Dubai, UAE."
    />
  );
}
