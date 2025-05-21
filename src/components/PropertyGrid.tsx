
import PropertyCard from "./PropertyCard";
import { Home, Briefcase, BatteryCharging } from "lucide-react";

const PropertyGrid = () => {
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      title: "Residential",
      description: "Comprehensive electrical services for homes including installations, repairs, and safety inspections to keep your family safe and comfortable.",
      icon: Home,
    },
    {
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840",
      title: "Commercial",
      description: "Professional electrical solutions for businesses of all sizes. From office buildings to retail spaces, we ensure reliable power for your operations.",
      icon: Briefcase,
    },
    {
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764",
      title: "Generator Backup Systems",
      description: "Keep your power on during outages with our reliable generator installation and maintenance services for both homes and businesses.",
      icon: BatteryCharging,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {properties.map((property, index) => (
        <PropertyCard key={index} {...property} />
      ))}
    </div>
  );
};

export default PropertyGrid;
