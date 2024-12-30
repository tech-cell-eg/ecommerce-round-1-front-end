import api, { handleError } from "../axiosConfig";

export const fetchAllTestimonials = async () => {
  try {
    // Retrieve token (replace with your method of getting the token, e.g., from localStorage or a context)
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Authentication token not found");
    }

    // Make the API call with the Authorization header
    const response = await api.get("testimonial", {
      headers: {
        Authorization: `Bearer ${token}`, // Attach token as a Bearer token
      },
    });

    return response.data;
  } catch (error) {
    handleError(error, "Failed to fetch all testimonials");
  }
};
