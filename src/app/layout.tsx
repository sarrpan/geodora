// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Geodora",
  description: "Δώρα της γης",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg`}>
        {/* Navbar */}
        <Navbar />

        {/* HeroSection full-bleed */}
        <HeroSection />

        {/* Main content with pale-green background inherited via body */}
        <main>
          <div className="container">{children}</div>
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
