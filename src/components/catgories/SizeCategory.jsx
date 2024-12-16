import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function SizeCategory() {
  const [sizeIsOpen, setSizeIsOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSizeChange = (size) => {
    setSelectedSizes((prevSizes) => {
      const newSizes = prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size) // Deselect the size
        : [...prevSizes, size]; // Select the size

      // Create a new URLSearchParams object to preserve existing params
      const newSearchParams = new URLSearchParams(searchParams);

      // Remove the previous size parameter if it exists
      newSearchParams.delete("size");

      // Append all selected sizes
      newSizes.forEach((selectedSize) => {
        newSearchParams.append("size", selectedSize);
      });

      // Update the URL with the new search params
      setSearchParams(newSearchParams);

      return newSizes;
    });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold flex justify-between items-center">
        Filter by Size
        <button
          className="text-gray-500 hover:text-black"
          onClick={() => setSizeIsOpen((sizeIsOpen) => !sizeIsOpen)}
        >
          {sizeIsOpen ? (
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

      {sizeIsOpen && (
        <ul className="mt-2 space-y-1">
          {["S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
            <li key={size}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedSizes.includes(size)}
                  onChange={() => handleSizeChange(size)}
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span>{size}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SizeCategory;
