import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyCouponToCart, loggedUserCart } from "../../features/cartSlice";

const ApplyCouponHook = () => {
  const dispatch = useDispatch();

  const [pending, setPending] = useState(true);
  const [coupon, setCoupon] = useState("");
  const onChangeCoupon = (e) => setCoupon(e.target.value);

  const loading = useSelector((state) => state.cart.loading);
  const error = useSelector((state) => state.cart.error);

  const handleApplyCoupon = async (e) => {
    e.persist();
    setPending(true);
    await dispatch(applyCouponToCart({ coupon }));
    setPending(false);
    dispatch(loggedUserCart());
  };

  useEffect(() => {
    if (!pending && !loading && !error) {
      setPending(true);
    }
  }, [pending]);

  return [coupon, onChangeCoupon, handleApplyCoupon, loading];
};

export default ApplyCouponHook;
