import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../features/categorySlice";

const AllCategoriesHook = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.category.loading);
  const results = useSelector((state) => state.category.allCategories.results);
  const categories = useSelector((state) => state.category.allCategories.data);

  const paginationResult = useSelector(
    (state) => state.category.allCategories.paginationResult
  );

  useEffect(() => {
    dispatch(getAllCategories([2]));
  }, []);

  let pageCount = 0;
  if (paginationResult) pageCount = paginationResult.numberOfPages;
  const getPage = (page) => dispatch(getAllCategories([2, page]));

  return [loading, results, categories, pageCount, getPage];
};

export default AllCategoriesHook;
