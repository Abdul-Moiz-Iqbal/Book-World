import React, { useEffect, useState } from "react";
import BookSlider from "./BookSliderCards/BookSlider";

const BestSeller = (props) => {
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
        // setBestSellerBook((prevBest) => [...prevBest, ...data]);
        setBestSellerBook([...data.slice(0, 4)]);
        console.log(bestSellerBooks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" overflow-x-hidden bg-white">
      <BookSlider title={props.sliderName} books={bestSellerBooks} />
    </div>
  );
};

export default BestSeller;
