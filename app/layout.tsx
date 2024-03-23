import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import { GeistSans } from "geist/font/sans";
import localFont from 'next/font/local'

const MathFont = localFont({src: './fonts/lmmath-regular.otf',variable: '--math-font'})

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
      <head>
        <link
          href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={geist.className}>
        <div className="min-h-screen flex flex-col justify-between">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
