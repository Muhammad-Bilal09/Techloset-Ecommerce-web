import { useEffect, useState } from "react";
import { fetchItems } from "../../redux/slice/itemSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { addToCart } from "../../redux/slice/cartSlice";
import { CartItem } from "../../types/types";
import { ItemType } from "../../types/types";
import {
  addToWishlist,
  removeFromWishlist,
  selectWishlistItems,
} from "../../redux/slice/wishlistSlice";
import { toast } from "react-toastify";

export const useHomeState = () => {
  const dispatch = useAppDispatch();
  const state: any = useAppSelector((state) => state);
  const { item } = useAppSelector((state) => state.products);
  const wishlistItems = useAppSelector(selectWishlistItems);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { categories } = useAppSelector((state) => state.items);

  const [svgColor] = useState("currentColor");

  const isItemInWishlist = wishlistItems.some(
    (wishlistItem: ItemType) => wishlistItem.id === item.id
  );

  const [itemHeartColors, setItemHeartColors] = useState<{
    [key: number]: string;
  }>(() => {
    const initialColors: { [key: number]: string } = {};
    wishlistItems.forEach((wishlistItem: ItemType) => {
      initialColors[wishlistItem.id] = "red";
    });
    return initialColors;
  });

  const handleButtonClick = (item: ItemType) => {
    const currentColor = itemHeartColors[item.id] || "currentColor";
    const newColor = currentColor === "currentColor" ? "red" : "currentColor";

    if (newColor === "red") {
      if (
        wishlistItems.some(
          (wishlistItem: ItemType) => wishlistItem.id === item.id
        )
      ) {
        toast("Item is already in the wishlist");
        return;
      }
      dispatch(addToWishlist(item));
      toast("Item added to wishlist");
    } else {
      dispatch(removeFromWishlist(item.id));
      toast("Item removed from wishlist");
    }
    setItemHeartColors((prevColors) => ({
      ...prevColors,
      [item.id]: newColor,
    }));
  };

  const handleAddToCart = (item: CartItem) => {
    dispatch(addToCart(item));
  };


  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchItems());
    };
    fetchData();

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategories, setSelectedCategory] = useState<string[]>([]);

  const { data, selectedCategory } = useAppSelector((state) => ({
    data: state.items.data || [],
    isLoading: state.items.isLoading,
    selectedCategory: state.items.selectedCategory,
  }));

  const filteredCategoryData = data.filter((item: any) => {
    if (
      selectedCategory &&
      selectedCategory !== "" &&
      item.category !== selectedCategory
    ) {
      return false;
    }
    return true;
  });

  const filteredData = data.filter((item: any) => {
    if (
      selectedCategory &&
      selectedCategory !== "" &&
      item.category !== selectedCategory
    ) {
      return false;
    }
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(item.category)
    ) {
      return false;
    }
    return true;
  });
  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
  };

  const getFilteredData = () => {
    const { data  } = state;
    if (selectedCategory === "All") {
      return data;
    }
    return data.filter((item: any) => item.category === selectedCategory);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex) => Math.max(0, currentIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex) =>
      Math.min(state.items.data.length - 3, currentIndex + 1)
    );
  };
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };
  return {
    handleCategoryClick,
    getFilteredData,
    filteredCategoryData,
    state,
    item,
    currentIndex,
    filteredData,
    svgColor,
    windowWidth,
    handleDotClick,
    handleButtonClick,
    handleAddToCart,
    handlePrevClick,
    handleNextClick,
    categories,
    itemHeartColors,
    selectedCategory,
    setSelectedCategory,
    isItemInWishlist,
  };
};
