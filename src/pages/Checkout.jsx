import { useState } from "react";
import ProductTable from "../components/checkout/ProductTable";
import SummaryCard from "../components/checkout/SummaryCard";
import { selectCartItemCount } from "../redux/selectors/cartSelectors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [deliveryCharge] = useState(5);
  const navigate = useNavigate();

  // Apply discount
  const handleApplyDiscount = (discount) => {
    console.log("Discount applied: ", discount);
  };

  const isCartHasItem = useSelector(selectCartItemCount);

  if (isCartHasItem === 0) {
    return (
      <div className="bg-white p-6 shadow-lg w-[90%] lg:w-[60%] mx-auto text-black flex flex-col items-center justify-center min-h-[60vh]">
        <img
          src="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0="
          alt="Empty cart"
          className="w-80 h-80 mb-6"
        />
        <h2 className="text-2xl font-semibold text-center mb-4">
          Your cart is empty
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Add items to your cart to get started.
        </p>
        <button
          className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition duration-300"
          onClick={() => {
            navigate("/shop");
          }}
        >
          Browse Products
        </button>
      </div>
    );
  }
  return (
    <div className="p-6 bg-white shadow-md rounded-md max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-left">Checkout</h1>
      <div className="flex flex-col lg:flex-row gap-10 p-6 ">
        {/* Product Table */}
        <div className="flex-1 w-full">
          <ProductTable />
        </div>

        {/* Summary Card */}
        <div className="flex w-full lg:w-auto justify-end">
          <div className="w-full lg:max-w-md">
            <SummaryCard
              deliveryCharge={deliveryCharge}
              onApplyDiscount={handleApplyDiscount}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
