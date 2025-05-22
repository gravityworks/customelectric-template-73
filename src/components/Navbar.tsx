
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-brand-blue shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/cd04ddd6-3c8b-4889-a685-ebfc54862cca.png" 
              alt="Custom Electric" 
              className="h-10"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-brand-offwhite hover:text-brand-offwhite/80 transition-colors">Services</a>
            <a href="#about" className="text-brand-offwhite hover:text-brand-offwhite/80 transition-colors">About</a>
            <a href="#projects" className="text-brand-offwhite hover:text-brand-offwhite/80 transition-colors">Projects</a>
            <a href="#contact" className="text-brand-offwhite hover:text-brand-offwhite/80 transition-colors">Contact</a>
            <Button variant="secondary" className="font-medium">
              Request Quote
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-brand-offwhite">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex justify-center mb-8 mt-4">
                  <img 
                    src="/lovable-uploads/cd04ddd6-3c8b-4889-a685-ebfc54862cca.png" 
                    alt="Custom Electric" 
                    className="h-8"
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <a href="#services" className="text-lg">Services</a>
                  <a href="#about" className="text-lg">About</a>
                  <a href="#projects" className="text-lg">Projects</a>
                  <a href="#contact" className="text-lg">Contact</a>
                  <Button className="w-full">Request Quote</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
