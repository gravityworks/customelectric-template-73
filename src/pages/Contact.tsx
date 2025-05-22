
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Photo Background and Blue Overlay */}
      <div className="relative">
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: `url('/lovable-uploads/b4a833ce-a95a-43c6-9a7d-3b21ee36088c.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%'
        }}>
          <div className="absolute inset-0 bg-brand-blue/70" />
        </div>
        
        <Navbar />
        
        {/* Hero Content */}
        <div className="relative z-10 pt-20 pb-16">
          <div className="container mx-auto max-w-6xl px-4">
            <h1 className="text-4xl md:text-5xl font-display text-white mb-4">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-3xl">Reach out to discuss your electrical needs or learn more about career opportunities.</p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Information */}
          <div>
            <h2 className="text-3xl font-display text-estate-800 mb-8">Get In Touch</h2>
            
            <div className="space-y-8">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-blue text-white p-3 rounded-full">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Phone</h3>
                      <p className="text-estate-600">
                        <a href="tel:5172044405" className="hover:text-brand-blue transition-colors">
                          517-204-4405
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-blue text-white p-3 rounded-full">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Email</h3>
                      <p className="text-estate-600 break-all">
                        <a href="mailto:customelectricinc@gmail.com" className="hover:text-brand-blue transition-colors">
                          customelectricinc@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-blue text-white p-3 rounded-full">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Office Address</h3>
                      <p className="text-estate-600">
                        <a 
                          href="https://maps.google.com/?q=2214+Depot+St,+Holt+MI+48842" 
                          target="_blank" 
                          rel="noreferrer"
                          className="hover:text-brand-blue transition-colors"
                        >
                          2214 Depot St<br />
                          Holt, MI 48842
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 space-y-4">
              <h3 className="text-2xl font-display text-estate-800 mb-4">Office Hours</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="font-semibold">Monday - Friday</p>
                  <p className="text-estate-600">8:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold">Saturday - Sunday</p>
                  <p className="text-estate-600">Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: CTA Buttons and Map */}
          <div>
            <div className="bg-estate-50 p-8 rounded-lg mb-8">
              <h2 className="text-3xl font-display text-estate-800 mb-6">How Can We Help You?</h2>
              <p className="text-lg text-estate-600 mb-8">
                Whether you're a homeowner looking for assistance with a project, a business owner needing electrical services, or a professional looking to join our team, we're here to help.
              </p>
              <div className="space-y-4">
                <Button size="lg" className="w-full bg-brand-blue hover:bg-brand-blue/80">
                  Request a Quote
                </Button>
                <Button size="lg" className="w-full bg-brand-yellow text-brand-blue hover:bg-brand-yellow-light">
                  Apply for a Job
                </Button>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="rounded-lg overflow-hidden h-80 bg-estate-200">
              <iframe 
                title="Custom Electric Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.4012564290976!2d-84.54182548787209!3d42.63093962150415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8822c23d1ae98965%3A0xf8c50d90adc4925c!2s2214%20Depot%20St%2C%20Holt%2C%20MI%2048842!5e0!3m2!1sen!2sus!4v1653612238715!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
