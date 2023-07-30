import { Container, Row, Button } from "react-bootstrap";
import { useRouteError, Link } from "react-router-dom";
import errorImg from "../assets/images/404.png";
import { Footer, Header } from "../components";

const ErrorPage = () => {
  // const error = useRouteError();
  // console.error(error);

  return (
    <>
      <Header />
      <Container className="bg-light flex-grow-1">
        <Row>
          <div className="d-flex justify-content-center align-items-center">
            <img src={errorImg} alt="error 404" width={"300px"} />
          </div>
          <div className="d-flex flex-column align-items-center gap-2">
            <h2 className="fw-bold text-center">للأسف! حدث خطأ!</h2>
            <Button className="fw-bold" to="/" as={Link}>
              العودة إلى الصفحة الرئيسية
            </Button>
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ErrorPage;
