export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

export type RootState = {
  cart: {
    items: CartItem[];
  };
};

export type UpdateQuantityPayload = {
  id: number;
  quantity: number;
};

export type ItemType = {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
  totalItems: number;
  selectedProduct: any;
};

export type ProductState = {
  item: any;
  isLoading: boolean;
  error: string | null;
};

export const initialState: CartState = {
  items: [],
  totalItems: 0,
  selectedProduct: false,
};

export type ItemsState = {
  data: Item[];
  isLoading: boolean;
  isError: boolean;
  categories: string[];
  selectedCategory: string | null;
};

export type Item = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  wishlist: string;
};

export type ItemId = {
  id: number;
};
