import { Container, Spinner } from "react-bootstrap";

const LoadingSpinner = ({ padd }) => {
  return (
    <Container className={`d-flex justify-content-center py-${padd || 0}`}>
      <Spinner variant="primary" />
    </Container>
  );
};

export default LoadingSpinner;
