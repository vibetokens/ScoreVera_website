import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BureauStrip from "@/components/BureauStrip";
import ProofStrip from "@/components/ProofStrip";
import Pillars from "@/components/Pillars";
import HowItWorks from "@/components/HowItWorks";
import Objections from "@/components/Objections";
import ProcessCompare from "@/components/ProcessCompare";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ScoreVera",
  url: "https://scorevera.com",
  logo: "https://scorevera.com/icon",
  description: "FCRA-compliant credit dispute software. Upload your credit report, identify errors, and generate the right dispute letters at the right time.",
  sameAs: ["https://twitter.com/scorevera"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@scorevera.com",
    contactType: "customer support",
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ScoreVera",
  url: "https://scorevera.com",
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <BureauStrip />
        <ProofStrip />
        <Pillars />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Objections />
        <ProcessCompare />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
