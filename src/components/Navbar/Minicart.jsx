import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../redux/cartSlice";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../checkout/EmptyCart";
import { fetchAllProducts } from "../../api/products/products";
import { Spinner } from "flowbite-react";

const MiniCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const allProducts = await fetchAllProducts();
        setProducts(allProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const getProductDetails = (productId) => {
    const product = products.find((product) => product.id === productId);
    return product || {};
  };

  const subtotal = cartItems.reduce((acc, item) => {
    const product = getProductDetails(item.data.product_id);
    return acc + item.data.quantity * (product.price || 0);
  }, 0);

  const handleRedirect = (direction) => {
    navigate(`/${direction}`);
  };

  const handleClearCart = async () => {
    setLoading(true);
    try {
      dispatch(clearCart());
    } catch (error) {
      console.error("Error clearing cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (cartId, product_id) => {
    console.log("Deleting from cart:", { cartId, product_id });
    setLoading(true);
    try {
      dispatch(removeFromCart({ cartId, product_id }));
    } catch (error) {
      console.error("Error removing item:", error);
    } finally {
      setLoading(false);
    }
  };

  const fallbackImage =
    "https://img.freepik.com/premium-vector/elegant-clothes-hanger-fashion-beauty_677686-509.jpg";

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="minicart-dropdown bg-white p-4 rounded-lg shadow-lg w-80 text-black relative">
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-60 z-10">
          <Spinner />
        </div>
      )}

      <h3 className="text-xl mb-4">
        You have {cartItems.length} {cartItems.length === 1 ? "item" : "items"}{" "}
        in the cart
      </h3>
      <table className="w-full mb-4">
        <tbody>
          {cartItems.map((item) => {
            const product = getProductDetails(item.data.product_id);
            const productImage = product.image || fallbackImage;
            return (
              <tr key={item.data.id}>
                <td className="w-1/4">
                  <img
                    src={productImage}
                    alt={product.name || "Product"}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td>
                  <span className="text-sm font-semibold">
                    {product.name || "Unknown Product"}
                  </span>
                  <br />
                  <span className="text-sm">
                    Quantity: {item.data.quantity}
                  </span>
                  <br />
                  <span className="text-sm bold">
                    ${(item.data.quantity * (product.price || 0)).toFixed(2)}
                  </span>
                </td>
                <td className="text-right">
                  <button
                    onClick={() =>
                      handleDelete(item.data.id, item.data.product_id)
                    }
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-between text-lg font-semibold mb-4">
        <span>Subtotal: ${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex flex-col space-y-2">
        <button
          className="bg-white text-black py-2 rounded-lg border"
          onClick={handleClearCart}
          disabled={loading}
        >
          Clear Cart
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

export default MiniCart;
