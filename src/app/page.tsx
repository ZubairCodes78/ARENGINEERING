import AboutPreview from "@/components/home/AboutPreview";
import CompanyTimelinePreview from "@/components/home/CompanyTimelinePreview";
import ContactBand from "@/components/home/ContactBand";
import FeaturedMachines from "@/components/home/FeaturedMachines";
import FounderPremium from "@/components/FounderPremium";
import Hero from "@/components/home/Hero";
import StatsBand from "@/components/home/StatsBand";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TrustedClients from "@/components/home/TrustedClients";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FounderPremium preview />
      <FeaturedMachines />
      <WhyChooseUs />
      <TestimonialsSection />
      <TrustedClients />
      <StatsBand />
      <CompanyTimelinePreview />
      <ContactBand />
    </>
  );
}
