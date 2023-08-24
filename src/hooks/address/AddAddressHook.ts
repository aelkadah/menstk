import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAddress, getAllAddresses } from "../../features/addressSlice";
import notify from "../../helpers/notify";

const AddAddressHook = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [pending, setPending] = useState(true);
  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const loading = useSelector((state) => state.address.loading);
  const error = useSelector((state) => state.address.error);

  const onChangeAlias = (e) => setAlias(e.target.value);
  const onChangeCity = (e) => setCity(e.target.value);
  const onChangeDetails = (e) => setDetails(e.target.value);
  const onChangePostalCode = (e) => setPostalCode(e.target.value);
  const onChangePhone = (e) => setPhone(e.target.value);

  const handleAdd = async (e) => {
    e.preventDefault();

    if (alias == "") return notify("من فضلك أدخل مسمى العنوان", "warn");
    else if (city == "") return notify("من فضلك أدخل اسم المدينة", "warn");
    else if (details == "")
      return notify("من فضلك أدخل تفاصيل العنوان", "warn");
    else if (postalCode == "")
      return notify("من فضلك أدخل الرمز البريدي", "warn");
    else if (phone == "") return notify("من فضلك أدخل رقم الهاتف", "warn");

    setPending(true);
    await dispatch(addAddress({ alias, details, phone, city, postalCode }));
    setPending(false);
  };

  useEffect(() => {
    if (!pending && !loading && !error) {
      dispatch(getAllAddresses());
      setAlias("");
      setCity("");
      setDetails("");
      setPostalCode("");
      setPhone("");
      handleClose();
    }
  }, [pending]);

  return [
    show,
    handleShow,
    handleClose,
    alias,
    onChangeAlias,
    city,
    onChangeCity,
    details,
    onChangeDetails,
    postalCode,
    onChangePostalCode,
    phone,
    onChangePhone,
    handleAdd,
  ];
};

export default AddAddressHook;
