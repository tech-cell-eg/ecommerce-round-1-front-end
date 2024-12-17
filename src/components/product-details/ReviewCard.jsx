import React from "react";
import StarRating from "./StarRating";
function ReviewCard({ review }) {
  return (
    <div className="border-b pb-8">
      <div className="flex items-center gap-3">
        <div>
          <img src={review.img} alt="" className="w-12 h-12 rounded-full" />
        </div>
        <div className="flex justify-between flex-col gap-2">
          <div>
            <p className="text-gray-600">{review.name}</p>
          </div>
          <div>
            <StarRating rating={review.rating} />
          </div>
        </div>
      </div>
      <h4 className="text-lg font-semibold">{review.reviewTitle}</h4>
      <p className="text-gray-600 my-3">{review.review}</p>
      <p className="text-sm text-gray-400">
        Review by <span className="text-gray-700">{review.reviewdBy}</span>{" "}
        Posted on
        <span className="text-gray-700">{review.date}</span>
      </p>
    </div>
  );
}

export default ReviewCard;
