import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../features/productSlice";

const AllProductsHook = (limit, sort) => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.product.loading);
  const productResults = useSelector(
    (state) => state.product.allProducts.results
  );
  const products = useSelector((state) => state.product.allProducts.data);

  const paginationResult = useSelector(
    (state) => state.product.allProducts.paginationResult
  );

  useEffect(() => {
    dispatch(getAllProducts([sort, limit]));
  }, [sort]);

  let pageCount = 0;
  if (paginationResult) pageCount = paginationResult.numberOfPages;
  const getPage = (page) => dispatch(getAllProducts([sort, limit, page]));

  return [productResults, products, pageCount, getPage, loading];
};

export default AllProductsHook;
