
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Check } from "lucide-react";
import { useEffect } from "react";

const serviceData = {
  residential: {
    title: "Residential Electrical Services",
    description: "Custom Electric provides a wide range of residential electrical services to keep your home safe, comfortable, and energy-efficient.",
    mainImage: "/lovable-uploads/fe90b0a3-a45e-4685-931e-1a107ec88997.png",
    galleryImages: [
      "/lovable-uploads/91e4bd0d-dc7b-4aaa-85c6-8929b27b3c79.png",
      "/lovable-uploads/505e2384-a1b0-4546-9f7d-0787956205d0.png",
      "/lovable-uploads/2d5dd3c8-b636-4586-a8a0-955f199b3cf0.png",
      "/lovable-uploads/fe90b0a3-a45e-4685-931e-1a107ec88997.png"
    ],
    features: [
      "Electrical panel upgrades and replacements",
      "Whole-house surge protection",
      "Ceiling fan installation",
      "Interior and exterior lighting installation",
      "Smart home wiring and device installation",
      "Outlet and switch installation or replacement",
      "Electrical troubleshooting and repairs",
      "Home electrical inspections"
    ],
    callToAction: "Schedule a free residential consultation today!"
  },
  commercial: {
    title: "Commercial Electrical Services",
    description: "Custom Electric delivers reliable, code-compliant electrical solutions for businesses of all sizes, from retail stores to large office buildings.",
    mainImage: "/lovable-uploads/6bcc2d2e-9906-4531-85ca-6cfda073f2bc.png",
    galleryImages: [
      "/lovable-uploads/6bcc2d2e-9906-4531-85ca-6cfda073f2bc.png",
      "/lovable-uploads/a905dc4d-82d5-48ce-89ca-9880d07a2687.png",
      "/lovable-uploads/3c475d59-623c-4b15-a468-0afeba8f5a23.png",
      "/lovable-uploads/d45c6ca1-2049-4f56-8d75-9be68ef04a23.png"
    ],
    features: [
      "Commercial electrical installations and renovations",
      "Lighting retrofits and energy-efficient upgrades",
      "Emergency and exit lighting",
      "Panel upgrades and electrical service maintenance",
      "Power distribution and circuit installation",
      "Equipment wiring and machinery connections",
      "Code compliance inspections and corrections",
      "Energy management systems"
    ],
    callToAction: "Contact us for a commercial project quote!"
  },
  generator: {
    title: "Generator Backup Systems",
    description: "Ensure your home or business never loses power with our professional generator installation and maintenance services.",
    mainImage: "/lovable-uploads/a22f888b-6718-4a75-88eb-3c7e24477d0a.png",
    galleryImages: [
      "/lovable-uploads/a22f888b-6718-4a75-88eb-3c7e24477d0a.png"
    ],
    features: [
      "Automatic standby generator installation",
      "Portable generator setup and connections",
      "Generator maintenance programs",
      "Transfer switch installation",
      "Fuel system setup (natural gas, propane, diesel)",
      "Load calculations and sizing",
      "Regular testing and servicing",
      "24/7 emergency generator repair"
    ],
    callToAction: "Never lose power again! Get your generator quote today."
  }
};

const ServicePage = () => {
  const { serviceType } = useParams();
  const service = serviceType ? serviceData[serviceType as keyof typeof serviceData] : null;
  
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, [serviceType]);
  
  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-medium mb-4">Service not found</h1>
            <Button onClick={() => window.history.back()}>Go Back</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Photo Background and Blue Overlay */}
      <div className="relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/lovable-uploads/f3b2f24a-0488-4aad-ba08-8bcc47a1136a.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%'
          }}
        >
          <div className="absolute inset-0 bg-brand-blue/70" />
        </div>
        
        <Navbar />
        
        {/* Hero Content */}
        <div className="relative z-10 pt-20 pb-16">
          <div className="container mx-auto max-w-6xl px-4">
            <h1 className="text-4xl md:text-5xl font-display text-white mb-4">{service.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl">{service.description}</p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gallery Section */}
          <div>
            {/* Main Image */}
            <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
              <AspectRatio ratio={4/3}>
                <img 
                  src={service.mainImage} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
            
            {/* Image Gallery Carousel */}
            {service.galleryImages.length > 1 && (
              <Carousel className="w-full">
                <CarouselContent>
                  {service.galleryImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <AspectRatio ratio={1/1} className="rounded-md overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${service.title} example ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </AspectRatio>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4">
                  <CarouselPrevious className="relative static mr-2" />
                  <CarouselNext className="relative static ml-2" />
                </div>
              </Carousel>
            )}
          </div>
          
          {/* Features and Description */}
          <div>
            <h2 className="text-2xl font-display text-estate-800 mb-4">Our Services Include:</h2>
            <ul className="grid grid-cols-1 gap-3 mb-8">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-brand-blue mr-2 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-estate-50 p-6 rounded-lg border border-estate-200">
              <h3 className="text-xl font-medium text-estate-800 mb-2">Ready to get started?</h3>
              <p className="mb-4">{service.callToAction}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-brand-blue hover:bg-brand-blue/80">
                  Request a Quote
                </Button>
                <Button variant="secondary">
                  Call Us Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServicePage;
