import { useFormik } from "formik";
import React, { useState } from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdStarOutline,
} from "react-icons/io";
import { RiStarSFill } from "react-icons/ri";
import * as yup from "yup";

export default function CustomerReview({ product }) {
  const [activeTab, setActiveTab] = useState("reviews");
  const [errorMessage, setErrorMessage] = useState(null);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      img: "/close-up-cute-child-portrait.jpg",
      name: "Gif Doe",
      rating: 5,
      shortReview: "Excellent product with good quality and value for money.",
      review:
        "Lorem Ipsum is Lorem Ipsum, Lorem Ipsum is Lore maret, Lorem Ipsum is Lorem Ipsum and Lorem Ips lorem Ipsum lorem.",
      date: "2024-12-18",
    },
    {
      id: 2,
      img: "/close-up-cute-child-portrait.jpg",
      name: "Tomy",
      rating: 4,
      shortReview: "Excellent product with good quality and value for money.",
      review:
        "Lorem Ipsum is Lorem Ipsum, Lorem Ipsum is Lore maret, Lorem Ipsum is Lorem Ipsum and Lorem Ips lorem Ipsum.",
      date: "2024-10-13",
    },
  ]);

  const [newReview, setNewReview] = useState({
    rating: 5,
    name: "",
    email: "",
    review: "",
  });

  const handleRatingChange = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("email is required")
      .email("write avalid email"),
    name: yup.string().required("name is required").min(3, "min 3 characters"),
    review: yup
      .string()
      .required("review is required")
      .min(7, "min 10 characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      review: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const addedReview = {
        id: reviews.length + 1,
        img: "/close-up-cute-child-portrait.jpg",
        name: values.name,
        email: values.email,
        rating: newReview.rating,
        shortReview: values.review.slice(0, 50) + "...",
        review: values.review,
        date: new Date().toISOString().split("T")[0],
      };
      setReviews([...reviews, addedReview]);
      setNewReview({ rating: 0, name: "", email: "", review: "" });
      formik.resetForm();
    },
  });

  return (
    <section className=" container-main py-4">
      <ol className="flex items-center max-[438px]:flex-wrap w-full gap-2 text-sm font-medium text-center text-gray-500 bg-white border-b border-gray-200 shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:space-x-4 rtl:space-x-reverse">
        <div
          onClick={() => setActiveTab("descriptions")}
          className={
            activeTab === "descriptions"
              ? "flex items-center font-bold text-black border-b-2 p-3 border-black cursor-pointer"
              : "flex items-center text-gray-600 dark:text-gray-400 p-3 cursor-pointer"
          }
        >
          Descriptions
        </div>
        <div
          onClick={() => setActiveTab("additional information")}
          className={
            activeTab === "additional information"
              ? "flex items-center font-bold text-black border-b-2 p-3 border-black cursor-pointer"
              : "flex items-center text-gray-600 dark:text-gray-400 p-3 cursor-pointer"
          }
        >
          Additional information
        </div>
        <div
          onClick={() => setActiveTab("reviews")}
          className={
            activeTab === "reviews"
              ? "flex items-center font-bold text-black border-b-2 p-3 border-black cursor-pointer"
              : "flex items-center text-gray-600 dark:text-gray-400 p-3 cursor-pointer"
          }
        >
          Reviews
        </div>
      </ol>

      {/* reviews */}
      {activeTab === "reviews" && (
        <div className="py-4">
          <h2 className="text-lg font-bold">Customer Reviews</h2>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div className="space-y-1 border-b py-3" key={review.id}>
                <div className="flex items-center space-x-2">
                  <img
                    src={review.img}
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="space-y-1">
                    <h2 className="font-bold">{review.name}</h2>
                    <div className="flex items-center space-x-1 text-gray-500">
                      {[...Array(review.rating)].map((_, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center text-yellow-400"
                        >
                          <RiStarSFill />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm font-semibold">{review.shortReview}</p>
                <p className="text-sm">{review.review}</p>
                <div>
                  <span>
                    <span className="text-gray-400">reviewed by </span>{" "}
                    {review.name}
                  </span>
                  <span className=" ">
                    {" "}
                    <span className="text-gray-400">Posted on </span>{" "}
                    {review.date}
                  </span>
                </div>
              </div>
            ))}
            <div className="space-y-4 mt-2">
              <h2 className="text-lg font-bold">Add your review</h2>
              {/* rating */}
              <div className="space-y-2">
                <h2>Your Rating</h2>
                <div className="flex max-[390px]:flex-wrap max-[390px]:gap-2 items-center">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="flex items-center space-x-1">
                      <div
                        className="flex bg-white shadow-lg p-1 text-gray-400 rounded cursor-pointer"
                        onClick={() => handleRatingChange(index + 1)}
                      >
                        {[...Array(index + 1)].map((_, starIndex) => (
                          <IoMdStarOutline
                            key={starIndex}
                            className={`text-lg cursor-pointer ${
                              index + 1 === newReview.rating
                                ? "text-yellow-400"
                                : "text-gray-400"
                            }`}
                            onClick={() => handleRatingChange(index + 1)}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* form */}
              <div>
                <form className="space-y-3" onSubmit={formik.handleSubmit}>
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="border p-2 rounded-lg"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <span className="text-red-500 text-sm font-semibold ">
                        {formik.errors.name}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="border p-2 rounded-lg"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <span className="text-red-500 text-sm font-semibold">
                        {formik.errors.email}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="review">Your Review</label>
                    <textarea
                      id="review"
                      placeholder="Enter your review"
                      className="border p-2 rounded-lg"
                      onChange={formik.handleChange}
                      value={formik.values.review}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.review && formik.errors.review && (
                      <span className="text-red-500 text-sm font-semibold">
                        {formik.errors.review}
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition-all duration-200"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === "descriptions" && (
        <div className="py-8 space-y-6">
          <p>{product.description}</p>
        </div>
      )}
      {activeTab === "additional information" && (
        <div className="py-8 space-y-6">
          <ul className="list-disc pl-5">
            <li className="font-normal">
              <p className="font-semibold inline-block mr-6">Color</p>{" "}
              {product.color}
            </li>
            <li className="font-normal">
              <p className="font-semibold inline-block mr-8">Size</p>{" "}
              {product.size}
            </li>
          </ul>
        </div>
      )}
      <div className="flex items-center gap-2 justify-end">
        <div className="cursor-pointer bg-white px-3 py-2 shadow-md">
          <IoIosArrowBack />
        </div>
        <div className="cursor-pointer bg-white px-3 py-2 shadow-md">
          <IoIosArrowForward />
        </div>
      </div>

      {/* add review */}
    </section>
  );
}
