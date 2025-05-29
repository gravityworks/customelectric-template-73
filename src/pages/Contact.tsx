
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    // Add the external CSS link for the embed
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css';
    link.media = 'screen';
    document.head.appendChild(link);

    // Add the external script for the embed
    const script = document.createElement('script');
    script.src = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js';
    script.setAttribute('clienthub_id', '4915b458-7ff6-4146-9d9e-7348ad70127a');
    script.setAttribute('form_url', 'https://clienthub.getjobber.com/client_hubs/4915b458-7ff6-4146-9d9e-7348ad70127a/public/work_request/embedded_work_request_form');
    document.body.appendChild(script);

    // Cleanup function to remove the added elements
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);
  return <div className="min-h-screen flex flex-col">
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
          {/* Left Column: CTA Buttons (formerly right column) */}
          <div>
            <div className="bg-estate-50 p-8 rounded-lg">
              <h2 className="text-3xl font-display text-estate-800 mb-6">How Can We Help You?</h2>
              <p className="text-lg text-estate-600 mb-8">
                Whether you're a homeowner looking for assistance with a project, a business owner needing electrical services, or a professional looking to join our team, we're here to help.
              </p>
              <div className="space-y-4">
                <Button size="lg" className="w-full bg-brand-blue hover:bg-brand-blue/80" asChild>
                  <a href="#4915b458-7ff6-4146-9d9e-7348ad70127a">Request a Quote</a>
                </Button>
                <Button size="lg" className="w-full bg-brand-yellow text-brand-blue hover:bg-brand-yellow-light" asChild>
                  <Link to="/careers">Apply for a Job</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right Column: Contact Information (formerly left column) */}
          <div>
            <div className="space-y-8">
              <Card className="overflow-hidden">
                <CardContent className="p-6 py-[10px] px-[19px]">
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
                <CardContent className="p-6 py-[10px] px-[20px]">
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
                <CardContent className="p-6 py-[10px] px-[20px]">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-blue text-white p-3 rounded-full">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Office Address</h3>
                      <p className="text-estate-600">
                        <a href="https://maps.google.com/?q=2214+Depot+St,+Holt+MI+48842" target="_blank" rel="noreferrer" className="hover:text-brand-blue transition-colors">
                          2214 Depot St<br />
                          Holt, MI 48842
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Request a Quote Section */}
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-display text-estate-800 mb-8 text-center">Request a Quote</h2>
        <div id="4915b458-7ff6-4146-9d9e-7348ad70127a"></div>
      </div>
      
      <Footer />
    </div>;
};
export default Contact;
