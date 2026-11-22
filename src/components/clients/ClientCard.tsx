import Reveal from "@/components/ui/Reveal";
import type { Client } from "@/types/client";

interface ClientCardProps {
  client: Client;
  index: number;
}

export default function ClientCard({ client, index }: ClientCardProps) {
  return (
    <Reveal
      as="li"
      y={12}
      delay={Math.min(index * 0.03, 0.4)}
      className="group flex flex-col justify-between gap-1 border-b border-navy/10 py-4 sm:flex-row sm:items-baseline sm:gap-4"
    >
      <span className="font-medium text-navy transition-transform duration-300 group-hover:translate-x-1.5">
        {client.name}
      </span>
      <span className="flex-none text-sm text-steel">{client.location}</span>
    </Reveal>
  );
}
