export interface FontCandidate {
    name: string;
    headingClass: string;
    category: string;
    description: string;
}

export const fontCandidates: FontCandidate[] = [
    {
        name: "Zilla Slab",
        headingClass: "font-zilla",
        category: "Slab Serif",
        description:
            "Strong, premium and dependable. Ideal for engineering, construction and industrial brands.",
    },
    {
        name: "DM Serif Display",
        headingClass: "font-dm",
        category: "Display Serif",
        description:
            "Elegant, luxurious and editorial. Perfect for premium branding with a sophisticated personality.",
    },
    {
        name: "Manrope",
        headingClass: "font-manrope",
        category: "Modern Sans",
        description:
            "Minimal, clean and highly readable. Excellent for modern corporate and technology websites.",
    },
    {
        name: "Space Grotesk",
        headingClass: "font-space",
        category: "Geometric Sans",
        description:
            "Bold, technical and futuristic. Gives an innovative and engineering-focused appearance.",
    },
    {
        name: "Plus Jakarta Sans",
        headingClass: "font-jakarta",
        category: "Humanist Sans",
        description:
            "Friendly, professional and versatile. Balances modern aesthetics with excellent readability.",
    },
    {
        name: "Bricolage Grotesque",
        headingClass: "font-bricolage",
        category: "Grotesque Sans",
        description:
            "Distinctive, contemporary and confident. Adds personality while remaining professional.",
    },
];