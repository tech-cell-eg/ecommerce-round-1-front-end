import React from "react";

const orders = [
  {
    id: 1,
    product: "Girls Pink Moana Printed Dress",
    size: "S",
    quantity: 1,
    price: "$80.00",
    status: "Delivered",
    image: "https://via.placeholder.com/80", 
  },
  {
    id: 2,
    product: "Women Textured Handheld Bag",
    size: "Regular",
    quantity: 1,
    price: "$80.00",
    status: "In Process",
    image: "https://via.placeholder.com/80", 
  },
  {
    id: 3,
    product: "Tailored Cotton Casual Shirt",
    size: "M",
    quantity: 1,
    price: "$40.00",
    status: "In Process",
    image: "https://via.placeholder.com/80", 
  },
];

const OrderList = () => {
  return (
    <div className="p-6 space-y-6">
      {orders.map((order) => (
        <div
          key={order.id}
          className="flex justify-between items-center border p-4 rounded-lg"
        >
          {/* Product Info */}
          <div className="flex items-center">
            <img
              src={order.image}
              alt={order.product}
              className="w-16 h-16 rounded-md"
            />
            <div className="ml-4">
              <h4 className="font-semibold">{order.product}</h4>
              <p className="text-sm text-gray-500">Size: {order.size}</p>
              <p className="text-sm text-gray-500">Qty: {order.quantity}</p>
              <p className="mt-1 text-sm text-gray-500">
                {order.status === "Delivered"
                  ? "Your product has been delivered"
                  : "Your product has been in process"}
              </p>
            </div>
          </div>

          {/* Price & Actions */}
          <div className="text-right">
            <p className="font-semibold">{order.price}</p>
            {order.status === "Delivered" ? (
              <button className="mt-2 bg-black text-white px-4 py-1 rounded-md">
                Write A Review
              </button>
            ) : (
              <button className="mt-2 bg-red-500 text-white px-4 py-1 rounded-md">
                Cancel Order
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
