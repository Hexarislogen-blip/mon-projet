import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Preloader from "@/components/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hector SEDO — Ingénieur Logiciel Orienté Sécurité",
  description: "Développement, cybersécurité et automatisation. Applications web et mobiles de haute qualité, audits de sécurité, et pipelines CI/CD complexes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="bg-[#0a0a0a] text-[#ededed] antialiased">
        <Preloader />
        <Header />
        <main className="mx-3 md:mx-5">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
