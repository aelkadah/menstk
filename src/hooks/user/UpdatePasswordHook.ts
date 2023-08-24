import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../features/userSlice";
import notify from "../../helpers/notify";

const UpdatePasswordHook = () => {
  const dispatch = useDispatch();

  const [pending, setPending] = useState(true);
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const error = useSelector((state) => state.user.error);
  const loading = useSelector((state) => state.user.loading);

  const onChangeCurrent = (e) => setCurrentPassword(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeConfirm = (e) => setPasswordConfirm(e.target.value);

  const handleUpdate = async (e) => {
    if (currentPassword == "")
      return notify("من فضلك أدخل كلمة السر الحالية", "warn");
    else if (password == "")
      return notify("من فضلك أدخل كلمة السر الجديدة", "warn");
    else if (passwordConfirm == "")
      return notify("من فضلك أدخل تأكيد كلمة السر الجديدة", "warn");
    else if (passwordConfirm != password)
      return notify("كلمة السر غير متطابقة مع التأكيد", "warn");

    setPending(true);
    await dispatch(
      updatePassword({ currentPassword, password, passwordConfirm })
    );
    setPending(false);
  };

  useEffect(() => {
    if (!pending && !error) {
      setPending(true);
      setCurrentPassword("");
      setPassword("");
      setPasswordConfirm("");
    }
  }, [pending]);

  return [
    currentPassword,
    onChangeCurrent,
    password,
    onChangePassword,
    passwordConfirm,
    onChangeConfirm,
    handleUpdate,
  ];
};

export default UpdatePasswordHook;
