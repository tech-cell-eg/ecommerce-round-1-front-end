import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import cartReducer from "./cartSlice";
import productSearchReducer from "./reducers/searchReducer";
import productsReducer from "./reducers/productsReducer";
import checkoutReducer from "./reducers/checkoutReducer";
import userReducer from "./reducers/userReducer";
import wishlistReducer from "./wishlistSlice";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "checkout", "user", "wishlist"], 
};

const rootReducer = combineReducers({
  cart: cartReducer,
  productSearch: productSearchReducer,
  fetchProducts: productsReducer,
  checkout: checkoutReducer,
  user: userReducer,
  wishlist: wishlistReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export const persistor = persistStore(store) 