import { useEffect, useState } from "react";
import { fetchUserOrders, deleteOrder } from "../../api/checkout/setOrder";
import { Badge, Spinner } from "flowbite-react";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getOrders = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedData = await fetchUserOrders();

        if (
          fetchedData &&
          typeof fetchedData === "object" &&
          fetchedData.data
        ) {
          const ordersArray = Array.isArray(fetchedData.data)
            ? fetchedData.data
            : [fetchedData.data];
          setOrders(ordersArray);
        } else {
          console.log("Invalid response structure:", fetchedData);
          setError("Invalid response from the server. Please try again.");
          setOrders([]);
        }
      } catch (error) {
        console.error("Failed to fetch orders", error);
        setError("An error occurred while fetching orders. Please try again.");
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  const handleDelete = async (orderId) => {
    try {
      await deleteOrder(orderId);
      setOrders(orders.filter((order) => order.id!== orderId));
    } catch (error) {
      console.error("Failed to delete order", error);
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  if (!Array.isArray(orders) || orders.length === 0) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Orders</h2>
        <p className="text-gray-500 text-center">You have no orders.</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Orders</h2>
      {orders.map((order) => (
        <div
          key={order.id}
          className="flex justify-between items-center border p-4 rounded-lg"
        >
          <div className="flex flex-col">
            <h4 className="font-semibold">{order.products[0].name}</h4>
            <p className="text-sm text-gray-500">Price: {order.grand_total}</p>
            <p className="mt-1 text-sm text-gray-500">Status: {order.status}</p>
          </div>

          <div className="text-right flex items-center justify-end">
            <button
              onClick={() => handleDelete(order.id)}
              className="mt-2 bg-red-500 text-white px-4 py-1 rounded-md"
            >
              Cancel Order
            </button>
          </div>

          <Badge color={order.status === "in process" ? "warning" : "success"}>
            {order.status}
          </Badge>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
