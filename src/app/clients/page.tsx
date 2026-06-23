import ClientsHero from "@/components/clients/ClientsHero";
import ClientsStats from "@/components/clients/ClientsStats";
import ClientsGrid from "@/components/clients/ClientsGrid";
import ContactCTASection from "@/components/home/ContactCTASection";

export default function ClientsPage() {
    return (
        <>
            <ClientsHero />
            <ClientsStats />
            <ClientsGrid />
            <ContactCTASection />
        </>
    );
}