import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getAllwishlist from "../api/wishlist/wishlit";
import addToWishlist from "../api/wishlist/addtowhishlist";


export const getWishList = createAsyncThunk("wishlist/fetch", async (id) => {
  try {
    return await getAllwishlist(id);
  } catch (error) {
    throw new Error(" error fetching wishlist");
  }
});


export const addtoWishlist = createAsyncThunk("wishlist/add", async (productId) => {
  try {
    return await addToWishlist(productId);
  } catch (error) {
    throw new Error("error adding to wishlist");
  }
});

const getWishListSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
    loadingFetch: false,
    loadingAdd: false,
    error: null,
  },
  reducers: {}, 
  extraReducers: (builder) => {
      builder
        .addCase(getWishList.pending, (state) => {
          state.status = "loading";
        })
        .addCase(getWishList.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.wishlist = action.payload;
        })
        .addCase(getWishList.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload;
        })
        .addCase(addtoWishlist.fulfilled, (state, action) => {
          state.wishlist.push(action.payload);
        })
    },
});

export default getWishListSlice.reducer;
