import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LuxuryCursor } from "@/components/luxury-cursor";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evansvilleinn.com"),
  title: {
    template: "%s | Evansville Inn & Suites",
    default: "Evansville Inn & Suites | Evansville, Wisconsin",
  },
  description:
    "Enjoy a comfortable stay at Evansville Inn & Suites. Featuring 31 guest rooms and suites, kitchenettes, jetted tubs, free parking, and a 24-hour front desk.",
  keywords: [
    "Evansville WI hotel",
    "Evansville Wisconsin lodging",
    "Evansville Inn & Suites",
    "pet-friendly hotel Evansville",
    "extended stay Evansville WI",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Evansville Inn & Suites | Evansville, Wisconsin",
    description:
      "Enjoy a comfortable stay at Evansville Inn & Suites. Featuring 31 guest rooms and suites, kitchenettes, jetted tubs, free parking, and a 24-hour front desk.",
    siteName: "Evansville Inn & Suites",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/MainHotelHero2.jpg",
        width: 1200,
        height: 630,
        alt: "Evansville Inn & Suites Exterior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evansville Inn & Suites | Evansville, Wisconsin",
    description:
      "Enjoy a comfortable stay at Evansville Inn & Suites. Featuring 31 guest rooms and suites, kitchenettes, jetted tubs, free parking, and a 24-hour front desk.",
    images: ["/MainHotelHero2.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Evansville Inn & Suites",
  "description": "Comfortable lodging in Evansville, Wisconsin featuring 31 guest rooms, kitchenettes, and a 24-hour front desk.",
  "url": "https://evansvilleinn.com",
  "telephone": "+1-608-882-1295",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "715 Brown School Rd",
    "addressLocality": "Evansville",
    "addressRegion": "WI",
    "postalCode": "53536",
    "addressCountry": "US"
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Free Wi-Fi",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Free Parking",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Pet-Friendly",
      "value": true
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full">
        <LuxuryCursor />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
