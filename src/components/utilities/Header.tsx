import { Link, NavLink } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  InputGroup,
  Badge,
} from "react-bootstrap";
import {
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  QueueListIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/images/logo.svg";
import LoggedUserHook from "../../hooks/auth/LoggedUserHook";
import LogoutHook from "../../hooks/auth/LogoutHook";
import UserCartHook from "../../hooks/cart/UserCartHook";

const Header = () => {
  const [userData, loading] = LoggedUserHook();
  const [userCart] = UserCartHook();
  const [handleLogout] = LogoutHook();

  return (
    <Container
      className="header bg-white border-bottom border-light-subtle"
      fluid
    >
      <Container>
        <Navbar key="md" expand="md" className="flex-grow-1">
          <Container fluid>
            <Navbar.Brand className="m-0" to="/" as={Link}>
              <img src={logo} alt="logo" height="45px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-md"
              aria-labelledby="offcanvasNavbarLabel-expand-md"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                  <Navbar.Brand to="/" as={Link}>
                    <img src={logo} alt="logo" height="45px" />
                  </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="align-items-center">
                <InputGroup className="headerSearch rounded rounded-4 d-flex my-2 my-md-0 mx-0 ms-md-0 me-md-4 w-100">
                  <InputGroup.Text>
                    <MagnifyingGlassIcon width={"20px"} />
                  </InputGroup.Text>
                  <Form.Control placeholder="بتدور على ايه..." />
                </InputGroup>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {!loading && userData ? (
                    userData?.role == "user" ? (
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
                    ) : (
                      <NavDropdown
                        title={`أهلاً ${userData?.name?.split(" ")[0]}`}
                        className="text-end gap-2"
                      >
                        <NavDropdown.Item
                          className="d-flex gap-1 py-2"
                          to="/admin/orders"
                          as={NavLink}
                        >
                          <AdjustmentsVerticalIcon width={"20px"} />
                          <span>لوحة التحكم</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="d-flex gap-1 py-2"
                          to="/admin/orders"
                          as={NavLink}
                        >
                          <ShoppingCartIcon width={"20px"} />
                          <span>الطلبيات</span>
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
                    )
                  ) : (
                    <Nav.Link
                      className="d-flex align-items-center fw-medium"
                      to="/login"
                      as={Link}
                    >
                      <ArrowLeftOnRectangleIcon width="25px" />
                      <span className="w-100 text-nowrap">تسجيل الدخول</span>
                    </Nav.Link>
                  )}

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
      </Container>
    </Container>
  );
};

export default Header;
