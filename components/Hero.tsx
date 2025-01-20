'use client';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative bg-[url(https://www.rollingstone.com/wp-content/uploads/2022/08/2022.03.08.niger_.01833-Jarryd-and-Drew.jpg)] bg-cover bg-center bg-no-repeat"
        >
            <div className="absolute inset-0 bg-white/60 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

            <div className="relative mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
                >
                    <h1 className="text-3xl font-extrabold sm:text-5xl text-shadow-white">
                        United for Peace,
                        <strong className="block font-extrabold text-rose-700 text-shadow-white">
                            Justice, & Security
                        </strong>
                    </h1>
                    <p className="mt-4 max-w-lg sm:text-xl/relaxed text-red-700 text-shadow-white md:text-black">
                        Ikoko Security Corps is committed to ending crime and bringing peace and love to our land. Together, we fight for safety, harmony, and a better future.
                    </p>
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-8 flex flex-wrap gap-4 text-center md:ml-16"
                    >
                        <a
                            href="#"
                            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-transparent hover:border border-rose-600 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                            Get Started
                        </a>

                        <a
                            href="#"
                            className="block w-full rounded bg-transparent px-12 py-3 text-sm text-rose-600 shadow focus:outline-none focus:ring active:text-rose-500 sm:w-auto border border-white font-semibold hover:bg-rose-600 hover:text-white"
                        >
                            Learn More
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Hero;
