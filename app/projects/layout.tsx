import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Digital Product and Web Projects",
  description:
    "Explore selected web design, UI/UX, development, branding, and digital product work by SkyNova Digitals.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
