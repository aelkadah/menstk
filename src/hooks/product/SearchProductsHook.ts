import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchProducts } from "../../features/productSlice";
import notify from "../../helpers/notify";

const SearchProductsHook = (word) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");
  const onChangeKeyword = (e) => setKeyword(e.target.value);

  useEffect(() => {
    if (word) setKeyword(word);
  }, [word]);

  const handleSearch = async (e) => {
    e.persist();
    if (keyword == "") return notify("من فضلك أدخل ما تريد البحث عنه!", "warn");

    await navigate(`/search/${keyword}`);
    await dispatch(searchProducts([keyword, 10]));
  };

  const loading = useSelector((state) => state.product.loading);
  const products = useSelector((state) => state.product.allProducts?.data);
  const productResults = useSelector(
    (state) => state.product.allProducts.results
  );
  const paginationResult = useSelector(
    (state) => state.product.allProducts?.paginationResult
  );
  let pageCount = 0;
  if (paginationResult) pageCount = paginationResult.numberOfPages;
  const getPage = (page) => dispatch(searchProducts([keyword, 10, page]));

  return [
    keyword,
    onChangeKeyword,
    handleSearch,
    productResults,
    products,
    pageCount,
    getPage,
    loading,
  ];
};

export default SearchProductsHook;
