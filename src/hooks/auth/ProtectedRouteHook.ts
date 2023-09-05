import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProtectedRouteHook = () => {
  const [isUser, setUser] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  // const role = JSON.parse(localStorage?.getItem("userInfo"))?.role;

  // useEffect(() => {
  //   if (role) {
  //     if (role == "user") {
  //       setUser(true);
  //       setAdmin(false);
  //     } else if (role == "admin") {
  //       setUser(false);
  //       setAdmin(true);
  //     }
  //   } else {
  //     setUser(false);
  //     setAdmin(false);
  //   }
  // }, [role]);

  const role = useSelector((state) => state.auth.user?.data?.role);

  useEffect(() => {
    if (role) {
      if (role == "user") {
        setUser(true);
        setAdmin(false);
      } else if (role == "admin") {
        setUser(false);
        setAdmin(true);
      }
    } else {
      setUser(false);
      setAdmin(false);
    }
  }, [role]);

  return [isUser, isAdmin];
};

export default ProtectedRouteHook;
