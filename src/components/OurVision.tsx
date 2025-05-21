
import { Check } from "lucide-react";

const OurVision = () => {
  const values = [
    {
      title: "Quality Workmanship",
      description: "Delivering exceptional electrical services with attention to detail and safety.",
    },
    {
      title: "Customer Satisfaction",
      description: "Providing transparent communication and reliable service that exceeds expectations.",
    },
    {
      title: "Expert Solutions",
      description: "Offering professional expertise and customized electrical solutions for any project.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-4xl font-display text-estate-800 mb-4">Our Vision</h2>
        <p className="text-estate-500 mb-12 mx-auto max-w-2xl">
          Our mission is to provide safe, reliable electrical services while treating every customer's home or business as if it were our own.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-estate-100 flex items-center justify-center">
                <Check className="w-6 h-6 text-estate-800" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-estate-800 mb-2">{value.title}</h3>
                <p className="text-estate-500">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVision;
