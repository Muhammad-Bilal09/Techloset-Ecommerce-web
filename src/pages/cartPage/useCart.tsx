import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
import {
  clearCart,
  removeFromCart,
  updateQuantity,
} from "../../redux/slice/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartItem } from "../../types/types";

export const useCart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const handleRemoveCart = () => {
    dispatch(clearCart());
    toast("all Item removed from cart");
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
    toast("Item removed from cart");
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const calculateTotalPrice = (item: CartItem) => {
    return item.quantity * item.price;
  };

  const calculateCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateTotalPrice(item),
      0
    );
  };
  return {
    cartItems,
    handleRemoveFromCart,
    handleQuantityChange,
    calculateTotalPrice,
    calculateCartTotal,
    handleRemoveCart,
  };
};
