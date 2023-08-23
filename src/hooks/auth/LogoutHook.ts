import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/authSlice";

const LogoutHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pending, setPending] = useState(true);

  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const handleLogout = async (e) => {
    e.preventDefault();
    setPending(true);
    await dispatch(logout());
    setPending(false);
  };

  useEffect(() => {
    if (!pending && !loading && !error) {
      setPending(true);
      setTimeout(() => navigate("/"), 1000);
    }
  }, [pending]);

  return [handleLogout];
};

export default LogoutHook;
