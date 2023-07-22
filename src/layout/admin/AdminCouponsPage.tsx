import { useState } from "react";
import { Row, Form, Button, Modal } from "react-bootstrap";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import AdminCouponsContainer from "../../components/admin/coupon/AdminCouponsContainer";

const AdminCouponsPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className="py-3">
      <Row className="d-flex justify-content-between align-items-center px-3 pb-3">
        <h3 className="w-auto fw-bold m-0 p-0">كوبونات الخصم</h3>
        <Button
          className="d-flex align-items-center gap-1"
          onClick={handleShow}
        >
          <PlusCircleIcon width={"25px"} />
          إضافة كوبون خصم
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header
            className="d-flex justify-content-between w-100 "
            closeButton
          >
            <Modal.Title className="flex-grow-1">إضافة كوبون خصم</Modal.Title>
          </Modal.Header>
          <Modal.Body className="py-3">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>كود الكوبون</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="أدخل كود الكوبون هنا..."
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>نسبة الخصم</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="أدخل نسبة الخصم هنا..."
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>تاريخ الإنتهاء</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              إلغاء
            </Button>
            <Button variant="primary">إضافة الكوبون</Button>
          </Modal.Footer>
        </Modal>
      </Row>

      <AdminCouponsContainer />
    </Row>
  );
};

export default AdminCouponsPage;
