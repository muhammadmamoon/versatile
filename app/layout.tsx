import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Versatile Pro Facility Management | Premium GCC Services [cite: 7, 8]",
  description: "High-end multi-regional commercial and residential facility management execution solutions across Saudi Arabia and the UAE[cite: 7, 8].",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 text-slate-900 antialiased overflow-x-hidden min-h-screen flex flex-col justify-between`}
      >
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <FloatingWA />
      </body>
    </html>
  );
}