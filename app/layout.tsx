// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://skynovadigitals.vercel.app"),
  title: {
    default: "SkyNova Digitals | Digital Product Studio",
    template: "%s | SkyNova Digitals",
  },
  description:
    "SkyNova Digitals is a digital product studio creating high-performance websites, product design, AI automation, and growth systems for ambitious brands.",
  keywords: [
    "digital product studio",
    "web design agency",
    "web development agency",
    "UI UX design studio",
    "Next.js development",
    "AI automation agency",
    "digital transformation agency",
    "growth strategy agency",
    "high-performance websites",
    "SkyNova Digitals",
  ],
  authors: [{ name: "SkyNova Digitals" }],
  creator: "SkyNova Digitals",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://skynovadigitals.vercel.app",
    siteName: "SkyNova Digitals",
    title: "SkyNova Digitals | Digital Product Studio",
    description:
      "High-performance websites, digital products, AI automation, and growth systems for ambitious brands.",
    images: [
      {
        url: "/herobannerimages/hero-bg.png",
        width: 1600,
        height: 900,
        alt: "SkyNova Digitals digital product studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyNova Digitals | Digital Product Studio",
    description:
      "High-performance websites, digital products, AI automation, and growth systems.",
    images: ["/herobannerimages/hero-bg.png"],
  },
  robots: { index: true, follow: true },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "SkyNova Digitals",
              url: "https://skynovadigitals.vercel.app",
              description:
                "Digital product studio specializing in web design, development, AI automation, and growth strategy.",
              image:
                "https://skynovadigitals.vercel.app/herobannerimages/hero-bg.png",
              areaServed: "Worldwide",
              serviceType: [
                "Web Design",
                "Web Development",
                "UI/UX Design",
                "AI Automation",
                "Growth Strategy",
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
