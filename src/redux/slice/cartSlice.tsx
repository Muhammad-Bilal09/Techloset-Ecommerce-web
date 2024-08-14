import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, initialState } from "../../types/types";

interface CartState {
  items: CartItem[];
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id, title, price, image } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id, title, price, quantity: 1, image });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const idToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== idToRemove);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const selectTotalItems = (state: { cart: CartState }) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
