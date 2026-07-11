import { Snowflake, Workflow, Wind, Wrench, Ruler, Settings2 } from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "equipment-installation",
    title: "Equipment Installation",
    description:
      "Chillers, ducted & ductless splits, rooftop packaged units, VRF, FCUs and AHUs.",
    longDescription:
      "We install chillers, ducted split units, rooftop packaged units, Variable Refrigerant Flow (VRF) systems, ductless split units, fan coil units, air handling units and fresh air handling units — sized and commissioned to spec.",
    icon: Snowflake,
    image: "/images/services/hvac-installation.jpeg",
  },
  {
    slug: "ducting-air-distribution",
    title: "Ducting & Air Distribution",
    description:
      "Fabrication and installation of supply, exhaust and ventilation ducting, plus air outlets and flow controllers.",
    longDescription:
      "Our duct fabricators build and install supply, exhaust and ventilation ductwork in-house, along with air outlets and flow controllers, so air distribution is balanced exactly as designed.",
    icon: Workflow,
    image: "/images/services/ducting.jpeg",
  },
  {
    slug: "ventilation",
    title: "Ventilation",
    description:
      "Ventilation duct works, exhaust fans and kitchen ecology unit installation with volume control and automation.",
    longDescription:
      "From kitchen ecology units to exhaust fan installation with volume control, we handle the ventilation side of indoor air quality, including automation of ventilation systems.",
    icon: Wind,
    image: "/images/services/mep.jpeg",
  },
  {
    slug: "repair-services",
    title: "Repair Services",
    description: "Breakdown repair service for air-conditioning equipment, all makes and models.",
    longDescription:
      "Our technicians provide breakdown repair service for air-conditioning equipment across all makes and models — diagnosed on-site, fixed fast.",
    icon: Wrench,
    image: "/images/services/repair.jpeg",
  },
  {
    slug: "design-support",
    title: "Design Support",
    description: "Thermal load calculation and duct design, backed by a team of HVAC professionals.",
    longDescription:
      "Our in-house HVAC professionals provide design support including thermal load calculation and duct design, so installs are right-sized from day one.",
    icon: Ruler,
    image: "/images/services/amc.jpeg",
  },
  {
    slug: "special-applications",
    title: "Special Applications",
    description:
      "Site visits and tailored fixes for cooling, humidity or air-quality issues.",
    longDescription:
      "Facing lack of cooling, high humidity or poor indoor air quality in an occupied building? We visit, analyse and propose the optimum fix — and we offer annual maintenance contracts (AMC) to keep it that way.",
    icon: Settings2,
    image: "/images/services/maintenance.jpeg",
  },
];
