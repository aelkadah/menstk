import { useEffect, useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  InputGroup,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import {
  ArrowLeftOnRectangleIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  ArrowRightOnRectangleIcon,
  RectangleGroupIcon,
  ShoppingCartIcon,
  AdjustmentsHorizontalIcon,
  ReceiptPercentIcon,
  TagIcon,
  SwatchIcon,
  SparklesIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid";
import logo from "../../assets/images/logo.svg";
import LogoutHook from "../../hooks/auth/LogoutHook";
import LoggedUserHook from "../../hooks/auth/LoggedUserHook";
import { LoadingSpinner } from "../../components";

const AdminLayout = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [collapsed, setCollapsed] = useState(false);
  const [display, setDisplay] = useState("none");

  useEffect(() => {
    if (collapsed == true) setDisplay("none");
    else if (collapsed == false) setDisplay("inline");
  }, [collapsed]);

  const handleCollapse = () => setCollapsed(!collapsed);

  const [loading, userData] = LoggedUserHook();
  const [handleLogout] = LogoutHook();
  return (
    <Container fluid className="p-0">
      <Row className="dashboardHeader">
        <span className="collapseBtn d-inline d-md-none" onClick={handleShow}>
          <AdjustmentsHorizontalIcon height={"25px"} />
        </span>
        <span
          className="collapseBtn d-none d-md-inline"
          onClick={handleCollapse}
        >
          <AdjustmentsHorizontalIcon height={"25px"} />
        </span>

        <Navbar key="md" expand="md" className="w-auto flex-grow-1">
          <Container fluid>
            <Navbar.Brand className="m-0" to="/" as={Link}>
              <img src={logo} alt="logo" height="35px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-md"
              aria-labelledby="offcanvasNavbarLabel-expand-md"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Navbar.Brand to="/" as={Link}>
                  <img src={logo} alt="logo" height="50px" />
                </Navbar.Brand>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-between align-items-md-center  flex-grow-1">
                  <InputGroup className="rounded rounded-4 mx-4">
                    <InputGroup.Text>
                      <MagnifyingGlassIcon width={"20px"} />
                    </InputGroup.Text>
                    <Form.Control placeholder="بتدور على ايه..." />
                  </InputGroup>

                  <Nav.Link disabled>English</Nav.Link>
                  {!loading && userData ? (
                    <NavDropdown
                      title={`${userData?.name?.split(" ")[0]} أهلاً`}
                      className="fw-medium"
                      dir="ltr"
                    >
                      <NavDropdown.Item
                        className="d-flex justify-content-end gap-1 py-2"
                        to="/admin"
                        as={NavLink}
                      >
                        لوحة التحكم
                        <AdjustmentsVerticalIcon width={"20px"} />
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="d-flex justify-content-end gap-1 py-2"
                        onClick={handleLogout}
                      >
                        تسجيل الخروج
                        <ArrowRightOnRectangleIcon width={"20px"} />
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : null}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

        <Offcanvas
          show={show}
          onHide={handleClose}
          className="d-md-none"
          backdropClassName="d-md-none"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img src={logo} alt="logo..." height={"35px"} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="offcanvasMenu">
              <ul className="nav d-flex flex-column">
                <NavLink to="/admin/dashboard">
                  <li>
                    <AdjustmentsVerticalIcon width={"20px"} />
                    <span className={`d-${display}`}>لوحة التحكم</span>
                  </li>
                </NavLink>
                <NavLink to="/admin/orders">
                  <li>
                    <ShoppingCartIcon width={"20px"} />
                    <span className={`d-${display}`}>الطلبيات</span>
                  </li>
                </NavLink>
                <NavLink to="/admin/products">
                  <li>
                    <CubeIcon width={"20px"} />
                    <span className={`d-${display}`}>المنتجات</span>
                  </li>
                </NavLink>
                <NavLink to="/admin/categories">
                  <li>
                    <TagIcon width={"20px"} />
                    <span className={`d-${display}`}>التصنيفات</span>
                  </li>
                </NavLink>
                <NavLink to="/admin/subcategories">
                  <li>
                    <SwatchIcon width={"20px"} />
                    <span className={`d-${display}`}>التصنيفات الفرعية</span>
                  </li>
                </NavLink>
                <NavLink to="/admin/brands">
                  <li>
                    <SparklesIcon width={"20px"} />
                    <span className={`d-${display}`}>الماركات</span>
                  </li>
                </NavLink>
                <NavLink to="/admin/coupons">
                  <li>
                    <ReceiptPercentIcon width={"20px"} />
                    <span className={`d-${display}`}>الخصومات</span>
                  </li>
                </NavLink>
              </ul>

              <div className="footer border-top">
                <ul className="nav">
                  <li onClick={handleLogout}>
                    <ArrowRightOnRectangleIcon width={"20px"} />
                    <span>تسجيل الخروج</span>
                  </li>
                </ul>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Row>

      <Row className="m-0 position-relative">
        <div className="sidebar d-flex flex-column w-auto d-none d-md-inline">
          <ul className="nav">
            <NavLink to="/admin/dashboard">
              <li>
                <AdjustmentsVerticalIcon width={"20px"} />
                <span className={`d-${display}`}>لوحة التحكم</span>
              </li>
            </NavLink>
            <NavLink to="/admin/orders">
              <li>
                <ShoppingCartIcon width={"20px"} />
                <span className={`d-${display}`}>الطلبيات</span>
              </li>
            </NavLink>
            <NavLink to="/admin/products">
              <li>
                <CubeIcon width={"20px"} />
                <span className={`d-${display}`}>المنتجات</span>
              </li>
            </NavLink>
            <NavLink to="/admin/categories">
              <li>
                <TagIcon width={"20px"} />
                <span className={`d-${display}`}>التصنيفات</span>
              </li>
            </NavLink>
            <NavLink to="/admin/subcategories">
              <li>
                <SwatchIcon width={"20px"} />
                <span className={`d-${display}`}>التصنيفات الفرعية</span>
              </li>
            </NavLink>
            <NavLink to="/admin/brands">
              <li>
                <SparklesIcon width={"20px"} />
                <span className={`d-${display}`}>الماركات</span>
              </li>
            </NavLink>
            <NavLink to="/admin/coupons">
              <li>
                <ReceiptPercentIcon width={"20px"} />
                <span className={`d-${display}`}>الخصومات</span>
              </li>
            </NavLink>
          </ul>

          <div className="footer border-top">
            <ul className="nav">
              <li onClick={handleLogout}>
                <ArrowRightOnRectangleIcon width={"20px"} />
                <span className={`d-${display} pe-0 ps-5`}>تسجيل الخروج</span>
              </li>
            </ul>
          </div>
        </div>

        <Col className="w-auto m-0 p-0">
          <Row className="m-0">
            <Outlet />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLayout;
