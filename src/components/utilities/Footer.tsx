import { Container, Row } from "react-bootstrap";
import logo from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <Container
      className="bg-white mt-5 border-top border-light-subtle position-absolute bottom-0"
      fluid
    >
      <Container>
        <Row className="d-flex align-items-center justify-content-between py-4">
          <img src={logo} alt="logo..." height="40px" className="w-auto" />
          <p className="w-auto">
            منصتك للتجارة الإلكترونية ٢٠٢٣ © | جميع الحقوق محفوظة
          </p>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
