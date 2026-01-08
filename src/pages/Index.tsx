import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { Synergy365Section } from "@/components/sections/Synergy365Section";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { HRDCSection } from "@/components/sections/HRDCSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ClientsSection />
        <ActivitiesSection />
        <Synergy365Section />
        <WhyChooseSection />
        <HRDCSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Index;
