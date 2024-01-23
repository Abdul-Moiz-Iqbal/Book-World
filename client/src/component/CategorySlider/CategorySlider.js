// import React, { useEffect, useRef } from "react";

// import SwiperCore, { Navigation } from "swiper";

// import "./CategorySlider.css";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Swiper from "swiper";

// const CategorySlider = () => {
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     if (swiperRef.current) {
//       const swiper = new SwiperCore(swiperRef.current, {
//         slidesPerView: "auto",
//         spaceBetween: 10,
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//       });

//       // Expose the Swiper instance to control the slider externally
//       swiperRef.current.swiper = swiper;
//     }
//   }, []);

//   const showNextCategory = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slideNext();
//     }
//   };
//   const showPrevCategory = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slidePrev();
//     }
//   };

//   return (
//     <div className="px-1 py-4 w-full overflow-x-hidden ">
//       <div className="swiper-container flex" ref={swiperRef}>
//         <div className="swiper-wrapper px-3">
//           <div
//             className="swiper-button-prev text-3xl text-gray-600 pr-7"
//             onClick={showPrevCategory}
//           ></div>
//           {/* Your book categories here */}
//           <div className="swiper-slide w-fit p-4">Fiction</div>
//           <div className="swiper-slide p-4">Art</div>
//           <div className="swiper-slide p-4">Science</div>
//           <div className="swiper-slide p-4">History</div>
//           <div className="swiper-slide bg-red-50 w-[20px] p-4">English</div>
//           <div className="swiper-slide w-fit p-4">Fiction</div>
//           <div className="swiper-slide p-4">Art</div>
//           <div className="swiper-slide p-4">Science</div>
//           <div className="swiper-slide p-4">History</div>
//           <div className="swiper-slide bg-red-50 w-[20px] p-4">English</div>
//           <div className="swiper-slide w-fit p-4">Fiction</div>
//           <div className="swiper-slide p-4">Art</div>
//           <div className="swiper-slide p-4">Science</div>
//           <div className="swiper-slide p-4">History</div>
//           <div className="swiper-slide bg-red-50 w-[20px] p-4">English</div>
//           <div className="swiper-slide w-fit p-4">Fiction</div>
//           <div className="swiper-slide p-4">Art</div>
//           <div className="swiper-slide p-4">Science</div>
//           <div className="swiper-slide p-4">History</div>
//           <div className="swiper-slide bg-red-50 w-[20px] p-4">English</div>

//           {/* Add more categories */}
          
//         </div>
//         <div
//           className="swiper-button-next bg-white text-3xl text-gray-600"
//           onClick={showNextCategory}
//         ></div>

        
//       </div>
//     </div>
//   );
// };


// export default CategorySlider;

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './CategorySlider.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  
  



  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        // slidesPerView={15}
        breakpoints={{
          350: {
            slidesPerView: 3 ,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
          800: {
            slidesPerView: 10,
            spaceBetween: 10,
          },
          1290: {
            slidesPerView: 15,
            spaceBetween: 0,
          },
        }}
        
        // spaceBetween={30}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Fiction</SwiperSlide>
        <SwiperSlide>Horro</SwiperSlide>
        <SwiperSlide>Art</SwiperSlide>
        <SwiperSlide>History</SwiperSlide>
        <SwiperSlide>Fiction</SwiperSlide>
        <SwiperSlide>Horror</SwiperSlide>
        <SwiperSlide>Art</SwiperSlide>
        <SwiperSlide>History</SwiperSlide>
        <SwiperSlide>Fiction</SwiperSlide>
        <SwiperSlide>Horror</SwiperSlide>
        <SwiperSlide>Art</SwiperSlide>
        <SwiperSlide>History</SwiperSlide>
        <SwiperSlide>Fiction</SwiperSlide>
        <SwiperSlide>Horror</SwiperSlide>
        <SwiperSlide>Art</SwiperSlide>
        <SwiperSlide>History</SwiperSlide>
      </Swiper>

      
    </>
  );
}

