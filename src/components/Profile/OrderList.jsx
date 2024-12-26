import { useEffect, useState } from "react";
import { fetchUserOrders, deleteOrder } from "../../api/checkout/setOrder";
import { Badge, Spinner } from "flowbite-react";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const fetchedOrders = await fetchUserOrders();
        setOrders(fetchedOrders || []);
      } catch (error) {
        console.error("Failed to fetch orders", error);
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  const handleDelete = async (orderId) => {
    try {
      await deleteOrder(orderId);
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order.data.id !== orderId)
      );
    } catch (error) {
      console.error("Failed to delete order", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  if (orders.data.length === 0 || !orders.data) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Orders</h2>
        <p className="text-gray-500 text-center">You have no orders.</p>;
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Orders</h2>
      {orders.data.map((order) => (
        <div
          key={order.data.id}
          className="flex justify-between items-center border p-4 rounded-lg"
        >
          <div className="flex items-center">
            <img
              src={order.data.image}
              alt={order.data.product}
              className="w-16 h-16 rounded-md"
            />
            <div className="ml-4">
              <h4 className="font-semibold">{order.data.product}</h4>
              <p className="text-sm text-gray-500">Size: {order.data.size}</p>
              <p className="text-sm text-gray-500">
                Qty: {order.data.quantity}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {order.data.status === "Delivered"
                  ? "Your product has been delivered"
                  : "Your product is in process"}
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="font-semibold">{order.data.price}</p>
            {order.data.status === "Delivered" ? (
              <button className="mt-2 bg-black text-white px-4 py-1 rounded-md">
                Write A Review
              </button>
            ) : (
              <button
                onClick={() => handleDelete(order.data.id)}
                className="mt-2 bg-red-500 text-white px-4 py-1 rounded-md"
              >
                Cancel Order
              </button>
            )}
          </div>

          <div className="ml-4">
            <Badge
              color={order.data.status === "Delivered" ? "success" : "warning"}
              pill={true}
            >
              {order.data.status}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
