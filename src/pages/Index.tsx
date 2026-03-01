import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FleetPreview from "@/components/home/FleetPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTABanner from "@/components/home/CTABanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FleetPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
