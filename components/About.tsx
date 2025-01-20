'use client';
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <motion.div 
            className="px-5 py-20 bg-gray-50" 
            id="About"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // Only triggers once when 20% is visible
            transition={{ duration: 0.8 }}
        >
            <motion.h3 
                className="text-base text-rose-700 font-bold px-8 lg:px-20"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                We Are The Special Force
            </motion.h3>

            <motion.h1 
                className="text-2xl font-bold mt-3 px-8 lg:px-20"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                The Country is safe with force
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="mt-3 text-sm md:text-lg text-gray-800 lowercase leading-relaxed">
                        IKOKO SECURITY CORPS IS AN ORGANIZATION THAT IS SET UP TO PUT STOP TO ALL BAD BEHAVIOR IN OUR LAND AND TO BRING BACK PEACE AND LOVE. THE ORGANIZATION IS TO BRING MEN AND WOMEN OF HONOR TOGETHER TO JOIN HANDS AND FIGHT CRIMES.
                        {showMore && (
                            <span>
                                OUR MISSION IS TO FIGHT CRIMES, CULTISM, KIDNAPPING, TERRORISM, AND EVERY BAD ACT IN OUR LAND. OUR GOAL IS TO PROMOTE PEACE, SECURITY, HAPPINESS, LOVE, AND HARMONY TO OUR LAND. MAY GOD HELP US OUT AS WE FIGHT CRIMES.
                            </span>
                        )}
                    </p>
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="mt-4 text-rose-700 border border-rose-700 rounded-full hover:bg-rose-700 hover:text-white transition px-5 py-2"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? 'Read Less' : 'Read More'}
                    </motion.button>
                </motion.div>

                <motion.div 
                    className="flex justify-center"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Image src="/tank.jpg" alt="Security Image" width={500} height={300} className="rounded-lg" />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default About;
