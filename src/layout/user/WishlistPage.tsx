import { Row } from "react-bootstrap";
import WishlistContainer from "../../components/user/wishlist/WishlistContainer";

const WishlistPage = () => {
  return (
    <Row className="p-3">
      <Row className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="w-auto fw-bold m-0 p-0">المفضلة</h3>
      </Row>

      <WishlistContainer />
    </Row>
  );
};

export default WishlistPage;
