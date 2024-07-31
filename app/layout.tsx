import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OMAR JARMOUNI - DevOps&Cloud | SAM | FullStack",
  description:
    "Junior Software Engineer from Morocco with 1 years of expertise. Specializing DevOps&Cloud engreenring, SAM, and FullStack Developper.",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Omar Jarmouni",
    "Next.js",
    "React",
    "ReactNative",
  ],
  openGraph: {
    title: "OMAR JARMOUNI - DevOps&Cloud | SAM | FullStack",
    description:
      "Junior Software Engineer from Morocco with 1 years of expertise. Specializing DevOps&Cloud engreenring, SAM, and FullStack Developper.",
    // images: "/OpenGraph.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
