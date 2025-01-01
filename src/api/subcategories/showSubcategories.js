import api, { handleError } from "../axiosConfig";

export const fetchshowSubcategories = async () => {
  try {
    const response = await api.get("sub-categories");
    return response.data.data;
  } catch (error) {
    handleError(error, "Failed to fetch all subcategories");
  }
};