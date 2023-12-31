import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "../../features/productSlice";

const CategoryProductsHook = (category, limit, sort) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (category) dispatch(getProductsByCategory([category, sort, limit]));
  }, [category, sort]);

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
  const getPage = (page) =>
    dispatch(getProductsByCategory([category, sort, limit, page]));

  return [productResults, products, pageCount, getPage, loading];
};

export default CategoryProductsHook;
