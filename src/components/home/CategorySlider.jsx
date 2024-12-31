import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { categories } from "../../products.json";

const CategorySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage] = useState(4);

  const goToPrevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0
        ? categories.length - itemsPerPage
        : prev - itemsPerPage
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= categories.length ? 0 : prev + itemsPerPage
    );
  };

  return (
    <div className="w-full mx-auto m-10 relative" style={{ width: "90%" }}>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-800 text-left">
          Shop by Categories
        </h2>
        {/* Navigation Arrows */}
        <div className="flex space-x-2">
          <button
            onClick={goToPrevSlide}
            className="bg-white hover:bg-black hover:text-white text-gray-800 p-3 rounded-md transition border"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={goToNextSlide}
            className="bg-white hover:bg-black hover:text-white text-gray-800 p-3 rounded-md transition border"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-4"
          style={{
            transform: `translateX(-${(currentIndex / itemsPerPage) * 100}%)`,
          }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="min-w-[calc(100%/1-1rem)] md:min-w-[calc(100%/2-1rem)] lg:min-w-[calc(100%/4-1rem)] h-[300px] bg-cover bg-center flex items-end justify-center p-4 rounded-lg shadow-md"
              style={{
                backgroundImage: `url(${category.image})`,
              }}
            >
              <Link
                to="/shop"
                className="w-[95%] bg-white px-4 py-2 rounded-lg shadow-md flex justify-center items-center"
              >
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {category.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
