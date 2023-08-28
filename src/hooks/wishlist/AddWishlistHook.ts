import { useDispatch } from "react-redux";
import { addWishlist, getUserWishlist } from "../../features/wishlistSlice";
import { loggedUser } from "../../features/authSlice";
import { getAllProducts } from "../../features/productSlice";

const AddWishlistHook = (productId) => {
  const dispatch = useDispatch();

  const handleAddWishlist = async (e) => {
    e.persist();
    await dispatch(addWishlist({ productId }));
    await dispatch(loggedUser());
    dispatch(getUserWishlist());
    dispatch(getAllProducts([10]));
  };

  return [handleAddWishlist];
};

export default AddWishlistHook;
