import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import getAllNotstories from "../../api/ourstories/getAllourstories";
import { HiOutlineXMark } from "react-icons/hi2";
import getspicialstory from "../../api/ourstories/spacialStory";
import { Link } from "react-router-dom";


export default function OurStory() {
  const [storyDetails, setStoryDetails] = useState(null);
  const [storysdetails, setStorysdetails] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const fetchStorys = async () => {
      try {
        const response = await getAllNotstories();
        setStorysdetails(response); 
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchStorys();
  }, []); 

  // Define a default story

  const handelSpacialStory = async (id) => {
    try {
      const response = await getspicialstory(id);
      setStoryDetails(response); 
      setShowspaicialstory(true); 
    } catch (err) {
      console.error("Error fetching story:", err);
    }
  };

  return (
    <section className="container-main">
      {/* Title and Navigation */}
      <div className="flex justify-between w-full items-center mb-4">
        <h2 className="text-3xl font-semibold">Our Story</h2>
        <div className="flex items-center gap-2">
          {/* Custom Previous Button */}
          <div className="bg-white p-2 text-center rounded cursor-pointer border border-gray-300" id="prev">
            <IoIosArrowBack className="inline-block text-2xl" />
          </div>
          {/* Custom Next Button */}
          <div className="bg-white p-2 text-center rounded cursor-pointer border border-gray-300" id="next">
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
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="mySwiper overflow-hidden"
      >
      {storysdetails.length > 0 ? (
  storysdetails.map((item) => (
    <SwiperSlide key={item.id}>
      <div className="flex flex-col justify-center p-4 border border-gray-300 rounded-xl">
        <div className="rounded-xl overflow-hidden">
          <img src={item.image} alt={item.title} className="line-clamp-1" />
        </div>
        <div className="py-2">
          <h3 className="text-xl font-semibold mb-2 line-clamp-1">{item.title}</h3>
          <p className="text-gray-600  line-clamp-2">{item.description}</p>
          <div className="flex justify-start mt-2">
            <Link to={`spacialStory/${item.id}`} className="font-bold rounded-lg" >
              View details
            </Link>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))
) : (
  <p className="text-center text-gray-500">No stories available at the moment. Please check back later.</p> 
)}
      </Swiper>

     
    </section>
  );
}
