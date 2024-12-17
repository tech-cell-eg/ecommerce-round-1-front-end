import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import TypesList from "./TypesList";

function GenderCategory() {
  const [categoryIsOpen, setCategoryIsOpen] = useState(true);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [openSubLists, setOpenSubLists] = useState({}); // Tracks which sub-list is open

  const handleGenderChange = (gender) => {
    setSelectedGenders((prevGenders) => {
      const newGenders = prevGenders.includes(gender)
        ? prevGenders.filter((g) => g !== gender) // Deselect the gender
        : [...prevGenders, gender]; // Select the gender

      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.delete("gender");
      newGenders.forEach((selectedGender) => {
        newSearchParams.append("gender", selectedGender);
      });

      setSearchParams(newSearchParams);

      return newGenders;
    });
  };

  // Toggles the sub-list for a specific category
  const toggleSubList = (category) => {
    setOpenSubLists((prev) => ({
      ...prev,
      [category]: !prev[category], // Toggle the specific category
    }));
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold flex justify-between items-center">
        Product Categories
        <button
          className="text-gray-500 hover:text-black"
          onClick={() => setCategoryIsOpen((categoryIsOpen) => !categoryIsOpen)}
        >
          {!categoryIsOpen ? (
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
      {categoryIsOpen && (
        <ul className="mt-2 space-y-1">
          {["Men", "Women", "Kids"].map((category) => (
            <div key={category}>
              <li className="flex justify-between mb-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border-gray-700 border-2 rounded checked:bg-black checked:border-black cursor-pointer checked:outline-black"
                    checked={selectedGenders.includes(category)}
                    onChange={() => handleGenderChange(category)}
                  />
                  <span>{category}</span>
                </label>
                <span
                  className="cursor-pointer"
                  onClick={() => toggleSubList(category)} // Toggle specific category
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                  </svg>
                </span>
              </li>
              {/* Only show the sub-list for the clicked category */}
              {openSubLists[category] && <TypesList />}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GenderCategory;
