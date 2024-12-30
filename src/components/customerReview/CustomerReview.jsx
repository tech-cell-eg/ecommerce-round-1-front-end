import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdStarOutline,
} from "react-icons/io";
import { RiStarSFill } from "react-icons/ri";
import * as yup from "yup";
import addReview from "../../api/review/addReview";
import toast from "react-hot-toast";
import getspicialreview from "../../api/review/spacialReview";
import { useSelector } from "react-redux";

export default function CustomerReview({ product }) {
  const [activeTab, setActiveTab] = useState("reviews");
  const [errorMessage, setErrorMessage] = useState(null);
  const [reviews, setReviews] = useState([])
  const user = useSelector(state => state.user);
  const userId = user.id 


  useEffect(()=>{
    const fetchSpicialReview = async () => {
      try {
        const res = await getspicialreview(product.id);
        setReviews(res);
        console.log(res);
        
      } catch (error) {
        console.error("Failed to fetch spicial review:", error);
      }
    };
    fetchSpicialReview();
  },[])

    
 const handelAddReview = async(values)=>{
  try{
    const response = await addReview(values)
  toast.success("Review added successfully")
  }catch(err){
    console.log(err);
    
  }
 }

  const validationSchema = yup.object({
    name: yup.string().required("Name is required").min(3, "Min 3 characters"),
    email: yup.string().email("Invalid email").required("Email is required"),
    review: yup.string().required("Review is required").min(10, "Min 10 characters"),
    stars: yup.number().required("Rating is required").min(1, "At least 1 star"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      review: "",
      stars: 0, 
    },
    validationSchema,
    onSubmit: (values) => {
      const reviewData = {
        msg: values.review,
        stars: values.stars,
        product_id: product.id,
        user_id: userId,
        user_role: 1,
      };
      handelAddReview(reviewData);
      console.log(reviewData);
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
            {reviews.length > 0 ? reviews.map((review) => (
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
            )) : <div className="text-lg font-semibold text-center">No reviews yet</div>}
            <div className="space-y-4 mt-2">
              <h2 className=" font-bold">Add your review</h2>
              {/* rating */}
             
              {/* form */}
              <div>
      <form className="space-y-3" onSubmit={formik.handleSubmit}>

      <div className="space-y-2">
  <h2>Your Rating</h2>
  <div className="flex max-[390px]:flex-wrap max-[390px]:gap-2 items-center">
    {[1, 2, 3, 4, 5].map((star) => (
      <RiStarSFill
        key={star}
        className={`text-lg cursor-pointer ${
          formik.values.stars >= star ? "text-yellow-400" : "text-gray-400"
        }`}
        onClick={() => formik.setFieldValue("stars", star)}
      />
    ))}
  </div>
  {formik.touched.stars && formik.errors.stars && (
    <span className="text-red-500 text-sm font-semibold">
      {formik.errors.stars}
    </span>
  )}
  {formik.touched.rating && !formik.errors.rating && (
    <span className="text-green-500 text-sm font-semibold">
      {formik.errors.rating}
    </span>
  )}
</div>
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
            <span className="text-red-500 text-sm font-semibold">
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
    </section>
  );
}
