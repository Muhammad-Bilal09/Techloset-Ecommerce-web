import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { fetchItems, setSelectedCategory } from "../../redux/slice/itemSlice";

export function useFetchItemsEffect() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
}

export function useCategoriesState() {
  return useAppSelector((state) => state.items.categories);
}

export function useHandleCategoryChange() {
  const dispatch = useAppDispatch();
  const categories = useCategoriesState();

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    dispatch(setSelectedCategory(selectedCategory));
  };

  return {
    handleCategoryChange,
    categories,
  };
}
