export interface ClientLogo {
    name: string;
    logo: string;
    scale?: number;
}

export const clientLogos: ClientLogo[] = [
    {
        name: "Engineering Contracting Company",
        logo: "/images/clients/ecc.png",
    },
    {
        name: "Bin Fardan General Contracting",
        logo: "/images/clients/bifco.png",
    },
    {
        name: "Bukhatir Group",
        logo: "/images/clients/bukhtair.png",
        scale: 1.5
    },
    {
        name: "Top Form Furnishing",
        logo: "/images/clients/topform.png",
    },
    {
        name: "Al Ghurair Group",
        logo: "/images/clients/ghurair.png",
    },
    {
        name: "United Masters Electromechanical",
        logo: "/images/clients/um-logo.png",
    },
    {
        name: "Core Serv Building Contracting",
        logo: "/images/clients/coreserv_logo.svg",
    },
    {
        name: "ZAS Medical Facilities",
        logo: "/images/clients/zas.svg",
    },
];