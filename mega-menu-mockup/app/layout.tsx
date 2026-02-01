import type { Metadata } from "next";
import { Raleway, Geist_Mono } from "next/font/google";
import "./globals.css";
import MegaMenu from "./components/MegaMenu";
import OverviewSections from "./components/OverviewSections";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welding & Welder - Process-Driven Mega Menu Mockup",
  description: "Proposed navigation restructure for weldingandwelder.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-raleway), sans-serif" }}
      >
        <MegaMenu />
        {children}
        <OverviewSections />
      </body>
    </html>
  );
}
