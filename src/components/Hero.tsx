
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
          backgroundImage: "url('/lovable-uploads/749e0679-b20d-41da-ae3d-4cdd48562e86.png')",
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
        <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto">
          Licensed and insured electrical services for Lansing and Mid-Michigan homes and businesses.
        </p>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          From simple repairs to complex installations, we're here to power your world safely and reliably.
        </p>
        <div className="max-w-xs mx-auto">
          <Button size="lg" className="w-full text-lg py-6" asChild>
            <Link to="/about">About Custom Electric</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
