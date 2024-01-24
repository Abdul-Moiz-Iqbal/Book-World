import React, { useEffect, useState } from "react";

import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((books) => setAllBooks(books));
  }, []);

  const deleteHandler = (id) => {
    fetch(`${window.location.origin}/book/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        alert("Book deleted");
        setAllBooks(data)        
      });
  };
  return (
    <div className="px-4 my-12 w-[81%]">
      <h1 className="mb-8 text-3xl font-bold">Manage Your Books</h1>
      {/* table for book data */}

      <div className=" w-[100%] relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Book Title
              </th>
              <th scope="col" className="px-6 py-3">
                Author
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Edit Book
              </th>
            </tr>
          </thead>
          <tbody>
            {allBooks?.map((book) => (
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooks;
