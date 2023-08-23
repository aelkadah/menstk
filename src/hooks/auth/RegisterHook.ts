import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../../helpers/notify";
import { registerUser } from "../../features/authSlice";

const RegisterHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pending, setPending] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const userData = useSelector((state) => state.auth.user.data);

  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangePasswordConfirm = (e) => setPasswordConfirm(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name == "") return notify("من فضلك أدخل الاسم", "warn");
    else if (email == "")
      return notify("من فضلك أدخل البريد الإلكتروني", "warn");
    else if (password == "") return notify("من فضلك أدخل كلمة السر", "warn");
    else if (passwordConfirm !== password)
      return notify("كلمة السر غير متطابقة مع التأكيد", "warn");

    setPending(true);
    await dispatch(registerUser({ name, email, password, passwordConfirm }));
    setPending(false);
  };

  useEffect(() => {
    if (!pending && !loading && !error && userData) {
      setPending(true);
      setName("");
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
      setTimeout(() => navigate("/"), 1000);
    }
  }, [pending]);

  return [
    name,
    onChangeName,
    email,
    onChangeEmail,
    password,
    onChangePassword,
    passwordConfirm,
    onChangePasswordConfirm,
    handleSubmit,
  ];
};

export default RegisterHook;
