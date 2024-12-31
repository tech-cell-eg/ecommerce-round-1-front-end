import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Card from "../../components/product-card/Card";
import { PiSquaresFourLight } from "react-icons/pi";
import DropDownMenu from "../../components/product-listing/DropDownMenu";
import { TfiMenuAlt } from "react-icons/tfi";
import SideBar from "../../components/catgories/SideBar";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts as fetchAllProducts,
  setSearchQuery,
} from "../../redux/reducers/productsReducer";
import {
  selectFilteredProducts,
  selectProductsStatus,
  selectProductsError,
  selectAllProducts, // Ensure this selector is properly imported
} from "../../redux/selectors/productsSelector";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


function ProductListing() {
  const [searchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(true); // Sidebar visibility default is open on larger screens
  const [searchQuery, setSearchQuery] = useState(""); // Search input value
  const [filteredItems, setFilteredItems] = useState([]); // Store filtered products

  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const productsStatus = useSelector(selectProductsStatus);

  const selectedColors = searchParams.getAll("color");
  const selectedGenders = searchParams.getAll("gender");
  const selectedSizes = searchParams.getAll("size");
  const selectedMinPrice = searchParams.get("minPrice");
  const selectedMaxPrice = searchParams.get("maxPrice");
  const selectedTypes = searchParams.getAll("type");

  // Fetch all products when the component mounts
  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fetchAllProducts());
    }
  }, [dispatch, productsStatus]);

  // Apply filters whenever the products or search params change
  useEffect(() => {
    let items = products;

    if (selectedColors.length > 0) {
      items = items.filter((item) => selectedColors.includes(item.color));
    }

    if (selectedSizes.length > 0) {
      items = items.filter((item) => selectedSizes.includes(item.size));
    }

    if (selectedGenders.length > 0) {
      items = items.filter((item) => selectedGenders.includes(item.gender));
    }

    if (selectedTypes.length > 0) {
      items = items.filter((item) => selectedTypes.includes(item.type));
    }

    if (selectedMinPrice) {
      items = items.filter(
        (item) =>
          item.price >= selectedMinPrice && item.price <= selectedMaxPrice
      );
    }

    // Apply search query filter
    if (searchQuery) {
      items = items.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredItems(items);
  }, [
    products,
    selectedColors,
    selectedSizes,
    selectedGenders,
    selectedMinPrice,
    selectedMaxPrice,
    selectedTypes,
    searchQuery,
  ]);

  // Update search query based on user input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Shop at Krist</title>
        <meta name="description" content="Shop at Krist" />
      </Helmet>
      <section className="container mx-auto mt-16">
        {/* Sidebar Toggle Button */}
        <div className="flex items-center justify-between mb-4 md:hidden">
          <button
            className="text-lg p-2 border rounded-md bg-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Filter ⬎" : "Filter ⬎"}
          </button>
          <input
            type="text"
            className="p-2 border rounded-md"
            placeholder="Search products"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Sidebar */}
          {isOpen && (
            <div className="col-span-1 p-4 rounded-md md:block">
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
                <input
                  type="text"
                  className="p-2 border rounded-md"
                  placeholder="Search products"
                  value={searchQuery}
                  onChange={handleSearch}
                />
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
            <div className="flex justify-end gap-4 w-[90%] my-4 mx-auto">
                <button className="text-2xl p-2 rounded shadow-md border-2 border-gray-300"><IoIosArrowBack /></button>
                <button className="text-2xl p-2 rounded shadow-md border-2 border-gray-300" ><IoIosArrowForward /></button>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductListing;
