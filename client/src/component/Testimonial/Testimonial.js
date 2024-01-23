import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial.css";
import { Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard"; // Import your TestimonialCard component

const Testimonial = () => {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Ajit Kumar",
      designation: "Software Engineer",
      review: "Great experience! Highly recommended Highly recommended Highly recommended Highly recommended!",
      rating: 5,
      image: "http://dkprintworld.com/wp-content/uploads/2019/07/Andre-Couture.jpg",
    },
    {
      id: 2,
      name: "Ajay",
      designation: "Ceo ",
      review: "Great experience! Highly recommended!",
      rating: 5,
      image: "http://dkprintworld.com/wp-content/uploads/2019/07/Andre-Couture.jpg",
    },
    {
      id: 3,
      name: "Aditya B",
      designation: "Proffesor",
      review: "Great experience! Highly recommended!",
      rating: 5,
      image: "http://dkprintworld.com/wp-content/uploads/2019/07/Andre-Couture.jpg",
    },
    {
      id: 4,
      name: "Anand Damir",
      designation: "Doctor",
      review: "Great experience! Highly recommended!",
      rating: 5,
      image: "http://dkprintworld.com/wp-content/uploads/2019/07/Andre-Couture.jpg",
    },
    {
      id: 5,
      name: "Anand Damir",
      designation: "Doctor",
      review: "Great experience! Highly recommended!",
      rating: 5,
      image: "http://dkprintworld.com/wp-content/uploads/2019/07/Andre-Couture.jpg",
    },
    // Add more testimonials here...
  ];

  return (
    <div className=" py-10 px-4 lg:px-24 t">
      <h2 className="text-5xl w-fit mx-auto text-center font-bold text-black my-5">
        Testimonial
        <div className="w-[85%] pt-2 mx-auto border-b-2 border-blue-700"></div>
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 40 },
          1150: { slidesPerView: 4, spaceBetween: 50 },
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
