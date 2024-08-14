import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemType } from "../../types/types";

interface WishlistState {
  items: ItemType[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<ItemType>) => {
      state.items.push(action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export type RootState = {
  wishlist: WishlistState;
};

export const selectWishlistItems = (state: RootState) => state.wishlist.items;

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
