import api, { handleError } from "../axiosConfig";

// Function to add user to newsletter
export const subscription = async (email) => {
  try {
    const response = await api.post("our-news", email);
    return response.data;
  } catch (error) {
    handleError(error, "Failed to add user to newsletter");
  }
};
