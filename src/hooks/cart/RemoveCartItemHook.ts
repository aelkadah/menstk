import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loggedUserCart, removeCartItem } from "../../features/cartSlice";

const RemoveCartItemHook = (id) => {
  const dispatch = useDispatch();

  const [pending, setPending] = useState(true);

  const handleRemove = async (e) => {
    e.persist();

    setPending(true);
    await dispatch(removeCartItem(id));
    setPending(false);
    dispatch(loggedUserCart());
  };

  useEffect(() => {
    if (!pending && !loading && !error) {
      setPending(true);
    }
  }, [pending]);

  return [handleRemove];
};

export default RemoveCartItemHook;
