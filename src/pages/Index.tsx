import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { InfoSection } from "@/components/InfoSection";
import { Testimonials } from "@/components/Testimonials";
import { Locations } from "@/components/Locations";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <InfoSection />
        <Testimonials />
        <Locations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
