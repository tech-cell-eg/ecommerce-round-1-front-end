"use client";

import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { fetchAllTestimonials } from "../api/testimonials/testimonials";

function CustomerTestimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const getTestimonials = async () => {
      const response = await fetchAllTestimonials();
      const allTestimonials = await response.data;
      console.log(allTestimonials);
      setTestimonials(allTestimonials);
    };

    getTestimonials();
  }, []);

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
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Full-width Image */}
            {testimonial.image && (
              <img
                className="w-full h-52 object-cover"
                src={testimonial.image}  alt={testimonial.user.first_name}/>
            )}
            {/* Card Content */}
            <div className="p-2">
              <h5 className="text-lg font-bold text-gray-900">
                {testimonial.user.first_name} {testimonial.user.last_name}
              </h5>
              <p className="text-sm text-gray-700 italic">
                "{testimonial.text}"
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Video Showcase */}
      <div className="video-container mb-16">
        <h3 className="text-center text-2xl font-semibold text-gray-800 mb-8">
          Watch Their Stories
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials
            .filter((testimonial) => testimonial.video)
            .map((testimonial) => (
              <div key={testimonial.id} className="flex flex-col items-center">
                <ReactPlayer
                  url={testimonial.video}
                  className="react-player mb-4"
                  controls={true}
                  width="100%"
                  height="200px"
                />
                <h5 className="text-lg font-bold text-gray-900">
                  {testimonial.user.first_name} {testimonial.user.last_name}
                </h5>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerTestimonials;