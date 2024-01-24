import React, { useEffect, useState } from "react";
import BookSlider from "./BookSliderCards/BookSlider";

const BestSeller = (props) => {
  const [bestSellerBooks, setBestSellerBook] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://book-world-dusky.vercel.app/all-books');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setBestSellerBook((prevBest) => [...prevBest, ...data.slice(0, 6)]);
        console.log(bestSellerBooks);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [])

  return (
    <div className=" overflow-x-hidden bg-white">
      <BookSlider title={props.sliderName} books={bestSellerBooks} />
    </div>
  );
};

export default BestSeller;
