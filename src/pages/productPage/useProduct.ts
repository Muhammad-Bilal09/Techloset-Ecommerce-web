import { useEffect, useState } from "react";
import { fetchItems, setSelectedCategory } from "../../redux/slice/items";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { addToCart } from "../../redux/slice/cart";

const useProduct = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, selectedCategory } = useAppSelector((state) => ({
    data: state.items.data,
    isLoading: state.items.isLoading,
    selectedCategory: state.items.selectedCategory,
  }));
  const { categories } = useAppSelector((state) => state.items);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };
  const [svgColor, setSvgColor] = useState("currentColor");

  const handleButtonClick = () => {
    const newColor = svgColor === "currentColor" ? "red" : "currentColor";
    setSvgColor(newColor);
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
    data,
    isLoading,
    selectedCategory,
    categories,
    selectedCategories,
    handleAddToCart,
    handleCategoryChange,
    filteredData,
    svgColor,
    handleButtonClick
  };
};

export default useProduct;
