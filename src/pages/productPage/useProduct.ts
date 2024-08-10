import { useEffect, useState } from "react";
import { fetchItems, setSelectedCategory } from "../../redux/slice/itemSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { addToCart } from "../../redux/slice/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
  selectWishlistItems,
} from "../../redux/slice/wishlistSlice";
import { ItemType } from "../../types/types";
import { toast } from "react-toastify";

const useProduct = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, selectedCategory } = useAppSelector((state) => ({
    data: state.items.data,
    isLoading: state.items.isLoading,
    selectedCategory: state.items.selectedCategory,
  }));
  const { item } = useAppSelector((state) => state.products);
  const { categories } = useAppSelector((state) => state.items);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const wishlistItems = useAppSelector(selectWishlistItems);

  const isItemInWishlist = wishlistItems.some(
    (wishlistItem: ItemType) => wishlistItem.id === item.id
  );

  const [wishlistItemId, setWishlistItemId] = useState<number | null>(null);

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

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };
  const [svgColor] = useState("currentColor");

  const handleWishlistClick = (item: ItemType) => {
    if (wishlistItemId === item.id) {
      dispatch(removeFromWishlist(item.id));
      setWishlistItemId(null);
    } else {
      dispatch(addToWishlist(item));
      setWishlistItemId(item.id);
    }
  };

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
    dispatch(
      setSelectedCategory(category === selectedCategory ? "" : category)
    );
  };

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

  return {
    item,
    data,
    isLoading,
    selectedCategory,
    categories,
    selectedCategories,
    itemHeartColors,
    handleAddToCart,
    handleCategoryChange,
    filteredData,
    svgColor,
    isItemInWishlist,
    addToWishlist,
    removeFromWishlist,
    wishlistItems,
    handleButtonClick,
    wishlistItemId,
    handleWishlistClick,
  };
};

export default useProduct;
