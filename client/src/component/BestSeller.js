import React, { useEffect, useState } from "react";
import BookSlider from "./BookSliderCards/BookSlider";

const BestSeller = (props) => {
  const [bestSellerBooks, setBestSellerBook] = useState([]);
  useEffect(() => {
    fetch(`https://book-world-dusky.vercel.app/all-books`)
      .then((res) => res.json())
      .then((best) => {
        setBestSellerBook(best.slice(0, 6));
        console.log(bestSellerBooks);
      })
      .catch((error) => {
        // Handle fetch errors here
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className=" overflow-x-hidden bg-white">
      <BookSlider title={props.sliderName} books={bestSellerBooks} />
    </div>
  );
};

export default BestSeller;
