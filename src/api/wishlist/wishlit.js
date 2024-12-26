import api, { handleError } from "../axiosConfig";

const getAllwishlist = async (id) => {
  try {
    const response = await api.get(`favorites/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    console.log(response.data);
    console.log("All wishlist items fetched successfully");
    return response.data.data; // Assuming `data.data` holds the relevant data.
  } catch (error) {
    handleError(error, "Failed to fetch all wishlist items");
  }

  // Return null or an appropriate fallback value if there's an error
  return null;
};

export default getAllwishlist;
