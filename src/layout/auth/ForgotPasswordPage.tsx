import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ForgotPasswordHook from "../../hooks/auth/ForgotPasswordHook";

const ForgotPasswordPage = () => {
  const [
    formOne,
    formTwo,
    formThree,
    email,
    onChangeEmail,
    handleEmailSubmit,
    otp,
    onChangeOtp,
    handleOtpSubmit,
    pass,
    onChangePass,
    passConfirm,
    onChangePassConfirm,
    handleResetPass,
  ] = ForgotPasswordHook();

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
          {formOne ? (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>البريد الإلكتروني</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="...أدخل البريد الإلكتروني هنا"
                  className="text-end"
                  value={email}
                  onChange={onChangeEmail}
                />
              </Form.Group>
              <Button
                variant="primary"
                className="w-100 fw-bold"
                onClick={handleEmailSubmit}
              >
                إرسال رمز التحقق
              </Button>
              <Form.Label className="w-100 text-center mt-3">
                العودة إلى صفحة
                <Link to="/login">
                  <span className="text-danger mx-1">تسجيل الدخول</span>
                </Link>
              </Form.Label>
            </Form>
          ) : null}
          {formTwo ? (
            <Form>
              <Form.Label className="text-black-50 fw-medium mb-3">
                للمتابعة، أكمل خطوة التحقق هذه. لقد قمنا بإرسال رمز إلى
                <span className="text-primary"> {email}</span>
                <span className="text-danger cursor-pointer">
                  {" "}
                  إعادة إرسال رمز التحقق (OTP)
                </span>
              </Form.Label>
              <Form.Group className="mb-3">
                <Form.Label>رمز التحقق (OTP)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="...أدخل رمز التحقق هنا"
                  value={otp}
                  onChange={onChangeOtp}
                />
              </Form.Group>
              <Button
                variant="primary"
                className="w-100 fw-bold"
                onClick={handleOtpSubmit}
              >
                استمرار
              </Button>
            </Form>
          ) : null}
          {formThree ? (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>كلمة السر الجديدة</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="أدخل كلمة السر الجديدة هنا..."
                  value={pass}
                  onChange={onChangePass}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>تأكيد كلمة السر الجديدة</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="أدخل تأكيد كلمة السر الجديدة هنا..."
                  value={passConfirm}
                  onChange={onChangePassConfirm}
                />
              </Form.Group>
              <Button
                variant="primary"
                className="w-100 fw-bold"
                onClick={handleResetPass}
              >
                إعادة تعيين
              </Button>
            </Form>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPasswordPage;
