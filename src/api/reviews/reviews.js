import api, { handleError } from "../axiosConfig";

export const fetchAllReviews = async () => {
  try {
    const response = await api.get("reviews");
    return response.data.data;
  } catch (error) {
    handleError(error, "Failed to fetch all reviews");
  }
};