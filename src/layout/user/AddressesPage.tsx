import { Row, Form, Modal, Button } from "react-bootstrap";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import UserAddressesContainer from "../../components/user/address/UserAddressesContainer";
import AddAddressHook from "../../hooks/address/AddAddressHook";

const AddressesPage = () => {
  const [
    show,
    handleShow,
    handleClose,
    alias,
    onChangeAlias,
    city,
    onChangeCity,
    details,
    onChangeDetails,
    postalCode,
    onChangePostalCode,
    phone,
    onChangePhone,
    handleAdd,
  ] = AddAddressHook();

  return (
    <Row className="p-3">
      <Row className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="w-auto fw-bold m-0 p-0">العناوين</h3>
        <Button
          className="d-flex align-items-center gap-1"
          onClick={handleShow}
        >
          <PlusCircleIcon width={"25px"} />
          إضافة عنوان جديد
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header className="d-flex w-100" closeButton>
            <Modal.Title className="flex-grow-1">إضافة عنوان جديد</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-2">
              <Form.Label>نوع العنوان</Form.Label>
              <Form.Control
                type="text"
                placeholder="منزل , مكتب , شركة ,..."
                value={alias}
                onChange={onChangeAlias}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>المدينة</Form.Label>
              <Form.Control
                type="text"
                placeholder="القاهرة , الجيزة , ..."
                value={city}
                onChange={onChangeCity}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>تفاصيل العنوان</Form.Label>
              <Form.Control
                type="text"
                placeholder="رقم المبنى , الشارع , الحي ,..."
                value={details}
                onChange={onChangeDetails}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>الرمز البريدي</Form.Label>
              <Form.Control
                type="text"
                placeholder="11221"
                value={postalCode}
                onChange={onChangePostalCode}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>رقم الهاتف</Form.Label>
              <Form.Control
                type="text"
                placeholder="01012345678"
                value={phone}
                onChange={onChangePhone}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              إلغاء
            </Button>
            <Button onClick={handleAdd}>إضافة العنوان</Button>
          </Modal.Footer>
        </Modal>
      </Row>

      <UserAddressesContainer />
    </Row>
  );
};

export default AddressesPage;
