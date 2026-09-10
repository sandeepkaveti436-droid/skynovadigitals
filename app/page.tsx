import Hero from "@/src/components/Hero";
import ValueStripSection from "@/src/components/ValueStripSection";
import FeaturedWork from "@/src/components/FeaturedWork";
import Services from "@/src/components/Services";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import About from "@/src/components/About";
import Process from "@/src/components/Process";
import Results from "@/src/components/Results";
import Testimonials from "@/src/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ValueStripSection />
      <FeaturedWork />
      <Services />
      <WhyChooseUs/>
      <About />
      <Process/>
      <Results />
      <Testimonials/>
    </div>
  );
}
