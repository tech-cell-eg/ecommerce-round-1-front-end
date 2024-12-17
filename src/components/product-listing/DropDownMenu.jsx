import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Latest");

  const options = ["Latest", "Price", "Popularity", "Ratings"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative inline text-left">
      {/* Dropdown Trigger Button */}
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between items-center  px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        {selectedOption}{" "}
        <MdKeyboardArrowDown className="inline text-2xl ml-2" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <ul className="py-1" role="menu" aria-orientation="vertical">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => selectOption(option)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
