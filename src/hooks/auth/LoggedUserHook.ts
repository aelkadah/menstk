import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loggedUser } from "../../features/authSlice";

const LoggedUserHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token") !== "undefined" &&
      localStorage.getItem("token") !== "null"
    )
      dispatch(loggedUser());
    else return;
  }, []);

  const loading = useSelector((state) => state.auth.loading);
  const userData = useSelector((state) => state.auth.user?.data);

  return [loading, userData];
};

export default LoggedUserHook;
