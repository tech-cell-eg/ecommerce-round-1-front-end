import { useState } from "react";

const Sidebar = () => {
  const [categoryIsOpen, setCategoryIsOpen] = useState(false);
  const [priceIsOpen, setPriceIsOpen] = useState(false);
  const [colorIsOpen, setColorIsOpen] = useState(false);
  const [sizeIsOpen, setSizeIsOpen] = useState(false);
  return (
    <div className="w-1/4 bg-white p-4 border-r">
      {/* Product Categories */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold  flex justify-between items-center">
          Product Categories
          <button
            className="text-gray-500 hover:text-black"
            onClick={() =>
              setCategoryIsOpen((categoryIsOpen) => !categoryIsOpen)
            }
          >
            {/* Icon for collapse (for future interactivity) */}
            {categoryIsOpen ? (
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
        {categoryIsOpen ? (
          <ul className="mt-2 space-y-1">
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span>Men</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span>Women</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span>Kids</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span>Bags</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span>Belts</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span>Wallets</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span>Watches</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span>Accessories</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span>Winter Wears</span>
              </label>
            </li>
            {/* Add more categories as needed */}
          </ul>
        ) : null}
      </div>

      {/* Filter by Price */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold flex justify-between items-center">
          Filter by Price
          <button
            className="text-gray-500 hover:text-black"
            onClick={() => setPriceIsOpen((priceIsOpen) => !priceIsOpen)}
          >
            {/* Icon for collapse (for future interactivity) */}
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
        {priceIsOpen ? (
          <div className="mt-4">
            <input
              type="range"
              min="0"
              max="2000"
              defaultValue="1000"
              className="w-full"
            />
            <div className="flex justify-between text-sm mt-2">
              <span>$0</span>
              <span>$2000</span>
            </div>
          </div>
        ) : null}
      </div>

      {/* Filter by Color */}
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
            <li className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-red-500 rounded-full"></span>
              <span>Red</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
              <span>Blue</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
              <span>Orange</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-black rounded-full"></span>
              <span>Black</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-green-500 rounded-full"></span>
              <span>Green</span>
            </li>

            {/* Add more colors as needed */}
          </ul>
        ) : null}
      </div>

      {/* Filter by Size */}
      <div>
        <h2 className="text-lg font-semibold flex justify-between items-center">
          Filter by Size
          <button
            className="text-gray-500 hover:text-black"
            onClick={() => setSizeIsOpen((sizeIsOpen) => !sizeIsOpen)}
          >
            {/* Icon for collapse (for future interactivity) */}
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
        {sizeIsOpen ? (
          <ul className="mt-2 space-y-1">
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span>S</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span>M</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span>L</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span>XL</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span>XXL</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <span>XXXL</span>
              </label>
            </li>
            {/* Add more sizes as needed */}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;
