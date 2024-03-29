import React, { useEffect, useState } from "react";

//importing compnents
import BookCard from "../component/bookCard/BookCard";
import CategorySlider from "../component/CategorySlider/CategorySlider";
import FilterMenu from "../component/FilterMenu/FilterMenu";

//Icons
import { BsFilterLeft } from "react-icons/bs";


const Shop = () => {
  // const []=useState();

  const bookCategories = [
    "Fiction",
    "Articles",
    "Horror",
    "Religion",
    "Science",
  ];

  //Books data states
  const [books, setBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  //Components hide/show boolean states
  const [showNoBooksMessage, setShowNoBooksMessage] = useState(false);
  const [filterMenuShow, setFilterMenuShow] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/all-books`);
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
  
        if (data == null) {
          setShowNoBooksMessage(true);
        } else {
          setBooks(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  const getFilteredData = (filter) => {
    setShowNoBooksMessage(false);
    // console.log("shop",filter)
    if (filter == "All") {
      return setBooks(allBooks);
    }
    if (filter == "") {
      setBooks([]);
      setShowNoBooksMessage(true);

      return console.log("empty");
    }
    setBooks(filter);
  };

  const filterMenuHandler = ()=>{
    setFilterMenuShow(false);
  }

  return (
    <>
      {/* Toggle Filter Menu */}
      {filterMenuShow ? <FilterMenu filterMenuToggle={filterMenuHandler}/> :""}
      {/* <FilterMenu filterMenuToggle={filterMenuHandler}/> */}
      <div className=" py-5 ">
        {/* Banner of Current category */}
        <div className="w-full mb-3  bg-teal-950 text-white ">
          <div className="text-center tracking-widest text-3xl font-semibold py-5 ">
            Fiction
          </div>
        </div>
        {/* SLider for Book bookCategories */}

        <div className="w-full py-2 flex border-t-2 border-b-2">
          <CategorySlider />
        </div>

        {/* Books  */}
        <div className="px-4 mt-10 lg:px-24    ">

          {/* filters section */}
          {/* Filter */}
          <div className="mb-5 flex justify-between ">
            <div className="flex mb-2 justify-center items-center cursor-pointer text-slate-600 hover:text-black" onClick={()=> {setFilterMenuShow(true);console.log(true)}}>
              <BsFilterLeft />
              <div className="font-nato-sans tracking-wide">Filter</div>
            </div>

            {/* High low price best selling etc drop down fillter */}
            <div>
              <select
                id="category"
                // value={selectedCategory}
                // onChange={handleCategoryChange}
                className="block  px-4 py-2 rounded-full  border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="">All</option>
                {bookCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* books grid   */}
          <div className="grid gap-2  col-span-3  lg:grid-cols-3  md:grid-cols-2  ">
            {showNoBooksMessage ? (
              <p className="w-[100%] h-[100%]">
                No Book Available of this category
              </p>
            ) : (
              books.map((book) => <BookCard key={book._id} book={book} />)
            )}
          </div>
          {/* <div className=" md:col-span-1 px-5">
            <Filter getFilteredData={getFilteredData} />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Shop;
