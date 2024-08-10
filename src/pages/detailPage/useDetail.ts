import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { useParams } from "react-router-dom";
import { fetchSingleItems } from "../../redux/slice/productsSlice";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../../redux/slice/cartSlice";
import { CartItem } from "../../types/types";
export const useDetail = () => {
  const dispatch = useAppDispatch();
  const state: any = useAppSelector((state) => state);
  const { id } = useParams<{ id: any }>();
  const { item, isLoading } = useAppSelector((state) => state.products);

  const [svgColor, setSvgColor] = useState("currentColor");

  const handleButtonClick = () => {
    const newColor = svgColor === "currentColor" ? "red" : "currentColor";
    setSvgColor(newColor);
  };
  const handleAddToCart = (item: CartItem) => {
    dispatch(addToCart(item));
  };
  useEffect(() => {
    dispatch(fetchSingleItems(id));
  }, [dispatch, id]);

  return {
    state,
    item,
    handleButtonClick,
    handleAddToCart,
    svgColor,
    setSvgColor,
    isLoading,
  };
};
