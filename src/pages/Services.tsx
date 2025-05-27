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
    mainImage: "/lovable-uploads/2ac8c716-fa77-4c9d-bd73-3304c92acb48.png",
    galleryImages: [
      "/lovable-uploads/3498643b-4140-4b06-93a2-a6ad010d44c1.png",
      "/lovable-uploads/749e0679-b20d-41da-ae3d-4cdd48562e86.png",
      "/lovable-uploads/b4a833ce-a95a-43c6-9a7d-3b21ee36088c.png",
      "/lovable-uploads/bff570fc-46e3-4080-8f1f-80bd124489d7.png"
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
    mainImage: "/lovable-uploads/4f655f00-0cc5-4234-925b-75620e7cf264.png",
    galleryImages: [
      "/lovable-uploads/76dbaab2-c2c8-43f0-8ba4-eaba0ea310df.png",
      "/lovable-uploads/ccdbd82b-6c10-4b37-a893-3bcf86fd386e.png",
      "/lovable-uploads/ee9269ae-6454-45d5-8e72-a9a927ec31d6.png",
      "/lovable-uploads/af8fe629-d0c4-49cb-b585-def1b9c720a8.png"
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

  // Featured Projects data for commercial services
  const featuredProjects = serviceType === 'commercial' ? [
    {
      image: "/lovable-uploads/73662331-ce1d-43a1-8f89-3d83037c1888.png",
      title: "Industrial Power Distribution Center",
      description: "Complete electrical infrastructure upgrade for a major manufacturing facility. We installed a state-of-the-art power distribution system with multiple switchgear panels, providing reliable power distribution across the entire facility. The project included comprehensive safety systems and redundant power paths to ensure zero downtime for critical operations.",
      highlights: ["500+ amp service upgrade", "15 distribution panels", "Zero downtime installation", "Enhanced safety systems"]
    },
    {
      image: "/lovable-uploads/abe8b518-2855-4b85-a2e3-96979d4a7497.png",
      title: "Modern Restaurant Electrical Design",
      description: "Custom electrical solution for an upscale restaurant featuring sophisticated lighting design and commercial kitchen power systems. Our team designed and installed pendant lighting, under-cabinet LED systems, and high-capacity electrical service for commercial appliances, creating the perfect ambiance while meeting strict commercial kitchen requirements.",
      highlights: ["Custom pendant lighting", "Commercial kitchen wiring", "LED under-cabinet systems", "Atmospheric lighting design"]
    },
    {
      image: "/lovable-uploads/3549958e-d9c6-409c-bb4c-8cbc415afe40.png",
      title: "Large-Scale Warehouse Lighting",
      description: "Energy-efficient LED lighting retrofit for a 50,000 sq ft distribution warehouse. We replaced outdated fluorescent fixtures with high-efficiency LED lighting systems, resulting in 60% energy savings and dramatically improved visibility for warehouse operations. The project was completed in phases to maintain continuous operations.",
      highlights: ["50,000 sq ft coverage", "60% energy savings", "Improved visibility", "Phased installation"]
    },
    {
      image: "/lovable-uploads/210e2ca5-0c89-4337-8c39-bb13bc386aec.png",
      title: "Historic Building Renovation",
      description: "Sensitive electrical restoration of a landmark historic building while preserving its architectural integrity. We carefully integrated modern electrical systems behind original millwork and decorative elements, including custom lighting solutions that complement the building's Art Nouveau design. The project required specialized techniques to maintain the building's historic character.",
      highlights: ["Historic preservation compliance", "Custom Art Nouveau lighting", "Hidden modern systems", "Architectural integration"]
    }
  ] : [];

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

      {/* Featured Projects Section - Only for Commercial Services */}
      {featuredProjects.length > 0 && (
        <div className="bg-estate-50 py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display text-estate-800 mb-4">Featured Projects</h2>
              <p className="text-lg text-estate-600 max-w-3xl mx-auto">
                Discover how Custom Electric has delivered exceptional commercial electrical solutions for businesses across various industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {featuredProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <AspectRatio ratio={4/3}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-estate-800 mb-3">{project.title}</h3>
                    <p className="text-estate-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-estate-800 text-sm">Project Highlights:</h4>
                      <ul className="grid grid-cols-1 gap-1">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start text-sm">
                            <Check className="h-4 w-4 text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-estate-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default ServicePage;
