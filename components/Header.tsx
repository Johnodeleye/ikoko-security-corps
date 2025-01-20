'use client';
import { Logs, Minimize2 } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    }, [showMobileMenu]);

    const menuVariants = {
        hidden: { x: "100%" },
        visible: { x: 0, transition: { type: "spring", stiffness: 100 } },
        exit: { x: "100%", transition: { duration: 0.3 } }
    };

    return (
        <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='absolute top-0 left-0 z-10 w-full'
        >
            <div className="container flex items-center justify-between px-5 py-3 mx-auto bg-transparent md:px-20 lg:px-32">

                <a href="/" className="flex items-center gap-2">
                    <img src={'/logo.png'} alt="logo" className="rounded-full w-16 h-11" />
                    <h2 className="text-lg font-semibold text-orange-800">Lalazy</h2>
                </a>

                <ul className='hidden text-orange-900 md:flex gap-7 font-bold'>
                    <a href="#" className='cursor-pointer hover:text-red-800 '>Home</a>
                    <a href="#About" className='cursor-pointer hover:text-red-800 '>About</a>
                    <a href="#services" className='cursor-pointer hover:text-red-800 '>Service</a>
                    <a href="#Testimonals" className='cursor-pointer hover:text-red-800 '>Team</a>
                    <a href="#contact" className='cursor-pointer hover:text-red-800 '>Contact</a>
                </ul>

                <a href="https://hubpost-app.vercel.app/">
                    <button className="hidden px-6 bg-yellow-500 rounded-full md:block text-white hover:bg-gray-400 md:ml-9">
                        Blog
                    </button>
                </a>

                <button onClick={() => setShowMobileMenu(true)}>
                    <Logs className='cursor-pointer md:hidden w-7 text-rose-700'/>
                </button>
            </div>

            {/* Mobile Menu with Animation */}
            <AnimatePresence>
                {showMobileMenu && (
                    <motion.div 
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed top-0 bottom-0 right-0 w-full overflow-hidden bg-white/95 z-50 md:hidden"
                    >
                        <div className='flex justify-end p-6 cursor-pointer'>
                            <Minimize2 className='w-6 text-rose-700' onClick={() => setShowMobileMenu(false)}/>
                        </div>

                        <ul className='flex flex-col items-center gap-4 text-lg font-medium'>
                            <a href="#" onClick={() => setShowMobileMenu(false)} className='hover:text-rose-500'>Home</a>
                            <a href="#About" onClick={() => setShowMobileMenu(false)} className='hover:text-rose-500'>About</a>
                            <a href="#services" onClick={() => setShowMobileMenu(false)} className='hover:text-rose-500'>Services</a>
                            <a href="#Team" onClick={() => setShowMobileMenu(false)} className='hover:text-rose-500'>Team</a>
                            <a href="#Contact" onClick={() => setShowMobileMenu(false)} className='hover:text-rose-500'>Contact</a>
                            <a href="https://hubpost-app.vercel.app/authors/null" onClick={() => setShowMobileMenu(false)} className='hover:text-rose-500'>Blog</a>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default Header;
