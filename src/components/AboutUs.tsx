
const AboutUs = () => {
  return <section className="py-20 bg-estate-50" id="about">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="relative rounded-lg overflow-hidden aspect-[16/9] max-w-5xl mx-auto">
          {/* Image as background with overlay */}
          <img 
            src="/lovable-uploads/dd042d93-20ce-41c9-8844-ca41274348fc.png" 
            alt="Custom Electric Inc. electrician with company truck" 
            className="w-full h-full object-cover absolute inset-0" 
          />
          
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-estate-900/60"></div>
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
            <h2 className="text-4xl font-display text-white mb-4">Our Story</h2>
            <p className="text-white mb-6 mx-auto max-w-2xl">
              In the spring of 98, a young journeyman electrician named Dean took a leap of faith. With just a handful of tools and a small pickup truck, he launched what would become Custom Electric Inc.
              <br /><br />
              From those humble beginnings, Custom Electric has grown into a trusted name in the Greater Lansing and Mid-Michigan areas. Over the years, we've served thousands of customers—handling everything from commercial wiring projects to simple home outlet installations.
            </p>
          </div>
        </div>
      </div>
    </section>;
};

export default AboutUs;
