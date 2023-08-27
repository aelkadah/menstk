import { Row, Col } from "react-bootstrap";
import { LoadingSpinner } from "../..";
import WishlistCard from "./WishlistCard";
import WishlistHook from "../../../hooks/wishlist/WishlistHook";

const WishlistContainer = () => {
  const [loading, wishlist] = WishlistHook();

  return (
    <Row className="justify-content-center">
      {!loading ? (
        wishlist?.length >= 1 ? (
          wishlist?.map((item, index) => {
            return (
              <Col xs={10} sm={6} md={4} lg={3} key={index}>
                <WishlistCard product={item} />
              </Col>
            );
          })
        ) : (
          <h3 className="text-center">لا يوجد منتجات مفضلة حتى الآن</h3>
        )
      ) : (
        <LoadingSpinner />
      )}
    </Row>
  );
};

export default WishlistContainer;
