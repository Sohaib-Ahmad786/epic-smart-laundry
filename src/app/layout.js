import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://epicsmartlaundry.com"),
  title: {
    default: "EPIC Smart Laundry — Premium Pickup & Delivery Laundry Service",
    template: "%s | EPIC Smart Laundry",
  },
  description:
    "Premium laundry pickup & delivery for students and professionals. Wash, iron, dry clean with free doorstep service. 24h turnaround. Book your pickup today!",
  keywords: [
    "laundry service",
    "pickup and delivery",
    "dry cleaning",
    "ironing service",
    "student laundry",
    "EPIC Smart Laundry",
    "wash and fold",
    "premium laundry",
  ],
  authors: [{ name: "EPIC Smart Laundry" }],
  creator: "EPIC Smart Laundry",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://epicsmartlaundry.com",
    siteName: "EPIC Smart Laundry",
    title: "EPIC Smart Laundry — Premium Pickup & Delivery",
    description:
      "Premium laundry pickup & delivery for students and professionals. Free doorstep service with 24h turnaround.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EPIC Smart Laundry - Premium Laundry Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EPIC Smart Laundry — Premium Pickup & Delivery",
    description:
      "Premium laundry pickup & delivery for students and professionals. Free doorstep service with 24h turnaround.",
    images: ["/og-image.png"],
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
  alternates: {
    canonical: "https://epicsmartlaundry.com",
  },
};

export const viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
