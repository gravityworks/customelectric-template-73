
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface PropertyCardProps {
  image: string;
  title: string;
  description: string;
  icon: LucideIcon;
  serviceType?: string;
}

const PropertyCard = ({ image, title, description, icon: Icon, serviceType }: PropertyCardProps) => {
  return (
    <Link to={`/services/${serviceType || ""}`}>
      <Card className="overflow-hidden group cursor-pointer border-none">
        <CardContent className="p-0">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="pt-4">
            <div className="flex items-center mb-2">
              <Icon className="w-5 h-5 mr-2 text-brand-blue" />
              <h3 className="text-lg font-medium text-estate-800">{title}</h3>
            </div>
            <p className="text-sm text-estate-500">{description}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
