import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import LoggedUserHook from "../../hooks/auth/LoggedUserHook";
import { LoadingSpinner } from "../../components";
import UpdatePasswordHook from "../../hooks/user/UpdatePasswordHook";
import UpdateUserDataHook from "../../hooks/user/UpdateUserDataHook";

const ProfilePage = () => {
  const [loading, userData] = LoggedUserHook();
  const [
    currentPassword,
    onChangeCurrent,
    password,
    onChangePassword,
    passwordConfirm,
    onChangeConfirm,
    handleUpdate,
  ] = UpdatePasswordHook();
  const [
    show,
    handleShow,
    handleClose,
    name,
    onChangeName,
    email,
    onChangeEmail,
    phone,
    onChangePhone,
    handleUpdateData,
  ] = UpdateUserDataHook();

  return (
    <Row className="p-3">
      <Row className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="w-auto fw-bold m-0 p-0">الصفحة الشخصية</h3>
      </Row>

      <Row className="bg-white p-4">
        <Row>
          <h4 className="fw-bold pb-2">معلومات عامة</h4>
        </Row>
        {!loading ? (
          <Row>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>الاسم</Form.Label>
                <Form.Control value={userData?.name} disabled />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>البريد الإلكتروني</Form.Label>
                <Form.Control value={userData?.email} disabled />
              </Form.Group>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>رقم الهاتف</Form.Label>
                <Form.Control
                  value={userData?.phone || "غير موجود..."}
                  disabled
                />
              </Form.Group>
            </Col>
            <Row className="d-flex justify-content-end px-2">
              <Button onClick={handleShow}>تعديل البيانات</Button>
            </Row>
          </Row>
        ) : (
          <LoadingSpinner />
        )}
      </Row>

      <Row className="bg-white p-4 mt-5">
        <h4 className="fw-bold pb-2">الخصوصية والحماية</h4>
        <Col xs={12} md={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label>كلمة السر الحالية</Form.Label>
            <Form.Control
              type="password"
              placeholder="أدخل كلمة السر الحالية...."
              value={currentPassword}
              onChange={onChangeCurrent}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label>كلمة السر الجديدة</Form.Label>
            <Form.Control
              type="password"
              placeholder="أدخل كلمة السر الجديدة...."
              value={password}
              onChange={onChangePassword}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Form.Group className="mb-3">
            <Form.Label>كرر كلمة السر الجديدة</Form.Label>
            <Form.Control
              type="password"
              placeholder="أدخل كلمة السر الجديدة...."
              value={passwordConfirm}
              onChange={onChangeConfirm}
            />
          </Form.Group>
        </Col>
        <Row className="d-flex justify-content-end px-2">
          <Button className="w-auto" onClick={handleUpdate}>
            تغيير كلمة السر
          </Button>
        </Row>
      </Row>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="d-flex w-100" closeButton>
          <Modal.Title className="flex-grow-1">
            تعديل بياناتك الشخصية
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-2">
            <Form.Label>الاسم</Form.Label>
            <Form.Control
              type="text"
              placeholder="أدخل اسمك هنا..."
              value={name}
              onChange={onChangeName}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>البريد الإلكتروني</Form.Label>
            <Form.Control
              type="text"
              placeholder="أدخل عنوان بريدك الإلكتروني هنا..."
              value={email}
              onChange={onChangeEmail}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>رقم الهاتف</Form.Label>
            <Form.Control
              type="text"
              placeholder="أدخل رقم هاتفك هنا..."
              value={phone}
              onChange={onChangePhone}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            إلغاء
          </Button>
          <Button onClick={handleUpdateData}>حفظ التعديلات</Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};

export default ProfilePage;
