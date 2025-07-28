
import PropertyCard from "./PropertyCard";
import { Home, Briefcase, BatteryCharging } from "lucide-react";

const PropertyGrid = () => {
  const properties = [
    {
      image: "/lovable-uploads/2.jpg", // New commercial space image
      title: "Commercial",
      description: "Professional electrical solutions for businesses of all sizes. From office buildings to retail spaces, we ensure reliable power for your operations.",
      icon: Briefcase,
      serviceType: "commercial"
    },
    {
      image: "/lovable-uploads/home8",
      title: "Residential",
      description: "Comprehensive electrical services for homes including installations, repairs, and safety inspections to keep your family safe and comfortable.",
      icon: Home,
      serviceType: "residential"
    },
    {
      image: "/lovable-uploads/a22f888b-6718-4a75-88eb-3c7e24477d0a.png", // Generac generator image
      title: "Generator Backup Systems",
      description: "Keep your power on during outages with our reliable generator installation and maintenance services for both homes and businesses.",
      icon: BatteryCharging,
      serviceType: "generator"
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
