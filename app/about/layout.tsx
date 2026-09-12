import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Digital Product Studio",
  description:
    "Meet SkyNova Digitals, a boutique digital product studio combining strategy, design, engineering, and growth for ambitious brands.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
