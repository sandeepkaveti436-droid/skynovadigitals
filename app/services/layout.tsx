import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design, Development and AI Services",
  description:
    "Explore SkyNova Digitals services: product design, high-performance web engineering, AI automation, and growth strategy.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
