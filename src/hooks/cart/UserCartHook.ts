import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loggedUserCart } from "../../features/cartSlice";

const UserCartHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loggedUserCart());
  }, []);

  const loading = useSelector((state) => state.cart.loading);
  const numOfCartItems = useSelector(
    (state) => state.cart.cart?.numOfCartItems
  );
  const userCart = useSelector((state) => state.cart.cart?.data);

  return [numOfCartItems, userCart, loading];
};

export default UserCartHook;
