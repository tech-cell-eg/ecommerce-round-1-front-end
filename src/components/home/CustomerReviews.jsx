import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CustomerReviewCard from "./CustomerReviewCard";
import { fetchAllReviews } from "../../api/reviews/reviews";

// const reviews = [
//   {
//     id: 1,
//     name: "Leslie Alexander",
//     role: "Model",
//     review:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
//     rating: 5,
//     image: "",
//   },
//   {
//     id: 2,
//     name: "Jacob Jones",
//     role: "Co-Founder",
//     review:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
//     rating: 5,
//     image: "",
//   },
//   {
//     id: 3,
//     name: "Jenny Wilson",
//     role: "Fashion Designer",
//     review:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
//     rating: 5,
//     image: "",
//   },
//   {
//     id: 5,
//     name: "Jenny Wilson",
//     role: "Fashion Designer",
//     review:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
//     rating: 5,
//     image: "",
//   },
//   {
//     id: 4,
//     name: "Jenny Wilson",
//     role: "Fashion Designer",
//     review:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
//     rating: 5,
//     image: "",
//   },
//   {
//     id: 6,
//     name: "Jenny Wilson",
//     role: "Fashion Designer",
//     review:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
//     rating: 5,
//     image: "",
//   },
// ];

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage] = useState(4);
  const [reviews, setReviews] = useState();

useEffect(() => {
    const getReviews = async () => {
      const allReviews = await fetchAllReviews();
      setReviews(allReviews);
    };
    getReviews();

}, []);


  const goToPrevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0
        ? reviews.length - itemsPerPage
        : prev - itemsPerPage
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= reviews.length ? 0 : prev + itemsPerPage
    );
  };

  return (
    <div className="w-full mx-auto m-10 relative" style={{ width: "90%" }}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold text-gray-800 text-left">
          Our Customers say
        </h2>
        {/* Navigation Arrows */}
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
            transform: `translateX(-${(currentIndex / itemsPerPage) * 100}%)`,
          }}
        >
          {reviews?.length > 0 ? (
            reviews.map((review) => (
              <div
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-8"
                key={review.id}
              >
                <CustomerReviewCard
                  name={review.name}
                  role={review.role}
                  review={review.review}
                  rating={review.rating}
                  image={review.image}
                />
              </div>
            ))
          ) : (
            <div className=" rounded-lg text-center w-full">
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
