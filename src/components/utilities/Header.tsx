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
    <Container className="bg-white border-bottom border-light-subtle" fluid>
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
                <Nav className="justify-content-between align-items-md-center  flex-grow-1">
                  <InputGroup className="w-auto d-flex flex-grow-1 mx-3">
                    <Form.Control
                      className="rounded-start-0 rounded-3"
                      placeholder="شوف بتدور على إيه..."
                      aria-label="search"
                    />
                    <InputGroup.Text
                      id="basic-addon1"
                      className="bg-primary text-white rounded-end-0 rounded-3"
                    >
                      <MagnifyingGlassIcon width="18px" />
                    </InputGroup.Text>
                  </InputGroup>

                  <Nav.Link disabled>English</Nav.Link>
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
