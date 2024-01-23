import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./AuthorSlider.css";

// import required modules
import { Pagination,Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
const AuthorSlider = ({ title }) => {

  const book = ["Author","Author","Author","Author",]
  
  return (
    <div>
      <h2 className="text-4xl md:text-5xl w-fit mx-auto text-center font-bold text-black my-5">
        <div>{title}</div>
        <div className="w-[85%] pt-2  mx-auto border-b-2  border-blue-700"></div>
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1290: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        
        modules={[Autoplay, Pagination]}
        className="mySwiper overflow-x-hidden  ">
        {}
          <SwiperSlide key={book[0]} className="BookCard  ">
            <Link
              to={`/book/${book[0]}`}
              className="w-30 md:h-fit shadow-md rounded-lg overflow-hidden hover:shadow-lg text-left"
            >
              <div className=" p-4 ">
                <div className="h-[20rem] md:h-fit relative flex justify-center md:flex-none">
                  <img
                    src={"https://booksvilla.com.pk/cdn/shop/products/harihaishakhetamannaabhinovel_0000_198x.jpg?v=1658988077"}
                    // src={book[]}
                    className=" "
                    alt={book[0]}
                  />
                  <div className="absolute top-3 right-3 bg-blue-700 hover:bg-blue-800 text-white p-2 rounded transition duration-300">
                    <FaCartShopping className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="p-4 flex flex-col h-[] ">
                <h3 className="text-sm font-semibold truncate-2-lines">
                  {book[0]}
                </h3>

              </div>
            </Link>
          </SwiperSlide>
        {/* ))} */}
      </Swiper>
    </div>
  );
};

export default AuthorSlider;
