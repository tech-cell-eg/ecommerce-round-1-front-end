import api, { handleError } from "../axiosConfig";

export const fetchAllcategories = async () => {
  try {
    const response = await api.get("categories");
    return response.data.data;
  } catch (error) {
    handleError(error, "Failed to fetch all categories");
  }
};