import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import { GeistSans } from 'geist/font/sans';

const geist = GeistSans;

export const metadata: Metadata = {
  title: "Pascaline - calculate everything",
  description: "All calculations in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <div className="min-h-screen flex flex-col justify-between">
        <Navigation/>
        <main>
        {children}
        </main>
        <Footer/>
        </div>
      </body>
    </html>
  );
}
