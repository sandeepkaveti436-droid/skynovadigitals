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
    "Sky Nova Digitals",
    "skynovadigitals",
    "SkyNova Digital",
    "Sky Nova Digital",
    "SkyNova agency",
    "SkyNova studio",
    "Sky",
    "nova",
    "agency",
    "digital",
    "marketing",
    "digital marketing agency",

    // Core Services
    "digital product studio",
    "digital product agency",
    "digital agency",
    "digital solutions agency",
    "digital transformation studio",
    "digital transformation agency",
    "technology solutions company",
    "digital innovation agency",

    // Website Design
    "web design agency",
    "website design agency",
    "website development agency",
    "professional web design",
    "modern website design",
    "custom website design",
    "responsive web design",
    "UI UX design agency",
    "UI UX design services",
    "premium website design",
    "high-performance websites",
    "business website development",
    "corporate website design",
    "landing page design agency",

    // Web Development
    "web development agency",
    "custom web development",
    "full stack development agency",
    "frontend development agency",
    "backend development agency",
    "React development agency",
    "Next.js development agency",
    "Next.js web development",
    "modern web development",
    "scalable web applications",
    "web application development",
    "custom web applications",

    // SEO
    "SEO services",
    "SEO agency",
    "SEO company",
    "SEO services Hyderabad",
    "local SEO services",
    "technical SEO services",
    "on-page SEO services",
    "SEO optimization agency",
    "website SEO services",
    "Google ranking services",
    "search engine optimization agency",

    // Digital Marketing
    "digital marketing agency",
    "digital marketing company",
    "online marketing agency",
    "performance marketing agency",
    "social media marketing agency",
    "content marketing agency",
    "Google Ads agency",
    "PPC management agency",
    "brand marketing agency",
    "online growth agency",

    // AI
    "AI automation agency",
    "AI development agency",
    "AI solutions company",
    "AI automation services",
    "AI business automation",
    "AI chatbot development",
    "AI agent development",
    "AI integration services",
    "AI-powered applications",
    "generative AI solutions",
    "business process automation",
    "AI transformation agency",

    // Software / Product
    "software development agency",
    "software development company",
    "custom software development",
    "SaaS development agency",
    "SaaS product development",
    "MVP development agency",
    "startup technology partner",
    "startup development agency",
    "digital product development",
    "product engineering agency",
    "custom business software",

    // Branding
    "branding agency",
    "brand identity design",
    "creative digital agency",
    "brand design services",
    "visual identity design",
    "logo and branding agency",
    "creative design studio",

    // Location
    "digital agency Hyderabad",
    "web design agency Hyderabad",
    "web development agency Hyderabad",
    "SEO agency Hyderabad",
    "digital marketing agency Hyderabad",
    "AI automation agency Hyderabad",
    "software development company Hyderabad",
    "UI UX agency Hyderabad",
    "website development company Hyderabad",
    "digital product studio Hyderabad",
    "web design company Telangana",
    "digital agency Telangana",
    "web development company Telangana",
    "digital agency India",
    "web development agency India",

    // High-intent searches
    "best web design agency",
    "affordable web design agency",
    "affordable website development",
    "professional website development",
    "website development for businesses",
    "website redesign agency",
    "website redesign services",
    "business digital transformation",
    "digital solutions for businesses",
    "technology partner for startups",
    "website agency for startups",
    "digital agency for small businesses",
    "custom digital solutions",
    "end-to-end digital solutions",
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
