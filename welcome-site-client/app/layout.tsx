import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModalProvider from "@/components/ContactModalProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable}`}
    >
      <body className="bg-background text-foreground antialiased">
        <ContactModalProvider>
          <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.18),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.25),rgba(15,23,42,0.95))]" aria-hidden />
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ContactModalProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "BuilderStack — AI platform for Canadian homebuilders",
  description:
    "BuilderStack centralizes content automation, branded web experiences, and buyer insights — built with Canadian homebuilders in mind.",
  keywords: [
    "BuilderStack",
    "homebuilder",
    "AI",
    "digital brochure",
    "marketing automation",
  ],
};
