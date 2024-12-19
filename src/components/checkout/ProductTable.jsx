// import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  updateItemQuantity,
  removeFromCart,
} from "../../redux/actions/cartActions";
import { selectCartItems } from "../../redux/selectors/cartSelectors";

const ProductTable = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectCartItems);

  const handleQuantityChange = (productId, type) => {
    const change = type === "increment" ? 1 : -1;
    dispatch(updateItemQuantity(productId, change));
  };

  const handleDelete = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse ">
        {/* Table Header */}
        <thead>
          <tr>
            <th className="p-4 text-left font-semibold">Product</th>
            <th className="p-4 text-center font-semibold">Price</th>
            <th className="p-4 text-center font-semibold">Quantity</th>
            <th className="p-4 text-center font-semibold">Subtotal</th>
            <th className="p-4 text-center font-semibold"></th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {products.map((product) => (
            <tr key={product.productId} className="border-b hover:bg-gray-50">
              {/* Product Information */}
              <td className=" p-4 flex items-center space-x-4">
                <img
                  src={product.productImage}
                  alt={product.productTitle}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h2 className="font-bold">{product.productTitle}</h2>
                  <p className="text-gray-500 text-sm">
                    Size: {product.productSize[0]}
                  </p>
                </div>
              </td>

              {/* Price */}
              <td className=" p-4 text-center">
                ${product.productPrice.toFixed(2)}
              </td>

              {/* Quantity Control */}
              <td className=" p-4 text-center">
                <div className="flex justify-center items-center space-x-2">
                  <button
                    onClick={() =>
                      handleQuantityChange(product.productId, "decrement")
                    }
                    className="border px-2 py-1 rounded hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    onClick={() =>
                      handleQuantityChange(product.productId, "increment")
                    }
                    className="border px-2 py-1 rounded hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </td>

              {/* Subtotal */}
              <td className=" p-4 text-center">
                ${(product.productPrice * product.quantity).toFixed(2)}
              </td>

              {/* Delete Button */}
              <td className=" p-4 text-center">
                <button onClick={() => handleDelete(product.productId)}>
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

export default ProductTable;
