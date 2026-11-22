import type { Metadata } from "next";
import ClientsHero from "@/components/clients/ClientsHero";
import ClientsStats from "@/components/clients/ClientsStats";
import ClientsGrid from "@/components/clients/ClientsGrid";
import ContactCTASection from "@/components/home/ContactCTASection";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Contractors, developers, facility managers and manufacturers that Alfan Al Aniq Technical Services has carried out HVAC, ducting and MEP work for across the UAE.",
};

export default function ClientsPage() {
  return (
    <main>
      <ClientsHero />
      <ClientsStats />
      <ClientsGrid />
      <ContactCTASection />
    </main>
  );
}
