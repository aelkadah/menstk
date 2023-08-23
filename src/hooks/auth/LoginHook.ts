import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../../helpers/notify";
import { loginUser } from "../../features/authSlice";

const LoginHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pending, setPending] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const userData = useSelector((state) => state.auth.user?.data);

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email == "") return notify("من فضلك أدخل البريد الإلكتروني", "warn");
    else if (password == "") return notify("من فضلك أدخل كلمة السر", "warn");

    setPending(true);
    await dispatch(loginUser({ email, password }));
    setPending(false);
  };

  useEffect(() => {
    if (!pending && !loading && !error && userData) {
      setPending(true);
      setEmail("");
      setPassword("");
      setTimeout(() => navigate("/"), 1000);
    }
  }, [pending]);

  return [email, onChangeEmail, password, onChangePassword, handleSubmit];
};

export default LoginHook;
