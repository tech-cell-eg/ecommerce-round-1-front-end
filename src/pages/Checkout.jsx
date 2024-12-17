import { useState } from "react";
import ProductTable from "../components/checkout/ProductTable";
import SummaryCard from "../components/checkout/SummaryCard";
import { products } from "../products.json";

const productsData = products.slice(0, 3);
const Checkout = () => {
  const [products, setProducts] = useState(productsData);
  const [deliveryCharge] = useState(5);

  // Handle quantity changes
  const handleQuantityChange = (id, operation) => {
    const updatedProducts = products.map((product) => {
      if (product.productId === id) {
        return {
          ...product,
          quantity:
            operation === "increment"
              ? (product.quantity || 1) + 1
              : Math.max((product.quantity || 1) - 1, 1),
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  // Handle product deletion
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.productId !== id));
  };

  // Apply discount callback
  const handleApplyDiscount = (discount) => {
    console.log("Discount applied: ", discount);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-left">Checkout</h1>
      <div className="flex flex-col lg:flex-row gap-10 p-6 ">
        {/* Product Table */}
        <div className="flex-1 w-full">
          <ProductTable
            products={products}
            onQuantityChange={handleQuantityChange}
            onDelete={handleDelete}
          />
        </div>

        {/* Summary Card */}
        <div className="flex w-full lg:w-auto justify-end">
          <div className="w-full lg:max-w-md">
            <SummaryCard
              products={products}
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
