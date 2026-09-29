import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import RevealOnScroll from "@/components/RevealOnScroll";

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const sans = Poppins({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Digital Strategy Consultation",
  description:
    "Find out where your business stands digitally and get a plan for the next twelve months. Book a digital strategy consultation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} antialiased`}>
      <body className="min-h-screen">
        <SmoothScroll />
        <RevealOnScroll />
        {children}
      </body>
    </html>
  );
}
