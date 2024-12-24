import { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../redux/selectors/cartSelectors";
import { useNavigate } from "react-router-dom";

const SummaryCard = ({ deliveryCharge, onApplyDiscount }) => {
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const subtotal = useSelector(selectCartTotal);
  const navigate = useNavigate();

  const applyDiscount = () => {
    if (discountCode === "FLAT50") {
      setDiscount(50);
      onApplyDiscount(50);
    } else {
      setDiscount(0);
      onApplyDiscount(0);
    }
  };

  // const subtotal = products.reduce(
  //   (acc, product) => acc + product.productPrice * (product.quantity || 1),
  //   0
  // );

  const total = subtotal - discount + deliveryCharge;

  return (
    <div className="mt-6 p-4 border rounded-md w-[50%] h-auto">
      <div className="flex justify-between mb-2">
        <p className="font-semibold">Subtotal</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          placeholder="Enter Discount Code"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={applyDiscount}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Apply
        </button>
      </div>

      {discount > 0 && (
        <div className="flex justify-between mb-2 text-green-500">
          <p>Discount Applied</p>
          <p>- ${discount.toFixed(2)}</p>
        </div>
      )}

      <div className="flex justify-between mb-2">
        <p className="font-semibold">Delivery Charge</p>
        <p>${deliveryCharge.toFixed(2)}</p>
      </div>

      <div className="flex justify-between text-lg font-bold">
        <p>Grand Total</p>
        <p>${total.toFixed(2)}</p>
      </div>

      <button
        className="bg-black text-white w-full py-3 mt-4 rounded hover:bg-gray-800"
        onClick={() => {
          navigate("/order");
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

SummaryCard.propTypes = {
  deliveryCharge: PropTypes.number.isRequired,
  onApplyDiscount: PropTypes.func.isRequired,
};

export default SummaryCard;
