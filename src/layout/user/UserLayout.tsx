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
} from "react-bootstrap";
import {
  ArrowLeftOnRectangleIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  ArrowRightOnRectangleIcon,
  AdjustmentsHorizontalIcon,
  UserCircleIcon,
  MapPinIcon,
  BookmarkIcon,
  QueueListIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/images/logo.svg";

const UserLayout = () => {
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
                <NavLink to="/user/favourite">
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
                <NavLink to="/user/creditcards">
                  <li>
                    <CreditCardIcon width={"20px"} />
                    <span>بطاقات الإئتمان</span>
                  </li>
                </NavLink>
              </ul>

              <div className="footer border-top">
                <ul className="nav">
                  <li>
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
            <NavLink to="/user/favourite">
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
            <NavLink to="/user/creditcards">
              <li>
                <CreditCardIcon width={"20px"} />
                <span className={`d-${display}`}>بطاقات الإئتمان</span>
              </li>
            </NavLink>
          </ul>

          <div className="footer border-top">
            <ul className="nav">
              <li>
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
