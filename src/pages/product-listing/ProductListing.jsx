import React from "react";
import Card from "../../components/product-card/Card";
import { PiSquaresFourLight } from "react-icons/pi";
import DropDownMenu from "../../components/product-listing/DropDownMenu";
import { TfiMenuAlt } from "react-icons/tfi";
import products from "../../products.json";

function ProductListing() {
  const items = products.products;
  console.log(items);

  return (
    <>
      <section className="container-main">
        <div className="grid grid-cols-4 gap-4 mt-32">
          <div className="col-span-1"></div>
          <div className="col-span-3">
            <div className="flex justify-between">
              <div className="flex gap-4">
                <div>
                  <PiSquaresFourLight className="text-2xl" />
                </div>
                <div className="flex items-start">
                  <TfiMenuAlt className="text-2xl" />
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
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
