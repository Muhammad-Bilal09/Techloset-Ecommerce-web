import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ProductState } from "../../types/types";
import axios from "axios";

const initialState: ProductState = {
  item: {},
  isLoading: false,
  error: null,
};

// const apiUrl=process.env.REACT_APP_API_URL

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchSingleItemsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchSingleItemsSuccess(state, action: PayloadAction<any>) {
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

export const fetchSingleItems = (id: number) => async (dispatch: any) => {
  try {
    dispatch(fetchSingleItemsStart());
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/${id}`);
    dispatch(fetchSingleItemsSuccess(response.data));
  } catch (error: any) {
    dispatch(fetchSingleItemsFailure(error.message));
  }
};
