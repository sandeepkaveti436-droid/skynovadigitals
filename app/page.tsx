// app/page.tsx
import Hero from "@/src/components/Hero";
import StatsSection from "@/src/components/StatsSection";
import WhatWeDeliver from "@/src/components/WhatWeDeliver";
import ProcessSection from "@/src/components/ProcessSection";
import Testimonials from "@/src/components/Testimonials";
import CTASection from "@/src/components/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <StatsSection />
      <WhatWeDeliver />
      <ProcessSection />
      <Testimonials />
      <CTASection />
    </div>
  );
}