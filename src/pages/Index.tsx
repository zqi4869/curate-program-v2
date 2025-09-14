import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CustomerLogos from "@/components/CustomerLogos";
import FeatureOverview from "@/components/FeatureOverview";
import GetStarted from "@/components/GetStarted";
import Testimonials from "@/components/Testimonials";
import PricingPlans from "@/components/PricingPlans";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CustomerLogos />
        <FeatureOverview />
        <GetStarted />
        <Testimonials />
        <PricingPlans />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
