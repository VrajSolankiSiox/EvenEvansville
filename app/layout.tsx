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
  openGraph: {
    title: "Evansville Inn & Suites | Evansville, Wisconsin",
    description:
      "Enjoy a comfortable stay at Evansville Inn & Suites. Featuring 31 guest rooms and suites, kitchenettes, jetted tubs, free parking, and a 24-hour front desk.",
    siteName: "Evansville Inn & Suites",
    locale: "en_US",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <LuxuryCursor />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
