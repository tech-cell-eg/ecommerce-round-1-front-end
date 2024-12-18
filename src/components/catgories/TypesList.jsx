import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function TypesList() {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleTypeChange = (type) => {
    setSelectedTypes((prevTypes) => {
      const newTypes = prevTypes.includes(type)
        ? prevTypes.filter((t) => t !== type) // Deselect the type
        : [...prevTypes, type]; // Select the type

      // Create a new URLSearchParams object to preserve existing params
      const newSearchParams = new URLSearchParams(searchParams);

      // Remove the previous gender parameter if it exists
      newSearchParams.delete("type");

      // Append all selected genders
      newTypes.forEach((selectedType) => {
        newSearchParams.append("type", selectedType);
      });

      // Update the URL with the new search params
      setSearchParams(newSearchParams);

      return newTypes;
    });
  };

  return (
    <div className="mb-6">
      <ul className="mt-2 space-y-1">
        {[
          "Bags",
          "Belts",
          "Wallets",
          "Watches",
          "Accessories",
          "Winter Wears",
        ].map((category) => (
          <li key={category} className="flex justify-between mb-2 ms-5">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 border-gray-700 border-2 rounded checked:bg-black checked:border-black cursor-pointer checked:outline-black"
                checked={selectedTypes.includes(category)}
                onChange={() => handleTypeChange(category)}
              />
              <span>{category}</span>
            </label>
            <span>(5)</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TypesList;
