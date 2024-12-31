import { useEffect, useState } from "react";
import { Button, Spinner, Alert } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { setOrderConfirmed } from "../../redux/actions/checkoutActions";
import { clearCart } from "../../redux/cartSlice";
import {
  selectSelectedAddress,
  selectSelectedPayment,
} from "../../redux/selectors/checkoutSelectors";
import { createOrder } from "../../api/checkout/setOrder";
import { fetchUserCart } from "../../api/cart/cart";

const OrderReview = () => {
  const dispatch = useDispatch();
  const selectedAddress = useSelector(selectSelectedAddress);
  const selectedPayment = useSelector(selectSelectedPayment);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("failure");

  // Fetch cart items
  useEffect(() => {
    const getCart = async () => {
      setLoading(true);
      try {
        const allCartItems = await fetchUserCart();
        setCart(allCartItems);
      } catch (error) {
        setAlertMessage("Error getting your order", error);
        setAlertType("failure");
      } finally {
        setLoading(false);
      }
    };
    getCart();
  }, []);

  // Calculate total price
  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    );
  };

  // Handle order placement
  const handlePlaceOrder = async () => {
    setLoading(true);
    let order;
    if (typeof selectedPayment === "number") {
      order = {
        user_address_id: selectedAddress.id,
        user_card_id: selectedPayment,
        payment_method: "card",
        products: cart.map((item) => item.product.id),
        quantities: cart.map((item) => item.quantity),
        sizes: cart.map((item) => item.product.size || "S"),
      };
    } else {
      order = {
        user_address_id: selectedAddress.id,
        payment_method: selectedPayment,
        products: cart.map((item) => item.product.id),
        quantities: cart.map((item) => item.quantity),
        sizes: cart.map((item) => item.product.size || "S"),
      };
    }

    try {
      const response = await createOrder(order);
      if (response && response.status === 200) {
        dispatch(setOrderConfirmed(true));
        dispatch(clearCart());
      } else {
        setAlertType("failure");
        setAlertMessage("Error placing your order, Please Try again later");
      }
    } catch (error) {
      setAlertType("failure");
      setAlertMessage("Error placing your order", error);
    } finally {
      setLoading(false);
    }
  };

  const fallbackImage =
    "https://img.freepik.com/premium-vector/elegant-clothes-hanger-fashion-beauty_677686-509.jpg";

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Review Your Order</h2>

      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner size="xl" color="dark" aria-label="Loading" />
        </div>
      ) : (
        <div className="space-y-6">
          {/* Order Items */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <img
                  src={item.product.image || fallbackImage}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <h3 className="font-medium">{item.product.name}</h3>
                  <p className="text-gray-600">${item.product.price}</p>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                  <p className="text-sm text-gray-500">
                    Size: {item.product.size || "N/A"}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="text-right text-lg font-semibold">
            Grand Total: ${calculateTotalPrice().toFixed(1)}
          </div>

          {/* Shipping Address */}
          <div>
            <h3 className="font-medium mb-2">Shipping Address</h3>
            <div className="text-gray-600">
              <p>{selectedAddress.name}</p>
              <p>{selectedAddress.address}</p>
              <p>{`${selectedAddress.city}, ${selectedAddress.state} ${selectedAddress.area}`}</p>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="font-medium mb-2">Payment Method</h3>
            <p className="text-gray-600">
              {typeof selectedPayment === "number"
                ? "Credit Card ending in ****"
                : selectedPayment}
            </p>
          </div>
          {alertMessage && (
            <Alert color={alertType} onDismiss={() => setAlertMessage("")}>
              {alertMessage}
            </Alert>
          )}

          <Button
            color="dark"
            className="w-full"
            onClick={handlePlaceOrder}
            disabled={loading}
          >
            {loading ? <Spinner size="sm" light={true} /> : "Place Order"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default OrderReview;
