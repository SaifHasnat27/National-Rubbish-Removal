import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { localBusinessSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import { PAGE_SEO } from "@/lib/seo";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Home page SEO copy lives centrally in lib/seo.ts; the root layout also
// owns the site-wide title template + metadataBase that child pages inherit.
export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    template: `%s | ${BUSINESS.name}`,
    default: `${PAGE_SEO.home.title} | ${BUSINESS.name}`,
  },
  description: PAGE_SEO.home.description,
  keywords: PAGE_SEO.home.keywords,
  openGraph: {
    title: `${PAGE_SEO.home.title} | ${BUSINESS.name}`,
    description: PAGE_SEO.home.description,
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    locale: "en_AU",
    type: "website",
  },
  alternates: {
    canonical: PAGE_SEO.home.canonical,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen bg-base text-pretty">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
