import { Link } from "react-router-dom";
import { Row, Button } from "react-bootstrap";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import AdminProductsContainer from "../../components/admin/product/AdminProductsContainer";

const AdminProductsPage = () => {
  return (
    <Row className="py-3">
      <Row className="d-flex justify-content-between align-items-center px-3 pb-3">
        <h3 className="w-auto fw-bold m-0 p-0">المنتجات</h3>
        <Button
          className="d-flex align-items-center gap-1"
          to={`/admin/products/add`}
          as={Link}
        >
          <PlusCircleIcon width={"25px"} />
          إضافة منتج جديد
        </Button>
      </Row>

      <AdminProductsContainer />
    </Row>
  );
};

export default AdminProductsPage;
