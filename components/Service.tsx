import React from "react";
import { Equal, Shield, Star } from "lucide-react"; // Example icons
import ServiceItem from "./ServiceItem";

const services = [
  {
    icon: Equal,
    title: "Security Consulting",
    description: "Providing expert security advice tailored to your needs.",
  },
  {
    icon: Shield,
    title: "Threat Analysis",
    description: "Identifying potential risks and vulnerabilities proactively.",
  },
  {
    icon: Star,
    title: "24/7 Monitoring",
    description: "Round-the-clock surveillance to keep you safe.",
  },
  {
    icon: Equal,
    title: "Security Consulting",
    description: "Providing expert security advice tailored to your needs.",
  },
  {
    icon: Shield,
    title: "Threat Analysis",
    description: "Identifying potential risks and vulnerabilities proactively.",
  },
  {
    icon: Star,
    title: "24/7 Monitoring",
    description: "Round-the-clock surveillance to keep you safe.",
  },
];

const Service = () => {
  return (
    <div className="bg-white py-12" id='services'>
      <h1 className="text-3xl font-bold mx-auto px-24 text-center">
        Our <span className="text-rose-700">Services</span>
      </h1>
      <p className="text-sm px-6 mx-auto text-center mt-2">
      Our expert security teams provide top-notch protection and surveillance services.
      </p>
      <p className="text-center text-rose-700 mb-8">___________</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 lg:px-24">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
