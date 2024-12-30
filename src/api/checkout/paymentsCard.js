import api, { handleError } from "../axiosConfig";

// Function to fetch User payment cards
export const fetchSavedCards = async () => {
  try {
    const response = await api.get("cards");
    return response.data;
  } catch (error) {
    handleError(error, "Failed to fetch User payment cards");
  }
};

// Function to Add User payment card
export const addNewCard = async (cardDetails) => {
  try {
    const response = await api.post("cards", cardDetails);
    return response.data;
  } catch (error) {
    handleError(error, "Failed to add User payment card");
  }
};

// Function to delete User payment card
export const removeCard = async (id) => {
  try {
    const response = await api.delete(`cards/${id}`);
    return response.data;
  } catch (error) {
    handleError(error, "Failed to add User payment card");
  }
};
