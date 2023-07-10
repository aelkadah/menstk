import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import {
  ArrowRightOnRectangleIcon,
  ShoppingCartIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

const AdminSidebar = () => {
  return (
    <Col
      xs={1}
      md={2}
      id="adminSidebar"
      className="border-start border-end-0 border-light-subtle"
    >
      <NavLink to="/">
        <img src={logo} alt="logo..." height="50px" className="mb-3" />
      </NavLink>

      <Row>
        <ul>
          <NavLink to={`/admin/orders`}>
            <li>
              <ShoppingCartIcon width="20px" className="ms-2 me-0" />
              <span>الطلبيات</span>
            </li>
          </NavLink>
          <NavLink to={`/admin/products`}>
            <li>
              <Square3Stack3DIcon width="20px" className="ms-2 me-0" />
              <span>المنتجات</span>
            </li>
          </NavLink>
          <NavLink to={`/admin/brands`}>
            <li>
              <ShoppingCartIcon width="20px" className="ms-2 me-0" />
              <span>الماركات</span>
            </li>
          </NavLink>
          <NavLink to={`/admin/categories`}>
            <li>
              <ShoppingCartIcon width="20px" className="ms-2 me-0" />
              <span>التصنيفات</span>
            </li>
          </NavLink>
        </ul>

        <ul>
          <li className="cursor-pointer">
            <ArrowRightOnRectangleIcon width="20px" className="ms-2 me-0" />
            <span>تسجيل الخروج</span>
          </li>
        </ul>
      </Row>
    </Col>
  );
};

export default AdminSidebar;

// import { Col, Row } from "react-bootstrap";
// import logo from "../../assets/images/logo_white.svg";
// import { NavLink } from "react-router-dom";
// import {
//   ArrowRightOnRectangleIcon,
//   ShoppingCartIcon,
//   Square3Stack3DIcon,
// } from "@heroicons/react/24/outline";
// import avatar from "../../assets/images/avatar.png";

// const AdminSidebar = () => {
//   return (
//     <Col xs={1} md={2} className="adminSidebar py-4 px-0">
//       <Row className="p-0 mb-3">
//         <img src={logo} alt="logo..." height="50px" />
//       </Row>

//       <Row className="p-0 m-0 d-flex flex-column justify-content-between flex-grow-1">
//         <ul className=" my-4 d-flex flex-column flex-grow-1 p-0">
//           <NavLink to={`/admin/orders`}>
//             <li>
//               <ShoppingCartIcon width="20px" className="ms-2 me-0" />
//               الطلبيات
//             </li>
//           </NavLink>
//           <NavLink to={`/admin/products`}>
//             <li>
//               <Square3Stack3DIcon width="20px" className="ms-2 me-0" />
//               المنتجات
//             </li>
//           </NavLink>
//           <NavLink to={`/admin/brands`}>
//             <li>
//               <ShoppingCartIcon width="20px" className="ms-2 me-0" />
//               الماركات
//             </li>
//           </NavLink>
//           <NavLink to={`/admin/categories`}>
//             <li>
//               <ShoppingCartIcon width="20px" className="ms-2 me-0" />
//               التصنيفات
//             </li>
//           </NavLink>
//         </ul>

//         <div className="d-flex justify-content-between align-items-center">
//           <div className="d-flex justify-content-between align-items-center">
//             <div
//               className="rounded-circle border border-1 ms-2 me-0"
//               style={{ height: "40px" }}
//             >
//               <img src={avatar} alt="avatar..." width="40px" />
//             </div>
//             <div className="w-auto text-white">
//               <h5 className="m-0 p-0">Mody</h5>
//               <p>أدمن</p>
//             </div>
//           </div>
//           <div className="bg-light w-auto">
//             <ArrowRightOnRectangleIcon width="25px" />
//           </div>
//         </div>
//       </Row>
//     </Col>
//   );
// };

// export default AdminSidebar;
