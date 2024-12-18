import React, { useState } from "react";

const StarRating = () => {
  const [selectedStars, setSelectedStars] = useState(0); // State for clicked stars
  const [hoveredStars, setHoveredStars] = useState(0); // State for hovered stars

  const handleMouseEnter = (stars) => {
    setHoveredStars(stars); // Update stars on hover
  };

  const handleMouseLeave = () => {
    setHoveredStars(0); // Reset hover when mouse leaves
  };

  const handleClick = (stars) => {
    setSelectedStars(stars); // Update clicked stars
  };

  // Function to render stars
  const renderStars = (totalStars) => {
    return (
      <div className="border-r border-gray-300 px-4 flex justify-center items-center cursor-pointer">
        {[...Array(totalStars)].map((_, index) => {
          const starValue = index + 1;

          return (
            <svg
              key={index}
              className={`w-8 h-8 transition-colors duration-300 ${
                starValue <= (hoveredStars || selectedStars)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onMouseEnter={() => handleMouseEnter(starValue)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(starValue)}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.956c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.783.57-1.837-.197-1.538-1.118l1.286-3.956a1 1 0 00-.364-1.118L2.065 9.383c-.783-.57-.381-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.956z"></path>
            </svg>
          );
        })}
      </div>
    );
  };

  return (
    <>
    <h3 className="text-lg font-semibold mt-10">Add Your Review</h3>
    <p className="my-8">Your Rating</p>
    <div className="flex  space-x-4 mt-4">
      {/* Each group of stars in a row */}
      <div className="flex">{renderStars(1)}</div>
      <div className="flex">{renderStars(2)}</div>
      <div className="flex">{renderStars(3)}</div>
      <div className="flex">{renderStars(4)}</div>
      <div className="flex">{renderStars(5)}</div>
    </div>
    </>
  );
};

export default StarRating;
