import { Container, Row } from "react-bootstrap";
import logo from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <Container className="bg-white border-top border-light-subtle mt-4" fluid>
      <Container>
        <Row className="d-flex flex-column align-items-center gap-3 pt-4">
          <img src={logo} alt="logo..." height="50px" />
          <p className="w-auto">
            منصتك للتجارة الإلكترونية ٢٠٢٣ © | جميع الحقوق محفوظة
          </p>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
