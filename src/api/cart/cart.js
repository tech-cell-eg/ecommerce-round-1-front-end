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
export const addToCartApi = async (item, userId) => {
  try {
    const quantity = item.quantity || 1;
    const response = await api.post("cart", {
      quantity,
      user_id: userId,
      product_id: item.id,
      product: {
        id: item.id,
        name: item.name,
        description: item.description,
        image: item.image || null,
        price: item.price,
        compare_price: item.compare_price,
        category_id: item.category_id,
        size: item.size || null,
        color: item.color || null,
      },
    });
    return response;
  } catch (error) {
    handleError(error, "Failed to add item to cart");
  }
};

// Remove from Cart
export const removeFromCartApi = async (itemId) => {
  try {
    await api.delete(`cart/${itemId}`);
  } catch (error) {
    handleError(error, "Failed to remove item from cart");
  }
};

// Update Cart Item Quantity
export const updateCartQuantityApi = async (itemId, quantity) => {
  try {
    const response = await api.put(`cart/${itemId}`, { quantity });
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
