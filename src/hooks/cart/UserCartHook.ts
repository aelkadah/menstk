import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loggedUserCart } from "../../features/cartSlice";

const UserCartHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loggedUserCart());
  }, []);

  const loading = useSelector((state) => state.cart.loading);
  const userCart = useSelector((state) => state.cart.cart);

  return [userCart, loading];
};

export default UserCartHook;
