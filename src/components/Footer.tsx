import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return <footer id="contact" className="text-white">
      {/* CTA Section */}
      <div className="py-12" style={{
        backgroundImage: "url('/lovable-uploads/0cc86266-7867-4628-b0de-a6fa09e4c231.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"
      }}>
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-between relative z-10">
          <div className="flex items-center mb-8 md:mb-0">
            <img src="/whitelogo.png" alt="Custom Electric" className="h-14" /* Increased size by 75% from h-8 */ />
          </div>
          <div className="text-center md:text-left mb-6 md:mb-0 md:mx-4 lg:mx-0">
            <h3 className="text-4xl font-display text-brand-gray mb-2">Ready to get started?</h3>
            <p className="text-xl mb-2 md:mb-0">Let's connect about your next project.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-brand-gray text-brand-blue hover:bg-brand-gray-light" asChild>
              <a href="/contact#4915b458-7ff6-4146-9d9e-7348ad70127a">Request a Quote</a>
            </Button>
            <Button size="lg" className="bg-brand-gray text-brand-blue hover:bg-brand-gray-light" asChild>
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="py-16 bg-brand-charcoal">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/76bca9d2-5492-4c14-a134-b54bf6fd0cea.png" 
                  alt="Home Builders Association of Southeastern Michigan" 
                  className="h-20 mx-auto md:mx-0"
                />
              </div>
              <p className="text-estate-300">
                Licensed and insured electrical services for Mid-Michigan homes and businesses since 1998.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-estate-300">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-estate-300">
                <li>2214 Depot St</li>
                <li>Holt, MI 48842</li>
                <li>(517) 204-4405</li>
                <li>customelectricinc@gmail.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <ul className="space-y-2 text-estate-300">
                <li>
                  <a href="https://www.facebook.com/MICustomElectricInc" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                    Follow us on Facebook
                  </a>
                </li>
                <li>
                  <a href="https://g.page/r/CdGatJZKMUVXEBM/review" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                    Leave us a Review
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-estate-700/50 text-center text-estate-300">
            <p>&copy; {new Date().getFullYear()} Custom Electric Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;