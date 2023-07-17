import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import {
  ArrowRightOnRectangleIcon,
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  RectangleGroupIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid";

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [display, setDisplay] = useState("none");

  useEffect(() => {
    if (collapsed == true) setDisplay("none");
    else if (collapsed == false) setDisplay("inline");
  }, [collapsed]);

  const handleCollapse = () => setCollapsed(!collapsed);

  return (
    <div className="sidebar d-flex flex-column w-auto">
      <div
        className="header border-bottom"
        onClick={() => console.log("collapse clicked")}
      >
        {!collapsed ? <img src={logo} alt="logo..." height={"35px"} /> : null}

        <span className="collapseBtn" onClick={handleCollapse}>
          {!collapsed ? (
            <Bars3BottomLeftIcon height={"20px"} />
          ) : (
            <Bars3BottomRightIcon width={"20px"} />
          )}
        </span>
      </div>

      <ul className="nav">
        <NavLink to="/admin/dashboard">
          <li>
            <AdjustmentsVerticalIcon width={"20px"} />
            <span className={`d-${display}`}>لوحة التحكم</span>
          </li>
        </NavLink>
        <NavLink to="/admin/products">
          <li>
            <RectangleGroupIcon width={"20px"} />
            <span className={`d-${display}`}>المنتجات</span>
          </li>
        </NavLink>
        <NavLink to="/admin/orders">
          <li>
            <ShoppingCartIcon width={"20px"} />
            <span className={`d-${display}`}>الطلبيات</span>
          </li>
        </NavLink>
      </ul>

      <div className="footer border-top">
        <ul className="nav">
          <li>
            <ArrowRightOnRectangleIcon width={"20px"} />
            <span className={`d-${display}`}>تسجيل الخروج</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
