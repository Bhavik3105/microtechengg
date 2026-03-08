import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOJsonLd from "@/components/SEOJsonLd";
import PopupInquiryForm from "@/components/PopupInquiryForm";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://www.microtechengg.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Microtech Engineering – Industrial & Pharmaceutical Machinery Manufacturer in Mumbai",
    template: "%s | Microtech Engineering",
  },
  description:
    "Microtech Engineering is a Mumbai-based manufacturer and exporter of pressure vessels, storage tanks, liquid processing plants and pharmaceutical machinery.",
  keywords: [
    "pharmaceutical machinery manufacturer Mumbai",
    "pressure vessel manufacturer India",
    "industrial machinery manufacturer Vasai",
    "stainless steel tanks manufacturer",
    "liquid oral processing plant",
    "ointment manufacturing plant",
    "pharmaceutical equipment supplier",
    "WFI storage tanks",
    "Microtech Engineering",
  ],
  authors: [{ name: "Microtech Engineering", url: siteUrl }],
  creator: "Microtech Engineering",
  publisher: "Microtech Engineering",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" }
    ],
    apple: [
      { url: "/favicon.png", type: "image/png" }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Microtech Engineering",
    title:
      "Microtech Engineering – Industrial & Pharmaceutical Machinery Manufacturer in Mumbai",
    description:
      "Microtech Engineering is a Mumbai-based manufacturer and exporter of pressure vessels, storage tanks, liquid processing plants and pharmaceutical machinery.",
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Microtech Engineering – Industrial & Pharmaceutical Machinery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Microtech Engineering – Industrial & Pharmaceutical Machinery Manufacturer",
    description:
      "Mumbai-based manufacturer of pressure vessels, storage tanks, and pharmaceutical machinery.",
    images: [`${siteUrl}/images/og-image.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <SEOJsonLd url={siteUrl} />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <PopupInquiryForm />
      </body>
    </html>
  );
}
