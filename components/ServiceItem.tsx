import React from "react";
import { LucideIcon } from "lucide-react";

interface ServiceItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white shadow-inner shadow-gray-800 rounded-lg p-12 text-center cursor-pointer">
      <Icon className="animate-pulse text-rose-700 w-10 h-10 mx-auto mb-4" />
      <h2 className="text-xl font-bold mb-2 ">{title}</h2>
      <p className="text-sm text-gray-600 ">{description}</p>
    </div>
  );
};

export default ServiceItem;