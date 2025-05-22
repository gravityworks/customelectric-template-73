
import { useEffect, useState } from "react";

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

  const calculateParallax = () => {
    // Get the about section element
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return 0;
    
    // Calculate the element's position relative to the viewport
    const rect = aboutSection.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    
    // Calculate how far we've scrolled past the element
    const relativeScroll = Math.max(0, scrollPosition - elementTop + window.innerHeight);
    
    // Return a value that creates a subtle parallax effect
    return relativeScroll * 0.05;
  };

  return (
    <section className="py-20 bg-estate-50" id="about">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="relative rounded-lg overflow-hidden min-h-[400px] md:min-h-[450px] max-w-5xl mx-auto">
          {/* Image container with increased height to prevent grey lines */}
          <div className="absolute inset-0 h-[140%] -top-[20%] overflow-hidden">
            <img 
              src="/lovable-uploads/bff570fc-46e3-4080-8f1f-80bd124489d7.png" 
              alt="Custom Electric Inc. electrician with company truck" 
              className="w-full h-full object-cover object-center"
              style={{
                transform: `translateY(${calculateParallax()}px)`,
                transition: "transform 0.05s ease-out"
              }}
            />
          </div>
          
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-estate-900/60"></div>
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-8 text-center">
            <h2 className="text-4xl font-display text-white mb-4">Our Story</h2>
            <p className="text-white mb-6 mx-auto max-w-2xl text-sm sm:text-base">
              In the spring of 98, a young journeyman electrician named Dean took a leap of faith. With just a handful of tools and a small pickup truck, he launched what would become Custom Electric Inc.
              <br /><br />
              From those humble beginnings, Custom Electric has grown into a trusted name in the Greater Lansing and Mid-Michigan areas. Over the years, we've served thousands of customers—handling everything from commercial wiring projects to simple home outlet installations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
