import { Container, Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Spinner variant="primary" />
    </Container>
  );
};

export default LoadingSpinner;
