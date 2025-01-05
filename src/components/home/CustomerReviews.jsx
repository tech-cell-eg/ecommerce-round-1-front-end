import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CustomerReviewCard from "./CustomerReviewCard";
import { fetchAllReviews } from "../../api/reviews/reviews";

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState([]);
  const itemsPerPage = 3;

  useEffect(() => {
    const getReviews = async () => {
      try {
        const allReviews = await fetchAllReviews();
        setReviews(allReviews);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };
    getReviews();
  }, []);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return Math.floor(reviews.length / itemsPerPage) * itemsPerPage;
      }
      return prevIndex - itemsPerPage;
    });
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + itemsPerPage >= reviews.length) {
        return 0;
      }
      return prevIndex + itemsPerPage;
    });
  };

  return (
    <div
      className="w-full mx-auto m-10 relative p-10"
      style={{ width: "100%" }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold text-gray-800 text-left ml-10">
          Our Customers Say
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={goToPrevSlide}
            className="bg-white hover:bg-black hover:text-white text-gray-800 p-3 rounded-md transition border"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={goToNextSlide}
            className="bg-white hover:bg-black hover:text-white text-gray-800 p-3 rounded-md transition border"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{
            transform: `translateX(-${(currentIndex / reviews.length) * 100}%)`,
          }}
        >
          {reviews?.length > 0 ? (
            reviews.map((review, index) => (
              <div
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-8"
                key={review.id || index}
              >
                <CustomerReviewCard
                  name={review.name}
                  review={review.msg}
                  rating={review.stars}
                  image={review.image}
                />
              </div>
            ))
          ) : (
            <div className="rounded-lg text-center w-full">
              <p className="text-gray-600 text-l">
                No reviews available at the moment. Please check back later!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
