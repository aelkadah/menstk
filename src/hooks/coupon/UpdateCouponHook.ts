import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoupons, updateCoupon } from "../../features/couponSlice";
import notify from "../../helpers/notify";

const UpdateCouponHook = (coupon) => {
  const dispatch = useDispatch();

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const [pending, setPending] = useState(true);
  const [name, setName] = useState("");
  const [expire, setExpire] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if (coupon) {
      setName(coupon?.name);
      setDiscount(coupon?.discount);
      setExpire(coupon?.expire);
    }
  }, [coupon]);

  const loading = useSelector((state) => state.coupon.loading);
  const error = useSelector((state) => state.coupon.error);

  const onChangeName = (e) => setName(e.target.value);
  const onChangeExpire = (e) => setExpire(e.target.value);
  const onChangeDiscount = (e) => setDiscount(e.target.value);

  const handleUpdateCoupon = async (e) => {
    e.persist();

    if (name == "") return notify("من فضلك أدخل كود الخصم", "warn");
    else if (discount == 0) return notify("من فضلك أدخل نسبة الخصم", "warn");
    else if (expire == "") return notify("من فضلك أدخل تاريخ الإنتهاء", "warn");

    setPending(true);
    await dispatch(updateCoupon([coupon?._id, { name, expire, discount }]));
    setPending(false);

    dispatch(getAllCoupons());
  };

  useEffect(() => {
    if (!pending && !loading && !error) {
      setPending(true);
      handleCloseEdit();
    }
  }, [pending]);

  return [
    showEdit,
    handleShowEdit,
    handleCloseEdit,
    name,
    onChangeName,
    expire,
    onChangeExpire,
    discount,
    onChangeDiscount,
    handleUpdateCoupon,
    loading,
  ];
};

export default UpdateCouponHook;
