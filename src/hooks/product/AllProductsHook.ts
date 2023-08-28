import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../features/productSlice";

const AllProductsHook = (limit) => {
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
    dispatch(getAllProducts([limit]));
  }, []);

  let pageCount = 0;
  if (paginationResult) pageCount = paginationResult.numberOfPages;
  const getPage = (page) => dispatch(getAllProducts([limit, page]));

  return [productResults, products, pageCount, getPage, loading];
};

export default AllProductsHook;
