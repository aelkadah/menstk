import { useDispatch } from "react-redux";
import { getUserWishlist, removeWishlist } from "../../features/wishlistSlice";
import { loggedUser } from "../../features/authSlice";
import { getAllProducts } from "../../features/productSlice";

const RemoveWishlistHook = (id) => {
  const dispatch = useDispatch();

  const handleRemoveWishlist = async (e) => {
    e.persist();
    await dispatch(removeWishlist(id));
    await dispatch(loggedUser());
    dispatch(getUserWishlist());
    dispatch(getAllProducts([10]));
  };

  return [handleRemoveWishlist];
};

export default RemoveWishlistHook;
