import api, { handleError } from "../axiosConfig";

export const fetchAllinstgramstories = async () => {
  try {
    const response = await api.get("instagram-stories");
    return response.data.data;
  } catch (error) {
    handleError(error, "Failed to fetch all reviews");
  }
};