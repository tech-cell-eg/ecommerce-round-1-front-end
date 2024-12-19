import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";
import { selectCartTotal } from "../../redux/selectors/cartSelectors";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Minicart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const subtotal = useSelector(selectCartTotal);
  const items = useSelector((state) => state.cart.items);

  const handleRedirect = (direction) => {
    navigate(`/${direction}`);
  };

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };
  const fallbackImage =
    "https://img.freepik.com/premium-vector/elegant-clothes-hanger-fashion-beauty_677686-509.jpg";

  if (items.length === 0) {
    return (
      <div className="minicart-dropdown bg-white p-4 rounded-lg shadow-lg w-80 text-black flex flex-col items-center">
        <img
          src="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0="
          alt="Empty cart"
          className="w-24 h-24 mb-4"
        />
        <h3 className="text-xl">Your cart is empty</h3>
        <br />
        <button
          className="bg-black text-white py-2 rounded-lg w-full"
          onClick={() => handleRedirect("shop")}
        >
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="minicart-dropdown bg-white p-4 rounded-lg shadow-lg w-80 text-black">
      <h3 className="text-xl mb-4">
        You have {items.length} {items.length === 1 ? "item" : "items"} in the
        cart
      </h3>
      <table className="w-full mb-4">
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="w-1/4">
                <img
                  src={item.image || fallbackImage}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td>
                <span className="text-sm font-semibold">{item.name}</span>
                <br />
                <span className="text-sm">
                  Size:
                  {item.productSize && item.productSize.length > 0
                    ? item.productSize[0]
                    : "N/A"}
                </span>
                <br />
                <span className="text-sm bold">
                  {item.quantity} X ${item.price}
                </span>
              </td>
              <td className="text-right">
                <button
                  onClick={() => handleDelete(item.id)}
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
        <button
          className="bg-white text-black py-2 rounded-lg border"
          onClick={() => handleRedirect("checkout")}
        >
          View Cart
        </button>
        <button
          className="bg-black text-white py-2 rounded-lg"
          onClick={() => handleRedirect("checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Minicart;
