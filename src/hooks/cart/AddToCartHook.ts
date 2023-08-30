import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, loggedUserCart } from "../../features/cartSlice";
import notify from "../../helpers/notify";

const AddToCartHook = (productId) => {
  const dispatch = useDispatch();

  const [pending, setPending] = useState(true);

  const loading = useSelector((state) => state.cart.loading);
  const error = useSelector((state) => state.cart.error);

  const [qty, setQty] = useState(0);
  const onChangeQty = (e) => setQty(e.target.value);

  const [indexColor, setIndexColor] = useState("");
  const [chosenColor, setChosenColor] = useState("");
  const handleChooseColor = (index, color) => {
    setIndexColor(index);
    setChosenColor(color);
  };

  const handleAddToCart = async (e) => {
    e.persist();
    // if (chosenColor == "") return notify("من فضلك اختر لون المنتج", "warn");

    setPending(true);
    await dispatch(addToCart({ productId, color: chosenColor }));
    setPending(false);
  };

  useEffect(() => {
    if (!pending && !loading && !error) {
      setPending(true);
      dispatch(loggedUserCart());
    }
  }, [pending]);

  return [
    qty,
    onChangeQty,
    handleChooseColor,
    indexColor,
    handleAddToCart,
    loading,
  ];
};

export default AddToCartHook;
