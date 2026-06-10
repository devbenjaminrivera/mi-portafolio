import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s — Benjamín Rivera",
    default: "Benjamín Rivera — Desarrollador Full-Stack",
  },
  description:
    "Portafolio de Benjamín Rivera, Ingeniero Informático en formación. Especializado en Next.js, React y Laravel.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body>
        <Navbar />
        <div className="page-wrapper">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
