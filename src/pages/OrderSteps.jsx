import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  selectActiveStep,
  selectOrderConfirmed,
} from "../redux/selectors/checkoutSelectors";
import SummaryCard from "../components/checkout/SummaryCard";
import CheckoutSteps from "../components/orderSteps/CheckoutSteps";
import AddressSelection from "../components/orderSteps/AddressSelection";
import PaymentMethod from "../components/orderSteps/PaymentMethod";
import OrderReview from "../components/orderSteps/OrderReview";
import OrderConfirmation from "../components/orderSteps/OrderConfirmation";
import { selectUser } from "../redux/selectors/userSelectors";



const OrderSteps = () => {
  const [deliveryCharge] = useState(5);
  const navigate = useNavigate();

  const activeStep = useSelector(selectActiveStep);
  const orderConfirmed = useSelector(selectOrderConfirmed);
  const user = useSelector(selectUser);

  // Apply discount
  const handleApplyDiscount = (discount) => {
    console.log("Discount applied: ", discount);
  };


  // Order Confirmation View
  if (orderConfirmed) {
    return <OrderConfirmation />;
  }

  if (!user.id) {
    return (
      <div className="bg-white p-6 shadow-lg w-[90%] lg:w-[60%] mx-auto text-black flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Please Log in or sign up to complete checkout process
        </h2>
        <button
          className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition duration-300"
          onClick={() => navigate("/login")}
        >
          Log In
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="p-6 bg-white shadow-md rounded-md max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-left">Checkout</h1>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-[100%]">
            <CheckoutSteps />

            {activeStep === 1 && <AddressSelection />}
            {activeStep === 2 && <PaymentMethod />}
            {activeStep === 3 && (
              <OrderReview deliveryCharge={deliveryCharge} />
            )}
          </div>

          <SummaryCard
            deliveryCharge={deliveryCharge}
            onApplyDiscount={handleApplyDiscount}
          />
        </div>
      </div>
    </div>
  );
};
export default OrderSteps;
