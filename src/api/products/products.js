import api, { handleError } from "../axiosConfig";

// Function to fetch all products
export const fetchAllProducts = async () => {
  try {
    const response = await api.get("product");
    return response.data.data;
  } catch (error) {
    handleError(error, "Failed to fetch all products");
  }
};

// Function to fetch a single product by ID
export const fetchProductById = async (productId) => {
  try {
    const response = await api.get(`product/${productId}`);
    return response.data.data;
  } catch (error) {
    handleError(error, `Failed to fetch product with ID: ${productId}`);
  }
};

// Function to search products by query
export const searchProducts = async (query) => {
  try {
    const response = await api.get(`products/search`, {
      params: { query: query },
    });
    return response.data.data;
  } catch (error) {
    handleError(error, `Failed to search for products with query: ${query}`);
  }
};
