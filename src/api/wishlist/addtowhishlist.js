import api, { handleError } from "../axiosConfig";

const addToWishlist = async (productId) => {
  const token = localStorage.getItem("token");
  try {
    const response = await api.post(
      "favorites", 
      { product_id: productId },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );
    
    return response.data;
  } catch (error) {
    handleError(error, "Failed to add item to wishlist");
  }
};

export default addToWishlist;
