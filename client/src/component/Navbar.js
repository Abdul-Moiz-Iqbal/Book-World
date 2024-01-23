import React, { useEffect, useState } from "react";

import {
  FaBarsStaggered,
  FaBlog,
  FaCartShopping,
  FaCross,
  FaMarkdown,
  FaXmark,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import SideMenu from "./MobileMenu/SideMenu";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [navSticky, setNavSticky] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       setNavSticky(true);
  //     } else {
  //       setNavSticky(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.addEventListener('scroll', handleScroll);
  //   };
  // }, []);


  const isMenuOpen = () => {
    setMenuToggle(!menuToggle);
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/shop", link: "Shop" },
    { path: "/authors", link: "Authors" },
    { path: "/blog", link: "Blog" },
    { path: "/contact", link: "Contact Us" },
    { path: "/about", link: "About Us" },
  ];
  return (
    <div className="flex bg-transparent border-b-2 z-10">
      <div className={`h-20 w-[100%]  flex  justify-center items-center ${navSticky ? " ":""} `}>
        <div className= {`w-[90%] flex justify-between   `}>

          {/* Menu btn for small device  */}
        <div className="md:hidden flex items-center">
            <button onClick={isMenuOpen} className="">
              {menuToggle ? <FaXmark /> : <FaBarsStaggered />}{" "}
            </button>
          </div>
          <Link to={'/'} className="text-3xl md:text-4xl font-bold text-blue-700 cursor-pointer">
            Book World
          </Link>
          <ul className="hidden md:flex md:space-x-6 items-center lg:space-x-12   ">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="uppercase cursor-pointer text-base text-black hover:text-blue-700"
              >
                {item.link}
              </Link>
            ))}
          </ul>
          <div className=" flex items-center">
            <button className=" md:text-2xl font-bold hover:text-blue-700">
              {/* <FaBarsStaggered />{" "} */}
              <FaCartShopping/>
            </button>
          </div>
          {/* btn for small device */}
          
        </div>
        {/* navigation for small devices  */}
        
      </div>
      {menuToggle ? (
         <SideMenu filterMenuToggle={isMenuOpen}/>
        // <div className=" h-[100vh] w-[60%] fixed left-0-0 top-0 bottom-0 z-10 px-4 space-y-4 flex flex-col bg-green-100  ">
         
        //   {navItems.map((item) => (
        //     <Link
        //       key={item.path}
        //       to={item.path}
        //       className="uppercase cursor-pointer text-base text-slate-800 mt-6 hover:text-blue-700"
        //     >
        //       {item.link}
        //     </Link>
        //   ))}
        // </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
