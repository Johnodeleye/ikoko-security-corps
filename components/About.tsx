import Image from "next/image"
import Link from "next/link"

const About = () => {
    return (
        <div className="px-5 py-20 bg-gray-50">
            <h3 className="text-base text-rose-700 font-bold px-8 lg:px-20">We Are The Special Force</h3>
            <h1 className="text-2xl font-bold mt-3 px-8 lg:px-20">The Country is safe with force</h1>
            <div className="md:grid grid-cols-2 gap-16 px-8 lg:px-20">
            <p className="mt-3 lg:text-xl text-sm text-gray-800 lowercase lg:w-[600px] hidden md:block">IKOKO SECURITY CORPS IS AN ORGANIZATION THAT IS SET UP TO PUT STOP TO ALL BAD BEHAVIOR IN OUR LAND AND TO BRING BACK PEACE AND LOVE, THE ORGANIZATION IS TO BRING MEN AND WOMEN OF HONOR TOGETHER TO JOIN HAND AND FIGHT CRIMES OUR MISSION IS TO FIGHT CRIMES, CULTISM, KIDNAPPING, TERRORIST AND EVERY BAD ACT IN OUR LAND OUR GOAL IS TO PROMOTE PEACE & SECURITY, HAPPINESS, LOVE, HARMONY TO OUR LAND
            MAY GOD HELP US OUT AS WE FIGHT CRIMES. IKOKO SECURITY CORPS IS AN ORGANIZATION THAT IS SET UP TO PUT STOP TO ALL BAD BEHAVIOR IN OUR LAND AND TO BRING BACK PEACE AND LOVE, THE ORGANIZATION IS TO BRING MEN AND WOMEN OF HONOR TOGETHER TO JOIN HAND AND FIGHT CRIMES OUR MISSION IS TO FIGHT CRIMES, CULTISM, KIDNAPPING, TERRORIST AND EVERY BAD ACT IN OUR LAND OUR GOAL IS TO PROMOTE PEACE & SECURITY, HAPPINESS, LOVE, HARMONY TO OUR LAND
            MAY GOD HELP US OUT AS WE FIGHT CRIMES.
            </p>
            <p className="mt-3 text-sm text-gray-800 lowercase w-fit md:hidden">IKOKO SECURITY CORPS IS AN ORGANIZATION THAT IS SET UP TO PUT STOP TO ALL BAD BEHAVIOR IN OUR LAND AND TO BRING BACK PEACE AND LOVE, THE ORGANIZATION IS TO BRING MEN AND WOMEN OF HONOR TOGETHER TO JOIN HAND AND FIGHT CRIMES OUR MISSION IS TO FIGHT CRIMES, CULTISM, KIDNAPPING, TERRORIST AND EVERY BAD ACT IN OUR LAND OUR GOAL IS TO PROMOTE PEACE & SECURITY, HAPPINESS, LOVE, HARMONY TO OUR LAND
            MAY GOD HELP US OUT AS WE FIGHT CRIMES.
            </p>
            <button className="text-rose-700 border border-rose-700 rounded-full hover:bg-rose-700 hover:text-white transition-ease-in-out px-5 py-2 lg:ml-2 md:mt-3 ml-0 mt-4 md:hidden">
            <Link href='#About'>Read More</Link>
            </button>
            <img src='/tank.jpg' alt='image' className='mx-auto' />
            </div>

            
        </div>
    )
}

export default About