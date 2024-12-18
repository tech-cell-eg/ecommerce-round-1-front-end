import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function ColorCategory() {
  const [colorIsOpen, setColorIsOpen] = useState(true);
  const [selectedColors, setSelectedColors] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleColorChange = (color) => {
    setSelectedColors((prevColors) => {
      const newColors = prevColors.includes(color)
        ? prevColors.filter((c) => c !== color) // Deselect the color
        : [...prevColors, color]; // Select the color

      // Create a new URLSearchParams object to preserve existing params
      const newSearchParams = new URLSearchParams(searchParams);

      // Remove the previous color parameter if it exists
      newSearchParams.delete("color");

      // Append all selected colors
      newColors.forEach((selectedColor) => {
        newSearchParams.append("color", selectedColor);
      });

      // Update the URL with the new search params
      setSearchParams(newSearchParams);

      return newColors;
    });
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold flex justify-between items-center">
        Filter by Color
        <button
          className="text-gray-500 hover:text-black"
          onClick={() => setColorIsOpen((colorIsOpen) => !colorIsOpen)}
        >
          {!colorIsOpen ? (
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
      {colorIsOpen && (
        <ul className="mt-2 space-y-1">
          {["red", "blue", "orange", "black", "green"].map((color) => (
            <li key={color} className="flex justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-700 border-2 rounded checked:bg-black checked:border-black cursor-pointer checked:outline-black"
                  checked={selectedColors.includes(color)}
                  onChange={() => handleColorChange(color)}
                />
                <span
                  className={`w-4 h-4 rounded-md ${
                    color === "red"
                      ? "bg-red-500"
                      : color === "blue"
                      ? "bg-blue-500"
                      : color === "orange"
                      ? "bg-orange-500"
                      : color === "black"
                      ? "bg-black"
                      : "bg-green-500"
                  }`}
                ></span>
                <span>{color.charAt(0).toUpperCase() + color.slice(1)}</span>
              </label>
              <span>(5)</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ColorCategory;
