import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed, IBM_Plex_Mono } from "next/font/google";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/layout/MotionProvider";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexCondensed = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
  variable: "--font-plex-condensed",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alfanalaniq.ae"),
  title: {
    default: "Alfan Al Aniq Technical Services | HVAC, Ducting & MEP Contractor, Dubai",
    template: "%s | Alfan Al Aniq Technical Services",
  },
  description:
    "HVAC, ducting, ventilation and MEP contractor based in Deira, Dubai. Installation, repair and design support across the UAE since 2021.",
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
    title: "Alfan Al Aniq Technical Services | HVAC, Ducting & MEP Contractor, Dubai",
    description:
      "HVAC, ducting, ventilation and MEP contractor based in Deira, Dubai. Installation, repair and design support across the UAE since 2021.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${plexSans.variable} ${plexCondensed.variable} ${plexMono.variable} font-sans`}>
        <MotionProvider>
          <TopBar />
          <Navbar />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
