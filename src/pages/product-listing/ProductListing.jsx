import React from "react";
import Card from "../../components/product-card/Card";
import png from "../../assets/card.png";
import { PiSquaresFourLight } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import DropDownMenu from "../../components/product-listing/DropDownMenu";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { PiDotsThreeOutlineVerticalDuotone } from "react-icons/pi";
import { TfiMenuAlt } from "react-icons/tfi";

function ProductListing() {
  const items = [
    {
      id: 1,
      title: "Shoes",
      description: "This is a shoes",
      price: 100,
      image: png,
      discount: 10,
    },
    {
      id: 2,
      title: "t-shirt",
      description: "polo t-shirt",
      price: 100,
      image: png,
      discount: 20,
    },
    {
      id: 3,
      title: "watch",
      description: "This is a watch",
      price: 100,
      image: png,
      discount: 0,
    },
    {
      id: 4,
      title: "bag",
      description: "This is a bag",
      price: 100,
      image: png,
      discount: 50,
    },
  ];
  return (
    <>
      <section className="container-main">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1"></div>
          <div className="col-span-3">
            <div className="flex justify-between">
              <div className="flex gap-4">
                <div>
                  <PiSquaresFourLight className="text-2xl" />
                </div>
                <div className="flex items-start">
                  {/* <div className="flex flex-col  ">
                    <PiDotOutlineLight className="text-[11px]" />
                    <PiDotOutlineLight className="text-[11px]" />
                  </div> */}
                    {/* <PiDotsThreeOutlineVerticalDuotone className="text-md mt-1" />
                  <HiBars3CenterLeft className="text-2xl" /> */}
                  <TfiMenuAlt className="text-2xl"/>

                </div>
                <div>
                  <p>showing 1-16 of 72 results</p>
                </div>
              </div>
              <button className="flex items-center">
                <p>
                  Shot by <DropDownMenu />
                </p>
              </button>
            </div>
            <div>
              {/* </div> */}
              <div className="grid grid-cols-3  mx-auto gap-10 mt-4">
                {items.map((item) => {
                  return <Card key={item.id} item={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductListing;
