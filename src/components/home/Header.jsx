import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <section className="w-[97%] bg-[#f5f5f5] m-auto rounded px-8 overflow-hidden ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full h-full">
          <div className="flex flex-col items-center justify-center h-full space-y-2 order-2 md:order-1  relative pb-4">
            <div className="py-4  relative z-40">
              <h2 className="text-2xl font-semibold my-2">Classic Exclusive</h2>
              <h1 className="text-2xl sm:text-4xl font-bold ">
                Women's Collection
              </h1>
              <p className="text-2xl my-1 font-semibold">UPTO 40% OFF</p>

              <div className="mt-12">
                <Link to={"/shop"} className="btn-primary w-fit">
                  Shop Now <FaLongArrowAltRight className="inline-block" />
                </Link>
              </div>
            </div>

            <div className="absolute bottom-[270px] lg:-bottom-[30px] xl:bottom-8 -left-6 md:left-[30%] w-[200px] text-nowrap md:bottom-2 ">
              <h3 className="text-white  text-[150px] font-bold">
                BEST SELLER
              </h3>
            </div>
          </div>

          <div className="flex items-center justify-center relative z-10 order-1 md:order-1">
            <div className="absolute w-[80%] h-[80%] border-[15px] border-white z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

            <img
              src="/image.png"
              alt=""
              className="relative z-20 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
