import React, { useState, useEffect } from "react";
import Card from "../../components/product-card/Card";
import { PiSquaresFourLight } from "react-icons/pi";
import DropDownMenu from "../../components/product-listing/DropDownMenu";
import { TfiMenuAlt } from "react-icons/tfi";
import SideBar from "../../components/catgories/SideBar";
import { useSearchParams } from "react-router-dom";
import { fetchAllProducts } from "../../api/products/products";

function ProductListing() {

  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(true); // Sidebar visibility default is open on larger screens

  const selectedColors = searchParams.getAll("color");
  const selectedGenders = searchParams.getAll("gender");
  const selectedSizes = searchParams.getAll("size");
  const selectedMinPrice = searchParams.get("minPrice");
  const selectedMaxPrice = searchParams.get("maxPrice");
  const selectedTypes = searchParams.getAll("type");

  useEffect(() => {
    const getProducts = async () => {
      const allProducts = await fetchAllProducts();
      console.log(allProducts);
      setProducts(allProducts);
    };

    getProducts();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const allProducts = await fetchAllProducts();
      setProducts(allProducts);
    };
    getProducts();
  }, []);

  // Filter logic
  let filteredItems = items;

  if (selectedColors.length > 0) {
    filteredItems = filteredItems.filter((item) =>
      selectedColors.includes(item.color)
    );
  }

  if (selectedSizes.length > 0) {
    filteredItems = filteredItems.filter((item) =>
      selectedSizes.includes(item.size)
    );
  }

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

  if (selectedMinPrice) {
    filteredItems = filteredItems.filter(
      (item) => item.price >= selectedMinPrice && item.price <= selectedMaxPrice
    );
  }

  return (
    <>
      <section className="container mx-auto mt-16">
        {/* Sidebar Toggle Button */}
        <div className="flex items-center justify-between mb-4 md:hidden">
          <button
            className="text-lg p-2 border rounded-md bg-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Filter ⬎" : "Filter ⬎"}
          </button>
          <p>Showing 1-16 of 72 results</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Sidebar */}
          {isOpen && (
            <div className="col-span-1  p-4 rounded-md md:block">
              <SideBar />
            </div>
          )}

          {/* Product Listings */}
          <div
            className={`${
              isOpen ? "col-span-3" : "col-span-4"
            } transition-all duration-300`}
          >
            <div className="hidden md:flex justify-between mb-4">
              <div className="flex gap-4">
                <PiSquaresFourLight className="text-2xl" />
                <TfiMenuAlt className="text-2xl" />
                <p>Showing 1-16 of 72 results</p>
              </div>
              <button className="flex items-center">
                <p>
                  Sort by <DropDownMenu />
                </p>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredItems.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductListing;
