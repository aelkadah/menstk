import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import DeleteProductHook from "../../../hooks/product/DeleteProductHook";

const AdminProductCard = ({ product }) => {
  const [show, handleShow, handleClose, handleDelete] =
    DeleteProductHook(product);

  return (
    <div className="productCard rounded-2 mb-4">
      <div className="prodImg">
        <img src={product?.imageCover} alt="iphone" />
      </div>
      <div>
        <h6 className="fw-normal mb-1 truncate-two">{product?.title} </h6>
        <p className="prodDesc fw-light mb-2">{product?.description}</p>

        <div className="d-flex justify-content-start align-items-center gap-2">
          <div
            className="d-flex justify-content-end align-items-center"
            style={{ direction: "ltr" }}
          >
            <h3 className="fw-bold text-primary mb-1">{product?.price}</h3>
            <div style={{ lineHeight: "0.9" }}>
              <p className="fw-bold text-primary m-0">.99</p>
              <p className="m-0" style={{ fontSize: "10px" }}>
                EGP
              </p>
            </div>
          </div>
          <h6 className="text-decoration-line-through text-black-50 ms-1 me-0 mb-0">
            {product?.price}.00 ج.م
          </h6>
        </div>
        <div className="d-flex justify-content-center gap-2 my-2">
          <Button
            variant="outline-secondary"
            className="d-flex align-items-center gap-1 border border-1 py-2 px-3"
            to={`/admin/products/${product?._id}`}
            as={Link}
          >
            <PencilSquareIcon width={"20px"} />
            تعديل
          </Button>
          <Button
            variant="outline-danger"
            className="d-flex align-items-center gap-1 border border-1 py-2 px-3"
            onClick={handleShow}
          >
            <TrashIcon width={"20px"} />
            حذف
          </Button>
        </div>
      </div>

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
          <Modal.Title className="flex-grow-1">حذف المنتج</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-3">
          <h6 className="m-0">هل انت متأكد من حذف المنتج؟</h6>
          <span className="text-danger">{product?.title}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            إلغاء
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            تأكيد الحذف
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminProductCard;
