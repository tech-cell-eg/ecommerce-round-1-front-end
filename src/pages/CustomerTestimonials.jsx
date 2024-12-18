"use client";

import { Carousel, Card } from "flowbite-react";
import ReactPlayer from "react-player";

function CustomerTestimonials() {
  return (
    <div className="container-main mt-16 px-4 sm:px-8 mb-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Don't just take our words. Over 1000 people trust us.
        </h2>
      </div>

      {/* Carousels Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center mb-12">
        {/* First Carousel */}
        <div className="w-4/5 mx-auto sm:w-3/4 h-56 sm:h-64 md:h-72">
          <Carousel pauseOnHover={true}>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="Customer Testimonial 1"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="Customer Testimonial 2"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="Customer Testimonial 3"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="Customer Testimonial 4"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="Customer Testimonial 5"
            />
          </Carousel>
        </div>

        {/* Second Carousel */}
        <div className="w-4/5 mx-auto sm:w-3/4 h-56 sm:h-64 md:h-72">
          <Carousel indicators={false} pauseOnHover={true}>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="Customer Testimonial 1"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="Customer Testimonial 2"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="Customer Testimonial 3"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="Customer Testimonial 4"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="Customer Testimonial 5"
            />
          </Carousel>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100 p-6 rounded-lg mb-12">
        {[...Array(6)].map((_, index) => (
          <Card
            key={index}
            className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg"
          >
            {/* Reviewer Photo */}
            <img
              className="w-16 h-16 rounded-full object-cover"
              src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`}
              alt={`Reviewer ${index + 1}`}
            />
            {/* Reviewer Info */}
            <div>
              <h5 className="text-lg font-bold text-gray-900">
                Reviewer {index + 1}
              </h5>
              <p className="text-sm text-gray-600">
                This is a wonderful testimonial from Reviewer {index + 1}.
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Video Section */}
      <div className="video-container mb-12">
        <h3 className="text-center text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
          Watch Our Story
        </h3>
        <div className="flex justify-center">
          <ReactPlayer
            url="https://www.youtube.com/shorts/Ju_VsOfTxUI" // Replace with your video URL
            className="react-player"
            controls={true}
            width="80%" // Reduced width to 80% for better user experience
            height="600px" // Increased height for a larger video view
          />
        </div>
      </div>
    </div>
  );
}

export default CustomerTestimonials;
