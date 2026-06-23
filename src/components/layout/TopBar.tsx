import { Mail, Phone, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import { company } from "@/data/company";

/** Thin contact strip above the main navbar — hidden on small screens. */
export default function TopBar() {
  return (
    <div className="hidden border-b border-gold/15 bg-navy-dark text-[#A9B6C0] md:block">
      <Container className="flex items-center justify-between py-2 text-xs">
        <div className="flex items-center gap-6">
          <a href={`tel:${company.phones[0].replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-gold-light">
            <Phone size={13} /> {company.phones[0]}
          </a>
          <a href={`mailto:${company.emails}`} className="flex items-center gap-1.5 hover:text-gold-light">
            <Mail size={13} /> {company.emails}
          </a>
        </div>
        <div className="hidden items-center gap-1.5 lg:flex">
          <MapPin size={13} /> Deira, Dubai, U.A.E.
        </div>
      </Container>
    </div>
  );
}
