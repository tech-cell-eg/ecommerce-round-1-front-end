import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function OurStory() {
  const storysdetails = [
    { id: 1, title: "Story 1", paragraph: "Story 1 paragraph" },
    { id: 2, title: "Story 2", paragraph: "Story 2 paragraph" },
    { id: 3, title: "Story 3", paragraph: "Story 3 paragraph" },
    { id: 4, title: "Story 4", paragraph: "Story 4 paragraph" },
    { id: 5, title: "Story 5", paragraph: "Story 5 paragraph" },
    { id: 6, title: "Story 6", paragraph: "Story 6 paragraph" },
  ];

  return (
    <section className="container-main">
      {/* Title and Navigation */}
      <div className="flex justify-between w-full items-center mb-4 ">
        <h2 className="text-3xl font-semibold">Our Story</h2>
        <div className="flex items-center gap-2 ">
          {/* Custom Previous Button */}
          <div
            className="bg-white p-2 text-center rounded cursor-pointer border  border-gray-300"
            id="prev"
          >
            <IoIosArrowBack className="inline-block text-2xl" />
          </div>
          {/* Custom Next Button */}
          <div
            className="bg-white p-2 text-center rounded cursor-pointer border border-gray-300"
            id="next"
          >
            <IoIosArrowForward className="inline-block text-2xl" />
          </div>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
      
        modules={[Navigation]}
        navigation={{
          prevEl: "#prev",
          nextEl: "#next",
        }}
        loop={true}
        slidesPerView={1} // Default 2 slides per view (for small screens)
        spaceBetween={20}
        breakpoints={{
          // When screen width is >= 640px (sm)
          640: {
            slidesPerView: 2, // Show 2 items
          },
          // When screen width is >= 768px (md)
          768: {
            slidesPerView: 3, // Show 3 items
          },
          // When screen width is >= 1024px (lg) or larger
          1024: {
            slidesPerView: 4, // Show 4 items
          },
        }}
        className="mySwiper overflow-hidden"
      >
        {storysdetails.map((item) => (
          <SwiperSlide key={item.id} className="">
            <div className="flex flex-col justify-center  p-4 border border-gray-300 rounded-xl">
              <div className="rounded-xl overflow-hidden">
                <img src="/Group-1.png" alt="Group 1" />
              </div>
              <div className="py-2">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.paragraph}</p>
                <div className="flex justify-start">
                  <button className="font-bold rounded-lg">View details</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
