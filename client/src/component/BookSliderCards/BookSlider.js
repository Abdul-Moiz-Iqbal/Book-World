import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./BookCard.css";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const BookCard = ({ title, books }) => {
  console.log(title, books);

  return (
    <div className="w-full h-full px-1 sm:px-4 md:px-5 lg:px-28 my-10    ">
      <h2 className="text-3xl font-semibold text-center md:text-4xl w-fit mx-auto md:text-center  text-black my-5">
        <div>{title}</div>
        <div className="w-[85%] pt-2  mx-auto border-b-2  border-blue-700"></div>
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          350: {
            slidesPerView: 2,
            spaceBetween: 10,
            navigation: false,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 10,
            navigation: false,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 10,
            navigation: true,
          },
          1290: {
            slidesPerView: 5,
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next",
            },
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper overflow-x-hidden  "
      >
        {books.map((book) => (
          <SwiperSlide key={book._id} className="BookCard  ">
            <Link
              to={`/book/${book._id}`}
              className=" bg-red-100 w-[200px] md:w-[90%]  h-[70%] md:h-fit lg:h-[77%]  overflow-hidden hover:shadow-lg text-left"
            >
              <div className="h-[65%] md:h-[35vh] lg:h-[40vh]">
                {/* <div className="xs:h-[210px] w-[195px] h-[249px] md:h-fit relative flex justify-center md:flex-none"> */}
                <div className="w-full h-full  relative flex justify-center md:flex-none">
                  <img
                    // src={"https://booksvilla.com.pk/cdn/shop/products/harihaishakhetamannaabhinovel_0000_198x.jpg?v=1658988077"}
                    src={book.imageUrl}
                    className="  "
                    alt={book.title}
                  />
                  <div className="absolute top-3 right-3 bg-blue-700 hover:bg-blue-800 text-white p-2 rounded transition duration-300">
                    <FaCartShopping className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className=" py-1 px-2 flex flex-col h-[] text-left md:text-left ">
                <h3 className="text-[0.875rem] md:text-sm font-nato-sans truncate-2-lines">
                  {book.title}
                </h3>
                <p className="text-xs text-gray-600 font-nato-sans mb-2">
                  {book.author}
                </p>
                <p className="text-blue-700 font-semibold  ">{book.price}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="w-[90%] mx-auto border-b-2 border-gray-300"></div> */}
    </div>
  );
};

export default BookCard;
