import React from "react";
import styles from "./bookCard.module.css";
import { Card } from "flowbite-react";
import { FaCartShopping } from "react-icons/fa6";

const BookCard = (props) => {
  return (
    
    <div className="w-full h-fit flex rounded shadow-lg py-3  pl-3   ">
      <img src={props.book.imageUrl} className="w-[50%] h-[30vh] md:h-[22vh]  lg:h-[30vh]  " />
      <div className=" pl-1 pr-1 md:pl-3 w-full   flex flex-col justify-between ">
        <div className="">
          <div className="">
            <h1
              className={`text-md font-nato-sans text-sm tracking-wide font-medium  text-black dark:text-white ${styles.truncate}`}
            >
              {props.book.title}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:items-center mt-4">
          <span className="no-underline text-xs text-gray-700 tracking-wider uppercase font-normal">Author:</span>
          <p className="md:ml-1 uppercase border-b border-dashed w-fit text-xs font-light tracking-wider text-gray-700  dark:text-gray-400">
             {props.book.author}
          </p>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="flex justify-center items-center ">
            <p className="  md:text-lg  dark:text-gray-400">
              ${props.book.price} 5
            </p>
            
          </div>
          <div
            className="  bg-blue-700 hover:bg-blue-800 text-white p-2 rounded cursor-pointer transition duration-300"
            onClick={() => {}}
          >
            <FaCartShopping className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
