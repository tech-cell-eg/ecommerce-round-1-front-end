import React from "react";
import Card from "../../components/product-card/Card";
import { PiSquaresFourLight } from "react-icons/pi";
import DropDownMenu from "../../components/product-listing/DropDownMenu";
import { TfiMenuAlt } from "react-icons/tfi";
import SideBar from "../../components/catgories/SideBar";
import { useSearchParams } from "react-router-dom";

function ProductListing() {
  const [searchParams] = useSearchParams();
  const selectedColors = searchParams.getAll("color"); // Get all selected colors
  const selectedGenders = searchParams.getAll("gender"); // Get all selected genders
  const selectedSizes = searchParams.getAll("size"); // Get all selected sizes
  const selectedMinPrice = searchParams.get("minPrice"); //Get selected minimum price
  const selectedMaxPrice = searchParams.get("maxPrice"); //Get selected maximum price
  const selectedTypes = searchParams.getAll("type");

  const items = [
    {
      id: 1,
      title: "Shoes",
      description: "This is a shoes",
      price: 1500,
      image: png,
      discount: 10,
      color: "red",
      size: "S",
      gender: "Men",
      type: "Belts",
    },
    {
      id: 2,
      title: "t-shirt",
      description: "polo t-shirt",
      price: 1200,
      image: png,
      discount: 20,
      color: "red",
      size: "S",
      gender: "Men",
      type: "Belts",
    },
    {
      id: 3,
      title: "watch",
      description: "This is a watch",
      price: 500,
      image: png,
      discount: 0,
      color: "blue",
      size: "M",
      gender: "Kids",
      type: "Wallets",
    },
    {
      id: 4,
      title: "bag",
      description: "This is a bag",
      price: 100,
      image: png,
      discount: 50,
      color: "green",
      size: "M",
      gender: "Women",
      type: "Wallets",
    },
  ];

  // Filter logic
  let filteredItems = items;

  // Filter by color
  if (selectedColors.length > 0) {
    filteredItems = filteredItems.filter((item) =>
      selectedColors.includes(item.color)
    );
  }

  // Filter by size
  if (selectedSizes.length > 0) {
    filteredItems = filteredItems.filter((item) =>
      selectedSizes.includes(item.size)
    );
  }

  // Filter by gender
  if (selectedGenders.length > 0) {
    filteredItems = filteredItems.filter((item) =>
      selectedGenders.includes(item.gender)
    );
  }
  if (selectedTypes.length > 0) {
    filteredItems = filteredItems.filter((item) =>
      selectedTypes.includes(item.type)
    );
  }

  // Filter by price
  if (selectedMinPrice) {
    filteredItems = filteredItems.filter(
      (item) => item.price >= selectedMinPrice && item.price <= selectedMaxPrice
    );
  }

  return (
    <>
      <section className="container-main">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <SideBar />
          </div>
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
