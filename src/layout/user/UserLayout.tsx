import { useEffect, useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Offcanvas,
  Badge,
  NavDropdown,
  InputGroup,
  Form,
} from "react-bootstrap";
import {
  ShoppingBagIcon,
  ArrowRightOnRectangleIcon,
  AdjustmentsHorizontalIcon,
  UserCircleIcon,
  MapPinIcon,
  BookmarkIcon,
  QueueListIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/images/logo.svg";
import LogoutHook from "../../hooks/auth/LogoutHook";
import LoggedUserHook from "../../hooks/auth/LoggedUserHook";
import { ErrorPage } from "..";
import UserCartHook from "../../hooks/cart/UserCartHook";

const UserLayout = ({ auth }) => {
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

  const [userData, loading] = LoggedUserHook();
  const [userCart] = UserCartHook();
  const [handleLogout] = LogoutHook();

  if (!auth) return <ErrorPage />;

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
                <InputGroup className="headerSearch rounded rounded-4 d-flex my-2 my-md-0 mx-0 ms-md-0 me-md-4 w-100">
                  <InputGroup.Text>
                    <MagnifyingGlassIcon width={"20px"} />
                  </InputGroup.Text>
                  <Form.Control id="search" placeholder="بتدور على ايه..." />
                </InputGroup>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown
                    title={`أهلاً ${userData?.name?.split(" ")[0]}`}
                    className="text-end gap-2"
                  >
                    <NavDropdown.Item
                      className="d-flex gap-1 py-2"
                      to="/user/profile"
                      as={NavLink}
                    >
                      <UserCircleIcon width={"20px"} />
                      <span>حسابك</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="d-flex gap-1 py-2"
                      to="/user/orders"
                      as={NavLink}
                    >
                      <QueueListIcon width={"20px"} />
                      <span>الطلبيات</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="d-flex gap-1 py-2"
                      to="/user/wishlist"
                      as={NavLink}
                    >
                      <HeartIcon width={"20px"} />
                      <span>المفضلة</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="d-flex gap-1 py-2"
                      to="/user/addresses"
                      as={NavLink}
                    >
                      <MapPinIcon width={"20px"} />
                      <span>العناوين</span>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      className="d-flex gap-1"
                      onClick={handleLogout}
                    >
                      <ArrowRightOnRectangleIcon width={"20px"} />
                      تسجيل الخروج
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link
                    className="d-flex align-items-center fw-medium position-relative"
                    to="/cart"
                    as={Link}
                  >
                    <ShoppingBagIcon width="25px" />
                    <Badge
                      bg="primary"
                      className="position-absolute d-flex justify-content-center align-items-center top-0 p-1 rounded-circle"
                      style={{ left: "0px", width: "20px", height: "20px" }}
                    >
                      {userCart?.numOfCartItems >= 1
                        ? userCart?.numOfCartItems
                        : "0"}
                    </Badge>
                    <span className="d-md-none w-100">عربة التسوق</span>
                  </Nav.Link>
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
                <NavLink to="/user/profile">
                  <li>
                    <UserCircleIcon width={"20px"} />
                    <span>الصفحة الشخصية</span>
                  </li>
                </NavLink>
                <NavLink to="/user/addresses">
                  <li>
                    <MapPinIcon width={"20px"} />
                    <span>العناوين</span>
                  </li>
                </NavLink>
                <NavLink to="/user/wishlist">
                  <li>
                    <BookmarkIcon width={"20px"} />
                    <span>المفضلة</span>
                  </li>
                </NavLink>
                <NavLink to="/user/orders">
                  <li>
                    <QueueListIcon width={"20px"} />
                    <span>الطلبيات</span>
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
            <NavLink to="/user/profile">
              <li>
                <UserCircleIcon width={"20px"} />
                <span className={`d-${display}`}>الصفحة الشخصية</span>
              </li>
            </NavLink>
            <NavLink to="/user/addresses">
              <li>
                <MapPinIcon width={"20px"} />
                <span className={`d-${display}`}>العناوين</span>
              </li>
            </NavLink>
            <NavLink to="/user/wishlist">
              <li>
                <BookmarkIcon width={"20px"} />
                <span className={`d-${display}`}>المفضلة</span>
              </li>
            </NavLink>
            <NavLink to="/user/orders">
              <li>
                <QueueListIcon width={"20px"} />
                <span className={`d-${display}`}>الطلبيات</span>
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

export default UserLayout;
