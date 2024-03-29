import React from "react";
import { IoClose, IoTrashBinOutline } from "react-icons/io5";
import { Checkbox, Label } from "flowbite-react";

import "./BookSliderCards/BookCard.css";

const CartSideBar = (props) => {
  const closeMenuHandler = () => {
    props.CartSideBarToggle();
  };
  return (
    <div className=" inset-0 fixed z-[998] bg-black bg-opacity-50 ">
      <div className="h-[100%] w-[85%] sm:w-[70%] md:w-[45%] lg:w-[23%]   fixed z-[999] top-0 right-0   flex flex-col bg-white">
        {/* Top Section  */}
        <div className="p-4 flex border-b justify-between">
          <div className="uppercase tracking-wider font-nato-sans font-semibold">
            Cart
          </div>
          <IoClose
            className="hover:cursor-pointer"
            onClick={closeMenuHandler}
          />
        </div>

        {/* Books */}
        <div className="w-full h-[60%] bg-white overflow-y-auto">
          <div className=" p-5 flex justify-between border-b">
            <img
              className="w-[40%]"
              src="https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books-2019/han024.jpg"
            />
            <div className="ml-1 font-Poppins">
              <div className="font-semibold truncate-2-lines">
                The Bitter-Sweet Cocktail- Movies, Music, Wine, Women
              </div>
              <div className="mt-2">$19.9</div>
              <div className="flex w-fit text-2xl font-mono border-solid border-black border  rounded-full mt-2 ">
                <button className="pl-3 pr-6">-</button>
                <div>1</div>
                <button className="pl-6 pr-3">+</button>
              </div>
              <IoTrashBinOutline className="mt-2 cursor-pointer text-xl" />
            </div>
          </div>
          {/* <div className=" p-5 flex justify-between border-b">
            <img
              className="w-[40%]"
              src="https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books-2019/han024.jpg"
            />
            <div className="ml-1 font-Poppins">
              <div className="font-semibold truncate-2-lines">
                The Bitter-Sweet Cocktail- Movies, Music, Wine, Women
              </div>
              <div className="mt-2">$19.9</div>
              <div className="flex w-fit text-2xl font-mono border-solid border-black border  rounded-full mt-2 ">
                <button className="pl-3 pr-6">-</button>
                <div>1</div>
                <button className="pl-6 pr-3">+</button>
              </div>
              <IoTrashBinOutline className="mt-2 cursor-pointer text-xl" />
            </div>
          </div>
          <div className=" p-5 flex justify-between border-b">
            <img
              className="w-[40%]"
              src="https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books-2019/han024.jpg"
            />
            <div className="ml-1 font-Poppins">
              <div className="font-semibold truncate-2-lines">
                The Bitter-Sweet Cocktail- Movies, Music, Wine, Women
              </div>
              <div className="mt-2">$19.9</div>
              <div className="flex w-fit text-2xl font-mono border-solid border-black border  rounded-full mt-2 ">
                <button className="pl-3 pr-6">-</button>
                <div>1</div>
                <button className="pl-6 pr-3">+</button>
              </div>
              <IoTrashBinOutline className="mt-2 cursor-pointer text-xl" />
            </div>
          </div>
          <div className=" p-5 flex justify-between border-b">
            <img
              className="w-[40%]"
              src="https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books-2019/han024.jpg"
            />
            <div className="ml-1 font-Poppins">
              <div className="font-semibold truncate-2-lines">
                The Bitter-Sweet Cocktail- Movies, Music, Wine, Women
              </div>
              <div className="mt-2">$19.9</div>
              <div className="flex w-fit text-2xl font-mono border-solid border-black border  rounded-full mt-2 ">
                <button className="pl-3 pr-6">-</button>
                <div>1</div>
                <button className="pl-6 pr-3">+</button>
              </div>
              <IoTrashBinOutline className="mt-2 cursor-pointer text-xl" />
            </div>
          </div> */}
          {/* <div className="w-full h-[20%] bg-slate-200">s</div> */}
        </div>
        {/* End Books */}

        {/* checkout */}
        <div className="bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] w-full absolute bottom-0 right-0">
          <div className="px-5 py-8">
            <div className="flex">
              <div> SubTotal</div>
              <div>$19.9</div>
            </div>
            <div>taxes and Shipping calculated at checkout</div>
            <button
              // onClick={makePayment}
              className=" w-full mt-5 py-3 text-sm font-semibold tracking-[0.2rem] text-center rounded-full   text-black border border-solid bg-slate-100  hover:bg-teal-950 "
            >
              VIEW CART
            </button>
            <button
              // onClick={makePayment}
              className=" w-full mt-5 py-3 text-sm font-semibold tracking-[0.2rem] text-center rounded-full  text-white border border-solid bg-teal-900  hover:bg-teal-950 "
            >
              CHECK OUT
            </button>
          </div>
        </div>
        {/* end checkout */}
      </div>
    </div>
  );
};

export default CartSideBar;
