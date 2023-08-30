import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../features/productSlice";
import { loggedUserCart, updateCartItem } from "./../../features/cartSlice";
import notify from "../../helpers/notify";

const UpdateQuantityHook = (item) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (item) {
      setQty(item?.quantity);
      dispatch(getOneProduct(item?.product));
    }
  }, [item]);

  const product = useSelector((state) => state.product.oneProduct?.data);

  const [pending, setPending] = useState(true);
  const [qty, setQty] = useState(1);
  const onChangeQty = (e) => setQty(e.target.value);

  const handleUpdateQty = async (e) => {
    if (qty < 1) return notify("لا يمكن إختيار كمية أقل من 1", "warn");
    else if (qty > product?.quantity)
      return notify(`لا يمكن إختيار كمية أكبر من ${product?.quantity}`, "warn");

    setPending(true);
    await dispatch(updateCartItem([item?._id, { quantity: qty }]));
    setPending(false);

    await dispatch(loggedUserCart());
  };

  return [qty, onChangeQty, handleUpdateQty];
};

export default UpdateQuantityHook;
