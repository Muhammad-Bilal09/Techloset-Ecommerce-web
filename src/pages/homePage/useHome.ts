import { useEffect, useState } from "react";
import { fetchItems } from "../../redux/slice/items";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

export const useHomeState = () => {
  const dispatch = useAppDispatch();
  const state: any = useAppSelector((state) => state);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { categories } = useAppSelector((state) => state.items);

  const [svgColor, setSvgColor] = useState("currentColor");

  const handleButtonClick = () => {
    const newColor = svgColor === "currentColor" ? "red" : "currentColor";
    setSvgColor(newColor);
  };

  useEffect(() => {

  }, []);


  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchItems());
    };
    fetchData();

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategories, setSelectedCategory] = useState<string[]>([]);

  const { data, selectedCategory } = useAppSelector((state) => ({
    data: state.items.data,
    isLoading: state.items.isLoading,
    selectedCategory: state.items.selectedCategory,
  }));

  const filteredCategoryData = data.filter((item: any) => {
    if (selectedCategory && selectedCategory !== "" && item.category !== selectedCategory) {
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
  const getFilteredData = () => {
    const { data } = state;
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
  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
  };
  return {
    handleCategoryClick,
    getFilteredData,
    filteredCategoryData,
    state,
    currentIndex,
    filteredData,
    svgColor,
    windowWidth,
    handleDotClick,
    handleButtonClick,
    handlePrevClick,
    handleNextClick,
    categories,
    selectedCategory,
    setSelectedCategory
  };
};
