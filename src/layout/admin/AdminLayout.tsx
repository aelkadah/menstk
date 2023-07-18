import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { AdminSidebar, AdminHeader } from "../../components";

const AdminLayout = () => {
  return (
    <Container fluid className="p-0">
      <Row className="m-0 position-relative">
        <AdminSidebar />
        <Col className="w-auto m-0 p-0">
          <AdminHeader />
          <Row className="m-0">
            <Outlet />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLayout;
