"use client";

import { Card, Rating } from "flowbite-react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { fetchAllTestimonials } from "../api/testimonials/testimonials";
import { fetchAllReviews } from "../api/reviews/reviews";
import { fetchAllinstgramstories } from "../api/instgramStory/getAllinstgramstories";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

function CustomerTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [instaStory, setInstaStory] = useState([]); 

 
useEffect(() => {
    const getReviews = async () => {
      const allReviews = await fetchAllReviews();
      setReviews(allReviews);
    };
    getReviews();
  }, []);


  useEffect(() => {
    const getinstastory = async () => {
      const allinstastory = await fetchAllinstgramstories();
      setInstaStory(allinstastory)
    };
    getinstastory()
  }, []);

  const goToPrevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0
        ? reviews.length - itemsPerPage
        : prev - itemsPerPage
    );
  };
  

  return (
    <div className="container-main mt-16 px-4 sm:px-8 mb-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800">
          Hear From Our Happy Customers
        </h2>
        <p className="text-gray-600 mt-4">
          See what our customers have to say about their experiences.
        </p>
      </div>

      {/* Testimonial Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {reviews.map((review) => (
          <Card
            key={review.id}
            className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Full-width Image */}
            <div className="flex items-center gap-4 mb-4">
           <div className="w-20 h-20 rounded-full overflow-hidden">
           <img   src={review.image || "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png"} alt={review.name} />
           </div>
            {/* Card Content */}
           <div>
           <h2 className="text-lg font-semibold">{review.name}</h2>
           
           </div>
            </div>
            
            <div className="flex  justify-start mb-4">
                    <Rating size="lg">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Rating.Star key={i} filled={i < review.stars} />
                      ))}
                    </Rating>
                  </div>
            <p className="">{review.msg}</p>
          </Card>
        ))}
      </div>

      {/* Video Showcase */}
      <div className="video-container mb-16">
        <h3 className="text-center text-2xl font-semibold text-gray-800 mb-8">
          Watch Their Stories
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instaStory.map((story) => (
            <div className="flex flex-col gap-4 justify-center" key={story.id}>
              <div key={story.id} className="h-[330px] relative" >
              <img src={story.image_link} alt="" className="w-full h-full object-cover"/>
              <div className="w-full h-full bg-black/0 hover:bg-black/5 opacity-0 hover:opacity-100 transition-all duration-300  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex justify-center items-center ">
            <Link to={story.insta_link} className=" text-lg text-center bg-white p-2 w-fit h-fit  rounded-full"><FaInstagram className="text-black" /></Link>
            </div>
            </div>
           
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerTestimonials;