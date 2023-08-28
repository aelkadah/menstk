import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserWishlist } from "../../features/wishlistSlice";

const WishlistHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWishlist());
  }, []);

  const loading = useSelector((state) => state.wishlist.loading);
  const wishlist = useSelector((state) => state.wishlist.wishlist?.data);

  return [wishlist, loading];
};

export default WishlistHook;
