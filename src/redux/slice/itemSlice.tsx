import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Item } from "../../types/types";
import axios from "axios";


export const fetchItems = createAsyncThunk("fetchItems", async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
    return response.data;
  } catch (error:any) {
    throw Error(error.message);
  }
});

export const itemSlice = createSlice({
  name: "items",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
    categories: [],
    selectedCategory: null,
  },
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
      const categories = payload.reduce((acc: string[], item: Item) => {
        if (!acc.includes(item.category)) {
          acc.push(item.category);
        }
        return acc;
      }, []);
      state.categories = categories;
    });
    builder.addCase(fetchItems.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { setCategories, setSelectedCategory } = itemSlice.actions;
export default itemSlice.reducer;
