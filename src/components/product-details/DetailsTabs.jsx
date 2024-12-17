import React, { useState } from "react";
import Reviews from "./Reviews";
const DetailsTabs = (description) => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { name: "description", label: "Description" },
    { name: "additionalInfo", label: "Additional Information" },
    { name: "reviews", label: "Reviews" },
  ];

  return (
    <div className="w-full  mx-auto">
      {/* Tab Buttons */}
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`  py-2 px-4 text-sm capitalize ${
              activeTab === tab.name
                ? "font-bold border-b-2 border-black text-black "
                : "text-gray-500 font-medium"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="ps-6 py-10 text-gray-700">
        {activeTab === "description" && (
          <div>
            <p>{description.description}</p>
          </div>
        )}
        {activeTab === "additionalInfo" && (
          <div>
            <ul className="list-disc pl-5">
              <li className="font-normal">
                <p className="font-semibold inline-block mr-6">Color</p>{" "}
                Red,Green,Blue
              </li>
              <li className="font-normal">
                <p className="font-semibold inline-block mr-8">Size</p>{" "}
                S,M,L,XL,2XL
              </li>
            </ul>
          </div>
        )}
        {activeTab === "reviews" && (
          <div>
            <Reviews />
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsTabs;
