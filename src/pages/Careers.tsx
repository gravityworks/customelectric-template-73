
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle, Users, Award, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
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
            <h1 className="text-4xl md:text-5xl font-display text-white mb-4">Join Our Team</h1>
            <p className="text-xl text-white/90 max-w-3xl">Build your career in the electrical field with Custom Electric. No experience? No worries. We'll train you.</p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Why Work With Us */}
          <div>
            <h2 className="text-3xl font-display text-estate-800 mb-8">Why Choose Custom Electric?</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-brand-blue" />
                    Training & Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-estate-600">
                    We believe in investing in our people. No electrical experience? We'll provide comprehensive training to help you build the skills you need for a successful career.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-brand-blue" />
                    Established Company
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-estate-600">
                    Since 1998, Custom Electric has been serving Mid-Michigan with quality electrical services. Join a stable, growing company with a proven track record.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Wrench className="w-6 h-6 text-brand-blue" />
                    Diverse Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-estate-600">
                    Work on a variety of residential and commercial projects. From home installations to large commercial builds, you'll gain valuable experience across different sectors.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Right Column: Application Info */}
          <div>
            <div className="bg-estate-50 p-8 rounded-lg">
              <h2 className="text-3xl font-display text-estate-800 mb-6">Ready to Start Your Career?</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">No Experience Required</h3>
                    <p className="text-estate-600">We welcome applications from hard-working individuals looking to start a career in electrical work.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">On-the-Job Training</h3>
                    <p className="text-estate-600">Learn from experienced electricians while earning. We'll teach you everything you need to know.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Growth Opportunities</h3>
                    <p className="text-estate-600">Advance your skills and career with a company that values professional development.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-estate-800">How to Apply</h3>
                <p className="text-estate-600">
                  We are always accepting applications from motivated individuals. Send your resume to get started on your electrical career journey.
                </p>
                <Button 
                  size="lg" 
                  className="w-full bg-brand-blue hover:bg-brand-blue/80"
                  onClick={() => window.location.href = 'mailto:customelectricinc@gmail.com?subject=Job Application - Electrical Technician'}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Your Resume
                </Button>
                <p className="text-sm text-estate-500 text-center">
                  customelectricinc@gmail.com
                </p>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="mt-8 p-6 border border-estate-200 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Questions About Working With Us?</h3>
              <div className="space-y-2 text-estate-600">
                <p><strong>Phone:</strong> <a href="tel:5172044405" className="hover:text-brand-blue transition-colors">517-204-4405</a></p>
                <p><strong>Email:</strong> <a href="mailto:customelectricinc@gmail.com" className="hover:text-brand-blue transition-colors">customelectricinc@gmail.com</a></p>
                <p><strong>Office:</strong> 2214 Depot St, Holt, MI 48842</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Careers;
