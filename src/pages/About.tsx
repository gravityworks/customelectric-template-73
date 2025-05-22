
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Photo Background and Blue Overlay */}
      <div className="relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/lovable-uploads/4ecef2d9-e72d-4940-b7bb-a6cb1bb537c3.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%'
          }}
        >
          <div className="absolute inset-0 bg-brand-blue/70" />
        </div>
        
        <Navbar />
        
        {/* Hero Content */}
        <div className="relative z-10 pt-20 pb-16">
          <div className="container mx-auto max-w-6xl px-4">
            <h1 className="text-4xl md:text-5xl font-display text-white mb-4">About Custom Electric</h1>
            <p className="text-xl text-white/90 max-w-3xl">A team of licensed professionals serving Greater Lansing and Mid-Michigan since 1998.</p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Introduction */}
          <div>
            <h2 className="text-3xl font-display text-estate-800 mb-6">Our Mission</h2>
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                We're more than just a neighborhood business—we're a family that treats you like one of our own.
                At Custom Electric, our mission is to deliver professional, high-quality service while building
                lasting relationships with those we serve. Our company culture is grounded in teamwork, honesty,
                grace, empowerment, and a commitment to continual learning. We exist to help people live life illuminated.
              </p>
              <h3 className="text-2xl font-display text-estate-800 mb-4">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-brand-blue font-bold">Quality:</span> 
                  <span>We take pride in our craftsmanship and attention to detail in every job.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-blue font-bold">Safety:</span> 
                  <span>The safety of our team and customers is our highest priority.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-blue font-bold">Integrity:</span> 
                  <span>We do what we say we'll do, when we say we'll do it.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-blue font-bold">Respect:</span> 
                  <span>We treat every home and business as if it were our own.</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right Column: Company History */}
          <div>
            <h2 className="text-3xl font-display text-estate-800 mb-6">Our Story</h2>
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                In the spring of '98, a young journeyman electrician named Dean took a leap of faith. 
                With just a handful of tools and a small pickup truck, he launched what would become Custom Electric Inc.
              </p>
              <p className="text-lg mb-6">
                From those humble beginnings, Custom Electric has grown into a trusted name in the Greater Lansing 
                and Mid-Michigan areas. Over the years, we've served thousands of customers—handling everything 
                from commercial wiring projects to simple home outlet installations.
              </p>
              <p className="text-lg mb-6">
                Today, our team of licensed professionals continues to uphold the values that Dean established 
                from day one: quality workmanship, responsive service, fair pricing, and treating customers like family.
              </p>
              <div className="mt-8">
                <Button className="bg-brand-blue hover:bg-brand-blue/80">
                  Meet Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Section Placeholder */}
        <div className="mt-20">
          <h2 className="text-3xl font-display text-estate-800 mb-10 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team member cards would go here */}
            <div className="bg-estate-50 p-6 rounded-lg text-center">
              <div className="w-32 h-32 rounded-full bg-estate-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-medium">Dean Smith</h3>
              <p className="text-estate-600">Founder & Master Electrician</p>
            </div>
            <div className="bg-estate-50 p-6 rounded-lg text-center">
              <div className="w-32 h-32 rounded-full bg-estate-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-medium">Sarah Johnson</h3>
              <p className="text-estate-600">Operations Manager</p>
            </div>
            <div className="bg-estate-50 p-6 rounded-lg text-center">
              <div className="w-32 h-32 rounded-full bg-estate-200 mx-auto mb-4"></div>
              <h3 className="text-xl font-medium">Mike Reynolds</h3>
              <p className="text-estate-600">Lead Technician</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
