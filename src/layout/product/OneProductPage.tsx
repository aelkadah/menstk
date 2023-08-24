import { Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ProductImagesGallery from "../../components/product/ProductImagesGallery";
import ProductDetails from "../../components/product/ProductDetails";
import ProductReviews from "../../components/product/ProductReviews";
import OneProductHook from "../../hooks/product/OneProductHook";
import { LoadingSpinner } from "../../components";

const OneProductPage = () => {
  const { id } = useParams();
  const [loading, product] = OneProductHook(id);

  if (product) console.log(product);

  return (
    <Container>
      {!loading ? (
        <Container>
          <Row className="px-2 mt-1 mb-3 d-flex align-items-center text-black-50">
            <Link className="w-auto px-2" to="/">
              الرئيسية
            </Link>
            {">"}
            <Link className="w-auto px-2" to={`/category/${category?._id}`}>
              {product?.category?.name}{" "}
            </Link>
            {">"}
            {/* <Link className="w-auto px-2" to="/subcategory">
              {subcategory?.name}{" "}
            </Link> */}
            {">"}
            <p className="w-auto m-0 px-2 fw-light">{product?.title}</p>
          </Row>

          <Row>
            <ProductImagesGallery product={product} />
            <ProductDetails product={product} />
          </Row>

          <ProductReviews product={product} />
        </Container>
      ) : (
        <LoadingSpinner />
      )}
    </Container>
  );
};

export default OneProductPage;
