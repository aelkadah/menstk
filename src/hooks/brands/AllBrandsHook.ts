import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "../../features/brandSlice";

const AllBrandsHook = (limit) => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.brand.loading);
  const brandResults = useSelector((state) => state.brand.allBrands.results);
  const brands = useSelector((state) => state.brand.allBrands.data);

  const paginationResult = useSelector(
    (state) => state.brand.allBrands.paginationResult
  );

  useEffect(() => {
    dispatch(getAllBrands([limit]));
  }, []);

  let pageCount = 0;

  if (paginationResult) pageCount = paginationResult.numberOfPages;
  const getPage = (page) => dispatch(getAllBrands([limit, page]));

  return [brandResults, loading, brands, pageCount, getPage];
};

export default AllBrandsHook;
