import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import { company, telHref } from "@/data/company";

/** Thin contact strip above the main navbar, hidden on small screens. */
export default function TopBar() {
  return (
    <div className="hidden border-b border-gold/15 bg-navy-dark text-on-dark-muted md:block">
      <Container className="flex items-center justify-between py-2 text-xs">
        <div className="flex items-center gap-6">
          <a href={telHref(company.phones[0])} className="flex items-center gap-1.5 hover:text-gold-light">
            <Phone size={13} /> {company.phones[0]}
          </a>
          <a href={`mailto:${company.primaryEmail}`} className="flex items-center gap-1.5 hover:text-gold-light">
            <Mail size={13} /> {company.primaryEmail}
          </a>
        </div>
        <div className="hidden items-center gap-6 lg:flex">
          <span className="flex items-center gap-1.5">
            <Clock size={13} /> {company.hours}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} /> {company.shortAddress}
          </span>
        </div>
      </Container>
    </div>
  );
}
