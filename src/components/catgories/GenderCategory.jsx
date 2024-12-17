import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function GenderCategory() {
  const [categoryIsOpen, setCategoryIsOpen] = useState(false);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // const handleGenderChange = (gender) => {
  //   setSelectedGenders((prevGenders) => {
  //     const newGenders = prevGenders.includes(gender)
  //       ? prevGenders.filter((g) => g !== gender) // Deselect the gender
  //       : [...prevGenders, gender]; // Select the gender

  //     // Update the URL with the new set of genders
  //     const newSearchParams = new URLSearchParams();

  //     // Append each selected gender to the URL
  //     newGenders.forEach((gender) => newSearchParams.append("gender", gender));

  //     // Set the updated query string
  //     setSearchParams({
  //       ...Object.fromEntries(searchParams.entries()), // Keep existing search params
  //       gender: newGenders, // Update the gender filter
  //     });

  //     return newGenders;
  //   });
  // };

  const handleGenderChange = (gender) => {
    setSelectedGenders((prevGenders) => {
      const newGenders = prevGenders.includes(gender)
        ? prevGenders.filter((g) => g !== gender) // Deselect the gender
        : [...prevGenders, gender]; // Select the gender

      // Create a new URLSearchParams object to preserve existing params
      const newSearchParams = new URLSearchParams(searchParams);

      // Remove the previous gender parameter if it exists
      newSearchParams.delete("gender");

      // Append all selected genders
      newGenders.forEach((selectedGender) => {
        newSearchParams.append("gender", selectedGender);
      });

      // Update the URL with the new search params
      setSearchParams(newSearchParams);

      return newGenders;
    });
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold flex justify-between items-center">
        Filter by Gender
        <button
          className="text-gray-500 hover:text-black"
          onClick={() => setCategoryIsOpen((categoryIsOpen) => !categoryIsOpen)}
        >
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
      {categoryIsOpen && (
        <ul className="mt-2 space-y-1">
          {["Men", "Women", "Kids"].map((category) => (
            <li key={category}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded"
                  checked={selectedGenders.includes(category)}
                  onChange={() => handleGenderChange(category)}
                />
                <span>{category}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GenderCategory;
