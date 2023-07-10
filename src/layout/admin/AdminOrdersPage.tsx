import { Container, Row, Col } from "react-bootstrap";
import AdminSidebar from "../../components/utilities/AdminSidebar";

const AdminOrdersPage = () => {
  return (
    <Container className="adminPanel bg-white" fluid>
      <Container>
        <Row style={{ minHeight: "100vh" }}>
          <AdminSidebar />
          <Col xs={11} md={10} className="bg-white">
            Admin Orders
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AdminOrdersPage;
