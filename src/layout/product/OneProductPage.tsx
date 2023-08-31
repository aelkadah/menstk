import { Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ProductImagesGallery from "../../components/product/ProductImagesGallery";
import ProductDetails from "../../components/product/ProductDetails";
import ProductReviews from "../../components/product/ProductReviews";
import OneProductHook from "../../hooks/product/OneProductHook";
import { LoadingSpinner } from "../../components";
import OneSubCategoryHook from "../../hooks/subcategory/OneSubCategoryHook";

const OneProductPage = () => {
  const { id } = useParams();
  const [product, loading] = OneProductHook(id);
  const [subcategory] = OneSubCategoryHook(product?.subcategories[0]);

  // if (product) console.log(product);

  return (
    <Container>
      {!loading ? (
        <Container>
          <Row className="px-2 mt-1 mb-3 d-flex align-items-center text-black-50">
            <Link className="w-auto px-2" to="/">
              الرئيسية
            </Link>
            {">"}
            <Link className="w-auto px-2">{product?.category?.name} </Link>
            {">"}
            <Link
              className="w-auto px-2"
              to={`/subcategory/${subcategory?._id}`}
            >
              {subcategory?.name}{" "}
            </Link>
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
