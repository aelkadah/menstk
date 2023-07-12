import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SecTitle = ({ title, btnText, url }) => {
  return (
    <Row className="d-flex justify-content-between align-items-center">
      <h3 className="fw-bold m-0 w-auto">{title}</h3>
      {btnText ? (
        <Button className="w-auto" variant="outline-primary" to={url} as={Link}>
          تسوق الآن
        </Button>
      ) : null}
    </Row>
  );
};

export default SecTitle;
