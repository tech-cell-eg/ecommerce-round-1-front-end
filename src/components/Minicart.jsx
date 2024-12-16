import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";

const Minicart = ({ cartItems = [] }) => {
  const [items, setItems] = useState(
    cartItems.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }))
  );

  // Calculate subtotal
  const subtotal = items.reduce(
    (total, item) => total + item.quantity * item.productPrice,
    0
  );

  // Function to delete an item
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.productId !== id));
  };

  // Handle empty cart
  if (items.length === 0) {
    return (
      <div className="minicart-dropdown text-white p-4 rounded-lg shadow-lg w-80 text-black flex flex-col items-center">
        <img
          src="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0="
          alt="Empty cart"
          className="w-24 h-24 mb-4"
        />
        <h3 className="text-xl">Your cart is empty</h3>
        <p className="text-gray-400 mt-2 mb-2">
          Add items to your cart to get started.
        </p>

        <button className="bg-black text-white py-2 rounded-lg w-full">
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="minicart-dropdown text-white p-4 rounded-lg shadow-lg w-80 text-black">
      <h3 className="text-xl mb-4">
        You have {items.length} {items.length === 1 ? "item" : "items"} in the
        cart
      </h3>
      <table className="w-full mb-4">
        <tbody>
          {items?.map((item) => (
            <tr key={item.productId} className="border-b border-gray-600 py-2">
              <td className="w-1/4">
                <img
                  src={item.productImage}
                  alt={item.productTitle}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="flex flex-col">
                <span className="text-sm font-semibold">
                  {item.productTitle}
                </span>
                <span className="text-sm">Size: {item.productSize[0]}</span>
                <span className="text-sm bold">
                  {item.quantity} X ${item.productPrice}
                </span>
              </td>
              <td className="text-right">
                <button
                  onClick={() => handleDelete(item.productId)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between text-lg font-semibold mb-4">
        <span>Subtotal: ${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex flex-col space-y-2">
        <button className="bg-white text-black py-2 rounded-lg border">
          View Cart
        </button>
        <button className="bg-black text-white py-2 rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
};

Minicart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.number.isRequired,
      productTitle: PropTypes.string.isRequired,
      productPrice: PropTypes.number.isRequired,
      productImage: PropTypes.string.isRequired,
      productSize: PropTypes.array.isRequired,
      quantity: PropTypes.number,
    })
  ).isRequired,
};

export default Minicart;
