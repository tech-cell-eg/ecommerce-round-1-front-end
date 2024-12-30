import React, { useState } from "react";
import Reviews from "./Reviews";
import AddingReview from "./AddingReview";
import CustomerReview from "../customerReview/CustomerReview";
const DetailsTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");
  // console.log(product);
  const tabs = [
    { name: "description", label: "Description" },
    { name: "additionalInfo", label: "Additional Information" },
    { name: "reviews", label: "Reviews" },
  ];

  return (
    <div className="w-full  mx-auto">
      
      <div className="ps-6 py-10 text-gray-700">
        <CustomerReview product={product}/>
      </div>
    </div>
  );
};

export default DetailsTabs;
