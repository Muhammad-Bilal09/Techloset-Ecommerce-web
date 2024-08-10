import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../redux/slice/wishlistSlice";

export const useWishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: any) => state.wishlist.items || []);

  const handleRemoveFromWishlist = (itemId: number) => {
    dispatch(removeFromWishlist(itemId));
  };

  return {
    wishlist,
    handleRemoveFromWishlist,
  };
};
