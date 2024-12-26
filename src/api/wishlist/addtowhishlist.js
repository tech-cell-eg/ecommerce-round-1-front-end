import api, { handleError } from "../axiosConfig";

const addToWishlist = async (productId) => {
    const token = localStorage.getItem("token")
  try {
    const response = await api.post(`favorites/?product_id=${productId}`,{
        headers: {
          Authorization: `Bearer ${token}`, 
        }})
    console.log("Item added to wishlist successfully", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Response error:", error.response);
      
    } else if (error.request) {
      console.error("Request error:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
    handleError(error, "Failed to add item to wishlist");
  }
  console.log(token);
  
};

export default addToWishlist;

