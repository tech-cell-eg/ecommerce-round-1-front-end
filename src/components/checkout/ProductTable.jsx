import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
// import {
//   updateItemQuantity,

// } from "../../redux/actions/cartActions";
import { updateQuantity, removeFromCart } from "../../redux/cartSlice";
import PropTypes from "prop-types";

const ProductTable = ({ cart, setCart }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (cartId, type) => {
    const newCart = [...cart];
    const itemIndex = newCart.findIndex((item) => item.id === cartId);
    if (itemIndex !== -1) {
      const item = newCart[itemIndex];
      const newQuantity =
        type === "increment"
          ? item.quantity + 1
          : Math.max(1, item.quantity - 1);
      item.quantity = newQuantity;

      setCart(newCart);
      dispatch(updateQuantity({ id: cartId, quantity: newQuantity }));
    }
  };

  const handleDelete = (product_id, cartId) => {
    const newCart = cart.filter((item) => item.id !== product_id);
    setCart(newCart);
    console.log(cartId, product_id);
    dispatch(removeFromCart({ cartId, product_id }));
  };

  const fallbackImage =
    "https://img.freepik.com/premium-vector/elegant-clothes-hanger-fashion-beauty_677686-509.jpg";

  if (!cart.length) {
    return <div>No items in the cart.</div>;
  }

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left font-semibold">Product</th>
            <th className="p-4 text-center font-semibold">Price</th>
            <th className="p-4 text-center font-semibold">Quantity</th>
            <th className="p-4 text-center font-semibold">Subtotal</th>
            <th className="p-4 text-center font-semibold"></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              <td className="p-4 flex items-center space-x-4">
                <img
                  src={item.product.image || fallbackImage}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h2 className="font-bold">{item.product.name}</h2>
                  <p className="text-gray-500 text-sm">
                    Size: {item.product.size || "N/A"}
                  </p>
                </div>
              </td>
              <td className="p-4 text-center">
                ${item.product.price.toFixed(2)}
              </td>
              <td className="p-4 text-center">
                <div className="flex justify-center items-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, "decrement")}
                    className="border px-2 py-1 rounded hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, "increment")}
                    className="border px-2 py-1 rounded hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="p-4 text-center">
                ${(item.product.price * item.quantity).toFixed(2)}
              </td>
              <td className="p-4 text-center">
                <button onClick={() => handleDelete(item.product.id, item.id)}>
                  <FaTrash className="text-red-500 hover:text-red-700" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ProductTable.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default ProductTable;
