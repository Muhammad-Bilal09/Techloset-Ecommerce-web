import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./slice/itemSlice";
import cartReducer from "./slice/cartSlice";
import productsReducer from "./slice/productsSlice";
import wishlistReducer from "./slice/wishlistSlice";
export const store = configureStore({
  reducer: {
    items: itemReducer,
    cart: cartReducer,
    products: productsReducer,
    wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
