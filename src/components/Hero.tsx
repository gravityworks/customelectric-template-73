
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
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
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 h-[120%] top-0"
        style={{
          backgroundImage: "url('/lovable-uploads/505e2384-a1b0-4546-9f7d-0787956205d0.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${scrollPosition * 0.15}px)`,
          transition: "transform 0.05s ease-out"
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 container mx-auto px-8 text-center">
        <h1 className="text-6xl md:text-8xl font-display text-white mb-8 leading-tight max-w-3xl mx-auto">
          Quality you can <br /> plug into.
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Licensed and insured electrical services for Lansing and Mid-Michigan homes and businesses.
        </p>
        <div className="max-w-xs mx-auto">
          <a href="#services">
            <Button size="lg" className="w-full text-lg py-6">
              View Our Services
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
