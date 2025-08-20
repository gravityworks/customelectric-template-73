import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

const serviceData = {
  residential: {
    title: "Residential Electrical Services",
    description: "Custom Electric provides a wide range of residential electrical services to keep your home safe, comfortable, and energy-efficient.",
    mainImage: "/src/home1.jpg",
    galleryImages: [
      "/src/home2.jpg",
      "/src/home3.jpg",
      "/src/home4.jpg",
      "/src/home5.jpg",
      "/src/home6.jpg",
      "/src/home7.jpg"
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
    mainImage: "/lovable-uploads/2.jpg",
    galleryImages: [
      "/lovable-uploads/commercialBobcats Interior1.jpg",
      "/lovable-uploads/commercialBobcats Interior2.jpg",
      "/lovable-uploads/commercialBobcats Interior4.jpg",
      "/lovable-uploads/commercialBobcats Interior5.jpg",
      "/lovable-uploads/commercialState of Fitness Interior1.jpg",
      "/lovable-uploads/commercialState of Fitness Interior3.jpg",
      "/lovable-uploads/commercialNotre Dame Federal Credit Union Interior.jpg",
      "/lovable-uploads/DIG 154 Larch Interior3.jpg",
      "/lovable-uploads/commercialrestaraunt.jpg",
      "/lovable-uploads/commercialoffice.jpg",
      "/lovable-uploads/commercialrisen inside.jpg"
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
      "/lovable-uploads/Generator1.jpg",
      "/lovable-uploads/Generator2.jpg",
      "/lovable-uploads/Generator3.jpg",
      "/lovable-uploads/Generator4.jpg",
      "/lovable-uploads/Generator5.jpg",
      "/lovable-uploads/Generator6.jpg"
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
  const [selectedImage, setSelectedImage] = useState(0);
  
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, [serviceType]);

  useEffect(() => {
    // Reset selected image when service type changes
    setSelectedImage(0);
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
      image: "/lovable-uploads/Retailcafeelectricaldesign.jpg",
      title: "Retail Café Electrical Design",
      description: "Full-service electrical design and installation for a modern retail café space. This project included the complete layout and integration of power circuits for food service equipment, ambient and task lighting, point-of-sale systems, and customer-facing technology. The electrical design was tailored to meet the unique needs of a hospitality environment, balancing efficiency, safety, and aesthetics.",
      highlights: ["Dedicated circuits for espresso machines, grinders, and refrigeration", "Code-compliant kitchen and service area wiring", "Integrated lighting controls for ambiance and energy savings", "Power layout for POS stations, charging bars, and Wi-Fi zones"]
    },
    {
      image: "/lovable-uploads/ProfessionalOfficeElectricalDesign.jpg",
      title: "Professional Office Electrical Design",
      description: "Turnkey electrical design and installation for a modern office workspace. This project included power and data distribution for individual workstations, collaborative spaces, and executive offices. Emphasis was placed on flexibility, energy efficiency, and future scalability to support evolving business needs.",
      highlights: ["Dedicated power and data for conference rooms and AV systems", "Structured wiring for 50+ workstations", "LED lighting with occupancy sensors and daylight harvesting", "Clean, concealed cable management throughout the space"]
    },
    {
      image: "/lovable-uploads/Municipal Government Facility Electrical Upgrade.jpg",
      title: "Municipal Government Facility Electrical Upgrade",
      description: "Comprehensive electrical design and modernization for a local government administrative and law enforcement complex. The project included electrical adjustments to accommodate a redesigned office layout and upgrades to lighting efficiency. The design ensured reliable power distribution, safety, and energy efficiency to support critical municipal functions.",
      highlights: ["Electrical reconfiguration to support new office layout and workflows", "Energy-efficient LED lighting upgrades across administrative and secure zones", "Updated wiring systems meeting current electrical codes and safety standards", "Enhanced power distribution to improve reliability throughout the facility"]
    },
    {
      image: "/lovable-uploads/commercialcallout1.jpg",
      title: "Personalized Fitness Studio Electrical Design",
      description: "Custom electrical infrastructure designed for a modern fitness studio focused on personalized training and small group strength coaching. This project featured dedicated power circuits for specialized equipment, adaptable lighting zones to create the perfect workout atmosphere, and integrated audio/visual systems to enhance training sessions and client engagement.",
      highlights: ["Reliable power dedicated to fitness machines and recovery equipment", "Adjustable lighting designed to create the right mood and improve usability", "Smooth integration of audio and video gear to support coaching and classes", "Wiring and systems built with flexibility for future changes and expansion", "Energy-efficient solutions that support a healthy, sustainable environment"]
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
                  src={selectedImage === 0 ? service.mainImage : service.galleryImages[selectedImage - 1]} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
            
            {/* Interactive Thumbnail Gallery */}
            {(service.galleryImages.length > 0 || service.mainImage) && (
              <div className="grid grid-cols-4 gap-2">
                {/* Main image thumbnail */}
                <div 
                  className={`cursor-pointer rounded-md overflow-hidden transition-all duration-200 ${
                    selectedImage === 0 ? 'ring-2 ring-brand-blue opacity-100' : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => setSelectedImage(0)}
                >
                  <AspectRatio ratio={1/1}>
                    <img 
                      src={service.mainImage} 
                      alt={`${service.title} main`} 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                
                {/* Gallery thumbnails */}
                {service.galleryImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`cursor-pointer rounded-md overflow-hidden transition-all duration-200 ${
                      selectedImage === index + 1 ? 'ring-2 ring-brand-blue opacity-100' : 'opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => setSelectedImage(index + 1)}
                  >
                    <AspectRatio ratio={1/1}>
                      <img 
                        src={image} 
                        alt={`${service.title} example ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                ))}
              </div>
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
