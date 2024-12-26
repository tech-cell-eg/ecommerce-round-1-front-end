import api, { handleError } from "../axiosConfig";

// Function to fetch User Orders
export const fetchUserOrders = async () => {
  try {
    const response = await api.get("orders");
    return response.data;
  } catch (error) {
    handleError(error, "Failed to fetch User Orders");
  }
};


// Function to create a new order
export const createOrder = async (order) => {
    try {
      const response = await api.post("orders", order);
      return response.data;
    } catch (error) {
      handleError(error, "Failed to create order");
    }
  };

  // Function to create a new order
export const deleteOrder = async (id) => {
  try {
    const response = await api.delete(`orders/${id}`);
    return response.data;
  } catch (error) {
    handleError(error, "Failed to delete order");
  }
};