import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../features/productSlice";

const AllProductsHook = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.product.loading);
  const results = useSelector((state) => state.product.allProducts.results);
  const products = useSelector((state) => state.product.allProducts.data);

  const paginationResult = useSelector(
    (state) => state.product.allProducts.paginationResult
  );

  useEffect(() => {
    dispatch(getAllProducts([10]));
  }, []);

  let pageCount = 0;
  if (paginationResult) pageCount = paginationResult.numberOfPages;
  const getPage = (page) => dispatch(getAllProducts([10, page]));

  return [loading, results, products, pageCount, getPage];
};

export default AllProductsHook;
