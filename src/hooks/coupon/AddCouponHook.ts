import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCoupon, getAllCoupons } from "../../features/couponSlice";
import notify from "../../helpers/notify";

const AddCouponHook = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [pending, setPending] = useState(true);
  const [name, setName] = useState("");
  const [expire, setExpire] = useState("");
  const [discount, setDiscount] = useState(0);

  const loading = useSelector((state) => state.coupon.loading);
  const error = useSelector((state) => state.coupon.error);

  const onChangeName = (e) => setName(e.target.value);
  const onChangeExpire = (e) => setExpire(e.target.value);
  const onChangeDiscount = (e) => setDiscount(e.target.value);

  const handleAddCoupon = async (e) => {
    e.persist();

    if (name == "") return notify("من فضلك أدخل كود الخصم", "warn");
    else if (discount == 0) return notify("من فضلك أدخل نسبة الخصم", "warn");
    else if (expire == "") return notify("من فضلك أدخل تاريخ الإنتهاء", "warn");

    setPending(true);
    await dispatch(createCoupon({ name, expire, discount }));
    setPending(false);
  };

  useEffect(() => {
    if (!pending && !loading && !error) {
      setPending(true);
      dispatch(getAllCoupons());
      handleClose();
    }
  }, [pending]);

  return [
    show,
    handleShow,
    handleClose,
    name,
    onChangeName,
    expire,
    onChangeExpire,
    discount,
    onChangeDiscount,
    handleAddCoupon,
    loading,
  ];
};

export default AddCouponHook;
