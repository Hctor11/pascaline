import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";

const MathFont = localFont({
  src: "./fonts/lmmath-regular.otf",
  variable: "--math-font",
});

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
        <title>Pascaline - calculate everything</title>
        <meta name="title" content="Pascaline - calculate everything" />
        <meta name="description" content="All calculations in one place." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pascaline.vercel.app/" />
        <meta property="og:title" content="Pascaline - calculate everything" />
        <meta
          property="og:description"
          content="All calculations in one place."
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://pascaline.vercel.app/" />
        <meta
          property="twitter:title"
          content="Pascaline - calculate everything"
        />
        <meta
          property="twitter:description"
          content="All calculations in one place."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />

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
