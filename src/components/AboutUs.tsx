
const AboutUs = () => {
  return <section className="py-20 bg-estate-50" id="about">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-4xl font-display text-estate-800 mb-4">Our Story</h2>
        <p className="text-estate-500 mb-12 mx-auto max-w-2xl">In the spring of 1998, a young journeyman electrician named Dean took a leap of faith. With just a handful of tools and a small pickup truck, he launched what would become Custom Electric Inc. 
From those humble beginnings, Custom Electric has grown into a trusted name in the Greater Lansing and Mid-Michigan areas. Over the years, we've served thousands of customers—handling everything from commercial wiring projects to simple home outlet installations.</p>
        <div className="aspect-[16/9] overflow-hidden rounded-lg max-w-4xl mx-auto">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Modern home electrical installation" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>;
};
export default AboutUs;
