import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchUserCart,
  addToCartApi,
  removeFromCartApi,
  updateCartQuantityApi,
  clearCartApi,
} from "../api/cart/cart";

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, thunkAPI) => {
    try {
      return await fetchUserCart();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ item }, thunkAPI) => {
    try {
      const response = await addToCartApi(item);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (itemId, thunkAPI) => {
    try {
      await removeFromCartApi(itemId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ id, quantity }, thunkAPI) => {
    try {
      const data = await updateCartQuantityApi(id, quantity);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (_, thunkAPI) => {
    try {
      await clearCartApi();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        const { itemId, quantity } = action.payload;
        const item = state.items.find((item) => item.id === itemId);
        if (item) item.quantity = quantity;
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export default cartSlice.reducer;
