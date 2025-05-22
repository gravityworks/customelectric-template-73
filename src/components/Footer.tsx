
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="text-white">
      {/* CTA Section */}
      <div className="bg-brand-blue py-12">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-8 md:mb-0">
            <img 
              src="/lovable-uploads/cd04ddd6-3c8b-4889-a685-ebfc54862cca.png" 
              alt="Custom Electric" 
              className="h-12" /* Increased size by 50% from h-8 */
            />
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-4xl font-display text-brand-yellow mb-2">Ready to get started?</h3>
            <p className="text-xl mb-6">Let's connect about your next project.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
              <Button size="lg" className="bg-brand-yellow text-brand-blue hover:bg-brand-yellow-light">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div 
        className="py-16" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/f3b2f24a-0488-4aad-ba08-8bcc47a1136a.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative"
        }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <p className="text-estate-300">
                Licensed and insured electrical services for Mid-Michigan homes and businesses since 1998.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-estate-300">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-estate-300">
                <li>123 Electric Avenue</li>
                <li>Lansing, MI 48912</li>
                <li>(517) 555-1234</li>
                <li>info@customelectric.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="#" className="hover:text-estate-300 transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="hover:text-estate-300 transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:text-estate-300 transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="hover:text-estate-300 transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-estate-700/50 text-center text-estate-300">
            <p>&copy; {new Date().getFullYear()} Custom Electric Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
