
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-estate-800 text-white py-16" id="contact">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-display text-xl mb-4">Custom Electric</h3>
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
        <div className="mt-12 pt-8 border-t border-estate-700 text-center text-estate-300">
          <p>&copy; {new Date().getFullYear()} Custom Electric Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
