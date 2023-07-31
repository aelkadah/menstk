import { Row, Col, Form, Button } from "react-bootstrap";

const ProfilePage = () => {
  return (
    <Row className="p-3">
      <Row className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="w-auto fw-bold m-0 p-0">الصفحة الشخصية</h3>
      </Row>

      <Row className="bg-white p-4">
        <Row>
          <h4 className="fw-bold pb-2">معلومات عامة</h4>
        </Row>
        <Col xs={12} md={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label>الاسم</Form.Label>
            <Form.Control placeholder={`Ahmed ElKadah`} disabled />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label>البريد الإلكتروني</Form.Label>
            <Form.Control
              placeholder={`ahmedaymanelkadah@gmail.com`}
              disabled
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label>رقم الهاتف</Form.Label>
            <Form.Control placeholder={`01021603376`} disabled />
          </Form.Group>
        </Col>
        <Row className="d-flex justify-content-end px-2">
          <Button>تعديل البيانات</Button>
        </Row>
      </Row>

      <Row className="bg-white p-4 mt-5">
        <h4 className="fw-bold pb-2">الخصوصية والحماية</h4>
        <Col xs={12} md={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label>كلمة السر الحالية</Form.Label>
            <Form.Control
              type="password"
              placeholder="أدخل كلمة السر الحالية...."
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label>كلمة السر الجديدة</Form.Label>
            <Form.Control
              type="password"
              placeholder="أدخل كلمة السر الجديدة...."
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label>كرر كلمة السر الجديدة</Form.Label>
            <Form.Control
              type="password"
              placeholder="أدخل كلمة السر الجديدة...."
            />
          </Form.Group>
        </Col>
        <Row className="d-flex justify-content-end px-2">
          <Button className="w-auto" disabled>
            تغيير كلمة السر
          </Button>
        </Row>
      </Row>
    </Row>
  );
};

export default ProfilePage;
