import React from "react";

const BannerWeek = ({name, img}) => {
  return (
    <div className=" px-4 py-8 md:py-20 bg-teal-100 lg:px-24">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="md:w-[50%] flex flex-col justify-between">
          <div className=" text-6xl font-bold text-blue-700">
            {name} of The <span className="">Week</span>
          </div>
          <div className="mt-3  text-lg font-medium   ">
            Honoring Literary Brilliance: Weaving Tapestries of Imagination,
            Emotion, and Insight, One Page at a Time. Celebrating the {name} of
            the Week for their Exceptional Craft and Unmatch
          </div>
          <button className="mt-7 md:mt-0 bg-blue-700 rounded text-white font-medium px-4 py-2 w-fit">
            Explore his Books
          </button>
        </div>
        <div className="mt-5 mx-auto md:mx-0 w-fit h-fit border-slate-950 border-2 rounded-lg">
          <img
            className="h-[240px] rounded-lg bg-cover"
            src={img}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerWeek;
