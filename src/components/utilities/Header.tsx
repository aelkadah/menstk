import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import logo from "../../assets/images/logo.svg";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container className="shadow-sm" fluid>
      <Container>
        <Navbar key="md" expand="md">
          <Container fluid>
            <Navbar.Brand to="/" as={Link}>
              <img src={logo} alt="logo" height="50px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                  <Nav.Link disabled>English</Nav.Link>
                  <Nav.Link className="fw-bold">
                    <Link to="/login" className="d-flex align-items-center">
                      <ArrowLeftOnRectangleIcon width="25px" />
                      تسجيل الدخول
                    </Link>
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

{
  /* <Navbar.Brand to="/" as={Link}>
<img src={logo} alt="logo" width="50%" />
</Navbar.Brand> */
}
