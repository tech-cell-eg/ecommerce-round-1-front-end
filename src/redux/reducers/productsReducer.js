import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "../../api/products/products"; // Adjust the import path as needed

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    searchQuery: "",
    filteredProducts: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
      state.filteredProducts = state.products.filter((product) =>
        product.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setProducts(state, action) {
      state.products = action.payload;
      state.filteredProducts = action.payload; // Initialize filtered products
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setSearchQuery, setProducts, setStatus, setError } = productsSlice.actions;

// Async function to fetch products
export const fetchProducts = () => async (dispatch) => {
  dispatch(setStatus("loading"));
  try {
    const data = await fetchAllProducts();
    dispatch(setProducts(data));
    dispatch(setStatus("succeeded"));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setStatus("failed"));
  }
};

export default productsSlice.reducer;
