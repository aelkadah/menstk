import { Link } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Form,
  InputGroup,
  NavDropdown,
  Badge,
} from "react-bootstrap";
import {
  ArrowLeftOnRectangleIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/images/logo.svg";
import LoggedUserHook from "../../hooks/auth/LoggedUserHook";
import LogoutHook from "../../hooks/auth/LogoutHook";
import UserCartHook from "../../hooks/cart/UserCartHook";

const Header = () => {
  const [loading, userData] = LoggedUserHook();
  const [numOfCartItems] = UserCartHook();
  const [handleLogout] = LogoutHook();

  return (
    <Container
      className="header bg-white border-bottom border-light-subtle"
      fluid
    >
      <Container>
        <Navbar key="md" expand="md">
          <Container fluid>
            <Navbar.Brand className="m-0" to="/" as={Link}>
              <img src={logo} alt="logo" height="50px" />
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
                <Nav className="justify-content-between align-items-md-center gap-2 flex-grow-1">
                  <InputGroup className="headerSearch rounded rounded-4 mx-4">
                    <InputGroup.Text>
                      <MagnifyingGlassIcon width={"20px"} />
                    </InputGroup.Text>
                    <Form.Control placeholder="بتدور على ايه..." />
                  </InputGroup>
                  <Nav.Link className="d-none d-md-inline-block" disabled>
                    English
                  </Nav.Link>

                  {!loading && userData ? (
                    userData?.role == "admin" ? (
                      <NavDropdown
                        title={`أهلاً ${userData?.name?.split(" ")[0]}`}
                        className="fw-medium"
                      >
                        <NavDropdown.Item
                          className="text-end"
                          to="/admin/dashboard"
                          as={Link}
                        >
                          لوحة التحكم
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="text-end"
                          onClick={handleLogout}
                        >
                          تسجيل الخروج
                        </NavDropdown.Item>
                      </NavDropdown>
                    ) : (
                      <NavDropdown
                        title={`أهلاً ${userData?.name?.split(" ")[0]}`}
                        className="fw-medium"
                      >
                        <NavDropdown.Item
                          className="text-end"
                          to="/user/profile"
                          as={Link}
                        >
                          الحساب الشخصي
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          className="text-end"
                          onClick={handleLogout}
                        >
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
                      <span className="w-100">تسجيل الدخول</span>
                    </Nav.Link>
                  )}

                  <Nav.Link
                    className="d-flex align-items-center fw-medium position-relative"
                    to="/cart"
                    as={Link}
                  >
                    <ShoppingBagIcon width="25px" />
                    {numOfCartItems && numOfCartItems >= 1 ? (
                      <Badge
                        bg="primary"
                        className="position-absolute d-flex justify-content-center align-items-center top-0 p-1 rounded-circle"
                        style={{ left: "0px", width: "20px", height: "20px" }}
                      >
                        {numOfCartItems}
                      </Badge>
                    ) : null}
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
