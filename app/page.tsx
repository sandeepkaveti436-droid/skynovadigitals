import Hero from "@/src/components/Hero";
import ValueStripSection from "@/src/components/ValueStripSection";
import FeaturedWork from "@/src/components/FeaturedWork";
import ProcessSection from "@/src/components/ProcessSection";
import Testimonials from "@/src/components/Testimonials";
import CTASection from "@/src/components/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ValueStripSection />
      <FeaturedWork />
      <ProcessSection />
      <Testimonials />
      <CTASection />
    </div>
  );
}
