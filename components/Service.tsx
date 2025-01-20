'use client';
import React from "react";
import { Equal, Shield, Star } from "lucide-react";
import ServiceItem from "./ServiceItem";
import { motion } from "framer-motion";

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
    <motion.div 
      className="bg-white py-12" 
      id="services"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="text-3xl font-bold mx-auto px-24 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our <span className="text-rose-700">Services</span>
      </motion.h1>

      <motion.p 
        className="text-sm px-6 mx-auto text-center mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Our expert security teams provide top-notch protection and surveillance services.
      </motion.p>

      <motion.p 
        className="text-center text-rose-700 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        ___________
      </motion.p>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 lg:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <ServiceItem
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Service;
