import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Benjamín Rivera | Desarrollador Full-Stack",
  description: "Portafolio de Benjamín Rivera, Desarrollador Web y Estudiante de Ingeniería Informática en la UnACh. Especializado en React, Next.js y Laravel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}