import api, { handleError } from "../axiosConfig";

// Function to fetch User Addresses
export const fetchUserAddresses = async () => {
  try {
    const response = await api.get("addresses");
    return response.data.data;
  } catch (error) {
    handleError(error, "Failed to fetch User Addresses");
  }
};

// Function to create a new address
export const createAddress = async (address) => {
  try {
    const response = await api.post("addresses", address);
    return response.data.data;
  } catch (error) {
    handleError(error, "Failed to create address");
  }
};

// Function to update an address
export const updateAddress = async (id, updatedData) => {
  try {
    const response = await api.patch(`addresses/${id}`, updatedData);
    return response.data.data;
  } catch (error) {
    handleError(error, "Failed to update address");
  }
};

// Function to delete an address
export const deleteAddress = async (id) => {
  try {
    await api.delete(`addresses/${id}`);
  } catch (error) {
    handleError(error, "Failed to delete address");
  }
};
