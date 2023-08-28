import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  forgotPassword,
  verifyResetCode,
  resetPassword,
} from "../../features/userSlice";
import notify from "../../helpers/notify";

const ForgotPasswordHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const [formOne, setFormOne] = useState(true);
  const [pending, setPending] = useState(true);

  const [email, setEmail] = useState("");
  const onChangeEmail = (e) => setEmail(e.target.value);

  const handleEmailSubmit = async (e) => {
    e.persist();
    if (email == "") return notify("من فضلك أدخل البريد الإلكتروني", "warn");

    setPending(true);
    await dispatch(forgotPassword({ email }));
    setPending(false);
  };

  useEffect(() => {
    if (!pending && !loading && !error) {
      setPending(true);
      setFormOne(false);
      setFormTwo(true);
    }
  }, [pending]);

  const [formTwo, setFormTwo] = useState(false);
  const [secPending, setSecPending] = useState(true);

  const [otp, setOtp] = useState("");
  const onChangeOtp = (e) => setOtp(e.target.value);

  const handleOtpSubmit = async (e) => {
    e.persist();
    if (otp == "") return notify("للإستمرار من فضلك أدخل رمز التحقق", "warn");

    setSecPending(true);
    await dispatch(verifyResetCode({ resetCode: otp }));
    setSecPending(false);
  };

  useEffect(() => {
    if (!secPending && !loading && !error) {
      setSecPending(true);
      setFormTwo(false);
      setFormThree(true);
    }
  }, [secPending]);

  const [formThree, setFormThree] = useState(false);
  const [thirdPending, setThirdPending] = useState(true);

  const [pass, setPass] = useState("");
  const onChangePass = (e) => setPass(e.target.value);
  const [passConfirm, setPassConfirm] = useState("");
  const onChangePassConfirm = (e) => setPassConfirm(e.target.value);

  const handleResetPass = async (e) => {
    e.persist();

    if (pass == "") return notify("من فضلك أدخل كلمة السر الجديدة", "warn");
    else if (passConfirm == "")
      return notify("من فضلك أدخل تأكيد كلمة السر الجديدة", "warn");
    else if (passConfirm !== pass)
      return notify("كلمة السر غير متطابقة مع التأكيد", "warn");

    setThirdPending(true);
    await dispatch(resetPassword({ email, newPassword: pass }));
    setThirdPending(false);
  };

  useEffect(() => {
    if (!thirdPending && !loading && !error) {
      setThirdPending(true);
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  }, [thirdPending]);

  return [
    formOne,
    formTwo,
    formThree,
    email,
    onChangeEmail,
    handleEmailSubmit,
    otp,
    onChangeOtp,
    handleOtpSubmit,
    pass,
    onChangePass,
    passConfirm,
    onChangePassConfirm,
    handleResetPass,
  ];
};

export default ForgotPasswordHook;
