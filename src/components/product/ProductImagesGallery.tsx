import { Col } from "react-bootstrap";
import ImageGallery from "react-image-gallery";

const ProductImagesGallery = ({ product }) => {
  const images = [
    { original: product?.imageCover, thumbnail: product?.imageCover },
  ];

  if (product)
    product?.images?.map((item) =>
      images.push({ original: item, thumbnail: item })
    );

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
