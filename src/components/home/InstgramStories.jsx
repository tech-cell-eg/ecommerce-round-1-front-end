import React, { useEffect, useState } from "react";
import { IoCardOutline } from "react-icons/io5";
import { PiHeadphonesLight } from "react-icons/pi";
import { CiDollar } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { fetchAllinstgramstories } from "../../api/instgramStory/getAllinstgramstories";

function InstgramStories() {
  const [instaStory, setInstaStory] = useState([]);
  useEffect(() => {
      const getinstastory = async () => {
        const allinstastory = await fetchAllinstgramstories();
        setInstaStory(allinstastory)
      };
      getinstastory()
    }, []);
  return (
    <section className="container-main bg-white my-3 py-20">
      <h1 className="capitalize text-center text-4xl font-medium">
        our instgram stories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
      {instaStory.map((story) => (
            <div className="flex flex-col gap-4 justify-center" key={story.id}>
              <div key={story.id} className="md:h-[360px]  relative" >
              <img src={story.image_link} alt="" className="w-full h-full object-cover"/>
              <div className="w-full h-full bg-black/0 hover:bg-black/5 opacity-0 hover:opacity-100 transition-all duration-300  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex justify-center items-center ">
            <Link to={story.insta_link} className=" text-lg text-center bg-white p-2 w-fit h-fit  rounded-full"><FaInstagram className="text-black" /></Link>
            </div>
            </div>
           
            </div>
          ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        <div className="col-span-1 px-6 flex flex-col gap-4">
          <div>
            <BsBoxSeam size={40} />
          </div>
          <h4 className="text-xl font-medium">Free Shipping</h4>
          <p>Free shipping for the order above $150</p>
        </div>
        <div className="col-span-1 px-6 flex flex-col gap-4">
          <div>
            <CiDollar size={40} />
          </div>
          <h4 className="text-xl font-medium">Money Guarantee</h4>
          <p>Within 30 days of exchange</p>
        </div>
        <div className="col-span-1 px-6 flex flex-col gap-4">
          <div>
            <PiHeadphonesLight size={40} />
          </div>
          <h4 className="text-xl font-medium">Online Support</h4>
          <p>24 hours a day, 7 days a week</p>
        </div>
        <div className="col-span-1 px-6 flex flex-col gap-4">
          <div>
            <IoCardOutline size={40} />
          </div>
          <h4 className="text-xl font-medium">Flexible Payment</h4>
          <p>Pay with multiple credit cards</p>
        </div>
      </div>
    </section>
  );
}

export default InstgramStories;
