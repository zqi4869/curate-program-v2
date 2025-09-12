import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CustomerLogos from "@/components/CustomerLogos";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CustomerLogos />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
