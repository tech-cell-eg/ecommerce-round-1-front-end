import api, { handleError } from "../axiosConfig";

// Fetch User Cart
export const fetchUserCart = async () => {
  try {
    const response = await api.get("cart");
    return response.data.data;
  } catch (error) {
    handleError(error, "Failed to fetch User Cart");
  }
};

// Add to Cart
export const addToCartApi = async (item) => {
  try {
    const quantity = item.quantity || 1;
    const response = await api.post("cart", {
      quantity,
      product_id: item.id,
    });
    return response;
  } catch (error) {
    handleError(error, "Failed to add item to cart");
  }
};

// Remove from Cart
export const removeFromCartApi = async (cartId, product_id) => {
  console.log(cartId, product_id); // 62 6
  // console.log(typeof product_id);
  try {
    const response = await api.delete(`cart/${cartId}`, {
      params: { product_id },
    });
    return response;
  } catch (error) {
    handleError(error, "Failed to remove item from cart");
  }
};
// Update Cart Item Quantity
export const updateCartQuantityApi = async (id, quantity) => {
  try {
    const response = await api.put(`cart/${id}`, { quantity });
    return response.data;
  } catch (error) {
    handleError(error, "Failed to update item quantity");
  }
};

// Clear Cart
export const clearCartApi = async () => {
  try {
    await api.delete("cart/clear");
  } catch (error) {
    handleError(error, "Failed to clear cart");
  }
};
