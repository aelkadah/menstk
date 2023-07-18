import { Row } from "react-bootstrap";
import AdminProductsContainer from "../../components/admin/product/AdminProductsContainer";

const AdminProductsPage = () => {
  return (
    <Row className="m-0 p-0 justify-content-center">
      <AdminProductsContainer />
      <Row></Row>
    </Row>
  );
};

export default AdminProductsPage;
