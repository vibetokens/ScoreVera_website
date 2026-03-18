import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BureauStrip from "@/components/BureauStrip";
import Founder from "@/components/Founder";
import Pillars from "@/components/Pillars";
import HowItWorks from "@/components/HowItWorks";
import Objections from "@/components/Objections";
import ProcessCompare from "@/components/ProcessCompare";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BureauStrip />
        <Founder />
        <Pillars />
        <HowItWorks />
        <ProcessCompare />
        <Objections />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
