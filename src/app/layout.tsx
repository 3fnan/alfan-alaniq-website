import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, IBM_Plex_Mono, } from "next/font/google";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alfanalaniq.ae"),
  title: {
    default: "Alfan Al Aniq Technical Services | HVAC, MEP & Fit-out, Dubai",
    template: "%s | Alfan Al Aniq Technical Services",
  },
  description:
    "Alfan Al Aniq Technical Services designs, installs and maintains HVAC, ducting, MEP and fit-out systems across the UAE. Established 2021, Dubai. License No. 927018.",
  keywords: [
    "HVAC Dubai",
    "ducting contractor UAE",
    "MEP works Dubai",
    "AC maintenance Dubai",
    "fit-out contractor Sharjah",
    "VRF installation UAE",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://www.alfanalaniq.ae/",
    siteName: "Alfan Al Aniq Technical Services",
    title: "Alfan Al Aniq Technical Services | HVAC, MEP & Fit-out, Dubai",
    description:
      "Comfort is multidimensional. We engineer every part of it — HVAC, ducting, ventilation, MEP and fit-out works across the Emirates.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${inter.variable} ${plexMono.variable} font-sans`}>
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
