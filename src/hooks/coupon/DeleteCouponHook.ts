import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoupon, getAllCoupons } from "../../features/couponSlice";

const DeleteCouponHook = (id) => {
  const dispatch = useDispatch();

  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  const [pending, setPending] = useState(true);

  const loading = useSelector((state) => state.coupon.loading);
  const error = useSelector((state) => state.coupon.error);

  const handleDeleteCoupon = async (e) => {
    e.persist();

    setPending(true);
    await dispatch(deleteCoupon(id));
    setPending(false);
    dispatch(getAllCoupons());
  };

  useEffect(() => {
    if (!pending && !loading && !error) {
      setPending(true);
      handleCloseDelete();
    }
  }, [pending]);

  return [showDelete, handleShowDelete, handleCloseDelete, handleDeleteCoupon];
};

export default DeleteCouponHook;
