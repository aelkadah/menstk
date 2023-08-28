import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ForgotPasswordPage = () => {
  //   const [email, onChangeEmail, handleSubmit] = ForgotPasswordHook();

  return (
    <Container>
      <Row className="pt-3 pb-4">
        <h1 className="fw-bold text-center">هل نسيت كلمة السر؟</h1>
        <Form.Label className="w-100 text-center">
          قم بإعادة تعيين كلمة السر الخاص بك
        </Form.Label>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>البريد الإلكتروني</Form.Label>
              <Form.Control
                type="email"
                placeholder="...أدخل البريد الإلكتروني هنا"
                className="text-end"
                // value={email}
                // onChange={onChangeEmail}
              />
            </Form.Group>
            <Button variant="primary" className="w-100 fw-bold">
              متابعة
            </Button>
            <Form.Label className="w-100 text-center mt-3">
              العودة إلى صفحة
              <Link to="/login">
                <span className="text-danger mx-1">تسجيل الدخول</span>
              </Link>
            </Form.Label>
          </Form>

          {/* <Form>
            <Form.Label className="text-black-50 fw-medium mb-3">
              للمتابعة، أكمل خطوة التحقق هذه. لقد قمنا بإرسال رمز إلى
              <span className="text-primary"> ahmedaymanelkadah@gmail.com</span>
              <span className="text-danger cursor-pointer">
                {" "}
                إعادة إرسال رمز التحقق (OTP)
              </span>
            </Form.Label>
            <Form.Group className="mb-3">
              <Form.Label>رمز التحقق (OTP)</Form.Label>
              <Form.Control
                type="email"
                placeholder="...أدخل رمز التحقق هنا"
                className="text-end"
                // value={otp}
                // onChange={onChangeOtp}
              />
            </Form.Group>
            <Button variant="primary" className="w-100 fw-bold">
              استمرار
            </Button>
          </Form> */}

          {/* <Form>
            <Form.Group className="mb-3">
              <Form.Label>كلمة السر الجديدة</Form.Label>
              <Form.Control
                type="password"
                placeholder="أدخل كلمة السر الجديدة هنا..."
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>تأكيد كلمة السر الجديدة</Form.Label>
              <Form.Control
                type="password"
                placeholder="أدخل تأكيد كلمة السر الجديدة هنا..."
              />
            </Form.Group>
            <Button variant="primary" className="w-100 fw-bold">
              إعادة تعيين
            </Button>
          </Form> */}
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPasswordPage;
