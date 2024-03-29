import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import BookCard from "../component/BookSliderCards/BookSlider";

import ReviewCard from "../component/ReviewCard";
const SingleBook = () => {
  const book = useLoaderData();

  const [bestSellerBooks, setBestSellerBook] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/all-books`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("ss", data);
        setBestSellerBook((prevBest) => [...prevBest, ...data.slice(0, 6)]);
        console.log(bestSellerBooks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const bookDetail = {
    Author: "Peter Thiel",
    Condition: "New",
    Binding: "Paper Back",
    Pages: 222,
    Publisher: "Local Books",
    Language: "English",
    Publication_Year: "2021",
  };

  const bookDetailsArray = Object.entries(bookDetail);
  console.log(bookDetailsArray);
  return (
    <div className="font-Poppins mt-20 ">
      {/* <CategorySlider /> */}
      <div className="flex flex-col md:flex-row   justify-between mx-auto w-[90%] lg:w-[70%]  mt-5">
        <div className=" md:w-[50%]  ">
          <img src={book.imageUrl} className="w-[90%]" />
        </div>

        <div className="font-Poppins md:w-[50%]   ">
          <h1 className="mt-5 md:mt-0 text-3xl font-semibold ">
            {" "}
            {book.title}
          </h1>

          <div className="flex items-center mt-3">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
              4.95
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
            >
              73 reviews
            </a>
          </div>

          <div className=" text-xl text-slate-600 mt-5">
            Rs {book.price} PKR
          </div>
          {bookDetailsArray.map(([key, value]) => (
            <div key={key} className="text-sm mt-1">
              <span className="font-bold">{key}</span>: {value}
            </div>
          ))}

          <div className="mt-5">{book.description}</div>

          <div className="flex w-fit text-2xl font-mono border-solid border-black border  rounded-full mt-5 ">
            <button className="pl-3 pr-6">-</button>
            <div>1</div>
            <button className="pl-6 pr-3">+</button>
          </div>
          <button className=" w-full mt-5 py-3 text-center rounded-full  text-white border border-solid bg-teal-900  hover:bg-teal-950 ">
            Add to Cart
          </button>
          <div className="mt-5 font-Poppins font-light">
            <div>ISBN:{book.ISBN}</div>
            <div>Category:{book.category}</div>
            <div>Availablity: In stock</div>
            <div>Book Print:Paper Cover</div>
          </div>
        </div>
      </div>

      {/* description */}
      <div className=" mt-16 px-5 md:px-32 py-16  bg-slate-100">
        {bookDetailsArray.map(([key, value]) => (
          <div key={key} className="text-sm mt-1">
            <span className="font-bold">{key}</span>: {value}
          </div>
        ))}
        <div className="mt-5 font-Roboto">
          {book.description}
          {book.description}
          {book.description}
        </div>
      </div>

      {/* Review Section */}
      <div className=" w-[90%] md:w-[75%] md:flex md:justify-between mx-auto font-Poppins mt-32 ">
        <div className=" md:w-[30%]  ">
          <div className=" text-lg md:text-2xl font-semibold ">
            Customer Reviews
          </div>
          <div className=" flex justify-between md:flex-col text-lg font-semibold mt-4">
            <div className=" w-fit text-white text-3xl bg-amber-500 p-5 rounded-xl">
              4.4
            </div>
            <button className="bg-teal-900 h-fit w-fit rounded-md mt-5 px-5 py-2 text-white">
              Write Review
            </button>
          </div>
        </div>
        <div className=" md:w-[75%]">
          <div className="flex mt-2 mb-10 ">
            Based on <p className="ml-1 font-semibold">20 reviews</p>
          </div>
          {/* Review Card */}
          <ReviewCard />
          <ReviewCard />
          <div className="flex justify-center mb-10">
            <button className="p-2 border border-solid border-black rounded-lg ">
              Load More
            </button>
          </div>
        </div>
      </div>

      <BookCard title={"You may Like"} books={bestSellerBooks} />
      <BookCard title={"Recently Viewd Books"} books={bestSellerBooks} />
    </div>
  );
};

export default SingleBook;
