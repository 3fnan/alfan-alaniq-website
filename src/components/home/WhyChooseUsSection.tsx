import { ShieldCheck, Zap, Users, Wrench, MapPinned, Headphones } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import DuctDivider from "@/components/ui/DuctDivider";
import { whyChooseUs } from "@/data/whyChooseUs";
import type { WhyChooseUsItem } from "@/types";

const ICONS: Record<WhyChooseUsItem["iconKey"], typeof ShieldCheck> = {
  trust: ShieldCheck,
  speed: Zap,
  team: Users,
  tools: Wrench,
  coverage: MapPinned,
  support: Headphones,
};

export default function WhyChooseUsSection() {
  return (
    <section className="bg-navy py-20 text-bg">
      <Container>
        <SectionHeading
          eyebrow="Why choose us"
          title="Built to be the contractor you don't have to follow up with."
          tone="dark"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = ICONS[item.iconKey];
            return (
              <AnimatedCard key={item.title} delay={i * 0.05}>
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 flex-none items-center justify-center border border-gold/40 text-gold-light">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-bg">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-[#A9B6C0]">{item.description}</p>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </Container>
      <div className="mt-16">
        <DuctDivider tone="dark" />
      </div>
    </section>
  );
}
