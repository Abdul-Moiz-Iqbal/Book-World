import React from 'react';

const TestimonialCard = ({ image, name, designation, review, rating }) => {
  // Assuming rating is out of 5 stars, generating filled and empty stars
  const filledStars = Array.from({ length: rating }, (_, index) => (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-yellow-500 fill-current"
      viewBox="0 0 24 24"
    >
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  ));

  const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
    <svg
      key={rating + index}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-300 fill-current"
      viewBox="0 0 24 24"
    >
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  ));

  return (
    <div className=" max-w-xs rounded-lg overflow-hidden shadow-md bg-white text-gray-800 p-4">
      <div className="flex items-center mb-4">
        {/* Adjust the image size by changing the 'w-20' and 'h-20' classes */}
        <div className="w-20 h-20 rounded-full mr-4">
            <img src={image} alt={name} className='rounded-full' />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{designation}</p>
        </div>
      </div>
      <p className="text-sm">{review}</p>
      <div className='flex justify-between items-center'>
      <div className="flex mt-2">
        {filledStars}
        {emptyStars}
      </div>
      <div className='mt-2 text-sm'>17/12/2023</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
