import Hero from "@/components/Hero";
import PropertyGrid from "@/components/PropertyGrid";
import AboutUs from "@/components/AboutUs";
import OurVision from "@/components/OurVision";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
const Index = () => {
  return <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <section className="py-32" id="services">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-5xl font-display text-estate-800 mb-16">Our Services</h2>
          <PropertyGrid />
        </div>
      </section>

      <AboutUs />
      <OurVision />
      <section className="py-20 bg-estate-50" id="projects">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-display text-estate-800 mb-4">Testimonials</h2>
          <Testimonials />
        </div>
      </section>
      <Footer />
    </div>;
};
export default Index;