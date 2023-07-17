import { Container, Row, Col } from "react-bootstrap";
import { AdminSidebar, AdminHeader } from "../../components";

const DashboardPage = () => {
  return (
    <Container fluid>
      <Row>
        <AdminSidebar />
        <Col>
          <AdminHeader />
          <Row>Page Content</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
