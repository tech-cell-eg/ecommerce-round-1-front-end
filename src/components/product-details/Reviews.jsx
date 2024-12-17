import React from "react";
import ReviewCard from "./ReviewCard";

function Reviews() {
  const reviews = {
    name: "mazen essam",
    rating: 5,
    reviewTitle: "this is a good product",
    review:
      "this is a good product this is a good product this is a good product this is a good product",
    date: "May 1, 2023",
    reviewdBy: "Krist",
    img: "https://cdn11.bigcommerce.com/s-r7ihm/images/stencil/1280x1280/products/2064/10521/JHC_135__27361.1614352559.jpg?c=2",
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Customer Reviews</h1>
      <ReviewCard review={reviews} />
    </div>
  );
}

export default Reviews;
