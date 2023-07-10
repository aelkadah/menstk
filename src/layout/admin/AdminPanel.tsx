import { Container, Row, Col } from "react-bootstrap";
import AdminSidebar from "../../components/utilities/AdminSidebar";

const AdminPanel = () => {
  return (
    <Container fluid>
      <Container>
        <Row style={{ minHeight: "100vh" }}>
          <AdminSidebar />
          <Col xs={11} md={10} className="bg-white">
            ssss
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AdminPanel;
