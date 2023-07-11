import { Col } from "react-bootstrap";
import ImageGallery from "react-image-gallery";

const ProductImagesGallery = ({ images }) => {
  return (
    <Col xs={12} md={6} lg={4} className="mb-4 mb-md-0">
      <ImageGallery
        items={images}
        // thumbnailPosition="left"
        showPlayButton={false}
        isRTL={true}
        infinite={false}
        showNav={false}
        showFullscreenButton={false}
      />
    </Col>
  );
};

export default ProductImagesGallery;
