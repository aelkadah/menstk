import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoupons } from "../../features/couponSlice";

const AllCouponsHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCoupons());
  }, []);

  const loading = useSelector((state) => state.coupon.loading);
  const coupons = useSelector((state) => state.coupon.allCoupons?.data);

  return [coupons, loading];
};

export default AllCouponsHook;
