"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Stat from "@/components/ui/Stat";
import { EASE } from "@/components/ui/Reveal";
import { company, whatsappHref } from "@/data/company";
import { companyStats } from "@/data/stats";

const HEADLINE = [
  { text: "HVAC, ducting", cls: "font-bold" },
  { text: "and MEP works", cls: "font-bold" },
  { text: "across the UAE.", cls: "font-light text-gold-light" },
];

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

const HERO_IMAGE = "/images/about/about-installation.png";

/**
 * Hero photo with depth: a stretched, blurred copy of the same image sits
 * behind it as a coloured "shadow", and the photo tilts slightly toward the
 * mouse. The tilt is off for touch and reduced-motion users.
 */
function HeroVisual() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 120, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });
  // The glow drifts the opposite way, which sells the depth.
  const glowX = useSpring(useTransform(mx, [-0.5, 0.5], [34, 10]), { stiffness: 80, damping: 20 });
  const glowY = useSpring(useTransform(my, [-0.5, 0.5], [34, 10]), { stiffness: 80, damping: 20 });

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div className="relative [perspective:1200px]" onPointerMove={onMove} onPointerLeave={onLeave}>
      <motion.div
        className="relative [transform-style:preserve-3d]"
        style={reduce ? undefined : { rotateX, rotateY }}
      >
        {/* Stretched, blurred copy of the photo: a soft glow in the image's own colours. Not clipped, so the blur fades out. */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={reduce ? { x: 22, y: 22 } : { x: glowX, y: glowY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: EASE }}
        >
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            sizes="45vw"
            className="scale-x-[1.12] scale-y-105 object-cover opacity-70 blur-3xl saturate-150"
          />
        </motion.div>

        <div className="chamfer-lg relative aspect-[3/2] w-full overflow-hidden shadow-2xl">
          <motion.div
            className="absolute inset-0"
            initial={{ clipPath: "inset(0 100% 0 0)", scale: 1.15 }}
            animate={{ clipPath: "inset(0 0% 0 0)", scale: 1 }}
            transition={{ duration: 1.3, delay: 0.2, ease: EASE }}
          >
            <Image
              src={HERO_IMAGE}
              alt="Rooftop chiller, ceiling ductwork, plant-room pipework and a commercial building"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy text-bg">
      <Container className="grid gap-12 pb-14 pt-14 lg:grid-cols-[1.1fr,1fr] lg:items-center lg:gap-14 lg:pb-20 lg:pt-20">
        <div>
          <motion.p className="flex items-center gap-3 text-sm font-medium tracking-wide text-gold-light" {...rise(0)}>
            <span aria-hidden className="h-px w-8 bg-gold" />
            {company.shortAddress}
            <span aria-hidden className="text-gold/50">|</span>
            Est. {company.founded}
          </motion.p>

          <h1 className="mt-6 font-display text-[44px] leading-[0.98] tracking-[-0.02em] sm:text-6xl lg:text-[72px]">
            {HEADLINE.map((line, i) => (
              <span key={line.text} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className={`block ${line.cls}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: EASE }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p className="mt-6 max-w-xl text-lg leading-relaxed text-on-dark-muted" {...rise(0.5)}>
            We install, repair and maintain air-conditioning, ventilation and ductwork for hospitals,
            showrooms, villas, offices and factories. Based in Deira, Dubai, and working across the UAE
            since {company.founded}.
          </motion.p>

          <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4" {...rise(0.62)}>
            <Button href="/contact" variant="primary" className="w-full sm:w-auto">
              Request a Quote
            </Button>
            <Button href={whatsappHref()} variant="whatsapp" arrow={false} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <FaWhatsapp size={17} /> WhatsApp us
            </Button>
          </motion.div>
        </div>

        <HeroVisual />
      </Container>

      <div className="border-t border-white/10">
        <Container>
          <dl className="grid grid-cols-2 sm:grid-cols-4">
            {companyStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="py-7 sm:px-6 sm:first:pl-0"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1, ease: EASE }}
              >
                <span aria-hidden className="mb-4 block h-[3px] w-8 bg-gold" />
                <Stat value={stat.value} label={stat.label} count={stat.count} />
              </motion.div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}
