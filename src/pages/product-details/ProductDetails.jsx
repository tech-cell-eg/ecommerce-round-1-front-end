import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import StarRating from "../../components/product-details/StarRating";
import DetailsTabs from "../../components/product-details/DetailsTabs";
import RelatedProducts from "../../components/product-details/RelatedProducts";
function ProductDetails() {
  const location = useLocation();
  const { product } = location.state || {};
  const fallbackImage =
  "https://img.freepik.com/premium-vector/elegant-clothes-hanger-fashion-beauty_677686-509.jpg";
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No product data available.
      </p>
    );
  }

  const colors = ["#FF5733", "#335BFF", "#000000", "#28B463", "#F4D03F"]; // Example colors
  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <>
      <div className="container-main ">
        <div className="grid grid-cols-12  p-8 mt-32">
          {/* Product Image Section */}
          <div className="flex flex-col items-center xl:col-span-5 col-span-12 ">
            <img
              src={product.image || fallbackImage}
              alt={product.name}
              className="w-[80%] mx-10  rounded-lg shadow-md"
            />
            <div className="flex gap-3 mt-4">
              {[...Array(4)].map((_, index) => (
                <img
                  key={index}
                  src={product.image || fallbackImage}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-20 h-20 object-cover border border-gray-300 rounded cursor-pointer hover:border-black"
                />
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className=" xl:col-span-6 col-span-12 flex flex-col  justify-between py-10">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-500 mb-4">{product.describtion}</p>
            <p>
              <StarRating rating={product.rating} reviews />
            </p>
            {/* Price Section */}
            <div className="mb-4">
              {product.discount > 0 ? (
                <div className="text-2xl font-bold text-red-500">
                  ${product.price - product.discount}{" "}
                  <span className="text-gray-500 line-through ml-2 text-lg">
                    ${product.price}
                  </span>
                </div>
              ) : (
                <div className="text-2xl font-bold">
                  ${product.price}
                </div>
              )}
            </div>

            {/* Color Selector */}
            <div className="mb-4">
              <p className="font-semibold mb-2">Color</p>
              <div className="flex gap-2">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-4">
              <p className="font-semibold mb-2">Size</p>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:bg-gray-100"
                    } 
                
                `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6 text-lg">
              <div className="flex items-center gap-2 border border-black rounded-2xl py-3">
                <button
                  onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                  className="w-8   flex items-center justify-center   hover:bg-gray-100"
                >
                  -
                </button>
                <span className=" font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="w-8   flex items-center justify-center  hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button className="w-full bg-black text-white py-3 rounded-2xl hover:bg-gray-800 border border-black">
                Add to Cart
              </button>
              <button className="rounded-2xl p-3 hover:bg-gray-100 border border-black text-3xl">
                <CiHeart />
              </button>
            </div>

            {/* Add to Cart Button */}
          </div>
        </div>
        <div className="border-b">
          <DetailsTabs product={product} />
        </div>
        <div>
          <RelatedProducts />
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
