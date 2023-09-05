import { useEffect, useState } from "react";

const ProtectedRouteHook = () => {
  const [isUser, setUser] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage?.getItem("userInfo"))?.role == "user") {
      setUser(true);
      setAdmin(false);
    } else if (JSON.parse(localStorage?.getItem("userInfo"))?.role == "admin") {
      setUser(false);
      setAdmin(true);
    } else {
      setUser(false);
      setAdmin(false);
    }
  }, []);

  return [isUser, isAdmin];
};

export default ProtectedRouteHook;
