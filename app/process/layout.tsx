import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Digital Product Design and Development Process",
  description:
    "See how SkyNova Digitals moves from discovery and strategy to design, development, and continuous growth.",
  alternates: { canonical: "/process" },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
