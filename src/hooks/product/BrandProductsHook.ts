import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByBrand } from "../../features/productSlice";

const BrandProductsHook = (brand, limit) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (brand) dispatch(getProductsByBrand([brand, limit]));
  }, [brand]);

  const loading = useSelector((state) => state.product.loading);
  const productResults = useSelector(
    (state) => state.product.allProducts.results
  );
  const products = useSelector((state) => state.product.allProducts.data);
  const paginationResult = useSelector(
    (state) => state.product.allProducts.paginationResult
  );

  let pageCount = 0;
  if (paginationResult) pageCount = paginationResult.numberOfPages;
  const getPage = (page) => dispatch(getProductsByBrand([brand, limit, page]));

  return [productResults, products, pageCount, getPage, loading];
};

export default BrandProductsHook;
