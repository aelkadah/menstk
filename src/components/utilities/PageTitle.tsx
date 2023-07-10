import { Row } from "react-bootstrap";

const PageTitle = ({ title, desc }) => {
  return (
    <Row>
      <h2 className="fw-bold mb-1">{title}</h2>
      {desc ? <p className="text-text-black-50">{desc}</p> : null}
    </Row>
  );
};

export default PageTitle;
