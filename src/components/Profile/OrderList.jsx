import { useEffect, useState } from "react";
import { fetchUserOrders, deleteOrder } from "../../api/checkout/setOrder";
import { Badge, Modal, Button } from "flowbite-react";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  useEffect(() => {
    const getOrders = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedData = await fetchUserOrders();

        if (fetchedData?.data) {
          const ordersArray = Array.isArray(fetchedData.data)
            ? fetchedData.data
            : [fetchedData.data];
          setOrders(ordersArray);
        } else {
          setError("Invalid response from the server. Please try again.");
        }
      } catch (error) {
        console.error("Failed to fetch orders", error);
        setError("An error occurred while fetching orders. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  const handleDelete = async () => {
    try {
      await deleteOrder(selectedOrderId);
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order.id !== selectedOrderId)
      );
      setShowModal(false);
    } catch (error) {
      console.error("Failed to delete order", error);
    }
  };

  const openCancelModal = (orderId) => {
    setSelectedOrderId(orderId);
    setShowModal(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span>Loading...</span>
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

  const fallbackImage =
    "https://img.freepik.com/premium-vector/elegant-clothes-hanger-fashion-beauty_677686-509.jpg";

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Orders</h2>
      {orders.map((order) => (
        <div key={order.id} className="border p-4 rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-lg">Order #{order.id}</h4>
            <Badge
              color={order.status === "in process" ? "warning" : "success"}
            >
              {order.status === "delivered" ? "Delivered" : "In Process"}
            </Badge>
          </div>

          <p className="text-sm text-gray-500">
            Delivery Date: {order.delivery_date}
          </p>

          <div className="space-y-2">
            {order.products.map((product) => (
              <div key={product.id} className="flex items-start space-x-4">
                <div className="w-16 h-16">
                  <img
                    src={product.image || fallbackImage}
                    alt={product.name}
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-grow">
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="text-sm text-gray-500">
                    Size: {product.pivot.size || "N/A"}
                  </p>
                  <p className="text-sm text-gray-500">
                    Qty: {product.pivot.quantity}
                  </p>
                  <p className="text-sm text-gray-500">
                    Price: ${product.pivot.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Total and Actions */}
          <div className="flex justify-between items-center mt-4">
            <p className="text-s font-semibold">Delivery charge: ${order.delivery_charge}</p>
            <p className="text-lg font-bold">Total: ${order.grand_total}</p>

            <div className="space-x-2">
              {order.status === "delivered" && (
                <button className="bg-black text-white px-4 py-1 rounded-md">
                  Write A Review
                </button>
              )}
              {order.status !== "delivered" && (
                <button
                  onClick={() => openCancelModal(order.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded-md"
                >
                  Cancel Order
                </button>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Cancel Confirmation Modal */}
      {showModal && (
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          size="md"
          popup={true}
        >
          <Modal.Header>Confirm Cancellation</Modal.Header>
          <Modal.Body>
            <p className="text-gray-700">
              Are you sure you want to cancel this order?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button color="failure" onClick={handleDelete}>
              Yes, Cancel
            </Button>
            <Button color="gray" onClick={() => setShowModal(false)}>
              No, Go Back
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default OrderList;
