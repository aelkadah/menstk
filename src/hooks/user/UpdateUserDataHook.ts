import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../features/userSlice";
import { loggedUser } from "../../features/authSlice";
import notify from "../../helpers/notify";

const UpdateUserDataHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      setName(JSON.parse(localStorage.getItem("userInfo"))?.name);
      setEmail(JSON.parse(localStorage.getItem("userInfo"))?.email);
      setPhone(JSON.parse(localStorage.getItem("userInfo"))?.phone);
    } else if (localStorage.getItem("token")) {
      return dispatch(loggedUser());
    } else return;
  }, [localStorage.getItem("userInfo")]);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [pending, setPending] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const error = useSelector((state) => state.user.error);

  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePhone = (e) => setPhone(e.target.value);

  const handleUpdateData = async (e) => {
    if (name == "") return notify("من فضلك أدخل الاسم", "warn");
    else if (email == "")
      return notify("من فضلك أدخل البريد الإلكتروني", "warn");

    setPending(true);
    await dispatch(updateUserData({ name, email }));
    setPending(false);
  };

  useEffect(() => {
    if (!pending && !error) {
      dispatch(loggedUser());
      setPending(true);
      setShow(false);
      setName("");
      setEmail("");
      setPhone("");
    }
  }, [pending]);

  return [
    show,
    handleShow,
    handleClose,
    name,
    onChangeName,
    email,
    onChangeEmail,
    phone,
    onChangePhone,
    handleUpdateData,
  ];
};

export default UpdateUserDataHook;
