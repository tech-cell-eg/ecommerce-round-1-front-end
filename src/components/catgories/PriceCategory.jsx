import { useState } from "react";

function PriceCategory() {
  const [priceIsOpen, setPriceIsOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(0); // Minimum price
  const [maxPrice, setMaxPrice] = useState(2000); // Maximum price

  const handleMinPriceChange = (e) => {
    const value = Number(e.target.value);
    if (value <= maxPrice) setMinPrice(value); // Ensure minPrice <= maxPrice
  };

  const handleMaxPriceChange = (e) => {
    const value = Number(e.target.value);
    if (value >= minPrice) setMaxPrice(value); // Ensure maxPrice >= minPrice
  };

  return (
    <div className="mb-6">
      {/* Title Section */}
      <h2 className="text-lg font-semibold flex justify-between items-center">
        Filter by Price
        <button
          className="text-gray-500 hover:text-black"
          onClick={() => setPriceIsOpen((prev) => !prev)}
        >
          {priceIsOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </h2>

      {/* Price Range Section */}
      {priceIsOpen && (
        <div className="mt-4">
          {/* Display Current Price Range */}
          <p className="text-sm mb-4">
            Price: <span className="font-medium">${minPrice}</span> -{" "}
            <span className="font-medium">${maxPrice}</span>
          </p>

          {/* Range Sliders */}
          <div className="relative">
            {/* Minimum Price */}
            <input
              type="range"
              min="0"
              max="2000"
              value={minPrice}
              onChange={handleMinPriceChange}
              className=" mb-0 w-full appearance-none h-[2px] bg-black [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full cursor-pointer"
            />
            {/* Maximum Price */}
            <input
              type="range"
              min="0"
              max="2000"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="mt-0 w-full appearance-none h-[2px] bg-black [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full cursor-pointer"
            />
          </div>

          {/* Range Limits */}
          <div className="flex justify-between text-sm mt-8 text-gray-700">
            <span>$0</span>
            <span>$2000</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default PriceCategory;
