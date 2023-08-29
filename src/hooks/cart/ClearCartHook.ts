import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearUserCart } from "../../features/cartSlice";

const ClearCartHook = () => {
  const dispatch = useDispatch();

  const [pending, setPending] = useState(true);

  const handleClearCart = async (e) => {
    e.persist();

    setPending(true);
    await dispatch(clearUserCart());
    setPending(false);
    window.location.reload(true);
  };

  useEffect(() => {
    if (!pending && !loaidng && !pending) setPending(true);
  }, [pending]);

  return [handleClearCart];
};

export default ClearCartHook;
