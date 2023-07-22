import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";

const AddProductPage = () => {
  return (
    <Row className="py-3">
      <Row className="d-flex justify-content-start align-items-center px-3 pb-3">
        <Link className="backBtn" to={`/admin/products`}>
          <ArrowSmallRightIcon width={"20px"} />
        </Link>
        <h3 className="w-auto fw-bold m-0 mb-1 py-0 px-2">إضافة منتج</h3>
      </Row>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ipsam,
        minima reprehenderit earum repellendus voluptatibus fuga aut! Ut facilis
        quasi accusantium, illo laudantium eligendi, atque animi ex, deleniti
        praesentium repellendus? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Fugit ipsam, minima reprehenderit earum repellendus
        voluptatibus fuga aut! Ut facilis quasi accusantium, illo laudantium
        eligendi, atque animi ex, deleniti praesentium repellendus? Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Fugit ipsam, minima
        reprehenderit earum repellendus voluptatibus fuga aut! Ut facilis quasi
        accusantium, illo laudantium eligendi, atque animi ex, deleniti
        praesentium repellendus?
      </p>
    </Row>
  );
};

export default AddProductPage;
