import { useState } from "react";

function ColorCategory() {
  const [colorIsOpen, setColorIsOpen] = useState(false);
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold flex justify-between items-center">
        Filter by Color
        <button
          className="text-gray-500 hover:text-black"
          onClick={() => setColorIsOpen((colorIsOpen) => !colorIsOpen)}
        >
          {/* Icon for collapse (for future interactivity) */}
          {colorIsOpen ? (
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
      {colorIsOpen ? (
        <ul className="mt-2 space-y-1">
          <li>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded"
              />
              <span className="w-4 h-4 bg-red-500 rounded-full"></span>
              <span>Red</span>
            </label>
          </li>

          <li>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded"
              />
              <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
              <span>Blue</span>
            </label>
          </li>

          <li>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded"
              />
              <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
              <span>Orange</span>
            </label>
          </li>

          <li>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded"
              />
              <span className="w-4 h-4 bg-black rounded-full"></span>
              <span>Black</span>
            </label>
          </li>

          <li>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded"
              />
              <span className="w-4 h-4 bg-green-500 rounded-full"></span>
              <span>Green</span>
            </label>
          </li>

          {/* Add more colors as needed */}
        </ul>
      ) : null}
    </div>
  );
}

export default ColorCategory;
