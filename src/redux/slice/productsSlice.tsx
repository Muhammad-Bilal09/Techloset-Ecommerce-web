import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ProductState, Product } from "../../types/types";
import axios from "axios";

const initialState: ProductState = {
  item: {},
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchSingleItemsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchSingleItemsSuccess(state, action: PayloadAction<Product>) {
      state.item = action.payload;
      state.isLoading = false;
    },
    fetchSingleItemsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSingleItemsStart,
  fetchSingleItemsSuccess,
  fetchSingleItemsFailure,
} = productsSlice.actions;

export const selectProductItem = (state: RootState) => state.products.item;

export default productsSlice.reducer;

export const fetchSingleItems =
  (id: number) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch(fetchSingleItemsStart());
      const response = await axios.get<Product>(
        `${process.env.REACT_APP_API_URL}/products/${id}`
      );
      dispatch(fetchSingleItemsSuccess(response.data));
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      dispatch(fetchSingleItemsFailure(errorMessage));
    }
  };
