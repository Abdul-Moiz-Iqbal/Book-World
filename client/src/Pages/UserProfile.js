import EditAccDetail from "../component/EditAccDetail.js";
import NewLetter from "../component/NewLetter.js";
import React, { useState } from "react";
import SelectCountry from "../component/SelectCountry.js";

const UserProfile = () => {
  const [showEditComp, setShowEditComp] = useState(false);

  const onCloseEditHandler = () => {
    setShowEditComp(false);
  };
  return (
    <div className="font-Poppins bg-slate-100 py-5 ">
      <div className="w-full mb-3  bg-teal-950 text-white ">
        <div className="text-center tracking-widest text-3xl font-semibold py-5 ">
          My Acount
        </div>
      </div>
      <div className="w-full px-5  md:flex  justify-center my-32 ">
        {/* Menu */}
        <div className=" md:w-[20%]  text-base font-semibold flex flex-col">
          <h1 className="text-xl">Manage Account</h1>
          <h1 className="mt-3 text-blue-500">My Profile</h1>
          {/* <h1>Address List</h1> */}
        </div>

        {/* Account Info */}

        <div className="md:w-[50%]">
          <div className=" flex flex-col md:flex-row   ">
            {showEditComp ? (
              <EditAccDetail onCloseEditHandler={onCloseEditHandler} />
            ) : (
              <div className="flex flex-col md:flex-row">
                {/*Account Info Inner Inner Left Part */}
                <div className="w-[100%] rounded md:shadow-md  bg-white p-5 ">
                  <div className="text-lg ">
                    Account Detail
                    <span
                      onClick={function () {
                        setShowEditComp(true);
                      }}
                      className="ml-2 text-base font-light text-blue-400 cursor-pointer"
                    >
                      | EDIT
                    </span>{" "}
                  </div>
                  <div className="mt-2 text-sm text-slate-600">Moiz Iqbal</div>
                  <div className="text-sm text-slate-600">
                    bookWorld@gmail.com
                  </div>
                </div>
                {/* Address Inner Right Part  */}
                <div className="w-[100%] mt-5 rounded md:mt-0 md:shadow-md  md:ml-2 p-5 bg-white">
                  <div className="text-lg ">
                    Address Book
                    <span
                      onClick={function () {
                        setShowEditComp(true);
                      }}
                      className="ml-2 text-base font-light text-blue-400 cursor-pointer"
                    >
                      | EDIT
                    </span>{" "}
                  </div>
                  <div className="text-xs uppercase">
                    Default Delivery Address
                  </div>

                  <div className="font-semibold">Abdul Moiz Iqbal</div>

                  <div className="text-sm">z# street. 3</div>
                  <div className="text-sm">Punjab Rawalpindi Raja Bazar</div>
                  <div className="text-sm">+92 34223222</div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-5 rounded-lg">
            <NewLetter />
          </div>

          {/* Order History component */}
          <div className="mt-5">
            <h1>Order History</h1>
            <div className=" w-[100%] relative overflow-x-auto shadow-md sm:rounded-lg ">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Order
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Placed On
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Book Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    {/* <th scope="col" className="px-6 py-3">
                      Edit Book
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {/* {allBooks?.map((book) => (
              <tr
                key={book._id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {book.title}
                </th>
                <td className="px-6 py-4">{book.author}</td>
                <td className="px-6 py-4">{book.category}</td>
                <td className="px-6 py-4">{book.price}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/admin/dashboard/edit-book/${book._id}`}
                    className="mr-4 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteHandler(book._id)}
                    className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))} */}
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      #123
                    </th>
                    <td className="px-6 py-4">2/3/2024</td>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4">$9.99</td>
                    {/* <td className="px-6 py-4">
                      <Link
                        to={`/admin/dashboard/edit-book/`}
                        className="mr-4 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                      <button className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600">
                        Delete
                      </button>
                    </td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
