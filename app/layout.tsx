import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Adriana So — AI Systems + Product Thinker",
  description: "Portfolio of Adriana So: AI pipelines, agents, and product case studies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-canvas min-h-screen flex flex-col font-sans text-ink">
        <Navbar />
        <div className="flex-1">{children}</div>
        <footer className="py-8 text-center text-sm text-muted border-t border-border">
          © 2026 Adriana So
        </footer>
      </body>
    </html>
  );
}
