import api, { handleError } from "../axiosConfig";

const getAllwishlist = async (id) => {
  try {
    const response = await api.get(`favorites/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data.data; 
  } catch (error) {
    handleError(error, "Failed to fetch all wishlist items");
  }
  return null;
};

export default getAllwishlist;
