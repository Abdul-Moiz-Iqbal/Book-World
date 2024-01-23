import React from "react";
import SearchBar from "./SearchBar";
import BannerCard from "./BannerCard/BannerCard";

const Banner = () => {
    return (
      <div className="pb-5 overflow-x-hidden bg-teal-100 flex justify-center items-center ">
      <div className="   flex flex-col lg:justify-between md:flex-row md:justify-between ">
        {/* left section  on md and lg */}
        <div className="  px-6 text-center  md:text-start md:pl-5  md:mt-0  md:w-[60%]">
          <h1 className="xs:text-[2rem]  sm:text-[3rem]  md:text-[3rem] lg:text-[4rem] font-bold text-slate-800">
            Buy your books
          </h1>
          <h1 className="text-[1.5rem] sm:text-[2.4rem] sm:mt-[-1rem]  md:text-[3rem] lg:text-[4rem] font-bold text-blue-700">
            For the best Prices
          </h1>
          <h1 className="mt-3">
            Discover the Perfect Reads for You! Explore a Vast Collection of
            Books Waiting to Captivate Your Imagination. Find Your Next Favorite
            Story Today!
          </h1>

          {/* search bar */}
          <div className="mt-6  hidden sm:block">
            <SearchBar />
          </div>
        </div>
        {/* right section */}
        <div className="hidden  md:pr-5  md:w-[40%] lg:w-[50%]  mt-10 md:mt-0  md:flex justify-center items-center  ">
            <BannerCard/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
