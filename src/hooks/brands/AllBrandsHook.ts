import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "../../features/brandSlice";

const AllBrandsHook = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.brand.loading);
  const results = useSelector((state) => state.brand.allBrands.results);
  const brands = useSelector((state) => state.brand.allBrands.data);

  const paginationResult = useSelector(
    (state) => state.brand.allBrands.paginationResult
  );

  useEffect(() => {
    dispatch(getAllBrands());
  }, []);

  let pageCount = 0;

  if (paginationResult) pageCount = paginationResult.numberOfPages;
  const getPage = (page) => dispatch(getAllBrands(page));

  return [loading, results, brands, pageCount, getPage];
};

export default AllBrandsHook;
