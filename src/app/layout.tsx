import type { Metadata } from "next";
import { Inter, Inter_Tight, Caveat } from "next/font/google";
import "./globals.css";
import data from "@/data/data.json";

// Body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Headings (Daniel Sun uses Inter Tight for large display type)
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Handwritten accents (the playful "=)" notes)
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: data.meta.site_title,
  description: data.meta.site_description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
