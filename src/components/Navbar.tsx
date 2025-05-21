
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
  return (
    <nav className="absolute w-full z-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="text-2xl font-display text-brand-offwhite">Custom Electric</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-brand-offwhite hover:text-brand-offwhite/80 transition-colors">Services</a>
            <a href="#about" className="text-brand-offwhite hover:text-brand-offwhite/80 transition-colors">About</a>
            <a href="#testimonials" className="text-brand-offwhite hover:text-brand-offwhite/80 transition-colors">Testimonials</a>
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
                <div className="flex flex-col space-y-4 mt-8">
                  <a href="#services" className="text-lg">Services</a>
                  <a href="#about" className="text-lg">About</a>
                  <a href="#testimonials" className="text-lg">Testimonials</a>
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
