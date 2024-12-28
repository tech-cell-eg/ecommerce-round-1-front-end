import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartSlice";
import productSearchReducer from "./reducers/searchReducer";
import productsReducer from "./reducers/productsReducer";
import checkoutReducer from "./reducers/checkoutReducer";
import userReducer from "./reducers/userReducer";
import wishlistReducer from "./wishlistSlice";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "checkout", "user","wishlist"],
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedCheckoutReducer = persistReducer(persistConfig, checkoutReducer);
const persistedwishlistReducer = persistReducer(persistConfig, wishlistReducer )

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    productSearch: productSearchReducer,
    fetchProducts: productsReducer,
    checkout: persistedCheckoutReducer,
    user: persistedUserReducer,
    wishlist: persistedwishlistReducer 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
