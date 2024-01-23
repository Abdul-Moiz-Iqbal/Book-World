import React from 'react'

//icons and components
import { IoClose } from "react-icons/io5";
import { Checkbox, Label } from "flowbite-react";
import { Link } from 'react-router-dom';

   

const SideMenu = (props) => {
    const closeMenuHandler = ()=>{
        props.filterMenuToggle();
    }
    const navItems = [
        { path: "/", link: "Home" },
        { path: "/shop", link: "Shop" },
        { path: "/authors", link: "Authors" },
        { path: "/blog", link: "Blog" },
        { path: "/contact", link: "Contact Us" },
        { path: "/about", link: "About Us" },
      ];
    
  return (
    <div className=''>
        <div  className="h-[100%] w-[85%] sm:w-[70%] md:w-[45%] lg:w-[25%]   fixed z-[999] top-0 left-0   flex flex-col bg-white  overflow-y-scroll ">
        {/* Top Section  */}
        <div className="p-4 flex justify-between">
          <div className="uppercase tracking-wider font-nato-sans font-semibold">
            Menu
          </div>
          <IoClose onClick={closeMenuHandler} className='motion-safe:animate-bounce focus:'/>
        </div>

        {/* Availability */}
        
        {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="px-4 py-4 border-t-[1px] uppercase cursor-pointer text-base text-slate-800 hover:text-blue-700">
              {item.link}
            </Link>
          ))}
      </div>
    </div>
  )
}

export default SideMenu