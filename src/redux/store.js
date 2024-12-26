import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartSlice";
import productSearchReducer from "./reducers/searchReducer";
import productsReducer from "./reducers/productsReducer";
import checkoutReducer from "./reducers/checkoutReducer";
import userReducer from "./reducers/userReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "checkout"],
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedCheckoutReducer = persistReducer(persistConfig, checkoutReducer);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    productSearch: productSearchReducer,
    fetchProducts: productsReducer,
    checkout: persistedCheckoutReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
