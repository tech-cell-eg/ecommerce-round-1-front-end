import PropTypes from 'prop-types';
import { FaTrash } from "react-icons/fa";

const ProductTable = ({ products, onQuantityChange, onDelete }) => {
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
                      onQuantityChange(product.productId, "decrement")
                    }
                    className="border px-2 py-1 rounded hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span>{product.quantity || 1}</span>
                  <button
                    onClick={() =>
                      onQuantityChange(product.productId, "increment")
                    }
                    className="border px-2 py-1 rounded hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </td>

              {/* Subtotal */}
              <td className=" p-4 text-center">
                ${(product.productPrice * (product.quantity || 1)).toFixed(2)}
              </td>

              {/* Delete Button */}
              <td className=" p-4 text-center">
                <button onClick={() => onDelete(product.productId)}>
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
  products: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.string.isRequired,
      productImage: PropTypes.string.isRequired,
      productTitle: PropTypes.string.isRequired,
      productSize: PropTypes.array.isRequired,
      productPrice: PropTypes.number.isRequired,
      quantity: PropTypes.number
    })
  ).isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ProductTable;
