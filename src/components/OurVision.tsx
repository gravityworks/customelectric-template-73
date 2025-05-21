
import { Check } from "lucide-react";

const OurVision = () => {
  const values = [
    {
      title: "Quality Workmanship",
      description: "Delivering exceptional electrical services with attention to detail and safety.",
    },
    {
      title: "Licensed & Insured",
      description: "Fully licensed and insured professionals you can trust with your electrical needs for complete peace of mind.",
    },
    {
      title: "Celebrating 25 Years",
      description: "A quarter century of dedicated service to the Greater Lansing and Mid-Michigan communities.",
    },
  ];

  return (
    <section className="py-20 bg-brand-blue">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-4xl font-display text-white mb-4">Our Vision</h2>
        <p className="text-white mb-12 mx-auto max-w-2xl">
          Our mission is to provide safe, reliable electrical services while treating every customer's home or business as if it were our own.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-white/90">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVision;
