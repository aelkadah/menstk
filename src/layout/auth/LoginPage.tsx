import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Container>
      <Row className="pt-3 pb-4">
        <h1 className="fw-bold text-center">تسجيل الدخول</h1>
        <Form.Label className="w-100 text-center">
          ليس لديك حساب؟
          <Link to={`/register`}>
            <span className="text-danger mx-1">إنشاء حساب</span>
          </Link>
        </Form.Label>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>البريد الإلكتروني</Form.Label>
              <Form.Control
                type="email"
                placeholder="البريد الإلكتروني"
                className="text-end"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>كلمة المرور</Form.Label>
              <Form.Control
                type="password"
                placeholder="كلمة المرور"
                className="mb-1"
                required
              />
              <Form.Text className="fs-6">
                هل نسيت كلمة المرور؟
                <Link to="/forget-password" className="text-danger me-1 ms-0">
                  إعادة تعيين
                </Link>
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 fw-bold">
              تسجيل الدخول
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
