import { Building2, MapPin } from "lucide-react";
import { Client } from "@/types/client";

interface ClientCardProps {
    client: Client;
}

export default function ClientCard({ client }: ClientCardProps) {
    return (
        <article
            className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-navy/10
        bg-white
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-gold
        hover:shadow-2xl
      "
        >
            {/* Gold Top Border */}
            <div className="absolute left-0 top-0 h-1 w-full bg-gold scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Building2 size={28} />
            </div>

            <h3 className="text-xl font-display font-semibold leading-snug text-navy transition-colors group-hover:text-gold">
                {client.name}
            </h3>

            <div className="mt-6 flex items-center gap-2 text-sm text-steel">
                <MapPin size={16} className="text-gold" />
                <span>{client.location}</span>
            </div>

            <div className="mt-4">
                <span className="rounded-full bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold">
                    {client.category}
                </span>
            </div>
        </article>
    );
}