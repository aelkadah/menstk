import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import logo from "../../assets/images/logo.svg";
import {
  ArrowLeftOnRectangleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container className="border-bottom border-light-subtle " fluid>
      <Container>
        <Navbar key="md" expand="md">
          <Container fluid>
            <Navbar.Brand to="/" as={Link}>
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
                <Nav className="justify-content-end align-items-md-center flex-grow-1">
                  <Nav.Link disabled>English</Nav.Link>
                  <Nav.Link
                    className="d-flex align-items-center fw-bold"
                    to="/login"
                    as={Link}
                  >
                    <ArrowLeftOnRectangleIcon width="25px" />
                    تسجيل الدخول
                  </Nav.Link>
                  <Nav.Link
                    className="d-flex align-items-center fw-bold"
                    to="/cart"
                    as={Link}
                  >
                    <ShoppingBagIcon width="25px" />
                    عربة التسوق
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
