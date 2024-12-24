'use client';
import { Logs, Minimize2 } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    useEffect(()=>{
      if(showMobileMenu){
        document.body.style.overflow = 'hidden';
      }else{
        document.body.style.overflow = 'auto';
      }
    },[showMobileMenu])
    return (
      <div className='absolute top-0 left-0 z-10 w-full'>
        <div className="container flex items-center justify-between px-5 py-3 mx-auto bg-transparent md:px-20 lg:px-32">
            
        <div className="flex items-center gap-5 md:mr-20">
  <a href="/" className="flex items-center gap-2"> {/* Added gap-4 here */}
    <img src={'/fox.jpg'} alt="logo" className="rounded-full w-10 h-10" />
    <h2 className="text-lg font-semibold text-orange-800">Lalazy</h2>
  </a>
</div>


          <ul className='hidden text-orange-900 md:flex gap-7 font-bold'>
              <a href="#Header" className='cursor-pointer hover:text-red-800 '>Home</a>
              <a href="#About" className='cursor-pointer hover:text-red-800 '>About</a>
              <a href="#Projects" className='cursor-pointer hover:text-red-800 '>Service</a>
              <a href="#Testimonals" className='cursor-pointer hover:text-red-800 '>Team</a>
              <a href="#Testimonals" className='cursor-pointer hover:text-red-800 '>Contact</a>
          </ul>
          <a href="https://hubpost-app.vercel.app/authors/mailadeyinka@gmail.com">
          <button className="hidden px-6 bg-yellow-500 rounded-full md:block text-white  hover:bg-gray-400 md:ml-9">Blog</button>
          </a>
          
          <button>
          <Logs className='cursor-pointer md:hidden w-7 text-rose-700'onClick={() => setShowMobileMenu(true)}/>
          </button>
        </div>
        
        {/* ------------Mobile Menu----------------- */}
        {showMobileMenu && (
        <div className="fixed top-0 bottom-0 right-0 w-full overflow-hidden transition-transform ease-in-out bg-white/95 duration-5000s md:hidden">
          <div className='flex justify-end p-6 cursor-pointer'>
          <Minimize2 className='w-6 text-rose-700' onClick={() => setShowMobileMenu(false)}/>
          </div>
          <ul className='flex flex-col items-center gap-2 px-5 mt-5 text-lg font-medium'>
          <a onClick={() => setShowMobileMenu(false)} href="#Header" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-rose-500'>Home</a>
          <a onClick={() => setShowMobileMenu(false)} href="#About" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-rose-500'>About</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Project" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-rose-500'>Services</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Team" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-rose-500'>Team</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Contact" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-rose-500'>Contact</a>
          <a onClick={() => setShowMobileMenu(false)} href="https://hubpost-app.vercel.app/authors/null" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-rose-500'>Blog</a>
          </ul>
        </div>
        )}
      </div>
    )
  }

export default Header