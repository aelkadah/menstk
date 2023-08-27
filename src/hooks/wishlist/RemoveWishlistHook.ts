import { useDispatch } from "react-redux";
import { getUserWishlist, removeWishlist } from "../../features/wishlistSlice";

const RemoveWishlistHook = (id) => {
  const dispatch = useDispatch();

  const handleRemove = async (e) => {
    e.persist();
    await dispatch(removeWishlist(id));
    dispatch(getUserWishlist());
  };

  return [handleRemove];
};

export default RemoveWishlistHook;
