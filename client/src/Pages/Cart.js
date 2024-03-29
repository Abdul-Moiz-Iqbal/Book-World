import React, { useEffect, useState } from "react";

import { IoClose, IoTrashBin, IoTrashBinOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CartTotal from "../component/CartTotal";

const Cart = () => {
  const [allBooks, setAllBooks] = useState();
  //fetching items from cart
  useEffect(() => {
    fetch("http://localhost:8000/all-books")
      .then((res) => res.json())
      .then((books) => setAllBooks(books)).catch((err)=>{console.log(err)});
  }, []);

  //remove item from cart
  const deleteHandler = (id) => {
    fetch(`http://localhost:8000/cart/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        alert("Book deleted");
        setAllBooks(data);
      });
  };
  return (
    <div>
      <div className="w-full mb-3   ">
        <div className="text-center  text-3xl font-bold py-5 ">
          Items In Cart 2
        </div>
      </div>
      {/* table for book data */}
      <div className=" w-[100%] px-8 relative overflow-x-auto  sm:rounded-lg ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase border-b dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Book
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
              <th scope="col" className="px-6 py-3">
                Remove Book
              </th>
            </tr>
          </thead>
          <tbody>
            {allBooks?.map((book) => (
              <tr
                key={book._id}
                className=" odd:dark:bg-gray-900  even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img src={book.imageUrl} className="w-20" />
                  <div className="pl-2 text-xl font-semibold">{book.title}</div>
                </th>
                <td className="px-6 py-4">${book.price || null}</td>
                <td className="px-6 py-4">
                  <div className="flex w-fit text-2xl font-mono border-solid border-black border  rounded-full mt-5 ">
                    <button className="pl-3 pr-6">-</button>
                    <div>1</div>
                    <button className="pl-6 pr-3">+</button>
                  </div>
                </td>
                <td className=" px-6 py-4 ">
                  <div>{book.price}</div>
                  <div>
                    {/* <IoClose className=" bg-slate-200 rounded-full" /> */}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <IoTrashBinOutline
                    className="text-xl"
                    onClick={deleteHandler}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/*table end */}
      <CartTotal />
    </div>
  );
};

export default Cart;
