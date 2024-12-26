import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "flowbite-react";
import { setOrderConfirmed } from "../../redux/actions/checkoutActions";
import { clearCart } from "../../redux/cartSlice";
import {
  selectSelectedAddress,
  selectSelectedPayment,
} from "../../redux/selectors/checkoutSelectors";
import { createOrder } from "../../api/checkout/setOrder";
import { selectUser } from "../../redux/selectors/userSelectors";
import { fetchUserCart } from "../../api/cart/cart"; 

const OrderReview = () => {
  const dispatch = useDispatch();
  const selectedAddress = useSelector(selectSelectedAddress);
  const selectedPayment = useSelector(selectSelectedPayment);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);


console.log(selectedAddress);

  useEffect(() => {
    const getCart = async () => {
      setLoading(true);
      try {
        console.log("Fetching cart items...");
        const allCartItems = await fetchUserCart();
        console.log("Cart items fetched:", allCartItems); 
        setCart(allCartItems);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      } finally {
        setLoading(false); 
      }
    };

    getCart();
  }, []);

  const handlePlaceOrder = async () => {
    const order = {
      "user_address_id":selectedAddress.id,
      "user_card_id":selectedPayment.id,
      "products":[1],
      "quantities":[1],
      "sizes":["S"]

    }

    try {
      console.log("Order data being sent:", JSON.stringify(order, null, 2));
      const response = await createOrder(order);
      console.log("API response:", response);

      if (response && response.status === 200) {
        dispatch(setOrderConfirmed(true));
        dispatch(clearCart());
      } else {
        console.error("Failed to place order:", response.message);
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };
  const fallbackImage =
    "https://img.freepik.com/premium-vector/elegant-clothes-hanger-fashion-beauty_677686-509.jpg";

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Review Your Order</h2>

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
                  Size: {item.product.size || " N/A"}
                </p>
              </div>
            </div>
          ))}
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
            {selectedPayment === Number
              ? "Credit Card ending in ****"
              : selectedPayment}
          </p>
        </div>

        <Button color="dark" className="w-full" onClick={handlePlaceOrder}>
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default OrderReview;
