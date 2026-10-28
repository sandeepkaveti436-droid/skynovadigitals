import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import FeaturedWork from "@/src/components/FeaturedWork";
import Services from "@/src/components/Services";
import WhyChooseUs from "@/src/components/WhyChooseUs";
import Process from "@/src/components/Process";
import Results from "@/src/components/Results";
import Testimonials from "@/src/components/Testimonials";
import FinalCTA from "@/src/components/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <FeaturedWork />
      <Results />
      <Services />
      <WhyChooseUs/>
      <Process/>
      <Testimonials/>
      <FinalCTA/>
    </div>
  );
}
