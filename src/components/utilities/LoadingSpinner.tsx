import { Container, Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <Container className="d-flex justify-content-center p-5">
      <Spinner variant="primary" />
    </Container>
  );
};

export default LoadingSpinner;
