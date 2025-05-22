
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const AboutUs = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" className="relative py-24 min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image - Only this element moves */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollPosition * 0.15}px)`,
          transition: "transform 0.05s ease-out"
        }}
      >
        <div 
          className="absolute inset-0 w-full h-[130%] -top-[15%]"
          style={{
            backgroundImage: "url('/lovable-uploads/4ecef2d9-e72d-4940-b7bb-a6cb1bb537c3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
      
      {/* Fixed Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-estate-900/70"></div>
      
      {/* Content - This stays fixed in place */}
      <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl font-display text-white mb-6">Our Story</h2>
        <p className="text-white mb-8 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed">
          In the spring of 98, a young journeyman electrician named Dean took a leap of faith. With just a handful of tools and a small pickup truck, he launched what would become Custom Electric Inc.
          <br /><br />
          From those humble beginnings, Custom Electric has grown into a trusted name in the Greater Lansing and Mid-Michigan areas. Over the years, we've served thousands of customers—handling everything from commercial wiring projects to simple home outlet installations.
        </p>
        <div className="mt-6">
          <Button variant="secondary" size="lg">
            About Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
