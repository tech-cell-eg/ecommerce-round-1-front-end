import api, { handleError } from "../axiosConfig";

export const fetchAllTestimonials = async () => {
  try {
    const response = await api.get("testimonial");
    return response.data;
  } catch (error) {
    handleError(error, "Failed to fetch all products");
  }
};
