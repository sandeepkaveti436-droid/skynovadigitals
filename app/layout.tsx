// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"; // 1. Added for speed tracking

export const metadata: Metadata = {
  metadataBase: new URL("https://skynovadigitals.vercel.app"),
  title: {
    default: "SkyNova Digitals | Digital Transformation & Product Studio",
    template: "%s | SkyNova Digitals",
  },
  alternates: {
    canonical: '/',
  },
   other: {
    "fetchpriority": "high", // Tells Google this is the most important image
  },
    description:
    "SkyNova Digitals is a premier digital transformation studio specializing in SEO, web development, AI automation, and high-performance growth systems.",
  keywords: [
    "SkyNova Digitals",
    "Sky Nov Digitals",
    "skynovadigitals",
    "SEO services",
    "web development agency",
  ],
  authors: [{ name: "SkyNova Digitals" }],
  creator: "SkyNova Digitals",
  verification: {
    google: "0a488f45af830b1f",
  },
  robots: { index: true, follow: true },
};

// 2. Define the JSON-LD outside the component for better performance
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SkyNova Digitals",
  alternateName: "Sky Nov Digitals",
  url: "https://skynovadigitals.vercel.app",
  logo: "https://skynovadigitals.vercel.app/favicon.ico",
  description:
    "SkyNova Digitals is a digital transformation studio specializing in SEO, web design, development, and AI automation.",
  image: "https://skynovadigitals.vercel.app/herobannerimages/hero-bg.png",
  areaServed: "Worldwide",
  serviceType: [
    "SEO Services",
    "Web Development",
    "UI/UX Design",
    "AI Automation",
    "Digital Marketing",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        <Analytics />
        <SpeedInsights /> 
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          key="business-jsonld"
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
