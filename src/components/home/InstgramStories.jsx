import React from "react";
import img1 from "../../assets/insta-story-1.png";
import img2 from "../../assets/insta-story-2.png";
import img3 from "../../assets/insta-story-3.png";
import img4 from "../../assets/insta-story-4.png";
import { IoCardOutline } from "react-icons/io5";
import { PiHeadphonesLight } from "react-icons/pi";
import { CiDollar } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";

function InstgramStories() {
  return (
    <section className="container-main bg-white my-3 py-20">
      <h1 className="capitalize text-center text-4xl font-medium">
        our instgram stories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
        <div className="col-span-1 px-6 ">
          <img
            src={img1}
            alt="instgram story"
            className="w-full max-h-96 h-[22rem]  object-fill"
          />
        </div>
        <div className="col-span-1 px-6 ">
          <img
            src={img2}
            alt="instgram story"
            className="w-full max-h-96 h-[22rem]  object-fill"
          />
        </div>
        <div className="col-span-1 px-6 ">
          <img
            src={img3}
            alt="instgram story"
            className="w-full max-h-96 h-[22rem]  object-fill"
          />
        </div>
        <div className="col-span-1 px-6 ">
          <img
            src={img4}
            alt="instgram story"
            className="w-full max-h-96 h-[22rem]  object-fill"
          />
        </div>
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
