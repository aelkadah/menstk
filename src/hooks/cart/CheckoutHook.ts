import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../helpers/notify";
import { getAllAddresses } from "../../features/addressSlice";
import { loggedUserCart } from "../../features/cartSlice";
import { cashOrder } from "../../features/orderSlice";

const CheckoutHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllAddresses());
    dispatch(loggedUserCart());
  }, []);

  const userCart = useSelector((state) => state.cart.cart?.data);
  const addresses = useSelector((state) => state.address.allAddresses?.data);

  const [chosenAddress, setChosenAddress] = useState(0);
  const onChangeAddress = (e) => setChosenAddress(e.target.value);

  const [cash, setCash] = useState(false);
  const [credit, setCredit] = useState(false);

  const onChangeCash = (e) => {
    if (e.target.checked) {
      setCash(true);
      if (credit) setCredit(false);
    } else if (!e.target.checked) setCash(false);
  };
  const onChangeCredit = (e) => {
    if (e.target.checked) {
      setCredit(true);
      if (cash) setCash(false);
    } else if (!e.target.checked) setCredit(false);
  };

  const [pending, setPending] = useState(true);

  const loading = useSelector((state) => state.order.loading);
  const error = useSelector((state) => state.order.error);

  const handleCheckout = async (e) => {
    e.persist();
    if (!addresses?.length >= 1)
      return notify("من فضلك أضف عنوان أولاً", "warn");
    else if (!addresses[chosenAddress])
      return notify("من فضلك اختر عنوان أولاً", "warn");

    if (!cash && !credit)
      return notify("من فضلك اختر طريقة الدفع أولاً", "warn");

    if (cash) {
      setPending(true);
      await dispatch(
        cashOrder([
          userCart?._id,
          {
            shippingAddress: {
              details: addresses[chosenAddress]?.details,
              phone: addresses[chosenAddress]?.phone,
              city: addresses[chosenAddress]?.city,
              postalCode: addresses[chosenAddress]?.postalCode,
            },
          },
        ])
      );
      setPending(false);
      return;
    } else if (credit) return console.log("credit");
  };

  useEffect(() => {
    if (!pending && !loading && !error)
      setTimeout(() => window.location.replace("/"), 1000);
  }, [pending]);

  return [
    userCart,
    cash,
    onChangeCash,
    credit,
    onChangeCredit,
    addresses,
    chosenAddress,
    onChangeAddress,
    handleCheckout,
  ];
};

export default CheckoutHook;
