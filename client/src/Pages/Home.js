import React from "react";
import Banner from "../component/Banner";
import BestSeller from "../component/BestSeller";
import BannerWeek from "../component/BannerWeek";
import Testimonial from "../component/Testimonial/Testimonial"
import TestimonialCard from "../component/Testimonial/TestimonialCard";
import Footer from "../component/Footer";
import AuthorSlider from "../AuthorSlider/AuthorSlider";


const Home = () => {
  
  return (
    <div className="   overflow-x-hidden">
      <Banner />
      <BestSeller sliderName="Best Seller"/>
      <BannerWeek img={"http://dkprintworld.com/wp-content/uploads/2019/07/Andre-Couture.jpg"} name={"Author"}/>
      <BestSeller  sliderName="Recently Viewd" />
      <BannerWeek img={"http://dkprintworld.com/wp-content/uploads/2019/07/Andre-Couture.jpg"} name={"Publisher"}/>
      <BestSeller  sliderName="New Released" />
      <BestSeller  sliderName=" Editor's Pick Books" />
      <BestSeller  sliderName="Deals Of the Week" />
      <AuthorSlider title={"Featured Publisher"}/>
      <Testimonial/>
    </div>
  );
};

export default Home;
