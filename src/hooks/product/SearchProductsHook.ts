import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchProductsHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pending, setPending] = useState(true);

  const [keyword, setKeyword] = useState("");
  const onChangeKeyword = (e) => setKeyword(e.target.value);

  const handleSearch = async (e) => {
    e.persist();

    if (window.location.pathname != "/search") navigate("/search");
  };

  return [keyword, onChangeKeyword, handleSearch];
};

export default SearchProductsHook;
