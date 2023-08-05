import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Form,
  InputGroup,
} from "react-bootstrap";
import logo from "../../assets/images/logo.svg";
import {
  ArrowLeftOnRectangleIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Header = () => {
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
                  <Form.Control
                    className="w-auto flex-grow-1 mx-3 rounded-3"
                    placeholder="شوف بتدور على إيه..."
                    aria-label="search"
                  />

                  <Nav.Link className="d-none d-md-inline-block" disabled>
                    English
                  </Nav.Link>
                  <Nav.Link
                    className="d-flex align-items-center fw-medium"
                    to="/login"
                    as={Link}
                  >
                    <ArrowLeftOnRectangleIcon width="25px" />
                    <span className="w-100">تسجيل الدخول</span>
                  </Nav.Link>
                  <Nav.Link
                    className="d-flex align-items-center fw-medium"
                    to="/cart"
                    as={Link}
                  >
                    <ShoppingBagIcon width="25px" />
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
