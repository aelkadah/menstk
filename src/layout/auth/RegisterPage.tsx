import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <Container>
      <Row className="pt-3 pb-4">
        <h1 className="fw-bold text-center">تسجيل حساب جديد</h1>
        <Form.Label className="w-100 text-center">
          لديك حساب بالفعل؟
          <Link to="/login">
            <span className="text-danger mx-1">تسجيل الدخول</span>
          </Link>
        </Form.Label>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>اسم المستخدم</Form.Label>
              <Form.Control
                type="text"
                placeholder="أدخل اسمك هنا"
                className="text-end"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>البريد الإلكتروني</Form.Label>
              <Form.Control
                type="email"
                placeholder="البريد الإلكتروني"
                className="text-end"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>رقم الهاتف</Form.Label>
              <Form.Control
                type="text"
                placeholder="رقم الهاتف"
                className="text-end"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>كلمة المرور</Form.Label>
              <Form.Control type="password" placeholder="كلمة المرور..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswordConf">
              <Form.Label>تأكيد كلمة المرور</Form.Label>
              <Form.Control
                type="password"
                placeholder="تأكيد كلمة المرور..."
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 fw-bold">
              تسجيل الحساب
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
