// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://skynovadigitals.vercel.app"),
  title: {
    default: "SkyNova Digitals | Digital Transformation & Product Studio",
    template: "%s | SkyNova Digitals",
  },
  description:
    "SkyNova Digitals is a premier digital transformation studio specializing in SEO, web development, AI automation, and high-performance growth systems. We turn your ideas into reality.",
  keywords: [
    "SkyNova Digitals",
    "Sky Nov Digitals",
    "skynovadigitals",
    "digital product studio",
    "web design agency",
    "SEO services",
    "digital marketing agency",
    "web development agency",
    "AI automation agency",
    "digital transformation studio",
    "high-performance websites",
  ],
  authors: [{ name: "SkyNova Digitals" }],
  creator: "SkyNova Digitals",
  alternates: { canonical: "/" },
  verification: {
    // This is the code from your filename google0a488f45af830b1f.html
    google: "0a488f45af830b1f",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://skynovadigitals.vercel.app",
    siteName: "SkyNova Digitals",
    title: "SkyNova Digitals | Turning Ideas Into Reality",
    description:
      "Expert digital solutions, SEO services, and AI automation to scale your business online with SkyNova Digitals.",
    images: [
      {
        url: "/herobannerimages/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "SkyNova Digitals - Digital Transformation Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyNova Digitals | Digital Transformation Studio",
    description:
      "High-performance websites, SEO, AI automation, and digital growth systems.",
    images: ["/herobannerimages/hero-bg.png"],
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
        {/* Structured Data for Google (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "SkyNova Digitals",
              alternateName: "Sky Nov Digitals",
              url: "https://skynovadigitals.vercel.app",
              logo: "https://skynovadigitals.vercel.app/favicon.ico",
              description:
                "SkyNova Digitals is a digital transformation studio specializing in SEO, web design, development, and AI automation.",
              image:
                "https://skynovadigitals.vercel.app/herobannerimages/hero-bg.png",
              areaServed: "Worldwide",
              serviceType: [
                "SEO Services",
                "Web Development",
                "UI/UX Design",
                "AI Automation",
                "Digital Marketing",
              ],
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
